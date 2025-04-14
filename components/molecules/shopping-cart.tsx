'use client';

import { motion } from 'framer-motion';
import { Cancel01Icon, ShoppingCart01Icon } from 'hugeicons-react';

import { Button } from '@/components/ui/button';

import { Drawer } from './drawer';

interface CartItem {
    id: number;
    name: string;
    price: string;
    quantity: number;
}

interface ShoppingCartProps {
    isOpen: boolean;
    onClose: () => void;
    items: CartItem[];
    onRemoveItem: (id: number) => void;
}

export function ShoppingCart({
    isOpen,
    onClose,
    items,
    onRemoveItem,
}: Readonly<ShoppingCartProps>) {
    const total = items.reduce((sum, item) => {
        const price = parseFloat(item.price.replace('$', ''));
        return sum + price * item.quantity;
    }, 0);

    return (
        <Drawer isOpen={isOpen} onClose={onClose}>
            <div className='flex items-center gap-2 mb-4'>
                <ShoppingCart01Icon className='h-5 w-5' />
                <h2 className='text-lg font-semibold'>Carrito de Compras</h2>
            </div>

            <div className='space-y-4'>
                {items.length === 0 ? (
                    <p className='text-center text-gray-500'>Tu carrito está vacío</p>
                ) : (
                    <>
                        <div className='space-y-4'>
                            {items.map(item => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className='flex justify-between items-center p-2 bg-gray-50 rounded-lg'
                                >
                                    <div>
                                        <h3 className='font-medium'>{item.name}</h3>
                                        <p className='text-sm text-gray-500'>
                                            {item.price} x {item.quantity}
                                        </p>
                                    </div>
                                    <Button
                                        variant='ghost'
                                        size='icon'
                                        onClick={() => onRemoveItem(item.id)}
                                        className='rounded-full'
                                    >
                                        <Cancel01Icon className='h-4 w-4' />
                                    </Button>
                                </motion.div>
                            ))}
                        </div>

                        <div className='border-t pt-4'>
                            <div className='flex justify-between items-center mb-4'>
                                <span className='font-semibold'>Total:</span>
                                <span className='font-bold'>${total.toFixed(2)}</span>
                            </div>
                            <Button className='w-full'>Proceder al Pago</Button>
                        </div>
                    </>
                )}
            </div>
        </Drawer>
    );
}
