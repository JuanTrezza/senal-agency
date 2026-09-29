import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  readonly message: string | null;
  readonly onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => {
      onClose();
    }, 4500);

    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 max-w-md bg-surface-container text-on-surface border-2 border-secondary-container p-4 shadow-[6px_6px_0px_var(--color-secondary-container)] animate-in fade-in slide-in-from-bottom-5 duration-200 flex items-start gap-3"
    >
      <CheckCircle2 className="w-5 h-5 text-secondary-container shrink-0 mt-0.5" aria-hidden="true" />
      <div className="flex-1 font-mono text-xs sm:text-sm leading-snug">
        {message}
      </div>
      <button
        type="button"
        onClick={onClose}
        className="text-on-surface hover:text-secondary-container transition-colors ml-2 cursor-pointer"
        aria-label="Cerrar notificación"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
