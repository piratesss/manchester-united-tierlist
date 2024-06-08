import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Manchester United - Tier List',
    description: 'Reporters / Sources Tier List for Manchester United',
    icons: {
        icon: 'reddevil.png',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="bg-background px-2 xs:px-4 md:px-16 lg:px-[350px]">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
