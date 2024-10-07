function ShowCaseTabs() {
  return (
    <div className="flex gap-x-2 items-center justify-between mx-8 mt-8  h-[50px] p-2 rounded-full bg-primary-800">
      <div className="text-center px-4 py-1 bg-primary-600 text-white rounded-full min-w-[20%] w-full">
        Software
      </div>
      <div className="opacity-40 text-center px-4 py-1 bg-primary-600 text-white rounded-full min-w-[30%]">
        Design
      </div>
      <div className="opacity-40 text-center px-4 py-1 bg-primary-600 text-white rounded-full min-w-[20%]">
        Art
      </div>
    </div>
  );
}

export default ShowCaseTabs;
