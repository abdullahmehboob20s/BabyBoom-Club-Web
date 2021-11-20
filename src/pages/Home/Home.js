import React from "react";
import "./Home.css";
import welcomeImg from "assets/images/welcome-img.png";
import Footer from "layouts/Footer/Footer";
import TeamCards from "components/Cards/TeamCards/TeamCards";
import teamImg1 from "assets/images/team-img-1.png";
import { ReactComponent as Bottle } from "assets/images/bottle.svg";
import img1 from "assets/images/1.png";
import img2 from "assets/images/2.png";
import img3 from "assets/images/3.png";

import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import SwiperCore, { Navigation, Autoplay } from "swiper";
import Accordion from "components/Accordion/Accordion";
import Navbar from "layouts/Navbar/Navbar";

SwiperCore.use([Autoplay, Navigation]);

function Home() {
  let navigationPrevRef = React.useRef(null);
  let navigationNextRef = React.useRef(null);
  let milkRef = React.useRef();
  let bottle = React.useRef();
  let lineRef = React.useRef();

  let box = React.useRef();
  let box2 = React.useRef();
  let box3 = React.useRef();
  let box4 = React.useRef();
  let box5 = React.useRef();
  let box6 = React.useRef();

  let [timer, setTimer] = React.useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  React.useEffect(() => {
    const handler = () => {
      let time = new Date();
      setTimer({
        hours: time.getHours() < 10 ? "0" + time.getHours() : time.getHours(),
        minutes:
          time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes(),
        seconds:
          time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds(),
      });
    };
    setInterval(handler, 1000);

    return () => {
      clearInterval(handler);
    };
  });

  React.useEffect(() => {
    document.addEventListener("scroll", () => {
      const lineTop = lineRef.current.getBoundingClientRect().top;
      const bottleTop = bottle.current.getBoundingClientRect().top;
      const boxTop = box.current.getBoundingClientRect().top;
      const box2Top = box2.current.getBoundingClientRect().top;
      const box3Top = box3.current.getBoundingClientRect().top;
      const box4Top = box4.current.getBoundingClientRect().top;
      const box5Top = box5.current.getBoundingClientRect().top;
      const box6Top = box6.current.getBoundingClientRect().top;

      if (bottleTop > boxTop) {
        milkRef.current.style.height = "20px";
      } else {
        box.current.style.backgroundColor = "transparent";
        milkRef.current.style.height = "10px";
      }

      if (bottleTop > box2Top) {
        milkRef.current.style.height = "30px";
      }

      if (bottleTop > box3Top) {
        milkRef.current.style.height = "40px";
      }

      if (bottleTop > box4Top) {
        milkRef.current.style.height = "50px";
      }

      if (bottleTop > box5Top) {
        milkRef.current.style.height = "80px";
      }

      if (bottleTop > box6Top) {
        milkRef.current.style.height = "90px";
      }
    });
  }, []);

  return (
    <div>
      <Navbar />
      {/* HERO STARTS */}
      <div className="hero-wrapper mb-100px">
        <div className="hero">
          <div className="hero-left">
            <p className=" teko fs-96px weight-7 lh-90px dark-blue mb-25px">
              <span className="title-effect-wrapper teko fs-96px weight-7  dark-blue ">
                Welcome
                <div className="title-effect teko left-0">welcome</div>
              </span>{" "}
              <span
                className="teko"
                style={{ position: "relative", zIndex: 100000 }}
              >
                to the <br /> BabyBoom Club
              </span>
            </p>
            <p className="fs-22px weight-4 gray lh-36px mb-35px">
              Baby Boom is private collection of 5,000 unique characters, with
              each Ape’s proof-of-ownership stored on the Ethereum network as an
              ERC-721 NFT.
            </p>

            <div className="timer mb-60px">
              <div className="time-wrap">
                <div className="teko timer-number fs-144px pink ">
                  {timer.hours}
                </div>
                <span className="fs-30px weight-6 dark-blue"> HRS</span>
              </div>
              <div className="timer-dot pink"></div>
              <div className="time-wrap">
                <span className="teko timer-number fs-144px pink ">
                  {timer.minutes}
                </span>
                <span className="fs-30px weight-6 dark-blue">MIN</span>
              </div>
              <div className="timer-dot pink"></div>
              <div className="time-wrap">
                <span className="teko timer-number fs-144px pink ">
                  {timer.seconds}
                </span>
                <span className="fs-30px weight-6 dark-blue">SEC</span>
              </div>
            </div>

            <div className="hero-btns">
              <button className="teko black fs-28px weight-5 pointer radius-12px bg-pink">
                Buy on opensea
              </button>
              <button className="teko black fs-28px weight-5 pointer radius-12px bg-blue">
                Join Us
              </button>
            </div>
          </div>
          <div className="hero-right">
            <div className="row">
              <Swiper
                direction="vertical"
                slidesPerView="auto"
                spaceBetween={0}
                centeredSlides={true}
                loop={true}
                speed={4000}
                autoplay={{
                  delay: 0,
                }}
                // allowTouchMove={false}
                disableOnInteraction={true}
              >
                <SwiperSlide>
                  <img src={img1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img3} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="row">
              <Swiper
                direction="vertical"
                slidesPerView="auto"
                spaceBetween={0}
                centeredSlides={true}
                loop={true}
                speed={4000}
                autoplay={{
                  delay: 0,
                  reverseDirection: true,
                }}
                // allowTouchMove={false}
                disableOnInteraction={true}
              >
                <SwiperSlide>
                  <img src={img1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img3} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="row">
              <Swiper
                direction="vertical"
                slidesPerView="auto"
                spaceBetween={0}
                centeredSlides={true}
                loop={true}
                speed={4000}
                autoplay={{
                  delay: 0,
                }}
                // allowTouchMove={false}
                disableOnInteraction={true}
              >
                <SwiperSlide>
                  <img src={img1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img3} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      {/* HERO ENDS */}

      {/* WELCOME STARTS */}
      <div className="welcome-wrapper ">
        <div className="container-wrapper">
          <div className="welcome py-200px">
            <p className=" w-full teko fs-96px weight-7 lh-90px dark-blue mb-40px welcome-cat-responsive">
              Welcome Cat
            </p>
            <div className="welcome-left">
              <img src={welcomeImg} alt="" />
            </div>
            <div className="welcome-right">
              <p className="title-effect-wrapper w-full teko fs-96px weight-7 lh-90px dark-blue mb-40px">
                Welcome Cat
                <div className="title-effect teko left-0">About us</div>
              </p>
              <p className="fs-22px weight-4 gray lh-32px mb-30px">
                In our mission to help save the endangered wildlife, we have
                chosen the three most endangered species in the world to become
                the faces of BabyBoom Club.
              </p>
              <p className="fs-22px weight-4 gray lh-32px mb-30px">
                BabyBoom Club is a Baby NFT that’s soon to be performing on the
                Ethereum blockchain. They are on a mission to educate & create
                awareness to the eneral public about endangered BabyBoom Club
                around the world.
              </p>
              <p className="fs-22px weight-4 gray lh-32px mb-30px">
                If you love good old rock music like we do and can’t help
                yourself but to rage out when your favorite songs comes on, heck
                you are in for a treat mates. Look no further as you have found
                that one project which shares the passion for music like you do.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* WELCOME END */}

      {/* ROADMAP STARTS */}
      <div className="roadmap-wrapper">
        <div className="container-wrapper">
          <div className="roadmap py-100px">
            <p className=" text-center dark-blue fs-96px weight-7   ">
              <span className="title-effect-wrapper teko">
                Road Map
                <div className="title-effect teko">Road Map</div>
              </span>
            </p>
            <p className="text-center dark-blue fs-22px weight-4 lh-36px mb-100px">
              Our commitment as a team to this project is one that is beyond a
              successful token sale, but towards building a product that our
              community loves, enjoys and also benefits from.
            </p>

            <div className="roadmap-content-wrapper">
              <div className="roadmap-content" ref={lineRef}>
                <div className="roadmap-box bot" ref={bottle}>
                  <div className="bottle">
                    <div className="milk" ref={milkRef}></div>
                    <div className="svg">
                      <Bottle />
                    </div>
                  </div>
                </div>

                <div className="roadmap-box" ref={box}>
                  <div className="roadmap-box-content left">
                    <p className="fs-48px teko pink weight-7 lh-42px mb-10px">
                      10% - Welcome{" "}
                    </p>
                    <p className="fs-18px dark-blue lh-26px weight-5">
                      To sell your NFTs on a marketplace, you’ll need to locate
                      them in your collection, click on them and find the “sell”
                      button.
                    </p>
                  </div>
                </div>
                <div className="roadmap-box" ref={box2}>
                  <div className="roadmap-box-content right">
                    <p className="fs-48px teko pink weight-7 lh-42px mb-10px">
                      10% - Welcome{" "}
                    </p>
                    <p className="fs-18px dark-blue lh-26px weight-5">
                      To sell your NFTs on a marketplace, you’ll need to locate
                      them in your collection, click on them and find the “sell”
                      button.
                    </p>
                  </div>
                </div>
                <div className="roadmap-box" ref={box3}>
                  <div className="roadmap-box-content left">
                    <p className="fs-48px teko pink weight-7 lh-42px mb-10px">
                      10% - Welcome{" "}
                    </p>
                    <p className="fs-18px dark-blue lh-26px weight-5">
                      To sell your NFTs on a marketplace, you’ll need to locate
                      them in your collection, click on them and find the “sell”
                      button.
                    </p>
                  </div>
                </div>
                <div className="roadmap-box" ref={box4}>
                  <div className="roadmap-box-content right">
                    <p className="fs-48px teko pink weight-7 lh-42px mb-10px">
                      10% - Welcome{" "}
                    </p>
                    <p className="fs-18px dark-blue lh-26px weight-5">
                      To sell your NFTs on a marketplace, you’ll need to locate
                      them in your collection, click on them and find the “sell”
                      button.
                    </p>
                  </div>
                </div>
                <div className="roadmap-box" ref={box5}>
                  <div className="roadmap-box-content left">
                    <p className="fs-48px teko pink weight-7 lh-42px mb-10px">
                      10% - Welcome{" "}
                    </p>
                    <p className="fs-18px dark-blue lh-26px weight-5">
                      To sell your NFTs on a marketplace, you’ll need to locate
                      them in your collection, click on them and find the “sell”
                      button.
                    </p>
                  </div>
                </div>
                <div className="roadmap-box" ref={box6}>
                  <div className="roadmap-box-content right">
                    <p className="fs-48px teko pink weight-7 lh-42px mb-10px">
                      10% - Welcome{" "}
                    </p>
                    <p className="fs-18px dark-blue lh-26px weight-5">
                      To sell your NFTs on a marketplace, you’ll need to locate
                      them in your collection, click on them and find the “sell”
                      button.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ROADMAP ENDS */}

      {/* OUR TEAM START */}
      <div className="our-team-wrapper">
        <div className="container-wrapper">
          <div className="our-team py-100px">
            <p className=" text-center dark-blue fs-96px weight-7   ">
              <span className="title-effect-wrapper teko">
                Our Team
                <div className="title-effect teko">Our Team</div>
              </span>
            </p>

            <p className="text-center dark-blue fs-22px weight-4 lh-36px mb-70px">
              Our commitment as a team to this project is one that is beyond a
              successful token sale, but towards building a product that our
              community loves, enjoys and also benefits from.
            </p>

            <div className="team-cards mb-70px">
              <Swiper
                slidesPerView={4}
                spaceBetween={60}
                onSwiper={(swiper) => {
                  setTimeout(() => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                    swiper.navigation.destroy();
                    swiper.navigation.init();
                    swiper.navigation.update();
                  });
                }}
                navigation={{
                  prevEl: navigationPrevRef.current,
                  nextEl: navigationNextRef.current,
                }}
                breakpoints={{
                  1200: {
                    slidesPerView: 4,
                    spaceBetween: 60,
                  },
                  1000: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  700: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  500: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  350: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                  },
                  250: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                }}
              >
                <SwiperSlide>
                  <TeamCards img={teamImg1} />
                </SwiperSlide>
                <SwiperSlide>
                  <TeamCards img={teamImg1} />
                </SwiperSlide>
                <SwiperSlide>
                  <TeamCards img={teamImg1} />
                </SwiperSlide>
                <SwiperSlide>
                  <TeamCards img={teamImg1} />
                </SwiperSlide>
                <SwiperSlide>
                  <TeamCards img={teamImg1} />
                </SwiperSlide>
                <SwiperSlide>
                  <TeamCards img={teamImg1} />
                </SwiperSlide>
                <SwiperSlide>
                  <TeamCards img={teamImg1} />
                </SwiperSlide>
                <SwiperSlide>
                  <TeamCards img={teamImg1} />
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="slider-btns mb-100px">
              <button className="pointer" ref={navigationPrevRef}>
                <HiArrowNarrowLeft />
              </button>
              <button className="pointer" ref={navigationNextRef}>
                <HiArrowNarrowRight />
              </button>
            </div>

            <p className=" text-center dark-blue fs-96px weight-7   ">
              <span className="title-effect-wrapper teko">
                FAQ
                <div className="title-effect teko">FAQs</div>
              </span>
            </p>

            <p className="text-center dark-blue fs-22px weight-4 lh-36px mb-70px">
              Some of your Frequently Asked Questions
            </p>

            <div className="accordions">
              <Accordion />
              <Accordion />
              <Accordion />
              <Accordion />
              <Accordion />
              <Accordion />
            </div>
          </div>
        </div>
      </div>
      {/* OUR TEAM ENDS */}

      {/* Footer STARTS */}
      <Footer />
      {/* Footer END */}
    </div>
  );
}

export default Home;
