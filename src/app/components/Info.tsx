import React from "react";

export default function Info() {
  return (
    <section
      className="section section-dark section-angled border-0 !pb-0 !m-0 bg-cover bg-top text-white bg-purple-600 h-full !pt-24"
      style={{ backgroundImage: "url(/landing/img/build_bg.jpg)" }}
    >
      {/* <div
        className="section-angled-layer-top section-angled-layer-increase-angle"
        style={{ padding: "4rem 0", backgroundColor: "#f4f4f4" }}
      ></div> */}
      <div className="container  text-center my-5 py-5">
        <h2 className="font-bold leading-12 text-3xl md:text-5xl mt-5 mb-3 animate__animated animate__fadeInUp">
          Build your web store with Mywebstore.black.
        </h2>
        <h4 className="font-bold text-xl md:text-4xl mb-4 pb-2 animate__animated animate__fadeInUp">
          Start now for less than{" "}
          <span className="highlighted-word highlighted-word-animation-1 highlighted-word-animation-1-no-rotate highlighted-word-animation-1 highlighted-word-animation-1-light alternative-font-4 font-bold text-4 light animate__animated animate__blurIn">
            $1 dollar per day!
          </span>
        </h4>
        <div className="animate__animated animate__fadeInUp">
          <h4 className=" font-light text-lg  col-span-6 px-0 offset-span-3  mb-5 opacity-8">
            Mywebstore.black. enables you to create a web store without limits.
          </h4>
        </div>
        <div className="grid grid-cols-12 gap-4 px-0 pb-2 mb-4 place-content-center place-items-center">
          <div className="col-span-12 md:col-span-4 lg:col-span-3">
            <h5 className="font-normal text-xl animate__animated animate__fadeInRight">
              <i className="fa fa-check"></i> Secure Checkout
            </h5>
          </div>
          <div className="col-span-12 md:col-span-4 lg:col-span-3">
            <h5 className="font-normal text-xl animate__animated animate__fadeInRight">
              <i className="fa fa-check"></i> Order Management:
            </h5>
          </div>
          <div className="col-span-12 md:col-span-4 lg:col-span-3">
            <h5 className="font-normal text-xl animate__animated animate__fadeInRight">
              <i className="fa fa-check"></i> Customer Support
            </h5>
          </div>
        </div>
        <a
          href="/pricing"
          className="btn btn-dark btn-modern btn-rounded px-5 btn-py-3 text-4 animate__animated animate__fadeIn"
          target="_blank"
          rel="noopener"
        >
          GET STARTED NOW!
        </a>
      </div>
      <div className="flex flex-wrap items-center border border-l-0 border-b-0 border-r-0 border-color-light-2 md:min-h-[6rem]">
        <div className="hover-dark w-1/2 lg:w-1/3 text-center py-4">
          <a
            href="http://www.okler.net/"
            className="text-decoration-none"
            target="_blank"
            rel="noopener"
          >
            <div className="flex-col items-center">
              <img
                src="/img/shop2.png"
                className="mx-auto"
                width="100px"
                alt=""
              />
              <h4 className="text-4 mb-0">Customer Showcase</h4>
            </div>
          </a>
        </div>
        <div className="hover-dark w-1/2 lg:w-1/3 text-center divider-left-border border-color-light-2 py-4">
          <a
            href="http://www.okler.net/open-a-ticket/"
            className="text-decoration-none"
            target="_blank"
            rel="noopener"
          >
            <div className="flex-col items-center">
              <img
                src="/img/support.png"
                className="mx-auto"
                width="100px"
                alt=""
              />
              <h4 className="text-4 mb-0">Support Center</h4>
            </div>
          </a>
        </div>
        <div className="hover-dark w-1/2 lg:w-1/3 text-center divider-left-border border-color-light-2 py-4">
          <a
            href="documentation.html"
            className="text-decoration-none"
            target="_blank"
            rel="noopener"
          >
            <div className="flex-col items-center">
              <img src="/img/doc.png" className="mx-auto" width="80px" alt="" />
              <h4 className="text-4 mb-0">Online Documentation</h4>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
