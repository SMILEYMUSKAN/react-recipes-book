import { Button } from "antd";

const RecipeDetailsCard = ({ recipeDetails }) => {
  const {
    strYoutube,
    strMealThumb,
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strSource,
  } = recipeDetails || {};

  let ingredients = [];
  Object.keys(recipeDetails).forEach((item, idx) => {
    if (recipeDetails[`strIngredient${idx}`]) {
      ingredients.push({
        ingredient: recipeDetails[`strIngredient${idx}`],
        measure: recipeDetails[`strMeasure${idx}`],
      });
    }
  });

  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  const match = strYoutube.match(regExp);
  const ytVideoId = match && match[7].length === 11 ? match[7] : "";

  const steps = strInstructions
    .split("\r\n\r\n")
    .filter((step) => step.trim() !== "");
  console.log(steps, strInstructions);
  const replacedSteps = steps.map((ste, idx) => ste.replaceAll(idx + 1, " "));

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center card-ui">
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"></link>
      <section className="h-screen w-full flex flex-col  px-4 gap-6 mt-6 rounded">
        <header className="flex items-center justify-between w-full">
          <h1 className="text-4xl font-medium">{strMeal}</h1>
          <div className="flex gap-4">
            <h2 className="text-2xl">Category: {strCategory}</h2>
            <h2 className="text-2xl ">Cuisine: {strArea}</h2>
          </div>
        </header>
        <section className="mx-auto">
          <iframe
            width="760"
            height="415"
            src={`https://www.youtube.com/embed/${ytVideoId}?si=JdEj4ZbsrHdTMFxw`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="rounded"></iframe>
        </section>

        <div className="flex justify-center px-2 items-center gap-2 w-full ">
          <aside
            style={{
              backgroundImage: `url(${strMealThumb})`,
              backgroundSize: "cover",
            }}
            className="rounded-lg h-[32rem]  overflow-hidden  left-aside-bar-ui">
            <a
              target="_blank"
              href={strSource}
              className="relative m-4 inline-block">
              <Button className="font-medium bg-white">
                Visit Site
                <i className="bx bxs-right-top-arrow-circle absolute right-0 top-0"></i>
              </Button>
            </a>
          </aside>
          <section
            style={{ backgroundColor: "#48cae4" }}
            className="rounded-lg h-[32rem] flex flex-col   items-center middle-container-ui  overflow-y-auto
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:bg-white
            [&::-webkit-scrollbar-thumb]:bg-gray-300
            [&::-webkit-scrollbar-thumb]:rounded
            dark:[&::-webkit-scrollbar-track]:bg-slate-100
            dark:[&::-webkit-scrollbar-thumb]:bg-slate-300">
            <div className="flex flex-col gap-4 p-8">
              <h1 className="text-3xl">Ingredients</h1>

              <ul className="text-xl list-disc flex flex-col gap-1">
                {ingredients.map((obj, idx) => (
                  <li key={idx}>
                    {obj.measure} {obj.ingredient}
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <aside
            style={{ backgroundColor: "#00b4d8" }}
            className="rounded-lg h-[32rem] p-6 flex flex-col gap-4 right-aside-bar-ui overflow-y-auto
[&::-webkit-scrollbar]:w-2
[&::-webkit-scrollbar-track]:bg-white
[&::-webkit-scrollbar-thumb]:bg-gray-300
[&::-webkit-scrollbar-thumb]:rounded
dark:[&::-webkit-scrollbar-track]:bg-slate-100
dark:[&::-webkit-scrollbar-thumb]:bg-slate-300">
            <h2 className="text-2xl">Instructions: </h2>
            {replacedSteps.map((step, index) => (
              <div key={index}>
                <p className="text-xl mb-2">Step {index + 1}:</p>
                <p className="text-lg">{step.trim()}</p>
              </div>
            ))}
          </aside>
        </div>
        <div className="invisible">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          tenetur, velit natus exercitationem, esse officia dolorem sed ipsam
          repellendus ad quaerat nihil quisquam autem explicabo alias est illo
          dolor sit?
        </div>
      </section>
    </div>
  );
};

export default RecipeDetailsCard;
