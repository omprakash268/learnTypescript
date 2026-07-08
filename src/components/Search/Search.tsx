import { useState } from "react";
type ButtonProps = {
  handleSearchInputRef: (e: string) => void;
};

export const Search = ({ handleSearchInputRef }: ButtonProps) => {

  const [searchText, setSearchText] = useState<string>("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    handleSearchInputRef(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type here..."
        value={searchText}
        onChange={handleOnChange}
      />
    </div>
  );
};
