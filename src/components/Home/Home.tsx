import { useRef, useState } from "react";
import { ProductList } from "../ProductList/ProductList";
import { Search } from "../Search/Search";
import { TypeLearn } from "../TypeLearn/TypeLearn";

const Home = () => {
  const [searchText, setSearchText] = useState<string>("");
  const timeRef = useRef<number | null>(null);
  const handleSearchInputRef = (text: string) => {
    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }

    timeRef.current = setTimeout(() => {
      setSearchText(text);
    }, 500);
  };
  return (
    <div>
      <p>Home</p>

      <Search handleSearchInputRef={handleSearchInputRef} />
      <ProductList searchText={searchText} />
      <hr />
      <TypeLearn />
    </div>
  );
};

export default Home;
