export type Product = {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  image: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Red Maxi",
    slug: "red-maxi",
    description: "A bright red maxi made of cotton.",
    price: 1200,
    image: "red-maxi.jpg",
  },
  {
    id: 2,
    name: "Red Shirt",
    slug: "red-shirt",
    description: "A bright red shirt made of cotton.",
    price: 2000,
    image: "red-shirt.jpg",
  },
  {
    id: 3,
    name: "Black Frock",
    slug: "black-frock",
    description: "A bright black frock made of cotton.",
    price: 3500,
    image: "black-frock.jpg",
  },
  {
    id: 4,
    name: "Blue Maxi",
    slug: "blue-maxi",
    description: "A bright blue maxi made of cotton.",
    price: 2000,
    image: "blue-maxi.jpg",
  },
  {
    id: 5,
    name: "Mahroon Frock",
    slug: "mahroon-frock",
    description: "A bright mahroon frock made of cotton.",
    price: 3500,
    image: "mahroon-frock.jpg",
  },
  {
    id: 6,
    name: "Purple Maxi",
    slug: "purple-maxi",
    description: "A bright purple maxi made of cotton.",
    price: 3500,
    image: "purple-maxi.jpg",
  },
  {
    id: 7,
    name: "Blue Maxi 2",
    slug: "blue-maxi-2",
    description: "A bright blue maxi (design 2) made of cotton.",
    price: 3500,
    image: "blue-maxi-2.jpg",
  },
  {
    id: 8,
    name: "Pink Frock",
    slug: "pink-frock",
    description: "A bright pink frock made of cotton.",
    price: 3500,
    image: "pink-frock.jpg",
  },
  {
    id: 9,
    name: "Mahroon Frock Elegant",
    slug: "mahroon-frock-elegant",
    description: "An elegant mahroon frock made of cotton.",
    price: 3500,
    image: "mahroon-frock-elegant.jpg",
  },
  {
    id: 10,
    name: "Mahroon Frock Graceful",
    slug: "mahroon-frock-graceful",
    description: "A graceful mahroon frock made of cotton.",
    price: 3500,
    image: "mahroon-frock-graceful.jpg",
  },
];
