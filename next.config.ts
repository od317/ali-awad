import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
  images: {
    domains: ["plus.unsplash.com","images.unsplash.com","localhost","upload.wikimedia.org"], // Allow these domains
  },
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);