// import { Meta, StoryFn } from "@storybook/react"
// import Input from "./index"

// export default {
//   title: "Atoms/Input",
//   argTypes: {
//     placeholder: {
//       control: { type: "text" },
//       description: "플레이스홀더",
//       table: {
//         type: { summary: "string" },
//       },
//     },
//     hasBorder: {
//       control: { type: "boolean" },
//       defaultValue: true,
//       description: "보더 플래그",
//       table: {
//         type: { summary: "boolean" },
//       },
//     },
//     hasError: {
//       control: { type: "boolean" },
//       defaultValue: false,
//       description: "배리에이션 에러 플래그",
//       table: {
//         type: { summary: "boolean" },
//       },
//     },
//   },
// } as Meta<typeof Input>

// const Template: StoryFn<typeof Input> = (args) => <Input {...args} />

// export const Normal = Template.bind({})
// export const Error = Template.bind({})

// Error.args = { hasError: true }

import type { Meta, StoryObj } from "@storybook/react"
import Input from "./index"

const input = {
  title: "Atoms/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Input>

export default input
type Story = StoryObj<typeof input>

export const Normal: Story = {
  args: {
    placeholder: "입력해주세요",
    hasBorder: true,
    hasError: false,
  },
}

export const Error: Story = {
  args: {
    placeholder: "입력해주세요",
    hasBorder: true,
    hasError: true,
  },
}
