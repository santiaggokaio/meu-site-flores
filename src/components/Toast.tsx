import React, { useEffect } from 'react';

 type Props = {
   message: string;
   onClose: () => void;
 };

export default function Toast({ message, onClose }: Props) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded shadow-lg"
    >
      {message}
    </div>
  );
}
