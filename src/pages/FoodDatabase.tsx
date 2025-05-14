import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { 
  indianFoods, 
  FoodItem, 
  getAllCategories, 
  searchFoods, 
  getFoodsByCategory 
} from '../data/indianFoods';
import { Search, Filter, X, Plus, ChevronDown, ChevronUp } from 'lucide-react';

interface MealEntry {
  id: string;
  foodId: string;
  foodName: string;
  date: string;
  mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  servings: number;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export const FoodDatabase = () => {
  const { currentUser } = useContext(AuthContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [allCategories, setAllCategories] = useState<string[]>([]);
  const [displayedFoods, setDisplayedFoods] = useState<FoodItem[]>([]);
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
  const [servings, setServings] = useState(1);
  const [mealType, setMealType] = useState<'breakfast' | 'lunch' | 'dinner' | 'snack'>('lunch');
  const [isAddingMeal, setIsAddingMeal] = useState(false);
  const [meals, setMeals] = useState<MealEntry[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [expandedFoodId, setExpandedFoodId] = useState<string | null>(null);
  
  // Get current date in YYYY-MM-DD format
  const getCurrentDate = () => {
    const now = new Date();
    return now.toISOString().split('T')[0];
  };
  
  useEffect(() => {
    // Load categories and set initial displayed foods
    setAllCategories(getAllCategories());
    setDisplayedFoods(indianFoods);
    
    // Load user's meals from localStorage
    if (currentUser) {
      const storedMeals = localStorage.getItem(`healthify_meals_${currentUser.id}`);
      if (storedMeals) {
        setMeals(JSON.parse(storedMeals));
      }
    }
  }, [currentUser]);
  
  useEffect(() => {
    // Filter foods based on search query and selected category
    if (searchQuery.trim() !== '') {
      let filtered = searchFoods(searchQuery);
      if (selectedCategory) {
        filtered = filtered.filter(food => food.category === selectedCategory);
      }
      setDisplayedFoods(filtered);
    } else if (selectedCategory) {
      setDisplayedFoods(getFoodsByCategory(selectedCategory));
    } else {
      setDisplayedFoods(indianFoods);
    }
  }, [searchQuery, selectedCategory]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already handled by the useEffect
  };
  
  const toggleFoodDetails = (foodId: string) => {
    if (expandedFoodId === foodId) {
      setExpandedFoodId(null);
    } else {
      setExpandedFoodId(foodId);
    }
  };
  
  const openAddMealModal = (food: FoodItem) => {
    setSelectedFood(food);
    setServings(1);
    setIsAddingMeal(true);
  };
  
  const closeAddMealModal = () => {
    setSelectedFood(null);
    setIsAddingMeal(false);
  };
  
  const handleAddMeal = () => {
    if (!selectedFood || !currentUser) return;
    
    const newMeal: MealEntry = {
      id: Date.now().toString(),
      foodId: selectedFood.id,
      foodName: selectedFood.name,
      date: getCurrentDate(),
      mealType,
      servings,
      calories: selectedFood.calories,
      protein: selectedFood.protein,
      carbs: selectedFood.carbs,
      fat: selectedFood.fat
    };
    
    const updatedMeals = [...meals, newMeal];
    setMeals(updatedMeals);
    localStorage.setItem(`healthify_meals_${currentUser.id}`, JSON.stringify(updatedMeals));
    
    closeAddMealModal();
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Indian Food Database</h1>
          <p className="text-gray-600 mt-2">Find and track your Indian meals with accurate nutrition data</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="px-6 py-5 border-b border-gray-200">
            <form onSubmit={handleSearch} className="flex items-center">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for Indian foods..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
              </div>
              <button
                type="button"
                onClick={() => setShowFilters(!showFilters)}
                className="ml-4 inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filter
                {showFilters ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />}
              </button>
            </form>
          </div>
          
          {showFilters && (
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <div className="flex flex-wrap items-center">
                <span className="text-sm font-medium text-gray-700 mr-3">Category:</span>
                
                <button
                  type="button"
                  onClick={() => setSelectedCategory('')}
                  className={`m-1 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    selectedCategory === '' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  All
                </button>
                
                {allCategories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`m-1 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      selectedCategory === category 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          <div className="px-0 py-0 divide-y divide-gray-200">
            {displayedFoods.length > 0 ? (
              displayedFoods.map((food) => (
                <div key={food.id} className="px-6 py-4 hover:bg-gray-50">
                  <div className="flex justify-between items-center">
                    <div onClick={() => toggleFoodDetails(food.id)} className="flex-grow cursor-pointer">
                      <div className="flex justify-between">
                        <h3 className="text-lg font-medium text-gray-900">{food.name}</h3>
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {food.calories} kcal
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        {food.servingSize} • {food.category}
                      </p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <button
                        onClick={() => openAddMealModal(food)}
                        className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      >
                        <Plus className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  
                  {expandedFoodId === food.id && (
                    <div className="mt-4 flex flex-col md:flex-row">
                      {food.image && (
                        <div className="md:w-1/4 mb-4 md:mb-0 md:mr-4">
                          <img
                            src={food.image}
                            alt={food.name}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                        </div>
                      )}
                      <div className="md:w-3/4">
                        {food.description && (
                          <p className="text-sm text-gray-600 mb-3">{food.description}</p>
                        )}
                        <div className="grid grid-cols-4 gap-2">
                          <div className="bg-gray-100 p-2 rounded">
                            <p className="text-xs text-gray-500">Calories</p>
                            <p className="text-sm font-medium">{food.calories} kcal</p>
                          </div>
                          <div className="bg-gray-100 p-2 rounded">
                            <p className="text-xs text-gray-500">Protein</p>
                            <p className="text-sm font-medium">{food.protein}g</p>
                          </div>
                          <div className="bg-gray-100 p-2 rounded">
                            <p className="text-xs text-gray-500">Carbs</p>
                            <p className="text-sm font-medium">{food.carbs}g</p>
                          </div>
                          <div className="bg-gray-100 p-2 rounded">
                            <p className="text-xs text-gray-500">Fat</p>
                            <p className="text-sm font-medium">{food.fat}g</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="px-6 py-10 text-center">
                <p className="text-gray-500">No foods found matching your search</p>
                <p className="mt-1 text-sm text-gray-400">Try a different search term or category</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Add Meal Modal */}
      {isAddingMeal && selectedFood && (
        <div className="fixed inset-0 overflow-y-auto z-50">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Add {selectedFood.name} to your meal log
                      </h3>
                      <button
                        type="button"
                        onClick={closeAddMealModal}
                        className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                      >
                        <X className="h-6 w-6" />
                      </button>
                    </div>
                    
                    <div className="mt-4">
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Meal Type
                        </label>
                        <select
                          value={mealType}
                          onChange={(e) => setMealType(e.target.value as any)}
                          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                        >
                          <option value="breakfast">Breakfast</option>
                          <option value="lunch">Lunch</option>
                          <option value="dinner">Dinner</option>
                          <option value="snack">Snack</option>
                        </select>
                      </div>
                      
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Number of Servings
                        </label>
                        <div className="flex rounded-md shadow-sm">
                          <input
                            type="number"
                            min="0.25"
                            step="0.25"
                            value={servings}
                            onChange={(e) => setServings(parseFloat(e.target.value) || 1)}
                            className="flex-1 block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500 sm:text-sm py-2 px-3 border"
                          />
                        </div>
                        <p className="mt-1 text-sm text-gray-500">Serving size: {selectedFood.servingSize}</p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-md mb-4">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Nutrition per serving</h4>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                          <div>
                            <p className="text-sm text-gray-500">Calories</p>
                            <p className="text-sm font-medium">{selectedFood.calories} kcal</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Protein</p>
                            <p className="text-sm font-medium">{selectedFood.protein}g</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Carbs</p>
                            <p className="text-sm font-medium">{selectedFood.carbs}g</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Fat</p>
                            <p className="text-sm font-medium">{selectedFood.fat}g</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-md">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Total nutrition for {servings} serving(s)</h4>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                          <div>
                            <p className="text-sm text-gray-500">Calories</p>
                            <p className="text-sm font-medium">{Math.round(selectedFood.calories * servings)} kcal</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Protein</p>
                            <p className="text-sm font-medium">{(selectedFood.protein * servings).toFixed(1)}g</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Carbs</p>
                            <p className="text-sm font-medium">{(selectedFood.carbs * servings).toFixed(1)}g</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Fat</p>
                            <p className="text-sm font-medium">{(selectedFood.fat * servings).toFixed(1)}g</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  onClick={handleAddMeal}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Add to Today's Log
                </button>
                <button
                  type="button"
                  onClick={closeAddMealModal}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};