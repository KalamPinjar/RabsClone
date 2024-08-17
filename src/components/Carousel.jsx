import { useEffect, useRef } from "react";

const Carousel = () => {
  const slider = useRef(null); // Initialize the ref for the slider

  useEffect(() => {
    const intervalId = setInterval(() => {
      showImg();
    }, 3000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  function showImg() {
    if (slider.current) {
      let slides = slider.current.querySelectorAll(".slides");
      if (slides.length > 0) {
        slider.current.appendChild(slides[0]);
      }
    }
  }

  return (
    <>
      <div className="flex justify-center mb-5 mt-20 items-center">
        <h2 className="md:text-5xl text-3xl font-bold text-black">
          Industries{" "}
          <span className="text-5xl font-bold text-yellow-400">We&#39;ve</span>{" "}
          Worked For
        </h2>
      </div>
      <div className="wrapper">
        <div className="container">
          <div ref={slider} className="slider">
            <div
              className="img slides"
              style={{
                backgroundImage: "url('/images/work1.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="content">
                <h2>Finance</h2>
                <img
                  className="w-10 h-10 "
                  src="/images/imagecompressor/work1icon-min.png"
                  alt="work1"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum reprehenderit aliquam itaque perferendis optio odit?
                </p>
              </div>
            </div>

            <div
              className="img slides"
              style={{
                backgroundImage: "url('/images/work2.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="content">
                <h2>Real Estate</h2>
                <img
                  className="w-10 h-10 "
                  src="/images/imagecompressor/work2icon-min.png"
                  alt="work1"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum reprehenderit aliquam itaque perferendis optio odit?
                </p>
              </div>
            </div>

            <div
              className="img slides"
              style={{
                backgroundImage: "url('/images/work3.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="content">
                <h2>Technology</h2>
                <img
                  className="w-10 h-10 "
                  src="/images/imagecompressor/work3icon-min.png"
                  alt="work1"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum reprehenderit aliquam itaque perferendis optio odit?
                </p>
              </div>
            </div>

            <div
              className="img slides"
              style={{
                backgroundImage: "url('/images/work4.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="content">
                <h2>Food Industry</h2>
                <img
                  className="w-10 h-10 "
                  src="/images/imagecompressor/work4icon-min.png"
                  alt="work1"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum reprehenderit aliquam itaque perferendis optio odit?
                </p>
              </div>
            </div>

            <div
              className="img slides"
              style={{
                backgroundImage: "url('/images/work5.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="content">
                <h2>Telecomunications</h2>
                <img
                  className="w-10 h-10 "
                  src="/images/imagecompressor/work5icon-min.png"
                  alt="work1"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum reprehenderit aliquam itaque perferendis optio odit?
                </p>
              </div>
            </div>

            <div
              className="img slides"
              style={{
                backgroundImage: "url('/images/imagecompressor/work6.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="content">
                <h2>Education Technology</h2>
                <img
                  className="w-10 h-10 "
                  src="/images/imagecompressor/work6icon-min.png"
                  alt="work1"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum reprehenderit aliquam itaque perferendis optio odit?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
