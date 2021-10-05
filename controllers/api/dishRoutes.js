const router = require("express").Router();
const { Dish, Like } = require("../../models");
const sequelize = require("../../config/config.js");
var Op = require("sequelize").Op;

router.get("/:user_id", async (req, res) => {
    try {
        var dishData = await Dish.findAll(); 
        for (var i = 0; i < dishData.length; i++) {
            dishData[i].dataValues.likeCount = await Like.count({
                where: {
                  dish_id: dishData[i].dataValues.id,
                }
              });
              var userCount = 0;
              if(req.params.user_id){
                userCount = await Like.count({
                  where: {[Op.and]:[{dish_id: dishData[i].dataValues.id}, {user_id: req.params.user_id}]}
                });
              }
              dishData[i].dataValues.userLiked = userCount >= 1;
    }
    
    /*   const dishData = await Dish.findAll({
        attributes: ['*', sequelize.fn('COUNT', sequelize.col('likes.user_id'))], 
        include: [
        
            {
                model: Like,
                attributes: ["user_id", "dish_id"],
            } 
        ], 
    });
    console.log(dishData); */
        res.status(200).json(dishData);
    }  catch (err) {
        res.status(400).json(err);
        console.log(err);
    }
});  

router.post('/:id/like/:user_id', async (req,res) => {
    const action = req.body.action;
  
    if (action === "Like"){
      await Like.create({
        dish_id: req.params.id,
        user_id: req.params.user_id
      });
    } else {
      await Like.destroy({
        where: {[Op.and]:[{dish_id: req.params.id}, {user_id: req.params.user_id}]}
      });
    }
        var likeCount = await Like.count({
        where: {
          dish_id: req.params.id,
        }
      });
      var userCount = 0;
      if(req.params.user_id){
        userCount = await Like.count({
          where: {[Op.and]:[{dish_id: req.params.id}, {user_id: req.params.user_id}]}
        });
      }
    res.status(200).json({likeCount: likeCount, userLiked: userCount >= 1});
  })

router.get(':id/like/:user_id', async (req,res) => {
    const likeCount = await Like.count({
        where: {
          dish_id: req.params.id,
        }
      });
      var userCount = 0;
      if(req.user_id){
        userCount = await Like.count({
          where: {[Op.and]:[{dish_id: req.params.id}, {user_id: req.params.user_id}]}
        });
      }
      res.status(200).json({likeCount: likeCount, userLiked: userCount >= 1})
})

router.get('/like', async (req,res) => {
   try {
    const likeCount = await Like.findAll({
      include: [{ model: Like }],
    });
    res.status(200).json(likeCount);
    console.log(likeCount)
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;