// useProduct의 커스텀 훅을 구현합니다. SWR을 사용해 제품 API를 호출하고, 지정한 ID의 상품을 얻습니다.
// 반환값인 product는 상품, isLoading은 API호출 중 영부, isError는 API 호출중 에러 발생 여부를 표시합니다.
import useSWR from "swr"
import type { ApiContext, Product } from "@/types"

export type UseProductProps = {
  id: number
  initial?: Product
}

export type UseProduct = {
  product?: Product
  isLoading: boolean
  isError: boolean
}

const useProduct = (
  context: ApiContext,
  { id, initial }: UseProductProps,
): UseProduct => {
  const { data, error } = useSWR<Product>(
    `${context.apiRootUrl.replace(/\/$/g, "")}/products/${id}`,
  )

  return {
    product: data ?? initial,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useProduct
