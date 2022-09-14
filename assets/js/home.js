// ********************
// SLIDERS
// ********************
$(document).ready(function () {
  // ********************
  // NFT Slider
  // ********************

  const slidersTrigger = [...document.querySelectorAll(".btn-nft")];
  const sliders = [...document.querySelectorAll(".selected-wrapper")];

  const windowWidth = window.innerWidth;

  if (windowWidth < 950) {
    slidersTrigger[0].classList.remove("active");
    $(".slider--list").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      arrows: false,
    });
  }

  $(sliders[0].querySelector(".slider--view_mini")).slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow: $(sliders[0].querySelector(".slider--nav_left")),
    nextArrow: $(sliders[0].querySelector(".slider--nav_right")),
  });

  slidersTrigger.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      slidersTrigger.forEach((btn, i) => {
        btn.classList.remove("active");
      });
      trigger.classList.add("active");
      sliders.forEach((slider) => {
        slider.classList.add("slider-hidden");
        if (slider.firstElementChild.classList.contains("slick-initialized")) {
          $(slider.firstElementChild).slick("unslick");
        }
      });
      sliders.forEach((slider) => {
        if (slider.dataset.slideFor === trigger.dataset.slideTo) {
          slider.classList.remove("slider-hidden");
          $(slider.firstElementChild).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            prevArrow: $(slider.querySelector(".slider--nav_left")),
            nextArrow: $(slider.querySelector(".slider--nav_right")),
          });
        }
      });
    });
  });

  // ********************
  // Game Mode Slider
  // ********************

  if (windowWidth < 655) {
    $(".game-mode-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      infinite: false,
      arrows: false,
    });
  }
});

// ********************
// Leadership Toggle
// ********************

const leadershipToggler = document.querySelector(".arrow-wrapper");
const leadershipExtras = document.querySelector(".leadership--hidden");

leadershipToggler.addEventListener("click", () => {
  leadershipToggler.classList.toggle("active");
  leadershipExtras.classList.toggle("active");
});

// ********************
// NEWs Tilts
// ********************

const tilts = document.querySelectorAll(".tilt");

tilts.forEach((el) => {
  const height = el.clientHeight;
  const width = el.clientWidth;

  el.addEventListener("mousemove", handleMove);

  function handleMove(e) {
    const xVal = e.layerX;
    const yVal = e.layerY;

    const yRotation = 20 * ((xVal - width / 2) / width);

    const xRotation = -20 * ((yVal - height / 2) / height);

    const string =
      "perspective(500px) scale(1.1) rotateX(" +
      xRotation +
      "deg) rotateY(" +
      yRotation +
      "deg)";

    el.style.transform = string;
  }

  el.addEventListener("mouseout", function () {
    el.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
  });

  el.addEventListener("mousedown", function () {
    el.style.transform = "perspective(500px) scale(0.9) rotateX(0) rotateY(0)";
  });

  el.addEventListener("mouseup", function () {
    el.style.transform = "perspective(500px) scale(1.1) rotateX(0) rotateY(0)";
  });
});

// ********************
// FAQs
// ********************
const faqs = document.querySelectorAll(".faq");
const faqsHeights = [];
faqs.forEach((faq, i) => {
  const answer = faq.querySelector(".answer");
  faqsHeights.push(answer.offsetHeight);
  faq.classList.add("hidden"); // Hiding all Questions

  faq.addEventListener("click", () => {
    // Closing all previous questions on click
    faqs.forEach((item, index) => {
      if (index === i) return;
      item.classList.add("hidden");
      item.querySelector(".answer").removeAttribute("style");
    });

    // Toggling question
    faq.classList.toggle("hidden");
    const answer = faq.querySelector(".answer");
    answer.style.height = `${faqsHeights[i]}px`;
    if (faq.classList.contains("hidden")) {
      answer.removeAttribute("style");
    }
  });
});

// ********************
// Site Navigation
// ********************
const navigators = [...document.querySelectorAll(".navigator")];

navigators.forEach((navigator) => {
  navigator.addEventListener("click", (e) => {
    e.preventDefault();
    document
      .querySelector(`.data-sect--${navigator.dataset.target}`)
      .scrollIntoView({ behavior: "smooth" });
  });
});

// ********************
// Site Animations
// ********************
$(document).ready(function () {
  // wait until all external assets are loaded (css stylesheets, js scripts, fonts, images, etc)
  $(window).bind("load", function () {
    gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);

    const rule = CSSRulePlugin.getRule(".ludo-meet-text-1:before");
    const rule2 = CSSRulePlugin.getRule(".ludo-meet-text-1:after");

    const ludoMeetTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".ludo-meet",
        start: "top center",
      },
    });
    const mobileEentertainmentTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".mobile-entertainment",
        start: "top center",
      },
    });
    const dicesTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".dices",
        start: "top center",
      },
    });
    const whatIsTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".what-is",
        start: "top center",
      },
    });
    const attributesTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".nft-attributes",
        start: "top center",
      },
    });
    const nftTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".nft",
        start: "top center",
      },
    });
    const technologiesTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".technologies",
        start: "top center",
      },
    });
    const dollarTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".dollar-problem",
        start: "top center",
      },
    });
    const leadershipTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".leadership",
        start: "top center",
      },
    });

    ludoMeetTl
      .from(".ludo-meet-text", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        y: "30px",
      })
      .from(rule, {
        duration: 1,
        cssRule: { scaleX: 0 },
        ease: Power4.easeOut,
      })
      .from(
        rule2,
        {
          duration: 1,
          cssRule: { scaleX: 0 },
          ease: Power4.easeOut,
        },
        "-=1"
      );

    mobileEentertainmentTl
      .from(".mobile-entertainment-text", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        y: "30px",
      })
      .from(".mobile-entertainment-card", {
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        y: "30px",
      });
    dicesTl
      .from(".dices-text", {
        opacity: 0,
        duration: 0.3,
        stagger: 0.1,
        y: "30px",
      })
      .from(".dice-box", {
        opacity: 0,
        duration: 0.3,
        scale: 1.2,
        stagger: 0.1,
      })
      .from(".token-cap-left", {
        opacity: 0,
        duration: 0.3,
        x: "-160px",
      })
      .from(
        ".token-cap-right",
        {
          opacity: 0,
          duration: 0.3,
          x: "160px",
        },
        "-=0.3"
      );

    whatIsTl
      .from(".what-is-img", {
        opacity: 0,
        duration: 0.3,
        scale: 1.2,
      })
      .from(".what-is-text", {
        opacity: 0,
        duration: 0.3,
        y: "30px",
      });

    nftTl
      .from(".nft-list", {
        opacity: 0,
        duration: 0.3,
        x: "-30px",
      })
      .from(".nft-select", {
        opacity: 0,
        duration: 0.3,
        y: "30px",
      })
      .from(".nft-detail", {
        opacity: 0,
        duration: 0.3,
        scale: 1.2,
      });

    attributesTl
      .from(".attribute-heading", {
        opacity: 0,
        duration: 0.3,
        y: "30px",
      })
      .from(".attr-card", {
        opacity: 0,
        duration: 0.3,
        y: "30px",
        stagger: 0.2,
      });

    technologiesTl
      .from(".technologies-text", {
        opacity: 0,
        duration: 0.3,
        y: "30px",
      })
      .from(".glass-container", {
        opacity: 0,
        duration: 0.3,
        y: "30px",
        delay: 0.5,
      });

    dollarTl
      .from(".dollar-phone", {
        opacity: 0,
        duration: 0.3,
        y: "-30px",
      })
      .from(".dollar-text", {
        opacity: 0,
        duration: 0.3,
        y: "-30px",
      });

    gsap.from(".game-mode-anim", {
      scrollTrigger: {
        trigger: ".game-modes",
        start: "top center",
      },
      opacity: 0,
      duration: 0.3,
      stagger: 0.3,
      y: "50px",
    });

    leadershipTl
      .from(".leadership-text", {
        opacity: 0,
        duration: 0.3,
        stagger: 0.3,
        y: "30px",
      })
      .from(".leadership-card", {
        opacity: 0,
        duration: 0.3,
        stagger: 0.1,
        scale: 1.2,
      });

    const roadMapTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".roadmap",
        start: "top bottom",
      },
    });

    const line1 = CSSRulePlugin.getRule(
      ".roadmap .road-stop:first-of-type .stop-img:before"
    );
    const line2 = CSSRulePlugin.getRule(
      ".roadmap .road-stop:nth-of-type(2) .stop-img:before"
    );
    const line3 = CSSRulePlugin.getRule(
      ".roadmap .road-stop:nth-of-type(3) .stop-img:before"
    );
    const line4 = CSSRulePlugin.getRule(
      ".roadmap .road-stop:nth-of-type(4) .stop-img:before"
    );
    const line5 = CSSRulePlugin.getRule(
      ".roadmap .road-stop:nth-of-type(5) .stop-img:before"
    );
    const line6 = CSSRulePlugin.getRule(
      ".roadmap .road-stop:nth-of-type(6) .stop-img:before"
    );
    const line7 = CSSRulePlugin.getRule(
      ".roadmap .road-stop:nth-of-type(7) .stop-img:before"
    );
    const line8 = CSSRulePlugin.getRule(
      ".roadmap .road-stop:last-of-type .stop-img:before"
    );

    const windowWidth = window.innerWidth;
    const lastLineHeight = windowWidth > 500 ? "300px" : "500px";

    roadMapTl
      .to(".roadmap .heading-shiny", {
        scrollTrigger: {
          trigger: ".stop-1",
          start: "top 70%",
          end: "bottom 50%",
        },
        duration: 0.3,
        filter: "contrast(1)",
      })
      .to(".stop-img-1", {
        scrollTrigger: {
          trigger: ".stop-1",
          start: "top 70%",
          end: "bottom bottom",
          scrub: 0,
        },
        filter: "grayscale(0)",
      })
      .to(line1, {
        scrollTrigger: {
          trigger: ".stop-1",
          start: "top 70%",
          end: "bottom 50%",
          scrub: 0,
        },
        ease: "linear",
        maxHeight: "620px",
      })
      .to(".stop-img-2", {
        scrollTrigger: {
          trigger: ".stop-2",
          start: "top 70%",
          end: "bottom bottom",
          scrub: 0,
        },
        filter: "grayscale(0)",
      })
      .to(line2, {
        scrollTrigger: {
          trigger: ".stop-2",
          start: "top 70%",
          end: "bottom 50%",
          scrub: 0,
        },
        ease: "linear",
        maxHeight: "620px",
      })
      .to(".stop-img-3", {
        scrollTrigger: {
          trigger: ".stop-3",
          start: "top 70%",
          end: "bottom bottom",
          scrub: 0,
        },
        filter: "grayscale(0)",
      })
      .to(line3, {
        scrollTrigger: {
          trigger: ".stop-3",
          start: "top 70%",
          end: "bottom 50%",
          scrub: 0,
        },
        ease: "linear",
        maxHeight: "620px",
      })
      .to(".stop-img-4", {
        scrollTrigger: {
          trigger: ".stop-4",
          start: "top 70%",
          end: "bottom bottom",
          scrub: 0,
        },
        filter: "grayscale(0)",
      })
      .to(line4, {
        scrollTrigger: {
          trigger: ".stop-4",
          start: "top 70%",
          end: "bottom 50%",
          scrub: 0,
        },
        ease: "linear",
        maxHeight: "620px",
      })
      .to(".stop-img-5", {
        scrollTrigger: {
          trigger: ".stop-5",
          start: "top 70%",
          end: "bottom bottom",
          scrub: 0,
        },
        filter: "grayscale(0)",
      })
      .to(line5, {
        scrollTrigger: {
          trigger: ".stop-5",
          start: "top 70%",
          end: "bottom 50%",
          scrub: 0,
        },
        ease: "linear",
        maxHeight: "620px",
      })
      .to(".stop-img-6", {
        scrollTrigger: {
          trigger: ".stop-6",
          start: "top 70%",
          end: "bottom bottom",
          scrub: 0,
        },
        filter: "grayscale(0)",
      })
      .to(line6, {
        scrollTrigger: {
          trigger: ".stop-6",
          start: "top 70%",
          end: "bottom 50%",
          scrub: 0,
        },
        ease: "linear",
        maxHeight: "620px",
      })
      .to(".stop-img-7", {
        scrollTrigger: {
          trigger: ".stop-7",
          start: "top 70%",
          end: "bottom bottom",
          scrub: 0,
        },
        filter: "grayscale(0)",
      })
      .to(line7, {
        scrollTrigger: {
          trigger: ".stop-7",
          start: "top 70%",
          end: "bottom 50%",
          scrub: 0,
        },
        ease: "linear",
        maxHeight: "620px",
      })
      .to(".stop-img-8", {
        scrollTrigger: {
          trigger: ".stop-8",
          start: "top 70%",
          end: "bottom bottom",
          scrub: 0,
        },
        filter: "grayscale(0)",
      })
      .to(line8, {
        scrollTrigger: {
          trigger: ".stop-8",
          start: "top 70%",
          end: "bottom 50%",
          scrub: 0,
        },
        ease: "linear",
        maxHeight: lastLineHeight,
      });

    gsap.from(".stop-skull-1", {
      scrollTrigger: {
        trigger: ".stop-1",
        start: "top 70%",
      },
      duration: 2,
      opacity: 0,
    });

    gsap.from(".stop-skull-2", {
      scrollTrigger: {
        trigger: ".stop-2",
        start: "top 70%",
      },
      x: "-50px",
      opacity: 0,
    });

    gsap.to(".stop-skull-3", {
      scrollTrigger: {
        trigger: ".stop-3",
        start: "top 70%",
      },
      filter: "grayscale(0)",
      scale: 1,
      transformOrigin: "center",
      opacity: 1,
    });

    const skull4Tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".stop-4",
        start: "top 70%",
      },
    });

    skull4Tl
      .to(".stop-skull-4", {
        x: "0px",
        opacity: 1,
      })
      .to(".stop-skull-4", {
        rotate: 0,
      });

    gsap.from(".stop-skull-5", {
      scrollTrigger: {
        trigger: ".stop-5",
        start: "top 70%",
      },
      scale: 0,
    });

    gsap.to(".stop-skull-6", {
      scrollTrigger: {
        trigger: ".stop-6",
        start: "top 70%",
      },
      filter: "grayscale(0)",
      scale: 1,
      transformOrigin: "center",
      opacity: 1,
    });

    const skull7Tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".stop-skull-7",
        start: "bottom bottom",
      },
    });

    skull7Tl
      .to(".stop-skull-7", {
        rotate: "720deg",
      })
      .to(".stop-skull-7", {
        filter: "grayscale(0)",
      });

    const faqTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".faqs",
        start: "top center",
      },
    });

    faqTl
      .from(".faq-anim", {
        opacity: 0,
        duration: 0.3,
        stagger: 0.3,
        y: "30px",
      })
      .from(".faq", {
        duration: 0.3,
        stagger: 0.15,
        y: "30px",
        opacity: 0,
      });

    gsap.from(".tech-heading", {
      scrollTrigger: {
        trigger: ".data-sect--13",
        start: "top center",
      },
      opacity: 0,
      y: "30px",
    });

    gsap.from(".tech-img", {
      scrollTrigger: {
        trigger: ".data-sect--13",
        start: "top center",
      },
      opacity: 0,
      y: "30px",
    });
  });
}, false);

// ********************
// SKulls moving with cursor move
// ********************
const animateSections = (sections) => {
  sections.forEach((sect) => {
    const section = document.querySelector(sect);
    const toBeMovedElements = [...section.querySelectorAll(".cursor-animate")];

    section.addEventListener("mousemove", handleEvolveMovements);

    function handleEvolveMovements(e) {
      const box = section.getBoundingClientRect();
      const xCenter = (box.left + box.right) / 2;
      const yCenter = (box.top + box.bottom) / 2;

      const xAxisMovement = e.clientX;
      const yAxisMovement = e.clientY;

      const elementToBeMovedAlongX = (xAxisMovement - xCenter) / 50;
      const elementToBeMovedAlongY = (yAxisMovement - yCenter) / 50;

      toBeMovedElements.forEach((el) => {
        el.style.transform = `translate(${elementToBeMovedAlongX + "px"},${
          elementToBeMovedAlongY + "px"
        })`;
      });
    }
  });
};

animateSections([
  ".data-sect--1",
  ".data-sect--3",
  ".data-sect--4",
  ".data-sect--9",
]);

// ********************
// Background random moving balls changing colors
// ********************

const techBgBalls = [...document.querySelectorAll(".tech-bg-ball")];

techBgBalls.forEach((ball) => {
  setInterval(() => {
    const getRandomYMovement = Math.round(Math.random() * 90);
    const getRandomXMovement = Math.round(Math.random() * 90);
    const red = Math.random() * 256;
    const green = Math.random() * 256;
    const blue = Math.random() * 256;
    ball.style.top = `${getRandomYMovement}%`;
    ball.style.left = `${getRandomXMovement}%`;
    ball.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, 0.41)`;
  }, 5000);
});

// ********************
// Roadmap Random floating skulls
// ********************

const roadSkulls = [...document.querySelectorAll(".stop-skulls")];
roadSkulls.forEach((skull) => {
  setInterval(() => {
    const getRandomYMovement = Math.round(Math.random() * 30);
    const getRandomXMovement = Math.round(Math.random() * 30);
    skull.style.transform = `translate(${getRandomXMovement}px, ${getRandomYMovement}px)`;
    // skull.style.display = "none";
  }, 1000);
});

// ********************
// lazy Loading Images
// ********************

const imgs = Array.from(document.querySelectorAll(".lazy-img"));

const imageObserver = new IntersectionObserver(
  (enteries) => {
    enteries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.setAttribute("src", entry.target.dataset.src);
        imageObserver.unobserve(entry.target);
      }
    });
  },
  { rootMargin: "200px" }
);

imgs.forEach((img) => imageObserver.observe(img));
