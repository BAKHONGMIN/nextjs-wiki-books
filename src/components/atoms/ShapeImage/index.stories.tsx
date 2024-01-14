import { Meta, StoryFn } from "@storybook/react"
import imageFile from "../../../../images/sample/1.jpg"
import ShapeImage from "./index"

export default {
  title: "Atoms/ShapeImage",
  argTypes: {
    shape: {
      options: ["circle", "square"],
      control: { type: "radio" },
      defaultValue: "square",
      description: "이미지 형태",
      table: {
        type: { summary: "circle | square" },
        defaultValue: { summary: "square" },
      },
    },
    src: {
      control: { type: "text" },
      description: "이미지 URL",
      table: {
        type: { summary: "string" },
      },
    },
    width: {
      control: { type: "number" },
      defaultValue: 320,
      description: "너비",
      table: {
        type: { summary: "number" },
      },
    },
    height: {
      control: { type: "number" },
      defaultValue: 320,
      description: "높이",
      table: {
        type: { summary: "number" },
      },
    },
  },
} as Meta<typeof ShapeImage>

const Template: StoryFn<typeof ShapeImage> = (args) => <ShapeImage {...args} />

export const Circle = Template.bind({})
Circle.args = {
  src: imageFile,
  shape: "circle",
  width: 320,
  height: 320,
  alt: "꼬부기",
  priority: false,
}

export const Square = Template.bind({})
Square.args = {
  src: imageFile,
  shape: "square",
  width: 320,
  height: 320,
  alt: "꼬부기",
  priority: false,
}
