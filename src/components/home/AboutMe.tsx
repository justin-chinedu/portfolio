import { BIO } from "@/lib/constants";
import TextAnimation from "../display/TextAnimation";

import adobeillustrator from "@/assets/svg/stack/adobeillustrator.svg";
import adobephotoshop from "@/assets/svg/stack/adobephotoshop.svg";
import android from "@/assets/svg/stack/android.svg";
import dart from "@/assets/svg/stack/dart.svg";
import figma from "@/assets/svg/stack/figma.svg";
import flutter from "@/assets/svg/stack/flutter.svg";
import gnome from "@/assets/svg/stack/gnome.svg";
import inkscape from "@/assets/svg/stack/inkscape.svg";
import jupyter from "@/assets/svg/stack/jupyter.svg";
import kotlin from "@/assets/svg/stack/kotlin.svg";
import pandas from "@/assets/svg/stack/pandas.svg";
import postgresql from "@/assets/svg/stack/postgresql.svg";
import python from "@/assets/svg/stack/python.svg";
import react from "@/assets/svg/stack/react.svg";
import tailwindcss from "@/assets/svg/stack/tailwindcss.svg";
import typescript from "@/assets/svg/stack/typescript.svg";
import wordpress from "@/assets/svg/stack/wordpress.svg";

import Marquee from "react-fast-marquee";
function AboutMe() {
  // useGSAP(
  //   () => {
  //     gsap.set(".stacks > *", {
  //       x: "100vw",
  //     });
  //     gsap.to(".stacks > *", {
  //       x: "-250vw",
  //       duration: 20,
  //       ease: "linear",
  //       repeat: -1,
  //       stagger: {
  //         amount: 1,
  //         from: "start",
  //       },
  //     });
  //   },
  //   { scope: stacksRef, dependencies: [] }
  // );
  return (
    <>
      <div className="flex flex-col gap-2 bottom-8 right-8 ">
        <div className="aboutme flex flex-col gap-2 p-8">
          <TextAnimation
            splitter=""
            text="TL ; DR"
            vars={{
              x: "100%",
              delay: 2,
            }}
            textClassName="font-cinzel text-lg"
          />
          <TextAnimation
            vars={{
              duration: 3,
              stagger: { each: 5, yoyo: true, repeat: 1 },
              opacity: 0.5,
              y: 0,
              color: "#00000",
              scrollTrigger: {
                trigger: ".tldr-bio",
                start: "center 70%",
                pin: true,
                scrub: 1,
              },
            }}
            splitter="::"
            text={BIO}
            containerClassName="tldr-bio"
            textClassName="text-sm leading-6 font-poppins max-w-200 text-secondary-600 font-normal"
          />
        </div>
        <Marquee autoFill>
          <div className="stacks flex px-4 gap-8 brightness-100 *:w-10 *:h-10 overflow-x-hidden">
            <img src={adobeillustrator} alt="Adobe Illustrator" />
            <img src={adobephotoshop} alt="Adobe Photoshop" />
            <img src={android} alt="Android" />
            <img src={dart} alt="Dart" />
            <img src={figma} alt="Figma" />
            <img src={flutter} alt="Flutter" />
            <img src={gnome} alt="GNOME" />
            <img src={inkscape} alt="Inkscape" />
            <img src={jupyter} alt="Jupyter" />
            <img src={kotlin} alt="Kotlin" />
            <img src={pandas} alt="Pandas" />
            <img src={postgresql} alt="PostgreSQL" />
            <img src={python} alt="Python" />
            <img src={react} alt="React" />
            <img src={tailwindcss} alt="Tailwind CSS" />
            <img src={typescript} alt="TypeScript" />
            <img src={wordpress} alt="WordPress" />
          </div>
        </Marquee>

        <div className="flex items-center justify-center mt-4 *:text-secondary-500">
          <span className="mr-4">2019</span>
          <div className="w-4 h-4 rounded-full bg-secondary-500" />
          <div className="w-32 h-2 bg-secondary-500" />
          <div className="w-4 h-4 rounded-full bg-secondary-500" />
          <span className="ml-4">2024</span>
        </div>
        <div className="flex flex-col  p-8">
          <hr className="my-10" />
          <TextAnimation
            vars={{}}
            text="PORTFOLIO"
            textClassName="text-7xl break-all font-extrabold font-cinzel"
          />
          <TextAnimation
            vars={{}}
            text="A Chronological Showcase"
            textClassName="text-xl font-light text-secondary-600 font-poppins"
          />
        </div>
      </div>
    </>
  );
}

export default AboutMe;
