export const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <div className="w-full mt-auto pt-12 pb-6 px-2">
      <div className="bg-white/40 dark:bg-[#111827]/40 backdrop-blur-xl rounded-[2.5rem] py-8 px-6 text-center border border-blue-100/50 dark:border-blue-800/10 shadow-lg shadow-blue-900/5 dark:shadow-black/20">
        <p className="text-slate-900 dark:text-white font-bold text-lg tracking-tight mb-2">
          Carissa Ratri Kusuma Dewi
        </p>
        <p className="text-sm text-slate-500 dark:text-blue-300/60 font-medium">
          &copy; {year} Professional Resume. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};
