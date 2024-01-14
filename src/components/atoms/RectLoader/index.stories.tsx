import { Meta, StoryFn } from "@storybook/react"
import RectLoader from "./index"

const rectLoader = {
  title: "Atoms/RectLoader",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    width: {
      control: { type: "number" },
      defaultValue: 320,
      description: "가로폭",
      table: {
        type: { summary: "number" },
      },
    },
    height: {
      control: { type: "number" },
      description: "세로폭",
      defaultValue: 320,
      table: {
        type: { summary: "number" },
      },
    },
  },
} satisfies Meta<typeof RectLoader>
export default rectLoader

const Template: StoryFn<typeof rectLoader> = (args) => (
  <RectLoader width={320} height={320} {...args} />
)

export const Normal = Template.bind({})
