import React, { useEffect } from 'react';
import { AlertCircle, X } from 'lucide-react';

const Alert = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-20 right-4 z-50 animate-slideUp">
      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded shadow-lg flex items-start gap-3 max-w-sm">
        <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
        <div className="flex-1">
          <p className="text-sm text-red-700 font-medium">{message}</p>
        </div>
        <button onClick={onClose} className="text-red-400 hover:text-red-600">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Alert;