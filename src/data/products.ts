import { Product, Testimonial } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Extra Virgin Olive Oil',
    price: 24.99,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=500',
    description: 'Premium cold-pressed extra virgin olive oil from Mediterranean olives. Perfect for cooking, salads, and gourmet dishes. Rich in antioxidants and healthy fats.',
    category: 'cooking-oil',
    featured: true,
    inStock: true,
    rating: 4.8,
    reviews: 156
  },
  {
    id: '2',
    name: 'Coconut Oil Organic',
    price: 18.99,
    image: 'https://images.pexels.com/photos/4198016/pexels-photo-4198016.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Pure organic coconut oil, perfect for cooking, baking, and beauty applications. Unrefined and chemical-free.',
    category: 'cooking-oil',
    featured: true,
    inStock: true,
    rating: 4.7,
    reviews: 89
  },
  {
    id: '3',
    name: 'Lavender Essential Oil',
    price: 32.50,
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Pure lavender essential oil for aromatherapy, relaxation, and wellness. Steam distilled from premium lavender flowers.',
    category: 'essential-oil',
    featured: true,
    inStock: true,
    rating: 4.9,
    reviews: 234
  },
  {
    id: '4',
    name: 'Sunflower Oil',
    price: 12.99,
    image: 'https://images.pexels.com/photos/4198017/pexels-photo-4198017.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Light and healthy sunflower oil ideal for frying, baking, and everyday cooking. High smoke point and neutral taste.',
    category: 'cooking-oil',
    inStock: true,
    rating: 4.5,
    reviews: 67
  },
  {
    id: '5',
    name: 'Tea Tree Essential Oil',
    price: 28.75,
    image: 'https://images.pexels.com/photos/4386405/pexels-photo-4386405.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Natural tea tree oil with antimicrobial properties. Great for skincare, hair care, and natural cleaning solutions.',
    category: 'essential-oil',
    inStock: true,
    rating: 4.6,
    reviews: 145
  },
  {
    id: '6',
    name: 'Avocado Oil',
    price: 21.99,
    image: 'https://images.pexels.com/photos/4198020/pexels-photo-4198020.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Premium avocado oil with high smoke point. Perfect for high-heat cooking and rich in healthy monounsaturated fats.',
    category: 'cooking-oil',
    inStock: true,
    rating: 4.7,
    reviews: 98
  },
  {
    id: '7',
    name: 'Eucalyptus Essential Oil',
    price: 26.99,
    image: 'https://images.pexels.com/photos/4386471/pexels-photo-4386471.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Pure eucalyptus essential oil for respiratory wellness and aromatherapy. Refreshing and invigorating scent.',
    category: 'essential-oil',
    inStock: true,
    rating: 4.8,
    reviews: 112
  },
  {
    id: '8',
    name: 'Sesame Oil',
    price: 16.50,
    image: 'https://images.pexels.com/photos/4198024/pexels-photo-4198024.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Traditional sesame oil with rich nutty flavor. Perfect for Asian cuisine and adds depth to stir-fries.',
    category: 'cooking-oil',
    inStock: true,
    rating: 4.6,
    reviews: 76
  },
  {
    id: '9',
    name: 'Peppermint Essential Oil',
    price: 24.99,
    image: 'https://images.pexels.com/photos/4386432/pexels-photo-4386432.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Refreshing peppermint essential oil for aromatherapy and natural wellness. Cooling and energizing properties.',
    category: 'essential-oil',
    inStock: false,
    rating: 4.7,
    reviews: 89
  },
  {
    id: '10',
    name: 'Argan Oil',
    price: 45.99,
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Premium Moroccan argan oil for beauty and culinary use. Rich in vitamin E and essential fatty acids.',
    category: 'others',
    inStock: true,
    rating: 4.9,
    reviews: 187
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    comment: 'Amazing quality oils! The olive oil is absolutely delicious and the essential oils are so pure. Will definitely order again!',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: '2',
    name: 'Michael Chen',
    comment: 'Fast delivery and excellent packaging. The coconut oil is perfect for my cooking needs. Highly recommend this store!',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: '3',
    name: 'Emma Davis',
    comment: 'Love the lavender essential oil! It helps me relax after a long day. Great quality and fair prices.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150'
  }
];