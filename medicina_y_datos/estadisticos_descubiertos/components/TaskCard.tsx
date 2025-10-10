import React from 'react';

type TaskCardProps = {
    icon: string;
    title: string;
    description: string;
    buttonText: string;
    colorTheme: 'teal' | 'emerald' | 'indigo' | 'amber' | 'purple';
    onButtonClick: () => void;
    isFeatured?: boolean;
};

const colorStyles = {
    teal: {
        bg: 'bg-teal-50',
        border: 'border-teal-200',
        button: 'bg-teal-500 hover:bg-teal-600',
        iconBg: 'bg-teal-100',
        title: 'text-teal-800',
        featuredButton: 'bg-white hover:bg-teal-50 text-teal-600',
    },
    emerald: {
        bg: 'bg-emerald-50',
        border: 'border-emerald-200',
        button: 'bg-emerald-500 hover:bg-emerald-600',
        iconBg: 'bg-emerald-100',
        title: 'text-emerald-800',
    },
    indigo: {
        bg: 'bg-indigo-50',
        border: 'border-indigo-200',
        button: 'bg-indigo-500 hover:bg-indigo-600',
        iconBg: 'bg-indigo-100',
        title: 'text-indigo-800',
    },
    amber: {
        bg: 'bg-amber-50',
        border: 'border-amber-200',
        button: 'bg-amber-500 hover:bg-amber-600',
        iconBg: 'bg-amber-100',
        title: 'text-amber-800',
    },
    purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        button: 'bg-purple-500 hover:bg-purple-600',
        iconBg: 'bg-purple-100',
        title: 'text-purple-800',
    },
};

const TaskCard: React.FC<TaskCardProps> = ({
    icon,
    title,
    description,
    buttonText,
    colorTheme,
    onButtonClick,
    isFeatured = false,
}) => {
    const styles = colorStyles[colorTheme];

    if (isFeatured) {
        return (
            <div className="flex flex-col md:flex-row items-center gap-8 w-full">
                <div className="text-6xl md:text-8xl">{icon}</div>
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-4xl font-extrabold text-teal-900">{title}</h3>
                    <p className="mt-4 text-lg text-teal-800">{description}</p>
                </div>
                <button
                    onClick={onButtonClick}
                    className={`mt-6 md:mt-0 self-center md:self-auto rounded-full px-8 py-4 text-lg font-bold shadow-lg transform hover:scale-105 transition-transform duration-300 ${styles.featuredButton}`}
                >
                    {buttonText}
                </button>
            </div>
        );
    }

    return (
        <div
            className={`rounded-xl border ${styles.border} bg-white p-8 flex flex-col h-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
        >
            <div className="flex items-center mb-5">
                <div
                    className={`rounded-full ${styles.iconBg} p-4 mr-5 flex-shrink-0 flex items-center justify-center`}
                >
                    <span className="text-3xl">{icon}</span>
                </div>
                <h3 className={`text-2xl font-bold ${styles.title}`}>{title}</h3>
            </div>
            <p className="text-gray-600 mb-8 flex-grow leading-relaxed">{description}</p>
            <button
                onClick={onButtonClick}
                className={`w-full py-3 px-5 rounded-lg text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${styles.button}`}
            >
                {buttonText}
            </button>
        </div>
    );
};

export default TaskCard;