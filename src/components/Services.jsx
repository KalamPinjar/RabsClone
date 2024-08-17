import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import scrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);

gsap.registerPlugin(scrollTrigger);

const Services = () => {
  const containerLeft = useRef();
  const containerRight = useRef();

  // useGSAP(() => {
  //   scrollTrigger.create({
  //     trigger: containerLeft.current,
  //     start: "top center",
  //     end: "bottom center",
  //     animation: gsap.fromTo(
  //       containerLeft.current,
  //       {
  //         right: 100,
  //         opacity: 0,
  //       },
  //       {
  //         right: 0,
  //         opacity: 1,
  //         duration: 1.5,
  //       }
  //     ),
  //   });
  // }, [containerLeft]);

  // useGSAP(() => {
  //   scrollTrigger.create({
  //     trigger: containerRight.current,
  //     start: "top center",
  //     end: "bottom center",
  //     animation: gsap.fromTo(
  //       containerRight.current,
  //       {
  //         right: 100,
  //         opacity: 0,
  //       },
  //       {
  //         right: 0,
  //         opacity: 1,
  //         duration: 1.5,
  //       }
  //     ),
  //   });
  // }, [containerRight]);

  return (
    <div className="flex flex-col justify-center capitalize items-center w-full h-full md:mt-[30%] mt-[80%]">
      <div className="w-1/2 h-1 bg-black mb-5"></div>
      <h2 className="text-5xl font-bold text-black">Services we offer</h2>

      <div className="flex flex-col gap-10 mt-10  h-full">
        <div className=" relative flex gap-10">
          <div
            ref={containerLeft}
            className="card border-2 border-black rounded-3xl p-5 w-96 shadow-xl"
          >
            <img
              className="w-10 h-10"
              src="../../images/servies1icon.jpg"
              alt="ux"
            />
            <p className=" text-sm font-bold text-black w-[300px]">
              Elevate user experiences with our UI/UX design expertise.
              Intuitive interfaces, seamless navigation, and visually
              captivating designs tailored to your brand.{" "}
            </p>
          </div>
          <div
            ref={containerRight}
            className="flex justify-center items-center  bg-[url(../../images/servies1.jpg)] bg-cover bg-center bg-no-repeat bg-blend-multiply card border-2 border-black rounded-3xl p-5 w-[400px] h-full shadow-xl absolute  right-0"
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

            <p className="text-white z-10 text-center font-bold text-xl">
              UI-UX design
            </p>
          </div>
        </div>
        <div className=" relative flex gap-10">
          <div
            ref={containerLeft}
            className="card border-2 border-black rounded-3xl p-5 w-96 shadow-xl"
          >
            <img
              className="w-10 h-10"
              src="../../images/servies2icon.png"
              alt="ux"
            />
            <p className=" text-sm font-bold text-black w-[300px]">
              Elevate user experiences with our UI/UX design expertise.
              Intuitive interfaces, seamless navigation, and visually
              captivating designs tailored to your brand.{" "}
            </p>
          </div>
          <div
            ref={containerRight}
            className="flex justify-center items-center  bg-[url(../../images/servies2.jpg)] bg-cover bg-center bg-no-repeat bg-blend-multiply card border-2 border-black rounded-3xl p-5 w-[400px] h-full shadow-xl absolute  right-0"
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

            <p className="text-white z-10 text-center font-bold text-xl">
              UI-UX design
            </p>
          </div>
        </div>
        <div className=" relative flex gap-10">
          <div
            ref={containerLeft}
            className="card border-2 border-black rounded-3xl p-5 w-96 shadow-xl"
          >
            <img
              className="w-10 h-10"
              src="../../images/servies3icon.png"
              alt="ux"
            />
            <p className=" text-sm font-bold text-black w-[300px]">
              Elevate user experiences with our UI/UX design expertise.
              Intuitive interfaces, seamless navigation, and visually
              captivating designs tailored to your brand.{" "}
            </p>
          </div>
          <div
            ref={containerRight}
            className="flex justify-center items-center  bg-[url(../../images/servies3.jpg)] bg-cover bg-center bg-no-repeat bg-blend-multiply card border-2 border-black rounded-3xl p-5 w-[400px] h-full shadow-xl absolute  right-0"
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

            <p className="text-white z-10 text-center font-bold text-xl">
              UI-UX design
            </p>
          </div>
        </div>
        <div className=" relative flex gap-10">
          <div
            ref={containerLeft}
            className="card border-2 border-black rounded-3xl p-5 w-96 shadow-xl"
          >
            <img
              className="w-10 h-10"
              src="../../images/servies4icon.png"
              alt="ux"
            />
            <p className=" text-sm font-bold text-black w-[300px]">
              Elevate user experiences with our UI/UX design expertise.
              Intuitive interfaces, seamless navigation, and visually
              captivating designs tailored to your brand.{" "}
            </p>
          </div>
          <div
            ref={containerRight}
            className="flex justify-center items-center  bg-[url(../../images/servies4.jpg)] bg-cover bg-center bg-no-repeat bg-blend-multiply card border-2 border-black rounded-3xl p-5 w-[400px] h-full shadow-xl absolute  right-0"
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

            <p className="text-white z-10 text-center font-bold text-xl">
              UI-UX design
            </p>
          </div>
        </div>
        <div className=" relative flex gap-10">
          <div
            ref={containerLeft}
            className="card border-2 border-black rounded-3xl p-5 w-96 shadow-xl"
          >
            <img
              className="w-10 h-10"
              src="../../images/servies5icon.png"
              alt="ux"
            />
            <p className=" text-sm font-bold text-black w-[300px]">
              Elevate user experiences with our UI/UX design expertise.
              Intuitive interfaces, seamless navigation, and visually
              captivating designs tailored to your brand.{" "}
            </p>
          </div>
          <div
            ref={containerRight}
            className="flex justify-center items-center  bg-[url(../../images/servies5.jpg)] bg-cover bg-center bg-no-repeat bg-blend-multiply card border-2 border-black rounded-3xl p-5 w-[400px] h-full shadow-xl absolute  right-0"
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

            <p className="text-white z-10 text-center font-bold text-xl">
              UI-UX design
            </p>
          </div>
        </div>
        <div className=" relative flex gap-10">
          <div
            ref={containerLeft}
            className="card border-2 border-black rounded-3xl p-5 w-96 shadow-xl"
          >
            <img
              className="w-10 h-10 spin transition-all ease-in-out"
              src="../../public/images/servies6icon.png"
              alt="ux"
            />
            <p className=" text-sm font-bold text-black w-[300px]">
              Elevate user experiences with our UI/UX design expertise.
              Intuitive interfaces, seamless navigation, and visually
              captivating designs tailored to your brand.{" "}
            </p>
          </div>
          <div
            ref={containerRight}
            className="flex justify-center items-center  bg-[url(../../images/servies6.jpg)] bg-cover bg-center bg-no-repeat bg-blend-multiply card border-2 border-black rounded-3xl p-5 w-[400px] h-full shadow-xl absolute  right-0"
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

            <p className="text-white z-10 text-center font-bold text-xl">
              UI-UX design
            </p>
          </div>
        </div>
        <div className=" relative flex gap-10">
          <div
            ref={containerLeft}
            className="card border-2 border-black rounded-3xl p-5 w-96 shadow-xl"
          >
            <img
              className="w-10 h-10"
              src="../../images/servies7icon.png"
              alt="ux"
            />
            <p className=" text-sm font-bold text-black w-[300px]">
              Elevate user experiences with our UI/UX design expertise.
              Intuitive interfaces, seamless navigation, and visually
              captivating designs tailored to your brand.{" "}
            </p>
          </div>
          <div
            ref={containerRight}
            className="flex justify-center items-center  bg-[url(../../images/servies7.jpg)] bg-cover bg-center bg-no-repeat bg-blend-multiply card border-2 border-black rounded-3xl p-5 w-[400px] h-full shadow-xl absolute  right-0"
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

            <p className="text-white z-10 text-center font-bold text-xl">
              UI-UX design
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-1 bg-black mt-5 mb-8 "></div>
      <img className="arrow" src="../../images/arrow.png" alt="" />
    </div>
  );
};

export default Services;
