import React from "react";
import "./Home.css";
import welcomeImg from "assets/images/welcome-img.png";
import Footer from "layouts/Footer/Footer";
import TeamCards from "components/Cards/TeamCards/TeamCards";
import teamImg1 from "assets/images/team-img-1.png";
import teamImg2 from "assets/images/team-img-2.png";
import teamImg3 from "assets/images/team-img-3.png";
import teamImg4 from "assets/images/team-img-4.png";
import img1 from "assets/images/1.png";
import img2 from "assets/images/2.png";
import img3 from "assets/images/3.png";
import img4 from "assets/images/4.png";
import img5 from "assets/images/5.png";
import img6 from "assets/images/6.png";
import img8 from "assets/images/8.png";
import img9 from "assets/images/9.png";
import img10 from "assets/images/10.png";
import { IoIosArrowDown } from "react-icons/io";
import moonImg from "assets/images/moon.png";

import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";

import Accordion from "components/Accordion/Accordion";
import Navbar from "layouts/Navbar/Navbar";
import Roadmap from "layouts/Roadmap/Roadmap";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import CountDownTimer from "components/CountDownTimer/CountDownTimer";

SwiperCore.use([Autoplay, Navigation]);

function Home() {
  let navigationPrevRef = React.useRef(null);
  let navigationNextRef = React.useRef(null);
  const [slidPrevsBtn, setSlidPrevsBtn] = React.useState(false);
  const [slidNextBtn, setSlidNextBtn] = React.useState(true);

  return (
    <div>
      <Navbar />
      {/* HERO STARTS */}
      <div className="hero-wrapper mb-100px" id="home">
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

            <div className="mb-60px">
              <CountDownTimer />
            </div>

            {/* 
            <div className="hero-input mb-40px">
              <div className="hero-dropdown fs-24px light-gray">
                Select Image Quantity{" "}
                <span className="arrow">
                  <IoIosArrowDown />
                </span>
              </div>
              <div className="input-btn teko black fs-28px button-wrapper">
                Buy on $16 ETH
              </div>
            </div> */}

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
            <Swiper
              direction="vertical"
              spaceBetween={20}
              centeredSlides={true}
              loop={true}
              speed={4000}
              autoplay={{
                delay: 1000,
                reverseDirection: true,
                disableOnInteraction: false,
              }}
              loopedSlides={5}
              grabCursor={true}
              slidesPerView="auto"
              init={(swiper) => {
                swiper.autoplay.run();
              }}
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
            <Swiper
              direction="vertical"
              slidesPerView="auto"
              grabCursor={true}
              spaceBetween={20}
              centeredSlides={true}
              loop={true}
              speed={4000}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              disableOnInteraction={true}
              loopedSlides={6}
            >
              <SwiperSlide>
                <img src={img4} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img5} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img6} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img5} alt="" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              direction="vertical"
              slidesPerView="auto"
              grabCursor={true}
              spaceBetween={20}
              centeredSlides={true}
              loop={true}
              speed={4000}
              autoplay={{
                delay: 1000,
                reverseDirection: true,
                disableOnInteraction: false,
              }}
              disableOnInteraction={true}
              loopedSlides={3}
            >
              <SwiperSlide>
                <img src={img8} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img9} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img10} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      {/* HERO ENDS */}

      {/* WELCOME STARTS */}
      <div className="welcome-wrapper " id="about">
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
      <div id="roadmap">
        <Roadmap />
      </div>
      {/* ROADMAP ENDS */}

      {/* OUR TEAM START */}
      <div className="our-team-wrapper">
        <img src={moonImg} className="moon" alt="" />
        <div className="container-wrapper">
          <div className="our-team py-100px">
            <div className="team" id="team">
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
                  onSlideChange={(e) => {
                    if (e.isEnd) {
                      setSlidNextBtn(false);
                    } else {
                      setSlidNextBtn(true);
                    }
                    if (e.isBeginning) {
                      setSlidPrevsBtn(false);
                    } else {
                      setSlidPrevsBtn(true);
                    }
                  }}
                  onSwiper={(swiper) => {
                    setTimeout(() => {
                      swiper.params.navigation.prevEl =
                        navigationPrevRef.current;
                      swiper.params.navigation.nextEl =
                        navigationNextRef.current;
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
                    <TeamCards
                      img={teamImg1}
                      title="@Dwane_John"
                      subtitle="the leader"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <TeamCards
                      img={teamImg2}
                      title="@Maria_sen"
                      subtitle="Senior Programmer"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <TeamCards
                      img={teamImg3}
                      title="@Seth_rollins"
                      subtitle="Marketing Genius"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <TeamCards
                      img={teamImg4}
                      title="@Roman_reigns"
                      subtitle="Art Director"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <TeamCards
                      img={teamImg1}
                      title="@Dwane_John"
                      subtitle="the leader"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <TeamCards
                      img={teamImg2}
                      title="@Maria_sen"
                      subtitle="Senior Programmer"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <TeamCards
                      img={teamImg3}
                      title="@Seth_rollins"
                      subtitle="Marketing Genius"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <TeamCards
                      img={teamImg4}
                      title="@Roman_reigns"
                      subtitle="Art Director"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="slider-btns mb-100px">
                <button
                  className="pointer"
                  style={{ display: slidPrevsBtn ? "flex" : "none" }}
                  ref={navigationPrevRef}
                >
                  <HiArrowNarrowLeft />
                </button>
                <button
                  className="pointer"
                  style={{ display: slidNextBtn ? "flex" : "none" }}
                  ref={navigationNextRef}
                >
                  <HiArrowNarrowRight />
                </button>
              </div>
            </div>

            <div className="faq" id="faq">
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
                <Accordion title="What does NFT Collection Comprise of?" />
                <Accordion title="How to get our NFT?" />
                <Accordion title="How much does our NFT cost?" />
                <Accordion title="Will you list your NFT on OpenSea?" />
                <Accordion title="What is a Rarity NFT?" />
                <Accordion title="What is a Rarity NFT?" />
              </div>
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
