import ProductCard from "./components/ProductCard";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import Modal from "./components/ui/modal";
import { colors, formInputsList, productList } from "./data";
import { ChangeEvent, useState, FormEvent } from "react";
import { IProduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMessage from "./components/ErrorMessage";
import CircleColor from "./components/CircleColor";
import { v4 as uuid } from "uuid";
const App = () => {
  const defaultProductObj = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };
  /*---------- STATE---------------*/
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [products, setProducts] = useState<IProduct[]>(productList);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });
  const [tempColors, setTempColors] = useState<string[]>([]);
  /*---------- HANDLER---------------*/
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const onchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const onCancel = () => {
    console.log("cancelled");
    setProduct(defaultProductObj);
    closeModal();
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, price, imageURL } = product;
    const errors = productValidation({
      title,
      description,
      price,
      imageURL,
    });
    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");
    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }
    setProducts((prev) => [
      { ...product, id: uuid(), colors: tempColors },
      ...prev,
    ]);
    setProduct(defaultProductObj);
    setTempColors([]);
    closeModal();
  };

  /*---------- RENDER---------------*/
  const renderProductList = products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  const renderformInputsList = formInputsList.map((input) => (
    <div className="flex flex-col" key={input.id}>
      <label
        className="mb-[2px] text-sm font-medium text-gray-700"
        htmlFor={input.id}
      >
        {input.label}
      </label>
      <Input
        type="text"
        id={input.id}
        name={input.name}
        value={product[input.name]}
        onChange={onchangeHandler}
      />
      <ErrorMessage msg={errors[input.name]} />
    </div>
  ));
  const renderProductColor = colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
      onClick={() => {
        if (tempColors.includes(color)) {
          setTempColors((prev) => prev.filter((item) => item !== color));
          return;
        }
        setTempColors((prev) => [...prev, color]);
      }}
    />
  ));
  return (
    <main className="container ">
      <Button
        className="block bg-indigo-700 hover:bg-indigo-800 mx-auto my-10 px-10 font-medium "
        onClick={openModal}
        width="w-fit"
      >
        ADD PRODUCT
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-5  rounded-md gap-2 md:gap-4 p-2 ">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="ADD A NEW PRODUCT">
        <div className="space-y-3">
          {renderformInputsList}
          <div className="flex space-x-1 flex-wrap my-4 items-center">
            {tempColors.map((color) => (
              <span
                className="p-1 mr-1 mb-1 text-xs rounded-md text-white"
                key={color}
                style={{
                  backgroundColor: color,
                }}
              >
                {color}
              </span>
            ))}
          </div>
          <div className="flex space-x-1 flex-wrap my-4 items-center">
            {renderProductColor}
          </div>

          <form
            className="flex items-center space-x-3"
            onSubmit={submitHandler}
          >
            <Button className="bg-indigo-700 hover:bg-indigo-800">
              Submit
            </Button>
            <Button className="bg-red-700 hover:bg-red-600" onClick={onCancel}>
              Cancel
            </Button>
          </form>
        </div>
      </Modal>
    </main>
  );
};

export default App;
