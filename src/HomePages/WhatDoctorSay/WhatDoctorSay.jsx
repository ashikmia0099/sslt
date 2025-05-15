import React from 'react';
import { TypingAnimation } from "../../components/magicui/typing-animation";
import { Marquee } from "../../components/magicui/marquee";
import { BoxReveal } from "../../components/magicui/box-reveal";
import { AuroraText } from '../../components/magicui/aurora-text'
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import { ShimmerButton } from "../../components/magicui/shimmer-button";
import { BorderBeam } from "../../components/magicui/border-beam";
import { ShineBorder } from "../../components/magicui/shine-border";
import GlobalCurrentSetution from '../GlobalCurrentSetution/GlobalCurrentSetution';



// Helper function to join class names
const cn = (...classes) => classes.filter(Boolean).join(" ");

function WhatDoctorSay() {


    const reviews = [
        {
            name: "Jack",
            username: "@jack",
            body: "I've never seen anything like this before. It's amazing. I love it.",
            img: "https://avatar.vercel.sh/jack",
        },
        {
            name: "Jill",
            username: "@jill",
            body: "I don't know what to say. I'm speechless. This is amazing.",
            img: "https://avatar.vercel.sh/jill",
        },
        {
            name: "John",
            username: "@john",
            body: "I'm at a loss for words. This is amazing. I love it.",
            img: "https://avatar.vercel.sh/john",
        },
        {
            name: "Jane",
            username: "@jane",
            body: "I'm at a loss for words. This is amazing. I love it.",
            img: "https://avatar.vercel.sh/jane",
        },
        {
            name: "Jenny",
            username: "@jenny",
            body: "I'm at a loss for words. This is amazing. I love it.",
            img: "https://avatar.vercel.sh/jenny",
        },
        {
            name: "James",
            username: "@james",
            body: "I'm at a loss for words. This is amazing. I love it.",
            img: "https://avatar.vercel.sh/james",
        },
    ];

    const firstRow = reviews.slice(0, reviews.length / 2);
    const secondRow = reviews.slice(reviews.length / 2);

    const ReviewCard = ({ img, name, username, body }) => {
        return (
            <figure
                className={cn(
                    "relative h-full w-64 cursor-pointer  rounded-xl border p-4",
                    "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                    "bg-white/30"
                )}
            >
                <div className="flex flex-row items-center gap-2">
                    <img className="rounded-full" width="32" height="32" alt="" src={img} />
                    <div className="flex flex-col">
                        <figcaption className="text-sm font-medium dark:text-white">
                            {name}
                        </figcaption>
                        <p className="text-xs font-medium dark:text-white/40">{username}</p>
                    </div>
                </div>
                <blockquote className="mt-2 text-sm">{body}</blockquote>
            </figure>
        );
    };

    const ReviewCardvartical = ({ img, name, username, body }) => {
        return (
          <figure
            className={cn(
              "relative h-full w-fit sm:w-36 cursor-pointer overflow-hidden rounded-xl border p-4",
              // light styles
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              // dark styles
              " bg-white/30 "
            )}
          >
            <div className="flex flex-row items-center gap-2 ">
              <img className="rounded-full" width="32" height="32" alt="" src={img} />
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white">
                  {name}
                </figcaption>
                <p className="text-xs font-medium dark:text-white/40">{username}</p>
              </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
          </figure>
        );
      };
      

    return (
        <div>
            {/* marques section */}
            <div>
                {/* <h1 className="text-6xl text-center font-bold uppercase pt-24 pb-6 ">

                    <AuroraText className="text-6xl border-b-2 w-[45%] mx-auto pb-4 leading-20">
                        What Our Mission And Vission
                    </AuroraText>


                </h1> */}
                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                    <Marquee pauseOnHover className="[--duration:20s]">
                        {firstRow.map((review) => (
                            <ReviewCard key={review.username} {...review} />
                        ))}
                    </Marquee>
                    <Marquee reverse pauseOnHover className="[--duration:5s] px-5">
                        {secondRow.map((review) => (
                            <ReviewCard key={review.username} {...review} />
                        ))}
                    </Marquee>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 px-5"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 px-5"></div>
                </div>
            </div>

            {/* banner secion */}


           
        </div>
    );
}

export default WhatDoctorSay;
