/* eslint-env node */

const nextConfig = {
  // ⭐ GitHub Pages 必须使用静态导出
  output: "export",
  // ⭐ GitHub Pages 不支持 next/image 优化

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
    ],
  },

  // ⭐ GitHub Pages 路径配置：基于你的仓库名 dropthemasquerade/resume
  basePath: '',              // 如果你希望在根域名访问，就保持空
  assetPrefix: '',           // 同上

  // ⭐ 保留你原本的 webpack + ts loader patch
  webpack: config => {
    const oneOfRule = config.module.rules.find(rule => rule.oneOf);
    const tsRules = oneOfRule.oneOf.filter(rule => rule.test && rule.test.toString().includes('tsx|ts'));
    tsRules.forEach(rule => {
      rule.include = undefined;
    });
    return config;
  },

  compress: true,
  generateEtags: true,
  pageExtensions: ['tsx', 'mdx', 'ts'],
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
};

module.exports = nextConfig;