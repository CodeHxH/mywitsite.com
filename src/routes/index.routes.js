const router = require('express').Router();

const projects = [
	{
		name: 'Wit Store',
		type: 'E-commerce',
		img: '/img/web01.png',
		link: 'https://wit-store.herokuapp.com/',
	},
	{
		name: 'E3 2021',
		type: 'Web',
		img: '/img/web02.png',
		link: 'https://witsite-e3.herokuapp.com/',
	},
	{
		name: 'Photo Album',
		type: 'Gallery',
		img: '/img/web03.png',
		link: 'https://codehxh.github.io/Galeria/',
	},
];

const pricing = [
	{
		title: 'Sitio web estándar',
		description:
			'Perfecto para sitios web personales o para pequeños emprendimientos.',
		price: '50.00$',
		before: '75.00$',
		less: 'AHORRA 50%',
		content: [
			'Hosting + dominio por un año',
			'Diseño personalizado',
			'Hasta 5 páginas dentro del sitio',
			'1 correo personalizado',
		],
	},
	{
		title: 'Tienda virtual premium',
		description: 'Recomendado para negocios pequeños y medianos.',
		price: '145.00$',
		before: '232.00$',
		less: 'AHORRA 60%',
		content: [
			'Hosting + dominio por un año',
			'Diseño personalizado',
			'Galería de productos',
			'Hasta 120 productos',
		],
	},
	{
		title: 'Software dedicado',
		description:
			'Programas o aplicaciones con el fin de optimizar procesos dentro de tu empresa.',
		price: 'Presupuesto',
		less: 'CONTÁCTANOS',
		content: [
			'Todos los requerimientos necesarios para la correcta ejecución del programa que necesitas.',
		],
		note: 'Depende de los requerimientos',
	},
];

// Routes
router.get('/', (req, res) => {
	res.render('index', { projects, pricing });
});

// Export the router
module.exports = router;
