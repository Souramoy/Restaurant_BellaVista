import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  // Starters
  {
    id: 1,
    name: "Truffle Arancini",
    description: "Crispy risotto balls with black truffle and parmesan",
    price: "₹1162",
    image: "https://images.pexels.com/photos/4518841/pexels-photo-4518841.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "starters",
    isSpecial: true
  },
  {
    id: 2,
    name: "Burrata Caprese",
    description: "Fresh burrata with heirloom tomatoes and basil oil",
    price: "₹1328",
    image: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "starters"
  },
  {
    id: 3,
    name: "Pan Seared Scallops",
    description: "Sea scallops with cauliflower purée and pancetta",
    price: "₹1494",
    image: "https://images.pexels.com/photos/3659862/pexels-photo-3659862.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "starters"
  },

  // Mains
  {
    id: 4,
    name: "Wagyu Beef Tenderloin",
    description: "Premium wagyu with roasted vegetables and red wine jus",
    price: "₹3735",
    image: "https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "mains",
    isSpecial: true
  },
  {
    id: 5,
    name: "Lobster Risotto",
    description: "Creamy arborio rice with fresh lobster and herbs",
    price: "₹3154",
    image: "https://images.pexels.com/photos/4518844/pexels-photo-4518844.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "mains"
  },
  {
    id: 6,
    name: "Duck Confit",
    description: "Slow-cooked duck leg with cherry sauce and fondant potato",
    price: "₹2656",
    image: "https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "mains"
  },

  // Desserts
  {
    id: 7,
    name: "Chocolate Soufflé",
    description: "Warm dark chocolate soufflé with vanilla ice cream",
    price: "₹996",
    image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "desserts",
    isSpecial: true
  },
  {
    id: 8,
    name: "Tiramisu",
    description: "Classic Italian dessert with mascarpone and coffee",
    price: "₹830",
    image: "https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "desserts"
  },

  // Beverages
  {
    id: 9,
    name: "House Wine Selection",
    description: "Curated selection of red, white, and rosé wines",
    price: "₹664-1494",
    image: "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "beverages"
  },
  {
    id: 10,
    name: "Craft Cocktails",
    description: "Signature cocktails crafted by our mixologist",
    price: "₹996-1328",
    image: "https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "beverages"
  }
];