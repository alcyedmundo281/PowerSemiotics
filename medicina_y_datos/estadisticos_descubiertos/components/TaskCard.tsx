import React from 'react';

interface TaskCardProps {
    icon: string;
    title: string;
    description: string;
    buttonText: string;
    colorTheme: 'teal' | 'emerald' | 'indigo' | 'amber' | 'purple';
    onButtonClick: () => void;
}

const colorStyles = {
    teal: {
        bg: 'bg-teal-500',
        hoverBg: 'bg-teal-600',
        iconBg: 'bg-teal-100',
        iconText: 'text-teal-600',
    },
    emerald: {
        bg: 'bg-emerald-500',
        hoverBg: 'bg-emerald-600',
        iconBg: 'bg-emerald-100',
        iconText: 'text-emerald-600',
    },
    indigo: {
        bg: 'bg-indigo-500',
        hoverBg: 'bg-indigo-600',
        iconBg: 'bg-indigo-100',
        iconText: 'text-indigo-600',
    },
    amber: {
        bg: 'bg-amber-500',
        hoverBg: 'bg-amber-600',
        iconBg: 'bg-amber-100',
        iconText: 'text-amber-600',
    },
    purple: {
        bg: 'bg-purple-500',
        hoverBg: 'bg-purple-600',
        iconBg: 'bg-purple-100',
        iconText: 'text-purple-600',
    },
};

const TaskCard: React.FC<TaskCardProps> = ({ icon, title, description, buttonText, onButtonClick, colorTheme }) => {
    const styles = colorStyles[colorTheme];

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="p-6 flex-grow">
                <div className={`w-16 h-16 rounded-full ${styles.iconBg} flex items-center justify-center mb-4`}>
                    <span className={`text-3xl ${styles.iconText}`}>{icon}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
            <div className="px-6 pb-6">
                <button
                    onClick={onButtonClick}
                    className={`w-full ${styles.bg} text-white font-bold py-3 px-4 rounded-lg hover:${styles.hoverBg} transition-colors duration-300`}
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default TaskCard;