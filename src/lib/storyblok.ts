import HeroBanner from '@/components/HeroBanner';
import { apiPlugin, storyblokInit } from '@storyblok/react';

const components = {
    HeroBanner: HeroBanner
}

storyblokInit({
    accessToken: process.env.PUBLIC_ACCESS_TOKEN,
    use: [apiPlugin],
    components,
    enableFallbackComponent: true,
    apiOptions: {
        region: 'eu',
    },
});