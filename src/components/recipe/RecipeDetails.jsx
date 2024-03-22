import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import RecipeDetailsCard from "./RecipeDetailsCard";
import { Spin } from "antd";

const RecipeDetails = () => {
  const { recipeName } = useParams();
  const [recipeDetails, setRecipeDetails] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipeDetails(data);
        setLoading(false);
      })
      .catch(console.log);
  }, []);
  console.log(recipeDetails, "LOG");

  if (recipeDetails?.meals === null) {
    return (
      <div className="flex justify-center items-center ">
        <img
          src="https://cdn.dribbble.com/users/718859/screenshots/3267029/jisunpark_404-error.gif"
          alt="not-found-gif"
          width="700"
        />
      </div>
    );
  }
  return (
    <div className="h-full w-full flex items-center justify-center recipe-details-ui">
      {loading ? (
        <div className="mt-52">
          <Spin />
        </div>
      ) : (
        <>
          {recipeDetails?.meals?.length === 1 ? (
            recipeDetails?.meals?.map((recipeObj, idx) => (
              <RecipeDetailsCard recipeDetails={recipeObj} key={idx} />
            ))
          ) : (
            <div className="mt-52">
              <h1 className="text-3xl">
                Sorry this page is currently unavailable!
              </h1>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default RecipeDetails;
