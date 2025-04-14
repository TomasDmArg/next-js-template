'use client';

import { AnimatePresence, motion } from 'framer-motion';

import { Navigation } from '../molecules/navigation';

interface MainLayoutProps {
    children: React.ReactNode;
}

export function MainLayout({ children }: Readonly<MainLayoutProps>) {
    return (
        <div className='min-h-screen bg-gray-50 overflow-x-hidden overflow-y-hidden'>
            <Navigation />

            <AnimatePresence mode='wait'>
                <motion.main
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className='container mx-auto px-4 py-8 mt-16'
                >
                    {children}
                </motion.main>
            </AnimatePresence>
        </div>
    );
}
