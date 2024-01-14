import Image, { ImageProps } from "next/image"
import { styled } from "styled-components"
import { toPropValue } from "../../../utils/styles"
import { Responsive } from "@/types"

type ScaleImageProps = Omit<ImageProps, "quality"> & {
  containerWidth?: Responsive<string>
  containerHeight?: Responsive<string>
}

const ScaleEffectImageContainer = styled.div<{
  width: Responsive<string>
  height: Responsive<string>
}>`
  overflow: hidden;
  ${({ width, theme }) => toPropValue("width", width, theme)}
  ${({ height, theme }) => toPropValue("height", height, theme)}
`

const ScaleEffectImage = styled(Image)`
  transition: transform 0.5s linear;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transition: scale(1, 1);
  }
`

/**
 * 스케일이미지
 */
const ScaleImage = ({
  containerWidth,
  containerHeight,
  alt, // 이 부분에서 alt를 받지 않도록 수정
  ...props
}: ScaleImageProps) => (
  <ScaleEffectImageContainer
    width={containerWidth ?? `${props.width}` ?? "320px"}
    height={containerHeight ?? `${props.height}` ?? "320px"}
  >
    <ScaleEffectImage
      quality="85"
      alt={alt ?? "Product Image"} // 이 부분에서 alt를 전달하도록 수정
      height={props.height ?? 320}
      width={props.width ?? 320}
      {...props}
    ></ScaleEffectImage>
  </ScaleEffectImageContainer>
)
export default ScaleImage
