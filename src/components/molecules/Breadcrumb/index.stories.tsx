import type { Meta } from "@storybook/react"
import Breadcrumb from "."
import BreadcrumbItem from "@/components/atoms/BreadcrumbItem"

export default {
  title: "Molecules/Breadcrumb",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  component: Breadcrumb,
} satisfies Meta<typeof Breadcrumb>

export const Standard = () => (
  <Breadcrumb>
    <BreadcrumbItem>
      <a href="#">Top</a>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <a href="#">Clothes</a>
    </BreadcrumbItem>
    <BreadcrumbItem>Item</BreadcrumbItem>
  </Breadcrumb>
)
