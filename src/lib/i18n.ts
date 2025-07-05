export const locales = ['en', 'zh-TW'] as const;
export const defaultLocale = 'en' as const;
export type Locale = (typeof locales)[number];

// Translation messages
export const messages = {
  en: {
    navigation: {
      home: "Home",
      projects: "Projects", 
      contact: "Contact",
      language: "Language"
    },
    home: {
      title: "I'm Nathaniel Edwin",
      subtitle1: "I'm FullStack Developer", 
      subtitle2: "I'm a Undergraduate Student",
      description: "Hi, I'm {name} — <span class='text-teal-400'>{role}</span>, currently in my 4th year studying <span class='text-blue-400'>Information Management</span> at Kunshan University, Tainan, Taiwan. I'm passionate about <span class='text-rose-400'>{industry}</span> and <span class='text-purple-400'>{field}</span>.",
      name: "Nathaniel Edwin",
      role: "a Full Stack Developer",
      industry: "Fintech industry",
      field: "Mobile development",
      myProject: "MyProject",
      myResume: "MyResume", 
      recentProjects: "My Recent Projects",
      viewMoreProjects: "View More Projects"
    },
    projects: {
      title: "My Projects",
      viewDetails: "View Details",
      about: "About",
      technologies: "Technologies", 
      website: "Website",
      visitProject: "Visit Project",
      backToProjects: "Back to Projects",
      discoverProjects: "Discover featured and new projects",
      crud: {
        title: "CRUD",
        description: "Product Store CRUD with Rate Limiting & Bot Detection"
      },
      ppiTainan: {
        title: "PPI Tainan", 
        description: "Dedicated my time to developing this project for the non-profit organization PPI Tainan, implementing best practices using only vanilla CSS and JavaScript, and achieving a Lighthouse score of over 90."
      },
      ppiStore: {
        title: "PPI Tainan Store",
        description: "Dedicated my time to developing this project for the non-profit organization PPI Tainan Store, focusing on mastering best practices using only vanilla CSS and JavaScript."
      },
      weatherApp: {
        title: "Simple Weather Android App", 
        description: "Just created a basic weather Android app and explored using the free API key from OpenWeatherMap for real-time weather data."
      }
    },
    contact: {
      title: "Contact Me",
      name: "Name",
      email: "Email", 
      message: "Message",
      namePlaceholder: "Your Name",
      emailPlaceholder: "you@example.com",
      messagePlaceholder: "Open to collaborations, freelance work, or a simple hello. . . .",
      sending: "Sending...",
      sendMessage: "Send Message",
      successMessage: "🎉 Thanks for reaching out! I'll get back to you soon."
    },
    footer: {
      copyright: "© {year} ThaNieL"
    }
  },
  'zh-TW': {
    navigation: {
      home: "首頁",
      projects: "專案",
      contact: "聯絡", 
      language: "語言"
    },
    home: {
      title: "我是 Nathaniel Edwin",
      subtitle1: "我是全端工程師",
      subtitle2: "我是大學生",
      description: "您好，我是 {name} — <span class='text-teal-400'>{role}</span>，目前就讀台南崑山科技大學<span class='text-blue-400'>資訊管理系</span>四年級。對<span class='text-rose-400'>{industry}</span> 與 <span class='text-purple-400'>{field}</span> 領域充滿熱忱。",
      name: "Nathaniel Edwin",
      role: "全端工程師",
      industry: "金融科技產業",
      field: "行動應用開發", 
      myProject: "我的專案",
      myResume: "我的履歷",
      recentProjects: "我的最新專案",
      viewMoreProjects: "查看更多專案"
    },
    projects: {
      title: "我的專案",
      viewDetails: "查看詳細內容",
      about: "關於專案",
      technologies: "使用技術",
      website: "網站連結", 
      visitProject: "查看專案",
      backToProjects: "返回專案",
      discoverProjects: "精選與最新專案",
      crud: {
        title: "CRUD管理系統",
        description: "具備流量限制與機器人偵測功能的商品CRUD管理系統"
      },
      ppiTainan: {
        title: "PPI台南官網",
        description: "為非營利組織PPI台南開發的網站，僅使用原生CSS與JavaScript實現最佳實踐，並獲得Lighthouse評分90分以上"
      },
      ppiStore: {
        title: "PPI台南線上商店", 
        description: "為非營利組織PPI台南開發的線上商店，專注於使用原生CSS與JavaScript實現最佳開發實踐"
      },
      weatherApp: {
        title: "Android天氣應用程式",
        description: "使用OpenWeatherMap免費API開發的基礎天氣應用程式，可獲取即時天氣資料"
      }
    },
    contact: {
      title: "聯絡我",
      name: "姓名",
      email: "電子信箱",
      message: "訊息內容",
      namePlaceholder: "請輸入姓名", 
      emailPlaceholder: "you@example.com",
      messagePlaceholder: "歡迎洽談合作、自由接案或簡單打招呼...",
      sending: "傳送中...",
      sendMessage: "送出訊息",
      successMessage: "🎉 感謝您的來訊！我會盡快回覆您。"
    },
    footer: {
      copyright: "© {year} ThaNieL"
    }
  }
} as const;