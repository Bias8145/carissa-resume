import { useState, useEffect } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navigation } from './components/Navigation';
import { CardStack, Card } from './components/CardStack';
import { Footer } from './components/Footer';
import { data } from './data';
import { Moon, Sun, Languages, MapPin, Mail, Building2, Download, Share2, Award, FileBadge, Zap, User, GraduationCap, Briefcase, Star, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { getProfileImageUrl } from './lib/supabase';

const AppContent = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [activeSection, setActiveSection] = useState('profile');
  
  const [profileImage, setProfileImage] = useState<string>("");

  useEffect(() => {
    const supabaseImage = getProfileImageUrl('profile_photo.jpg');
    const img = new Image();
    img.src = supabaseImage;
    img.onload = () => setProfileImage(supabaseImage);
    img.onerror = () => {
      setProfileImage("https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop");
    };
  }, []);

  const content = data[language];

  return (
    <div className="relative w-full h-[100dvh] flex flex-col overflow-hidden bg-[#fdfbff] dark:bg-[#0f0518] text-slate-900 dark:text-purple-50 transition-colors duration-500 font-sans selection:bg-purple-200 selection:text-purple-900 dark:selection:bg-purple-700 dark:selection:text-purple-100">
      
      {/* Ambient Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-purple-200/40 dark:bg-purple-900/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-200/40 dark:bg-indigo-900/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      {/* HEADER - Updated to be more relevant */}
      <header className="flex justify-between items-center px-6 py-4 md:px-12 md:py-6 shrink-0 z-40 bg-[#fdfbff]/80 dark:bg-[#0f0518]/80 backdrop-blur-xl sticky top-0 border-b border-purple-100/50 dark:border-purple-900/20 transition-all duration-300">
        <div className="flex items-center gap-4">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-12 h-12 md:w-14 md:h-14 rounded-full p-[2px] bg-gradient-to-tr from-purple-500 via-indigo-400 to-purple-300 shadow-lg shadow-purple-500/20 group cursor-pointer"
          >
             <div className="w-full h-full rounded-full overflow-hidden border-[2px] border-white dark:border-[#0f0518] relative z-10 bg-slate-200 dark:bg-slate-800">
               <img 
                 src={profileImage} 
                 alt="Carissa Ratri" 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
               />
             </div>
          </motion.div>

          <div className="flex flex-col justify-center">
            {/* Removed Name, Replaced with Role/Title */}
            <span className="text-lg md:text-xl font-black text-slate-900 dark:text-white tracking-tight leading-none mb-1">
              {language === 'ID' ? 'PORTOFOLIO' : 'PORTFOLIO'}
            </span>
            <span className="text-[10px] md:text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-[0.25em] leading-none opacity-90">
              {content.ui.header.resume}
            </span>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setLanguage(language === 'ID' ? 'EN' : 'ID')}
            className="h-10 px-4 rounded-full bg-white/60 dark:bg-purple-900/20 hover:bg-purple-50 dark:hover:bg-purple-900/40 backdrop-blur-md transition-all text-xs font-bold flex items-center gap-2 text-purple-900 dark:text-purple-100 border border-purple-100 dark:border-purple-800/30 shadow-sm hover:shadow-md active:scale-95"
          >
            <Languages size={15} />
            {language}
          </button>
          <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/60 dark:bg-purple-900/20 hover:bg-purple-50 dark:hover:bg-purple-900/40 backdrop-blur-md transition-all border border-purple-100 dark:border-purple-800/30 text-purple-900 dark:text-purple-100 shadow-sm hover:shadow-md hover:rotate-12 active:scale-95"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </header>

      <main className="flex-1 relative w-full max-w-[1100px] mx-auto px-4 md:px-8 z-10">
        <CardStack>
          
          {/* PROFILE SECTION */}
          <Card isActive={activeSection === 'profile'}>
            <div className="min-h-full flex flex-col justify-center items-center py-12 md:py-20 text-center relative">
              
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/30 dark:to-indigo-900/30 backdrop-blur-md text-purple-700 dark:text-purple-300 text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-8 border border-purple-100 dark:border-purple-800/50 shadow-sm"
              >
                <Sparkles size={14} className="text-purple-500 animate-pulse"/>
                {content.ui.profile.hello}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="mb-10 relative"
              >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 leading-[1.1] drop-shadow-sm pb-2">
                  CARISSA RATRI.
                </h1>
                <p className="text-sm md:text-lg font-bold text-purple-600 dark:text-purple-400 tracking-[0.3em] mt-4 uppercase opacity-80 max-w-2xl mx-auto leading-relaxed">
                  {content.profile.role}
                </p>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-slate-600 dark:text-purple-100/80 leading-relaxed max-w-3xl mx-auto font-medium mb-12 px-4"
              >
                {content.profile.summary}
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col items-center gap-8 w-full"
              >
                <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-slate-500 dark:text-purple-300/70">
                  <a 
                    href={`mailto:${content.profile.email}`} 
                    className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/70 dark:bg-purple-900/10 backdrop-blur-sm border border-purple-100 dark:border-purple-800/20 hover:border-purple-300 dark:hover:border-purple-600 hover:text-purple-600 dark:hover:text-purple-300 transition-all shadow-sm hover:shadow-md group"
                  >
                    <Mail size={16} className="group-hover:scale-110 transition-transform"/> {content.profile.email}
                  </a>
                  <div className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/70 dark:bg-purple-900/10 backdrop-blur-sm border border-purple-100 dark:border-purple-800/20 text-slate-600 dark:text-purple-200">
                    <MapPin size={16} /> {content.profile.location}
                  </div>
                </div>

                <div className="flex gap-4 mt-4">
                  <button className="flex items-center gap-3 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold hover:scale-105 transition-transform active:scale-95 shadow-xl shadow-purple-900/20 dark:shadow-white/10 tracking-wide">
                    <Download size={20} />
                    {content.ui.profile.downloadCv}
                  </button>
                  <button className="flex items-center gap-2 px-6 py-4 bg-white/80 dark:bg-purple-900/20 backdrop-blur-sm text-purple-900 dark:text-purple-100 rounded-full font-bold hover:bg-purple-50 dark:hover:bg-purple-900/40 transition-colors active:scale-95 border border-purple-100 dark:border-purple-800/50 shadow-sm">
                    <Share2 size={20} />
                  </button>
                </div>
              </motion.div>
              <Footer />
            </div>
          </Card>

          {/* EXPERIENCE SECTION */}
          <Card isActive={activeSection === 'experience'}>
            <div className="max-w-4xl mx-auto py-8">
              <div className="sticky top-0 bg-[#fdfbff]/90 dark:bg-[#0f0518]/90 backdrop-blur-xl z-20 py-6 mb-12 border-b border-purple-100 dark:border-purple-900/20 flex items-center gap-4 rounded-b-3xl px-6 -mx-6 shadow-sm">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-2xl text-purple-600 dark:text-purple-400">
                  <Briefcase size={24} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {content.ui.nav.experience}
                </h2>
              </div>
              
              <div className="relative border-l-2 border-purple-100 dark:border-purple-900/30 ml-4 md:ml-8 space-y-16 pb-12">
                {content.experience.map((exp, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative pl-8 md:pl-12"
                  >
                    <span className="absolute -left-[9px] top-8 w-4 h-4 rounded-full bg-purple-600 dark:bg-purple-400 ring-4 ring-[#fdfbff] dark:ring-[#0f0518] shadow-lg shadow-purple-500/30" />
                    
                    <div className="group bg-white/60 dark:bg-[#1a1025]/60 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/60 dark:border-purple-900/10 hover:border-purple-200 dark:hover:border-purple-700/50 transition-all shadow-sm hover:shadow-2xl hover:shadow-purple-900/5 dark:hover:shadow-black/40">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-base">
                            <Building2 size={16} />
                            {exp.company}
                          </div>
                        </div>
                        <span className="self-start inline-block px-5 py-2 rounded-full bg-purple-50 dark:bg-purple-900/20 text-xs font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wider border border-purple-100 dark:border-purple-800/30">
                          {exp.period}
                        </span>
                      </div>

                      <ul className="space-y-4">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="flex items-start gap-4 text-slate-600 dark:text-purple-100/70 leading-relaxed text-base">
                            <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-purple-400 dark:bg-purple-600 shrink-0" />
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
              <Footer />
            </div>
          </Card>

          {/* EDUCATION SECTION */}
          <Card isActive={activeSection === 'education'}>
            <div className="max-w-4xl mx-auto py-8">
              <div className="sticky top-0 bg-[#fdfbff]/90 dark:bg-[#0f0518]/90 backdrop-blur-xl z-20 py-6 mb-12 border-b border-purple-100 dark:border-purple-900/20 flex items-center gap-4 rounded-b-3xl px-6 -mx-6 shadow-sm">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-2xl text-purple-600 dark:text-purple-400">
                  <GraduationCap size={24} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {content.ui.nav.education}
                </h2>
              </div>

              <div className="grid gap-10">
                {content.education.map((edu, idx) => (
                  <div key={idx} className="bg-white/60 dark:bg-[#1a1025]/60 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-white/60 dark:border-purple-900/10 shadow-xl shadow-purple-900/5 dark:shadow-black/20 hover:scale-[1.01] transition-transform duration-500">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
                      <div className="flex-1">
                        <span className="inline-block px-4 py-1.5 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-xs font-bold tracking-widest text-purple-700 dark:text-purple-300 uppercase mb-4">
                          {edu.period}
                        </span>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">
                          {edu.institution}
                        </h3>
                        <p className="text-xl text-slate-600 dark:text-purple-200 font-medium">
                          {edu.degree}
                        </p>
                      </div>
                      
                      {/* Enhanced IPK Badge - Glass Card Style */}
                      <div className="relative group shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-[1.5rem] blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                        <div className="relative flex flex-col items-center justify-center w-32 h-32 bg-white/80 dark:bg-[#251b35]/80 backdrop-blur-md border border-white dark:border-purple-700/30 rounded-[1.5rem] shadow-2xl">
                          <span className="text-[10px] font-bold text-slate-400 dark:text-purple-400 uppercase tracking-widest mb-1">{content.ui.education.gpa}</span>
                          <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-indigo-600 dark:from-purple-300 dark:to-indigo-300">
                            {edu.gpa.split('/')[0]}
                          </div>
                          <div className="text-xs font-bold text-slate-400 dark:text-purple-500/50 mt-1">
                            / {edu.gpa.split('/')[1]}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50/50 dark:bg-purple-900/10 p-6 md:p-8 rounded-3xl border border-purple-100 dark:border-purple-800/20">
                      <span className="text-xs font-bold text-purple-500 dark:text-purple-400 uppercase tracking-widest mb-3 block flex items-center gap-2">
                        <FileBadge size={16}/>
                        {content.ui.education.thesis}
                      </span>
                      <p className="text-lg text-slate-800 dark:text-purple-100 italic font-medium leading-relaxed">
                        "{edu.thesis}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Footer />
            </div>
          </Card>

          {/* ACHIEVEMENTS & CERTIFICATIONS - FIXED LAYOUT OVERLAP */}
          <Card isActive={activeSection === 'achievements'}>
            <div className="max-w-5xl mx-auto py-8">
              <div className="sticky top-0 bg-[#fdfbff]/90 dark:bg-[#0f0518]/90 backdrop-blur-xl z-20 py-6 mb-12 border-b border-purple-100 dark:border-purple-900/20 flex items-center gap-4 rounded-b-3xl px-6 -mx-6 shadow-sm">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-2xl text-purple-600 dark:text-purple-400">
                  <Award size={24} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {content.ui.nav.achievements}
                </h2>
              </div>

              {/* Changed from grid to flex-col on mobile to prevent overlap, added huge gap */}
              <div className="flex flex-col md:grid md:grid-cols-2 gap-16 md:gap-10">
                
                {/* AWARDS COLUMN */}
                <div className="space-y-8">
                  <div className="flex items-center gap-3 text-purple-700 dark:text-purple-300 mb-2 px-2">
                    <Star size={20} className="fill-purple-700/20 dark:fill-purple-300/20"/>
                    <h3 className="text-lg font-bold uppercase tracking-wider">{content.ui.achievements.awards}</h3>
                  </div>
                  {content.achievements.map((ach, idx) => (
                    // Removed h-full to allow natural height
                    <div key={idx} className="group bg-white/60 dark:bg-[#1a1025]/60 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] border border-white/60 dark:border-purple-900/10 hover:border-purple-200 dark:hover:border-purple-700/50 transition-all hover:-translate-y-1 shadow-sm hover:shadow-xl flex flex-col">
                      <span className="text-xs font-bold text-purple-400 mb-3 block">{ach.period}</span>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">{ach.title}</h4>
                      <p className="text-base text-slate-600 dark:text-purple-200/70 leading-relaxed mt-auto">{ach.description}</p>
                    </div>
                  ))}
                </div>

                {/* CERTIFICATIONS COLUMN */}
                <div className="space-y-8">
                  <div className="flex items-center gap-3 text-purple-700 dark:text-purple-300 mb-2 px-2">
                    <FileBadge size={20} />
                    <h3 className="text-lg font-bold uppercase tracking-wider">{content.ui.achievements.certifications}</h3>
                  </div>
                  <div className="grid gap-4">
                    {content.certifications.map((cert, idx) => (
                      <div key={idx} className="flex items-center justify-between gap-4 p-5 bg-white/60 dark:bg-[#1a1025]/60 backdrop-blur-xl rounded-[1.5rem] border border-white/60 dark:border-purple-900/10 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors group cursor-default shadow-sm hover:shadow-md">
                        <span className="font-medium text-sm md:text-base text-slate-700 dark:text-purple-100 group-hover:text-purple-700 dark:group-hover:text-white transition-colors">{cert.name}</span>
                        <span className="px-3 py-1.5 rounded-xl bg-purple-100 dark:bg-purple-900/40 text-xs font-bold text-purple-600 dark:text-purple-300 shrink-0 border border-purple-200 dark:border-purple-800/50">{cert.year}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          </Card>

          {/* SKILLS */}
          <Card isActive={activeSection === 'skills'}>
            <div className="max-w-5xl mx-auto py-8 min-h-full flex flex-col justify-center">
              <div className="sticky top-0 bg-[#fdfbff]/90 dark:bg-[#0f0518]/90 backdrop-blur-xl z-20 py-6 mb-12 border-b border-purple-100 dark:border-purple-900/20 flex items-center gap-4 md:hidden rounded-b-3xl px-6 -mx-6 shadow-sm">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-2xl text-purple-600 dark:text-purple-400">
                  <Zap size={24} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {content.ui.nav.skills}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-12 md:gap-20">
                <div>
                  <h3 className="text-2xl font-black mb-8 text-slate-900 dark:text-white flex items-center gap-4">
                    <span className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 shadow-sm">
                      <Zap size={24} />
                    </span>
                    {content.ui.skills.hard}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {content.skills.hard.map((skill, idx) => (
                      <div
                        key={idx}
                        className="px-6 py-3 bg-white/60 dark:bg-[#1a1025]/60 backdrop-blur-xl border border-purple-100 dark:border-purple-800/30 rounded-[1.2rem] font-bold text-slate-700 dark:text-purple-100 text-sm hover:border-purple-400 dark:hover:border-purple-500 hover:scale-105 transition-all cursor-default shadow-sm hover:shadow-md"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-black mb-8 text-slate-900 dark:text-white flex items-center gap-4">
                    <span className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 shadow-sm">
                      <User size={24} />
                    </span>
                    {content.ui.skills.soft}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {content.skills.soft.map((skill, idx) => (
                      <div
                        key={idx}
                        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-[1.2rem] font-bold text-sm shadow-lg shadow-purple-600/20 hover:shadow-purple-600/40 hover:scale-105 transition-all cursor-default"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          </Card>

        </CardStack>
      </main>

      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} labels={content.ui.nav} />

    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
