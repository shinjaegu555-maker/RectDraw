
import React, { useState, useCallback } from 'react';
import { RectangleConfig } from './types';
import Sidebar from './components/Sidebar';
import Preview from './components/Preview';
import Header from './components/Header';

const App: React.FC = () => {
  const [config, setConfig] = useState<RectangleConfig>({
    width: 300,
    height: 200,
    color: '#3b82f6',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#1d4ed8',
    opacity: 100,
  });

  const handleConfigChange = useCallback((newConfig: Partial<RectangleConfig>) => {
    setConfig(prev => ({ ...prev, ...newConfig }));
  }, []);

  const resetConfig = () => {
    setConfig({
      width: 300,
      height: 200,
      color: '#3b82f6',
      borderRadius: 8,
      borderWidth: 2,
      borderColor: '#1d4ed8',
      opacity: 100,
    });
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden text-slate-900">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          config={config} 
          onConfigChange={handleConfigChange} 
          onReset={resetConfig} 
        />
        <main className="flex-1 bg-slate-50 relative overflow-auto p-4 md:p-8 flex items-center justify-center">
          <Preview config={config} />
        </main>
      </div>
    </div>
  );
};

export default App;
