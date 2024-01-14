import type { StorybookConfig } from "@storybook/nextjs";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin"
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-styling",
    "@storybook/addon-postcss",
    "@storybook/addon-mdx-gfm"
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs : ['public'],
  babel : async options => ({
    ...options,
    plugins:[
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-private-methods",
      "@babel/plugin-proposal-private-property-in-object"
    ],
  }),
  async webpackFinal(config){
    if(config.resolve?.plugins){
      config.resolve.plugins = [
        new TsconfigPathsPlugin({
          configFile : path.resolve(__dirname, "../tsconfig.json")
        })
      ]
    }
    return config
  }
};
export default config;
