
'use client';
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from 'next/image'


function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer">
     
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section">
          
          <section className="relative w-full h-screen">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/image.png"
          alt="Family"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-12">
        <div className="relative w-[300px] h-[330px] flex justify-between flex-col  bottom-0 left-0  bg-white bg-opacity-20 backdrop-blur-sm p-8 ">

          <p className="mt-2 text-sm text-white">
            You can use Fluid as an assistant to save time – and save your sanity.
          </p>
          <h2 className="text-3xl font-light text-white">Time for Work</h2>

        </div>

        <div className="absolute w-full flex justify-center gap-[400px] mb-[150px] items-center ">
          <button className="bg-gray-500 bg-opacity-50 p-3 rounded-full">
            <span className="text-black text-2xl">&larr;</span>
          </button>

          <button className="bg-gray-500 bg-opacity-50 p-3 rounded-full">
            <span className="text-black text-2xl">&rarr;</span>
          </button>
        </div>

        <div className="flex space-x-2 mt-4">
          <span className="w-3 h-3 bg-white rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        </div>
      </div>
    </section>
          </div>
          <div className="scroll-section">
          <section className="relative w-full h-screen">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/image2.png"
          alt="Family"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-12">
        <div className="relative w-[300px] h-[330px] flex justify-between flex-col  bottom-0 left-0  bg-white bg-opacity-20 backdrop-blur-sm p-8 ">

          <p className="mt-2 text-sm text-white">
            You can use Fluid as an assistant to save time – and save your sanity.
          </p>
          <h2 className="text-3xl font-light text-white">Time for family</h2>

        </div>

        <div className="absolute w-full flex justify-center gap-[400px] mb-[150px] items-center ">
          <button className="bg-gray-500 bg-opacity-50 p-3 rounded-full">
            <span className="text-black text-2xl">&larr;</span>
          </button>

          <button className="bg-gray-500 bg-opacity-50 p-3 rounded-full">
            <span className="text-black text-2xl">&rarr;</span>
          </button>
        </div>

        <div className="flex space-x-2 mt-4">
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-white rounded-full"></span>

          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        </div>
      </div>
    </section>

          </div>
          <div className="scroll-section">
          <section className="relative w-full h-screen">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/image3.png"
          alt="Family"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-12">
        <div className="relative w-[300px] h-[330px] flex justify-between flex-col  bottom-0 left-0  bg-white bg-opacity-20 backdrop-blur-sm p-8 ">

          <p className="mt-2 text-sm text-white">
            You can use Fluid as an assistant to save time – and save your sanity.
          </p>
          <h2 className="text-3xl font-light text-white">Time for Friends</h2>

        </div>

        <div className="absolute w-full flex justify-center gap-[400px] mb-[150px] items-center ">
          <button className="bg-gray-500 bg-opacity-50 p-3 rounded-full">
            <span className="text-black text-2xl">&larr;</span>
          </button>

          <button className="bg-gray-500 bg-opacity-50 p-3 rounded-full">
            <span className="text-black text-2xl">&rarr;</span>
          </button>
        </div>

        <div className="flex space-x-2 mt-4">
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-white rounded-full"></span>

        </div>
      </div>
    </section>

          </div>

        </div>
      </div>
    </section>
  );
}

export default ScrollSection;