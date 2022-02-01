export default function GetStarted() {
  return (
    <>
      <div className=" container px-4 sm:px-6 lg:px-8 my-16">
        <div className="gradient__bg h-44 rounded-xl">
          <div className=" grid grid-cols-12">
            <div className=" col-span-8 h-44 d-flex-center pl-4">
              <p className=" text-2xl font-bold"><span className=" font-normal text-base">Request Early Access to Get Started</span> <br /> Register today & start exploring the endless possiblities.</p>
            </div>
            <div className={`col-span-4 h-44 d-flex-center mt-1`}>
              <button className=" bg-black text-white rounded-3xl px-6 py-3 font-bold">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
