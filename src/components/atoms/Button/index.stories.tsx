import { Meta, StoryObj } from "@storybook/react"
import React from "react"
import Button from "./index"

export default {
  title: "Atoms/Button",
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
    },
  },
} as Meta<typeof Button>
