document.addEventListener('DOMContentLoaded', function () {
    // Obtiene el interruptor y los elementos con atributos de idioma
    const languageSwitch = document.getElementById('languageSwitch');
    const elementsToTranslate = document.querySelectorAll('[data-lang]');

    // Define las traducciones
    const translations = {
        'en': {
            'home': 'Home',
            'contact': 'Contact',
            'aboutUs': 'About Us',
            'switchToSpanish': 'Switch to Spanish',
            'content': 'Discover the path to personalized learning with our innovative mobile application!',
            'explorePotential': 'Explore your potential: Immerse yourself in a world of knowledge with our wide range of specialized courses. From personal development to technical skills, we have something for everyone.',
            'personalizedTracking': 'Personalized tracking: Designed to adapt to your pace, our application provides personalized tracking for each student. Achieve your academic goals with a plan that fits you!',
            'connectWithExperts': 'Connect with experts: Gain exclusive access to our expert instructors. Learn from the best and receive valuable feedback to boost your growth.',
            'easyRegistration': 'Easy and fast registration: Forget about complicated processes. Our application offers a seamless registration experience. Just a few clicks to start your learning journey!',
            'customizablePlans': 'Customizable plans: Choose from a variety of plans tailored to your needs. From monthly subscriptions to annual packages, you\'ll find the perfect option for your budget.',
            'rewardsForLearning': 'Rewards for learning: Celebrate your achievements! Earn exclusive rewards as you progress in your courses. Learning has never been so rewarding!',
            'downloadNow': 'Download now and make learning a unique and personalized experience! Become the architect of your future with our leading education application. Join the knowledge revolution!',
            'developedBy': 'Developed by DevMinds ©',
            'pricingPlans': 'Pricing and Plans',
            'basicPlan': 'Basic Plan',
            'basicPlanDescription': 'Access to a selection of basic courses.',
            'standardPlan': 'Standard Plan',
            'standardPlanDescription': 'Access to a wide variety of standard courses.',
            'premiumPlan': 'Premium Plan',
            'premiumPlanDescription': 'Unlimited access to all premium courses.',
            'buyNow': 'Buy Now',
            'termsAndConditions': 'Terms and Conditions',
            'privacyPolicy': 'Privacy Policy',
            'contact': 'Contact',
            'termsConditionsContent': 'These are the terms and conditions of use of our application. By using our application, you agree to comply with these terms and conditions. Please read carefully before proceeding.',
            'usageOfApp': '1. Usage of the application: You agree to use the application only for legal purposes and in a manner that does not infringe on the rights of other users or violate the law.',
            'privacyInfo': '2. Privacy: We respect your privacy. Please refer to our Privacy Policy for information on how we collect, use, and protect your personal information.',
            'privacyPolicyContent': 'This is our privacy policy that describes how we collect, use, maintain, and disclose information collected from users of our application.',
            'infoCollected': '1. Information collected: We collect personal information you provide when registering in the application, as well as usage data while browsing the application.',
            'useOfInfo': '2. Use of information: We use the collected information to personalize your experience, improve our application, and send you relevant updates.' , 
            'aboutUsContent': `DevMinds was born as an ambitious school project framed in the context of a challenging course. A group of students passionate about education and technology came together with the goal of creating something unique and valuable.

            The inspiration for DevMinds arose from the belief that education can be more accessible,interactive, and meaningful. With this vision in mind, we started developing an online course platform that not only offered quality content but also fostered collaboration and collective learning.

            As the project progressed, each team member brought their unique expertise, contributing to the creation of an intuitive, student-centered platform. Challenges turned into learning opportunities, and DevMinds transformed into a space where creativity and knowledge merged.

            Today, DevMinds represents the result of the collective effort of a passionate team of students. Every course, every resource, and every interaction on the platform reflect a commitment to educational excellence.

            This school project has taught us beyond the classrooms, providing us with a unique experience of development, collaboration, and success. We are excited about the future of DevMinds and grateful for the opportunity to share our project with the educational community.`
            
        },
        'es': {
            'home': 'Inicio',
            'contact': 'Contacto',
            'aboutUs': 'Acerca de nosotros',
            'switchToSpanish': 'Switch to English',
            'content': '¡Descubre el camino hacia el aprendizaje personalizado con nuestra innovadora aplicación móvil!',
            'explorePotential': 'Explora tu potencial: Sumérgete en un mundo de conocimiento con nuestra amplia gama de cursos especializados. Desde desarrollo personal hasta habilidades técnicas, tenemos algo para todos.',
            'personalizedTracking': 'Seguimiento personalizado: Diseñado para adaptarse a tu ritmo, nuestra aplicación ofrece un seguimiento personalizado para cada estudiante. ¡Alcanza tus metas académicas con un plan que se ajusta a ti!',
            'connectWithExperts': 'Conéctate con expertos: Obtén acceso exclusivo a nuestros instructores expertos. Aprende de los mejores y recibe retroalimentación valiosa para potenciar tu crecimiento.',
            'easyRegistration': 'Inscripción fácil y rápida: Olvídate de los procesos complicados. Nuestra aplicación ofrece una experiencia de inscripción sin problemas. ¡Solo necesitas unos clics para empezar tu viaje de aprendizaje!',
            'customizablePlans': 'Planes personalizables: Elige entre una variedad de planes adaptados a tus necesidades. Desde suscripciones mensuales hasta paquetes anuales, encontrarás la opción perfecta para tu presupuesto.',
            'rewardsForLearning': 'Recompensas por el aprendizaje: ¡Celebra tus logros! Gana recompensas exclusivas a medida que avanzas en tus cursos. ¡El aprendizaje nunca ha sido tan gratificante!',
            'downloadNow': '¡Descarga ahora y haz del aprendizaje una experiencia única y personalizada! Conviértete en el arquitecto de tu futuro con nuestra aplicación líder en educación. ¡Únete a la revolución del conocimiento!',
            'developedBy': 'Desarrollado por DevMinds ©',
            'pricingPlans': 'Precios y Planes',
            'basicPlan': 'Plan Básico',
            'basicPlanDescription': 'Acceso a una selección de cursos básicos.',
            'standardPlan': 'Plan Estándar',
            'standardPlanDescription': 'Acceso a una amplia variedad de cursos estándar.',
            'premiumPlan': 'Plan Premium',
            'premiumPlanDescription': 'Acceso ilimitado a todos los cursos premium.',
            'buyNow': 'Comprar Ahora',
            'termsAndConditions': 'Términos y Condiciones',
            'privacyPolicy': 'Política de Privacidad',
            'contact': 'Contacto',
            'termsConditionsContent': 'Estos son los términos y condiciones de uso de nuestra aplicación. Al utilizar nuestra aplicación, usted acepta cumplir con estos términos y condiciones. Por favor, lea detenidamente antes de continuar.',
            'usageOfApp': '1. Uso de la aplicación: Usted se compromete a utilizar la aplicación solo con fines legales y de manera que no infrinja los derechos de otros usuarios ni viole la ley.',
            'privacyInfo': '2. Privacidad: Respetamos su privacidad. Consulte nuestra Política de Privacidad para obtener información sobre cómo recopilamos, utilizamos y protegemos su información personal.',
            'privacyPolicyContent': 'Esta es nuestra política de privacidad que describe cómo recopilamos, utilizamos, mantenemos y divulgamos la información recopilada de los usuarios de nuestra aplicación.',
            'infoCollected': '1. Información recopilada: Recopilamos información personal que usted proporciona al registrarse en la aplicación, así como datos de uso mientras navega por la aplicación.',
            'useOfInfo': '2. Uso de la información: Utilizamos la información recopilada para personalizar su experiencia, mejorar nuestra aplicación y enviarle actualizaciones relevantes.' ,
            'aboutUsContent': `DevMinds nació como un ambicioso proyecto escolar enmarcado en el contexto de una materia desafiante. Un grupo de estudiantes apasionados por la educación y la tecnología se unió con el objetivo de crear algo único y valioso.

            La inspiración para DevMinds surgió de la creencia de que la educación puede ser más accesible, interactiva y significativa. Con esta visión en mente, comenzamos a desarrollar una plataforma de cursos en línea que no solo ofreciera contenido de calidad, sino que también fomentara la colaboración y el aprendizaje colectivo.

            A medida que avanzaba el proyecto, cada miembro del equipo aportaba su experiencia única, contribuyendo a la creación de una plataforma intuitiva y centrada en el estudiante. Los desafíos se convirtieron en oportunidades de aprendizaje, y DevMinds se transformó en un espacio donde la creatividad y el conocimiento se fusionaron.

            Hoy, DevMinds representa el resultado del esfuerzo colectivo de un equipo apasionado de estudiantes. Cada curso, cada recurso y cada interacción en la plataforma reflejan el compromiso con la excelencia educativa.

            Este proyecto escolar nos ha enseñado más allá de las aulas, brindándonos una experiencia única de desarrollo, colaboración y éxito. Estamos emocionados por el futuro de DevMinds y agradecidos por la oportunidad de compartir nuestro proyecto con la comunidad educativa.`
        }
    };

    // Establece el idioma inicial (inglés)
    let currentLanguage = 'en';

    // Función para cambiar el idioma
    function toggleLanguage() {
        currentLanguage = currentLanguage === 'en' ? 'es' : 'en';

        // Itera sobre los elementos y actualiza su contenido según el idioma
        elementsToTranslate.forEach(element => {
            const key = element.dataset.lang;
            element.innerText = key ? translations[currentLanguage][key] : element.innerText;
        });
    }

    // Agrega un evento al interruptor para cambiar el idioma al hacer clic
    languageSwitch.addEventListener('change', toggleLanguage);

    // Inicializa los elementos con el idioma actual
    elementsToTranslate.forEach(element => {
        const key = element.dataset.lang;
        element.innerText = key ? translations[currentLanguage][key] : element.innerText;
    });
});
