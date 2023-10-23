"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    const keyword = searchRef.current.value;
    if (keyword) {
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <>
      <div className="relative">
        <input
          type="text"
          placeholder="cari anime.."
          className="p-2 rounded w-full"
          ref={searchRef}
          onKeyDown={(e) => {
            e.key === "Enter" && handleSearch(e);
          }}
        />
        <button className="absolute top-2 right-2" onClick={handleSearch}>
          <MagnifyingGlass size={24} />
        </button>
      </div>
    </>
  );
};

export default InputSearch;
