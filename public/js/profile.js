const imageForm = document.querySelector("#imageForm");
const imageInput = document.querySelector("#imageInput");
var imageUrl;

imageForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  let file = imageInput.files[0];

  console.log(file);
  if (file !== undefined) {
    const { url } = await fetch("/s3Url").then((res) => res.json());
    console.log(url);

    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "image/jpeg",
      },
      body: file,
    });

    imageUrl = url.split("?")[0];
    console.log(imageUrl);

    newFormHandler();
  } else {
    console.log("successful empty file");

    imageUrl =
      "https://static.wixstatic.com/media/79252d_03581aef9c324a42b48c22cd6fb9c9c7.jpg/v1/fill/w_388,h_382,al_c,lg_1,q_80/79252d_03581aef9c324a42b48c22cd6fb9c9c7.webp";
    console.log(imageUrl);

    newFormHandler();
  }
});

const newFormHandler = async () => {

  const name = document.querySelector("#recipe-name").value.trim();
  let visibility = document.querySelector('input[name="visibility"]:checked').value;
  console.log(visibility);
  let category = document.querySelector('input[name="Category"]:checked').value;
  const description = document.querySelector("#recipe-desc").value.trim();
  const ingredients = document
    .querySelector("#recipe-ingredients")
    .value.trim();
  const directions = document.querySelector("#recipe-directions").value.trim();
  const recipeObj = {
    recipe_name: name,
    visibility: visibility,
    ingredients: ingredients,
    directions: directions,
    description: description,
    category_id: category,
    url: imageUrl,
  };

  console.log(recipeObj);

  const response = await fetch("/api/tables", {
    method: "POST",
    body: JSON.stringify(recipeObj),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/profile");
  } else {
    alert("Failed to sign up");
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    console.log(id);

    const response = await fetch(`api/tables/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to delete recipe");
    }
  }
};

document
  .querySelector(".recipe-list")
  .addEventListener("click", delButtonHandler);
