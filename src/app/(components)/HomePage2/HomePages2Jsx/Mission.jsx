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



import img1 from '../../../../../public/ssltimg/banner1.png'
import img2 from '../../../../../public/ssltimg/banner2.png'
import img3 from '../../../../../public/ssltimg/banner3.png'
import img4 from '../../../../../public/ssltimg/banner4.png'
import sec4imag3 from '../../../../../public/ssltimg/sec4imag3.jpg'
import { IoArrowForwardSharp } from 'react-icons/io5';


import { Montserrat } from 'next/font/google';
import Link from 'next/link';

// ✅ Load the font with explicit weight
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['500',], // choose the weights you want
});


function Mission() {
    return (
        // <div className='bg-gradient-to-b from-[#282525]  to-[#282525] pb-20'>
        <div className='bg-white'>
            <div className=' bg-gradient-to-b from-[#282525]  to-[#282525] mt-5 md:mt-10 lg:mt-32'>

                {/* pagination section */}
                <div className=''>
                    <h1 className={`text-4xl md:text-6xl lg:text-7xl xl:text-9xl font-extrabold uppercase leading-16 text-center pt-20 `}>
                        <AuroraText>Our Mission</AuroraText>
                    </h1>
                    <p className={`text-xl font-semibold text-white text-center px-5 lg:px-[10%] xl:[15%] 2xl:px-[25%] py-5 lg:py-10 ${montserrat.className}`}>

                        One Kajabi product works great. Two or more? That's when the magic happens.
                        Creators who blend our tools don't just expand their offerings—they amplify their results. See for yourself how the right mix could transform your vision into reality.
                    </p>
                    <div className=" mt-10 pb-20  mx-auto">
                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',

                            }}
                            e

                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                640: {
                                    slidesPerView: 1.5,
                                },
                                1024: {
                                    slidesPerView: 1.8,
                                },
                            }}

                            centeredSlides={true}        // Center active slide
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

                            <SwiperSlide className='rounded-2xl px-2 md:px-0'>
                                <div className=' relative'>
                                    <Image src={img1} alt="Slide 1" className=" h-[400px]   xl:h-[650px] w-full rounded-xl " />
                                    <div className=' px-5 xl:px-10 absolute  bottom-0 pb-5 xl:pb-7 '>
                                        <h1 className=' text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold py-2 xl:py-5 text-white uppercase'>Memberships</h1>
                                        <h3 className=' text-[12px] md:text-sm xl:text-lg 2xl:text-xl pb-5 font-semibold text-white'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum repudiandae autem unde consequatur sapiente quod, aliquam nemo voluptatibus possimus, iusto...</h3>
                                        <Link href="/Membership">
                                            <button className='btn h-10 xl:h-14 px-2 md:px-4 lg:px-6 shadow-2xs rounded-full  bg-[#ffffff] border-none text-black text-sm md:text-lg font-bold flex items-center justify-center'>
                                                Get Membership <span className='pt-1'><IoArrowForwardSharp /></span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>

                            </SwiperSlide>

                            <SwiperSlide className='rounded-2xl px-2 md:px-0'>
                                <div className=' relative'>
                                    <Image src={img2} alt="Slide 1" className=" h-[400px]   xl:h-[650px] w-full rounded-xl " />
                                    <div className=' px-5 xl:px-10 absolute  bottom-0 pb-5 xl:pb-7 '>
                                        <h1 className=' text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold py-2 xl:py-5 text-white  uppercase'>Podcasts</h1>
                                        <h3 className=' text-[12px] md:text-sm xl:text-lg 2xl:text-xl pb-5 font-semibold text-white '> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum repudiandae autem unde consequatur sapiente quod, aliquam nemo voluptatibus possimus, iusto...</h3>
                                        <Link href="/Membership">
                                            <button className='btn h-10 xl:h-14 px-2 md:px-4 lg:px-6 shadow-2xs rounded-full  bg-[#ffffff] border-none text-black text-sm md:text-lg font-bold flex items-center justify-center'>
                                                Get Membership <span className='pt-1'><IoArrowForwardSharp /></span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>

                            </SwiperSlide>

                            <SwiperSlide className='rounded-2xl px-2 md:px-0'>
                                <div className=' relative'>
                                    <Image src={img3} alt="Slide 1" className=" h-[400px]   xl:h-[650px] w-full rounded-xl " />
                                    <div className=' px-5 xl:px-10 absolute  bottom-0 pb-5 xl:pb-7 '>
                                        <h1 className=' text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold py-2 xl:py-5 text-white  uppercase'>Communities</h1>
                                        <h3 className=' text-[12px] md:text-sm xl:text-lg 2xl:text-xl pb-5 font-semibold text-white '> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum repudiandae autem unde consequatur sapiente quod, aliquam nemo voluptatibus possimus, iusto...</h3>
                                        <Link href="/Membership">
                                            <button className='btn h-10 xl:h-14 px-2 md:px-4 lg:px-6 shadow-2xs rounded-full  bg-[#ffffff] border-none text-black text-sm md:text-lg font-bold flex items-center justify-center'>
                                                Get Membership <span className='pt-1'><IoArrowForwardSharp /></span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>

                            </SwiperSlide>

                            <SwiperSlide className='rounded-2xl px-2 md:px-0'>
                                <div className=' relative'>
                                    <Image src={img4} alt="Slide 1" className=" h-[400px]   xl:h-[650px] w-full rounded-xl " />
                                    <div className=' px-5 xl:px-10 absolute  bottom-0 pb-5 xl:pb-7 '>
                                        <h1 className=' text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold py-2 xl:py-5 text-white  uppercase'>Newsletters</h1>
                                        <h3 className=' text-[12px] md:text-sm xl:text-lg 2xl:text-xl pb-5 font-semibold text-white '> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum repudiandae autem unde consequatur sapiente quod, aliquam nemo voluptatibus possimus, iusto...</h3>
                                        <Link href="/Membership">
                                            <button className='btn h-10 xl:h-14 px-2 md:px-4 lg:px-6 shadow-2xs rounded-full  bg-[#ffffff] border-none text-black text-sm md:text-lg font-bold flex items-center justify-center'>
                                                Get Membership <span className='pt-1'><IoArrowForwardSharp /></span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>

                            </SwiperSlide>

                      
                        </Swiper>
                    </div>


                </div>

                {/* grid seciton */}

            </div>

            
        </div>
    )
}

export default Mission