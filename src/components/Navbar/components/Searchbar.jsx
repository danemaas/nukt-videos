import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `/search?q=${searchTerm}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="group flex gap-1 justify-between bg-white text-black
     w-[50%] md:w-[30rem] rounded-md overflow-hidden"
    >
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search movies and videos"
        className="w-full ps-[1rem] outline-none border-0"
      />
      <Link
        to={`/search?q=${searchTerm}`}
        className="px-[.5rem] py-[.5rem] group-hover:bg-[#00ffff]"
      >
        <BiSearch size="1.5rem" />
      </Link>
    </form>
  );
};
