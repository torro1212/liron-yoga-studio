import { ContactInfo, FAQItem, Package, Service, Testimonial } from './types';

export const BUSINESS_NAME = "Liron Yoga Studio";
export const LOCATION = "שדרות אבא אבן 18, הרצליה";

export const IMAGES = {
  logo: "https://oeitonzscptlisblqtoc.supabase.co/storage/v1/object/public/project-assets/logos/LironYogaStudio/logo-generated-1764579763338-3.png",
  hero: "https://oeitonzscptlisblqtoc.supabase.co/storage/v1/object/public/project-assets/plan-1764577078489/gen-0-hero_background.png",
  about: "https://oeitonzscptlisblqtoc.supabase.co/storage/v1/object/public/project-assets/plan-1764577078489/gen-1-about_founder.png",
  vinyasa: "https://oeitonzscptlisblqtoc.supabase.co/storage/v1/object/public/project-assets/plan-1764577078489/gen-2-service_vinyasa.png",
  flexibility: "https://oeitonzscptlisblqtoc.supabase.co/storage/v1/object/public/project-assets/plan-1764577078489/gen-3-service_flexibility.png",
  private: "https://oeitonzscptlisblqtoc.supabase.co/storage/v1/object/public/project-assets/plan-1764577078489/gen-4-service_private.png",
  testimonialsBg: "https://oeitonzscptlisblqtoc.supabase.co/storage/v1/object/public/project-assets/plan-1764577078489/gen-9-testimonials_bg.png",
  ctaBg: "https://oeitonzscptlisblqtoc.supabase.co/storage/v1/object/public/project-assets/plan-1764577078489/gen-10-cta_background.png",
  gallery1: "https://oeitonzscptlisblqtoc.supabase.co/storage/v1/object/public/project-assets/plan-1764577078489/gen-5-gallery_1.png",
  gallery2: "https://oeitonzscptlisblqtoc.supabase.co/storage/v1/object/public/project-assets/plan-1764577078489/gen-6-gallery_2.png",
};

export const CONTACT: ContactInfo = {
  phone: "050-438-2661",
  email: "lirona2512@gmail.com",
  address: "שדרות אבא אבן 18, הרצליה",
  whatsapp: "https://wa.me/message/VWIITHRUBHPFT1",
  maps: "https://www.google.com/maps/place/?q=place_id:ChIJF7RNP0RJHRUR7lFKVHJYgyw",
  socials: {
    instagram: "https://www.instagram.com/liron_yoga",
    facebook: "https://www.facebook.com/lironyogapage/"
  }
};

export const SERVICES: Service[] = [
  {
    id: 'vinyasa',
    name: "ויניאסה יוגה",
    description: "תרגול דינמי המחבר בין תנועה לנשימה, לחיזוק הגוף והרגעת התודעה.",
    image: IMAGES.vinyasa,
    icon: "wind"
  },
  {
    id: 'flexibility',
    name: "אימוני גמישות",
    description: "שיעורים ממוקדים לשיפור טווחי תנועה, שפגאטים והקשתות גב בצורה בטוחה.",
    image: IMAGES.flexibility,
    icon: "activity"
  },
  {
    id: 'private',
    name: "אימון פרטי",
    description: "ליווי אישי אחד-על-אחד לדיוק התנועה והעמקת הגמישות בקצב שלך.",
    image: IMAGES.private,
    icon: "user"
  }
];

export const PACKAGES: Package[] = [
  {
    name: "שיעור ניסיון (Drop-in)",
    description: "כניסה חד פעמית לשיעור קבוצתי להיכרות עם הסטודיו",
    price: "₪80",
    isRecommended: false,
    features: ["שיעור קבוצתי מלא", "ציוד כלול", "ייעוץ ראשוני קצר"]
  },
  {
    name: "כרטיסייה 10 כניסות",
    description: "המסלול הגמיש והמומלץ למתרגלים קבועים",
    price: "₪750",
    isRecommended: true,
    features: ["תוקף ל-3 חודשים", "כניסה לכל סוגי השיעורים", "הזמנה נוחה באפליקציה", "הקפאה במקרה הצורך"]
  },
  {
    name: "אימון פרטי",
    description: "ליווי אישי אחד-על-אחד לדיוק התנועה",
    price: "צור קשר",
    isRecommended: false,
    features: ["בניית תוכנית אישית", "תיקונים מדוייקים", "גמישות בזמנים", "התאמה לפציעות/מגבלות"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    text: "לירון היא מורה מדהימה, קשובה ומקצועית מאוד. המקום הכי טוב בהרצליה לעבוד בו על גמישות!",
    author: "Google Reviewer",
    rating: 5
  },
  {
    text: "סטודיו מהמם עם אנרגיה נהדרת. השיעורים משלבים אתגר ורגיעה בצורה מושלמת.",
    author: "Google Reviewer",
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "האם השיעורים מתאימים למתחילים?",
    answer: "בהחלט. אנו מציעים שיעורים המותאמים לכל הרמות, עם הנחיות מדויקות ואפשרויות מודיפיקציה למתחילים."
  },
  {
    question: "מה צריך להביא לשיעור?",
    answer: "מומלץ להגיע בבגדים נוחים לאימון. יש בסטודיו מזרנים וציוד איכותי, אך ניתן להביא מזרן אישי אם מעדיפים."
  },
  {
    question: "איך נרשמים לשיעור ניסיון?",
    answer: "פשוט מאוד! לחצו על כפתור הוואטסאפ באתר ושלחו לנו הודעה לתיאום השיעור הראשון."
  },
  {
    question: "האם יש חניה באזור?",
    answer: "כן, ישנה חניה בשפע ברחובות הסמוכים ובחניונים באזור הרצליה פיתוח."
  }
];

export const COLORS = {
  primary: "#6B8E23", // Olive Green
  secondary: "#F5F5DC", // Beige
  text: "#333333",
  background: "#FFFFFF",
};
