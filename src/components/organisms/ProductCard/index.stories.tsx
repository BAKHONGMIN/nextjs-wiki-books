import type { Meta, StoryObj } from "@storybook/react"
import bookUrl from "../../../../images/sample/2.PNG"
import ProductCard from "."

export default {
  title: "Organisms/ProductCard",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  component: ProductCard,
  argTypes: {
    title: {
      control: { type: "text" },
      description: "상품명",
      table: { type: { summary: "string" } },
    },
    price: {
      control: { type: "number" },
      description: "가격",
      table: { type: { summary: "number" } },
    },
    imageUrl: {
      control: { type: "text" },
      description: "상품 이미지 URL",
      table: { type: { summary: "string" } },
    },
    blurDataUrl: {
      control: { type: "text" },
      description: "상품의 흐릿한 이미지의 데이터 url 스킴",
      table: { type: { summary: "string" } },
    },
    variant: {
      options: ["listing", "small", "detail"],
      control: { type: "radio" },
      defaultValue: "listing",
      description: "변경(표시스타일)",
      table: {
        type: { summary: "listing | small | detail" },
        defaultValue: { summary: "primary" },
      },
    },
  },
} satisfies Meta<typeof ProductCard>

type Story = StoryObj<typeof ProductCard>

export const Listing: Story = {
  args: {
    variant: "listing",
    title: "멋진책",
    imageUrl: bookUrl,
    price: 2000,
  },
}

export const Small: Story = {
  args: {
    variant: "small",
    title: "멋진책",
    imageUrl: bookUrl,
    price: 2000,
  },
}

export const Detail: Story = {
  args: {
    variant: "detail",
    title: "멋진책",
    imageUrl: bookUrl,
    price: 2000,
  },
}
