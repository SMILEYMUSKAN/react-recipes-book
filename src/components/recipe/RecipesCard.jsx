import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

function RecipeCard({ imgUrl, recipeName, category }) {
  return (
    <Link to={`/categories/${category}/${recipeName}`}>
      <Card className="mt-6 h-96 w-96 border flex flex-col gap-6 hover:cursor-pointer hover:shadow-2xl hover:opacity-80">
        <CardHeader color="blue-gray" className="relative h-64">
          <img src={imgUrl} alt="card-image" />
        </CardHeader>
        <CardBody className="flex flex-col justify-center items-center">
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {recipeName}
          </Typography>
        </CardBody>
      </Card>
    </Link>
  );
}
export default RecipeCard;
