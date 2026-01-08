import React from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, GraduationCap, Award, Zap } from 'lucide-react';
import { cn } from '../utils';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  labels: {
    profile: string;
    experience: string;
    education: string;
    achievements: string;
    skills: string;
  };
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection, setActiveSection, labels }) => {
  const menuItems = [
    { id: 'profile', label: labels.profile, icon: User },
    { id: 'experience', label: labels.experience, icon: Briefcase },
    { id: 'education', label: labels.education, icon: GraduationCap },
    { id: 'achievements', label: labels.achievements, icon: Award },
    { id: 'skills', label: labels.skills, icon: Zap },
  ];

  return (
    <div className="fixed z-50 bottom-8 left-0 right-0 flex justify-center items-end pointer-events-none px-4">
      <motion.nav 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="pointer-events-auto bg-white/10 dark:bg-black/20 backdrop-blur-3xl rounded-full px-6 py-3 flex gap-4 items-center shadow-2xl shadow-blue-900/20 dark:shadow-black/50 ring-1 ring-white/20 dark:ring-white/10"
      >
        {menuItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className="relative group flex flex-col items-center justify-center p-2 rounded-full transition-all duration-300"
              aria-label={item.label}
            >
              <div
                className={cn(
                  "relative z-10 transition-all duration-500",
                  isActive 
                    ? "text-blue-600 dark:text-blue-300 scale-110 -translate-y-1" 
                    : "text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-300 hover:scale-110"
                )}
              >
                <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              </div>

              {isActive && (
                <motion.div
                  layoutId="activeNavDot"
                  className="absolute -bottom-1 w-1 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              <div className="absolute bottom-full mb-4 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-slate-900/90 dark:bg-blue-100/90 backdrop-blur-md text-white dark:text-blue-900 text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  {item.label}
                  <div className="absolute top-full left-1/2 -ml-1 border-4 border-transparent border-t-slate-900/90 dark:border-t-blue-100/90" />
                </div>
              </div>
            </button>
          );
        })}
      </motion.nav>
    </div>
  );
};
