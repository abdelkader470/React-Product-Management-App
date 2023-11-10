import { IProduct } from "../interfaces";
import { txtSlicer } from "../utiles/fuction";
import CircleColor from "./CircleColor";
import Image from "./Image";

import Button from "./ui/Button";

interface IProps {
  product: IProduct;
  setProductToEdit: (product: IProduct) => void;
  openEditModal: () => void;
  idx: number;
  setProductToEditIdx: (value: number) => void;
}

const ProductCard = ({
  product,
  setProductToEdit,
  openEditModal,
  setProductToEditIdx,
  idx,
}: IProps) => {
  const { title, description, imageURL, price, category, colors } = product;
  /*---------- RENDER---------------*/
  const renderProductColor = colors.map((color) => (
    <CircleColor key={color} color={color} />
  ));

  const onEdit = () => {
    setProductToEdit(product);
    openEditModal();
    setProductToEditIdx(idx);
  };
  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col space-y-3">
      <Image
        imageUrl={imageURL}
        alt="productName"
        className="rounded-md h-52 w-full lg:object-cover"
      />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-500 break-words">
        {txtSlicer(description)}
      </p>
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
      <div className="flex items-center justify-between space-x-2">
        <Button onClick={onEdit} className="bg-indigo-700 " width="w-full">
          EDIT
        </Button>
        <Button className="bg-red-700 ">DELETE</Button>
      </div>
    </div>
  );
};

export default ProductCard;
