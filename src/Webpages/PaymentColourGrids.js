import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Feature = ({ title, description, neg }) => (
  <div className="flex flex-col items-start">
    <h3 className="text-lg font-semibold mb-1">{title}</h3>
    <div className={`relative transform ${neg}rotate-6 bg-gray-800 h-0.5 my-4 w-full`}></div>
    <p className="text-sm text-left">{description}</p>
    <div className="h-1 w-12 bg mt-2 mb-4" />
  </div>
);

const HeaderLink = ({ children }) => (
  <a href="#" className="text-md mx-4 my-2 hover:text-gray-700">{children}</a>
);

const Header = () => (
  <header className="flex justify-between items-center py-3">
    <div className="font-bold text-lg mx-4">check/out</div>
    <div className="flex-grow border-t-2 border-gray-600 mx-4 mt-1"></div>
    <nav className="flex">
      <HeaderLink>Solution</HeaderLink>
      <HeaderLink>Company</HeaderLink>
      <HeaderLink>Resources</HeaderLink>
    </nav>
    <div className="flex-grow border-t-2 border-gray-600 mx-4  mt-1" ></div>
    <div>
      <button className="text-md mx-4">Log in</button>
      <button className="bg-black text-white text-md mx-4 px-6 py-3 rounded-xl">Sign up</button>
    </div>
  </header>
);

const MainContent = () => (
  <div className="relative grid grid-rows-4 grid-cols-5 gap-6 p-4 h-full max-w-6xl">
    <div className="relative col-span-1 row-span-3 flex flex-col justify-end">
      <div className="bg-yellow-300 w-full h-2/5 rounded-3xl"
        style={{borderRadius: "2.5rem"}}>
      </div>
    </div>
    <div className="col-span-1 row-span-3">
      <div className="bg-purple-400 w-full h-full rounded-3xl"
        style={{borderRadius: "2.5rem"}}>
      </div>
    </div>
    <div className="col-span-1 row-span-3 flex flex-col justify-end">
      <div className="bg-gray-300 w-full h-3/4 rounded-3xl"
        style={{borderRadius: "2.5rem"}}>
      </div>
    </div>
    <div className="col-span-1 row-span-3 flex flex-col justify-between">
      <p className="text-sm mt-16 text-justify">
        <div className={`relative transform rotate-45 bg-gray-800 h-0.5 w-60 right-60 top-20`}></div>
        Process payments anywhere with our global payments platform and expertise to 
        help you unlock more value in every transaction.
      </p>
      <div className="bg-blue-300 w-full h-40 rounded-3xl"
        style={{borderRadius: "2.5rem"}}>
      </div>
    </div>
    <div className="col-span-1 row-span-3 flex flex-col justify-end">
      <div className="bg-green-300 w-full h-4/5 rounded-3xl"
        style={{borderRadius: "2.5rem"}}>
      </div>
    </div>
    <div className="col-span-1 row-span-1">
      <Feature title="Global coverage" description="150+ processing currencies, 20+ currencies" neg=''/>
    </div>
    <div className="col-span-1 row-span-1">
      <Feature title="Payment methods" description="Local payment methods – local cards." neg='-'/>
    </div>
    <div className="col-span-1 row-span-1">
      <Feature title="Local acquiring hubs" description="Direct local acquiring in major markets" neg=''/>        
    </div>
    <div className="col-span-2 row-span-1">
      <div className="bg-black w-full h-full rounded-3xl flex flex-row items-center"
        style={{borderRadius: "4rem"}}>
        <div className='text-white text-sm px-10'>
          Grow your business with the help of our flexible payments platform and local expertise.
        </div>
        <div className="flex bg-purple-300 rounded-full mr-4 p-2 justify-center items-center">
          <FaArrowRight size="2em"/>
        </div>
      </div>
    </div>
    
    {/* Overlay div */}
    <div className="absolute top-0 left-0 w-full h-full grid grid-rows-4 grid-cols-5 pointer-events-none">
      <div className="row-span-3 col-span-3">
        <h1 className="text-7xl font-semibold m-10 text-left">Payment processing for complex needs</h1>
      </div>
    </div>
  </div>
);

const App = () => (
  <div className="container mx-auto px-4">
    <Header />
    <div className="flex justify-center">
      <MainContent/>
    </div>
  </div>
);

export default App;