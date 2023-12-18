import Checkbox from "@mui/material/Checkbox"
import { useForm, Controller, SubmitHandler } from "react-hook-form"

type MyFormData = {
  isChecked: boolean
}

export default function App() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<MyFormData>()

  const onSubmit: SubmitHandler<MyFormData> = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="isChecked"
        control={control}
        defaultValue={false}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <Checkbox onChange={onChange} value={value} />
        )}
      />
      {errors.isChecked && <label>체크해 주십시오.</label>}
      <input type="submit" />
    </form>
  )
}
