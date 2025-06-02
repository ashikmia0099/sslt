'use client';

import React from 'react'
import { AuroraText } from '../../../../components/magicui/aurora-text'
import { BackgroundBeams } from "../../../../components/ui/background-beams";
import { BackgroundBeamsWithCollision } from "../../../../components/ui/background-beams-with-collision";
// import { CardSpotlight } from "../../../../components/ui/card-spotlight";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';


import swiper1 from '../../../../../public/ssltimg/swiper1.webp'
import swiper2 from '../../../../../public/ssltimg/swiper2.webp'

import vision1 from '../../../../../public/ssltimg/1.png'
import vision2 from '../../../../../public/ssltimg/2.png'
import vision3 from '../../../../../public/ssltimg/3.png'
import vision4 from '../../../../../public/ssltimg/4.png'
import vision5 from '../../../../../public/ssltimg/5.png'

import { IoArrowForwardSharp } from 'react-icons/io5';
import { FaBookMedical, FaHandHoldingMedical, FaSnowboarding } from 'react-icons/fa';
import { FaHouseMedicalCircleCheck, FaUserDoctor } from "react-icons/fa6";
import { GiMedicines, GiPlagueDoctorProfile } from 'react-icons/gi';
import { RiMedicineBottleFill } from 'react-icons/ri';



import { HoverEffect } from "../../../../components/ui/card-hover-effect";


import { MagicCard } from "../../../../components/magicui/magic-card";

import { Montserrat } from 'next/font/google';
import Link from 'next/link';

// ✅ Load the font with explicit weight
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['500',], // choose the weights you want
});



export const projects = [
    {
        title: "Stripe",
        description:
            "A technology company that builds economic infrastructure for the internet.",
        link: "https://stripe.com",
    },
    {
        title: "Netflix",
        description:
            "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        link: "https://netflix.com",
    },
    {
        title: "Google",
        description:
            "A multinational technology company that specializes in Internet-related services and products.",
        link: "https://google.com",
    },
    {
        title: "Meta",
        description:
            "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
        link: "https://meta.com",
    },
    {
        title: "Amazon",
        description:
            "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
        link: "https://amazon.com",
    },
    {
        title: "Microsoft",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        link: "https://microsoft.com",
    },
];



function Vission() {

    // const { theme } = useTheme();
    return (
        <div className='bg-gradient-to-b from-[#000000]  to-[#000000] relative z-0'>

            <div>
                <div className='mt-5 md:mt-10 lg:mt-32'>

                    {/* pagination section */}
                    <div className=''>
                        <h1 className={`text-4xl md:text-6xl lg:text-7xl xl:text-9xl font-extrabold uppercase leading-16 text-center pt-20 `}>
                            <AuroraText>Our Vission</AuroraText>
                        </h1>
                        <p className={`text-xl font-semibold text-white text-center px-5 lg:px-[10%] xl:px-[15%] 2xl:px-[25%] py-5 lg:py-10 ${montserrat.className}`}>

                            One Kajabi product works great. Two or more? That's when the magic happens.
                            Creators who blend our tools don't just expand their offerings—they amplify their results. See for yourself how the right mix could transform your vision into reality.
                        </p>
                        <div className=" mt-10 pb-20 ml-0 md:ml-20 lg:ml-20 xl:40 2xl:ml-60 px-5 lg:px-0 ">
                            <Swiper
                                style={{
                                    '--swiper-navigation-color': '#fff',
                                    '--swiper-pagination-color': '#fff',

                                }}
                                slidesPerView={4}          // Show center + half on each side
                                // Center active slide
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1
                                    },
                                    640: {
                                        slidesPerView: 2
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                    },
                                    1440: {
                                        slidesPerView: 4,
                                    },

                                }}
                                spaceBetween={20}            // Space between slides
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                pagination={{
                                    clickable: true,

                                }}

                                modules={[Autoplay, Pagination]}
                                className="mySwiper"


                            >
                                <SwiperSlide className=' rounded-2xl  bg-gradient-to-r from-[#8f8ee9] to-[#84C2DB] '>
                                    
                                    <div className=' relative'>
                                       <Image src={vision1} alt="Slide 1" className="h-[650px] w-full rounded-xl object-cover" />
                                        <div className=' px-5 xl absolute  bottom-0 pb-7  '>
                                            <h1 className=' text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold py-2 xl:py-4 text-white uppercase'>Dementia</h1>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className=' rounded-2xl  bg-gradient-to-r from-[#8f8ee9] to-[#84C2DB] '>
                                    
                                    <div className=' relative'>
                                       <Image src={vision2} alt="Slide 1" className="h-[650px] w-full rounded-xl object-cover" />
                                        <div className=' px-5 xl absolute  bottom-0 pb-7  '>
                                            <h1 className=' text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold py-2 xl:py-4 text-white uppercase'>Hearing Loss </h1>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className=' rounded-2xl  bg-gradient-to-r from-[#8f8ee9] to-[#84C2DB] '>
                                    
                                    <div className=' relative'>
                                       <Image src={vision3} alt="Slide 1" className="h-[650px] w-full rounded-xl object-cover" />
                                        <div className=' px-5 xl absolute  bottom-0 pb-7  '>
                                            <h1 className=' text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold py-2 xl:py-4 text-white uppercase'>Speech Sound Disorders </h1>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className=' rounded-2xl  bg-gradient-to-r from-[#8f8ee9] to-[#84C2DB] '>
                                    
                                    <div className=' relative'>
                                       <Image src={vision4} alt="Slide 1" className="h-[650px] w-full rounded-xl object-cover" />
                                        <div className=' px-5 xl absolute  bottom-0 pb-7  '>
                                            <h1 className=' text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold py-2 xl:py-4 text-white uppercase'>Amyotrophic Lateral Sclerosis </h1>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                
                                <SwiperSlide className=' rounded-2xl  bg-gradient-to-r from-[#8f8ee9] to-[#84C2DB] '>
                                    
                                    <div className=' relative'>
                                       <Image src={vision5} alt="Slide 1" className="h-[650px] w-full rounded-xl object-cover" />
                                        <div className=' px-5 xl absolute  bottom-0 pb-7  '>
                                            <h1 className=' text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold py-2 xl:py-4 text-white uppercase'> Apraxia </h1>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                
                                <SwiperSlide className=' rounded-2xl  bg-gradient-to-r from-[#8f8ee9] to-[#84C2DB] '>
                                    
                                    <div className=' relative'>
                                       <Image src={vision2} alt="Slide 1" className="h-[650px] w-full rounded-xl object-cover" />
                                        <div className=' px-5 xl absolute  bottom-0 pb-7  '>
                                            <h1 className=' text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold py-2 xl:py-4 text-white uppercase'> Hearing Loss </h1>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                
                            </Swiper>
                        </div>


                    </div>

                    {/* grid seciton */}

                </div>

                {/* grid secion 1 */}
                <div className='max-w-[1536px] mx-auto pb-14 md:pb-20 lg:pb-32'>

                    <div className=' grid lg:grid-cols-2 justify-between  py-6 lg:py-20 gap-10 lg:gap-16 xl:text-20 2xl:gap-32'>
                        {/* hadding text */}
                        <div className=' mb-3 lg:mb-10'>
                            <h1 className={` pt-0 lg:pt-16 xl:pt-0 text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-extrabold uppercase leading-10  md:leading-14 lg:leading-16 xl:leading-28 text-center `}>
                                <AuroraText> <div className=' text-center xl:text-left'> <AuroraText>  Our Gols </AuroraText></div> <span className=' text-center'>And</span><br /> <span>objectives</span></AuroraText>
                            </h1>
                        </div>
                        <div className=' flex items-center justify-end pl-0 lg:pl-20 xl:pl-28 2xl:pl-40 '>
                            <div className=' items-end right-1'>
                                <p className={`  px-5 xl:px-0 text-xl 2xl:text-2xl font-semibold text-white text-center lg:text-left ${montserrat.className}`}>

                                    One Kajabi product works great. Two or more? That's when the magic happens.
                                    Creators who blend our tools don't just expand their offerings—they amplify their results. See for yourself how the right mix could transform your vision into reality.
                                </p>
                                <div className=' hidden lg:block'>
                                    <Link href="/Membership">
                                    <button className=' btn h-14 px-6 shadow-2xs rounded-full mt-10  bg-[#84C2DB] border-none text-black text-lg font-bold flex items-center justify-center'>
                                        Get Membership <span className='pt-1'><IoArrowForwardSharp /></span>
                                    </button>
                                    </Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-14 lg:gap-y-10 px-5 2xl:px-0'>
                        <div className=" w-full p-10 shadow-lg shadow-[#84C2DB] rounded-lg">
                            <p className="text-5xl font-bold relative z-20 mt-2 text-[#84C2DB]">
                                <FaBookMedical />
                            </p>
                            <div className="text-neutral-200 mt-4 relative z-20 text-2xl font-semibold">
                                Follow these steps to your account:

                            </div>
                            <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                                Ensuring your account is properly secured helps protect your personal
                                information and dataEnsuring your account is properly secured helps protect your personal
                                information and data is properly secured helps protect your personal
                                information and data.
                            </p>
                        </div>
                        <div className=" w-full p-10 shadow-lg shadow-[#84C2DB] rounded-lg">
                            <p className="text-5xl font-bold relative z-20 mt-2 text-[#84C2DB]">
                                <FaBookMedical />
                            </p>
                            <div className="text-neutral-200 mt-4 relative z-20 text-2xl font-semibold">
                                Follow these steps to your account:

                            </div>
                            <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                                Ensuring your account is properly secured helps protect your personal
                                information and dataEnsuring your account is properly secured helps protect your personal
                                information and data is properly secured helps protect your personal
                                information and data.
                            </p>
                        </div>
                        <div className=" w-full p-10 shadow-lg shadow-[#84C2DB] rounded-lg">
                            <p className="text-5xl font-bold relative z-20 mt-2 text-[#84C2DB]">
                                <FaBookMedical />
                            </p>
                            <div className="text-neutral-200 mt-4 relative z-20 text-2xl font-semibold">
                                Follow these steps to your account:

                            </div>
                            <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                                Ensuring your account is properly secured helps protect your personal
                                information and dataEnsuring your account is properly secured helps protect your personal
                                information and data is properly secured helps protect your personal
                                information and data.
                            </p>
                        </div>
                        <div className=" w-full p-10 shadow-lg shadow-[#84C2DB] rounded-lg">
                            <p className="text-5xl font-bold relative z-20 mt-2 text-[#84C2DB]">
                                <FaBookMedical />
                            </p>
                            <div className="text-neutral-200 mt-4 relative z-20 text-2xl font-semibold">
                                Follow these steps to your account:

                            </div>
                            <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                                Ensuring your account is properly secured helps protect your personal
                                information and dataEnsuring your account is properly secured helps protect your personal
                                information and data is properly secured helps protect your personal
                                information and data.
                            </p>
                        </div>
                        <div className=" w-full p-10 shadow-lg shadow-[#84C2DB] rounded-lg">
                            <p className="text-5xl font-bold relative z-20 mt-2 text-[#84C2DB]">
                                <FaBookMedical />
                            </p>
                            <div className="text-neutral-200 mt-4 relative z-20 text-2xl font-semibold">
                                Follow these steps to your account:

                            </div>
                            <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                                Ensuring your account is properly secured helps protect your personal
                                information and dataEnsuring your account is properly secured helps protect your personal
                                information and data is properly secured helps protect your personal
                                information and data.
                            </p>
                        </div>
                        <div className=" w-full p-10 shadow-lg shadow-[#84C2DB] rounded-lg">
                            <p className="text-5xl font-bold relative z-20 mt-2 text-[#84C2DB]">
                                <FaBookMedical />
                            </p>
                            <div className="text-neutral-200 mt-4 relative z-20 text-2xl font-semibold">
                                Follow these steps to your account:

                            </div>
                            <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                                Ensuring your account is properly secured helps protect your personal
                                information and dataEnsuring your account is properly secured helps protect your personal
                                information and data is properly secured helps protect your personal
                                information and data.
                            </p>
                        </div>
                        <div className=" w-full p-10 shadow-lg shadow-[#84C2DB] rounded-lg">
                            <p className="text-5xl font-bold relative z-20 mt-2 text-[#84C2DB]">
                                <FaBookMedical />
                            </p>
                            <div className="text-neutral-200 mt-4 relative z-20 text-2xl font-semibold">
                                Follow these steps to your account:

                            </div>
                            <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                                Ensuring your account is properly secured helps protect your personal
                                information and dataEnsuring your account is properly secured helps protect your personal
                                information and data is properly secured helps protect your personal
                                information and data.
                            </p>
                        </div>
                        <div className=" w-full p-10 shadow-lg shadow-[#84C2DB] rounded-lg">
                            <p className="text-5xl font-bold relative z-20 mt-2 text-[#84C2DB]">
                                <FaBookMedical />
                            </p>
                            <div className="text-neutral-200 mt-4 relative z-20 text-2xl font-semibold">
                                Follow these steps to your account:

                            </div>
                            <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                                Ensuring your account is properly secured helps protect your personal
                                information and dataEnsuring your account is properly secured helps protect your personal
                                information and data is properly secured helps protect your personal
                                information and data.
                            </p>
                        </div>

                    </div>
                    <div className=' block lg:hidden'>
                        <div className=' flex items-center justify-center mt-6'>
                            <button className=' btn h-14 px-6 shadow-2xs rounded-full mt-10  bg-[#84C2DB] border-none text-black text-lg font-bold flex items-center justify-center'>
                                Get Membership <span className='pt-1'><IoArrowForwardSharp /></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Vission