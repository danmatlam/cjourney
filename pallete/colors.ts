type IColor = {
    main: string;
    contrast: string;
};

export type IColorPalette = {
    app: IColor;
    fore: IColor;
    primary: IColor;
    secondary: IColor;

    info: IColor;
    error: IColor;
    success: IColor;
};

export type ITheme = {
    name: string;
    pallete: IColorPalette;
};

// Light Theme Palette

export const themes: ITheme[] = [
    {
        name: 'light',
        pallete: {
            app: { main: '#F2F2F7', contrast: '#000000' },
            fore: { main: '#FFFFFF', contrast: '#1D1D1F' },
            primary: { main: '#FA2D48', contrast: '#FFFFFF' },
            secondary: { main: '#000000', contrast: '#FFFFFF' },

            info: { main: '#0A84FF', contrast: '#FFFFFF' },
            success: { main: '#2FCF57', contrast: '#FFFFFF' },
            error: { main: '#FA2D48', contrast: '#FFFFFF' },
        },
    },
    {
        name: 'dark',
        pallete: {
            app: { main: '#0B132B', contrast: '#ffffff' },
            fore: { main: '#000000', contrast: '#F6F8FA' },
            primary: { main: '#5aeecb', contrast: '#0a0a0a' },
            secondary: { main: '#000000', contrast: '#FFFFFF' },
            info: { main: '#0A84FF', contrast: '#FFFFFF' },
            success: { main: '#2FCF57', contrast: '#FFFFFF' },
            error: { main: '#FA2D48', contrast: '#FFFFFF' },
        },
    },
];
