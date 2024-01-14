import type { Meta, StoryFn } from "@storybook/react"
import { SearchIcon, CloudUploadIcon, PersonOutlineIcon } from "."

const iconButton = {
  title: "Atoms/IconButton",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    color: {
      control: { type: "string" },
      defaultValue: "",
      description: "아이콘 색상",
      table: {
        type: { summary: "ThemeColors" },
      },
    },
    backgroundColor: {
      control: { type: "color" },
      description: "배경 색상",
      table: {
        type: { summary: "string" },
      },
    },
    size: {
      control: { type: "number" },
      defaultValue: 24,
      description: "아이콘 크기",
      table: {
        type: { summary: "number" },
      },
    },
    onClick: {
      description: "onClick 이벤트 핸들러",
      table: {
        type: { summary: "function" },
      },
    },
  },
} satisfies Meta<typeof SearchIcon>

export default iconButton

const Template: StoryFn<typeof SearchIcon> = (args) => (
  <>
    <SearchIcon {...args} />
    <CloudUploadIcon {...args} />
    <PersonOutlineIcon {...args} />
  </>
)

export const Normal = Template.bind({})
