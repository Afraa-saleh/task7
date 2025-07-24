import StatWithImageSection from "@/component/common/StatWithImageSection";
import Footer from "@/component/footer/Footer";
import Header from "@/component/header/Header";

import CardSlider from "@/component/home/CardSlider";
import FeatureSection from "@/component/home/FeatureCardSection";
import PopularPackages from "@/component/home/PopularPackages";
import ReadyToStart from "@/component/home/ReadyToStart";
import { cards, popularPackages, testimonials, tourCardsData } from "@/Data/data";
import FormSection from "@/component/home/FormSection";
import ClientSlider from "@/component/common/ClientsSlider";

export default function Home() {
  return (
    <>
      <Header />

      <main >
        <CardSlider data={tourCardsData} />
        <StatWithImageSection
          imageSrc="/images/home/loc.webp"
          intro="WELCOME TO OUR SITE!"
          heading="We Are The Center Of Lucca To Offer You The Best"
          description="We are right in the center of Lucca to offer you the real city life! With years of experience in practically every tourism sector..."
        />

        <ReadyToStart />
        <FeatureSection cards={cards} />
        <FormSection />
        <PopularPackages />
        <ClientSlider testimonials={testimonials} />

        <Footer />

      </main>
    </>

  );
}
