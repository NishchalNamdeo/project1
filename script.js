function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
    // multiplier: 0.7,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

loco();

const t1 = gsap.timeline();

t1.to(".page2", {
  top: "-30vh",
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page2",
    start: "top 100%",
    // pin: true,
    scrub: true,
    // markers: true,
  },
});

const page2Elem = document.querySelectorAll(".page2-elem");
const page2H3 = document.querySelectorAll(".page2-elem > h3");
const page2RightImg = document.querySelector(".page2-right>img");
const page2Img = [
  "https://encontech.nl/wp-content/uploads/2023/10/laboratory.jpg",
  "https://encontech.nl/wp-content/uploads/2023/10/pipelines.jpg",
  "https://encontech.nl/wp-content/uploads/2023/10/container.jpg",
  "https://encontech.nl/wp-content/uploads/2023/10/factory-plant.jpg",
  "https://encontech.nl/wp-content/uploads/2023/10/environment.jpg",
];

page2H3.forEach((h1, index) => {
  h1.addEventListener("click", () => {
    page2RightImg.src = page2Img[index];
    for (let i = 0; i <= page2Elem.length; i++) {
      if (i === index) {
        gsap.to(page2Elem[index], {
          height: "10vh",
        });
      } else {
        gsap.to(page2Elem[i], {
          height: "3vh",
        });
      }
    }
  });
});

function swiperJs() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    // centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

swiperJs();

t1.to(".page6", {
  top: "-30vh",
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page6",
    start: "top 100%",
    scrub: 1,
    // markers: true,
  },
});

const page6H3 = document.querySelectorAll(".page6-box-elem>h3");
const page6Elem = document.querySelectorAll(".page6-box-elem");
const page6Img = document.querySelector(".page6-right>img");
const page6ImgArray = [
  "https://encontech.nl/wp-content/uploads/2023/10/ship.jpg",
  "https://encontech.nl/wp-content/uploads/2023/10/geothermal.jpg",
  "https://encontech.nl/wp-content/uploads/2023/11/Food-processing.jpg",
  "https://encontech.nl/wp-content/uploads/2023/10/factory.jpg",
  "https://encontech.nl/wp-content/uploads/2023/10/desert.jpg",
  "https://encontech.nl/wp-content/uploads/2023/10/data.jpg",
  "https://encontech.nl/wp-content/uploads/2023/10/tanker.jpg",
];

page6H3.forEach((h3, index) => {
  h3.addEventListener("click", () => {
    page6Img.src = page6ImgArray[index];
    for (let i = 0; i <= page6H3.length; i++) {
      if (index === i) {
        if (i === 0 || i === 1) {
          gsap.to(page6Elem[index], {
            height: "10vh",
          });
        } else if (i === 3 || i === 4 || i === 6) {
          gsap.to(page6Elem[index], {
            height: "20vh",
          });
        } else if (i === 5 || i === 2) {
          gsap.to(page6Elem[index], {
            height: "16vh",
          });
        }
      } else {
        gsap.to(page6Elem[i], {
          height: "3vh",
        });
      }
    }
  });
});

const page11Elem = document.querySelectorAll(".page11-box-elem");
const page11Img = document.querySelector(".page11-box-right>img");
const page11ImgArray = [
  "https://encontech.nl/wp-content/uploads/2023/11/photo_2023-11-11-18.27.06.jpeg",
  "https://encontech.nl/wp-content/uploads/2023/09/energies-16-06791.jpg",
  "https://encontech.nl/wp-content/uploads/2023/09/photo_2023-11-11-18.26.51.jpeg",
];

page11Elem.forEach((elem, index) => {
  elem.addEventListener("mouseenter", () => {
    page11Img.src = page11ImgArray[index];
  });
});

t1.from(".page1-main", {
  y: 100,
  opacity: 0,
  delay: 0.5,
});

t1.from(".page1-footer>h1", {
  y: 100,
  opacity: 0,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page1-footer>h1",
    start: "top 100%",
    end: "top 70%",
    scrub: 1,
    // markers: true,
  },
});

t1.from(".page2-left>h1", {
  y: 50,
  opacity: 0,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page2-left>h1",
    start: "top 100%",
    end: "top 70%",
    scrub: 1,
    // markers: true,
  },
});
t1.from(".page3-left>h1", {
  y: 60,
  opacity: 0,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page3-left>h1",
    start: "top 100%",
    end: "top 70%",
    scrub: 1,
    // markers: true,
  },
});

t1.from(".page5>h1", {
  y: 80,
  opacity: 0,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page5>h1",
    start: "top 100%",
    end: "top 70%",
    scrub: 1,
    // markers: true,
  },
});

t1.from(".page6>h1", {
  y: 80,
  opacity: 0,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page6>h1",
    start: "top 100%",
    end: "top 70%",
    scrub: 1,
    // markers: true,
  },
});

t1.from(".page7 h1", {
  y: 80,
  opacity: 0,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page7 h1",
    start: "top 90%",
    end: "top 55%",
    scrub: 1,
    // markers: true,
  },
});

t1.from(".page10>h1", {
  y: 80,
  opacity: 0,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page10>h1",
    start: "top 100%",
    end: "top 70%",
    scrub: 1,
    // markers: true,
  },
});

t1.from(".page11>h1", {
  y: 80,
  stagger: 0.5,
  opacity: 0,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page11>h1",
    start: "top 70%",
    end: "top 40%",
    scrub: 1,
    // markers: true,
  },
});

t1.from(".page12>h1", {
  y: 80,
  opacity: 0,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page12>h1",
    start: "top 100%",
    end: "top 70%",
    scrub: 1,
    // markers: true,
  },
});

