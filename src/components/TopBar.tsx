import { NAME } from "../core/constants";

function TopBar() {
  return (
    <>
      <div className="bg-background-800 w-screen h-[52px] flex justify-center items-center">
        <p className="text-secondary-500 font-barlow">{NAME}</p>
      </div>
    </>
  );
}

export default TopBar;
