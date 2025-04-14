import { ProductCard } from '@/components/molecules/ProductCard';

interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    category: string;
}

interface ProductListProps {
    products: Product[];
    onAddToCart?: (productId: string) => void;
}

export function ProductList({ products, onAddToCart }: Readonly<ProductListProps>) {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    image={product.image}
                    category={product.category}
                    onAddToCart={() => onAddToCart?.(product.id)}
                />
            ))}
        </div>
    );
}
