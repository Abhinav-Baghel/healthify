export interface FoodItem {
  id: string;
  name: string;
  category: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  servingSize: string;
  image?: string;
  description?: string;
}

export const indianFoods: FoodItem[] = [
  {
    id: "1",
    name: "Chapati",
    category: "Bread",
    calories: 120,
    protein: 3,
    carbs: 20,
    fat: 3.5,
    fiber: 2,
    servingSize: "1 medium (30g)",
    image: "https://images.pexels.com/photos/9797029/pexels-photo-9797029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Unleavened flatbread made from whole wheat flour"
  },
  {
    id: "2",
    name: "Plain Rice",
    category: "Grains",
    calories: 130,
    protein: 2.7,
    carbs: 28,
    fat: 0.3,
    fiber: 0.4,
    servingSize: "100g cooked",
    image: "https://images.pexels.com/photos/7469499/pexels-photo-7469499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Steamed white rice"
  },
  {
    id: "3",
    name: "Dal Tadka",
    category: "Lentils",
    calories: 150,
    protein: 9,
    carbs: 20,
    fat: 4,
    fiber: 5,
    servingSize: "1 cup (200g)",
    image: "https://images.pexels.com/photos/8472863/pexels-photo-8472863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Tempered yellow lentils with spices"
  },
  {
    id: "4",
    name: "Paneer Tikka",
    category: "Appetizers",
    calories: 200,
    protein: 14,
    carbs: 6,
    fat: 13,
    fiber: 1,
    servingSize: "100g",
    image: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Marinated and grilled cottage cheese with spices"
  },
  {
    id: "5",
    name: "Butter Chicken",
    category: "Non-vegetarian",
    calories: 320,
    protein: 28,
    carbs: 10,
    fat: 18,
    fiber: 2,
    servingSize: "1 cup (200g)",
    image: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Chicken in a creamy tomato sauce"
  },
  {
    id: "6",
    name: "Palak Paneer",
    category: "Vegetarian",
    calories: 250,
    protein: 15,
    carbs: 12,
    fat: 16,
    fiber: 5,
    servingSize: "1 cup (200g)",
    image: "https://images.pexels.com/photos/8472915/pexels-photo-8472915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Cottage cheese in a spinach gravy"
  },
  {
    id: "7",
    name: "Masala Dosa",
    category: "Breakfast",
    calories: 280,
    protein: 4,
    carbs: 45,
    fat: 8,
    fiber: 2,
    servingSize: "1 dosa with potato filling",
    image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Rice and lentil crepe filled with spiced potatoes"
  },
  {
    id: "8",
    name: "Samosa",
    category: "Snacks",
    calories: 250,
    protein: 5,
    carbs: 24,
    fat: 14,
    fiber: 2,
    servingSize: "1 medium (70g)",
    image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Fried pastry with a savory filling"
  },
  {
    id: "9",
    name: "Aloo Gobi",
    category: "Vegetarian",
    calories: 180,
    protein: 5,
    carbs: 30,
    fat: 6,
    fiber: 6,
    servingSize: "1 cup (200g)",
    image: "https://images.pexels.com/photos/8510882/pexels-photo-8510882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Potatoes and cauliflower cooked with spices"
  },
  {
    id: "10",
    name: "Chicken Biryani",
    category: "Non-vegetarian",
    calories: 400,
    protein: 25,
    carbs: 40,
    fat: 15,
    fiber: 2,
    servingSize: "1 cup (200g)",
    image: "https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Fragrant rice dish with chicken, spices, and herbs"
  },
  {
    id: "11",
    name: "Idli",
    category: "Breakfast",
    calories: 80,
    protein: 2,
    carbs: 17,
    fat: 0.2,
    fiber: 0.5,
    servingSize: "2 medium (80g)",
    image: "https://images.pexels.com/photos/4331490/pexels-photo-4331490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Steamed rice and lentil cakes"
  },
  {
    id: "12",
    name: "Gulab Jamun",
    category: "Desserts",
    calories: 150,
    protein: 2,
    carbs: 25,
    fat: 5,
    fiber: 0,
    servingSize: "2 pieces (50g)",
    image: "https://images.pexels.com/photos/14679618/pexels-photo-14679618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Fried milk solids soaked in sugar syrup"
  },
  {
    id: "13",
    name: "Raita",
    category: "Side Dishes",
    calories: 80,
    protein: 3,
    carbs: 6,
    fat: 5,
    fiber: 0.5,
    servingSize: "1/2 cup (100g)",
    image: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Yogurt with vegetables and spices"
  },
  {
    id: "14",
    name: "Tandoori Chicken",
    category: "Non-vegetarian",
    calories: 280,
    protein: 30,
    carbs: 2,
    fat: 16,
    fiber: 0,
    servingSize: "2 pieces (150g)",
    image: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Marinated chicken roasted in a clay oven"
  },
  {
    id: "15",
    name: "Chole Bhature",
    category: "Main Course",
    calories: 450,
    protein: 14,
    carbs: 60,
    fat: 18,
    fiber: 10,
    servingSize: "1 plate (1 bhatura + 1 cup chole)",
    image: "https://images.pexels.com/photos/8472863/pexels-photo-8472863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Spicy chickpeas served with fried bread"
  },
  {
    id: "16",
    name: "Upma",
    category: "Breakfast",
    calories: 180,
    protein: 4,
    carbs: 30,
    fat: 5,
    fiber: 2,
    servingSize: "1 cup (200g)",
    image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Savory semolina porridge with vegetables"
  },
  {
    id: "17",
    name: "Methi Paratha",
    category: "Bread",
    calories: 180,
    protein: 6,
    carbs: 24,
    fat: 7,
    fiber: 4,
    servingSize: "1.5 medium (60g)",
    image: "https://images.pexels.com/photos/9797029/pexels-photo-9797029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Whole wheat flatbread with fenugreek leaves"
  },
  {
    id: "18",
    name: "Rajma",
    category: "Lentils",
    calories: 200,
    protein: 13,
    carbs: 27,
    fat: 6,
    fiber: 11,
    servingSize: "1 cup (200g)",
    image: "https://images.pexels.com/photos/8472863/pexels-photo-8472863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Kidney beans in a thick gravy"
  },
  {
    id: "19",
    name: "Malai Kofta",
    category: "Vegetarian",
    calories: 350,
    protein: 8,
    carbs: 20,
    fat: 24,
    fiber: 3,
    servingSize: "1 cup with 4 koftas (200g)",
    image: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Vegetable and cheese dumplings in a creamy sauce"
  },
  {
    id: "20",
    name: "Bhindi Masala",
    category: "Vegetarian",
    calories: 120,
    protein: 4,
    carbs: 14,
    fat: 7,
    fiber: 5,
    servingSize: "1 cup (200g)",
    image: "https://images.pexels.com/photos/8510882/pexels-photo-8510882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Okra cooked with spices and onions"
  },
  // Adding more items to reach 50+ as required
  {
    id: "21",
    name: "Rasam",
    category: "Soups",
    calories: 60,
    protein: 1,
    carbs: 12,
    fat: 1,
    fiber: 1,
    servingSize: "1 cup (200ml)",
    description: "Tangy and spicy South Indian soup"
  },
  {
    id: "22",
    name: "Coconut Chutney",
    category: "Side Dishes",
    calories: 90,
    protein: 2,
    carbs: 4,
    fat: 8,
    fiber: 2,
    servingSize: "2 tbsp (30g)",
    description: "Ground coconut condiment with spices"
  },
  {
    id: "23",
    name: "Khichdi",
    category: "Main Course",
    calories: 200,
    protein: 7,
    carbs: 40,
    fat: 3,
    fiber: 3,
    servingSize: "1 cup (200g)",
    description: "One-pot dish made with rice and lentils"
  },
  {
    id: "24",
    name: "Jalebi",
    category: "Desserts",
    calories: 150,
    protein: 2,
    carbs: 30,
    fat: 4,
    fiber: 0,
    servingSize: "2 pieces (50g)",
    description: "Deep-fried pretzel shapes soaked in sugar syrup"
  },
  {
    id: "25",
    name: "Poha",
    category: "Breakfast",
    calories: 170,
    protein: 3,
    carbs: 30,
    fat: 5,
    fiber: 1,
    servingSize: "1 cup (150g)",
    description: "Flattened rice with spices and vegetables"
  },
  {
    id: "26",
    name: "Sarson Ka Saag",
    category: "Vegetarian",
    calories: 150,
    protein: 5,
    carbs: 15,
    fat: 8,
    fiber: 6,
    servingSize: "1 cup (200g)",
    description: "Mustard greens cooked with spices"
  },
  {
    id: "27",
    name: "Makki Di Roti",
    category: "Bread",
    calories: 150,
    protein: 3,
    carbs: 28,
    fat: 3,
    fiber: 2,
    servingSize: "1 medium (50g)",
    description: "Cornmeal flatbread"
  },
  {
    id: "28",
    name: "Dhokla",
    category: "Snacks",
    calories: 160,
    protein: 5,
    carbs: 25,
    fat: 4,
    fiber: 2,
    servingSize: "2 pieces (100g)",
    description: "Steamed fermented rice and chickpea flour cake"
  },
  {
    id: "29",
    name: "Chicken Curry",
    category: "Non-vegetarian",
    calories: 280,
    protein: 25,
    carbs: 8,
    fat: 16,
    fiber: 2,
    servingSize: "1 cup (200g)",
    description: "Chicken cooked in a spiced gravy"
  },
  {
    id: "30",
    name: "Matar Paneer",
    category: "Vegetarian",
    calories: 220,
    protein: 14,
    carbs: 12,
    fat: 14,
    fiber: 4,
    servingSize: "1 cup (200g)",
    description: "Cottage cheese and peas in a tomato-based gravy"
  },
  {
    id: "31",
    name: "Pani Puri",
    category: "Snacks",
    calories: 200,
    protein: 3,
    carbs: 40,
    fat: 3,
    fiber: 1,
    servingSize: "6 pieces",
    description: "Hollow crisp fried balls filled with flavored water and spicy mixture"
  },
  {
    id: "32",
    name: "Vada Pav",
    category: "Snacks",
    calories: 300,
    protein: 8,
    carbs: 40,
    fat: 12,
    fiber: 2,
    servingSize: "1 piece",
    description: "Spicy potato fritter in a bun"
  },
  {
    id: "33",
    name: "Rava Upma",
    category: "Breakfast",
    calories: 190,
    protein: 4,
    carbs: 36,
    fat: 4,
    fiber: 2,
    servingSize: "1 cup (200g)",
    description: "Semolina porridge with vegetables and spices"
  },
  {
    id: "34",
    name: "Paneer Bhurji",
    category: "Vegetarian",
    calories: 270,
    protein: 18,
    carbs: 8,
    fat: 18,
    fiber: 2,
    servingSize: "1 cup (200g)",
    description: "Scrambled cottage cheese with spices"
  },
  {
    id: "35",
    name: "Fish Curry",
    category: "Non-vegetarian",
    calories: 220,
    protein: 25,
    carbs: 6,
    fat: 10,
    fiber: 1,
    servingSize: "1 cup (200g)",
    description: "Fish cooked in a spiced gravy"
  },
  {
    id: "36",
    name: "Vegetable Pakoras",
    category: "Snacks",
    calories: 180,
    protein: 4,
    carbs: 16,
    fat: 12,
    fiber: 2,
    servingSize: "4 pieces (100g)",
    description: "Deep-fried vegetable fritters"
  },
  {
    id: "37",
    name: "Pav Bhaji",
    category: "Main Course",
    calories: 350,
    protein: 7,
    carbs: 50,
    fat: 14,
    fiber: 5,
    servingSize: "1 plate (1 cup bhaji + 2 pavs)",
    description: "Mashed vegetable curry served with buttered bread rolls"
  },
  {
    id: "38",
    name: "Shrikhand",
    category: "Desserts",
    calories: 280,
    protein: 8,
    carbs: 35,
    fat: 12,
    fiber: 0,
    servingSize: "1 cup (200g)",
    description: "Sweetened strained yogurt flavored with saffron and cardamom"
  },
  {
    id: "39",
    name: "Aloo Paratha",
    category: "Bread",
    calories: 330,
    protein: 7,
    carbs: 50,
    fat: 14,
    fiber: 4,
    servingSize: "1 medium (100g)",
    description: "Wheat flatbread stuffed with spiced potatoes"
  },
  {
    id: "40",
    name: "Kofta Curry",
    category: "Vegetarian",
    calories: 330,
    protein: 8,
    carbs: 17,
    fat: 25,
    fiber: 3,
    servingSize: "1 cup with 4 koftas (200g)",
    description: "Vegetable balls in a spiced gravy"
  },
  {
    id: "41",
    name: "Rogan Josh",
    category: "Non-vegetarian",
    calories: 310,
    protein: 28,
    carbs: 5,
    fat: 20,
    fiber: 1,
    servingSize: "1 cup (200g)",
    description: "Aromatic lamb curry with Kashmiri spices"
  },
  {
    id: "42",
    name: "Baingan Bharta",
    category: "Vegetarian",
    calories: 140,
    protein: 3,
    carbs: 12,
    fat: 9,
    fiber: 5,
    servingSize: "1 cup (200g)",
    description: "Mashed roasted eggplant with spices"
  },
  {
    id: "43",
    name: "Kadhi",
    category: "Soups",
    calories: 180,
    protein: 6,
    carbs: 15,
    fat: 10,
    fiber: 1,
    servingSize: "1 cup (200ml)",
    description: "Yogurt-based curry thickened with chickpea flour"
  },
  {
    id: "44",
    name: "Pakora Kadhi",
    category: "Main Course",
    calories: 250,
    protein: 8,
    carbs: 20,
    fat: 15,
    fiber: 2,
    servingSize: "1 cup (200ml)",
    description: "Yogurt-based curry with gram flour fritters"
  },
  {
    id: "45",
    name: "Ras Malai",
    category: "Desserts",
    calories: 240,
    protein: 10,
    carbs: 25,
    fat: 12,
    fiber: 0,
    servingSize: "2 pieces (100g)",
    description: "Soft cheese patties soaked in sweetened, thickened milk"
  },
  {
    id: "46",
    name: "Vegetable Biryani",
    category: "Main Course",
    calories: 300,
    protein: 8,
    carbs: 45,
    fat: 10,
    fiber: 4,
    servingSize: "1 cup (200g)",
    description: "Fragrant rice dish with mixed vegetables and spices"
  },
  {
    id: "47",
    name: "Mysore Pak",
    category: "Desserts",
    calories: 220,
    protein: 3,
    carbs: 20,
    fat: 14,
    fiber: 0,
    servingSize: "2 pieces (50g)",
    description: "Sweet made from gram flour, ghee, and sugar"
  },
  {
    id: "48",
    name: "Chana Masala",
    category: "Vegetarian",
    calories: 220,
    protein: 11,
    carbs: 30,
    fat: 8,
    fiber: 8,
    servingSize: "1 cup (200g)",
    description: "Spicy chickpea curry"
  },
  {
    id: "49",
    name: "Medu Vada",
    category: "Breakfast",
    calories: 190,
    protein: 7,
    carbs: 20,
    fat: 10,
    fiber: 3,
    servingSize: "2 pieces (100g)",
    description: "Savory fried lentil donuts"
  },
  {
    id: "50",
    name: "Bhatura",
    category: "Bread",
    calories: 180,
    protein: 4,
    carbs: 28,
    fat: 7,
    fiber: 1,
    servingSize: "1 piece (50g)",
    description: "Deep-fried leavened bread"
  },
  {
    id: "51",
    name: "Lassi",
    category: "Beverages",
    calories: 150,
    protein: 5,
    carbs: 25,
    fat: 4,
    fiber: 0,
    servingSize: "1 glass (250ml)",
    description: "Yogurt-based sweet or savory drink"
  },
  {
    id: "52",
    name: "Vegetable Pulao",
    category: "Main Course",
    calories: 250,
    protein: 6,
    carbs: 40,
    fat: 8,
    fiber: 3,
    servingSize: "1 cup (200g)",
    description: "Rice cooked with vegetables and mild spices"
  }
];

// Function to get food items by category
export const getFoodsByCategory = (category: string): FoodItem[] => {
  return indianFoods.filter(food => food.category === category);
};

// Function to search food items
export const searchFoods = (query: string): FoodItem[] => {
  const lowercaseQuery = query.toLowerCase();
  return indianFoods.filter(food => 
    food.name.toLowerCase().includes(lowercaseQuery) || 
    food.category.toLowerCase().includes(lowercaseQuery)
  );
};

// Get all unique categories
export const getAllCategories = (): string[] => {
  const categories = new Set(indianFoods.map(food => food.category));
  return Array.from(categories);
};