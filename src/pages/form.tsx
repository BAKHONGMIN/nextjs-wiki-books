import { useForm, SubmitHandler } from "react-hook-form"

type MyFormData = {
  firstName: string
  lastName: string
  category: string
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MyFormData>()

  const onSubmit: SubmitHandler<MyFormData> = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("firstName", { required: true })}
        placeholder="이름"
      />
      {errors.firstName && <div>이름을 입력해 주십시오</div>}
      <input {...register("lastName", { required: true })} placeholder="성" />
      {errors.lastName && <div>성을 입력해 주십시오</div>}
      <select {...register("category", { required: true })}>
        <option value="">선택...</option>
        <option value="A">A</option>
        <option value="B">B</option>
      </select>
      {errors.category && <div>카테고리를 선택해 주십시오</div>}
      <input type="submit" />
    </form>
  )
}

export default Form
