import React from "react";
import { ReactComponent as Bottle } from "assets/images/bottle.svg";

function Roadmap() {
  let milkRef = React.useRef();
  let bottle = React.useRef();
  let lineRef = React.useRef();

  let box = React.useRef();
  let box2 = React.useRef();
  let box3 = React.useRef();
  let box4 = React.useRef();
  let box5 = React.useRef();
  let box6 = React.useRef();

  React.useEffect(() => {
    const handler = () => {
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
    };
    document.addEventListener("scroll", handler);

    return () => {
      document.removeEventListener("scroll", null);
    };
  }, []);

  return (
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
                    30% - ENTRANCE OF CAVIAR
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
                    50% - DRIPPY
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
                    70% - Burning
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
                    90% - TO THE MOON!
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
                    100% - BREEDING
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
  );
}

export default Roadmap;
