import React from "react";
import Image from "next/image";

const MainSection: React.FC = () => {
  return (
    <section
      className="section section-concept section-no-border home-content section-angled section-angled-reverse pt-5 m-0 mb-5 overflow-hidden"
      id="section-concept"
    >
      <Image
        src="/bg/bag_ele.png"
        alt="Bag"
        className="hidden md:block  home-bag"
        width={200}
        height={200}
      />

      <div className="container mt-5">
        <div className="flex flex-wrap items-center">
          <Image
            src="/bg/bag_ele.png"
            alt="Bag"
            className="hidden md:block  home-bag"
            width={200}
            height={200}
          />
          <div className="w-full md:w-[66%]">
            <h5 className="text-primary font-bold mb-1">
              Discover Endless Possibilities
            </h5>
            <h1 className="font-bold line-height-2 text-4xl mb-12">
              Launch Your Web Store With{" "}
              <span className="animate__animated animate__fadeInRight animate__delay-600ms animate__faster">
                <span
                  className="inline-block text-primary highlighted-word highlighted-word-rotate highlighted-word-animation-1
                 alternative-font-1 font-bold text-1 ml-2 relative"
                >
                  US
                </span>
              </span>
            </h1>
            <h4 className="custom-font-size-1 text-dark font-bold">
              iMarketplace.World is simply the best choice for your new web
              store. Our web store templates targeted to our community we
              believe are among the most popular in our world without end.{" "}
              <br />
              <br />
              <span className="animate__animated animate__fadeInRight animate__delay-600ms animate__faster">
                <span
                  className="inline-block text-primary highlighted-word highlighted-word-rotate highlighted-word-animation-1
                 alternative-font-1 font-bold text-1 ml-2 relative"
                >
                  You can join NOW to start creating your store for FREE!
                </span>
              </span>
              <br />
              <p className="custom-font-size-1 mt-6 mb-8">
                <b>NOTE:</b> Eligible registrant must be an Israelite i.e.
                African American, Blacks of the diaspora, Hispanic or Native
                American, 18 years or older.
              </p>
              <a
                href="#intro"
                data-hash
                data-hash-offset="120"
                className="px-8 py-3 rounded-md text-white btn-purple font-semibold text-color-light text-sm"
              >
                Join the Shopping Revolution!
              </a>
            </h4>
          </div>

          <div className="flex-shrink-0 mb-5 relative">
            <Image
              src="/landing.png"
              alt="Landing Image"
              width={500}
              height={500}
              style={{ width: "24rem", height: "40rem" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
