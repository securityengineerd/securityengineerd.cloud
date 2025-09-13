import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //     remotePatterns: [
  //       {
  //         protocol: 'https',
  //         hostname: 'skillicons.dev', // Replace with the hostname of your remote image source
  //         port: '', // Leave empty if no specific port is used
  //         pathname: '/**', // Adjust the path as needed, using wildcards for flexibility
  //       },
  //     ],
  // },
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default withMDX(nextConfig);
