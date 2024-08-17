const About = () => {
  return (
    <>
      <div className="flex flex-col justify-start mt-20 pb-20 items-center">
        <h1 className="text-5xl text-black ">
          About the <span className="font-bold">Founders</span>
        </h1>

        <div className="flex gap-10 flex-col md:flex-row  justify-center items-center mt-20 mb-10">
          <div className="card w-96  bg-base-100 shadow-xl shadow-black/50   ">
            <div className="card-body justify-center items-center">
              <img
                className="rounded-full w-24 h-24 "
                src="../../images/imagecompressor/rehan-halai-min.jpg"
                alt="rehan-halai"
              />
              <h2 className="card-title capitalize">
                Mr. Rehan Halai{" "}
                <img
                  className="w-6 h-6"
                  src="../../images/imagecompressor/my-business-icon-min.png"
                  alt="verified"
                />
              </h2>
              <h3 className="font-bold capitalize">DIRECTOR & FOUNDER</h3>
              <p className="text-center text-md text-pretty">
                Director and Founder of RABS Net Solutions, it’s my pleasure to
                introduce to you our dynamic organization with the solutions we
                offer. We always look forward to add real value to your business
                through our analytical and inventive ways with every single
                project. We&apos;re committed to TAKING YOU FORWARD, with
                passion, innovation, creating value for our Clients.
              </p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl shadow-black/50 ">
            <div className="card-body justify-center items-center">
              <img
                className="rounded-full w-24 h-24 "
                src="../../images/imagecompressor/bilal-halai-min.jpg"
                alt="bilal-halai"
              />
              <h2 className="card-title capitalize">
                Mr. Bilal Halai{" "}
                <img
                  className="w-6 h-6"
                  src="../../images/imagecompressor/my-business-icon-min.png"
                  alt="verified"
                />
              </h2>
              <h3 className="font-bold capitalize">
                STRATEGY & RESEARCH ANALYST{" "}
              </h3>
              <p className="text-center text-md text-pretty">
                Bilal Halai is the brain behind the proprietary technology
                solution designed by the company for real estate channel
                partners. He leads the development and business development team
                and gives them critical insights which give this unique digital
                platform the cutting edge and helps stakeholders in the real
                estate business taking their revenue to higher levels.
              </p>
            </div>
          </div>
        </div>
        <img className="arrow " src="../../images/imagecompressor/arrow-min.png"alt="" />
      </div>
    </>
  );
};

export default About;
