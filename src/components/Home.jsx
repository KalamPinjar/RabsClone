import MovingText from "./ui/MovingText";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ActionIcon from "./ui/ActionIcon";
gsap.registerPlugin(useGSAP);

const Home = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.fromTo(
      container.current,
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: "0%",
        opacity: 1,
        duration: 1.5,
      }
    );
  }, [container]);
  return (
    <>
      <div className="home pt-16" id="home">
        <button className="btn border-none mb-5 rounded-none button text-white font-bold capitalize text-3xl ">
          Let&#39;s discuss your project
        </button>
        <p
          ref={container}
          className="md:text-5xl text-3xl leading-tight text-pretty tracking-wide  text-white capitalize mt-5 text-center w-1/2 "
        >
          Elevate Your <span className="font-bold">Digtal Presence</span>{" "}
          Impactful <span className="font-bold">Inovations</span>,{" "}
          <span className="font-bold">Seamless experience</span>
        </p>

        <div className="md:flex text-center  justify-around gap-10 w-full mt-5 p-10">
          <button className="btn button1 text-white  capitalize text-lg font-normal px-5 ">
            wordpress development
          </button>
          <button className="btn button1 text-white  capitalize text-lg font-normal px-5 ">
            UI-UX design
          </button>
          <button className="btn button1 text-white  capitalize text-lg font-normal px-5 ">
            Real Estate CRM
          </button>
          <button className="btn button1 text-white  capitalize text-lg font-normal px-5 ">
            PHP & React Website
          </button>
        </div>

        <div className="w-1/2 h-1 bg-white mt-5 mb-8"></div>
        <img
          className="arrow"
          src="../../images/imagecompressor/arrow-min.png"
          alt=""
        />
      </div>
      <MovingText />
      <ActionIcon
        className={"bg-white bottom-28"}
        icon="../../images/whatsapp.png"
        action={() => window.open("https://wa.me/919833636916", "_blank")}
      />
      <ActionIcon
        className={"bg-white "}
        icon="../../images/phoneicon.png"
        action={() => window.open("tel:+91 9833636916", "_blank")}
      />
    </>
  );
};

export default Home;
