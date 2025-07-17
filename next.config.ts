import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  resolve: {
    extensions: [".ts", ".js"],
    fallback: {
      "child_process": false,
      // and also other packages that are not found
    }
  }
};

export default nextConfig;
