import Navbar from "@/components/myui/Navbar";
import { MyEducations } from "../../../public/data/config";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Award, CalendarClock, CirclePlus, MapPin } from "lucide-react";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education",
};

export default function Education() {
  return (
    <div className="h-screen">
      <Navbar />
      <ScrollArea className="h-[calc(100%-45px)] animate-fadein">
        <div className="w-full flex justify-center">
          <div
            className={`my-10 w-full lg:w-[70%] flex flex-col justify-center items-center transition-all duration-1000 lg:gap-y-0 gap-y-3`}
          >
            <h1 className="lg:text-7xl text-5xl font-bold mb-8">Education</h1>
            {MyEducations.content.map((details, index) => (
              <div
                className="flex even:flex-row odd:flex-row-reverse w-full justify-center lg:p-0 p-2"
                key={index}
              >
                <Card className="flex flex-1 h-auto shadow-2xl border-slate-300 p-6 hover:scale-110 transition-all duration-500">
                  <div className="mr-4">
                    <Image
                      src={details.logo}
                      alt=""
                      width={50}
                      height={1}
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold text-lg mt-2 flex">
                      {details.title}
                    </div>
                    <Separator className="mt-1 mb-3" />
                    <div className="text-sm text-slate-500 flex items-center mb-2">
                      <MapPin className="scale-[70%]" />
                      {details.location}
                    </div>
                    <div className="text-sm text-slate-500 flex items-center mb-2">
                      <CalendarClock className="scale-[70%]" />
                      {details.startDate} - {details.endDate}
                    </div>
                    {details.desc && (
                      <div className="text-sm text-slate-500 flex items-center mb-4">
                        <Award className="scale-[80%]" />
                        {details.desc}
                      </div>
                    )}
                  </div>
                </Card>
                <div className="lg:flex lg:flex-col items-center mx-4 hidden ">
                  <Separator
                    orientation="vertical"
                    className="flex flex-1 bg-slate-400"
                  />
                  <CirclePlus />
                  <Separator
                    orientation="vertical"
                    className="flex flex-1 bg-slate-400"
                  />
                </div>
                <Card className="lg:flex lg:flex-1 opacity-0 hidden p-6"></Card>
              </div>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
