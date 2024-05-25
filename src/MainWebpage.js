import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { BsStars } from "react-icons/bs";

const SmallLink = ({ linkText }) => (
  <a href="#" className="flex items-center font-semibold">
      {linkText} <FiArrowRight className="ml-1" />
  </a>
);

const LargeLink = ({ linkText, linkDescription }) => (
  <div className='grid grid-cols-2 gap-8'>
    <div className={'grid'}>
      <div className={`text-lg font-medium mb-4`}>{linkDescription[0]}</div>
      <SmallLink linkText={linkText[0]}/>
    </div>
    <div className={'grid'}>
      <div className={`text-lg font-medium mb-4`}>{linkDescription[1]}</div>
      <SmallLink linkText={linkText[1]}/>
    </div>
  </div>
  
);

const Card = ({ title, description, linkText, linkDescription, type, colors }) => (
  <div className={`grid gap-1 items-stretch bg-gray-100 p-6 rounded-2xl shadow-md`} 
    style={{ gridTemplateRows: '1fr 2fr' + (type === 'large' ? ' 2fr' : '1fr')}}
  >
    <div className="flex items-center"> 
      <div className={`text-sm font-semibold mb-2 p-1.5 rounded-md ${type === 'large' ? 'text-lg' : ''}`}
        style={{background: 'linear-gradient(125deg, ' + colors + ')' }}
        >{title}</div>
    </div>
    <div className={`text-${type === 'large' ? '2' : ''}xl font-semibold mb-4`}>{description}</div>
    {type === 'large' ? 
    <LargeLink linkText={linkText} linkDescription={linkDescription} /> : 
    <SmallLink linkText={linkText} />}
  </div>
);

const CarouselControl = ({ direction }) => (
  <button
    className={`text-white bg-black rounded-full p-2 ${direction === 'prev' ? 'mr-2' : 'ml-2'}`}
    aria-label={direction === 'prev' ? 'Previous' : 'Next'}
  >
    {direction === 'prev' && (
      <GoChevronLeft size="1.5em" />
    )}
    {direction === 'next' && (
      <GoChevronRight size="1.5em" />
    )}
  </button>
);

const App = () => {
  const gradient = '#ccfdff, #5cc0ff, #9f80ff, #906bff';
  const cards = [
    {
      title: 'Blogs',
      description: 'Amazon Q is now generally available',
      linkText: 'Explore Amazon Q',
      type: 'small',
      colors: gradient,
    },
    {
      title: 'Service',
      description: 'Reinvent work with Amazon Q, your generative AI-powered assistant',
      linkText: 'Get started with Amazon Q',
      type: 'small',
      colors: gradient,
    },
  ];

  return (
    <div 
      className="" 
      style={{background: 'linear-gradient(45deg, #ffd67d, #d8a6ff)'}}
    >
      <div 
        className="grid grid-rows-2 gap-4 p-8" 
        style={{background: 'linear-gradient(transparent 40%, rgba(240,240,240,1)'}}
      >
        <div 
          className="pt-8 pb-8 pl-8 rounded-lg"
          style={{background: 'linear-gradient(125deg, ' + gradient + ')'}}
        >
          <div className="grid grid-cols-5 gap-4" style={{ gridTemplateColumns: '1fr auto 1fr 1fr auto' }}>
            <div className="m-4">
              <div className="flex items-center mt-4">
                <BsStars size="1.5em" />
                <h1 className="text-xl font-medium m-2">New capabilities</h1>
              </div>
              <div className={`text-5xl font-medium mb-2 pr-4`}>
                Generative AI on AWS
              </div>
            </div>
            <div className={`bg-white rounded-r-2xl shadow-md`} style={{ width: '20px' }}>
            </div>
            <Card {...cards[0]} />
            <Card {...cards[1]} />
            <div className={`bg-white rounded-l-2xl shadow-md`} style={{ width: '20px' }}>
            </div>
          </div>
          <div className="flex justify-end items-center pt-8 pr-12">
            <CarouselControl direction="prev" />
            <CarouselControl direction="next" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <Card
            title="Builders"
            description="For developers or anyone interested in learning how to build on AWS today"
            linkText={["Launch your first application", "Learn, build, & get connected"]}
            linkDescription={[
              "Start building with short step-by-step tutorials",
              "Get news, download tools, and find an AWS User Group near you"
            ]}
            type="large"
            colors='#eecfff, #c7baff'
          />
          <Card
            title="Decision Makers"
            description="For organization leaders to enable innovation and transformation"
            linkText={["Optimize business value", "Reinvent with data"]}
            linkDescription={[
              "Reduce costs, improve agility, productivity, and resilience",
              "Unlock growth, make better decisions, innovate faster"
            ]}
            type="large"
            colors='#a3ffd7, #c1b8ff'
          />
        </div>
      </div>
    </div>
  );
};

export default App;