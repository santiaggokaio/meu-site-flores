"use client";

import { useEffect } from "react";
import { XIcon } from "lucide-react";

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
      role="alert"
      aria-live="assertive"
      className="animate-fade-in fixed bottom-4 right-4 flex items-center overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg transition-opacity duration-300 ease-out"
    >
      <div className="shrink-0 bg-fuchsia-600 px-4 py-2">
        <svg
          className="size-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div className="flex-1 px-4 py-2 text-gray-800">{message}</div>
      <button
        onClick={onClose}
        aria-label="Fechar notificação"
        className="p-2 transition-colors duration-200 hover:bg-gray-100"
      >
        <XIcon className="size-5 text-gray-500 hover:text-gray-700" aria-hidden="true" />
      </button>
    </div>
  );
}
