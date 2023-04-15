import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = "Hi, I'm Nishay";
	const description = "Hey 👋 I'm Nishay, a developer";

	return {
		title,
		description,
		canonical: `https://nshmadhani.com/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'nshmadhani',
			url: `https://nshmadhani/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: 'https://nshmadhani/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		twitter: {
			cardType: 'summary_large_image',
			handle: '@thedesidegen',
			site: '@thedesigdegen',
		},
		...props,
	};
}
