import type { Meta, StoryObj } from "@storybook/react"
import BadgeIconButton from "."
import {
  PersonIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@/components/atoms/IconButton"

export default {
  title: "Molecules/BadgeIconButton",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  component: BadgeIconButton,
  argTypes: {
    icon: {
      control: { type: "object" },
      description: "아이콘",
      table: { type: { summary: "object" } },
    },
    badgeContent: {
      control: { type: "number" },
      description: "배지 카운터",
      table: { type: { summary: "number" } },
    },
    badgeBackgroundColor: {
      control: { type: "color" },
      description: "배지 배경 색상",
      table: { type: { summary: "string" } },
    },
  },
} satisfies Meta<typeof BadgeIconButton>

type Story = StoryObj<typeof BadgeIconButton>

export const SearchBadgeIcon: Story = {
  args: {
    icon: <SearchIcon size={24} />,
    badgeContent: 1,
    badgeBackgroundColor: "#ed9f28",
  },
}

export const PersonBadgeIcon: Story = {
  args: {
    icon: <PersonIcon size={24} />,
    badgeContent: 1,
    badgeBackgroundColor: "#d4001a",
  },
}

export const ShoppingCartBadgeIcon: Story = {
  args: {
    icon: <ShoppingCartIcon size={24} />,
    badgeContent: 1,
    badgeBackgroundColor: "#32bf00",
  },
}
