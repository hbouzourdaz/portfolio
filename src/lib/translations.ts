// Translation keys for the application

type TranslationKeys = {
  skills: string;
  aboutMe: string;
  featuredProjects: string;
  workExperience: string;
  contactMe: string;
  freelanceDeveloper: string;
  bio: string;
  longBio: string;
  viewProject: string;
  // Projects
  projects: {
    title: string;
    description: string;
    tech: string;
    link: string;
  }[];
  // Experience
  experience: {
    role: string;
    company: string;
    duration: string;
    description: string;
    logo: string;
    link: string;
    images: string[];
  }[];
};

export const translations: Record<'ar' | 'en', TranslationKeys> = {
  ar: {
    skills: 'المهارات',
    aboutMe: 'نبذة عني',
    featuredProjects: 'المشاريع المميزة',
    workExperience: 'الخبرات العملية',
    contactMe: 'تواصل معي',
    freelanceDeveloper: 'أستاذ العلوم الفيزيائية ومطور ويب',
    bio: 'أنا حكيم بوزورداز، أستاذ رئيسي للعلوم الفيزيائية، حاصل على ماجستير في فيزياء الإشعاع، أقوم بتطوير مشاريع تعليمية وتقنية لمساعدة الطلاب والمعلمين.',
    longBio: 'أنا حكيم بوزورداز، أستاذ رئيسي للعلوم الفيزيائية بمتوسطة "Issighid Ali Beni Djemati" في سطيف، الجزائر منذ سبتمبر 2021. حاصل على ماجستير في فيزياء الإشعاع (2019) وليسانس في الفيزياء الأساسية (2021) من جامعة فرحات عباس سطيف 1. أتقن اللغات العربية بطلاقة، والفرنسية والإنجليزية بمستوى متوسط، والأمازيغية (الكابيلية). لدي خبرة في إدارة الفصول الدراسية، التقييم، وإعداد الاختبارات والتمارين. قمت بنشر أداة برمجية في ديسمبر 2021 لنمذجة ومحاكاة نواة مفاعل نووي صغير باستخدام وقود الثوريوم واليورانيوم. أتمتع بشغف كبير لدمج التكنولوجيا في التعليم وتطوير حلول مبتكرة تساهم في تحسين العملية التعليمية.',
    viewProject: 'عرض المشروع',
    projects: [
      {
        title: 'موقع إنشاء الفروض والاختبارات',
        description: 'منصة لإنشاء الفروض والاختبارات في العلوم الفيزيائية للتعليم المتوسط',
        tech: 'HTML/CSS',
        link: 'https://schoolhb.com',
      },
      {
        title: 'أداة محاكاة المفاعل النووي',
        description: 'أداة برمجية لنمذجة ومحاكاة نواة مفاعل نووي صغير باستخدام وقود الثوريوم واليورانيوم',
        tech: 'Python',
        link: 'https://github.com/HakimBouzourdaz/smr-simulation',
      },
      {
        title: 'خدمات البحث العلمي',
        description: 'حساب على Fiverr لتقديم خدمات البحث العلمي وتنسيق المستندات',
        tech: 'HTML/CSS',
        link: 'https://fiverr.com/hakimbouzourdaz',
      },
      {
        title: 'مشروع تعلم Next.js',
        description: 'مشروع شخصي لتعلم تطوير المواقع باستخدام Next.js وتطبيقه في المجال التعليمي',
        tech: 'React',
        link: 'https://github.com/HakimBouzourdaz/nextjs-learning',
      },
    ],
    experience: [
      {
        role: 'أستاذ رئيسي للعلوم الفيزيائية',
        company: 'متوسطة Issighid Ali Beni Djemati',
        duration: 'سبتمبر 2021 - الحالي',
        description: 'تدريس مادة العلوم الفيزيائية، إدارة الفصول الدراسية، إعداد الاختبارات والتمارين، وتطوير أساليب تعليمية مبتكرة.',
        logo: '/company.svg',
        link: '#',
        images: [],
      },
      {
        role: 'مطور أداة محاكاة المفاعل النووي',
        company: 'مشروع بحثي',
        duration: 'ديسمبر 2021',
        description: 'تطوير أداة برمجية لنمذجة ومحاكاة نواة مفاعل نووي صغير (SMR) باستخدام وقود الثوريوم واليورانيوم.',
        logo: '/company.svg',
        link: 'https://github.com/HakimBouzourdaz/smr-simulation',
        images: [
          '/devvault.png',
          '/devvault.png',
        ],
      },
      {
        role: 'باحث في فيزياء الإشعاع',
        company: 'جامعة فرحات عباس سطيف 1',
        duration: '2019',
        description: 'إجراء بحوث في مجال فيزياء الإشعاع كجزء من دراسة الماجستير.',
        logo: '/company.svg',
        link: '#',
        images: [
          '/devvault.png',
          '/devvault.png',
        ],
      },
    ],
  },
  en: {
    skills: 'Skills',
    aboutMe: 'About Me',
    featuredProjects: 'Featured Projects',
    workExperience: 'Work Experience',
    contactMe: 'Contact Me',
    freelanceDeveloper: 'Physics Teacher and Web Developer',
    bio: 'I am Hakim Bouzourdaz, a senior physical sciences teacher with a Master\'s in Radiation Physics, developing educational and technical projects to help students and teachers.',
    longBio: 'I am Hakim Bouzourdaz, a senior physical sciences teacher at "Issighid Ali Beni Djemati" Middle School in Sétif, Algeria since September 2021. I hold a Master\'s degree in Radiation Physics (2019) and a Bachelor\'s degree in Fundamental Physics (2021) from Ferhat Abbas University Sétif 1. I am fluent in Arabic, with intermediate proficiency in French and English, and I speak Kabyle (Tamazight). I have experience in classroom management, student evaluation, and exam preparation. In December 2021, I published a software tool for parametric modeling and simulation of a Small Modular Reactor core using Thorium-Uranium fuel. I am passionate about integrating technology in education and developing innovative solutions that contribute to improving the educational process.',
    viewProject: 'View Project',
    projects: [
      {
        title: 'Physics Exams Generator',
        description: 'Website for creating middle school Physics exams and assignments',
        tech: 'HTML/CSS',
        link: 'https://schoolhb.com',
      },
      {
        title: 'Nuclear Reactor Simulation Tool',
        description: 'Software tool for parametric modeling and simulation of a Small Modular Reactor core using Thorium-Uranium fuel',
        tech: 'Python',
        link: 'https://github.com/HakimBouzourdaz/smr-simulation',
      },
      {
        title: 'Research Services',
        description: 'Fiverr profile offering research writing and document formatting services',
        tech: 'HTML/CSS',
        link: 'https://fiverr.com/hakimbouzourdaz',
      },
      {
        title: 'Next.js Learning Project',
        description: 'Personal project for learning web development with Next.js and applying it to educational contexts',
        tech: 'React',
        link: 'https://github.com/HakimBouzourdaz/nextjs-learning',
      },
    ],
    experience: [
      {
        role: 'Full Stack Developer',
        company: 'Tech Innovators',
        duration: '2020 - Present',
        description: 'Lead developer for several high-impact projects, mentoring junior developers, and implementing best coding practices.',
        logo: '/company.svg',
        link: 'https://techinnovators.com',
        images: [],
      },
      {
        role: 'Frontend Developer',
        company: 'Web Solutions',
        duration: '2018 - 2020',
        description: 'Developed and maintained various client projects, focusing on responsive design and performance optimization.',
        logo: '/company.svg',
        link: 'https://websolutions.com',
        images: [
          '/devvault.png',
          '/devvault.png',
        ],
      },
      {
        role: 'Mobile App Developer',
        company: 'Startup Ventures',
        duration: '2016 - 2018',
        description: 'Assisted in web application development, gaining experience in agile methodologies and version control systems.',
        logo: '/company.svg',
        link: 'https://startupventures.com',
        images: [
          '/devvault.png',
          '/devvault.png',
        ],
      },
    ],
  },
};

export const useTranslations = (language: 'ar' | 'en') => {
  return translations[language];
};