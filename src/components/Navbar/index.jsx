import Link from "next/link";
import InputSearch from "./inputSearch";

const Navbar = () => {
  return (
    <>
      <header className="bg-color-accent">
        <div className="flex md:flex-row flex-col gap-2 justify-between p-4 md:items-center">
          <Link href="/" className="font-bold text-2xl">
            YOURANIMELIST
          </Link>
          <InputSearch />
        </div>
      </header>
    </>
  );
};

export default Navbar;
