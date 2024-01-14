import type { Meta, StoryFn } from "@storybook/react"
import BreadcrumbItem from "./index"

const breadcrumbItem = {
  title: "Atoms/BreadcrumbItem",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BreadcrumbItem>

export default breadcrumbItem

const Template: StoryFn<typeof breadcrumbItem> = () => (
  <div>
    <BreadcrumbItem>Item 1</BreadcrumbItem>
    <BreadcrumbItem>Item 2</BreadcrumbItem>
    <BreadcrumbItem>Item 3</BreadcrumbItem>
  </div>
)

export const Standard = Template.bind({})
