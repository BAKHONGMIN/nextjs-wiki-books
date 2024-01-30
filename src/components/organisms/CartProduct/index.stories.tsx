import type { Meta, StoryObj } from "@storybook/react"
import imageFile from "../../../../images/sample/2.PNG"
import CartProduct from "."

export default {
  title: "Organisms/CartProduct",
  tags: ["autodocs"],
  component: CartProduct,
  argTypes: {
    id: {
      control: { type: "number" },
      description: "상품 ID",
      table: { type: { summary: "number" } },
    },
    title: {
      control: { type: "text" },
      description: "상품명",
      table: { type: { summary: "string" } },
    },
    imageUrl: {
      control: { type: "text" },
      description: "상품 이미지 URL",
      table: { type: { summary: "string" } },
    },
    price: {
      control: { type: "number" },
      description: "상품 가격",
      table: { type: { summary: "number" } },
    },
    onBuyButtonClick: {
      control: { type: "function" },
      description: "구입 버튼을 클릭했을 때의 이벤트 핸들러",
      table: { type: { summary: "function" } },
    },
    onRemoveButtonClick: {
      control: { type: "function" },
      description: "삭제 버튼을 클릭했을 때의 이벤트 핸들러",
      table: { type: { summary: "function" } },
    },
  },
} satisfies Meta<typeof CartProduct>

type Story = StoryObj<typeof CartProduct>

export const NiceShoes: Story = {
  args: {
    id: 1,
    imageUrl: imageFile,
    title: "멋진 책",
    price: 32000,
  },
}
