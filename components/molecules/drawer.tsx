'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export function Drawer({ isOpen, onClose, children }: Readonly<DrawerProps>) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop with blur */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className='fixed inset-0 bg-black/30 backdrop-blur-md z-50 cursor-pointer'
                        onClick={onClose}
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className='fixed right-0 top-0 h-full w-80 bg-white shadow-lg z-50'
                    >
                        <div className='flex justify-end p-4'>
                            <Button
                                variant='ghost'
                                size='icon'
                                onClick={onClose}
                                className='rounded-full'
                            >
                                <X className='h-4 w-4' />
                            </Button>
                        </div>
                        <div className='p-4'>{children}</div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
