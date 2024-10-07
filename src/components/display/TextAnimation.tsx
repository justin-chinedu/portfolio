import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

interface TextAnimationProps {
  text: string;
  vars?: gsap.TweenVars;
  splitter?: string;
  textClassName?: ClassValue;
  containerClassName?: ClassValue;
}

const TextAnimation: React.FC<TextAnimationProps> = ({
  text,
  vars,
  splitter,
  textClassName,
  containerClassName,
}) => {
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".char", {
        opacity: 0,
        y: "100%",
        duration: 0.5,
        stagger: {
          amount: 0.1,
        },
        ease: "power3.out",
        ...vars,
      });
    },
    {
      dependencies: [text, vars, textClassName, splitter],
      scope: textRef,
      revertOnUpdate: false,
    }
  );

  return (
    <div
      ref={textRef}
      className={cn(
        "text-3xl font-semibold font-barlow text-secondary-400",
        containerClassName
      )}
    >
      {text.split(splitter ?? "::").map((char, index) => (
        <p
          className={cn("inline-block whitespace-pre-wrap char", textClassName)}
          key={index}
        >
          {char}
        </p>
      ))}
    </div>
  );
};

export default TextAnimation;
