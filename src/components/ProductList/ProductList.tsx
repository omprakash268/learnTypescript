import { useEffect, useState } from "react";
import type { IRecipe } from "../../Model/Model.interface";

export const ProductList = ({ searchText }: { searchText: string }) => {
  const [products, setProducts] = useState<Array<IRecipe>>([]);

  const fetchProducts = async (searchText: string) => {
    await fetch(`https://dummyjson.com/recipes/search?q=${searchText}`)
      .then((data) => data.json())
      .then((data) => {
        setProducts(data.recipes);
      });
  };

  useEffect(() => {
    fetchProducts(searchText);
  }, [searchText]);

  return (
    <div style={{height:"15rem",width:"20rem",overflowX:"auto"}}>
      {products.map((item: IRecipe) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </div>
  );
};
