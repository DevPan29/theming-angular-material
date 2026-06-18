export interface ThemeScheme {
    readonly name: string;
    readonly value: string;
}

export const THEME_SCHEME: ThemeScheme[] = [
    {name: 'Light', value: 'light'},
    {name: 'Dark', value: 'dark'},
    {name: 'System', value: 'light dark'}
]