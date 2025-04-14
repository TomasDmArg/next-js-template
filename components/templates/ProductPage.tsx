import { ProductList } from '@/components/organisms/ProductList';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

interface ProductPageProps {
    products: {
        id: string;
        title: string;
        description: string;
        price: number;
        image: string;
        category: string;
    }[];
    categories: string[];
    onAddToCart: (productId: string) => void;
    onSearch: (query: string) => void;
    onCategoryChange: (category: string) => void;
}

export function ProductPage({
    products,
    categories,
    onAddToCart,
    onSearch,
    onCategoryChange,
}: Readonly<ProductPageProps>) {
    return (
        <div className='container mx-auto py-8'>
            <div className='mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
                <h1 className='text-3xl font-bold'>Our Products</h1>
                <div className='flex flex-col gap-4 sm:flex-row'>
                    <Input
                        type='text'
                        placeholder='Search products...'
                        className='max-w-xs'
                        onChange={e => onSearch(e.target.value)}
                    />
                    <Select onValueChange={onCategoryChange}>
                        <SelectTrigger className='w-[180px]'>
                            <SelectValue placeholder='Select category' />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value='all'>All Categories</SelectItem>
                            {categories.map(category => (
                                <SelectItem key={category} value={category}>
                                    {category}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <ProductList products={products} onAddToCart={onAddToCart} />
        </div>
    );
}
