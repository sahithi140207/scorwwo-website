import React, { useEffect } from 'react';

/**
 * Simple accessible modal with backdrop and enter/exit transitions.
 * Props:
 * - isOpen: boolean
 * - onClose: () => void
 * - title: string (optional)
 * - children: ReactNode
 */
export default function Modal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    if (isOpen) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative z-10 w-full max-w-3xl mx-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 scale-100">
          <div className="px-6 py-5 border-b">
            <div className="flex items-start justify-between gap-4">
              <div>
                {title && <h3 id="modal-title" className="text-lg font-semibold text-slate-900">{title}</h3>}
              </div>
              <div>
                <button
                  onClick={onClose}
                  aria-label="Close dialog"
                  className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white text-slate-700">{children}</div>
        </div>
      </div>
    </div>
  );
}
