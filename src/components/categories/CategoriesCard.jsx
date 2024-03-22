import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

function CategoriesCard({ imgUrl, categoryName }) {
  return (
    <Link to={`/categories/${categoryName}`}>
      <Card className="mt-6 flex flex-col border justify-center  p-3 cursor-pointer rounded w-96 hover:shadow-xl  hover:opacity-80">
        <CardHeader color="blue-gray" className="relative h-56">
          <img src={imgUrl} alt="card-image" />
        </CardHeader>
        <CardBody>
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-2 text-center">
            {categoryName}
          </Typography>
        </CardBody>
      </Card>
    </Link>
  );
}
export default CategoriesCard;
