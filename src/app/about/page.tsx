import HeaderAbout from "@/component/about/AboutHeader/Header";
import WhatWeDo from "@/component/about/main/WhatWeDo";
import ClientSlider from "@/component/common/ClientsSlider";
import StatWithImageSection from "@/component/common/StatWithImageSection";
import Footer from "@/component/footer/Footer";
import Navbar from "@/component/header/navbar/Navbar";
import { testimonials } from "@/Data/data";

export default function About() {
  return (
    <>

      <Navbar />
      <HeaderAbout />
      <StatWithImageSection
        imageSrc="/images/about/p1.webp"
        intro="WELCOME TO OUR SITE!"
        heading="We Are The Center Of Lucca To Offer You The Best"
        description="We are right in the center of Lucca to offer you the real city life! With years of experience in practically every tourism sector, with us you can find complete packages at the lowest price, to travel and learn and have fun all without worries and without stress. What are you waiting for, book a bright evening, a trip to beautiful Tuscany or a personal tour for you!"
      />
      <WhatWeDo />
      <ClientSlider testimonials={testimonials} />
      <Footer />
    </>

  );
}
