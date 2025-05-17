
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
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '2rem'
			},
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
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
				green: {
					50: '#f0fdf4',
					100: '#dcfce7',
					200: '#bbf7d0',
					300: '#86efac',
					400: '#4ade80',
					500: '#22c55e',
					600: '#16a34a',
					700: '#15803d',
					800: '#166534',
					900: '#14532d',
				},
				emerald: {
					DEFAULT: '#10b981',
					light: '#34d399',
					dark: '#059669'
				},
				charcoal: {
					DEFAULT: '#1e293b',
					light: '#334155',
					dark: '#0f172a'
				},
				purple: {
					50: '#faf5ff',
					100: '#f3e8ff',
					200: '#e9d5ff',
					300: '#d8b4fe',
					400: '#c084fc',
					500: '#a855f7',
					600: '#9333ea',
					700: '#7e22ce',
					800: '#6b21a8',
					900: '#581c87',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				'ibm-plex': ['"IBM Plex Sans"', 'sans-serif'],
				'manrope': ['Manrope', 'sans-serif'],
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'pulse': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.7'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' },
				},
				'bounce-subtle': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-2px)'
					}
				},
				'scale-subtle': {
					'0%, 100%': {
						transform: 'scale(1)'
					},
					'50%': {
						transform: 'scale(1.01)'
					}
				},
				'fadeIn': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fadeSlideIn': {
					'from': {
						opacity: '0',
						transform: 'translateX(10px)'
					},
					'to': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'fadeSlideUp': {
					'from': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'to': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'spin-slow': {
					'from': {
						transform: 'rotate(0deg)'
					},
					'to': {
						transform: 'rotate(360deg)'
					}
				},
				'ripple': {
					'0%': {
						transform: 'scale(0)',
						opacity: '1'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse': 'pulse 3s infinite',
				'float': 'float 6s ease-in-out infinite',
				'shimmer': 'shimmer 2.5s infinite linear',
				'bounce-subtle': 'bounce-subtle 3s ease-in-out infinite',
				'scale-subtle': 'scale-subtle 3s ease-in-out infinite',
				'fade-in': 'fadeIn 0.6s ease-out forwards',
				'fade-slide-in': 'fadeSlideIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
				'fade-slide-up': 'fadeSlideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
				'spin-slow': 'spin-slow 8s linear infinite',
				'ripple': 'ripple 1.5s cubic-bezier(0, 0.5, 0.5, 1) infinite'
			},
			boxShadow: {
				'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
				'glow': '0 0 15px rgba(16, 185, 129, 0.5)',
				'card': '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
				'card-hover': '0 20px 35px -10px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
				'intense': '0 20px 30px -10px rgba(0, 0, 0, 0.2), 0 0px 20px 0px rgba(0, 0, 0, 0.1)',
				'button': '0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.05)',
				'button-hover': '0 4px 8px rgba(0, 0, 0, 0.15), 0 8px 16px rgba(0, 0, 0, 0.1)',
				'input': 'inset 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1)'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-shimmer': 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0) 100%)',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			transitionProperty: {
				'width': 'width',
				'height': 'height',
				'spacing': 'margin, padding',
				'shadow': 'box-shadow'
			},
			screens: {
				'xs': '400px',
				'touch': { 'raw': '(hover: none)' },
				'pointer': { 'raw': '(hover: hover)' }
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
