'use client'

import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import Image from 'next/image'

// Local images
import doctor1 from '../../../../../public/ssltimg/man1.jpg'
import doctor2 from '../../../../../public/ssltimg/man2.jpg'
import doctor3 from '../../../../../public/ssltimg/man3.jpg'

import bannershort1 from '../../../../../public/ssltimg/bannershort1.jpg'
import bannershort2 from '../../../../../public/ssltimg/bannershort2.jpg'
import bannershort3 from '../../../../../public/ssltimg/bannershort3.jpg'
import bannershort4 from '../../../../../public/ssltimg/bannershort4.jpg'

function Banner2() {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    if (!isClient) return null // prevent SSR crash

    const sliderData = [
        {
            type: 'single',
            image: doctor1,
            alt: 'doctor1'
        },
        {
            type: 'double',
            images: [bannershort1, bannershort2],
            alt: ['doctor1', 'doctor2']
        },
        {
            type: 'single',
            image: doctor2,
            alt: 'doctor2'
        },
        {
            type: 'double',
            images: [bannershort3, bannershort4],
            alt: ['doctor1', 'doctor1']
        },
        {
            type: 'single',
            image: doctor3,
            alt: 'doctor3'
        },
        {
            type: 'double',
            images: [bannershort1, bannershort4],
            alt: ['banner1b', 'banner4b']
        }
    ]

    return (
        <div className='mx-auto pt-10 xl:pt-16'>
            <Swiper
                breakpoints={{
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1440: { slidesPerView: 4 }
                }}
                spaceBetween={30}
                loop={true}
                freeMode={true}
                speed={6000}
                autoplay={{ delay: 0 }}
                modules={[Autoplay, Pagination]}
                className='mySwiper'
                style={{ transitionTimingFunction: 'linear' }}
            >
                {sliderData.map((item, index) => (
                    <SwiperSlide key={index}>
                        {item.type === 'single' ? (
                            <div className='flex items-center pt-20 relative'>
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    className='h-[600px] w-full rounded-2xl object-cover'
                                />
                                <div className=' absolute bottom-0 px-5 pb-5 '>
                                    <h1 className=' text-4xl font-bold pb-3 text-[#000000]'>Dr: Hridoy Kahan</h1>
                                    <p className=' text-xl font-semibold text-[#000000]'>Hard Serjogn</p>
                                    <p className=' text-xl font-semibold text-[#000000]'>Hard Serjogn, Dhaka Meducal collage</p>
                                </div>
                            </div>
                        ) : (
                            <div className='grid grid-flow-col grid-rows-2 gap-4 h-[750px]'>
                                {item.images.map((img, i) => (
                                    <div key={i} className=' relative'>
                                        <Image
                                            src={img}
                                            alt={item.alt[i]}
                                            className='h-full w-full rounded-2xl object-cover'
                                        />
                                        <div className=' absolute bottom-0 px-5 pb-5 '>
                                            <h1 className=' text-4xl font-semibold text-[#000000]'>Dr: Hridoy Kahan</h1>
                                            <p className=' text-xl font-semibold text-[#000000]'>Hard Serjogn</p>
                                            <p className=' text-xl font-semibold text-[#000000]'>Hard Serjogn, Dhaka Meducal collage</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Banner2
