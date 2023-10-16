"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import TemplateSection from "./components/TemplateSection";
import Video from "./components/Video";
import Info from "./components/Info";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
export default function Home() {
  return (
    <main className=" ">
      <MainSection />
      <Video />
      <TemplateSection />
      <div className="mt-5 ">
        <section className="section section-funnel relative z-10 border-0 !mt-0 pt-0 m-0">
          <div className="container pb-5 mb-5">
            <h2 className="fotn-weight-extra-bold mb-1 text-center">
              <b className="text-2xl md:text-[6rem] block line-height-1 text-primary appear-animation animated appear-animation-visible">
                100K+
              </b>
              <span
                className="font-bold md:text-[3.5rem] appear-animation animated fadeInUpShorter appear-animation-visible"
                style={{ animationDelay: "600ms" }}
              >
                People Already Using {"'Mywebstore.black'"} Store Design
                Technology
              </span>
            </h2>
            <p
              className="font-bold text-md text-gray-500 text-center appear-animation animated fadeInUpShorter appear-animation-visible"
              style={{ animationDelay: "750ms" }}
            >
              100K+ IN ALL {"Mywebstore.black.'S TECHNOLOGY'S"} VERSIONS
            </p>
            <div
              className="appear-animation animated fadeInUpShorter appear-animation-visible"
              style={{ animationDelay: "850ms" }}
            >
              <h5 className="font-semibold positive-ls-2 text-lg text-primary text-center mb-0">
                TOP 5 STAR RATING
              </h5>
              <p className="text-default text-center mb-4">
                Real people, real stories. Hear from our founder.
              </p>
              {/* slider */}
            </div>
            <p className="text-center mb-5">
              <a
                className="btn btn-dark btn-modern btn-rounded btn-px-5 btn-py-3 text-2 appear-animation animated fadeIn appear-animation-visible"
                href="https://market-place-dashboard.azurewebsites.net/register"
                target="_blank"
                rel="noopener"
                style={{ animationDelay: "250ms" }}
              >
                GET STARTED NOW!
              </a>
            </p>
          </div>
          <div className="p-4">
            <Swiper pagination={true} modules={[Pagination]}>
              <SwiperSlide>
                <div className="w-full md:w-2/3 xl:w-2/5 mx-auto bg-purple-600 text-white rounded-xl p-4 md:p-12">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div className="author">
                      <h4 className="text-5 mb-0">L.Silva</h4>
                      <span className="opacity-7">Boogie Sports Wear</span>
                    </div>
                    <span className="star-rating">
                      <i className="fas fa-star text-color-dark"></i>
                      <i className="fas fa-star text-color-dark"></i>
                      <i className="fas fa-star text-color-dark"></i>
                      <i className="fas fa-star text-color-dark"></i>
                      <i className="fas fa-star text-color-dark"></i>
                    </span>
                  </div>
                  <p className="mb-0">
                    {'"Working'} with IMarket Place has been an absolute pleasure.
                    Their eCommerce platform provided an intuitive and
                    user-friendly interface, making it incredibly easy for me to
                    set up my online store. The seamless integration with
                    various payment gateways allowed me to offer a secure and
                    convenient checkout experience to my {'customers"'}
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="section-funnel-layer-bottom">
            <div className="section-funnel-layer bg-light"></div>
            <div className="section-funnel-layer bg-light"></div>
          </div>
        </section>
      </div>

      <Info />
    </main>
  );
}
