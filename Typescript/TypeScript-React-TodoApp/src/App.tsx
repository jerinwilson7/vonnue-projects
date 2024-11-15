import "./App.css";
import ImageHeader from "./components/ImageHeader";
import React, { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import { items } from "./types/utils";
import ItemList from "./components/ItemList";

function App() {
  const [items, setItems] = useState<items[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setItems((prev) => [
      ...prev,
      { title: inputValue, id: Date.now().toString() },
    ]);
    setInputValue("");
  };

  return (
    <div className="  h-[100vh] flex flex-col justify-center items-center">
      <ImageHeader />

      <div className="w-[360px] ">
        <form className="mb-5" onSubmit={handleSubmit}>
          <Input
            type="text"
            inputValue={inputValue}
            setInputValue={setInputValue}
            className="w-full rounded-sm mb-2 p-2 bg-gray-400"
          />

          <Button className="bg-gray-700 w-full p-1.5">Add</Button>
        </form>
        <div className=" h-52 overflow-y-auto">
          <ItemList items={items} setItems={setItems} />
        </div>
      </div>
    </div>
  );
}

export default App;
