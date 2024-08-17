gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

let mm = gsap.matchMedia();

mm.add("(min-width: 800px)", () => {
  let strategic_planning = document.querySelector("#strategic_planning");

  let creative = document.querySelector("#creative");

  let understand_vision = document.querySelector("#understand_vision");

  let developement = document.querySelector("#developement");

  let launch_improvement = document.querySelector("#launch_improvement");

  let industry_card_01 = document.querySelector("#industry_card_01");

  let industry_card_02 = document.querySelector("#industry_card_02");

  let industry_card_03 = document.querySelector("#industry_card_03");

  let industry_card_04 = document.querySelector("#industry_card_04");

  let industry_card_05 = document.querySelector("#industry_card_05");

  // let herohighlight = document.querySelector(".hero-highlight");

  let servicerowone01 = document.querySelector(".servicerowone01");

  let servicerowone02 = document.querySelector(".servicerowone02");

  let servicerowone03 = document.querySelector(".servicerowone03");

  let servicerowone04 = document.querySelector(".servicerowone04");

  let servicerowone05 = document.querySelector(".servicerowone05");

  let servicerowone06 = document.querySelector(".servicerowone06");

  let servicerowone07 = document.querySelector(".servicerowone07");

  let servicerowone08 = document.querySelector(".servicerowone08");

  let servicerowone09 = document.querySelector(".servicerowone09");

  let servicerowone10 = document.querySelector(".servicerowone10");

  let servicerowone11 = document.querySelector(".servicerowone11");

  let servicerowone12 = document.querySelector(".servicerowone12");

  let servicerowone13 = document.querySelector(".servicerowone13");

  let servicerowone14 = document.querySelector(".servicerowone14");

  gsap.set(servicerowone01, {
    x: "50%",
  });
  gsap.set(servicerowone02, {
    x: "-50%",
  });
  gsap.set(servicerowone03, {
    x: "50%",
  });
  gsap.set(servicerowone04, {
    x: "-50%",
  });

  gsap.set(servicerowone05, {
    x: "50%",
  });
  gsap.set(servicerowone06, {
    x: "-50%",
  });

  gsap.set(servicerowone07, {
    x: "50%",
  });
  gsap.set(servicerowone08, {
    x: "-50%",
  });

  gsap.set(servicerowone09, {
    x: "50%",
  });
  gsap.set(servicerowone10, {
    x: "-50%",
  });

  gsap.set(servicerowone11, {
    x: "50%",
  });
  gsap.set(servicerowone12, {
    x: "-50%",
  });

  gsap.set(servicerowone13, {
    x: "50%",
  });
  gsap.set(servicerowone14, {
    x: "-50%",
  });

  gsap.to(servicerowone01, {
    scrollTrigger: {
      trigger: servicerowone01,
      start: "top 130%",
      end: "center top",
      scrub: 1,
    },
    x: "-5%",
    ease: "power2.inOut",
    duration: 0.2,
  });
  gsap.to(servicerowone02, {
    scrollTrigger: {
      trigger: servicerowone02,
      start: "top 130%",
      end: "center top",
      scrub: 1,
    },
    x: "5%",
    ease: "power2.inOut",
    duration: 0.2,
  });

  gsap.to(servicerowone03, {
    scrollTrigger: {
      trigger: servicerowone03,
      start: "top 130%",
      end: "center top",
      scrub: 1,
    },
    x: "-5%",
    ease: "power2.inOut",
    duration: 0.2,
  });
  gsap.to(servicerowone04, {
    scrollTrigger: {
      trigger: servicerowone04,
      start: "top 130%",
      end: "center top",
      scrub: 1,
    },
    x: "5%",
    ease: "power2.inOut",
    duration: 0.2,
  });

  gsap.to(servicerowone05, {
    scrollTrigger: {
      trigger: servicerowone05,
      start: "top 130%",
      end: "center top",
      scrub: 1,
    },
    x: "-5%",
    ease: "power2.inOut",
    duration: 0.2,
  });
  gsap.to(servicerowone06, {
    scrollTrigger: {
      trigger: servicerowone06,
      start: "top 130%",
      end: "center top",
      scrub: 1,
    },
    x: "5%",
    ease: "power2.inOut",
    duration: 0.2,
  });

  gsap.to(servicerowone07, {
    scrollTrigger: {
      trigger: servicerowone07,
      start: "top 130%",
      end: "center top",
      scrub: 1,
    },
    x: "-5%",
    ease: "power2.inOut",
    duration: 0.2,
  });
  gsap.to(servicerowone08, {
    scrollTrigger: {
      trigger: servicerowone08,
      start: "top 130%",
      end: "center top",
      scrub: 1,
    },
    x: "5%",
    ease: "power2.inOut",
    duration: 0.2,
  });

  gsap.to(servicerowone09, {
    scrollTrigger: {
      trigger: servicerowone09,
      start: "top 130%",
      end: "center top",
      scrub: 1,
    },
    x: "-5%",
    ease: "power2.inOut",
    duration: 0.2,
  });
  gsap.to(servicerowone10, {
    scrollTrigger: {
      trigger: servicerowone10,
      start: "top 130%",
      end: "center top",
      scrub: 1,
    },
    x: "5%",
    ease: "power2.inOut",
    duration: 0.2,
  });

  gsap.to(servicerowone11, {
    scrollTrigger: {
      trigger: servicerowone11,
      start: "top 130%",
      end: "center top",
      scrub: 1,
    },
    x: "-5%",
    ease: "power2.inOut",
    duration: 0.2,
  });
  gsap.to(servicerowone12, {
    scrollTrigger: {
      trigger: servicerowone12,
      start: "top 130%",
      end: "center top",
      scrub: 1,
    },
    x: "5%",
    ease: "power2.inOut",
    duration: 0.2,
  });

  gsap.to(servicerowone13, {
    scrollTrigger: {
      trigger: servicerowone13,
      start: "top 130%",
      end: "center top",
      scrub: 1,
    },
    x: "-5%",
    ease: "power2.inOut",
    duration: 0.2,
  });
  gsap.to(servicerowone14, {
    scrollTrigger: {
      trigger: servicerowone14,
      start: "top 130%",
      end: "center top",
      scrub: 1,
    },
    x: "5%",
    ease: "power2.inOut",
    duration: 0.2,
  });

  const prebuytext = new SplitType(".hero-button span");

  const prebuytextchars = prebuytext.chars;

  gsap.fromTo(
    prebuytextchars,
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      // stagger: 0.02,
      duration: 0.7,
      ease: "expo",
    }
  );

  const text = new SplitType(".hero-highlight");

  const herochars = text.chars;

  gsap.fromTo(
    herochars,
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.02,
      duration: 0.7,
      ease: "expo",
    }
  );

  gsap.to("#paperplane", {
    scrollTrigger: {
      trigger: ".ourapproach",
      start: "top top",
      ease: "none",
      scrub: 1,
      // pin: true,
    },
    motionPath: {
      path: "#path",
      align: "#path",
      alignOrigin: [0.5, 0.5],
      autoRotate: true,
    },
    transformOrigin: "50% 50%",
    duration: 10,
  });

  gsap.to("#paperplaneone", {
    motionPath: {
      path: "#pathone",
      align: "#pathone",
      alignOrigin: [0.5, 0.5],
      autoRotate: true,
    },
    transformOrigin: "50% 50%",
    duration: 3,
    // repeat: -1,
    ease: "power2.inOut",
  });

  gsap.to("#paperplanetwo", {
    motionPath: {
      path: "#pathtwo",
      align: "#pathtwo",
      alignOrigin: [0.5, 0.5],
      autoRotate: true,
    },
    transformOrigin: "50% 50%",
    duration: 6,
    // repeat: -1,
    ease: "power2.inOut",
  });

  gsap.set(".ourapproach", {
    backgroundColor: "white",
  });

  gsap.to(".ourapproach", {
    backgroundColor: "#1c113f",
    scrollTrigger: {
      trigger: understand_vision,
      ease: "none",
      start: "-40% center",
      end: "center center",
      // markers: true,
      duration: 0,
      scrub: true,
    },
  });

  gsap.set(".ourapproach", {
    backgroundColor: "#1c113f",
  });

  gsap.to(".ourapproach", {
    backgroundColor: "#1F6E8C",
    scrollTrigger: {
      trigger: strategic_planning,
      ease: "none",
      start: "top center",
      end: "center center",
      // markers: true,
      duration: 0,
      scrub: true,
    },
  });

  gsap.set(".ourapproach", {
    backgroundColor: "#1F6E8C",
  });

  gsap.to(".ourapproach", {
    backgroundColor: "#5C469C",
    scrollTrigger: {
      trigger: creative,
      ease: "none",
      start: "top center",
      end: "center center",
      // markers: true,
      duration: 0,
      scrub: true,
    },
  });

  gsap.set(".ourapproach", {
    backgroundColor: "#5C469C",
  });

  gsap.to(".ourapproach", {
    backgroundColor: "#19376D",
    scrollTrigger: {
      trigger: developement,
      ease: "none",
      start: "top center",
      end: "center center",
      // markers: true,
      scrub: true,
    },
  });

  gsap.set(".ourapproach", {
    backgroundColor: "#19376D",
  });

  gsap.to(".ourapproach", {
    backgroundColor: "#301E67",
    scrollTrigger: {
      trigger: launch_improvement,
      ease: "none",
      start: "top center",
      end: "center center",
      // markers: true,
      scrub: true,
    },
  });

  gsap.set(".ourapproach", {
    backgroundColor: "white",
  });

  industry_card_01.addEventListener("mouseover", function () {
    gsap.to("#industry", {
      backgroundImage: "url(./assets/img/RABS_Landing_Page/industries/2.webp)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      // backgroundColor: "red",
      ease: "expo",
      duration: 0,
    });
    console.log("clicked");
  });

  industry_card_02.addEventListener("mouseover", function () {
    gsap.to("#industry", {
      backgroundImage: "url(./assets/img/RABS_Landing_Page/industries/1.webp)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      // backgroundColor: "red",
      ease: "expo",
      duration: 0,
    });
    console.log("clicked");
  });

  industry_card_03.addEventListener("mouseover", function () {
    gsap.to("#industry", {
      backgroundImage: "url(./assets/img/RABS_Landing_Page/industries/3.webp)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      // backgroundColor: "red",
      ease: "expo",
      duration: 0,
    });
    console.log("clicked");
  });

  industry_card_04.addEventListener("mouseover", function () {
    gsap.to("#industry", {
      backgroundImage: "url(./assets/img/RABS_Landing_Page/industries/4.webp)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      ease: "expo",
      duration: 0,
    });
    console.log("Downed");
  });

  industry_card_05.addEventListener("mouseover", function () {
    gsap.to("#industry", {
      backgroundImage: "url(./assets/img/RABS_Landing_Page/industries/5.webp)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      // backgroundColor: "red",
      ease: "expo",
      duration: 0,
    });
    console.log("clicked");
  });
});

mm.add("(max-width: 799px)", () => {
  let strategic_planning = document.querySelector("#strategic_planning");

  let creative = document.querySelector("#creative");

  let understand_vision = document.querySelector("#understand_vision");

  let developement = document.querySelector("#developement");

  let launch_improvement = document.querySelector("#launch_improvement");

  let industry_card_01 = document.querySelector("#industry_card_01");

  let industry_card_02 = document.querySelector("#industry_card_02");

  let industry_card_03 = document.querySelector("#industry_card_03");

  let industry_card_04 = document.querySelector("#industry_card_04");

  let industry_card_05 = document.querySelector("#industry_card_05");

  gsap.to("#paperplaneone", {
    motionPath: {
      path: "#pathone",
      align: "#pathone",
      alignOrigin: [0.5, 0.5],
      autoRotate: true,
    },
    transformOrigin: "50% 50%",
    duration: 3,
    ease: "linear",
  });

  gsap.to("#paperplanetwo", {
    motionPath: {
      path: "#pathtwo",
      align: "#pathtwo",
      alignOrigin: [0.5, 0.5],
      autoRotate: true,
    },
    transformOrigin: "50% 50%",
    duration: 6,
    ease: "power2.inOut",
  });

  gsap.set(".ourapproach", {
    backgroundColor: "white",
  });

  gsap.to(".ourapproach", {
    backgroundColor: "#1c113f",
    scrollTrigger: {
      trigger: understand_vision,
      ease: "none",
      start: "-40% center",
      end: "center center",
      // markers: true,
      duration: 0,
      scrub: true,
    },
  });

  gsap.set(".ourapproach", {
    backgroundColor: "#1c113f",
  });

  gsap.to(".ourapproach", {
    backgroundColor: "#1F6E8C",
    scrollTrigger: {
      trigger: strategic_planning,
      ease: "none",
      start: "top center",
      end: "center center",
      // markers: true,
      duration: 0,
      scrub: true,
    },
  });

  gsap.set(".ourapproach", {
    backgroundColor: "#1F6E8C",
  });

  gsap.to(".ourapproach", {
    backgroundColor: "#5C469C",
    scrollTrigger: {
      trigger: creative,
      ease: "none",
      start: "top center",
      end: "center center",
      // markers: true,
      duration: 0,
      scrub: true,
    },
  });

  gsap.set(".ourapproach", {
    backgroundColor: "#5C469C",
  });

  gsap.to(".ourapproach", {
    backgroundColor: "#19376D",
    scrollTrigger: {
      trigger: developement,
      ease: "none",
      start: "top center",
      end: "center center",
      // markers: true,
      scrub: true,
    },
  });

  gsap.set(".ourapproach", {
    backgroundColor: "#19376D",
  });

  gsap.to(".ourapproach", {
    backgroundColor: "#301E67",
    scrollTrigger: {
      trigger: launch_improvement,
      ease: "none",
      start: "top center",
      end: "center center",
      // markers: true,
      scrub: true,
    },
  });

  gsap.set(".ourapproach", {
    backgroundColor: "white",
  });

  // gsap.to("#paperplane", {
  //   scrollTrigger: {
  //     trigger: ".ourapproach",
  //     start: "top center",
  //     end: "center center",
  //     ease: "none",
  //     scrub: 1,
  //     pin: true,
  //   },
  //   motionPath: {
  //     path: "#path",
  //     align: "#path",
  //     alignOrigin: [0.5, 0.5],
  //     autoRotate: true,
  //   },
  //   transformOrigin: "50% 50%",
  //   duration: 1,
  // });

  industry_card_01.addEventListener("mouseover", function () {
    gsap.to("#industry", {
      backgroundImage: "url(./assets/img/RABS_Landing_Page/industries/2.webp)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      // backgroundColor: "red",
      ease: "expo",
      duration: 0,
    });
    console.log("clicked");
  });

  industry_card_02.addEventListener("mouseover", function () {
    gsap.to("#industry", {
      backgroundImage: "url(./assets/img/RABS_Landing_Page/industries/1.webp)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      // backgroundColor: "red",
      ease: "expo",
      duration: 0,
    });
    console.log("clicked");
  });

  industry_card_03.addEventListener("mouseover", function () {
    gsap.to("#industry", {
      backgroundImage: "url(./assets/img/RABS_Landing_Page/industries/3.webp)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      // backgroundColor: "red",
      ease: "expo",
      duration: 0,
    });
    console.log("clicked");
  });

  industry_card_04.addEventListener("mouseover", function () {
    gsap.to("#industry", {
      backgroundImage: "url(./assets/img/RABS_Landing_Page/industries/4.webp)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      ease: "expo",
      duration: 0,
    });
    console.log("Downed");
  });

  industry_card_05.addEventListener("mouseover", function () {
    gsap.to("#industry", {
      backgroundImage: "url(./assets/img/RABS_Landing_Page/industries/5.webp)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      // backgroundColor: "red",
      ease: "expo",
      duration: 0,
    });
    console.log("clicked");
  });

  const text = new SplitType(".hero-highlight");

  const herochars = text.chars;

  gsap.fromTo(
    herochars,
    {
      y: 30,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.02,
      duration: 0.7,
      ease: "expo",
    }
  );
});
