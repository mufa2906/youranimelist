import { FileSearch } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <div className="text-color-primary min-h-screen max-w-xl mx-auto flex justify-center items-center">
        <div className="flex justify-center items-center gap-4 flex-col">
          <FileSearch size={64} className="" />
          <h3 className="text-4xl">NOT FOUND</h3>
          <Link href='/' className="hover:text-color-accent hover:underline" >BACK TO HOME</Link>
        </div>
      </div>
    </>
  );
};

export default Page;
