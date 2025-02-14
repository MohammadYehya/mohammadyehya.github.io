"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/myui/Navbar";
import { MyResume } from "../../../public/data/config";

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
          src={MyResume.resumePath}
          className="w-[70%] h-screen border shadow-black shadow-2xl"
        ></iframe>
      </div>
    </>
  );
}
