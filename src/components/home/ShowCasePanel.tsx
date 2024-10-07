import { CodeBracketIcon, Cog8ToothIcon } from "@heroicons/react/16/solid";
import { ClipboardDocumentCheckIcon } from "@heroicons/react/16/solid";
import React from "react";
import { PortfolioItem } from "@/models/portfolio_item";
import { ClassValue } from "clsx";
import { cn } from "@/lib/utils";
import logo_hero from "@/assets/svg/jaycodex-hero-logo.svg";

type ShowCasePanelProps = {
  portfolio: PortfolioItem;
  className?: ClassValue;
};

export const ShowCasePanel: React.FC<ShowCasePanelProps> = (props) => {
  return (
    <div className={cn("flex flex-col items-center", props.className)}>
      <div className="mb-2 bg-primary-600 text-white rounded-full w-8 h-8 font-cinzel font-extrabold text-center flex items-center justify-center">
        {props.portfolio.projectId}
      </div>
      <p className="text-2xl break-all tracking-widest text-center font-extrabold font-cinzel">
        {props.portfolio.title}
      </p>
      {props.portfolio.subTitle != null && (
        <p className="text-sm mx-8 mb-4 text-center text-secondary-600">
          {props.portfolio.subTitle}
        </p>
      )}
      <div className="px-6 w-screen">
        <div className="flex mt-2 w-full h-[250px] p-2 rounded-2xl bg-primary-800">
          <img
            id="hero-logo"
            src={logo_hero}
            className="p-8 m-auto animate-pulse "
            alt=""
          />
        </div>
      </div>

      <div className="bg-black/60 border-primary-700 border flex flex-col justify-start mx-6 mt-4 p-4 rounded-2xl">
        <div className="flex items-center ">
          <p className="self-start text-sm  font-poppins text-secondary-600">
            Project Description
          </p>
          <ClipboardDocumentCheckIcon
            width={16}
            className="ml-2 text-primary-400"
          />
        </div>
        <p className="text-xs self-start mt-2 leading-5  font-poppins text-secondary-700">
          {props.portfolio.projectDesc}
        </p>
        <div className="flex items-center mt-5">
          <p className="self-start text-sm  font-poppins text-secondary-600">
            Relevant Roles
          </p>
          <Cog8ToothIcon width={16} className="ml-2 text-primary-400" />
        </div>
        <p className="text-xs self-start mt-2 leading-5 font-poppins text-secondary-700 break-normal">
          {props.portfolio.roles}
        </p>
        <div className="flex items-center mt-5">
          <p className="self-start text-sm  font-poppins text-secondary-600">
            Stack
          </p>
          <CodeBracketIcon width={16} className="ml-2 text-primary-400" />
        </div>
        <div className="*:w-6 *:h-6 flex gap-4 mt-3 text-secondary-700">
          {props.portfolio.stacks.map((s) => (
            <img src={s.image} alt={s.alt} />
          ))}
        </div>
      </div>
      <a className="font-cinzel mt-5" href="">
        View Details
      </a>
    </div>
  );
};

export default ShowCasePanel;
