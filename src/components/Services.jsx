import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import { useRef } from "react";
import scrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);

gsap.registerPlugin(scrollTrigger);

const Services = () => {
  // const containerLeft = useRef();
  // const containerRight = useRef();

  // useGSAP(() => {
  // scrollTrigger.create({
  // trigger: containerLeft.current.querySelector(".LeftEle"),
  //     start: "top center",
  //     end: "bottom center",
  //     animation: gsap.fromTo(
  // containerLeft.current,
  //       {
  //         x: 0,
  //         stagger: 0.1,
  //       },
  //       {
  //         x: 200,

  //         opacity: 1,
  //         duration: 1.5,
  //       }
  //     ),
  //   });
  // }, [containerLeft]);

  // useGSAP(() => {
  //   scrollTrigger.create({
  // trigger: containerRight.current.querySelector(".RightEle"),
  //     start: "top center",
  //     end: "top center",
  //     animation: gsap.fromTo(
  // containerRight.current,
  //       {
  //         x: 0,
  //         stagger: 0.1,
  //       },
  //       {
  //         x: -200,
  //         opacity: 1,
  //         duration: 1.5,
  //       }
  //     ),
  //   });
  // }, [containerRight]);

  return (
    <div className="md:flex flex-col hidden justify-center capitalize items-center w-full h-full md:mt-[30%] mt-[90%]">
      <div className="w-1/2 h-1 bg-black mb-5"></div>
      <h2 className="md:text-5xl text-3xl font-bold text-black">Services we offer</h2>

      <div className="flex flex-col gap-10 mt-10  h-full">
        <div className=" relative flex gap-10">
          <div
            // ref={containerLeft}
            className="card border-2 border-black rounded-3xl p-5 w-96 shadow-xl"
          >
            <img
              className="w-10 h-10 LeftEle "
              src="../../images/imagecompressor/servies1icon-min.jpg"
              alt="ux"
            />
            <p className=" LeftEle text-sm font-bold text-black w-[300px]">
              Elevate user experiences with our UI/UX design expertise.
              Intuitive interfaces, seamless navigation, and visually
              captivating designs tailored to your brand.{" "}
            </p>
          </div>
          <div
            // ref={containerRight}
            className="flex justify-center items-center  bg-[url(../../images/imagecompressor/servies1-min.jpg)] bg-cover bg-center bg-no-repeat bg-blend-multiply card border-2 border-black rounded-3xl p-5 w-[400px] h-full shadow-xl "
          >
            <div
              className="RightEle"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                borderRadius: "inherit",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 1,
              }}
            />

            <p className="w-[300px] h-[120px] RightEle text-white z-10 text-center font-bold text-xl">
              UI-UX design
            </p>
          </div>
        </div>
        <div className=" relative flex gap-10">
          <div
            // ref={containerLeft}
            className="card border-2 border-black rounded-3xl p-5 w-96 shadow-xl"
          >
            <img
              className="w-10 h-10"
              src="../../images/imagecompressor/servies2icon-min.png"
              alt="ux"
            />
            <p className=" text-sm font-bold text-black w-[300px]">
              Elevate user experiences with our UI/UX design expertise.
              Intuitive interfaces, seamless navigation, and visually
              captivating designs tailored to your brand.{" "}
            </p>
          </div>
          <div
            // ref={containerRight}
            className="flex justify-center items-center  bg-[url(../../images/imagecompressor/servies2-min.jpg)] bg-cover bg-center bg-no-repeat bg-blend-multiply card border-2 border-black rounded-3xl p-5 w-[400px] h-full shadow-xl "
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                borderRadius: "inherit",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 1,
              }}
            />

            <p className="w-[300px] h-[120px] text-white z-10 text-center font-bold text-xl">
              UI-UX design
            </p>
          </div>
        </div>
        <div className=" relative flex gap-10">
          <div
            // ref={containerLeft}
            className="card border-2 border-black rounded-3xl p-5 w-96 shadow-xl"
          >
            <img
              className="w-10 h-10"
              src="../../images/imagecompressor/servies3icon-min.png"
              alt="ux"
            />
            <p className=" text-sm font-bold text-black w-[300px]">
              Elevate user experiences with our UI/UX design expertise.
              Intuitive interfaces, seamless navigation, and visually
              captivating designs tailored to your brand.{" "}
            </p>
          </div>
          <div
            // ref={containerRight}
            className="flex justify-center items-center  bg-[url(../../images/imagecompressor/servies3-min.jpg)] bg-cover bg-center bg-no-repeat bg-blend-multiply card border-2 border-black rounded-3xl p-5 w-[400px] h-full shadow-xl "
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                borderRadius: "inherit",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 1,
              }}
            />

            <p className="w-[300px] h-[120px] text-white z-10 text-center font-bold text-xl">
              UI-UX design
            </p>
          </div>
        </div>
        <div className=" relative flex gap-10">
          <div
            // ref={containerLeft}
            className="card border-2 border-black rounded-3xl p-5 w-96 shadow-xl"
          >
            <img
              className="w-10 h-10"
              src="../../images/imagecompressor/servies4icon-min.png"
              alt="ux"
            />
            <p className=" text-sm font-bold text-black w-[300px]">
              Elevate user experiences with our UI/UX design expertise.
              Intuitive interfaces, seamless navigation, and visually
              captivating designs tailored to your brand.{" "}
            </p>
          </div>
          <div
            // ref={containerRight}
            className="flex justify-center items-center  bg-[url(../../images/imagecompressor/servies4-min.jpg)] bg-cover bg-center bg-no-repeat bg-blend-multiply card border-2 border-black rounded-3xl p-5 w-[400px] h-full shadow-xl "
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                borderRadius: "inherit",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 1,
              }}
            />

            <p className="w-[300px] h-[120px] text-white z-10 text-center font-bold text-xl">
              UI-UX design
            </p>
          </div>
        </div>
        <div className=" relative flex gap-10">
          <div
            // ref={containerLeft}
            className="card border-2 border-black rounded-3xl p-5 w-96 shadow-xl"
          >
            <img
              className="w-10 h-10"
              src="../../images/imagecompressor/servies5icon-min.png"
              alt="ux"
            />
            <p className=" text-sm font-bold text-black w-[300px]">
              Elevate user experiences with our UI/UX design expertise.
              Intuitive interfaces, seamless navigation, and visually
              captivating designs tailored to your brand.{" "}
            </p>
          </div>
          <div
            // ref={containerRight}
            className="flex justify-center items-center  bg-[url(../../images/imagecompressor/servies5-min.jpg)] bg-cover bg-center bg-no-repeat bg-blend-multiply card border-2 border-black rounded-3xl p-5 w-[400px] h-full shadow-xl "
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                borderRadius: "inherit",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 1,
              }}
            />

            <p className="w-[300px] h-[120px] text-white z-10 text-center font-bold text-xl">
              UI-UX design
            </p>
          </div>
        </div>
        <div className=" relative flex gap-10">
          <div
            // ref={containerLeft}
            className="card border-2 border-black rounded-3xl p-5 w-96 shadow-xl"
          >
            <img
              className="w-10 h-10 spin transition-all ease-in-out"
              src="../../public/images/imagecompressor/servies6icon-min.png"
              alt="ux"
            />
            <p className=" text-sm font-bold text-black w-[300px]">
              Elevate user experiences with our UI/UX design expertise.
              Intuitive interfaces, seamless navigation, and visually
              captivating designs tailored to your brand.{" "}
            </p>
          </div>
          <div
            // ref={containerRight}
            className="flex justify-center items-center  bg-[url(../../images/imagecompressor/servies6-min.jpg)] bg-cover bg-center bg-no-repeat bg-blend-multiply card border-2 border-black rounded-3xl p-5 w-[400px] h-full shadow-xl "
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                borderRadius: "inherit",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 1,
              }}
            />

            <p className="w-[300px] h-[120px] text-white z-10 text-center font-bold text-xl">
              UI-UX design
            </p>
          </div>
        </div>
        <div className=" relative flex gap-10">
          <div
            // ref={containerLeft}
            className="card border-2 border-black rounded-3xl p-5 w-96 shadow-xl"
          >
            <img
              className="w-10 h-10"
              src="../../images/imagecompressor/servies7icon-min.png"
              alt="ux"
            />
            <p className=" text-sm font-bold text-black w-[300px]">
              Elevate user experiences with our UI/UX design expertise.
              Intuitive interfaces, seamless navigation, and visually
              captivating designs tailored to your brand.{" "}
            </p>
          </div>
          <div
            // ref={containerRight}
            className="flex justify-center items-center  bg-[url(../../images/imagecompressor/servies7-min.jpg)] bg-cover bg-center bg-no-repeat bg-blend-multiply card border-2 border-black rounded-3xl p-5 w-[400px] h-full shadow-xl "
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                borderRadius: "inherit",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 1,
              }}
            />

            <p className="w-[300px] h-[120px] text-white z-10 text-center font-bold text-xl">
              UI-UX design
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-1 bg-black mt-5 mb-8 "></div>
      <img
        className="arrow"
        src="../../images/imagecompressor/arrow-min.png"
        alt=""
      />
    </div>
  );
};

export default Services;
