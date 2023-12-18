// @ts-ignore
import React from "react";
import {theme} from "../src/themes/index.ts"
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Preview } from '@storybook/react';
import { default as NextImage } from "next/image";




const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};



export const GlobalStyle = createGlobalStyle`
  html,
  body,
  textarea {
    padding: 0;
    margin: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  *{
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
    transition: .25s;
    color : #000000
  }
`

NextImage.defaultProps = {
  unoptimized: true,
};

export default preview;
