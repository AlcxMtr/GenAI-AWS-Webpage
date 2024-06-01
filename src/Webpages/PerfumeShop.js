import React from 'react';
import { GoHeart } from "react-icons/go";
import { BsBag } from "react-icons/bs";
import { RiUserSmileLine } from "react-icons/ri";
import { IoChevronDown } from "react-icons/io5";

const Rating = ({ rating, count }) => (
  <div className="flex items-center">
    {Array.from({ length: 5 }).map((_, index) => (
      <RiUserSmileLine 
        key={index} 
        className={index < rating ? "text-pink-900" : "text-pink-200"} 
      />
    ))}
    <span className="text-sm text-gray-600 ml-2">({count})</span>
  </div>
);

const ProductCard = ({ product }) => (
  <div className="flex justify-center">
    <div className="max-w-64 flex flex-col items-left text-left">
      <div className="relative w-full">
        <div className="absolute top-0 left-0 right-0 flex justify-between p-2">
          <BsBag />
          <GoHeart />
        </div>
        <img src={product.image} alt={`Image of ${product.name}`} className="mb-1" />
      </div>
      <Rating rating={product.rating} count={product.count} />
      {product.discount && (
        <span className="text-xs text-red-600 mt-2">{product.discount}</span>
      )}
      <span className="text-sm font-semibold my-1">{product.brand}</span>
      <span className="text-gray-700 text-sm">{product.name}</span>
      <div>
        <span className={`text-sm font-semibold ${ product.originalPrice ? "text-red-600" : ""}`}>{product.price} </span>
        {product.originalPrice && (
          <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
        )}
      </div>
    </div>
  </div>
);

const ProductList = () => {
  return (
    <>
      <div className="flex justify-between mb-5">
        <div className="text-gray-400 text-sm mt-4 ml-4">82 products</div>
        <div className="flex mr-2 px-2 pt-1 bg-gradient-to-b from-white to-gray-200 border-b-2 border-black">
          <div className="text-sm font-bold mt-2 mb-1">Sort by: Best Price</div>
          <IoChevronDown className="mt-2.5 ml-8"/>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6 mx-4 justify-center">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

const products = [
  {
    id: 1,
    name: 'La Vie Est Belle Body Lotion 200 ml',
    brand: 'Lancôme',
    price: '460 kr',
    originalPrice: '575 kr',
    image: 'https://placehold.co/300x400',
    discount: 'Discount 20%',
    rating: 5,
    count: 5
  },
  {
    id: 2,
    name: 'Flowerbomb Body Lotion 200 ml',
    brand: 'Viktor&Rolf',
    price: '480 kr',
    originalPrice: '600 kr',
    image: 'https://placehold.co/300x400',
    discount: 'Discount 20%',
    rating: 4,
    count: 6
  },
    {
    id: 3,
    name: 'J\'adore Les Adorables Body Milk 200 ml',
    brand: 'DIOR',
    price: '790 kr',
    originalPrice: '',
    image: 'https://placehold.co/300x400',
    discount: '',
    rating: 0,
    count: 0
  },
    {
    id: 4,
    name: 'Aromatics Elixir Body Smoother 200 ml',
    brand: 'Clinique',
    price: '515 kr',
    originalPrice: '',
    image: 'https://placehold.co/300x400',
    discount: '',
    rating: 4,
    count: 5
  }
];

export default ProductList;