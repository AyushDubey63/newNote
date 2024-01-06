import React, { useEffect } from 'react';

export default function AboutUsPage() {
  
  return (<>
    <style jsx>{`
  ::-webkit-scrollbar {
    height: 5px;
    width: 5px;
    background: #fafafa;
    border-radius: 1ex;
  }

  ::-webkit-scrollbar-thumb {
    background: #f67f66;
    border-radius: 1ex;
  }

  ::-webkit-scrollbar-corner {
    background: #fff3;
  }
  
`}</style>

    <div className="container aboutPage mx-auto">
      <div className="flex w-full justify-center items-center h-full">
        
        <div className="w-full px-6 flex flex-col gap-4 sm:w-5/6 md:w-2/3 bg-transparent backdrop-blur-xl visible rounded-xl mx-6 sm:px-8 py-8 text-[#2d1a57]">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-mono mb-6 text-left">
            About the App
          </h1>
          <ul class="text-[#2d1a57] list-disc text-2xl leading-8 space-y-4">
  <li class="mb-2 transition-transform transform hover:scale-105 duration-300 ease-in-out">
    "Welcome to my notes app, a labor of love crafted with the MERN stack. Dive into a seamless experience where technology meets functionality."
  </li>
  <li class="mb-2 transition-transform transform hover:scale-105 duration-300 ease-in-out">
    "Explore the intersection of creativity and code in my notes app – a testament to my journey with the MERN stack. Your thoughts, organized with precision."
  </li>
  <li class="mb-2 transition-transform transform hover:scale-105 duration-300 ease-in-out">
    "Crafted with passion and powered by MERN, this notes app is a reflection of my commitment to continuous learning. Enjoy the simplicity, embrace the power."
  </li>
  <li class="mb-2 transition-transform transform hover:scale-105 duration-300 ease-in-out">
    "Embark on a digital journey with my MERN-powered notes app. Here, every keystroke is a step towards mastery, and every note is a canvas for your ideas."
  </li>
  <li class="mb-2 transition-transform transform hover:scale-105 duration-300 ease-in-out">
    "In this digital realm, my MERN stack notes app stands tall – a testament to my dedication and the seamless fusion of MongoDB, Express, React, and Node.js."
  </li>
  <li class="mb-2 transition-transform transform hover:scale-105 duration-300 ease-in-out">
    "This notes app is more than just code – it's a canvas for your ideas, a reflection of my dedication to mastering the MERN stack. Dive in and make it your own."
  </li>
  <li class="mb-2 transition-transform transform hover:scale-105 duration-300 ease-in-out">
    "Experience the synergy of MERN in action with my notes app. A playground where technology meets creativity, and every note becomes a chapter in your digital story."
  </li>
</ul>
        </div>
      </div>
    </div>
  </>

  );
}
