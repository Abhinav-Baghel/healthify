import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  age?: number;
  weight?: number;
  height?: number;
}

interface AuthContextType {
  currentUser: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateUserProfile: (userData: Partial<User>) => void;
}

export const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  isAuthenticated: false,
  login: async () => false,
  register: async () => false,
  logout: () => {},
  updateUserProfile: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // Check if user is logged in on component mount
    const storedUser = localStorage.getItem('healthify_user');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // In a real app, this would make a server request
      // For now, we'll check localStorage for existing users
      const users = JSON.parse(localStorage.getItem('healthify_users') || '[]');
      const user = users.find((u: any) => u.email === email && u.password === password);
      
      if (user) {
        const { password, ...userWithoutPassword } = user;
        setCurrentUser(userWithoutPassword);
        setIsAuthenticated(true);
        localStorage.setItem('healthify_user', JSON.stringify(userWithoutPassword));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      // In a real app, this would make a server request
      // For now, we'll store in localStorage
      const users = JSON.parse(localStorage.getItem('healthify_users') || '[]');
      
      // Check if user already exists
      if (users.some((u: any) => u.email === email)) {
        return false;
      }
      
      const newUser = {
        id: Date.now().toString(),
        name,
        email,
        password
      };
      
      users.push(newUser);
      localStorage.setItem('healthify_users', JSON.stringify(users));
      
      const { password: _, ...userWithoutPassword } = newUser;
      setCurrentUser(userWithoutPassword);
      setIsAuthenticated(true);
      localStorage.setItem('healthify_user', JSON.stringify(userWithoutPassword));
      
      return true;
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    }
  };

  const logout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('healthify_user');
  };

  const updateUserProfile = (userData: Partial<User>) => {
    if (!currentUser) return;
    
    const updatedUser = { ...currentUser, ...userData };
    setCurrentUser(updatedUser);
    localStorage.setItem('healthify_user', JSON.stringify(updatedUser));
    
    // Also update in users array
    const users = JSON.parse(localStorage.getItem('healthify_users') || '[]');
    const updatedUsers = users.map((user: any) => {
      if (user.id === currentUser.id) {
        return { ...user, ...userData };
      }
      return user;
    });
    
    localStorage.setItem('healthify_users', JSON.stringify(updatedUsers));
  };

  return (
    <AuthContext.Provider value={{ 
      currentUser, 
      isAuthenticated, 
      login, 
      register, 
      logout,
      updateUserProfile
    }}>
      {children}
    </AuthContext.Provider>
  );
};