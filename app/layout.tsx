import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Jacob Troutman - Full-Stack Developer',
	description:
		'Welcome to my portfolio! I am a full-stack developer specializing in building scalable web applications with modern technologies like React, TypeScript, .NET, and Azure.',
	keywords: [
		'Jacob Troutman',
		'Full-Stack Developer',
		'Software Engineer',
		'Frontend Development',
		'Backend Development',
		'React',
		'Next.js',
		'C#',
		'.NET',
		'TypeScript',
		'SQL',
		'Azure',
		'AWS',
		'API Development',
		'Web Development',
		'Cloud Solutions',
	],
	authors: [{ name: 'Jacob Troutman' }],
	creator: 'Jacob Troutman',
	openGraph: {
		title: 'Jacob Troutman - Full-Stack Developer Portfolio',
		description:
			'Explore my projects and technical expertise in full-stack development, building complete web solutions from frontend interfaces to backend architecture.',
		url: 'https://your-portfolio-domain.com',
		siteName: 'Jacob Troutman - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Jacob Troutman - Full-Stack Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
