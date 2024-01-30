import type { Meta, StoryObj } from "@storybook/react"
import ProductForm from "."
export default {
  title: "Organisms/ProductForm",
  component: ProductForm,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    onProductSave: {
      description: "등록 버튼을 클릭했을 때의 이벤트 핸들러",
      table: { type: { summary: "function" } },
    },
  },
} satisfies Meta<typeof ProductForm>

type Story = StoryObj<typeof ProductForm>

export const Form: Story = {}
