import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@repro/shared"],

  // Matches tee-site's pattern — references files outside project root
  outputFileTracingIncludes: {
    "/api/inngest": ["../../packages/shared/**/*"],
  },
};

export default nextConfig;
