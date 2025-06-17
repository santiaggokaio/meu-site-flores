"use client";

import { ReactNode, useEffect, useRef, useCallback } from "react";
import { X } from "lucide-react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

export default function Modal({ isOpen, onClose, title, children }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Fecha ao clicar fora do modal
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        isOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    },
    [isOpen, onClose]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  // Trava scroll quando aberto
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      // Garantir que ele sempre seja removido ao desmontar
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  // Fecha ao pressionar Esc
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (isOpen && event.key === "Escape") {
        onClose();
      }
    },
    [isOpen, onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="mx-4 w-full max-w-lg rounded-2xl bg-white shadow-xl focus:outline-none"
        role="document"
      >
        <header className="flex items-center justify-between border-b p-6">
          <h2
            id="modal-title"
            className="text-2xl font-semibold text-gray-800"
          >
            {title}
          </h2>
          <button
            onClick={onClose}
            aria-label="Fechar modal"
            className="rounded-full p-2 transition hover:bg-gray-200"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </header>

        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
