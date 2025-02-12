"use client";
import Navbar from "@/components/myui/Navbar";
import Link from "next/link";
import { useEffect, useState } from "react";
import { UserData } from "../../../public/data/config";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(true);
  }, []);
  return (
    <>
      <Navbar />
      <div
        className={`flex p-2 lg:px-40 lg:py-28 h-10 w-screen flex-col transition-all duration-1000 ${
          open ? "opacity-100 " : "opacity-0 "
        }`}
      >
        <div
          className={`flex flex-col lg:flex-row lg:justify-normal justify-center items-center`}
        >
          <div className="lg:w-1/2 p-10">
            <p className="text-6xl lg:text-7xl font-bold">Impressed with my work?</p>
            <div className="mt-10 border rounded-xl p-4 w-full">
              <div className="text-3xl font-bold mb-2">Contact me!</div>
              <div className="flex p-2">
                <Mail className="mr-2" />
                <Link
                  className="rounded-full "
                  href={`mailto:${UserData.email}`}
                >
                  {UserData.email}
                </Link>
              </div>
              <div className="flex p-2">
                <Phone className="mr-2" />
                {UserData.phone}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
