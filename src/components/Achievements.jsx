const Achievements = () => {
  return (
    <div className="mt-10 flex flex-col md:justify-start justify-center items-center min-h-fit overflow-hidden p-10">
      <h2 className="text-center text-black  text-5xl z-10 md:mb-5 mb-0">
        Our <span className="font-bold ">Achievements</span>
      </h2>
      <div className="blur-3xl -z-10 w-full h-full flex justify-center items-center ">
        <div className="circle-container flex gap-10 mt-10 relative justify-center items-center">
          <div className="circle w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-pink-600 to-red-500"></div>
          <div className="circle w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-600 to-purple-500"></div>
          <div className="circle w-[600px] h-[600px] rounded-full bg-gradient-to-r from-yellow-600 to-red-500"></div>
          <div className="circle w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-pink-600 to-red-500"></div>
          <div className="circle w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-600 to-red-500"></div>
          <div className="circle w-[900px] h-[900px] rounded-full bg-gradient-to-r from-orange-600 to-yellow-500"></div>
        </div>
      </div>
      <div className="md:mt-2 mt-10 md:p-32 p-2  md:pt-14 w-full absolute ">
        <img src="../../images/imagecompressor/achivements1-min.jpg" alt="achivements" />
        <p className="animate-text text-center bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent md:text-2xl text-xl font-semibold">
          (&#x2764; Receive awards from Honorable Chief minister of goa and the
          governor of sikkim &#x2764;)
        </p>
      </div>
    </div>
  );
};

export default Achievements;
