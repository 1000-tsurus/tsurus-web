import 'styled-components';
import { darkTheme as theme } from './theme';

export type Theme = typeof theme;

declare module 'styled-components' {
    export interface DefaultTheme extends Theme { }
}
