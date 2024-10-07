import jc_desktop from "@/assets/images/justin-chinedu-desktop.webp";
import jc_tab from "@/assets/images/justin-chinedu-tab.webp";
import jc_mobile from "@/assets/images/justin-chinedu-mobile.webp";
import logo_hero from "@/assets/svg/jaycodex-hero-logo.svg";
import { NAME } from "@/lib/constants";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import { MapPinIcon } from "lucide-react";

const HeroSection = () => {
  const container = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline>();
  useGSAP(
    () => {
      tl.current = gsap
        .timeline()

        .from("#hero-img", {
          ease: "sine.in",
          duration: 1,
          opacity: 0,
          x: 20,
        })
        .from(
          "#hero-title",
          {
            ease: "sine.in",
            duration: 1,
            opacity: 0,
            x: 20,
          },
          1.5
        )
        .from("#hero-logo", {
          ease: "sine.in",
          duration: 1,
          opacity: 0,
        });
    },
    { scope: container }
  );

  return (
    <div ref={container} className="relative w-screen h-[500px]">
      {/* Logo */}
      <img
        id="hero-logo"
        src={logo_hero}
        className="absolute w-screen p-8 m-auto opacity-10"
        alt=""
      />
      {/* Image */}
      <img
        id="hero-img"
        className="absolute h-[450px] object-contain"
        src={jc_tab}
        srcSet={`${jc_mobile} x1, ${jc_tab} x2, ${jc_desktop} x3`}
        alt="Hero Image"
      />
      {/* Title */}
      <div
        id="hero-title"
        className="absolute flex flex-col items-end gap-2 bottom-8 right-8"
      >
        <p className="text-3xl font-semibold text-right font-cinzel text-secondary-400">
          {NAME}
        </p>
        <p className="text-sm text-right font-poppins max-w-60 text-secondary-600">
          Pharmacist, Software Developer, Designer, Artist
        </p>
        <div className="flex items-center justify-end gap-2 text-sm text-secondary-700">
          <MapPinIcon size={14} />
          <p>Enugu, Nigeria</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
