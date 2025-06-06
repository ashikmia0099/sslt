'use client'
import React, { useState } from 'react'
import { AuroraText } from '../../../../components/magicui/aurora-text'
import StudentmembershipForm from './StudentmembershipForm';
import GeneralmembershipForm from './GeneralmembershipForm';

import { Montserrat } from 'next/font/google';

// ✅ Load the font with explicit weight
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['600',], // choose the weights you want
});


function MembershipForm() {

    // Show student form by default
    const [selectedform, setselectedform] = useState('student');

    return (
        <div className='max-w-[1596px] mx-auto bg-white'>
            <div>
                <h1 className='text-3xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold uppercase leading-10 md:leading-14 lg:leading-20 xl:leading-28 text-center px-5 md:px-[10%] xl:px-[20%] pt-7 lg:pt-16'>
                    <AuroraText>Submit Form And Get Membership</AuroraText>
                </h1>
                <p className={`px-5 md:px-[10%] xl:px-[15%] text-[16px] md:text-lg xl:text-2xl leading-7 xl:leading-9 text-center py-10 ${montserrat.className}`}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, consequuntur ex aliquid sequi ipsam cupiditate incidunt excepturi blanditiis doloribus a rerum doloremque ipsum, recusandae eius. Quasi necessitatibus eum nostrum nemo.
                    Quia temporibus ipsa deleniti! Similique pariatur maxime mollitia iste saepe velit quas, ullam eaque at laudantium aut deleniti tempore rerum soluta adipisci debitis omnis libero rem vero ut sint error?
                    Sint, eum rem totam tenetur facere aliquid nisi exercitationem excepturi in repellat suscipit culpa quaerat hic dolore illum. Ratione quibusdam cupiditate officiis quaerat fugit maxime quam expedita quidem. Ratione, earum!
                </p>
            </div>

            <div className='flex items-center justify-center'>
                <div className=' block md:flex items-center justify-center gap-0 md:gap-5 py-7 lg:py-10 '>
                    <button
                        onClick={() => setselectedform('student')}
                        className={`btn px-10 h-16 rounded-full ${selectedform === 'student' ? 'bg-[#84C2DB]' : 'bg-white'} border-4 border-[#84C2DB] text-black mt-10 text-2xl font-bold flex items-center`}>
                        Student Form
                    </button>
                    <button
                        onClick={() => setselectedform('general')}
                        className={`btn px-10 h-16 rounded-full ${selectedform === 'general' ? 'bg-[#84C2DB]' : 'bg-white'} border-4 border-[#84C2DB] text-black mt-3 md:mt-10 text-2xl font-bold`}>
                        General Form
                    </button>
                </div>

            </div>
            {selectedform === 'student' && <StudentmembershipForm />}
            {selectedform === 'general' && <GeneralmembershipForm />}
        </div>
    )
}

export default MembershipForm
