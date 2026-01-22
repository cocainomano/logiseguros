// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'light' | 'dark' | 'auto'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'LogiSeguros',
	siteDescription:
		'En LogiSeguros, tenemos los mejores productos para tu retiro, educación de tus hijos, ahorro y salud. Te ayudamos a elegir lo que mejor se adapta a tu vida y a tu presupuesto, con marcas líderes y asesoría cercana.',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo.svg',
		alt: 'Foxi. logo'
	},
	canonical: true,
	noindex: false,
	mode: 'light',
	scrollAnimations: true
}
