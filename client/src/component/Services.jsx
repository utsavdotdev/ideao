import React from "react";
import "../css/services.css";
import { BiSearchAlt } from "react-icons/bi";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";

const Services = () => {
  const srv = [
    {
      title: "Search",
      des: "You can easily search the useful idea as per your requirement.",
      icon: <BiSearchAlt />,
    },
    {
      title: "Post",
      des: "You can Post the creativeness in the form of idea.",
      icon: <RiLightbulbFlashLine />,
    },
    {
      title: "User Friendly",
      des: "It is fully optimize for making user friendly ecosystem.",
      icon: <FiUsers />,
    },
  ];
  return (
    <>
      <section>
        <div class="container">
          <h2>Our Services</h2>
          <section class="services">
            {srv.map((data, i) => (
              <div class="card">
                <div class="content">
                  <div class="icon">{data.icon}</div>
                  <div class="title">{data.title}</div>
                  <p>{data.des}</p>
                </div>
              </div>
            ))}
          </section>
        </div>
      </section>
    </>
  );
};

export default Services;
