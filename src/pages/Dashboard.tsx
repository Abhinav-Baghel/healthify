import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Activity, Moon, Utensils, TrendingUp, Plus, Edit, Trash, AlertCircle } from 'lucide-react';

interface StepEntry {
  id: string;
  date: string;
  count: number;
}

interface SleepEntry {
  id: string;
  date: string;
  hours: number;
}

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

export const Dashboard = () => {
  const { currentUser, resendVerificationEmail } = useContext(AuthContext);
  const [steps, setSteps] = useState<StepEntry[]>([]);
  const [sleep, setSleep] = useState<SleepEntry[]>([]);
  const [meals, setMeals] = useState<MealEntry[]>([]);
  const [newStepCount, setNewStepCount] = useState<number>(0);
  const [newSleepHours, setNewSleepHours] = useState<number>(0);
  const [dailyNutrition, setDailyNutrition] = useState({
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0
  });
  const [verificationEmailSent, setVerificationEmailSent] = useState(false);
  
  const getCurrentDate = () => {
    const now = new Date();
    return now.toISOString().split('T')[0];
  };
  
  useEffect(() => {
    const loadUserData = () => {
      if (currentUser) {
        const storedSteps = localStorage.getItem(`healthify_steps_${currentUser.id}`);
        const storedSleep = localStorage.getItem(`healthify_sleep_${currentUser.id}`);
        const storedMeals = localStorage.getItem(`healthify_meals_${currentUser.id}`);
        
        if (storedSteps) setSteps(JSON.parse(storedSteps));
        if (storedSleep) setSleep(JSON.parse(storedSleep));
        if (storedMeals) setMeals(JSON.parse(storedMeals));
      }
    };
    
    loadUserData();
  }, [currentUser]);
  
  useEffect(() => {
    calculateDailyNutrition();
  }, [meals]);
  
  const calculateDailyNutrition = () => {
    const today = getCurrentDate();
    const todaysMeals = meals.filter(meal => meal.date === today);
    
    const dailyTotals = {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0
    };
    
    todaysMeals.forEach(meal => {
      dailyTotals.calories += meal.calories * meal.servings;
      dailyTotals.protein += meal.protein * meal.servings;
      dailyTotals.carbs += meal.carbs * meal.servings;
      dailyTotals.fat += meal.fat * meal.servings;
    });
    
    setDailyNutrition(dailyTotals);
  };
  
  const saveSteps = (updatedSteps: StepEntry[]) => {
    if (currentUser) {
      localStorage.setItem(`healthify_steps_${currentUser.id}`, JSON.stringify(updatedSteps));
      setSteps(updatedSteps);
    }
  };
  
  const saveSleep = (updatedSleep: SleepEntry[]) => {
    if (currentUser) {
      localStorage.setItem(`healthify_sleep_${currentUser.id}`, JSON.stringify(updatedSleep));
      setSleep(updatedSleep);
    }
  };
  
  const saveMeals = (updatedMeals: MealEntry[]) => {
    if (currentUser) {
      localStorage.setItem(`healthify_meals_${currentUser.id}`, JSON.stringify(updatedMeals));
      setMeals(updatedMeals);
    }
  };
  
  const handleAddSteps = () => {
    if (newStepCount <= 0) return;
    
    const today = getCurrentDate();
    const existingEntry = steps.find(entry => entry.date === today);
    
    if (existingEntry) {
      const updatedSteps = steps.map(entry => 
        entry.date === today 
          ? { ...entry, count: entry.count + newStepCount } 
          : entry
      );
      saveSteps(updatedSteps);
    } else {
      const newEntry: StepEntry = {
        id: Date.now().toString(),
        date: today,
        count: newStepCount
      };
      saveSteps([...steps, newEntry]);
    }
    
    setNewStepCount(0);
  };
  
  const handleAddSleep = () => {
    if (newSleepHours <= 0 || newSleepHours > 24) return;
    
    const today = getCurrentDate();
    const existingEntry = sleep.find(entry => entry.date === today);
    
    if (existingEntry) {
      const updatedSleep = sleep.map(entry => 
        entry.date === today 
          ? { ...entry, hours: newSleepHours } 
          : entry
      );
      saveSleep(updatedSleep);
    } else {
      const newEntry: SleepEntry = {
        id: Date.now().toString(),
        date: today,
        hours: newSleepHours
      };
      saveSleep([...sleep, newEntry]);
    }
    
    setNewSleepHours(0);
  };

  const handleResendVerification = async () => {
    const success = await resendVerificationEmail();
    if (success) {
      setVerificationEmailSent(true);
      setTimeout(() => setVerificationEmailSent(false), 5000);
    }
  };
  
  const getTodaySteps = () => {
    const today = getCurrentDate();
    const todayEntry = steps.find(entry => entry.date === today);
    return todayEntry ? todayEntry.count : 0;
  };
  
  const getTodaySleep = () => {
    const today = getCurrentDate();
    const todayEntry = sleep.find(entry => entry.date === today);
    return todayEntry ? todayEntry.hours : 0;
  };
  
  const getWeeklyAvgSteps = () => {
    const lastWeek = Array(7)
      .fill(0)
      .map((_, i) => {
        const date = new Date();
        date.setDate(date.getDate() - i);
        return date.toISOString().split('T')[0];
      });
    
    const weekEntries = steps.filter(entry => lastWeek.includes(entry.date));
    if (weekEntries.length === 0) return 0;
    
    const total = weekEntries.reduce((sum, entry) => sum + entry.count, 0);
    return Math.round(total / weekEntries.length);
  };
  
  const getWeeklyAvgSleep = () => {
    const lastWeek = Array(7)
      .fill(0)
      .map((_, i) => {
        const date = new Date();
        date.setDate(date.getDate() - i);
        return date.toISOString().split('T')[0];
      });
    
    const weekEntries = sleep.filter(entry => lastWeek.includes(entry.date));
    if (weekEntries.length === 0) return 0;
    
    const total = weekEntries.reduce((sum, entry) => sum + entry.hours, 0);
    return (total / weekEntries.length).toFixed(1);
  };
  
  const getTodaysMeals = () => {
    const today = getCurrentDate();
    return meals.filter(meal => meal.date === today);
  };
  
  const deleteMeal = (id: string) => {
    const updatedMeals = meals.filter(meal => meal.id !== id);
    saveMeals(updatedMeals);
  };
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {currentUser && !currentUser.email_verified && (
          <div className="mb-8 bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 text-yellow-400 mr-2" />
              <div>
                <p className="text-sm text-yellow-700">
                  Please verify your email address to access all features.
                  {!verificationEmailSent ? (
                    <button
                      onClick={handleResendVerification}
                      className="ml-2 text-yellow-700 underline hover:text-yellow-800"
                    >
                      Resend verification email
                    </button>
                  ) : (
                    <span className="ml-2 text-green-600">
                      Verification email sent!
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome, {currentUser?.name}!</h1>
          <p className="text-gray-600 mt-2">Here's your health summary for today</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Steps Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="p-3 bg-green-100 rounded-full">
                    <Activity className="h-6 w-6 text-green-600" />
                  </div>
                  <h2 className="ml-3 text-xl font-semibold text-gray-900">Steps</h2>
                </div>
                <div className="text-sm font-medium text-gray-500">
                  {formatDate(getCurrentDate())}
                </div>
              </div>
              
              <div className="mb-6">
                <div className="text-3xl font-bold text-gray-900">{getTodaySteps()}</div>
                <div className="text-sm font-medium text-gray-500 mt-1">
                  <span className="flex items-center">
                    <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
                    Avg: {getWeeklyAvgSteps()} steps last week
                  </span>
                </div>
              </div>
              
              <div className="flex items-center">
                <input
                  type="number"
                  min="0"
                  value={newStepCount || ''}
                  onChange={(e) => setNewStepCount(parseInt(e.target.value) || 0)}
                  placeholder="Add steps"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm mr-3 py-2 px-3 border"
                />
                <button
                  type="button"
                  onClick={handleAddSteps}
                  className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Sleep Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Moon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="ml-3 text-xl font-semibold text-gray-900">Sleep</h2>
                </div>
                <div className="text-sm font-medium text-gray-500">
                  {formatDate(getCurrentDate())}
                </div>
              </div>
              
              <div className="mb-6">
                <div className="text-3xl font-bold text-gray-900">{getTodaySleep()} hrs</div>
                <div className="text-sm font-medium text-gray-500 mt-1">
                  <span className="flex items-center">
                    <TrendingUp className="h-4 w-4 mr-1 text-blue-500" />
                    Avg: {getWeeklyAvgSleep()} hrs last week
                  </span>
                </div>
              </div>
              
              <div className="flex items-center">
                <input
                  type="number"
                  min="0"
                  max="24"
                  step="0.5"
                  value={newSleepHours || ''}
                  onChange={(e) => setNewSleepHours(parseFloat(e.target.value) || 0)}
                  placeholder="Add sleep hours"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm mr-3 py-2 px-3 border"
                />
                <button
                  type="button"
                  onClick={handleAddSleep}
                  className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Nutrition Summary Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="p-3 bg-orange-100 rounded-full">
                    <Utensils className="h-6 w-6 text-orange-600" />
                  </div>
                  <h2 className="ml-3 text-xl font-semibold text-gray-900">Nutrition</h2>
                </div>
                <div className="text-sm font-medium text-gray-500">
                  {formatDate(getCurrentDate())}
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Calories</span>
                  <span className="font-semibold text-gray-900">{dailyNutrition.calories} kcal</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Protein</span>
                  <span className="font-semibold text-gray-900">{dailyNutrition.protein}g</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Carbs</span>
                  <span className="font-semibold text-gray-900">{dailyNutrition.carbs}g</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Fat</span>
                  <span className="font-semibold text-gray-900">{dailyNutrition.fat}g</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Today's Meals */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="px-6 py-5 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Today's Meals</h3>
          </div>
          <div className="px-6 py-4">
            {getTodaysMeals().length > 0 ? (
              <div className="divide-y divide-gray-200">
                {getTodaysMeals().map((meal) => (
                  <div key={meal.id} className="py-4 flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{meal.foodName}</p>
                      <p className="text-sm text-gray-500 capitalize">
                        {meal.mealType} • {meal.servings} serving{meal.servings > 1 ? 's' : ''}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="text-right mr-4">
                        <p className="text-sm font-medium text-gray-900">{meal.calories * meal.servings} kcal</p>
                        <p className="text-xs text-gray-500">
                          P: {Math.round(meal.protein * meal.servings)}g • 
                          C: {Math.round(meal.carbs * meal.servings)}g • 
                          F: {Math.round(meal.fat * meal.servings)}g
                        </p>
                      </div>
                      <button
                        onClick={() => deleteMeal(meal.id)}
                        className="p-1 text-red-600 hover:text-red-900"
                      >
                        <Trash className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-6 text-center">
                <p className="text-gray-500">No meals recorded for today</p>
                <p className="mt-1 text-sm text-gray-400">Visit the Food Database to add meals</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};