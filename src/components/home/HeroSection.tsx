import jc_desktop from "@/assets/images/justin-chinedu-desktop.webp";
import jc_tab from "@/assets/images/justin-chinedu-tab.webp";
import jc_mobile from "@/assets/images/justin-chinedu-mobile.webp";
import logo_hero from "@/assets/svg/jaycodex-hero-logo.svg";
import { NAME } from "@/lib/constants";
const HeroSection = () => {
  return (
    <div className="relative w-screen h-[500px]">
      {/* Logo */}
      <img
        src={logo_hero}
        className="absolute p-8 opacity-10 w-screen m-auto"
        alt=""
      />
      {/* Image */}
      <img
        className="absolute h-[450px] object-contain"
        src={jc_tab}
        srcSet={`${jc_mobile} x1, ${jc_tab} x2, ${jc_desktop} x3`}
        alt="Hero Image"
      />
      {/* Title */}
      <div className="absolute bottom-8 right-8">
        <p className="font-barlow text-secondary-400 text-3xl font-semibold text-right">
          {NAME}
        </p>
        <p className="font-poppins text-sm text-right max-w-60  text-secondary-700">
          Pharmacist, Software Developer, Designer, Artist
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
