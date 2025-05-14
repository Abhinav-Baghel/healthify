import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Save, User, ChevronRight } from 'lucide-react';

export const Profile = () => {
  const { currentUser, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [age, setAge] = useState<number | ''>('');
  const [weight, setWeight] = useState<number | ''>('');
  const [height, setHeight] = useState<number | ''>('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [bmiCategory, setBmiCategory] = useState('');
  const [weightUnit, setWeightUnit] = useState<'kg' | 'lb'>('kg');
  const [heightUnit, setHeightUnit] = useState<'cm' | 'ft'>('cm');
  const [isSaving, setIsSaving] = useState(false);
  const [savedMessage, setSavedMessage] = useState('');
  
  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name || '');
      setAge(currentUser.age || '');
      setWeight(currentUser.weight || '');
      setHeight(currentUser.height || '');
      
      // Calculate BMI if weight and height are available
      if (currentUser.weight && currentUser.height) {
        calculateBMI(currentUser.weight, currentUser.height);
      }
    }
  }, [currentUser]);
  
  const calculateBMI = (weightVal: number, heightVal: number) => {
    // Convert height from cm to meters
    const heightInMeters = heightVal / 100;
    
    // Calculate BMI: weight(kg) / height(m)^2
    const bmiValue = weightVal / (heightInMeters * heightInMeters);
    setBmi(parseFloat(bmiValue.toFixed(1)));
    
    // Determine BMI category
    if (bmiValue < 18.5) {
      setBmiCategory('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setBmiCategory('Normal weight');
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setBmiCategory('Overweight');
    } else {
      setBmiCategory('Obesity');
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      alert('Name is required');
      return;
    }
    
    setIsSaving(true);
    
    // Convert values to numbers if they are provided
    const userData = {
      name,
      age: age !== '' ? Number(age) : undefined,
      weight: weight !== '' ? Number(weight) : undefined,
      height: height !== '' ? Number(height) : undefined
    };
    
    updateUserProfile(userData);
    
    // Recalculate BMI if weight and height are provided
    if (weight !== '' && height !== '') {
      calculateBMI(Number(weight), Number(height));
    }
    
    // Show saved message
    setSavedMessage('Profile updated successfully!');
    setTimeout(() => {
      setSavedMessage('');
    }, 3000);
    
    setIsSaving(false);
  };
  
  const handleWeightChange = (value: string) => {
    if (value === '' || !isNaN(Number(value))) {
      const numValue = value === '' ? '' : parseFloat(value);
      
      // Convert to kg if needed
      let weightInKg: number | '' = numValue;
      if (weightUnit === 'lb' && numValue !== '') {
        weightInKg = parseFloat((numValue * 0.453592).toFixed(1));
      }
      
      setWeight(numValue);
      
      // Update BMI if height is also available
      if (height !== '' && weightInKg !== '') {
        calculateBMI(weightInKg, Number(height));
      }
    }
  };
  
  const handleHeightChange = (value: string) => {
    if (value === '' || !isNaN(Number(value))) {
      const numValue = value === '' ? '' : parseFloat(value);
      
      // Convert to cm if needed
      let heightInCm: number | '' = numValue;
      if (heightUnit === 'ft' && numValue !== '') {
        heightInCm = parseFloat((numValue * 30.48).toFixed(1));
      }
      
      setHeight(numValue);
      
      // Update BMI if weight is also available
      if (weight !== '' && heightInCm !== '') {
        calculateBMI(Number(weight), heightInCm);
      }
    }
  };
  
  const toggleWeightUnit = () => {
    if (weightUnit === 'kg') {
      setWeightUnit('lb');
      if (weight !== '') {
        // Convert kg to lb
        setWeight(parseFloat((Number(weight) * 2.20462).toFixed(1)));
      }
    } else {
      setWeightUnit('kg');
      if (weight !== '') {
        // Convert lb to kg
        setWeight(parseFloat((Number(weight) * 0.453592).toFixed(1)));
      }
    }
  };
  
  const toggleHeightUnit = () => {
    if (heightUnit === 'cm') {
      setHeightUnit('ft');
      if (height !== '') {
        // Convert cm to ft
        setHeight(parseFloat((Number(height) / 30.48).toFixed(1)));
      }
    } else {
      setHeightUnit('cm');
      if (height !== '') {
        // Convert ft to cm
        setHeight(parseFloat((Number(height) * 30.48).toFixed(1)));
      }
    }
  };
  
  const getBmiColorClass = () => {
    if (!bmi) return 'bg-gray-100 text-gray-800';
    
    if (bmi < 18.5) return 'bg-blue-100 text-blue-800';
    if (bmi >= 18.5 && bmi < 25) return 'bg-green-100 text-green-800';
    if (bmi >= 25 && bmi < 30) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Your Profile</h1>
          <p className="text-gray-600 mt-2">Manage your personal information and track your health metrics</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Information */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Personal Information</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="p-6">
                {savedMessage && (
                  <div className="mb-4 bg-green-50 border-l-4 border-green-500 p-4 text-green-700">
                    {savedMessage}
                  </div>
                )}
                
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm py-2 px-3 border"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={currentUser?.email || ''}
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm py-2 px-3 border bg-gray-50"
                    disabled
                  />
                  <p className="mt-1 text-xs text-gray-500">Email cannot be changed</p>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                    Age
                  </label>
                  <input
                    type="number"
                    id="age"
                    min="1"
                    max="120"
                    value={age}
                    onChange={(e) => setAge(e.target.value === '' ? '' : parseInt(e.target.value))}
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm py-2 px-3 border"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
                    Weight
                  </label>
                  <div className="flex rounded-md shadow-sm">
                    <input
                      type="number"
                      id="weight"
                      min="1"
                      step="0.1"
                      value={weight}
                      onChange={(e) => handleWeightChange(e.target.value)}
                      className="flex-1 block w-full rounded-none rounded-l-md border-gray-300 focus:ring-green-500 focus:border-green-500 sm:text-sm py-2 px-3 border"
                    />
                    <button
                      type="button"
                      onClick={toggleWeightUnit}
                      className="inline-flex items-center px-3 py-2 border border-l-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm rounded-r-md"
                    >
                      {weightUnit}
                    </button>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1">
                    Height
                  </label>
                  <div className="flex rounded-md shadow-sm">
                    <input
                      type="number"
                      id="height"
                      min="1"
                      step="0.1"
                      value={height}
                      onChange={(e) => handleHeightChange(e.target.value)}
                      className="flex-1 block w-full rounded-none rounded-l-md border-gray-300 focus:ring-green-500 focus:border-green-500 sm:text-sm py-2 px-3 border"
                    />
                    <button
                      type="button"
                      onClick={toggleHeightUnit}
                      className="inline-flex items-center px-3 py-2 border border-l-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm rounded-r-md"
                    >
                      {heightUnit}
                    </button>
                  </div>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSaving}
                    className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${isSaving ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSaving ? (
                      'Saving...'
                    ) : (
                      <>
                        <Save className="mr-2 h-4 w-4" />
                        Save Changes
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          {/* BMI Card */}
          <div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
              <div className="px-6 py-5 border-b border-gray-200 flex items-center">
                <User className="h-5 w-5 text-gray-400 mr-2" />
                <h2 className="text-lg font-medium text-gray-900">BMI Calculator</h2>
              </div>
              
              <div className="p-6">
                {bmi ? (
                  <div className="text-center">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getBmiColorClass()}`}>
                      BMI: {bmi}
                    </div>
                    <p className="mt-2 text-lg font-semibold">{bmiCategory}</p>
                    <div className="mt-6 bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${
                          bmi < 18.5 ? 'bg-blue-500' : 
                          bmi < 25 ? 'bg-green-500' : 
                          bmi < 30 ? 'bg-yellow-500' : 
                          'bg-red-500'
                        }`}
                        style={{ 
                          width: `${Math.min(Math.max((bmi / 40) * 100, 5), 100)}%`
                        }}
                      ></div>
                    </div>
                    <div className="mt-2 flex justify-between text-xs text-gray-500">
                      <span>Underweight</span>
                      <span>Normal</span>
                      <span>Overweight</span>
                      <span>Obese</span>
                    </div>
                    
                    <div className="mt-6 text-sm text-gray-600">
                      <p>Enter your weight and height in the form to calculate your BMI (Body Mass Index).</p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-4">
                    <p className="text-gray-500">Enter your weight and height to calculate BMI</p>
                  </div>
                )}
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Health Resources</h2>
              </div>
              
              <div className="divide-y divide-gray-200">
                <a href="#" className="block hover:bg-gray-50">
                  <div className="px-6 py-4 flex items-center justify-between">
                    <div className="text-sm font-medium text-green-600">Understanding Your BMI</div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                </a>
                <a href="#" className="block hover:bg-gray-50">
                  <div className="px-6 py-4 flex items-center justify-between">
                    <div className="text-sm font-medium text-green-600">Nutritional Guidelines</div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                </a>
                <a href="#" className="block hover:bg-gray-50">
                  <div className="px-6 py-4 flex items-center justify-between">
                    <div className="text-sm font-medium text-green-600">Exercise Recommendations</div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};