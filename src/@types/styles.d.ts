import "styled-components";

import { defaultTheme } from "../styles/theme/default";

type TypeTheme = keyof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends TypeTheme {}
}
