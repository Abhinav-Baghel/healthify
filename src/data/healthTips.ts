export interface HealthTip {
  id: number;
  title: string;
  content: string;
  category: string;
}

export const healthTips: HealthTip[] = [
  {
    id: 1,
    title: "Stay Hydrated Throughout the Day",
    content: "Drink at least 8-10 glasses of water daily. During summer, increase your water intake and include natural hydrators like coconut water, buttermilk (chaas), and watermelon in your diet.",
    category: "Nutrition"
  },
  {
    id: 2,
    title: "Incorporate Traditional Spices",
    content: "Indian spices like turmeric, cumin, coriander, and ginger don't just add flavor—they have powerful health benefits. Turmeric contains curcumin, which has anti-inflammatory properties, while ginger aids digestion.",
    category: "Nutrition"
  },
  {
    id: 3,
    title: "Practice Mindful Eating",
    content: "Pay attention to what and how you eat. Chew slowly, savor each bite, and listen to your body's hunger and fullness cues. Avoid eating while distracted by TV or smartphones.",
    category: "Nutrition"
  },
  {
    id: 4,
    title: "Balance Your Thali (Plate)",
    content: "A balanced Indian thali should include a variety of nutrients: whole grains (roti/rice), protein (dal/legumes), vegetables, healthy fats (ghee in moderation), and probiotics (yogurt/buttermilk).",
    category: "Nutrition"
  },
  {
    id: 5,
    title: "Consider Intermittent Fasting",
    content: "Many Indians traditionally observe periodic fasting. Modern science supports the benefits of intermittent fasting for cellular repair, weight management, and improved metabolic health when done properly.",
    category: "Nutrition"
  },
  {
    id: 6,
    title: "Aim for 7-8 Hours of Quality Sleep",
    content: "Prioritize good sleep by establishing a regular sleep schedule. Create a dark, quiet, and cool sleeping environment. Avoid screen time, caffeine, and heavy meals before bedtime.",
    category: "Sleep"
  },
  {
    id: 7,
    title: "Practice a Bedtime Ritual",
    content: "Develop a calming pre-sleep routine such as a warm bath, reading, or gentle stretching. Consider meditation or conscious breathing to quiet the mind.",
    category: "Sleep"
  },
  {
    id: 8,
    title: "Manage Your Sleep Environment",
    content: "Invest in a good quality mattress and pillows. Keep your bedroom cool (around 18-22°C), dark, and quiet for optimal sleep conditions.",
    category: "Sleep"
  },
  {
    id: 9,
    title: "Limit Daytime Naps",
    content: "If you nap during the day, limit it to 20-30 minutes and before 3 PM to avoid interfering with nighttime sleep.",
    category: "Sleep"
  },
  {
    id: 10,
    title: "Avoid Stimulants Before Bed",
    content: "Limit caffeine (tea, coffee, cola) at least 6 hours before bedtime, and avoid alcohol which can disrupt sleep patterns.",
    category: "Sleep"
  },
  {
    id: 11,
    title: "Walk After Meals",
    content: "A short 10-15 minute walk after meals, especially dinner, aids digestion and helps regulate blood sugar levels. This is an ancient Indian practice backed by modern science.",
    category: "Fitness"
  },
  {
    id: 12,
    title: "Incorporate Yoga Into Your Routine",
    content: "Practice yoga for 20-30 minutes daily for improved flexibility, strength, and mental clarity. Surya Namaskar (Sun Salutation) is an excellent full-body workout that can be adapted for all fitness levels.",
    category: "Fitness"
  },
  {
    id: 13,
    title: "Mix Cardio and Strength Training",
    content: "Aim for at least 150 minutes of moderate-intensity aerobic activity weekly, along with strength training exercises at least twice a week.",
    category: "Fitness"
  },
  {
    id: 14,
    title: "Take Movement Breaks",
    content: "If you have a sedentary job, take a 5-minute movement break every hour. Simple stretches or a short walk can improve circulation and reduce the negative effects of prolonged sitting.",
    category: "Fitness"
  },
  {
    id: 15,
    title: "Breathe Properly",
    content: "Practice deep breathing exercises (Pranayama) for 5-10 minutes daily to reduce stress, improve lung capacity, and enhance oxygen flow throughout your body.",
    category: "Fitness"
  },
  {
    id: 16,
    title: "Practice Oil Pulling",
    content: "An ancient Ayurvedic dental technique, oil pulling involves swishing a tablespoon of oil (coconut or sesame) in your mouth for 15-20 minutes on an empty stomach to remove toxins and improve oral health.",
    category: "General Wellness"
  },
  {
    id: 17,
    title: "Maintain Digital Boundaries",
    content: "Set limits on screen time and create tech-free zones/hours in your home. Consider using apps that monitor and restrict your usage of social media.",
    category: "Mental Health"
  },
  {
    id: 18,
    title: "Opt for Seasonal and Local Foods",
    content: "Seasonal and locally grown fruits and vegetables are not only more nutritious but also aligned with your body's needs during particular seasons—a principle emphasized in Ayurveda.",
    category: "Nutrition"
  },
  {
    id: 19,
    title: "Stay Connected with Community",
    content: "Maintain strong social connections with family and friends. Community bonds are linked to longer, healthier lives and improved mental well-being.",
    category: "Mental Health"
  },
  {
    id: 20,
    title: "Consider a Primarily Plant-Based Diet",
    content: "Traditional Indian cuisine offers numerous plant-based protein options like lentils, chickpeas, and beans. Increasing plant foods while moderating animal products can reduce the risk of chronic diseases.",
    category: "Nutrition"
  },
  {
    id: 21,
    title: "Practice Mindfulness Meditation",
    content: "Spend at least 10 minutes daily in mindfulness practice. Focus on your breath, body sensations, or use guided meditations to reduce stress and improve mental clarity.",
    category: "Mental Health"
  },
  {
    id: 22,
    title: "Limit Processed Foods",
    content: "Minimize your intake of highly processed foods, which often contain excessive salt, sugar, and unhealthy fats. Choose whole, unprocessed foods whenever possible.",
    category: "Nutrition"
  },
  {
    id: 23,
    title: "Try Alternate Nostril Breathing",
    content: "Practice Nadi Shodhana (alternate nostril breathing) for 5 minutes daily to balance your nervous system, reduce stress, and improve focus.",
    category: "Mental Health"
  },
  {
    id: 24,
    title: "Maintain Good Posture",
    content: "Be mindful of your posture while sitting, standing, and walking. Good posture prevents back pain, improves breathing, and increases energy levels.",
    category: "Fitness"
  },
  {
    id: 25,
    title: "Listen to Your Body",
    content: "Pay attention to signals from your body. Persistent discomfort, pain, or fatigue are ways your body communicates that something needs attention.",
    category: "General Wellness"
  },
];

// Get tips by category
export const getTipsByCategory = (category: string) => {
  return healthTips.filter(tip => tip.category === category);
};

// Get random tips
export const getRandomTips = (count: number) => {
  const shuffled = [...healthTips].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};