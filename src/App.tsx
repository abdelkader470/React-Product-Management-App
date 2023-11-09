import ProductCard from "./components/ProductCard";
import { productList } from "./data";

const App = () => {
  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  return (
    <main className="container ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-5  rounded-md gap-2 md:gap-4 p-2 ">
        {renderProductList}
      </div>
    </main>
  );
};

export default App;
