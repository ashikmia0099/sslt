import Banner from "@/HomePages/BannerSection/Banner";
import GlobalCurrentSetution from "@/HomePages/GlobalCurrentSetution/GlobalCurrentSetution";
import GolsSection from "@/HomePages/GolsSection/GolsSection";
import Banner1 from "./(components)/HomePage2/HomePages2Jsx/Banner1";
import Banner2 from "./(components)/HomePage2/HomePages2Jsx/Banner2";
import Mission from "./(components)/HomePage2/HomePages2Jsx/Mission";
import Vission from "./(components)/HomePage2/HomePages2Jsx/Vission";
import Questions from "./(components)/HomePage2/HomePages2Jsx/Questions";
import OurTeacher from "./(components)/HomePage2/HomePages2Jsx/OurTeacher";
import Head from "next/head";
import Mission_Three_banner from "./(components)/HomePage2/HomePages2Jsx/Mission_Three_banner";



export const metadata = {
  title: 'SSLT | HOME',
  description: 'This is the home page',
}


export default function Home() {
  return (
    <div>
      
      <Banner1></Banner1>
      <Banner2></Banner2>
      <Mission></Mission>
      <Mission_Three_banner></Mission_Three_banner>
      <Vission></Vission>
      <Questions></Questions>
      <OurTeacher></OurTeacher>
    </div>
  );
}
