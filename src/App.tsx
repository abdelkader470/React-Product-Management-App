import ProductCard from "./components/ProductCard";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import Modal from "./components/ui/modal";
import { formInputsList, productList } from "./data";
import { ChangeEvent, useState, FormEvent } from "react";
import { IProduct } from "./interfaces";
import { productValidation } from "./validation";

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
  /*---------- HANDLER---------------*/
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const onchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };
  const onCancel = () => {
    console.log("cancelled");
    setProduct(defaultProductObj);
    closeModal();
  };
  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const errors = productValidation({
      title: product.title,
      description: product.description,
      price: product.price,
      imageURL: product.imageURL,
    });
    console.log(errors);
  };

  /*---------- RENDER---------------*/
  const renderProductList = productList.map((product) => (
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
    </div>
  ));

  return (
    <main className="container ">
      <Button className="bg-indigo-700 hover:bg-indigo-800" onClick={openModal}>
        ADD
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-5  rounded-md gap-2 md:gap-4 p-2 ">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="ADD A NEW PRODUCT">
        <div className="space-y-3">
          {renderformInputsList}
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
