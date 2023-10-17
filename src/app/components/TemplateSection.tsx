import React from "react";

export default function TemplateSection() {
  const numberOfTemplate = 44;
  return (
    <section
      id="demos"
      className="section section-no-border section-light relative z-10 pt-0 m-0 py-12"
    >
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="w-full lg:w-8/12 text-center">
            <p className="block mdflex items-center justify-center font-bold text-dark text-4xl md:text-5xl -ls-1 pb-2 mb-5 appear-animation">
              <span className="font-extrabold text-4xl md:text-8xl highlighted-word highlighted-word-animation-1 highlighted-word-animation-1-2 highlighted-word-animation-1-2-dark highlighted-word-animation-1 highlighted-word-animation-1-no-rotate font-extra-bold line-height-1 text-9 mr-3">
                45
              </span>
              Prebuilt Web Store Templates Ready to Use
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="text-center mb-5 appear-animation">Show All</div>
        <div
          className="flex flex-wrap gap-4 justify-center overflow-visible"
          data-sort-id="portfolio"
        >
          {[...Array(numberOfTemplate)].map((temp, indx) => {
            return (
              <div
                key={`Template-${indx}`}
                className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 isotope-item demo border p-3 hover:shadow-lg rounded-md transition-shadow"
              >
                <div className="appear-animation">
                  <div className="hover-effect-1 text-center">
                    <a
                      href="https://market-place-dashboard.azurewebsites.net/register"
                      title="demo"
                    >
                      <span className="thumb-info thumb-info-no-zoom thumb-info-no-overlay temp-shadow thumb-info-no-bg">
                        <span className="thumb-info-wrapper thumb-info-wrapper-demos m-0">
                          <img
                            src={`/landing/img/previews/shop${indx + 1}.jpg`}
                            width="350"
                            height="259"
                            className="img-fluid rounded-md"
                            alt=""
                            style={{ height: "220px" }}
                          />
                        </span>
                      </span>
                    </a>
                    <h5 className="text-dark capitalize mt-3">
                      Store Design Template {indx + 1}
                    </h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
