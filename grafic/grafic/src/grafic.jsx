import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CostCurves = () => {
  
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

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-50">
      <h1 className="text-3xl font-bold text-center mb-8 text-indigo-900">
        Графики Анализа Издержек
      </h1>
      
      
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-800">
          График 1: Общие Издержки (FC, VC, TC)
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis 
              dataKey="Q" 
              label={{ value: 'Объем (Q)', position: 'insideBottom', offset: -5 }}
              stroke="#666"
            />
            <YAxis 
              label={{ value: 'Издержки', angle: -90, position: 'insideLeft' }}
              stroke="#666"
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '8px' }}
            />
            <Legend 
              wrapperStyle={{ paddingTop: '20px' }}
            />
            <Line 
              type="monotone" 
              dataKey="FC" 
              stroke="#ff6b6b" 
              strokeWidth={3}
              name="Постоянные Издержки (FC)"
              dot={{ r: 5, fill: '#ff6b6b' }}
            />
            <Line 
              type="monotone" 
              dataKey="VC" 
              stroke="#4ecdc4" 
              strokeWidth={3}
              name="Переменные Издержки (VC)"
              dot={{ r: 5, fill: '#4ecdc4' }}
            />
            <Line 
              type="monotone" 
              dataKey="TC" 
              stroke="#45b7d1" 
              strokeWidth={3}
              name="Общие Издержки (TC)"
              dot={{ r: 5, fill: '#45b7d1' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-800">
          График 2: Средние и Предельные Издержки (AFC, AVC, ATC, MC)
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis 
              dataKey="Q" 
              label={{ value: 'Miqdor (Q)', position: 'insideBottom', offset: -5 }}
              stroke="#666"
            />
            <YAxis 
              label={{ value: 'Xarajat', angle: -90, position: 'insideLeft' }}
              stroke="#666"
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '8px' }}
            />
            <Legend 
              wrapperStyle={{ paddingTop: '20px' }}
            />
            <Line 
              type="monotone" 
              dataKey="AFC" 
              stroke="#f39c12" 
              strokeWidth={3}
              name="Средние Постоянные Издержки (AFC)"
              dot={{ r: 5, fill: '#f39c12' }}
            />
            <Line 
              type="monotone" 
              dataKey="AVC" 
              stroke="#9b59b6" 
              strokeWidth={3}
              name="Средние Переменные Издержки (AVC)"
              dot={{ r: 5, fill: '#9b59b6' }}
            />
            <Line 
              type="monotone" 
              dataKey="ATC" 
              stroke="#e74c3c" 
              strokeWidth={3}
              name="Средние Общие Издержки (ATC)"
              dot={{ r: 5, fill: '#e74c3c' }}
            />
            <Line 
              type="monotone" 
              dataKey="MC" 
              stroke="#27ae60" 
              strokeWidth={3}
              name="Предельные Издержки (MC)"
              dot={{ r: 5, fill: '#27ae60' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold text-lg mb-2 text-indigo-700">Пояснения к графику:</h3>
          <ul className="text-sm space-y-1 text-gray-700">
            <li>• <strong>FC</strong> - Постоянные издержки (прямая линия)</li>
            <li>• <strong>VC</strong> - Переменные издержки (возрастающие)</li>
            <li>• <strong>TC</strong> - Общие издержки (FC + VC)</li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold text-lg mb-2 text-indigo-700">Средние Издержки:</h3>
          <ul className="text-sm space-y-1 text-gray-700">
            <li>• <strong>AFC</strong> - Средние постоянные издержки (убывают)</li>
            <li>• <strong>AVC</strong> - Средние переменные издержки</li>
            <li>• <strong>ATC</strong> - Средние общие издержки (U-образная форма)</li>
            <li>• <strong>MC</strong> - Предельные издержки (точка пересечения)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CostCurves;