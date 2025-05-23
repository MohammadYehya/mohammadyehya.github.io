import Navbar from "@/components/myui/Navbar";
import { MyResume } from "../../../public/data/config";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Metadata } from "next";

export const metadata: Metadata ={
  title: 'Resume'
}

export default function Resume() {
  return (
    <div className="h-screen">
      <Navbar />
      <ScrollArea className="h-[calc(100%-45px)] animate-fadein">
        <main
          className={`my-10 flex flex-col w-full justify-center items-center transition-all duration-1000`}>
          <h1 className="text-7xl font-bold mb-8">Resume</h1>
          <iframe
            src={MyResume.resumePath}
            className="w-[70%] h-screen border shadow-black shadow-2xl"
          ></iframe>
        </main>
      </ScrollArea>
    </div>
  );
}
