import type { Meta, StoryObj } from "@storybook/react"
import SigninForm from "."

export default {
  title: "Organisms/SigninForm",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  component: SigninForm,
  argTypes: {
    onSignin: {
      description: "로그인 버튼을 클릭했을 때의 이벤트 핸들러",
      table: { type: { summary: "function" } },
    },
  },
} satisfies Meta<typeof SigninForm>

type Story = StoryObj<typeof SigninForm>

export const Form: Story = {}
