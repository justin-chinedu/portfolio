import { MenuIcon } from "lucide-react";
function TopBar() {
  return (
    <>
      <div className="bg-background-800 w-screen h-[52px] flex justify-between px-4 items-center">
        <div></div>
        <p className="text-secondary-500 text-lg tracking-[1.1em] font-barlow">
          JAYCODEX
        </p>
        <MenuIcon size={24} />
        
      </div>
    </>
  );
}

export default TopBar;
