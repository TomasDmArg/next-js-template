import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

interface ProductCardProps {
    title: string;
    description: string;
    price: number;
    image: string;
    category: string;
    onAddToCart?: () => void;
}

export function ProductCard({
    title,
    description,
    price,
    image,
    category,
    onAddToCart,
}: Readonly<ProductCardProps>) {
    return (
        <Card className='w-full max-w-sm overflow-hidden'>
            <div className='relative h-48 w-full'>
                <Image src={image} alt={title} fill className='object-cover' />
            </div>
            <CardHeader>
                <div className='flex items-center justify-between'>
                    <CardTitle>{title}</CardTitle>
                    <Badge variant='secondary'>{category}</Badge>
                </div>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <p className='text-2xl font-bold'>${price.toFixed(2)}</p>
            </CardContent>
            <CardFooter>
                <Button className='w-full' onClick={onAddToCart}>
                    Add to Cart
                </Button>
            </CardFooter>
        </Card>
    );
}
