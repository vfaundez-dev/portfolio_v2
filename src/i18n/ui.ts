export const language = {
    en: 'English',
    es: 'Spanish',
}

export const defaultLanguage = 'es';

const year = new Date().getFullYear();

export const ui = {
    en: {
      'nav.home': 'Home',
			'nav.profile': 'Profile',
			'nav.projects': 'Projects',
			'nav.skills': 'Skills',
			'nav.contact': 'Contact',
			'hero.subtitle': 'Full Stack Developer / IT Support',
			'hero.paragraph1': 'Transforming',
			'hero.paragraph2': 'into effective digital solutions and optimized processes.',
			'hero.buttonCV': 'Download my CV',
			'profile.title': 'About me',
			'profile.paragraph1': 'I am a fullstack developer and IT support specialist with experience in',
			'profile.paragraph2': 'PHP, Laravel, JavaScript and relational databases such as MySQL and SQL Server.',
			'profile.paragraph3': 'I have experience in RPA automations, data analysis and management, Linux server management and N1 and N2 customer service.',
			'profile.paragraph4': 'I have worked on web reporting projects, custom management systems (CRM, ERP, manufacturing, etc.) and process automation for the IT and E-Commerce area.',
			'profile.paragraph5': 'I combine my skills and experience to solve technological problems, ensure operational continuity and improve systems efficiency.',
			'projects.title': 'Projects',
			'projects.linkWeb': 'View Demo',
			'projects.linkGithub': 'View Github',
			'footer.message': `Designed and developed by me with Astro and TailwindCSS. ©${year} All rights reserved.`,
    },
    es: {
      'nav.home': 'Inicio',
			'nav.profile': 'Perfil',
			'nav.projects': 'Projectos',
			'nav.skills': 'Habilidades',
			'nav.contact': 'Contacto',
			'hero.subtitle': 'Desarrollador Fullstack / Soporte IT',
			'hero.paragraph1': 'Transformando',
			'hero.paragraph2': 'en soluciones digitales efectivas y procesos optimizados.',
			'hero.buttonCV': 'Descarga mi CV',
			'profile.title': 'Sobre mi',
			'profile.paragraph1': 'Soy desarrollador fullstack y especialista en soporte IT con experiencia en',
			'profile.paragraph2': 'PHP, Laravel, JavaScript y bases de datos relacionales como MySQL y SQL Server.',
			'profile.paragraph3': 'Tengo experiencia en automatizaciones RPA, análisis y gestión de datos, manejo de servidores Linux y atención al cliente N1 y N2.',
			'profile.paragraph4': 'He trabajado en proyectos de reportería web, sistemas de gestión a medida (CRM, ERP, manufactura, etc.) y automatizaciones de procesos para el área IT y E-Commerce.',
			'profile.paragraph5': 'Combino mis habilidades y experiencia para resolver problemas tecnológicos, garantizar la continuidad operativa y mejorar la eficiencia de los sistemas.',
			'projects.title': 'Projectos',
			'projects.linkWeb': 'Ver Demo',
			'projects.linkGithub': 'Ver Github',
			'footer.message': `Diseñado y desarrollado por mí con Astro y TailwindCSS. ©${year} Todos los derechos reservados.`,
    }
}