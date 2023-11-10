import { IProduct } from "../interfaces";
import { txtSlicer } from "../utiles/fuction";
import CircleColor from "./CircleColor";
import Image from "./Image";

import Button from "./ui/Button";

interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  const { title, description, imageURL, price, category, colors } = product;
  /*---------- RENDER---------------*/
  const renderProductColor = colors.map((color) => (
    <CircleColor key={color} color={color} />
  ));
  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col">
      <Image
        imageUrl={imageURL}
        alt="productName"
        className="rounded-md mb-2 h-52 w-full lg:object-cover"
      />
      <h4>{title}</h4>
      <p>{txtSlicer(description)}</p>
      <div className="flex space-x-1 flex-wrap my-4 items-center">
        {renderProductColor}
      </div>
      <div className="flex justify-between items-center">
        <span className="text-indigo-600">${price}</span>
        <Image
          imageUrl={category.imageURL}
          alt={category.name}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
      <div className="flex space-x-2 justify-between items-center mt-2">
        <Button
          onClick={() => console.log("clicked")}
          className="bg-indigo-700 "
          width="w-full"
        >
          EDIT
        </Button>
        <Button className="bg-red-700 ">DELETE</Button>
      </div>
    </div>
  );
};

export default ProductCard;
