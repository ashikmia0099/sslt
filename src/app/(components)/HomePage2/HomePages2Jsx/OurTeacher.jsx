'use client'
import React from 'react'
import { motion } from "motion/react";
import { LampContainer } from "../../../../components/ui/lamp";
import { AuroraText } from '../../../../components/magicui/aurora-text'



import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../../../../components/ui/tracing-beam"




const dummyContent = [
    {
      title: "College Ceremony 2024 In Dhaka Medical Collage",
      description: (
        <>
          <p>
            Sit duis est minim proident non nisi velit non consectetur. Esse
            adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
            Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
            incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
            fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
            nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
            occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
            officia sint labore. Tempor consectetur excepteur ut fugiat veniam
            commodo et labore dolore commodo pariatur.
          </p>
          <p>
            Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
            veniam in commodo id reprehenderit adipisicing. Proident duis
            exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
          </p>
          <p>
            Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
            reprehenderit deserunt amet laborum consequat adipisicing officia qui
            irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
            Amet culpa officia aliquip deserunt veniam deserunt officia
            adipisicing aliquip proident officia sunt.
          </p>
        </>
      ),
      badge: "Collecge Ceremony",
      image:
        "https://i.ibb.co/gL0M2sH9/bannershort1.jpg",
    },
    {
      title: "Bangladesh Speach And Langauge Community Cremony",
      description: (
        <>
          <p>
            Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
            deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
            non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
            sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
            velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
            commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
          </p>
          <p>
            In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
            veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
            reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
            cillum ut mollit.
          </p>
        </>
      ),
      badge: "Bangladesh Speach Langauge",
      image:
        "https://i.ibb.co/vWpxVDG/bannershort2.jpg",
    },
    {
      title: "Govment National Ceremony",
      description: (
        <>
          <p>
            Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
            deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
            non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
            sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
            velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
            commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
          </p>
        </>
      ),
      badge: "Dhaka Medical Ceremony",
      image:
        "https://i.ibb.co/wZCDMSNM/bannershort4.jpg",
    },
  ];

function OurTeacher() {
    return (
        <div className=' -mb-[50px] lg:-mb-[200px]'>
            <LampContainer className=" pt-72 rounded-none">
                <div className=' pt-32 pb-20'>
                    <AuroraText className="pt-40 text-3xl md:text-4xl lg:text-6xl xl:text-8xl font-extrabold text-center uppercase">What Our <br /> <span>Communit Say</span></AuroraText>
                </div>

                <div className=' max-w-[1536px] mx-auto '>
                    <TracingBeam className="px-6 ">
                        <div className=" pl-5  pt-4 w-full">
                            {dummyContent.map((item, index) => (
                                <div key={`content-${index}`} className="mb-10">
                                    
                                        <button className=' btn w-fit shadow-2xs bg-[#84C2DB] rounded-full text-black text-xl font-semibold border-none'>{item.badge}</button>

                                    <p className=" text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-white w-full my-5">
                                        {item.title}
                                    </p>

                                    <div className="text-sm  prose prose-sm dark:prose-invert text-white">
                                        <img src={item.image} alt="blog thumbnail "  className="rounded-lg mb-10  w-full" />
                                    </div>
                                    <div>
                                        <p className=' text-white w-full text-[12px] md:text-[16px] lg:text-lg'>
                                        {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TracingBeam>
                </div>

            </LampContainer>
        </div>
    )
}

export default OurTeacher