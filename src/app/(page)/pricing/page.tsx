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
      title: "Online Store",
      description: "Sell products and accept online payments",
      usage: [...useage1Month, "Sell services", "Store with secure checkout"],
      price: "$9.95/MO",
      priceTagline: "Renews at $34.99/MO",
      tag: "Monthly",
      isPrimary: false,
    },
    {
      title: "Online Store",
      description: "Sell products and accept online payments",
      usage: [...useage1Month, "Sell services", "Store with secure checkout"],
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
      </div>
      <div className="flex flex-wrap justify-center items-start gap-6 my-12 h-auto">
        {pricing.map((pricing) => {
          return <PricingCard key={pricing.title} {...pricing} isMain={true} />;
        })}
      </div>
    </div>
  );
}
