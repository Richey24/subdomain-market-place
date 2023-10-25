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
            <h5 style={{ textTransform: "capitalize" }} className="text-primary font-bold mb-1">
              #1 destination for melanated shoppers!
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
              Mywebstore.black, the best choice for your web store or freelance service site.
              Connect customers to your products or clients to your freelance services.
              {"World's"} best collection of web store and service templates targeting melanated businesses.{" "}
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
                <b>NOTE:</b> {"Website's"} content & services are designed primarily to address the need of Israelites i.e. African
                Americans, Blacks of the dispora, Hispanics & Native Americans, 18 years or older.
              </p>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "20px", flexWrap: "wrap" }}>
                <a
                  href="/pricing"
                  data-hash
                  data-hash-offset="120"
                  className="px-8 py-3 rounded-md text-white btn-purple font-semibold text-color-light text-sm"
                >
                  Join the Shopping Revolution!
                </a>
                <Image
                  src="/myweb.png"
                  alt="Landing Image"
                  width={500}
                  height={500}
                  style={{ width: "17rem", height: "20rem" }}
                />
              </div>
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
