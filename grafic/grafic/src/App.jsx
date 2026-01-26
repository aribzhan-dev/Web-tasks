import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CostCurves = () => {
  // Jadvaldan olingan ma'lumotlar
  const data = [
    { Q: 1, FC: 75, VC: 52, TC: 127, AFC: 75, AVC: 52, ATC: 127, MC: 8 },
    { Q: 2, FC: 75, VC: 102, TC: 177, AFC: 37.5, AVC: 51, ATC: 88.5, MC: 50 },
    { Q: 3, FC: 75, VC: 137, TC: 212, AFC: 25, AVC: 45.67, ATC: 70.67, MC: 35 },
    { Q: 4, FC: 75, VC: 167, TC: 242, AFC: 18.75, AVC: 41.75, ATC: 60.5, MC: 30 },
    { Q: 5, FC: 75, VC: 202, TC: 277, AFC: 15, AVC: 40.4, ATC: 55.4, MC: 35 },
    { Q: 6, FC: 75, VC: 242, TC: 317, AFC: 12.5, AVC: 40.33, ATC: 52.83, MC: 40 },
    { Q: 7, FC: 75, VC: 287, TC: 362, AFC: 10.71, AVC: 41, ATC: 51.71, MC: 45 },
    { Q: 8, FC: 75, VC: 342, TC: 417, AFC: 9.37, AVC: 42.75, ATC: 52.13, MC: 55 },
    { Q: 9, FC: 75, VC: 407, TC: 482, AFC: 8.33, AVC: 45.22, ATC: 53.56, MC: 65 },
    { Q: 10, FC: 75, VC: 482, TC: 557, AFC: 7.5, AVC: 48.2, ATC: 55.7, MC: 75 }
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-xl border-2 border-indigo-200">
          <p className="font-bold text-indigo-900 mb-2">Объем: {label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }} className="text-sm font-semibold">
              {entry.name}: {typeof entry.value === 'number' ? entry.value.toFixed(2) : entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-4 drop-shadow-lg">
            Графики Анализа Издержек
          </h1>
          <p className="text-gray-300 text-lg">Визуализация экономических показателей производства</p>
        </div>
        
        {/* Первый график */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl p-8 mb-8 border border-purple-500/30 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              График 1: Общие Издержки
            </h2>
            <div className="flex gap-3">
              <span className="px-4 py-2 bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/50 rounded-lg text-red-300 text-sm font-semibold">FC</span>
              <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 border border-cyan-500/50 rounded-lg text-cyan-300 text-sm font-semibold">VC</span>
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/50 rounded-lg text-blue-300 text-sm font-semibold">TC</span>
            </div>
          </div>
          
          <ResponsiveContainer width="100%" height={450}>
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <defs>
                <linearGradient id="colorFC" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0.3}/>
                </linearGradient>
                <linearGradient id="colorVC" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.3}/>
                </linearGradient>
                <linearGradient id="colorTC" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.3}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
              <XAxis 
                dataKey="Q" 
                label={{ value: 'Объем производства (Q)', position: 'insideBottom', offset: -10, fill: '#9ca3af', fontSize: 14, fontWeight: 'bold' }}
                stroke="#6b7280"
                tick={{ fill: '#d1d5db' }}
              />
              <YAxis 
                label={{ value: 'Издержки', angle: -90, position: 'insideLeft', fill: '#9ca3af', fontSize: 14, fontWeight: 'bold' }}
                stroke="#6b7280"
                tick={{ fill: '#d1d5db' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                wrapperStyle={{ paddingTop: '30px' }}
                iconType="line"
                formatter={(value) => <span className="text-gray-200 font-semibold">{value}</span>}
              />
              <Line 
                type="monotone" 
                dataKey="FC" 
                stroke="#ef4444" 
                strokeWidth={4}
                name="Постоянные Издержки (FC)"
                dot={{ r: 6, fill: '#ef4444', strokeWidth: 2, stroke: '#fff' }}
                activeDot={{ r: 8, fill: '#ef4444', stroke: '#fff', strokeWidth: 3 }}
              />
              <Line 
                type="monotone" 
                dataKey="VC" 
                stroke="#06b6d4" 
                strokeWidth={4}
                name="Переменные Издержки (VC)"
                dot={{ r: 6, fill: '#06b6d4', strokeWidth: 2, stroke: '#fff' }}
                activeDot={{ r: 8, fill: '#06b6d4', stroke: '#fff', strokeWidth: 3 }}
              />
              <Line 
                type="monotone" 
                dataKey="TC" 
                stroke="#3b82f6" 
                strokeWidth={4}
                name="Общие Издержки (TC)"
                dot={{ r: 6, fill: '#3b82f6', strokeWidth: 2, stroke: '#fff' }}
                activeDot={{ r: 8, fill: '#3b82f6', stroke: '#fff', strokeWidth: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Второй график */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl p-8 mb-8 border border-purple-500/30 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              График 2: Средние и Предельные Издержки
            </h2>
            <div className="flex gap-3">
              <span className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/50 rounded-lg text-orange-300 text-sm font-semibold">AFC</span>
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-500/50 rounded-lg text-purple-300 text-sm font-semibold">AVC</span>
              <span className="px-4 py-2 bg-gradient-to-r from-pink-500/20 to-pink-600/20 border border-pink-500/50 rounded-lg text-pink-300 text-sm font-semibold">ATC</span>
              <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/50 rounded-lg text-green-300 text-sm font-semibold">MC</span>
            </div>
          </div>
          
          <ResponsiveContainer width="100%" height={450}>
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
              <XAxis 
                dataKey="Q" 
                label={{ value: 'Объем производства (Q)', position: 'insideBottom', offset: -10, fill: '#9ca3af', fontSize: 14, fontWeight: 'bold' }}
                stroke="#6b7280"
                tick={{ fill: '#d1d5db' }}
              />
              <YAxis 
                label={{ value: 'Издержки', angle: -90, position: 'insideLeft', fill: '#9ca3af', fontSize: 14, fontWeight: 'bold' }}
                stroke="#6b7280"
                tick={{ fill: '#d1d5db' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                wrapperStyle={{ paddingTop: '30px' }}
                iconType="line"
                formatter={(value) => <span className="text-gray-200 font-semibold">{value}</span>}
              />
              <Line 
                type="monotone" 
                dataKey="AFC" 
                stroke="#f97316" 
                strokeWidth={4}
                name="Средние Постоянные Издержки (AFC)"
                dot={{ r: 6, fill: '#f97316', strokeWidth: 2, stroke: '#fff' }}
                activeDot={{ r: 8, fill: '#f97316', stroke: '#fff', strokeWidth: 3 }}
              />
              <Line 
                type="monotone" 
                dataKey="AVC" 
                stroke="#a855f7" 
                strokeWidth={4}
                name="Средние Переменные Издержки (AVC)"
                dot={{ r: 6, fill: '#a855f7', strokeWidth: 2, stroke: '#fff' }}
                activeDot={{ r: 8, fill: '#a855f7', stroke: '#fff', strokeWidth: 3 }}
              />
              <Line 
                type="monotone" 
                dataKey="ATC" 
                stroke="#ec4899" 
                strokeWidth={4}
                name="Средние Общие Издержки (ATC)"
                dot={{ r: 6, fill: '#ec4899', strokeWidth: 2, stroke: '#fff' }}
                activeDot={{ r: 8, fill: '#ec4899', stroke: '#fff', strokeWidth: 3 }}
              />
              <Line 
                type="monotone" 
                dataKey="MC" 
                stroke="#10b981" 
                strokeWidth={4}
                name="Предельные Издержки (MC)"
                dot={{ r: 6, fill: '#10b981', strokeWidth: 2, stroke: '#fff' }}
                activeDot={{ r: 8, fill: '#10b981', stroke: '#fff', strokeWidth: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Информационные карточки */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-xl p-6 border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-cyan-300">Пояснения к графику 1</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold mt-1">•</span>
                <span><strong className="text-red-400">FC</strong> - Постоянные издержки (горизонтальная прямая линия)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold mt-1">•</span>
                <span><strong className="text-cyan-400">VC</strong> - Переменные издержки (возрастающая кривая)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 font-bold mt-1">•</span>
                <span><strong className="text-blue-400">TC</strong> - Общие издержки (сумма FC и VC)</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-xl p-6 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-purple-300">Пояснения к графику 2</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-orange-400 font-bold mt-1">•</span>
                <span><strong className="text-orange-400">AFC</strong> - Средние постоянные издержки (убывающая кривая)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-bold mt-1">•</span>
                <span><strong className="text-purple-400">AVC</strong> - Средние переменные издержки</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-400 font-bold mt-1">•</span>
                <span><strong className="text-pink-400">ATC</strong> - Средние общие издержки (U-образная форма)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 font-bold mt-1">•</span>
                <span><strong className="text-green-400">MC</strong> - Предельные издержки (пересекает AVC и ATC в минимумах)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Нижний блок с формулами */}
        <div className="mt-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-xl p-6 border border-indigo-500/30">
          <h3 className="text-xl font-bold text-indigo-300 mb-4 flex items-center gap-2">
            <span className="text-2xl">🔢</span>
            Основные формулы
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-300">
            <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
              <p className="font-mono text-cyan-400">TC = FC + VC</p>
              <p className="text-sm mt-1 text-gray-400">Общие издержки</p>
            </div>
            <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
              <p className="font-mono text-purple-400">AFC = FC / Q</p>
              <p className="text-sm mt-1 text-gray-400">Средние постоянные</p>
            </div>
            <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
              <p className="font-mono text-pink-400">AVC = VC / Q</p>
              <p className="text-sm mt-1 text-gray-400">Средние переменные</p>
            </div>
            <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
              <p className="font-mono text-orange-400">ATC = TC / Q</p>
              <p className="text-sm mt-1 text-gray-400">Средние общие</p>
            </div>
            <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
              <p className="font-mono text-green-400">MC = ΔTC / ΔQ</p>
              <p className="text-sm mt-1 text-gray-400">Предельные издержки</p>
            </div>
            <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
              <p className="font-mono text-blue-400">ATC = AFC + AVC</p>
              <p className="text-sm mt-1 text-gray-400">Альтернативная формула</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostCurves;