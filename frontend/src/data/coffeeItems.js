import { assets } from "../assets/assets";

const coffeeItems = [
  {
    name: "Caramel Santuy",
    img: assets.starbucks,
    color: "bg-[#ffe0d0]",
    rating: 4.8,
    price: 2.95,
  },
  {
    name: 'Caramel Ribbon',
    img: assets.starbucks,
    rating: '4.6',
    color: 'bg-[#FFCAD4]',
    price: 2.95,
  },
  {
    name: 'Strawberry Funnel',
    img: assets.starbucks,
    rating: '4.5',
    color: 'bg-[#D8E2DC]',
    price: 2.95,
  },
  {
    name: 'Strawberry Funnel',
    img: assets.starbucks,
    rating: '4.5',
    color: 'bg-brown-500',
    price: 2.95,
  },

];
const categories = [
    {
      name: "Latte",
      img: assets.Latte,
    },
    {
      name: "Iced",
      img: assets.Iced,
    },
    {
      name: "Mocha",
      img: assets.Mocha,
    },
    {
      name: "Espresso",
      img: assets.Espresso,
    },]
export const data={
coffeeItems,categories
};
