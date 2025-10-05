import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = ["web & app dev","OS installation","3D simulations","3D printing"];

  return (
    <div className="h-dvh overflow-clip grid grid-rows-[1fr_auto] relative">
      <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2">
        {/* Video Column */}
        <div className="col-span-1 h-full w-full relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/video/video_bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute top-0 left-0 w-full h-full"></div>
        </div>
        {/* Text Content Column */}
        <div className="col-span-1 flex justify-center items-center p-4">
          <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-700 flex flex-col gap-10">

            <h1 className="text-white text-7xl">Verza Tech</h1>
            <div className="flex flex-col gap-5">
              <div>
                We do
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