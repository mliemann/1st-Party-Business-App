import React, { useState, useEffect } from "react";
import { ResponsiveContainer, XAxis, YAxis, CartesianGrid, Legend, Tooltip, BarChart, Bar} from "recharts";
import './stats.css';
import API from "../../utils/API";



// const barChartData = [
//   {
//     dish: "eggplant al vapor",
//     likes: 120
//   },
//   {
//     dish: "au poivre a la mexicana",
//     likes: 20
//   },
//   {
//     dish: "grilled pork chop",
//     likes: 140
//   },
//   {
//     dish: "pescado enacahuatado",
//     likes: 40
  
//   },
//   {
//     dish: "alambre",
//     likes : 150
//   },
//   {
//     dish: "hongo asado",
//     likes: 180
//   },
//   {
//     dish: "esquites en ceniza",
//     likes: 50
//   },
//   {
//     dish: "suadreo tacos",
//     likes: 150
//   }
// ];

const Stats= () => {
 const [barChartData, setBarChartData] = useState({});

useEffect(() => {
   API.getDishes().then((res) => {
     var chartData = [];
     for (var i = 0; i < res.data.length; i++) {
       chartData.push({
         dish: res.data[i].dish,
         likes: res.data[i].likeCount
       })
     }
    setBarChartData(chartData);
   });
}, []);

console.log(barChartData)


    return (
    <div className="chartcontainer" > 
      <React.Fragment>
    <h3 id="chartHeader">favorite dishes</h3>
    <ResponsiveContainer width="100%" aspect={2}>
     <BarChart data= {barChartData} id="barChartData">
       <CartesianGrid strokeDasharray="2 2"/>
       <Tooltip />
       <Bar dataKey="likes" fill="#25335a" />
       <XAxis dataKey ="dish"  interval="preserveStartEnd"/>
       <YAxis />
       <Legend />
     </BarChart>
    </ResponsiveContainer>
  </React.Fragment></div>
   
   
    );
}
export default Stats