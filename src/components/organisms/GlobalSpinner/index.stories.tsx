import type { Meta } from "@storybook/react"
import GlobalSpinner from "."
import Button from "@/components/atoms/Button"
import GlobalSpinnerContextProvider, {
  useGlobalSpinnerActionContext,
} from "@/contexts/GlobalSpinnerContext"

export default {
  title: "organisms/GlobalSpinner",
} satisfies Meta<typeof GlobalSpinner>

export const WithContextProvider = () => {
  const ChildComponent = () => {
    const setGlobalSpinner = useGlobalSpinnerActionContext()
    const handleClick = () => {
      setGlobalSpinner(true)
      //5초후에 닫는다
      setTimeout(() => {
        setGlobalSpinner(false)
      }, 3000)
    }
    return (
      <>
        <GlobalSpinner />
        <Button onClick={handleClick}>스피너 표시</Button>
      </>
    )
  }
  return (
    <GlobalSpinnerContextProvider>
      <ChildComponent />
    </GlobalSpinnerContextProvider>
  )
}
