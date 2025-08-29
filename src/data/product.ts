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
    image:"Red Maxi.jpg"
  },
  {
    id: 2,
    name: "Red Shirt",
    slug: "Red Shirt",
    description: "A bright red Shirt made of cotton.",
    price: 2000,
    image: "Red Shirt.jpg"
  },
  {
    id: 3,
    name: "Black Frock",
    slug: "Black Frock",
    description: "A bright Black Frock made of cotton.",
    price: 3500,
    image: "Black Frock.jpg"
  },
  {
   id: 4,
    name: "Blue Maxi",
    slug: "blue-maxis",
    description: "A bright Blue Maxi made of cotton.",
    price: 2000,
    image: "Blue Maxi.jpg"
 },
 {
    id: 5,
    name: "Mahroon Frock",
    slug: "Mahroon Frock",
    description: "A bright Mahroon Frock made of cotton.",
    price: 3500,
    image: "Mahroon Frock.jpg"
 },
  {
    id: 6,
    name: "Purple Maxi",
    slug: "Purple Maxi",
    description: "A bright Purple Maxi made of cotton.",
    price: 3500,
    image: "Purple Maxi.jpg"
 },
  {
    id: 7,
    name: "Blue Maxi2",
    slug: "Blue Maxi2",
    description: "A brightBlue Maxi2 made of cotton.",
    price: 3500,
    image: "Blue Maxi2.jpg"
 },
   {
    id: 8,
    name: "Pink Frock",
    slug: "Pink Frock",
    description: "A bright Pink Frock made of cotton.",
    price: 3500,
    image: "Pink Frock.jpg"
 },
   {
    id: 9,
    name: "Mahroon Frock Elegant",
    slug: "mahroon-frock-elegant",
    description: "An elegant mahroon frock made of cotton.",
    price: 3500,
    image: "Mahroon Frock.jpg"
  },
  {
    id: 10,
    name: "Mahroon Frock Graceful",
    slug: "mahroon-frock-graceful",
    description: "A graceful mahroon frock made of cotton.",
    price: 3500,
    image: "Mahroon Frock.jpg"
  }
];
