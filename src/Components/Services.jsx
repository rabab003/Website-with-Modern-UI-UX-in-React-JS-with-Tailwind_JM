import React from "react";
import { Section } from "./Section";
import Heading from "./Heading";
import { service1, service2, service3 } from "../assets";

function Services() {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Generative AI made for creators"
          text="brainWave unlocks the potenial of AI-powered applications "
        />
        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-1 ">
            <div>
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                height={730}
                src={service1}
                alt=""
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4>smartest AI</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reiciendis.
              </p>
              <ul className="body-2"></ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Services;
