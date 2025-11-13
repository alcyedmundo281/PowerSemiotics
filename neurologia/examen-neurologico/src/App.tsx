import React from 'react';
import StudentView from './components/StudentView';

const App: React.FC = () => {
    return (
        <div className="bg-slate-100 min-h-screen text-slate-800">
            <StudentView />
        </div>
    );
};

export default App;