import type { Meta, StoryObj } from "@storybook/react"
import Badge from "./index"

const badge = {
  title: "Atoms/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    content: {
      control: { type: "text" },
      description: "배지 테스트",
      table: { summary: "string" },
    },
    backgroundColor: {
      control: { type: "color" },
      description: "배지 색상",
      table: {
        type: { summary: "string" },
      },
    },
  },
} satisfies Meta<typeof Badge>

export default badge
type Story = StoryObj<typeof badge>

export const Orange: Story = {
  args: {
    backgroundColor: "#ed9f28",
    content: "1",
  },
}

export const Green: Story = {
  args: {
    backgroundColor: "#32bf00",
    content: "1",
  },
}

export const Red: Story = {
  args: {
    backgroundColor: "#d4001a",
    content: "10",
  },
}
