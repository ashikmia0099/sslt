'use client';

import Image from 'next/image';
import { AuroraText } from '../../../../components/magicui/aurora-text';

import image1 from '../../../../../public/ssltimg/doctor1.jpg';

import { Montserrat } from 'next/font/google';
import { useEffect, useState } from 'react';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['600'],
});

function News() {
    const [news, setNews] = useState([]);
    const [visibleCount, setVisibleCount] = useState(10);
    const [selectedNews, setSelectedNews] = useState(null); // For modal

    useEffect(() => {
        fetch('/jsonData/news.json')
            .then(res => res.json())
            .then(data => {
                const dataWithIds = data.map((item, index) => ({ id: index + 1, ...item }));
                setNews(dataWithIds);
            });
    }, []);

    return (
        <div className='max-w-[1596px] mx-auto bg-white'>
            <div className='border-b-2'>
                <h1 className={`text-3xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold uppercase leading-10 md:leading-14 lg:leading-20 xl:leading-28 text-center px-5 md:px-[10%] xl:px-[20%] pt-7 lg:pt-16`}>
                    <AuroraText>Our All Update & Latest news</AuroraText>
                </h1>
                <p className={`px-5 md:px-[10%] xl:px-[15%] text-[16px] md:text-lg xl:text-2xl leading-7 xl:leading-9 text-center py-10 ${montserrat.className}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam odit nam laudantium officiis corporis earum suscipit quia repudiandae enim voluptate, eaque repellendus asperiores molestias facere, sit ducimus odio accusantium quidem.
                </p>
            </div>

            {/* Card Section */}
            <div className='pb-10 px-5 lg:px-[10%] pt-12 space-y-3.5'>
                {news.slice(0, visibleCount).map((newdata) => (
                    <div key={newdata.id} className='py-3 border-2 rounded-xl lg:rounded-none hover:border-none lg:border-none'>
                        <div className='px-2 md:px-4 lg:px-6 py-1 md:py-3 lg:py-6 hover:bg-[#a2bfca] rounded-xl flex items-center justify-between'>
                            <div className='flex items-center gap-5'>
                                <Image src={image1} alt="News" className='h-16 w-16 lg:h-20 lg:w-20 rounded-xl hidden md:block' />
                                <div>
                                    <h3 className={`text-[12px] md:text-sm lg:text-[16px] xl:text-xl font-[500] pt-2 md:pt-0 ${montserrat.className}`}>
                                        {newdata.newstitle}
                                    </h3>
                                    <h5 className={`text-[8px] md:text-[10px] lg:text-sm font-[300] uppercase pt-3 ${montserrat.className}`}>
                                        {newdata.date}
                                    </h5>
                                </div>
                            </div>
                            {/* ✅ Button to open modal */}
                            <button
                                onClick={() => setSelectedNews(newdata)}
                                className='btn h-6 md:h-10 w-24 md:w-36 lg:h-12 uppercase px-2 md:px-3 lg:px-6 shadow-2xs rounded-full bg-[#84C2DB] border-none text-black text-[10px] md:text-[16px] lg:text-lg font-bold flex items-center justify-center'
                            >
                                See More
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* ✅ Load More */}
            {visibleCount < news.length && (
                <div className='flex justify-center pb-16'>
                    <button onClick={() => setVisibleCount(prev => prev + 10)} className='btn h-14 px-10 shadow-2xs rounded-full mt-5 bg-[#84C2DB] border-none text-black text-lg font-bold flex items-center justify-center'>
                        See More
                    </button>
                </div>
            )}

            {/* ✅ Modal (Single) */}
            {selectedNews && (
                <div className="modal modal-open" role="dialog">
                    <div className="modal-box bg-white">
                        <h3 className="text-lg font-bold">{selectedNews.newstitle}</h3>
                        <p className="py-4">{selectedNews.description || 'No additional description available.'}</p>
                        <div className="modal-action">
                            <button onClick={() => setSelectedNews(null)} className='btn h-10 px-10 shadow-2xs rounded-full mt-5 bg-[#84C2DB] border-none text-black text-lg font-bold flex items-center justify-center'>
                              Close
                            </button>
                            
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default News;
