"use client";
import React from "react";
import PricingCard from "@/app/components/PricingCard";

export default function Pricing() {
  const [pricingType, setPricingType] = React.useState<"store" | "service">(
    "store"
  );

  const handlePricingSwitch = (period: "store" | "service") => {
    setPricingType(period);
  };
  const useage1Month = [
    "Easy-to-use Website Builder",
    "Free Email notification*",
    "Free Video Training​",
    "1 HOUR ORIENTATION ONLINE",
  ];
  const useage2Month = [
    "Easy-to-use Website Builder",
    "Free Business Email & SSL Certificate*",
    "1 hour expert design support​",
  ];
  const storePricing = [
    {
      title: "Free Trial",
      description: "Configure Your Online Store",
      usage: [...useage1Month, "Sell Products", "Store with secure checkout"],
      price: "",
      offer: "Free",
      priceTagline: "",
      tag: "Monthly",
      isPrimary: false,
      type: "ecommerce",
    },

    {
      title: "Online Store",
      description: "Sell products and accept online payments",
      usage: [...useage1Month, "Sell Products", "Store with secure checkout"],
      tag: "Monthly",
      price: "$9.95/MO",
      priceTagline: "Renews at $34.99/MO",
      isPrimary: false,
      type: "ecommerce",
    },
    {
      title: "Online Store",
      description: "Sell products and accept online payments",
      usage: [...useage1Month, "Sell Products", "Store with secure checkout"],
      tag: "Yearly",
      price: "$13.95/MO",
      priceTagline: "Renews at $29.99/MO",
      isPrimary: false,
      type: "ecommerce",
    },
  ];

  const servicePricing = [
    {
      title: "Free Trial",
      description: "Configure Your Online Service",
      usage: [...useage1Month, "Sell  Service", "Store with secure checkout"],
      price: "",
      offer: "Free",
      priceTagline: "",
      tag: "Monthly",
      isPrimary: false,
      type: "service",
    },
    {
      title: "Online Service",
      description: "Sell services and accept sales leads",
      usage: [...useage1Month, "Sell Services", "Payment with secure checkout"],
      tag: "Monthly",
      price: "$9.95/MO",
      priceTagline: "Renews at $34.99/MO",
      isPrimary: false,
      type: "service",
    },
    {
      title: "Online Service",
      description: "Sell services and accept sales leads",
      usage: [...useage1Month, "Sell Services", "Payment with secure checkout"],
      tag: "Yearly",
      price: "$13.95/MO",
      priceTagline: "Renews at $29.99/MO",
      isPrimary: false,
      type: "service",
    },
  ];
  return (
    <div>
      <div className="px-12 py-16 text-center text-white bg-purple-600">
        <div className="text-2xl md:text-8xl font-extrabold mb-6">
          Pick your website package
        </div>
        <div className=" w-fit mx-auto shadow-md bg-opacity-70 flex gap-4 rounded-md bg-white text-purple-600 p-2">
          <div
            onClick={() => handlePricingSwitch("store")}
            className={` rounded-md px-4 py-2 cursor-pointer ${pricingType === "store" ? "bg-purple-600 text-white" : "bg-white"
              }`}
          >
            Online Store
          </div>{" "}
          <div
            onClick={() => handlePricingSwitch("service")}
            className={`rounded-md px-4 py-2 cursor-pointer ${pricingType === "service"
                ? "bg-purple-600 text-white"
                : "bg-white"
              }`}
          >
            Online Service
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-start gap-6 my-12 h-auto">
        {pricingType === "store" &&
          storePricing.map((pricing) => {
            return (
              <PricingCard key={pricing.title} {...pricing} isMain={true} />
            );
          })}

        {pricingType === "service" &&
          servicePricing.map((pricing) => {
            return (
              <PricingCard key={pricing.title} {...pricing} isMain={true} />
            );
          })}
      </div>
    </div>
  );
}
