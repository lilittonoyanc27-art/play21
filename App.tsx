import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  RotateCcw, 
  ArrowRight, 
  Sparkles,
  Trophy,
  Crown,
  Star,
  Info,
  BookOpen,
  ThumbsUp,
  XCircle,
  Flag,
  Target
} from 'lucide-react';
import { BASKETBALL_DATA, PODER_CONJUGATION, PoderQuestion } from './constants';

type GameState = 'start' | 'theory' | 'playing' | 'results';

export default function App() {
  const [gameState, setGameState] = useState<GameState>('start');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [shuffledQuests, setShuffledQuests] = useState<PoderQuestion[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    if (gameState === 'start') {
      setShuffledQuests([...BASKETBALL_DATA].sort(() => 0.5 - Math.random()));
    }
  }, [gameState]);

  const startGame = () => {
    setGameState('playing');
    setCurrentIndex(0);
    setScore(0);
    setFeedback(null);
    setShowExplanation(false);
  };

  const handleAnswer = (answer: string) => {
    if (feedback) return;
    const isCorrect = answer === shuffledQuests[currentIndex].correct;
    if (isCorrect) {
      setScore(prev => prev + 1);
      setFeedback('correct');
    } else {
      setFeedback('wrong');
    }
    setShowExplanation(true);
  };

  const handleNext = () => {
    setFeedback(null);
    setShowExplanation(false);
    if (currentIndex < 14) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setGameState('results');
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF7ED] text-slate-900 font-sans flex flex-col overflow-x-hidden selection:bg-orange-400 selection:text-white">
      {/* Basketball Court Details */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] border-8 border-orange-950 rounded-b-full" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] border-8 border-orange-950 rounded-t-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border-8 border-orange-950 rounded-full" />
      </div>

      <header className="bg-orange-600 text-white border-b-4 border-orange-900 px-6 py-4 z-50 sticky top-0 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-orange-600 shadow-inner border-2 border-orange-100">
                <User size={24} />
             </div>
             <div>
               <p className="text-[10px] font-black uppercase text-orange-200 tracking-widest">ԽԱՂԱՑՈՂ</p>
               <p className="text-xl font-black italic">ԷՌՆԵՍՏՈ</p>
             </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-white/10 px-6 py-1 rounded-full border border-white/20 flex items-center gap-3">
               <Target size={18} className="text-yellow-300 animate-pulse" />
               <span className="text-sm font-black uppercase tracking-widest leading-none">
                  ՄԻԱՎՈՐՆԵՐ՝ {score} / 15
               </span>
            </div>
          </div>

          <div className="hidden md:flex flex-col items-end">
             <p className="text-[10px] font-black uppercase text-orange-200 tracking-widest">ՄԱՐՏԱՀՐԱՎԵՐ</p>
             <p className="text-xl font-black italic uppercase">PODER (ԿԱՐՈՂԱՆԱԼ)</p>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-6xl w-full mx-auto p-4 md:p-8 flex flex-col relative z-10">
        <AnimatePresence mode="wait">
          {gameState === 'start' && (
            <motion.div 
              key="start"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex-1 flex flex-col items-center justify-center text-center space-y-12 py-10"
            >
              <div className="relative">
                <motion.div
                  animate={{ y: [0, -15, 0], rotate: [-2, 2, -2] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="bg-white p-6 rounded-[3rem] shadow-2xl border-8 border-orange-100"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=600" 
                    alt="Basketball Ernesto" 
                    className="w-80 h-80 object-cover rounded-[2rem] shadow-lg"
                  />
                  <div className="absolute -top-6 -right-6 bg-yellow-400 p-4 rounded-full shadow-xl border-4 border-white rotate-12">
                     <Star size={40} className="text-orange-950" />
                  </div>
                </motion.div>
                <div className="absolute -inset-10 bg-orange-500/20 rounded-full blur-[80px] -z-10" />
              </div>

              <div className="space-y-4 px-4 w-full">
                <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-tight text-orange-900 break-words drop-shadow-sm">
                   ԷՌՆԵՍՏՈՅԻ <span className="text-red-500 block">ԴԻՊՈՒԿ ՀԱՐՎԱԾԸ</span>
                </h1>
                <p className="text-orange-800/60 font-black uppercase text-sm tracking-[0.4em]">
                  BASKETBALL VERB PODER
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg">
                <button 
                  onClick={() => setGameState('theory')}
                  className="flex-1 py-6 bg-white border-4 border-orange-600 text-orange-900 rounded-[2rem] font-black text-xl uppercase tracking-widest hover:bg-orange-50 transition-all flex items-center justify-center gap-3 shadow-xl"
                >
                  <BookOpen size={28} /> ՏԵՍԱԿԱՆ
                </button>
                <button 
                  onClick={startGame}
                  className="flex-1 py-6 bg-orange-600 text-white rounded-[2rem] font-black text-xl uppercase tracking-widest hover:bg-orange-700 hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-2xl"
                >
                  <Flag size={28} /> ԽԱՂԱԼ
                </button>
              </div>
            </motion.div>
          )}

          {gameState === 'theory' && (
            <motion.div 
              key="theory"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8 py-8"
            >
              <div className="bg-white border-8 border-orange-100 p-8 md:p-14 rounded-[3rem] shadow-xl">
                 <h2 className="text-4xl md:text-5xl font-black text-orange-900 italic uppercase mb-12 flex items-center gap-5 border-b-4 border-orange-50 pb-6">
                    <Sparkles size={40} className="text-yellow-500" /> PODER ԲԱՅԻ ԳԱՂՏՆԻՔԸ
                 </h2>

                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {PODER_CONJUGATION.map((item, i) => (
                      <div key={i} className="bg-orange-50 p-6 rounded-[2rem] border-2 border-orange-100 hover:scale-105 transition-transform duration-300">
                        <p className="text-[10px] font-black uppercase text-orange-400 tracking-[0.2em] mb-2">{item.subject}</p>
                        <p className="text-3xl font-black text-orange-900">{item.conjugation}</p>
                        <p className="text-xs text-orange-950/30 font-bold mt-2 uppercase tracking-widest italic">{item.note}</p>
                      </div>
                    ))}
                 </div>

                 <div className="mt-12 p-8 bg-orange-600/5 rounded-[2.5rem] border-4 border-orange-600/20">
                    <h4 className="font-black text-orange-600 uppercase text-xs tracking-widest mb-4 flex items-center gap-3">
                       <Info size={20} /> ԷՌՆԵՍՏՈՅԻ ԴԱՍԸ՝
                    </h4>
                    <p className="text-orange-900 font-bold text-xl leading-relaxed italic">
                      "Poder" նշանակում է "կարողանալ": Այն արմատական փոփոխվող բայ է՝ <span className="text-red-500 underline decoration-wavy">O-ն դառնում է UE</span> բոլոր դեպքերում, բացի "Nosotros" և "Vosotros" ձևերից:
                    </p>
                 </div>
              </div>

              <button 
                onClick={startGame}
                className="w-full py-8 bg-orange-600 text-white rounded-[2.5rem] font-black text-2xl uppercase tracking-widest hover:bg-orange-700 transition-all shadow-2xl flex items-center justify-center gap-4"
              >
                ՊԱՏՐԱՍՏ ԵՄ ՀԱՐՎԱԾԻՆ <Target size={32} />
              </button>
            </motion.div>
          )}

          {gameState === 'playing' && (
            <motion.div 
              key="playing"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-1 flex flex-col gap-8 justify-center py-6"
            >
              <div className="bg-white p-6 md:p-14 rounded-[3rem] border-8 border-orange-100 shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 left-0 h-2 bg-yellow-400 transition-all duration-500" style={{ width: `${((currentIndex + 1) / 15) * 100}%` }} />
                 
                 <div className="flex items-center justify-between mb-8">
                    <div className="bg-orange-50 px-6 py-2 rounded-full border-2 border-orange-100 flex items-center gap-3">
                       <span className="text-2xl">{shuffledQuests[currentIndex]?.icon}</span>
                       <span className="text-sm font-black text-orange-900 uppercase tracking-widest">
                          {shuffledQuests[currentIndex]?.context}
                       </span>
                    </div>
                    <div className="text-2xl font-black text-orange-800/10 italic">SHOT #{currentIndex + 1}</div>
                 </div>

                 <p className="text-orange-900/30 font-black text-[10px] md:text-sm tracking-widest uppercase mb-4 text-center md:text-left">
                   ԹԱՐԳՄԱՆՈՒԹՅՈՒՆ՝ {shuffledQuests[currentIndex]?.translation}
                 </p>

                 <h2 className="text-2xl md:text-4xl font-black text-slate-800 leading-[1.3] uppercase italic mb-12 min-h-[120px] text-center md:text-left">
                   {shuffledQuests[currentIndex]?.sentence.split('____').map((part, i) => (
                     <React.Fragment key={i}>
                       {part}
                       {i < shuffledQuests[currentIndex]?.sentence.split('____').length - 1 && (
                         <span className={`inline-block border-b-8 mx-2 transition-all duration-300 px-4 min-w-[140px] text-center ${feedback ? (feedback === 'correct' ? 'text-green-600 border-green-500' : 'text-red-500 border-red-500') : 'text-orange-50 border-orange-100 border-dashed'}`}>
                           {feedback ? shuffledQuests[currentIndex].correct : '____'}
                         </span>
                       )}
                     </React.Fragment>
                   ))}
                 </h2>

                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {shuffledQuests[currentIndex]?.options.map((opt, i) => (
                      <button
                        key={i}
                        disabled={!!feedback}
                        onClick={() => handleAnswer(opt)}
                        className={`
                          py-6 px-4 rounded-[1.5rem] font-black text-xl italic uppercase transition-all duration-300 border-4
                          ${feedback && opt === shuffledQuests[currentIndex].correct 
                            ? 'bg-green-500 border-green-400 text-white shadow-xl scale-105 z-10' 
                            : feedback && opt !== shuffledQuests[currentIndex].correct
                              ? 'bg-slate-50 border-slate-100 text-slate-300 opacity-30 cursor-not-allowed'
                              : 'bg-white border-orange-100 text-orange-900 hover:border-orange-400 hover:bg-orange-50 shadow-md active:scale-95'
                          }
                        `}
                      >
                        {opt}
                      </button>
                    ))}
                 </div>
              </div>

              <AnimatePresence>
                {showExplanation && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-8 md:p-10 bg-orange-950 rounded-[3rem] text-white shadow-2xl flex flex-col md:flex-row items-center gap-8 relative overflow-hidden"
                  >
                     <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                     
                     <div className={`w-20 h-20 rounded-2xl flex items-center justify-center shrink-0 border-4 shadow-lg relative z-10 ${feedback === 'correct' ? 'bg-green-500 border-green-400 animate-bounce' : 'bg-red-500 border-red-400'}`}>
                        {feedback === 'correct' ? <ThumbsUp size={40} /> : <XCircle size={40} />}
                     </div>
                     <div className="flex-1 text-center md:text-left relative z-10">
                        <p className="text-yellow-400 font-black uppercase text-[10px] tracking-widest mb-2 opacity-60">ԷՌՆԵՍՏՈՅԻ ԲԱՑԱՏՐՈՒԹՅՈՒՆԸ</p>
                        <p className="text-xl md:text-2xl font-bold italic mb-8 leading-relaxed">"{shuffledQuests[currentIndex].explanation}"</p>
                        <button 
                          onClick={handleNext}
                          className="w-full md:w-auto bg-orange-500 text-white px-14 py-5 rounded-2xl font-black uppercase text-xl tracking-widest transition-all hover:bg-white hover:text-orange-950 shadow-xl flex items-center justify-center gap-4"
                        >
                           ՀԱՋՈՐԴ ՀԱՐՑԸ {currentIndex === 14 ? <Crown /> : <ArrowRight />}
                        </button>
                     </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {gameState === 'results' && (
            <motion.div 
              key="results"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex-1 flex flex-col items-center justify-center text-center space-y-12 py-10"
            >
              <div className="relative">
                 <motion.div 
                   animate={{ 
                    rotate: [0, 5, -5, 0],
                    y: [0, -10, 0]
                   }} 
                   transition={{ repeat: Infinity, duration: 4 }}
                   className={`w-64 h-64 md:w-80 md:h-80 rounded-[4rem] flex items-center justify-center mx-auto shadow-3xl bg-white border-8 border-orange-400`}
                 >
                    {score > 10 ? <Crown size={160} className="text-yellow-400 drop-shadow-xl" /> : <Trophy size={160} className="text-orange-500" />}
                 </motion.div>
                 <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-orange-600 text-white px-10 py-3 rounded-full font-black text-xl shadow-2xl border-2 border-orange-400">
                    {score > 10 ? "ԲԱՍԿԵՏԲՈԼԻ ԱՍՏՂ" : "ՄԱՐԶԻԿ"}
                 </div>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-6xl md:text-8xl font-black italic uppercase text-orange-900 tracking-tighter leading-none">
                  ԽԱՂՆ <span className="text-red-500 underline">ԱՎԱՐՏՎԵՑ</span>
                </h2>
                <div className="bg-white p-8 rounded-[2.5rem] border-4 border-orange-100 flex flex-col items-center gap-2 shadow-xl">
                    <p className="text-orange-800/30 font-black uppercase tracking-[0.4em] text-xs">ՎԵՐՋՆԱԿԱՆ ՀԱՇԻՎ</p>
                    <p className="text-8xl font-black text-orange-900">{score} <span className="text-4xl text-green-200">/ 15</span></p>
                </div>
              </div>

              <button 
                onClick={() => setGameState('start')}
                className="group px-16 py-8 bg-orange-600 text-white rounded-[2.5rem] font-black text-2xl uppercase tracking-widest hover:bg-orange-700 transition-all flex items-center justify-center gap-4 shadow-2xl active:scale-95"
              >
                <RotateCcw size={32} className="group-hover:rotate-180 transition-transform duration-700" /> ՆՈՐԻՑ ՍԿՍԵԼ
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="p-8 text-center opacity-30 mt-auto">
         <p className="text-[10px] font-black uppercase tracking-[0.5em] text-orange-900">
           ERNESTO BASKETBALL ARENA • VERB PODER CHALLENGE • 2026
         </p>
      </footer>
    </div>
  );
}
