const Reviews = () => {
  return (
    <div className="p-10 bg-[#f1fbfc] overflow-hidden flex flex-col justify-start items-center w-full min-h-fit md:mt-20 mt-0 mb-10">
      <h2 className="md:text-5xl  text-3xl mt-20  text-black">
        Praise for <span className="font-bold">Precision</span> and{" "}
        <span className="font-bold">Performance</span>
      </h2>
      <p className="text-xl text-black text-center md:w-1/2 w-3/4 mt-10">
        Here are some noteworthy recognitions and testimonials that underscore
        our commitment to excellence
      </p>
      <div className=" relative flex gap-2 mt-10 flex-col w-full justify-center items-center">
        <img
          src="../../images/imagecompressor/review1-min.JPG"
          alt="review"
          className="relative -right-10 w-[700px] h-[180px] mt-10 mb-2 rounded-3xl shadow-[0_35px_60px_-55px_rgba(0,0,0,0.3)] shadow-black/50"
        />
        <img
          src="../../images/imagecompressor/review2-min.JPG"
          alt="review"
          className="relative w-[700px] h-[180px] right-10  mb-2 rounded-3xl shadow-[0_35px_60px_-55px_rgba(0,0,0,0.3)] shadow-black/50"
        />
        <img
          src="../../images/imagecompressor/review3-min.JPG"
          alt="review"
          className="relative w-[700px] h-[180px] -right-10  mb-2 rounded-3xl shadow-[0_35px_60px_-55px_rgba(0,0,0,0.3)] shadow-black/50"
        />
        <img
          src="../../images/imagecompressor/review4-min.JPG"
          alt="review"
          className="relative w-[700px] h-[180px] right-10 mb-2 rounded-3xl shadow-[0_35px_60px_-55px_rgba(0,0,0,0.3)] shadow-black/50"
        />
        <img
          src="../../images/imagecompressor/review5-min.JPG"
          alt="review"
          className="relative w-[700px] h-[180px] -right-10 mb-2 rounded-3xl shadow-[0_35px_60px_-55px_rgba(0,0,0,0.3)] shadow-black/50"
        />
        <img
          src="../../images/imagecompressor/review6-min.JPG"
          alt="review"
          className="relative w-[700px] h-[180px] right-10 mb-8 rounded-3xl shadow-[0_35px_60px_-55px_rgba(0,0,0,0.3)] shadow-black/50"
        />
      </div>
      <div className="relative w-10 h-10 likes"></div>
      <div className="relative w-10 h-10 hearts"></div>
      <div className="relative w-10 h-10 likes1"></div>
      <div className="relative w-10 h-10 hearts1"></div>
      <img className="arrow " src="../../images/imagecompressor/arrow-min.png" alt="" />
    </div>
  );
};

export default Reviews;
