import React from 'react';
import Logosvg from './Logosvg';

const Footer = () => {
  return (
  
    <footer class="bg-purple-700">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
        <div className="flex-col items-center flex-shrink-0 text-white mr-6 w-full sm:w-1/2 mb-8">
            <Logosvg />
            <p className="mt-8">Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve a single objective - your business results.</p>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-white text-[25px]">Our Technologies</h2>
                  <ul class="text-white dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a class="hover:underline">ReactJs</a>
                      </li>
                      <li class="mb-4">
                          <a class="hover:underline">Gatsby</a>
                      </li>
                      <li class="mb-4">
                          <a class="hover:underline">NextJs</a>
                      </li>
                      <li>
                          <a class="hover:underline">NodeJs</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-white text-[25px]">Our Services</h2>
                  <ul class="text-white dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a class="hover:underline">Social Media Marketing</a>
                      </li>
                      <li class="mb-4">
                          <a class="hover:underline">Web & Mobile App Development</a>
                      </li>
                      <li class="mb-4">
                          <a class="hover:underline">Data & Analytics</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 w-[700px]" />
      <div class="sm:flex sm:items-center sm:justify-center w-full">
          <span class="text-sm text-white sm:text-center">Privacy Policy | Terms & Conditions
          </span>
          
      </div>
    </div>
    </footer>

  );
}

export default Footer;
