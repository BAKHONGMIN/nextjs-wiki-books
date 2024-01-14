import type { Meta, StoryFn } from "@storybook/react"
import imageFile from "../../../../images/sample/1.jpg"
import ScaleImage from "."

export default {
  title: "Atoms/ScaleImage",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    width: {
      control: { type: "number" },
      defaultValue: 320,
      description: "이미지 가로폭",
      table: { summary: "number" },
    },
    height: {
      control: { type: "number" },
      defaultValue: 320,
      description: "이미지 세로폭",
      table: { summary: "number" },
    },
    containerWidth: {
      control: { type: "number" },
      defaultValue: 320,
      description: "가로폭",
      table: { summary: "number" },
    },
    containerHeight: {
      control: { type: "number" },
      defaultValue: 320,
      description: "세로폭",
      table: { summary: "number" },
    },
    src: {
      control: { type: "text" },
      description: "이미지 URL",
      table: {
        type: { summary: "string" },
      },
    },
  },
} satisfies Meta<typeof ScaleImage>

const Template: StoryFn<typeof ScaleImage> = (args) => <ScaleImage {...args} />

export const Normal = Template.bind({})
Normal.args = {
  src: imageFile,
}
