'use client';

import { motion } from 'framer-motion';
import { Menu, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/components/ui/button';

import { Drawer } from './drawer';
import { ShoppingCart as ShoppingCartComponent } from './shopping-cart';

const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Productos', path: '/products' },
];

export function Navigation() {
    const pathname = usePathname();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Producto Premium', price: '$99.99', quantity: 1 },
        { id: 2, name: 'Producto Estándar', price: '$49.99', quantity: 2 },
    ]);

    const handleRemoveItem = (id: number) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='bg-white shadow-md fixed w-full top-0 z-50'
            >
                <div className='container mx-auto px-4'>
                    <div className='flex items-center justify-between h-16'>
                        <motion.div whileHover={{ scale: 1.05 }} className='text-xl font-bold'>
                            <Link href='/'>Logo</Link>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className='flex items-center gap-8'>
                            <motion.ul className='hidden md:flex space-x-8'>
                                {navItems.map(item => (
                                    <motion.li key={item.path}>
                                        <Link
                                            href={item.path}
                                            className={`relative px-3 py-2 ${
                                                pathname === item.path
                                                    ? 'text-blue-600'
                                                    : 'text-gray-600 hover:text-blue-600'
                                            }`}
                                        >
                                            {item.name}
                                            {pathname === item.path && (
                                                <motion.div
                                                    layoutId='activeNavItem'
                                                    className='absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600'
                                                />
                                            )}
                                        </Link>
                                    </motion.li>
                                ))}
                            </motion.ul>

                            {/* Cart Button */}
                            <Button
                                variant='ghost'
                                size='icon'
                                className='relative'
                                onClick={() => setIsCartOpen(true)}
                            >
                                <ShoppingCart className='h-6 w-6' />
                                {cartItems.length > 0 && (
                                    <span className='absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>
                                        {cartItems.length}
                                    </span>
                                )}
                            </Button>

                            {/* Mobile Menu Button */}
                            <Button
                                variant='ghost'
                                size='icon'
                                className='md:hidden'
                                onClick={() => setIsDrawerOpen(true)}
                            >
                                <Menu className='h-6 w-6' />
                            </Button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Drawer */}
            <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <div className='flex flex-col space-y-4'>
                    {navItems.map(item => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`text-lg ${
                                pathname === item.path
                                    ? 'text-blue-600'
                                    : 'text-gray-600 hover:text-blue-600'
                            }`}
                            onClick={() => setIsDrawerOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </Drawer>

            {/* Shopping Cart */}
            <ShoppingCartComponent
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                items={cartItems}
                onRemoveItem={handleRemoveItem}
            />
        </>
    );
}
