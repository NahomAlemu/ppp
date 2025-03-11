"use client";

import React from "react";
import { companies } from "@/data";
import Image from "next/image";
const Clients = () => {
  return (
    <section id="clients" className="py-2 md:py-4">
      {/* <h1 className="heading">
        Trusted by
        <span className="text-purple"> leading companies</span>
      </h1> */}

      <div className="flex flex-col items-center max-lg:mt-6">
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-8 max-lg:mt-4">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex items-center gap-2">
                {/* Company Logo */}
                <Image
                  src={company.img}
                  alt={`${company.name} Logo`}
                  className="md:w-20 w-12 h-auto"
                  width={80}
                  height={80}
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
