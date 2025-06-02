'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function ResourseDetails({ params }) {


    const [resourse, setresourse] = useState([]);
    const [selecteditem, setselecteditem] = useState([]);
    const id = parseInt(params.id);

    useEffect(() => {

        fetch("/jsonData/resourse.json")
            .then(res => res.json())
            .then(data => {
                setresourse(data);
                const filterdata = data.find(item => item.id === id)
                setselecteditem(filterdata)
            })

    }, [])


    console.log("resourse data", resourse)



    return (
        <div className='max-w-[1536px] mx-auto pt-16'>
            <div className=' pb-20'>
                <h1 className=' text-3xl font-semibold text-black'>{selecteditem.title} :</h1>
                {
                    selecteditem.subtitles?.map((section, index) => (
                        <div key={index}>
                            <h1 className=' text-2xl font-semibold text-black pt-5'>{section.subtitle}: </h1>
                            <p className=' text-xl pt-5'>
                                {section.description}
                            </p>
                        </div>

                    ))
                }


            </div>
        </div>
    )
}

export default ResourseDetails