import { PortfolioItem } from "./portfolio_item";
import { StackIcons } from "./stack";

const devPortfolios: PortfolioItem[] = [
  {
    title: "Skrept",
    projectDesc:
      "Skrept provides access to professional and quality services tailored to meet your specific needs, right where you are.",
    createdAt: new Date(),
    projectId: "1",
    images: [],
    roles: "Sole Software Developer & Architect, UI/UX Designer",
    stacks: [
      {
        image: StackIcons.flutter,
      },
      {
        image: StackIcons.dart,
      },
      {
        image: StackIcons.postgresql,
      },
      {
        image: StackIcons.figma,
      },
      {
        image: StackIcons.inkscape,
      },
      {
        image: StackIcons.typescript,
      },
    ],
  },
  {
    title: "ISPOR",
    subTitle:
      "The Professional Society For Pharmacoeconomics and Outcomes Research Editorial Project",
    projectDesc:
      "An inititative to promote problem-sharing, and educate ISPORites on common and rare issues faced by students",
    createdAt: new Date(),
    projectId: "2",
    images: [],
    roles: "Sole Software Developer, UI/UX Designer, Editor",
    stacks: [
      {
        image: StackIcons.react,
      },
      {
        image: StackIcons.typescript,
      },
      {
        image: StackIcons.postgresql,
      },
      {
        image: StackIcons.tailwindcss,
      },
      {
        image: StackIcons.inkscape,
      },
      {
        image: StackIcons.figma,
      },
      {
        image: StackIcons.wordpress,
      },
    ],
  },
  {
    title: "Inkstock",
    projectDesc:
      "A Linux application for designers, creators, and developers to fetch, generate and prepare free resources for development, design, UI/UX in one place.",
    createdAt: new Date(),
    projectId: "3",
    images: [],
    roles: "Sole Software Developer, UI/UX Designer, Editor",
    stacks: [
      {
        image: StackIcons.gnome,
      },
      {
        image: StackIcons.python,
      },
      {
        image: StackIcons.inkscape,
      },
    ],
  },
];
export default devPortfolios;
