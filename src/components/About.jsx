import React from "react";
import Computer_Image from '../assets/com.png'
import Search_Image from '../assets/search.png'

const About = () => {
  return (
    <div>
      <section className="overflow-hidden bg-white mx-auto" style={{ width: '80%' }}>
        <div className="container">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full lg:w-1/2 px-3 sm:px-4">
              <div className="relative z-10 my-4">
                <img
                  src={Computer_Image}
                  alt=""
                  className="w-full"
                  style={{ maxWidth: '100%' }}
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 px-4">
              <div className="mt-10 lg:mt-0">
                <h2 className="mb-5 text-3xl font-bold text-dark sm:text-[40px]/[48px]" style={{ color: '#6B3CC9' }}>
                  Web & Mobile App Development
                </h2>
                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                  Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.
                </p>
                <button style={{ backgroundColor: '#F28D35',marginTop: '8px'}} className="text-white py-2 px-4 rounded-lg hover:bg-purple-900 h-[38px] w-[214px]" >Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden bg-white mx-auto" style={{ width: '80%' }}>
        <div className="container">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full lg:w-1/2 px-4">
              <div className="mt-10 lg:mt-0">
                <h2 className="mb-5 text-3xl font-bold text-dark sm:text-[40px]/[48px]" style={{ color: '#6B3CC9' }}>
                  Digital Strategy Consulting
                </h2>
                <p className="mb-5 text-base text-body-color">
                  Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
                </p>
                <button style={{ backgroundColor: '#F28D35',marginTop: '8px'}} className="text-white py-2 px-4 rounded-lg hover:bg-purple-900 h-[38px] w-[214px]" >Learn More</button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-3 sm:px-4">
              <div className="relative z-10 my-4">
                <img
                  src={Search_Image}
                  alt=""
                  className="w-full"
                  style={{ maxWidth: '100%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
