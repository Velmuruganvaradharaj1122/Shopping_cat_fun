import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const Alert = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-20 right-4 bg-red-500 text-white px-6 py-4 rounded-lg shadow-lg z-50 animate-slideIn flex items-center space-x-3">
      <span className="font-semibold">{message}</span>
      <button onClick={onClose} className="hover:bg-red-600 p-1 rounded">
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Alert;