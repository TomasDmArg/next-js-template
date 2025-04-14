import { ShoppingCart01Icon } from 'hugeicons-react';
import Image from 'next/image';

import { MainLayout } from '@/components/templates/main-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const products = [
    {
        id: 1,
        name: 'Producto Premium',
        description: 'La mejor solución para tus necesidades empresariales',
        price: '$99.99',
        image: '/placeholder.svg',
    },
    {
        id: 2,
        name: 'Producto Estándar',
        description: 'Solución perfecta para pequeñas empresas',
        price: '$49.99',
        image: '/placeholder.svg',
    },
    {
        id: 3,
        name: 'Producto Básico',
        description: 'Ideal para comenzar tu negocio',
        price: '$29.99',
        image: '/placeholder.svg',
    },
    {
        id: 4,
        name: 'Producto Exclusivo',
        description: 'Características avanzadas para profesionales',
        price: '$129.99',
        image: '/placeholder.svg',
    },
];

export default function ProductsPage() {
    return (
        <MainLayout>
            <div className='container mx-auto py-10'>
                <h1 className='text-4xl font-bold text-center mb-8'>Nuestros Productos</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {products.map(product => (
                        <Card key={product.id}>
                            <CardHeader>
                                <div className='relative h-48 w-full overflow-hidden mb-4'>
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className='object-cover'
                                    />
                                </div>
                                <CardTitle className='text-xl mt-4'>{product.name}</CardTitle>
                                <CardDescription>{product.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className='flex justify-between items-center'>
                                    <span className='text-2xl font-bold'>{product.price}</span>
                                    <Button>
                                        Comprar <ShoppingCart01Icon />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </MainLayout>
    );
}
