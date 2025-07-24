import { Testimonial } from "@/component/common/ClientsSlider";



export interface TourCardData {
    id: number;
    image: string;
    title: string;
    price: string;
    date: string;
    time: string;
    description: string;
}
export interface FeatureCard {
  image: string;
  title: string;
  description: string;
}
export type PackageCardData = {
  image: string;
  title: string;
  price: string;
  date: string;
  destination: string;
  booking: string;
  support: string;
};

export const popularPackages: PackageCardData[] = [
  {
    image: '/images/home/cardP1.webp',
    title: 'BIKE / RICKSHAW',
    price: '10',
    date: 'Your bike for a day',
    destination: 'City App',
    booking: 'Discount on Rickshaw',
    support: 'Guaranteed Support',
  },
  {
    image: '/images/home/cardP2.webp',
    title: 'BIKE TOURS',
    price: '30',
    date: 'A Mountain Bike Included',
    destination: 'A Guide For You',
    booking: 'Bottle of water',
    support: 'Guaranteed Support',
  },
  {
    image: '/images/home/cardP3.webp',
    title: 'BUS TRIPS',
    price: '45',
    date: 'Park ticket',
    destination: 'Return bus',
    booking: 'Companion',
    support: 'Guaranteed Support',
  },
  {
    image: '/images/home/cardf3.webp',
    title: 'TRANSFER',
    price: '10',
    date: 'Wherever You Want',
    destination: 'Wherever You Want',
    booking: 'At the best price',
    support: 'Guaranteed Support',
  },
];

export const tourCardsData: TourCardData[] = [
    {
        id: 1,
        image: '/images/home/card1.webp',
        title: 'Lucca Bike Tour',
        price: '34 €',
        date: 'MONDAY',
        time: '10-30 PP',
        description: 'A tour of the city and its surroundings led by a professional guide ...',
    },
    {
        id: 2,
        image: '/images/home/card2.webp',
        title: 'Lucca Bike Tour',
        price: '34 €',
        date: 'MONDAY',
        time: '10-30 PP',
        description: 'A tour of the city and its surroundings led by a professional guide ...',
    },
    {
        id: 3,
        image: '/images/home/card3.webp',
        title: 'Lucca Bike Tour',
        price: '34 €',
        date: 'MONDAY',
        time: '10-30 PP',
        description: 'A tour of the city and its surroundings led by a professional guide ...',
    },
    {
        id: 4,
        image: '/images/home/card4.webp',
        title: 'Lucca Bike Tour',
        price: '34 €',
        date: 'MONDAY',
        time: '10-30 PP',
        description: 'A tour of the city and its surroundings led by a professional guide ...',
    },
    {
        id: 5,
        image: '/images/home/card2.webp',
        title: 'Lucca Bike Tour',
        price: '34 €',
        date: 'MONDAY',
        time: '10-30 PP',
        description: 'A tour of the city and its surroundings led by a professional guide ...',
    },
    {
        id: 6,
        image: '/images/home/card4.webp',
        title: 'Lucca Bike Tour',
        price: '34 €',
        date: 'MONDAY',
        time: '10-30 PP',
        description: 'A tour of the city and its surroundings led by a professional guide ...',
    },
    {
        id: 7,
        image: '/images/home/card3.webp',
        title: 'Lucca Bike Tour',
        price: '34 €',
        date: 'MONDAY',
        time: '10-30 PP',
        description: 'A tour of the city and its surroundings led by a professional guide ...',
    },
    {
        id: 8,
        image: '/images/home/card1.webp',
        title: 'Lucca Bike Tour',
        price: '34 €',
        date: 'MONDAY',
        time: '10-30 PP',
        description: 'A tour of the city and its surroundings led by a professional guide ...',
    },

];
export const cards = [
  {
    image: '/images/home/cardf1.webp',
    title: 'Bike and rickshaw rental',
    description: 'Book your quality vehicle quickly for an hour or all day!',
  },
  {
    image: '/images/home/cardf2.webp',
    title: 'Guided tour of the countryside',
    description: 'Live the real Lucchese experience by visiting the suburbs by bike!',
  },
  {
    image: '/images/home/cardf3.webp',
    title: 'Taxi and NCC service',
    description: 'Do you need not only a bike but also a driver? Then you have found the right place!',
  },
  {
    image: '/images/home/cardf4.webp',
    title: 'Bus Package',
    description: 'Do you need not only a bike but also a driver? Then you have found the right place!',
  },
];



export const testimonials: Testimonial[] = [
  {
    name: 'Ahmed Ibrahim',
    image: '/images/another/client.png',
    comment: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure',
  },
  {
    name: 'Sara Khaled',
    image: '/images/another/client.png',
    comment: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure',
  },
  {
    name: 'Mohamed Ali',
    image: '/images/another/client.png',
    comment: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure',
  },
  {
    name: 'Noura Al-Farsi',
    image: '/images/another/client.png',
    comment: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure',
  },
];






 export const heroimagesabout = [
    '/images/about/hero1.webp',
    '/images/about/hero2.webp',
    '/images/about/hero3.webp'
];

 export const heroimageshome = [
    '/images/home/hero1.webp',
    '/images/home/hero2.webp',
    '/images/home/hero4.webp'
];

export const whatwedocards = [
  { icon: '/images/about/icon2.png', title: 'Complete Packages For All Your Wishes' },
  { icon: '/images/about/icon4.png', title: 'Over 30 Years Of Experience' },
  { icon: '/images/about/icon3.png', title: 'Expert Guides For You' },
  { icon: '/images/about/icon1.png', title: 'Guaranteed fun at the best price!' },
];

export const stats = [
  { value: 20, label: 'Years Experience' },
  { value: 100, label: 'Happy Customer' },
  { value: 15, label: 'Choice of Services' },
  { value: 10, label: 'Professional Guides' },
];