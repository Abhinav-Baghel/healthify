import React, { useState, useEffect } from 'react';
import { healthTips, HealthTip, getTipsByCategory, getRandomTips } from '../data/healthTips';
import { Heart, RefreshCw } from 'lucide-react';

export const HealthTips = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [displayedTips, setDisplayedTips] = useState<HealthTip[]>([]);
  const [featuredTip, setFeaturedTip] = useState<HealthTip | null>(null);
  
  const categories = ['All', 'Nutrition', 'Fitness', 'Sleep', 'Mental Health', 'General Wellness'];
  
  useEffect(() => {
    // Set random featured tip
    const randomTips = getRandomTips(1);
    if (randomTips.length > 0) {
      setFeaturedTip(randomTips[0]);
    }
    
    if (selectedCategory === '' || selectedCategory === 'All') {
      setDisplayedTips(healthTips);
    } else {
      setDisplayedTips(getTipsByCategory(selectedCategory));
    }
  }, [selectedCategory]);
  
  const refreshFeaturedTip = () => {
    const randomTips = getRandomTips(1);
    if (randomTips.length > 0) {
      setFeaturedTip(randomTips[0]);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Health Tips</h1>
          <p className="text-gray-600 mt-2">Curated wellness advice tailored for an Indian lifestyle</p>
        </div>
        
        {/* Featured Tip */}
        {featuredTip && (
          <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-xl shadow-md overflow-hidden mb-8 text-white">
            <div className="px-6 py-5 flex justify-between items-center">
              <div className="flex items-center">
                <Heart className="h-5 w-5 mr-2" />
                <h2 className="text-lg font-medium">Tip of the Day</h2>
              </div>
              <button 
                onClick={refreshFeaturedTip}
                className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors duration-200"
                aria-label="Refresh tip"
              >
                <RefreshCw className="h-4 w-4" />
              </button>
            </div>
            
            <div className="px-6 py-5">
              <h3 className="text-xl font-semibold mb-3">{featuredTip.title}</h3>
              <p className="text-white text-opacity-90">{featuredTip.content}</p>
              <div className="mt-4">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-white bg-opacity-20">
                  {featuredTip.category}
                </span>
              </div>
            </div>
          </div>
        )}
        
        {/* Categories Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category === 'All' ? '' : category)}
                className={`m-1 inline-flex items-center px-4 py-2 rounded-md text-sm font-medium ${
                  (category === 'All' && selectedCategory === '') || selectedCategory === category
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } transition-colors duration-200`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedTips.map((tip) => (
            <div key={tip.id} className="bg-white rounded-xl shadow-md overflow-hidden h-full">
              <div className="p-6 flex flex-col h-full">
                <div className="flex-grow">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{tip.title}</h3>
                  <p className="text-gray-600">{tip.content}</p>
                </div>
                <div className="mt-4">
                  <span 
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      tip.category === 'Nutrition' ? 'bg-green-100 text-green-800' :
                      tip.category === 'Fitness' ? 'bg-blue-100 text-blue-800' :
                      tip.category === 'Sleep' ? 'bg-indigo-100 text-indigo-800' :
                      tip.category === 'Mental Health' ? 'bg-purple-100 text-purple-800' :
                      'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {tip.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {displayedTips.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No tips found in this category</p>
          </div>
        )}
      </div>
    </div>
  );
};