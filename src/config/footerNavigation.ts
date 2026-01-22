// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	address: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'LogiSeguros',
		aboutText:
			'En LogiSeguros, tenemos los mejores productos para tu retiro, educación de tus hijos, ahorro y salud. Te ayudamos a elegir lo que mejor se adapta a tu vida y a tu situación actual de forma que no sacrifiques tu estilo de vida actual.',
		logo: {
			src: '/logo.svg',
			alt: 'The tailwind astro theme',
			text: 'LogiSeguros'
		},
		address: 'Calle 123, Col. Centro, C.P. 12345, Ciudad de México, México',
	},
	footerColumns: [
		{
			category: 'Producto',
			subCategories: [
				{
					subCategory: 'Plan de Retiro',
					subCategoryLink: '/plan-personal-de-retiro'
				},
				{
					subCategory: 'Fondo de Ahorro',
					subCategoryLink: '/fondo-de-ahorro'
				},
				{
					subCategory: 'Fideicomiso Educativo',
					subCategoryLink: '/fideicomiso-educativo'
				},
				{
					subCategory: 'Blindaje Empresarial',
					subCategoryLink: '/blindaje-empresarial'
				},
				{
					subCategory: 'Fondo de Ahorro para Mujeres',
					subCategoryLink: '/fondo-de-ahorro-para-mujeres'
				},
				{
					subCategory: 'Consultoría Financiera',
					subCategoryLink: '/consultoría-financiera'
				}
			]
		},
		{
			category: 'Nosotros',
			subCategories: [
				{
					subCategory: 'Nosotros',
					subCategoryLink: '/'
				},
				{
					subCategory: 'Aviso de Privacidad',
					subCategoryLink: '/aviso-de-privacidad'
				},
				{
					subCategory: 'Términos y Condiciones',
					subCategoryLink: '/terminos-y-condiciones'
				}
			]
		},
		{
			category: 'Contáctanos',
			subCategories: [
				{
					subCategory: 'Contacto',
					subCategoryLink: '/contact'
				},
				{
					subCategory: 'Agenda tu Cita',
					subCategoryLink: '/agenda-tu-cita'
				},
			]
		}
	],
	subFooter: {
		copywriteText: '© LogiSeguros 2025-2026.'
	}
}
