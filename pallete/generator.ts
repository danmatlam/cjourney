import * as fs from 'fs';
import * as path from 'path';
import { ITheme } from './colors';

function generateCSSVariables(themes: ITheme[]): string {
    let css = ':root {\n';

    themes.forEach((theme) => {
        css += `  /* ${theme.name.charAt(0).toUpperCase() + theme.name.slice(1)} Theme */\n`;

        Object.entries(theme.pallete).forEach(([key, value]) => {
            css += `  --${theme.name}-${key}-main: ${value.main};\n`;
            css += `  --${theme.name}-${key}-contrast: ${value.contrast};\n`;
        });

        css += '\n';
    });

    css += '}\n\n';

    // Generate theme-specific classes
    themes.forEach((theme) => {
        css += `.${theme.name}-theme {\n`;
        Object.entries(theme.pallete).forEach(([key]) => {
            css += `  --${key}-main: var(--${theme.name}-${key}-main);\n`;
            css += `  --${key}-contrast: var(--${theme.name}-${key}-contrast);\n`;
        });
        css += '}\n\n';
    });

    return css.trim();
}

// function generateThemeJSON(themes: ITheme[]): string {
//     const themeObject: { [key: string]: string } = {};

//     themes.forEach((theme) => {
//         Object.entries(theme.pallete).forEach(([key]) => {
//             themeObject[`${key}-main`] = `var(--${key}-main)`;
//             themeObject[`${key}-contrast`] = `var(--${key}-contrast)`;
//         });
//     });

//     return JSON.stringify(themeObject, null, 2);
// }

function writeFile(filePath: string, content: string): Promise<void> {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

async function main() {
    // Import themes from your constants file
    const { themes } = await import('./colors');

    const cssContent = generateCSSVariables(themes);
    // const jsonContent = generateThemeJSON(themes);

    const cssFilePath = path.join(__dirname, '/vars.css');
    // const jsonFilePath = path.join(__dirname, '/gen_tailwind_colors.json');

    try {
        await writeFile(cssFilePath, cssContent);

        // await writeFile(jsonFilePath, jsonContent);
    } catch (err) {
        console.error('Error writing files:', err);
    }
}

main();
