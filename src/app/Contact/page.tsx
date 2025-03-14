import Navbar from "@/components/myui/Navbar";
import Link from "next/link";
import { UserData } from "../../../public/data/config";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import icon from "../favicon.ico";
import { Metadata } from "next";

export const metadata: Metadata ={
  title: 'Contact'
}

export default function Contact() {
  return (
    <>
      <Navbar />
      <main
        className={`flex p-2 lg:px-32 lg:py-20 h-10 w-screen flex-col transition-all duration-1000 animate-fadein`}
      >
        <div
          className={`flex flex-col lg:flex-row lg:justify-normal justify-center items-center`}
        >
          <section className="lg:w-1/2 p-10">
            <p className="text-6xl lg:text-7xl font-bold">
              Impressed with my work?
            </p>
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
          </section>
          <section className="flex flex-1 justify-center items-center w-auto">
            <div className="animate-flip">
              <Image
                src={icon}
                height={1}
                width={400}
                className=" object-cover rounded-full shadow-2xl shadow-black"
                alt="thumbnail"
                draggable={false}
              />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
