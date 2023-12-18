import { DefaultTheme } from "styled-components"
import colors from "./colors"
import fontSizes from "./fontSizes"
import letterSpacings from "./lettterSpacings"
import lineHeights from "./lineHeight"
import space from "./space"

export const theme: DefaultTheme = {
  colors,
  fontSizes,
  letterSpacings,
  lineHeights,
  space,
} as const
