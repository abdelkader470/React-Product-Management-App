import ProductCard from "./components/ProductCard";
import Button from "./components/ui/Button";
import Modal from "./components/ui/modal";
import { productList } from "./data";
import { useState } from "react";

const App = () => {
  /*---------- STATE---------------*/
  const [isOpen, setIsOpen] = useState(false);
  /*---------- HANDLER---------------*/
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  /*---------- RENDER---------------*/
  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
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
        <div className="flex items-center space-x-3">
          <Button className="bg-indigo-700 hover:bg-indigo-800">Submit</Button>
          <Button className="bg-red-700 hover:bg-red-600">Cancel</Button>
        </div>
      </Modal>
    </main>
  );
};

export default App;
