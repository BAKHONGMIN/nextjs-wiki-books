import { Meta, StoryFn } from "@storybook/react"
import CheckBox from "."

export default {
  title: "Molecules/CheckBox",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: {
      control: { type: "text" },
      description: "표시라벨",
      table: { type: { summary: "text" } },
    },
    checked: {
      control: { type: "boolean" },
      description: "체크",
      table: { type: { summary: "number" } },
    },
    onChange: {
      control: { type: "function" },
      description: "값이 변화했을때의 이벤트 핸들러",
      table: {
        type: { summary: "function" },
      },
    },
  },
} satisfies Meta<typeof CheckBox>

const Template: StoryFn<typeof CheckBox> = (args) => <CheckBox {...args} />

export const WithLabel = Template.bind({})
WithLabel.args = { label: "label" }
