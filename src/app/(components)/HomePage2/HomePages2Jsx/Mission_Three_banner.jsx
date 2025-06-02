'use client';

import React from 'react'
import { AuroraText } from '../../../../components/magicui/aurora-text'
import { BackgroundBeams } from "../../../../components/ui/background-beams";


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
import swiper3 from '../../../../../public/ssltimg/swiper3.webp'
import confacanceimage from '../../../../../public/ssltimg/confacanceimage.jpg'
import sec4cartoonimg from '../../../../../public/ssltimg/sec4cartoonimg.jpg'
import doctorpationt1 from '../../../../../public/ssltimg/doctorpationt1.jpg'




import sec4imag3 from '../../../../../public/ssltimg/sec4imag3.jpg'
import { IoArrowForwardSharp } from 'react-icons/io5';


import { Montserrat } from 'next/font/google';
import Link from 'next/link';

// ✅ Load the font with explicit weight
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['500',], // choose the weights you want
});


function Mission_Three_banner() {
    return (
        // <div className='bg-gradient-to-b from-[#282525]  to-[#282525] pb-20'>
        <div className='bg-white'>
           
            <div className='relative '>
                {/* grid secion 1 */}
                <div className=' pt-5 lg:pt-24 max-w-[1536px] mx-auto px-5 '>
                    <div className=' grid lg:grid-cols-2 gap-0 lg:gap-5 xl:gap-16 2xl:gap-32'>
                        {/* text part */}

                        <div className='flex items-center justify-center'>
                            <div >
                                <h1 className={` text-3xl md:text-4xl  xl:text-6xl font-bold uppercase leading-10 md:leading-12 xl:leading-16 pt-5 md:pt-10 lg:pt-20 pr-0 lg:pr-[15%] text-black text-center lg:text-left`}>
                                    One Kajabi product works great. Two or more
                                </h1>
                                <p className={`text-sm md:text-lg  xl:text-2xl font-bold text-center lg:text-left py-10 pr-0 lg:pr-[15%] text-black ${montserrat.className}`}>

                                    One Kajabi product works great. Two or more? That's when the magic happens.
                                    Creators who blend our tools don't just expand their offerings—they amplify their results. See for yourself how the right mix could transform your vision into reality.
                                </p>
                                <div className='  hidden lg:block'>
                                    

                                    <Link href="/Membership" className=' z-20'>
                                        <button className=' btn h-14 px-6 shadow-2xs rounded-full mt-10  bg-[#84C2DB] border-none text-black text-lg font-bold flex items-center justify-center'>
                                            Get Membership <span className='pt-1'><IoArrowForwardSharp /></span>
                                        </button>
                                    </Link>

                                </div>
                            </div>
                        </div>

                        {/* image part */}
                        <div className=' bg-[#84c2dbb7] rounded-xl p-2 md:p-5 xl:p-10 shadow-lg lg:shadow-2xl shadow-[#84C2DB]'>

                            <Image src={sec4cartoonimg} alt="Slide 1" className="  h-full w-full rounded-2xl object-cover" />
                        </div>

                    </div>
                    <div className=' block lg:hidden'>
                        <div className='  pt-10 flex items-center justify-center'>
                           

                            <Link href="/Membership">
                                <button className=' btn h-14 px-6 shadow-2xs rounded-full mt-10  bg-[#84C2DB] border-none text-black text-lg font-bold flex items-center justify-center'>
                                    Get Membership <span className='pt-1'><IoArrowForwardSharp /></span>
                                </button>
                            </Link>

                        </div>
                    </div>
                </div>

                {/* grid secion 2 */}
                <div className=' pt-24 max-w-[1536px] mx-auto px-5 hidden lg:block'>
                    <div className=' grid grid-cols-2 gap-0 lg:gap-5 xl:gap-16 2xl:gap-32'>

                        {/* image part */}
                        <div className=' bg-[#84c2dbb7] rounded-xl p-2 md:p-5 xl:p-10 shadow-lg lg:shadow-2xl shadow-[#84C2DB]'>
                            <Image src={doctorpationt1} alt="Slide 1" className="h-full w-full rounded-2xl object-cover" />
                        </div>
                        {/* text part */}

                        <div className='flex items-center justify-center lg:pl-10 xl:px-16 2xl:pl-28'>
                            <div >
                                <h1 className={`text-3xl md:text-4xl  xl:text-6xl font-bold uppercase leading-10 md:leading-12 xl:leading-16 pt-5 md:pt-10 lg:pt-20 text-left   text-black`}>
                                    One Kajabi product works great. Two or more
                                </h1>
                                <p className={` text-sm md:text-lg  xl:text-2xl font-semibold text-black text-left py-10  ${montserrat.className}`}>
                                    One Kajabi product works great. Two or more? That's when the magic happens.
                                    Creators who blend our tools don't just expand their offerings—they amplify their results. See for yourself how the right mix could transform your vision into reality.
                                </p>
                                <Link href="/Membership">
                                    <button className='btn h-14 px-6 shadow-2xs rounded-full  bg-[#84C2DB] border-none text-black text-lg font-bold flex items-center justify-center'>
                                        Get Membership <span className='pt-1'><IoArrowForwardSharp /></span>
                                    </button>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>


                {/* mobile device */}

                <div className=' pt-5 lg:pt-24 max-w-[1536px] mx-auto px-5 pb-10 md:pb-0 block lg:hidden'>
                    <div className=' grid lg:grid-cols-2 gap-0 lg:gap-32'>
                        {/* text part */}

                        <div className='flex items-center justify-center'>
                            <div >
                                <h1 className={` text-3xl md:text-4xl  lg:text-6xl font-bold uppercase leading-10 md:leading-12 lg:leading-16 pt-5 md:pt-10 lg:pt-20 pr-0 lg:pr-[15%] text-black text-center lg:text-left`}>
                                    One Kajabi product works great. Two or more
                                </h1>
                                <p className={`text-sm md:text-lg lg:text-xl xl:text-2xl font-bold text-center lg:text-left py-10 pr-0 lg:pr-[15%] text-black ${montserrat.className}`}>

                                    One Kajabi product works great. Two or more? That's when the magic happens.
                                    Creators who blend our tools don't just expand their offerings—they amplify their results. See for yourself how the right mix could transform your vision into reality.
                                </p>
                                <div className='  hidden lg:block'>
                                    <button className='btn h-14 px-6 shadow-2xs rounded-full  bg-[#84C2DB] border-none text-black text-lg font-bold flex items-center justify-center'>
                                        Get Membership <span className='pt-1'><IoArrowForwardSharp /></span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* image part */}
                        <div className=' bg-[#84c2dbb7] rounded-xl p-2 md:p-5  xl:p-10 shadow-lg lg:shadow-2xl shadow-[#84C2DB]'>

                            <Image src={doctorpationt1} alt="Slide 1" className="h-full w-full rounded-2xl object-cover" />
                        </div>

                    </div>
                    <div className=' block lg:hidden'>
                        <div className='  pt-10 flex items-center justify-center'>
                            <Link href="/Membership">
                                <button className='btn h-14 px-6 shadow-2xs rounded-full  bg-[#84C2DB] border-none text-black text-lg font-bold flex items-center justify-center'>
                                    Get Membership <span className='pt-1'><IoArrowForwardSharp /></span>
                                </button>
                            </Link>

                        </div>
                    </div>
                </div>


                {/* grid secion 3 */}

                <div className=' pt-5 lg:pt-24 max-w-[1536px] mx-auto px-5 '>
                    <div className=' grid lg:grid-cols-2 gap-0 lg:gap-5 xl:gap-16 2xl:gap-32'>
                        {/* text part */}

                        <div className='flex items-center justify-center'>
                            <div >
                                <h1 className={` text-3xl md:text-4xl  xl:text-6xl font-bold uppercase leading-10 md:leading-12 xl:leading-16 pt-5 md:pt-10 lg:pt-20 pr-0 lg:pr-[15%] text-black text-center lg:text-left`}>
                                    One Kajabi product works great. Two or more
                                </h1>
                                <p className={`text-sm md:text-lg  xl:text-2xl font-bold text-center lg:text-left py-10 pr-0 lg:pr-[15%] text-black ${montserrat.className}`}>

                                    One Kajabi product works great. Two or more? That's when the magic happens.
                                    Creators who blend our tools don't just expand their offerings—they amplify their results. See for yourself how the right mix could transform your vision into reality.
                                </p>
                                <div className='  hidden lg:block'>
                                    <Link href="/Membership">
                                <button className=' btn h-14 px-6 shadow-2xs rounded-full mt-10  bg-[#84C2DB] border-none text-black text-lg font-bold flex items-center justify-center'>
                                    Get Membership <span className='pt-1'><IoArrowForwardSharp /></span>
                                </button>
                            </Link>
                                </div>
                            </div>
                        </div>

                        {/* image part */}
                        <div className=' bg-[#84c2dbb7] rounded-xl p-2 md:p-5 xl:p-10 shadow-lg lg:shadow-2xl shadow-[#84C2DB]'>

                            <Image src={sec4imag3} alt="Slide 1" className="  h-full w-full rounded-2xl object-cover" />
                        </div>

                    </div>
                    <div className=' block lg:hidden'>
                        <div className='  pt-10 flex items-center justify-center cursor-pointer'>
                            <Link href="/Membership">
                                <button className='btn h-14 px-6 shadow-2xs rounded-full  bg-[#84C2DB] border-none text-black text-lg font-bold flex items-center justify-center'>
                                    Get Membership <span className='pt-1'><IoArrowForwardSharp /></span>
                                </button>
                            </Link>

                        </div>
                    </div>
                </div>



                {/* <div className=' -z-40'>
                    <BackgroundBeams />
                </div> */}
            </div>
        </div>
    )
}

export default Mission_Three_banner