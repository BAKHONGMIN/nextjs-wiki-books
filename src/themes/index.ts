import { DefaultTheme } from "styled-components"
import colors from "./colors"
import fontSizes from "./fontSizes"
import letterSpacings from "./letterSpacings"
import lineheights from "./lineHeights"
import space from "./space"

export const theme: DefaultTheme = {
  space,
  fontSizes,
  letterSpacings,
  lineheights,
  colors,
} as const
