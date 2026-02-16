
import React from 'react';
import { RectangleConfig } from '../types';

interface PreviewProps {
  config: RectangleConfig;
}

const Preview: React.FC<PreviewProps> = ({ config }) => {
  // SVG implementation for pixel-perfect rendering
  return (
    <div className="flex flex-col items-center gap-6 animate-in fade-in duration-700">
      <div 
        className="relative bg-white shadow-2xl p-12 border border-slate-100 flex items-center justify-center min-h-[400px] min-w-[400px] rounded-2xl overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(45deg, #f8fafc 25%, transparent 25%),
            linear-gradient(-45deg, #f8fafc 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #f8fafc 75%),
            linear-gradient(-45deg, transparent 75%, #f8fafc 75%)
          `,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
        }}
      >
        <div
          style={{
            width: `${config.width}px`,
            height: `${config.height}px`,
            backgroundColor: config.color,
            borderRadius: `${config.borderRadius}px`,
            border: `${config.borderWidth}px solid ${config.borderColor}`,
            opacity: config.opacity / 100,
            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
          }}
          className="relative group"
        >
          {/* Dimension Labels */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            W: {config.width}px
          </div>
          <div className="absolute -left-12 top-1/2 -translate-y-1/2 -rotate-90 text-xs font-bold text-slate-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            H: {config.height}px
          </div>
        </div>
      </div>

      <div className="bg-slate-800 text-slate-200 px-6 py-4 rounded-xl font-mono text-sm shadow-xl max-w-full overflow-x-auto">
        <p className="text-slate-500 mb-1">// Generated CSS</p>
        <div className="space-y-1">
          <p><span className="text-blue-400">.rectangle</span> &#123;</p>
          <p className="pl-4"><span className="text-pink-400">width</span>: <span className="text-yellow-200">{config.width}px</span>;</p>
          <p className="pl-4"><span className="text-pink-400">height</span>: <span className="text-yellow-200">{config.height}px</span>;</p>
          <p className="pl-4"><span className="text-pink-400">background-color</span>: <span className="text-yellow-200">{config.color}</span>;</p>
          <p className="pl-4"><span className="text-pink-400">border-radius</span>: <span className="text-yellow-200">{config.borderRadius}px</span>;</p>
          <p className="pl-4"><span className="text-pink-400">border</span>: <span className="text-yellow-200">{config.borderWidth}px solid {config.borderColor}</span>;</p>
          <p className="pl-4"><span className="text-pink-400">opacity</span>: <span className="text-yellow-200">{config.opacity / 100}</span>;</p>
          <p>&#125;</p>
        </div>
      </div>
    </div>
  );
};

export default Preview;
