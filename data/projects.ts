export const projects = {
  title: {
    fa: "پروژه‌ها",
    en: "Projects",
  },

  intro: {
    fa: "بخشی از پروژه‌هایی که در مسیر یادگیری و توسعه Front-End روی آن‌ها کار کرده‌ام.",
    en: "A selection of projects I have worked on throughout my Front-End development journey.",
  },

  projects: [
    {
      id: "1",
      featured: true,

      title: {
        fa: "شیپورچی",
        en: "Sheypoorchi",
      },

      type: {
        fa: "پروژه شخصی . با تمرکز بر Front-End",
        en: "Personal Project . Front-End Focused",
      },

      role: {
        fa: "توسعه‌دهنده Front-End",
        en: "Front-End Developer",
      },

      duration: {
        fa: "خرداد ۱۴۰۳ – دی ۱۴۰۳ · ۸ ماه",
        en: "Jun 2024 - Jan 2025 · 8 mos",
      },

      status: {
        fa: "تکمیل‌شده",
        en: "Completed",
      },

      description: {
        fa: "شیپورچی یک پلتفرم آگهی آنلاین است که با هدف تجربه و پیاده‌سازی یک اپلیکیشن واقعی‌تر با React توسعه داده شد. در این پروژه علاوه بر توسعه رابط کاربری و اتصال آن به API، با بخش‌هایی از توسعه سمت سرور و مدیریت داده نیز کار کردم.",

        en: "Sheypoorchi is a classifieds platform built as a hands-on project to explore the development of a more complete real-world application with React. Alongside building the front-end and connecting it to APIs, I also worked with parts of the backend and data management.",
      },

      responsibilities: {
        fa: [
          "توسعه رابط کاربری با React",
          "طراحی رابط واکنش‌گرا با Tailwind CSS",
          "اتصال Front-End به API",
          "پیاده‌سازی احراز هویت کاربران",
          "مدیریت و ایجاد آگهی‌ها",
          "آپلود و مدیریت تصاویر",
          "پیاده‌سازی سیستم چت",
          "توسعه API اختصاصی با Node.js و Express",
          "کار با MongoDB برای مدیریت داده‌ها",
        ],

        en: [
          "Built the user interface with React",
          "Created a responsive UI with Tailwind CSS",
          "Connected the Front-End to APIs",
          "Implemented user authentication",
          "Built ad creation and management features",
          "Implemented image upload and management",
          "Worked on the chat system",
          "Developed a custom API with Node.js and Express",
          "Worked with MongoDB for data management",
        ],
      },

      technologies: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Redux Toolkit",
        "React Query",
        "React Hook Form",
        "Zod",
        "Axios",
        "React Router",
        "Leaflet",
        "Socket.IO",
        "REST API",
        "Node.js",
        "Express",
        "MongoDB",
      ],

      links: [
        {
          id: "live",
          title: {
            fa: "مشاهده پروژه",
            en: "Live Demo",
          },
          url: "https://sheypoorchi.vercel.app/s/iran",
        },
        {
          id: "github",
          title: {
            fa: "گیت‌هاب",
            en: "GitHub",
          },
          url: "https://github.com/mrym-salimi-js/sheypoorchi",
        },
        {
          id: "linkedin",
          title: {
            fa: "پست لینکدین",
            en: "LinkedIn Post",
          },
          url: "https://www.linkedin.com/posts/maryam-salimi-03910524b_react-redux-webdevelopment-activity-7366774064398458881-_U0g?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3GHe0BzTqoLu6GMIi5H_SaHg938Jkv32Q",
        },
      ],

      images: [
        { id: 1, src: "/projects/sheypoorchi-home.png" },
        { id: 2, src: "/projects/sheypoorchi-dashboard.png" },
        { id: 3, src: "/projects/sheypoorchi-new-add.png" },
        { id: 4, src: "/projects/sheypoorchi-single.png" },
        { id: 5, src: "/projects/sheypoorchi-filter.png" },
      ],
    },
    {
      id: "2",
      featured: false,

      title: {
        fa: "زبان‌ابزار",
        en: "Language Tool",
      },

      type: {
        fa: "پروژه شخصی . در حال توسعه",
        en: "Personal Project . In Development",
      },

      role: {
        fa: "توسعه‌دهنده Front-End",
        en: "Front-End Developer",
      },

      duration: {
        fa: "آبان ۱۴۰۴ – تاکنون",
        en: "Nov 2025 – Present",
      },

      status: {
        fa: "در حال توسعه",
        en: "In Development",
      },

      description: {
        fa: "زبان‌ابزار یک وب‌اپلیکیشن در حال توسعه برای کار با محتوای متنی و یادگیری زبان است. ایده اصلی پروژه این است که کاربر بتواند محتوای متنی مانند PDF و تصویر را وارد کرده و از آن برای ساخت و مدیریت فلش‌کارت استفاده کند. در این پروژه تمرکزم بیشتر روی طراحی تجربه کاربری، پیاده‌سازی قابلیت‌های مختلف و کار با ابزارهای مدرن Front-End بوده است.",

        en: "Language Tool is a web application currently in development, focused on working with text content and language learning. The main idea is to allow users to import content such as PDFs and images and use it to create and manage flashcards. My main focus in this project has been on user experience, implementing different features, and exploring modern Front-End tools.",
      },

      responsibilities: {
        fa: [
          "توسعه رابط کاربری با Next.js و React",
          "استفاده از TypeScript برای توسعه ساختاریافته‌تر",
          "طراحی رابط واکنش‌گرا با Tailwind CSS",
          "استفاده از Shadcn UI برای ساخت کامپوننت‌های رابط کاربری",
          "پیاده‌سازی فرم‌ها و اعتبارسنجی با React Hook Form و Zod",
          "مدیریت State با Zustand",
          "کار با React Query برای مدیریت درخواست‌ها و داده‌های سمت سرور",
          "پیاده‌سازی قابلیت PWA",
          "کار با محتوای PDF و تصاویر",
          "پیاده‌سازی تقویم شمسی",
        ],

        en: [
          "Built the user interface with Next.js and React",
          "Used TypeScript for a more structured development experience",
          "Created a responsive UI with Tailwind CSS",
          "Used Shadcn UI for building interface components",
          "Implemented forms and validation with React Hook Form and Zod",
          "Managed client-side state with Zustand",
          "Worked with React Query for server-state and API management",
          "Implemented PWA capabilities",
          "Worked with PDF and image-based content",
          "Implemented a Persian calendar",
        ],
      },

      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn UI",
        "React Query",
        "Zustand",
        "React Hook Form",
        "Zod",
        "PWA",
      ],

      links: [
        {
          id: "live",
          title: {
            fa: "مشاهده پروژه",
            en: "Live Demo",
          },
          url: "",
        },
        {
          id: "github",
          title: {
            fa: "گیت‌هاب",
            en: "GitHub",
          },
          url: "",
        },
      ],

      images: [
        {
          id: 1,
          src: "/projects/zabanabzar-logo.png",
        },
      ],
    },
  ],
};
