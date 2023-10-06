import React from "react";

export default function Video() {
  return (
    <section
      id="intro"
      className="section bg-light pt-0 pb-5 m-0 section-one-content relative my-24"
    >
      <img
        src="/bg/cart.png"
        className="hidden md:block section-ele w-32"
        alt=""
      />
      <div className="container pb-5 min-h-screen">
        <div className="flex flex-col md:flex-row mb-12 pb-lg-3 counters">
          <div className="md:w-8/12 md:mx-auto text-center">
            <h2 className="font-bold text-xl md:text-5xl mb-0 ">
              The Perfect Location for
              <br />
              Your Online Store
            </h2>
            <p className="sub-title text-lg text-brand font-semibold mt-2 mb-4 text-purple-600">
              TOGETHER WE GO{" "}
              <span
                className="highlighted-word highlighted-word-animation-1 highlighted-word-animation-1-2 highlighted-word-animation-1
               highlighted-word-animation-1-no-rotate font-semibold line-height-2 pb-2 relative"
              >
                FARTHER!
              </span>
            </p>
            <p className="text-md md:text-lg negative-ls-05 pt-3 text-gray-700">
              iMarketplace.World is simply a better choice for your new web
              store. Our store templates are designed specifically to cater to
              the unique needs & preferences of sellers & buyers of our
              community. {"We're"} more than just a shopping platform & destination;
              {"we're"} a community. Your search for the best solution to sell your
              goods is now over, create your web store here and join us & our
              league of happy customers.
            </p>
          </div>
        </div>
        <div className="block md:flex flex-col md:flex-row items-center justify-center md:justify-start relative">
          <div className="md:w-full md:pl-0 pr-5 pb-5 md:pb-0 mb-5 md:mb-0">
            <div className="intro2 pt-5 md:pt-0 mt-5 md:mt-0  md:pr-5">
              <video loop controls width="918" height="496">
                <source
                  id="mp4"
                  src="/landing/video/vid1.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div
              className="intro3 z-30 absolute w-[23.85rem]"
              style={{ marginTop: "50px", top: "20%", right: "10%" }}
            >
              <img
                src="/landing/img/intro3.jpg"
                className="hidden md:block img-fluid border border-solid border-light border-10 rounded-lg w-full shadow-2xl"
                alt="Screenshot 3"
                style={{ boxSizing: "initial" }}
              />
              <div
                className="absolute hidden md:flex items-end Shorter"
                style={{ bottom: "-135px", right: "-20px" }}
              >
                <strong className="text-dark mb-5">
                  A lot shops to get started
                </strong>
                <span
                  className="arrow hru"
                  style={{ marginBottom: "30px" }}
                ></span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mt-6">
          <div className="md:w-full text-center mt-5">
            <a
              href="https://market-place-dashboard.azurewebsites.net/register"
              className="rounded-full btn-purple px-6 py-4 text-md md:text-xl text-white "
              target="_blank"
              rel="noopener"
            >
              GET STARTED NOW!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
