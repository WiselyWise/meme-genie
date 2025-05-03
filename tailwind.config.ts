
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				purple: {
					DEFAULT: "#7A5FFF",
					50: "#F0EDFF",
					100: "#E1DDFF",
					200: "#C3BBFF",
					300: "#A698FF",
					400: "#8877FF",
					500: "#7A5FFF",
					600: "#5C3FFF",
					700: "#3D1FFF",
					800: "#1F00FF",
					900: "#1900DB"
				},
				teal: {
					DEFAULT: "#00D1B2",
					50: "#E0FFF9",
					100: "#B3FFF3",
					200: "#80FFE9",
					300: "#4DFFE0",
					400: "#1AFFD6",
					500: "#00D1B2",
					600: "#00A991",
					700: "#008071",
					800: "#005850",
					900: "#003330"
				},
				coral: {
					DEFAULT: "#FF6B6B",
					50: "#FFF0F0",
					100: "#FFE1E1",
					200: "#FFC3C3",
					300: "#FFA5A5",
					400: "#FF8787",
					500: "#FF6B6B",
					600: "#FF3D3D",
					700: "#FF0F0F",
					800: "#E00000",
					900: "#B20000"
				},
				dark: {
					DEFAULT: "#121212",
					50: "#8C8C8C",
					100: "#7D7D7D",
					200: "#595959",
					300: "#363636",
					400: "#1F1F1F",
					500: "#121212",
					600: "#0D0D0D",
					700: "#080808",
					800: "#030303",
					900: "#000000"
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'2xl': '1rem',
				'3xl': '1.5rem',
				'4xl': '2rem',
			},
			fontFamily: {
				sans: ['DM Sans', 'sans-serif'],
			},
			letterSpacing: {
				tighter: '-0.05em',
				tight: '-0.025em',
				normal: '0',
				wide: '0.025em',
				wider: '0.05em',
				widest: '0.1em',
				custom: '-0.02em',
			},
			lineHeight: {
				custom: '1.4',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				pulse: {
					'0%, 100%': { opacity: 1 },
					'50%': { opacity: 0.7 },
				},
				shimmer: {
					'0%': { backgroundPosition: '-1000px 0' },
					'100%': { backgroundPosition: '1000px 0' },
				},
				blob: {
					'0%': {
						transform: 'translate(0px, 0px) scale(1)',
					},
					'33%': {
						transform: 'translate(30px, -50px) scale(1.1)',
					},
					'66%': {
						transform: 'translate(-20px, 20px) scale(0.9)',
					},
					'100%': {
						transform: 'translate(0px, 0px) scale(1)',
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				float: 'float 6s ease-in-out infinite',
				pulse: 'pulse 3s ease-in-out infinite',
				shimmer: 'shimmer 2s linear infinite',
				blob: 'blob 7s infinite',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'mesh-1': 'radial-gradient(at 40% 20%, hsla(253,100%,81%,0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(225,100%,76%,0.4) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(271,100%,77%,0.3) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(199,100%,85%,0.2) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(322,100%,77%,0.4) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(242,100%,70%,0.3) 0px, transparent 50%)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
