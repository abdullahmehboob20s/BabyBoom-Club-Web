import "./Home.css";
import welcomeImg from "assets/images/welcome-img.png";

function Home() {
  return (
    <div>
      {/* HERO STARTS */}
      <div className="hero-wrapper">
        <div className="container-wrapper">
          <div className="hero">
            <div className="hero-left">
              <p className="teko fs-96px weight-7 lh-90px dark-blue mb-25px">
                Welcome to the <br /> BabyBoom Club
              </p>
              <p className="fs-22px weight-4 gray lh-36px mb-35px">
                Baby Boom is private collection of 5,000 unique characters, with
                each Ape’s proof-of-ownership stored on the Ethereum network as
                an ERC-721 NFT.
              </p>

              <div className="timer mb-60px">
                <div className="time-wrap">
                  <div className="teko timer-number fs-144px pink ">16</div>
                  <span className="fs-30px weight-6 dark-blue"> HRS</span>
                </div>
                <div className="timer-dot pink"></div>
                <div className="time-wrap">
                  <span className="teko timer-number fs-144px pink ">06</span>
                  <span className="fs-30px weight-6 dark-blue">MIN</span>
                </div>
                <div className="timer-dot pink"></div>
                <div className="time-wrap">
                  <span className="teko timer-number fs-144px pink ">48</span>
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
            <div className="hero-right"></div>
          </div>
        </div>
      </div>
      {/* HERO ENDS */}

      {/* WELCOME STARTS */}
      <div className="welcome-wrapper ">
        <div className="container-wrapper">
          <div className="welcome py-200px">
            <div className="welcome-left">
              <img src={welcomeImg} alt="" />
            </div>
            <div className="welcome-right">
              <p className="teko fs-96px weight-7 lh-90px dark-blue mb-40px">
                Welcome Cat
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
    </div>
  );
}

export default Home;
