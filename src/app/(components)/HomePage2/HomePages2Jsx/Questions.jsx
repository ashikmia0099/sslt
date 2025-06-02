import React from 'react'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { IoArrowForwardSharp } from 'react-icons/io5'
import Vission from './Vission'
import { AuroraText } from '../../../../components/magicui/aurora-text'



import { Montserrat } from 'next/font/google';
import Link from 'next/link'

// ✅ Load the font with explicit weight
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['600',], // choose the weights you want
});


function Questions() {
    return (
        <div>
            <div className='max-w-[1536px] mx-auto pb-10 md:pb-20 lg:pb-30 pt-10 px-5'>
                <div className=' mt-20 grid lg:grid-cols-2 gap-5'>
                    {/* text */}
                    <div className=' flex items-center justify-center'>
                        <div className=' sticky'>
                            <h1 className='text-3xl md:text-4xl lg:text-6xl xl:text-8xl font-extrabold uppercase leading-8 md:leading-10 lg:leading-16 xl:leading-24 text-center lg:text-left text-[#83C1DA]'> <AuroraText>Frequently Asked Questions</AuroraText></h1>
                            <div className=' flex items-center justify-center lg:block'>
                                <Link href="/Membership">
                                    <button className=' btn h-14 px-6 shadow-2xs rounded-full mt-10  bg-[#84C2DB] border-none text-black text-lg font-bold flex items-center justify-center'>
                                        Get Membership <span className='pt-1'><IoArrowForwardSharp /></span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* questions */}

                    <div>
                        <div className="join join-vertical bg-white w-full">
                            <div className="collapse collapse-plus join-item border-black border-b-2 w-full p-0">
                                <input type="radio" name="my-accordion-4" defaultChecked />
                                <div className={`collapse-title p-0 font-bold text-[16px] md:text-xl  2xl:text-2xl pt-5 ${montserrat.className}`}>What is Kajabi?</div>
                                <div className="collapse-content text-[12px] md:text-sm 2xl:text-lg font-semibold">Synergistically productivate fully researched infomediaries rather than distinctive growth strategies. Compellingly facilitate an expanded array of innovation whereas team building systems. Competently brand scalable metrics for dynamic infrastructures. Collaboratively integrate turnkey scenarios before.</div>
                            </div>
                            <div className="collapse collapse-plus join-item border-black border-b-2 w-full p-0">
                                <input type="radio" name="my-accordion-4" defaultChecked />
                                <div className={`collapse-title p-0 font-bold text-[16px] md:text-xl  2xl:text-2xl pt-5 ${montserrat.className}`}>What is Kajabi?</div>
                                <div className="collapse-content text-[12px] md:text-sm 2xl:text-lg font-semibold">Synergistically productivate fully researched infomediaries rather than distinctive growth strategies. Compellingly facilitate an expanded array of innovation whereas team building systems. Competently brand scalable metrics for dynamic infrastructures. Collaboratively integrate turnkey scenarios before.</div>
                            </div>
                            <div className="collapse collapse-plus join-item border-black border-b-2 w-full p-0">
                                <input type="radio" name="my-accordion-4" defaultChecked />
                                <div className={`collapse-title p-0 font-bold text-[16px] md:text-xl  2xl:text-2xl pt-5 ${montserrat.className}`}>What is Kajabi?</div>
                                <div className="collapse-content text-[12px] md:text-sm 2xl:text-lg font-semibold">Synergistically productivate fully researched infomediaries rather than distinctive growth strategies. Compellingly facilitate an expanded array of innovation whereas team building systems. Competently brand scalable metrics for dynamic infrastructures. Collaboratively integrate turnkey scenarios before.</div>
                            </div>
                            <div className="collapse collapse-plus join-item border-black border-b-2 w-full p-0">
                                <input type="radio" name="my-accordion-4" defaultChecked />
                                <div className={`collapse-title p-0 font-bold text-[16px] md:text-xl  2xl:text-2xl pt-5 ${montserrat.className}`}>What is Kajabi?</div>
                                <div className="collapse-content text-[12px] md:text-sm 2xl:text-lg font-semibold">Synergistically productivate fully researched infomediaries rather than distinctive growth strategies. Compellingly facilitate an expanded array of innovation whereas team building systems. Competently brand scalable metrics for dynamic infrastructures. Collaboratively integrate turnkey scenarios before.</div>
                            </div>
                            <div className="collapse collapse-plus join-item border-black border-b-2 w-full p-0">
                                <input type="radio" name="my-accordion-4" defaultChecked />
                                <div className={`collapse-title p-0 font-bold text-[16px] md:text-xl  2xl:text-2xl pt-5 ${montserrat.className}`}>What is Kajabi?</div>
                                <div className="collapse-content text-[12px] md:text-sm 2xl:text-lg font-semibold">Synergistically productivate fully researched infomediaries rather than distinctive growth strategies. Compellingly facilitate an expanded array of innovation whereas team building systems. Competently brand scalable metrics for dynamic infrastructures. Collaboratively integrate turnkey scenarios before.</div>
                            </div>
                            <div className="collapse collapse-plus join-item border-black border-b-2 w-full p-0">
                                <input type="radio" name="my-accordion-4" defaultChecked />
                                <div className={`collapse-title p-0 font-bold text-[16px] md:text-xl  2xl:text-2xl pt-5 ${montserrat.className}`}>What is Kajabi?</div>
                                <div className="collapse-content text-[12px] md:text-sm 2xl:text-lg font-semibold">Synergistically productivate fully researched infomediaries rather than distinctive growth strategies. Compellingly facilitate an expanded array of innovation whereas team building systems. Competently brand scalable metrics for dynamic infrastructures. Collaboratively integrate turnkey scenarios before.</div>
                            </div>
                            <div className="collapse collapse-plus join-item border-black border-b-2 w-full p-0">
                                <input type="radio" name="my-accordion-4" defaultChecked />
                                <div className={`collapse-title p-0 font-bold text-[16px] md:text-xl  2xl:text-2xl pt-5 ${montserrat.className}`}>What is Kajabi?</div>
                                <div className="collapse-content text-[12px] md:text-sm 2xl:text-lg font-semibold">Synergistically productivate fully researched infomediaries rather than distinctive growth strategies. Compellingly facilitate an expanded array of innovation whereas team building systems. Competently brand scalable metrics for dynamic infrastructures. Collaboratively integrate turnkey scenarios before.</div>
                            </div>
                            <div className="collapse collapse-plus join-item border-black border-b-2 w-full p-0">
                                <input type="radio" name="my-accordion-4" defaultChecked />
                                <div className={`collapse-title p-0 font-bold text-[16px] md:text-xl  2xl:text-2xl pt-5 ${montserrat.className}`}>What is Kajabi?</div>
                                <div className="collapse-content text-[12px] md:text-sm 2xl:text-lg font-semibold">Synergistically productivate fully researched infomediaries rather than distinctive growth strategies. Compellingly facilitate an expanded array of innovation whereas team building systems. Competently brand scalable metrics for dynamic infrastructures. Collaboratively integrate turnkey scenarios before.</div>
                            </div>
                            <div className="collapse collapse-plus join-item border-black border-b-2 w-full p-0">
                                <input type="radio" name="my-accordion-4" defaultChecked />
                                <div className={`collapse-title p-0 font-bold text-[16px] md:text-xl  2xl:text-2xl pt-5 ${montserrat.className}`}>What is Kajabi?</div>
                                <div className="collapse-content text-[12px] md:text-sm 2xl:text-lg font-semibold">Synergistically productivate fully researched infomediaries rather than distinctive growth strategies. Compellingly facilitate an expanded array of innovation whereas team building systems. Competently brand scalable metrics for dynamic infrastructures. Collaboratively integrate turnkey scenarios before.</div>
                            </div>
                            <div className="collapse collapse-plus join-item border-black border-b-2 w-full p-0">
                                <input type="radio" name="my-accordion-4" defaultChecked />
                                <div className={`collapse-title p-0 font-bold text-[16px] md:text-xl  2xl:text-2xl pt-5 ${montserrat.className}`}>What is Kajabi?</div>
                                <div className="collapse-content text-[12px] md:text-sm 2xl:text-lg font-semibold">Synergistically productivate fully researched infomediaries rather than distinctive growth strategies. Compellingly facilitate an expanded array of innovation whereas team building systems. Competently brand scalable metrics for dynamic infrastructures. Collaboratively integrate turnkey scenarios before.</div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questions