import type { Meta, StoryObj } from "@storybook/react"
import Footer from "."
export default {
  title: "Organisms/Footer",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  component: Footer,
} satisfies Meta<typeof Footer>

type Story = StoryObj<typeof Footer>
export const Standard: Story = {}
