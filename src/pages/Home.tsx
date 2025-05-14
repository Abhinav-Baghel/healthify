import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Moon, Utensils, User } from 'lucide-react';

export const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-teal-500 text-white">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Your Path to a Healthier Lifestyle with Indian Nutrition
              </h1>
              <p className="text-xl mb-8 max-w-lg">
                Track your fitness, sleep, and nutrition with specialized focus on Indian foods and recipes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-green-600 font-medium text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/health-tips"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md border-2 border-white text-white font-medium text-lg hover:bg-white hover:text-green-600 transition-colors duration-200"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://images.pexels.com/photos/5414016/pexels-photo-5414016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Healthy meal with fruits and vegetables" 
                className="rounded-lg shadow-2xl max-w-md w-full object-cover h-80 md:h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Everything You Need for Your Health Journey
            </h2>
            <p className="text-xl text-gray-600">
              Healthify provides tools to track all aspects of your wellness with a special focus on Indian nutrition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="p-4 bg-green-100 rounded-full inline-block mb-4">
                <Activity className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Activity Tracking</h3>
              <p className="text-gray-600">
                Log your daily steps, workouts, and activities to monitor your fitness progress.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="p-4 bg-blue-100 rounded-full inline-block mb-4">
                <Moon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Sleep Monitoring</h3>
              <p className="text-gray-600">
                Track your sleep patterns and get insights to improve your rest quality.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="p-4 bg-orange-100 rounded-full inline-block mb-4">
                <Utensils className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Indian Food Database</h3>
              <p className="text-gray-600">
                Access nutrition information for 50+ Indian dishes and track your daily intake.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="p-4 bg-purple-100 rounded-full inline-block mb-4">
                <User className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Personalized Profile</h3>
              <p className="text-gray-600">
                Calculate your BMI, set goals, and view personalized health recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl overflow-hidden shadow-xl">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-10 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4 text-white">
                  Start Your Health Journey Today
                </h2>
                <p className="text-white text-lg mb-8 opacity-90">
                  Join thousands of users who are transforming their lives with proper nutrition tracking and health insights.
                </p>
                <div>
                  <Link
                    to="/register"
                    className="inline-flex items-center px-6 py-3 rounded-md bg-white text-green-600 font-medium hover:bg-gray-100 transition-colors duration-200 shadow-md"
                  >
                    Sign Up Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Healthy lifestyle" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600">
              Discover how Healthify has helped people improve their nutrition and overall wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-green-200 flex items-center justify-center text-green-700 font-bold text-xl">
                  R
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Rahul Sharma</h4>
                  <p className="text-gray-500 text-sm">Delhi</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Healthify has transformed my relationship with food. Having accurate nutritional information for Indian dishes has helped me make better choices."
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 font-bold text-xl">
                  P
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Priya Patel</h4>
                  <p className="text-gray-500 text-sm">Mumbai</p>
                </div>
              </div>
              <p className="text-gray-600">
                "I've lost 10kg in 6 months by tracking my diet and exercise with Healthify. The Indian food database is exactly what I needed!"
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 font-bold text-xl">
                  A
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Arjun Kapoor</h4>
                  <p className="text-gray-500 text-sm">Bangalore</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The sleep tracking feature combined with nutritional insights has improved my energy levels tremendously. Highly recommend!"
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};