import Link from "next/link";

export default function Notfound() {
    return (
        <div className="h-screen w-screen flex justify-center items-center flex-col gap-4">
        <h1 className="font-bold ">404 not found</h1>
        <Link
            className="transition ease-in-out hover:scale-105 active:scale-95 flex px-8 py-4 cursor-pointer bg-[#DC2654] rounded-full text-white"
            href='/'
        >Back to home</Link>
    </div>
    );
  }
