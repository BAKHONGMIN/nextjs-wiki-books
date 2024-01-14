import type { Meta, StoryObj } from "@storybook/react"
import TextArea from "./index"

const textArea = {
  title: "Atoms/TextArea",
  component: TextArea,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    placeholder: {
      control: { type: "text" },
      description: "플레이스홀더",
      table: {
        type: { summary: "string" },
      },
    },
    rows: {
      control: { type: "number" },
      defaultValue: 5,
      description: "행 수",
      table: {
        type: { summary: "number" },
      },
    },
    minRows: {
      control: { type: "number" },
      defaultValue: 5,
      description: "최소 행수",
      table: {
        type: { summary: "number" },
      },
    },
    maxRows: {
      control: { type: "number" },
      defaultValue: 10,
      description: "최대 행수",
      table: {
        type: { summary: "number" },
      },
    },
    hasError: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "변형 애러 플래그",
      table: {
        type: { summary: "boolean" },
      },
    },
    onChange: {
      description: "onChange 이벤트 핸들러",
      table: {
        type: { summary: "function" },
      },
    },
  },
} satisfies Meta<typeof TextArea>

export default textArea
type Story = StoryObj<typeof textArea>

export const Normal: Story = {}
export const Error: Story = {
  args: { hasError: true },
}
