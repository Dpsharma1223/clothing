import AboutHero from "../components/aboutHero";
import AboutStats from "../components/aboutStats";
import AboutTestimonials from "../components/aboutTestimonial";
import AboutUs from "../components/aboutUs";
import Team from "../components/team";

export default function About() {
    return (
      <>
      <div className="bg-[url(/aboutUs/bn_aboutus.jpg)] bg-cover bg-center bg-fixed">
        <AboutHero />
        <AboutUs />
        <AboutStats />
        <AboutTestimonials />
        <Team />
      </div>
      </>
    );
  }
  