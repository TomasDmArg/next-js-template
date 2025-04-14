'use client';

import { Terminal } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center p-4 md:p-8'>
            <nav className='w-full max-w-6xl mb-8'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-2xl font-bold'>Mi Tienda</h1>
                    <div className='flex gap-4'>
                        <Link href='/'>
                            <Button variant='ghost'>Inicio</Button>
                        </Link>
                        <Link href='/products'>
                            <Button variant='ghost'>Productos</Button>
                        </Link>
                    </div>
                </div>
            </nav>

            <Card className='w-full max-w-2xl mb-8'>
                <CardHeader>
                    <CardTitle className='text-2xl font-bold'>🚀 Next.js Boilerplate</CardTitle>
                    <CardDescription>This template comes pre-configured with:</CardDescription>
                    <ul className='mt-2 list-disc list-inside text-sm'>
                        <li>Next.js (App Router)</li>
                        <li>TypeScript</li>
                        <li>Tailwind CSS</li>
                        <li>ESLint & Prettier</li>
                        <li>Shadcn UI</li>
                        <li>Sonner (Toasts)</li>
                    </ul>
                </CardHeader>
                <CardContent className='space-y-4'>
                    <h3 className='text-lg font-semibold'>Component Examples:</h3>
                    <Alert>
                        <Terminal className='h-4 w-4' />
                        <AlertTitle>Shadcn UI Alert</AlertTitle>
                        <AlertDescription>
                            This is an example of a pre-rendered Alert component from Shadcn UI.
                        </AlertDescription>
                    </Alert>

                    <Button
                        variant='outline'
                        onClick={() =>
                            toast.success('Toast Success!', {
                                description: 'This toast notification uses Sonner.',
                                duration: 3000,
                            })
                        }
                    >
                        Show Success Toast
                    </Button>
                </CardContent>
            </Card>
        </main>
    );
}
