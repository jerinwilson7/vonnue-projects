import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchOrder = () => {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!query) return;

    navigate(`/order/${query}`);
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm placeholder:text-stone-400 sm:focus:w-72 focus:ring-yellow-500 focus:ring-opacity-50 focus:outline-none sm:w-64 transition-all duration-300"
      />
    </form>
  );
};

//
