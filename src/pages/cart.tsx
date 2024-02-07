// 쇼핑 카트 페이지를 구현합니다. 이페이지는 카트에 추가된 상품을 표시,구입,삭제할 수 있습니다. 이페이지의 비즈니스
// 로직은 주로 컨테이너 컴포넌트인 CartContainer에 구현돼 잇습니다
// 컨테이너 컴포넌트인 CartConatiner는 카트에 있는 상품을 표시,구입, 삭제합니다. useAuthGuard의 커스텀
// 훅은 인증 가드로서, 인증하지 않은 사용자를 이 페이지에 도달하지 않도록 하는데 사용한다.
import { Box } from "@mui/material"
import type { NextPage } from "next"
import Link from "next/link"
import BreadcrumbItem from "@/components/atoms/BreadcrumbItem"
import Text from "@/components/atoms/Text"
import Flex from "@/components/layout/Flex"
import Breadcrumb from "@/components/molecules/Breadcrumb"
import Layout from "@/components/templates/Layout"
import CartContainer from "@/containers/CartContainer"
import { useAuthGuard } from "@/utils/hooks"

const CartPage: NextPage = () => {
  //인증가드
  useAuthGuard()

  return (
    <Layout>
      <Flex
        paddingTop={2}
        paddingBottom={2}
        paddingLeft={{ base: 2, md: 0 }}
        paddingRight={{ base: 2, md: 0 }}
        justifyContent="center"
      >
        <Box width="1240px">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link href="/">
                <a>톱</a>
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>카트</BreadcrumbItem>
          </Breadcrumb>
          <Box>
            <Text display="block" variant="large" as="h1">
              카트
            </Text>
            {/* 
                카트 컨테이너
                카트에 있는 상품을 표시, 구입, 삭제
            */}
            <CartContainer />
          </Box>
        </Box>
      </Flex>
    </Layout>
  )
}

export default CartPage
