import React, { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer: "Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Non pulvinar neque laoreet suspendisse interdum consectetur. Tristique et egestas quis ipsum suspendisse ultrices. In cursus turpis massa tincidunt."
    },
    {
      question: "Vestibulum lorem sed risus ultricies tristique?",
      answer: "Interdum velit laoreet id donec ultrices tincidunt arcu. Dictum varius duis at consectetur lorem donec massa. Ipsum nunc aliquet bibendum enim facilisis gravida neque. Facilisi etiam dignissim diam quis enim lobortis scelerisque."
    },
    {
      question: "Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor?",
      answer: "Purus sit amet volutpat consequat mauris nunc congue. Adipiscing enim eu turpis egestas pretium aenean pharetra. Dictumst vestibulum rhoncus est pellentesque elit."
    }
  ];

  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-[27px] font-bold leading-tight" style={{ color: '#6B3CC9' }}>Frequently Asked Questions</h2>
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {faqs.map((faq, index) => (
            <div key={index} className={`transition-all duration-200 bg-gray-50 border border-gray-200 shadow-lg cursor-pointer ${activeIndex === index ? 'bg-gray-100' : ''}`}>
              <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6" onClick={() => toggleAccordion(index)}>
                <span className={`flex text-lg font-semibold ${activeIndex === index ? 'text-purple-700' : 'text-black'}`}>{faq.question}</span>
                {activeIndex !== index && (
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
                    <path d="M8 1V15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1 8H15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
                
                {activeIndex === index && (
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 16 2">
                    <path d="M1 1H15" stroke="#6B3CC9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>

              <div className={`${activeIndex === index ? 'px-4 pb-5 sm:px-6 sm:pb-6' : 'hidden'}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
