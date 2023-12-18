// 애플리케이션에서 사용되는 데이터 타입을 정의합니다. 사용자(User), 제품(Product), API 호출시 사용되는 콘텍스트의 타입
// 상품 카테고리
export type Category = "shoes" | "clothes" | "book"
//상품 상태
export type Condition = "new" | "used"

//사용자
export type User = {
  id: number
  username: string
  displayName: string
  email: string
  profileImageUrl: string
  description: string
}

//상품
export type Product = {
  id: number
  categroy: Category
  title: string
  description: string
  imageUrl: string
  blurDataUrl: string
  price: number
  condition: Condition
  owner: User
}

// API 콘텍스트
export type ApiContext = {
  apiRootUrl: string
}
