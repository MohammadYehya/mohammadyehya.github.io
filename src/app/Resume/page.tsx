"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/myui/Navbar";

export default function Resume() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(true);
  }, []);
  return (
    <>
      <Navbar />
      <div
        className={`my-10 flex flex-col w-full justify-center items-center transition-all duration-1000 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-7xl font-bold mb-8">Resume</h1>
        <iframe
          src="/data/MohammadYehyaHayati_Resumev2.01.pdf"
          className="w-[70%] h-screen border shadow-black shadow-2xl"
        ></iframe>
      </div>
    </>
  );
}
