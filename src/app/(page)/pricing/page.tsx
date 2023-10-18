"use client";
import React from "react";
import PricingCard from "@/app/components/PricingCard";

export default function Pricing() {
  const [pricingPeriod, setPricingPeriod] = React.useState<"month" | "year">(
    "month"
  );

  const handlePricingSwitch = (period: "month" | "year") => {
    setPricingPeriod(period);
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
  const pricing = [
    {
      title: "Free Trial",
      description: "One month Free Trial",
      usage: [
        ...useage1Month,
        "Sell Products / Service",
        "Store with secure checkout",
      ],
      price: "",
      offer: "Free",
      priceTagline: "",
      tag: "Monthly",
      isPrimary: false,
    },
    {
      title: "Online Service",
      description: "Sell services and accept sales leads",
      usage: [...useage1Month, "Sell Services"],
      tag: "Monthly",
      price: "$9.95/MO",
      priceTagline: "Renews at $34.99/MO",
      isPrimary: false,
    },
    {
      title: "Online Store",
      description: "Sell products and accept online payments",
      usage: [...useage1Month, "Sell Products", "Store with secure checkout"],
      tag: "Monthly",
      price: "$9.95/MO",
      priceTagline: "Renews at $34.99/MO",
      isPrimary: false,
    },
  ];

  const yearPrice = [
    {
      title: "Online Service",
      description: "Sell services and accept sales leads",
      usage: [...useage1Month, "Sell Services"],
      tag: "Yearly",
      price: "$13.95/MO",
      priceTagline: "Renews at $29.99/MO",
      isPrimary: false,
    },
    {
      title: "Online Store",
      description: "Sell products and accept online payments",
      usage: [...useage1Month, "Sell Products", "Store with secure checkout"],
      tag: "Yearly",
      price: "$13.95/MO",
      priceTagline: "Renews at $29.99/MO",
      isPrimary: false,
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
            onClick={() => handlePricingSwitch("month")}
            className={` rounded-md px-4 py-2 cursor-pointer ${
              pricingPeriod === "month"
                ? "bg-purple-600 text-white"
                : "bg-white"
            }`}
          >
            Monthly
          </div>{" "}
          <div
            onClick={() => handlePricingSwitch("year")}
            className={`rounded-md px-4 py-2 cursor-pointer ${
              pricingPeriod === "year" ? "bg-purple-600 text-white" : "bg-white"
            }`}
          >
            Yearly
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-start gap-6 my-12 h-auto">
        {pricingPeriod === "month" &&
          pricing.map((pricing) => {
            return (
              <PricingCard key={pricing.title} {...pricing} isMain={true} />
            );
          })}
        {pricingPeriod === "year" &&
          yearPrice.map((pricing) => {
            return (
              <PricingCard key={pricing.title} {...pricing} isMain={true} />
            );
          })}
      </div>
    </div>
  );
}
