/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withCss = require("@zeit/next-css");
const withPurgeCss = require("next-purgecss");

module.exports = withCss(withPurgeCss());

module.exports = nextConfig
