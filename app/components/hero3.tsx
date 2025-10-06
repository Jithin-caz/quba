import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = ["web & app dev","OS installation","3D simulations","3D printing"];

  return (
    <div className="min-h-dvh overflow-clip grid grid-rows-[1fr_auto] relative p-2">
      <div
        className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 relative"
        style={{
          background: "url('https://i.pinimg.com/736x/0e/05/fe/0e05fea50a9946a8a0dfbe612701d002.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dim overlay for the entire grid */}
        <div className="absolute inset-0 bg-black opacity-75 pointer-events-none" />

        {/* Video Column */}
        <div className="col-span-1 h-full w-full relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover p-5 "
          >
            <source src="/video/video_bg2.mp4" type="video/mp4" className=" rounded-5"/>
            Your browser does not support the video tag.
          </video>
          <div className="absolute top-0 left-0 w-full h-full"></div>
        </div>
        {/* Text Content Column */}
        <div className="col-span-1 flex justify-center items-center p-4 relative">
          <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-600 flex flex-col gap-10 relative z-10">
            <h1 className="text-white text-8xl bebas-neue-regular">Verza Tech</h1>
            <div className="flex flex-col gap-5">
              <div>
                <span className=" text-2xl">We do</span>
                <span
                  style={{
                    display: "inline-block",
                    minWidth: `${Math.max(...words.map((w) => w.length))}ch`,
                    verticalAlign: "bottom",
                  }}
                >
                  <FlipWords words={words} />
                </span>
              </div>
              <a
                href="#contact"
                className="bg-blue-600 text-2xl text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition-all shadow-sm w-fit"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Row */}
     
    </div>
  );
}