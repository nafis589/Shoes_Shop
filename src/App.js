import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";
import data from "./db/data";
import Card from "./components/Card";

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [query, setQuery] = useState("");
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };
  const filterItems = data.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1
  );
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };
  function filteredData(data, selected, query) {
    let filteredProducts = data;
    if (query) {
      filteredProducts = filterItems;
    }
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }
    return filteredProducts.map(
      ({ img, title, price, star, reviews, newPrice, prevPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      )
    );
  }
  const result = filteredData(data, selectedCategory, query);
  return (
    <>
      <Sidebar
        handleChange={handleChange}
        isVisible={isSidebarVisible}
        setIsSidebarVisible={setIsSidebarVisible}
      />
      <Navigation
        query={query}
        handleInputChange={handleInputChange}
        toggleSidebar={toggleSidebar}
      />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default App;
