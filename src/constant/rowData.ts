const book1 = require('../assets/images/book1.jpg')
const book2 = require('../assets/images/book2.jpg')
const book3 = require('../assets/images/book3.jpg')
const book4 = require('../assets/images/book4.jpg')
const book5 = require('../assets/images/book5.jpg')
const book6 = require('../assets/images/book6.jpg')

export const popularBooks = [
  {
    id: 1,
    image: book1,
    name: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    backgroundColor: '#e2f4e7',
    rating: 4.7,
    publisher: 'Scribner',
    description:
      'The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island.',
    genre: 'Fiction',
    pages: 180,
    size: '1.2MB',
    offer: '30% off',
    price: '$14.00',
    actualPrice: '$20.00',
    priceWithoutDiscount: 20,
  },
  {
    id: 2,
    image: book2,
    name: 'A sky for us alone',
    author: 'George Orwell',
    backgroundColor: '#f7e8e1',
    rating: 4.6,
    publisher: 'Secker & Warburg',
    description: 'A dystopian social science fiction novel and cautionary tale, set in a totalitarian society under constant surveillance.',
    genre: 'Dystopian',
    pages: 328,
    size: '2MB',
    offer: '30% off',
    price: '$10.50',
    actualPrice: '$15.00',
    priceWithoutDiscount: 15,
  },
  {
    id: 3,
    image: book3,
    name: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    backgroundColor: '#faf0c5',
    rating: 4.8,
    publisher: 'J.B. Lippincott & Co.',
    description:
      'The unforgettable story of a young girl growing up in the racially charged Deep South, and her father, a lawyer, defending a black man falsely accused of a crime.',
    genre: 'Historical Fiction',
    pages: 281,
    size: '1.5MB',
    offer: '30% off',
    price: '$17.50',
    actualPrice: '$25.00',
    priceWithoutDiscount: 25,
  },
  {
    id: 4,
    image: book4,
    name: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    backgroundColor: '#dcfcf4',
    rating: 4.3,
    publisher: 'Little, Brown and Company',
    description:
      'A story about adolescent angst and alienation, told through the eyes of the witty and cynical protagonist, Holden Caulfield.',
    genre: 'Classic',
    pages: 214,
    size: '1MB',
    offer: '30% off',
    price: '$12.60',
    actualPrice: '$18.00',
    priceWithoutDiscount: 18,
  },
  {
    id: 5,
    image: book5,
    name: 'Pride and Prejudice',
    author: 'Jane Austen',
    backgroundColor: '#f1dcfc',
    rating: 4.9,
    publisher: 'T. Egerton, Whitehall',
    description:
      'The story of Elizabeth Bennet and her journey of self-discovery, as she learns about the repercussions of hasty judgments.',
    genre: 'Romance',
    pages: 432,
    size: '2.3MB',
    offer: '30% off',
    price: '$10.50',
    actualPrice: '$15.00',
    priceWithoutDiscount: 15,
  },
];

export const favoriteBooks = [
  {
    id: 1,
    image: book5,
    name: 'Pride and Prejudice',
    author: 'Jane Austen',
    backgroundColor: '#f1dcfc',
    rating: 4.9,
    publisher: 'T. Egerton, Whitehall',
    description:
      'The story of Elizabeth Bennet and her journey of self-discovery, as she learns about the repercussions of hasty judgments.',
    genre: 'Romance',
    pages: 432,
    size: '2.3MB',
    offer: '30% off',
    price: '$10.50',
    actualPrice: '$15.00',
    priceWithoutDiscount: 15,
    progress: 0.8,
  },
  {
    id: 2,
    image: book4,
    name: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    backgroundColor: '#dcfcf4',
    rating: 4.3,
    publisher: 'Little, Brown and Company',
    description:
      'A story about adolescent angst and alienation, told through the eyes of the witty and cynical protagonist, Holden Caulfield.',
    genre: 'Classic',
    pages: 214,
    size: '1MB',
    offer: '30% off',
    price: '$12.60',
    actualPrice: '$18.00',
    priceWithoutDiscount: 18,
    progress: 1.0,
  },
  {
    id: 3,
    image: book6,
    name: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    backgroundColor: '#e3eaf4',
    rating: 4.8,
    publisher: 'J.B. Lippincott & Co.',
    description:
      'The unforgettable story of a young girl growing up in the racially charged Deep South, and her father, a lawyer, defending a black man falsely accused of a crime.',
    genre: 'Historical Fiction',
    pages: 281,
    size: '1.5MB',
    offer: '30% off',
    price: '$17.50',
    actualPrice: '$25.00',
    priceWithoutDiscount: 25,
    progress: 0.6,
  },
  {
    id: 4,
    image: book3,
    name: '1984',
    author: 'George Orwell',
    backgroundColor: '#faf0c5',
    rating: 4.6,
    publisher: 'Secker & Warburg',
    description:
      'A dystopian social science fiction novel and cautionary tale, set in a totalitarian society under constant surveillance.',
    genre: 'Dystopian',
    pages: 328,
    size: '2MB',
    offer: '30% off',
    price: '$10.50',
    actualPrice: '$15.00',
    priceWithoutDiscount: 15,
    progress: 0.2,
  },
]