import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import scrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(scrollTrigger);

const Map = () => {
  const container = useRef();
  useGSAP(() => {
    scrollTrigger.create({
      trigger: container.current,
      start: "top center",
      end: "bottom center",

      animation: gsap.fromTo(
        container.current.querySelectorAll("p"),
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
        }
      ),
    });
  });
  return (
    <div className="flex flex-col w-full h-screen p-5 gap-5 items-center justify-start mt-10 ">
      <div className="w-1/2 h-1 bg-black"></div>
      <p className="text-5xl font-bold capitalize text-black text-center mb-10">
        Our Existence
      </p>

      <div className="flex md:flex-row flex-col gap-10 items-center justify-around w-full">
        <div ref={container} className="flex md:flex-col gap-10">
          <div className="border-l-4 border-blue-500 p-5">
            <p className="md:text-5xl text-2xl font-bold capitalize text-black mb-2">
              4.9/5
            </p>
            <p className="md:text-3xl text-xl font-bold capitalize text-black flex gap-2">
              <FaStar className="text-yellow-500 w-5 h-5 " />
              <FaStar className="text-yellow-500 w-5 h-5 " />
              <FaStar className="text-yellow-500 w-5 h-5 " />
              <FaStar className="text-yellow-500 w-5 h-5 " />
              <FaRegStar className="text-yellow-500 w-5 h-5 " />
            </p>
          </div>
          <div>
            <div className="border-l-4 border-blue-500 p-5">
              <p className="md:text-5xl text-2xl font-bold capitalize text-black mb-2">
                10000+
              </p>
              <p className="text-xl capitalize text-black flex gap-2">
                Total Companies
              </p>
            </div>
          </div>
          <div>
            <div className="border-l-4  border-blue-500 p-5">
              <p className="md:text-5xl text-2xl font-bold capitalize text-black mb-2">
                12+
              </p>
              <p className="text-xl capitalize text-black flex gap-2">
                Years of Experience
              </p>
            </div>
          </div>
        </div>
        <img
          className="md:w-1/2 w-3/4"
          src="../../images/imagecompressor/India_United_Arab_Emirates_Locator-new-min.gif"
          alt=""
        />
      </div>

      <div className="w-1/2 h-1 bg-black"></div>
      <h2 className="text-2xl font-bold capitalize text-black text-center mt-10 ">
        A Website Design-First Integrated Business Promotion Company
      </h2>
      <p className="text-lg capitalize text-black text-start mt-5 w-3/4  ">
        RABS Net Solutions Pvt. Ltd. is a full-service website design agency
        based in Mumbai, India. An agency with a strong growth trajectory and
        mindset, we are a team of passionate strategists, marketers,
        communicators, and technologists. We collaborate with our clients in
        India and abroad on strategies and tactics to achieve measurable
        business results.{" "}
        <b>&#34;Let&#39;s make website design magic together.&#34;</b>
      </p>
      <div className="w-1/2 h-1 bg-white mb-8 md:block hidden"></div>
      <img className="arrow" src="../../images/imagecompressor/arrow.png-min" alt="" />
    </div>
  );
};

export default Map;
