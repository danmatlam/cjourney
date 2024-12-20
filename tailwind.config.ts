import type { Config } from 'tailwindcss';

export default {
    content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    'Inter',
                    'ui-sans-serif',
                    'system-ui',
                    'sans-serif',
                    'Apple Color Emoji',
                    'Segoe UI Emoji',
                    'Segoe UI Symbol',
                    'Noto Color Emoji',
                ],
            },
            fontSize: {
                s1: generateFontSize(14),
                s2: generateFontSize(18),
                s3: generateFontSize(21),
                s4: generateFontSize(24),
                s5: generateFontSize(27),
                s6: generateFontSize(30),
                's1-xs': generateFontSize(15 * 0.92),
                's2-xs': generateFontSize(18 * 0.92),
                's3-xs': generateFontSize(21 * 0.92),
                's4-xs': generateFontSize(24 * 0.92),
                's5-xs': generateFontSize(27 * 0.92),
                's6-xs': generateFontSize(30 * 0.92),
            },
            colors: {
                'app-main': 'var(--app-main)',
                'app-contrast': 'var(--app-contrast)',
                'fore-main': 'var(--fore-main)',
                'fore-contrast': 'var(--fore-contrast)',
                'primary-main': 'var(--primary-main)',
                'primary-contrast': 'var(--primary-contrast)',
                'secondary-main': 'var(--secondary-main)',
                'secondary-contrast': 'var(--secondary-contrast)',
                'info-main': 'var(--info-main)',
                'info-contrast': 'var(--info-contrast)',
                'success-main': 'var(--success-main)',
                'success-contrast': 'var(--success-contrast)',
                'error-main': 'var(--error-main)',
                'error-contrast': 'var(--error-contrast)',
            },
        },
    },
    plugins: [],
} satisfies Config;

function generateFontSize(fontSize: number): [string, { lineHeight: string }] {
    const lineHeight = Math.round(fontSize * 1.5);
    return [`${fontSize}px`, { lineHeight: `${lineHeight}px` }];
}
