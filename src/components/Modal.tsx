import React, { ReactNode, useEffect, useRef } from 'react';

 type Props = {
   isOpen: boolean;
   onClose: () => void;
   title: string;
   children: ReactNode;
 };

export default function Modal({ isOpen, onClose, title, children }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Trava scroll quando aberto
  useEffect(() => {
    if (isOpen) document.body.classList.add('overflow-hidden');
    else document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  // Fecha ao clicar fora do modal
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        isOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="bg-white rounded-lg overflow-hidden max-w-lg w-full"
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 id="modal-title" className="text-lg font-semibold">
            {title}
          </h2>
          <button onClick={onClose} aria-label="Fechar modal">
            ×
          </button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
 }
