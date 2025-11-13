import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import StudentMaterials from './StudentMaterials';

const StudentView: React.FC = () => (
    <>
        <Header />
        <main className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)] gap-10">
                <Sidebar />
                <div className="space-y-16">
                    <StudentMaterials />
                </div>
            </div>
        </main>
    </>
);

export default StudentView;