// styled.d.ts
import 'styled-components';

import { ITheme } from 'styles';

declare module 'styled-components' {
    export type DefaultTheme = ITheme;
}
