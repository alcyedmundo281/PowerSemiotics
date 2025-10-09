import React, { useEffect } from 'react';

interface ModalProps {
    title: string;
    icon?: string;
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, icon, isOpen, onClose, children }) => {
    useEffect(() => {
        if (!isOpen) {
            return undefined;
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-40 flex items-center justify-center px-4 py-8 bg-slate-900/60 backdrop-blur-sm" role="dialog" aria-modal="true">
            <div className="relative max-w-3xl w-full bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400 rounded-full"
                    aria-label="Cerrar"
                >
                    ×
                </button>
                <div className="p-8 space-y-6">
                    <header className="flex items-center gap-3">
                        {icon && (
                            <span className="text-3xl" aria-hidden>
                                {icon}
                            </span>
                        )}
                        <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>
                    </header>
                    <div className="text-slate-700 leading-relaxed space-y-4">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
