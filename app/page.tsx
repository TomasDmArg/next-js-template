'use client';

import { Terminal } from 'lucide-react';
import { toast } from 'sonner';

import { MainLayout } from '@/components/templates/main-layout';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
    return (
        <MainLayout>
            <main className='flex min-h-screen flex-col items-center p-4 md:p-8'>
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
        </MainLayout>
    );
}
