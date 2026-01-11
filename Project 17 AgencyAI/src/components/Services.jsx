import React from "react";
import assets from "../assets/assets";
import Title from "./Title";
import ServicesCrad from "./ServicesCrad";

const Services = () => {
  const servicesData = [
    {
      title: "Advertising",
      description:
        "We turn bold ideas into powerful digital solutions that connect, engage...",
      icon: assets.ads_icon,
    },
    {
      title: "Content Marketing",
      description: "We help you execute your plan and deliver results.",
      icon: assets.marketing_icon,
    },
    {
      title: "Brand Strategy",
      description:
        "We build strong brand identities that connect emotionally with audiences.",
      icon: assets.content_icon,
    },
    {
      title: "Web Development",
      description: "We create fast, responsive, and scalable web applications.",
      icon: assets.social_icon,
    },
  ];

  return (
    <div
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-28 -left-20 -z-10 dark:hidden"
      />

      <Title
        title="How can we help?"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-2 ">
        {servicesData.map((service, idx) => (
          <ServicesCrad service={service} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Services;
