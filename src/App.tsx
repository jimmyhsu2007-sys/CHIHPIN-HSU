/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ExternalLink, Search, Mail, FileText, Globe, Info } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background with opacity is handled in CSS via body::before */}
      
      {/* Main Content */}
      <main className="flex-grow w-[90%] md:w-[80%] max-w-6xl mx-auto py-10 md:py-20 flex flex-col gap-6 md:gap-10">
        
        {/* Title Section */}
        <header className="flex flex-col gap-6">
          <h1 className="text-3xl md:text-5xl font-bold text-on-surface tracking-tight leading-tight">
            北捷貼心旅客 FUN 心即時資訊交流園地
          </h1>
          
          {/* News Ticker / Marquee */}
          <div className="flex items-center justify-between border border-outline-variant bg-surface-container-lowest shadow-sm">
            <div className="flex-grow overflow-hidden py-3 px-4">
              <motion.div 
                animate={{ x: ["100%", "-100%"] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="whitespace-nowrap text-lg md:text-xl font-semibold text-on-surface"
              >
                2026 捷運盃黑客松競賽 "玩點生活、智慧串聯" 歡迎各界組隊挑戰，展現創新技術能量！
              </motion.div>
            </div>
            <a 
              href="https://lh3.googleusercontent.com/aida/ADBb0ujhdi-P3lpBYeLkhQPeIoNUqm-4h3x9fuCfGjk2r_NfAStJqqEGcYlQkFMa5IJm7ge3LIW0vRqUYW1eYB41kb9vwdKL8X_ceiXe8zhOK_KDnkU0jwR42eNVj7wQfvxZ36Xpw-Zgq8RS-H-ufOZ4xvH37rzPxXTJDE5T_wHSzy2HDCA3xFzkgGj7ItEHQ8WC8loyIO2vluOhBaY1uUjee5H3-aHKX5NUEua3pYRn4MZ3oEBbdNCwSPHSVNbm1JdMwvjKC6qJC-UfyM0" 
              target="_blank" 
              rel="noreferrer"
              className="flex flex-col items-center border-l border-outline-variant py-2 px-4 bg-surface-container-lowest hover:bg-surface-container-low transition-colors group"
            >
              <FileText className="w-5 h-5 mb-1 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-on-surface text-sm font-medium">pdf 檔</span>
            </a>
          </div>

          {/* Video Section */}
          <section className="aspect-video w-full max-w-4xl mx-auto border border-outline-variant rounded-sm overflow-hidden shadow-lg bg-black">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/SRJBfnskyOY" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            />
          </section>
        </header>

        {/* Feature Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-surface-container-lowest rounded-sm border border-outline-variant p-6 md:p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-all"
          >
            <h2 className="text-xl md:text-2xl font-bold text-on-surface flex items-center gap-2">
              <Globe className="w-6 h-6 text-primary" /> 即時乘車資訊-
            </h2>
            <div className="text-lg md:text-xl text-on-surface">
              搭乘路徑、班次、時刻等資訊查詢
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-surface-container-lowest rounded-sm border border-outline-variant p-6 md:p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-all"
          >
            <h2 className="text-xl md:text-2xl font-bold text-on-surface flex items-center gap-2">
              <Info className="w-6 h-6 text-primary" /> 著名景點、餐飲、
            </h2>
            <div className="text-lg md:text-xl text-on-surface">
              禮品店及旅遊行程規劃推薦查詢
            </div>
          </motion.div>
        </section>

        {/* Main Info List */}
        <section className="flex flex-col gap-4">
          <div className="bg-surface-container-low border border-outline-variant px-4 py-2 inline-block self-start rounded-sm shadow-sm">
            <h2 className="text-base font-bold text-on-surface">資訊查詢與旅客建議交流園地</h2>
          </div>
          <div className="bg-surface-container-lowest rounded-sm border border-outline-variant p-6 md:p-8 flex flex-col gap-6 shadow-sm min-h-[300px]">
            <ul className="grid grid-cols-1 gap-4 text-lg md:text-2xl font-medium text-on-surface">
              <li className="flex items-start gap-3 hover:translate-x-1 transition-transform cursor-pointer">
                <span className="text-primary font-bold">1.</span> 國內外新聞
              </li>
              <li className="flex items-start gap-3 hover:translate-x-1 transition-transform cursor-pointer">
                <span className="text-primary font-bold">2.</span> 國家法令及政策
              </li>
              <li className="flex items-start gap-3 hover:translate-x-1 transition-transform cursor-pointer">
                <span className="text-primary font-bold">3.</span> 科技、交通、環境相關新聞與資訊
              </li>
              <li className="flex items-start gap-3 hover:translate-x-1 transition-transform cursor-pointer">
                <span className="text-primary font-bold">4.</span> 國內外旅遊資訊查詢
              </li>
              <li className="flex items-start gap-3 hover:translate-x-1 transition-transform cursor-pointer">
                <span className="text-primary font-bold">5.</span> 體育與藝文活動資訊查詢
              </li>
              <li className="flex items-start gap-3 hover:translate-x-1 transition-transform cursor-pointer">
                <span className="text-primary font-bold">6.</span> 旅客建議與交流
              </li>
            </ul>
          </div>
        </section>

        {/* Search Input Section */}
        <section className="bg-surface-container-lowest rounded-sm border border-outline-variant p-6 md:p-8 flex flex-col gap-6 shadow-sm border-b-primary-container border-b-4">
          <h2 className="text-xl md:text-2xl font-bold text-on-surface mb-2">請輸入查詢內容：</h2>
          <div className="relative group">
            <input 
              type="text"
              placeholder="搜尋您感興趣的內容..."
              className="w-full bg-surface-container-low border border-outline px-4 py-4 pr-12 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all rounded-sm text-lg"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors">
              <Search className="w-6 h-6" />
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-low border-t border-outline-variant mt-20">
        <div className="w-[90%] md:w-[80%] max-w-6xl mx-auto py-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-3 items-center md:items-start text-center md:text-left">
            <span className="text-xl md:text-2xl font-bold text-on-surface">北捷貼心旅客 FUN 心即時資訊交流園地</span>
            <span className="text-sm text-on-surface-variant max-w-md">
              © 2024 Taipei Rapid Transit Corporation. Professional Technical Excellence. 致力於提供旅客最貼心的智慧交通服務。
            </span>
          </div>
          
          <nav className="flex flex-wrap gap-x-8 gap-y-4 justify-center text-sm font-medium">
            <a href="#" className="text-secondary hover:text-primary underline-offset-4 hover:underline transition-all flex items-center gap-1">
              Privacy Policy
            </a>
            <a href="#" className="text-secondary hover:text-primary underline-offset-4 hover:underline transition-all flex items-center gap-1">
              Competition Rules
            </a>
            <a href="#" className="text-secondary hover:text-primary underline-offset-4 hover:underline transition-all flex items-center gap-1">
              API Documentation
            </a>
            <a href="#" className="text-secondary hover:text-primary underline-offset-4 hover:underline transition-all flex items-center gap-1">
              Contact Support
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
