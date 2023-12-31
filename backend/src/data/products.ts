import { Product } from '../models/Product';

const products: Omit<Product, '_id'>[] = [
  {
    name: 'Read Dead Redemption 2',
    image: 'https://source.unsplash.com/random',
    description: 'Wild West and Cowboys 🤠',
    category: 'RPG',
    price: 70.0,
    countInStock: 111,
    rating: 5.0,
    numReviews: 16,
  },
  {
    name: 'Borderlands 3',
    image: 'https://source.unsplash.com/random',
    description: 'Comicbooklike Comedy',
    category: 'RPG',
    price: 45.0,
    countInStock: 12,
    rating: 4.5,
    numReviews: 94,
  },
  {
    name: "Baldur's Gate 3",
    image: 'https://source.unsplash.com/random',
    description: "For D'n'D Fans 🎲",
    category: 'CRPG',
    price: 62.0,
    countInStock: 765,
    rating: 5.0,
    numReviews: 78,
  },
  {
    name: 'Cities Skylines 2',
    image: 'https://source.unsplash.com/random',
    description: 'City Builder',
    category: 'Simulator',
    price: 68.0,
    countInStock: 876,
    rating: 4.0,
    numReviews: 54,
  },
  {
    name: 'Valorant',
    image: 'https://source.unsplash.com/random',
    description: 'Fantasy FPS',
    category: 'FPS',
    price: 1.0,
    countInStock: 999,
    rating: 3.5,
    numReviews: 2344,
  },
  {
    name: 'Disco Elysium',
    image: 'https://source.unsplash.com/random',
    description: 'Disco Detective',
    category: 'RPG',
    price: 20.0,
    countInStock: 423,
    rating: 5.0,
    numReviews: 332,
  },
];

export default products;
