
import React from 'react';
import { RectangleConfig } from '../types';

interface SidebarProps {
  config: RectangleConfig;
  onConfigChange: (newConfig: Partial<RectangleConfig>) => void;
  onReset: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ config, onConfigChange, onReset }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    onConfigChange({
      [name]: type === 'number' ? parseFloat(value) || 0 : value
    });
  };

  return (
    <aside className="w-full md:w-80 bg-white border-r border-slate-200 overflow-y-auto p-6 flex flex-col gap-6 sticky top-0 shadow-lg">
      <section>
        <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Dimensions</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-600">Width (px)</label>
            <input
              type="number"
              name="width"
              value={config.width}
              onChange={handleChange}
              min="0"
              max="2000"
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-600">Height (px)</label>
            <input
              type="number"
              name="height"
              value={config.height}
              onChange={handleChange}
              min="0"
              max="2000"
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Appearance</h2>
        <div className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-600">Fill Color</label>
            <div className="flex gap-2">
              <input
                type="color"
                name="color"
                value={config.color}
                onChange={handleChange}
                className="w-10 h-10 rounded-md border-none cursor-pointer"
              />
              <input
                type="text"
                name="color"
                value={config.color}
                onChange={handleChange}
                className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg uppercase text-sm font-mono"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-600">Corner Radius ({config.borderRadius}px)</label>
            <input
              type="range"
              name="borderRadius"
              min="0"
              max="200"
              value={config.borderRadius}
              onChange={handleChange}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-600">Opacity ({config.opacity}%)</label>
            <input
              type="range"
              name="opacity"
              min="0"
              max="100"
              value={config.opacity}
              onChange={handleChange}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Border</h2>
        <div className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-600">Border Color</label>
            <div className="flex gap-2">
              <input
                type="color"
                name="borderColor"
                value={config.borderColor}
                onChange={handleChange}
                className="w-10 h-10 rounded-md border-none cursor-pointer"
              />
              <input
                type="text"
                name="borderColor"
                value={config.borderColor}
                onChange={handleChange}
                className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg uppercase text-sm font-mono"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-600">Border Width ({config.borderWidth}px)</label>
            <input
              type="range"
              name="borderWidth"
              min="0"
              max="50"
              value={config.borderWidth}
              onChange={handleChange}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>
        </div>
      </section>

      <div className="mt-auto pt-6 flex flex-col gap-2">
        <button
          onClick={onReset}
          className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg transition-colors border border-slate-200"
        >
          Reset to Default
        </button>
        <button
          className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
          onClick={() => alert(`Dimensions: ${config.width}x${config.height}px`)}
        >
          Get Specs
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
