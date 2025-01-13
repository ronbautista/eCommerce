import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector) 
  .use(initReactI18next)
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
            'service.categories': 'Categories',
            'service.maintenance_repairs': 'Maintenance & Repairs',
            'service.maintenance_description': 'Expert plumbing services for all your needs.',
            'service.cleaning_sanitation': 'Cleaning & Sanitation',
            'service.cleaning_description': 'Professional cleaning services for homes and offices.',
            'service.renovation_improvement': 'Renovation and Improvement',
            'service.renovation_description': 'Home renovation services to enhance your living space.',
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
            'Su solución de referencia para servicios domésticos confiables entregados directamente a su puerta. Desde reparaciones hasta renovaciones, lo conectamos con trabajadores calificados de confianza para que las mejoras en el hogar no tengan problemas.',
            'service.categories': 'Categorías',
          'service.maintenance_repairs': 'Mantenimiento y Reparaciones',
          'service.maintenance_description': 'Servicios de fontanería expertos para todas sus necesidades.',
          'service.cleaning_sanitation': 'Limpieza y Saneamiento',
          'service.cleaning_description': 'Servicios de limpieza profesional para hogares y oficinas.',
          'service.renovation_improvement': 'Renovación y Mejora',
          'service.renovation_description': 'Servicios de renovación del hogar para mejorar su espacio vital.',
        
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
            'Votre solution de référence pour des services à domicile fiables livrés directement à votre porte. Des réparations aux rénovations, nous vous mettons en contact avec des travailleurs qualifiés de confiance pour faciliter lamélioration de votre maison.',
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
            'Ang iyong solusyon para sa maaasahang mga serbisyo sa bahay na inihahatid mismo sa iyong pintuan. Mula sa pagkukumpuni hanggang sa pagsasaayos, ikinonekta ka namin sa mga pinagkakatiwalaang skilled worker para gawing walang problema ang pagpapabuti ng bahay.',
        },
      },
      jp: {
        translation: {
          Search: '検索',
          Filter: 'フィルター',
          'Become a skilled worker': '熟練工になる',
          notification: '通知',
          Login: 'ログイン',
          Signup: 'サインアップ',
          Company: '会社',
          'About NestFix': 'NestFixについて',
          'Terms & Conditions': '利用規約',
          'Privacy Policy': 'プライバシーポリシー',
          'Help Center': 'ヘルプセンター',
          'Contact Us': 'お問い合わせ',
          Payment: '支払い',
          'Construction Retailer': '建設小売業者',
          'Follow Us': 'フォローしてください',
          NestFix: 'NestFix',
          'Your go-to solution for reliable home services':
            '信頼できるホームサービスを自宅までお届けするためのあなたの頼りになるソリューションです。修理から改装まで、信頼できる熟練工とつなぎ、家の改善を手間なく行えるようにします。',
          'service.categories': 'カテゴリ',
          'service.maintenance_repairs': 'メンテナンスと修理',
          'service.maintenance_description': 'すべてのニーズに対応する専門的な配管サービス。',
          'service.cleaning_sanitation': '清掃と衛生',
          'service.cleaning_description': '家庭やオフィス向けのプロフェッショナルな清掃サービス。',
          'service.renovation_improvement': '改装と改善',
          'service.renovation_description': '居住空間を向上させるための住宅改装サービス。',
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
