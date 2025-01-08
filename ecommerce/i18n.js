import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector) // Detect language from the browser
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          Search: 'Search',
          Filter: 'Filter',
          'Become a skilled worker': 'Become a skilled worker',
          notification: 'Notification',
          Login: 'Login',
          Signup: 'Signup',
          Company: 'Company',
          'About NestFix': 'About NestFix',
          'Terms & Conditions': 'Terms & Conditions',
          'Privacy Policy': 'Privacy Policy',
          'Help Center': 'Help Center',
          'Contact Us': 'Contact Us',
          Payment: 'Payment',
          'Construction Retailer': 'Construction Retailer',
          'Follow Us': 'Follow Us',
          NestFix: 'NestFix',
          'Your go-to solution for reliable home services':
            'Your go-to solution for reliable home services delivered right to your doorstep. From repairs to renovations, we connect you with trusted skilled workers to make home improvement hassle-free.',
        },
      },
      es: {
        translation: {
          Search: 'Buscar',
          Filter: 'Filtrar',
          'Become a skilled worker': 'Conviértete en un trabajador calificado',
          notification: 'Notificación',
          Login: 'Iniciar sesión',
          Signup: 'Registrarse',
          Company: 'Empresa',
          'About NestFix': 'Acerca de NestFix',
          'Terms & Conditions': 'Términos y condiciones',
          'Privacy Policy': 'Política de privacidad',
          'Help Center': 'Centro de ayuda',
          'Contact Us': 'Contáctenos',
          Payment: 'Pago',
          'Construction Retailer': 'Minorista de construcción',
          'Follow Us': 'Síguenos',
          NestFix: 'NestFix',
          'Your go-to solution for reliable home services':
            'Tu solución confiable para servicios del hogar',
        },
      },
      fr: {
        translation: {
          Search: 'Rechercher',
          Filter: 'Filtrer',
          'Become a skilled worker': 'Devenir un travailleur qualifié',
          notification: 'Notification',
          Login: 'Connexion',
          Signup: "S'inscrire",
          Company: 'Entreprise',
          'About NestFix': 'À propos de NestFix',
          'Terms & Conditions': 'Conditions générales',
          'Privacy Policy': 'Politique de confidentialité',
          'Help Center': "Centre d'aide",
          'Contact Us': 'Nous contacter',
          Payment: 'Paiement',
          'Construction Retailer': 'Détaillant en construction',
          'Follow Us': 'Suivez-nous',
          NestFix: 'NestFix',
          'Your go-to solution for reliable home services':
            'Votre solution fiable pour les services à domicile',
        },
      },
      fil: {
        translation: {
          Search: 'Maghanap',
          Filter: 'Salain',
          'Become a skilled worker': 'Maging bihasang manggagawa',
          notification: 'Abiso',
          Login: 'Mag-login',
          Signup: 'Mag-sign up',
          Company: 'Kumpanya',
          'About NestFix': 'Tungkol sa NestFix',
          'Terms & Conditions': 'Mga Tuntunin at Kundisyon',
          'Privacy Policy': 'Patakaran sa Pagkapribado',
          'Help Center': 'Sentro ng Tulong',
          'Contact Us': 'Makipag-ugnayan sa amin',
          Payment: 'Pagbabayad',
          'Construction Retailer': 'Tagabenta ng Konstruksyon',
          'Follow Us': 'Sundan Kami',
          NestFix: 'NestFix',
          'Your go-to solution for reliable home services':
            'Ang iyong maaasahang solusyon para sa mga serbisyo sa bahay',
        },
      },
    },
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // React handles escaping by default
    },
  });

export default i18n;
