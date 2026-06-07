import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,
    output: 'export',
    basePath: process.env.NODE_ENV === 'production' ? '/utkarshutt2706' : '',
};

export default nextConfig;
