import React from 'react';

interface TaskCardProps {
    icon: string;
    title: string;
    description: string;
    buttonText: string;
    colorTheme: 'teal' | 'indigo' | 'amber' | 'purple';
    onButtonClick: () => void;
}

const colorClasses: Record<TaskCardProps['colorTheme'], string> = {
    teal: 'from-teal-500/10 via-teal-500/5 to-teal-500/10 border-teal-400/40 text-teal-700 hover:shadow-teal-200/60',
    indigo: 'from-indigo-500/10 via-indigo-500/5 to-indigo-500/10 border-indigo-400/40 text-indigo-700 hover:shadow-indigo-200/60',
    amber: 'from-amber-400/10 via-amber-400/5 to-amber-400/10 border-amber-300/40 text-amber-700 hover:shadow-amber-200/60',
    purple: 'from-violet-500/10 via-violet-500/5 to-violet-500/10 border-violet-400/40 text-violet-700 hover:shadow-violet-200/60',
};

const TaskCard: React.FC<TaskCardProps> = ({ icon, title, description, buttonText, colorTheme, onButtonClick }) => (
    <article
        className={`bg-gradient-to-br ${colorClasses[colorTheme]} border rounded-3xl p-6 shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl`}
    >
        <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl" aria-hidden>
                {icon}
            </span>
            <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed mb-6">{description}</p>
        <button
            type="button"
            onClick={onButtonClick}
            className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold px-4 py-2 rounded-full border border-slate-200 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400"
        >
            {buttonText}
            <span aria-hidden>→</span>
        </button>
    </article>
);

export default TaskCard;
