import Navbar from "@/components/Navbar";
import "../styles/main.scss";
import Top from "@/components/Top";
import Footer from "@/components/Footer";
import SubFooter from "@/components/SubFooter";

export const metadata = {
  metadataBase: new URL("https://kisakye-moses.vercel.app"),
  title: {
    default: "Kisakye Moses - | Software Developer In Kampala Uganda",
    template:
      "%s | Kisakye Moses - | Software Developer Kampala Uganda - Affordable Website Developer & Graphics Designer. ",
  },

  description:
    "Am Kisakye Moses a.k.a Uncle Moses, a leading software / website developer and graphics designer based in Kampala, Uganda. With a passion for creating visually stunning and user-friendly digital experiences, i specialize in crafting custom websites, designing captivating graphics, and implementing effective branding strategies. Kisakye Moses Is skilled as a developer and a graphics designer who utilizes cutting-edge technologies such as React, NextJs, NodeJs, NuxtJs, Vue, Php, Lalavel, HTML, CSS, JavaScript, PhotoShop, and  illustrator to bring your ideas to life. From responsive website design to engaging mobile app development, Kisakye Moses delivers tailored-made solutions that resonate with your target audience. Whether you need a captivating logo, eye-catching print materials, or a robust e-commerce platform, Kisakye Moses has got you covered. With a focus on user experience, search engine optimization, and digital marketing. Kisakye Moses ensures that your online presence stands out in the competitive landscape. Partner with me (Kisakye Moses a.k.a Uncle Moses) to transform your digital vision into reality and achieve success in the ever-evolving digital world. I am a reliable web designer in Kampala Uganda. Call me today 0770 981 193",

  keywords: [
    "Kisakye Moses",
    "Moses",
    "Kisakye",
    "Uncle Moses",
    "Typify Media",
    "Brand Rider",
    "Desishub",
    "Kisakye Moses",
    "Moses Kisakye",
    "Kisakye Moses LinkedIn",
    "Kisakye Moses Twitter",
    "Kisakye Moses Uganda",
    "Uncle Mo",
    "Website development",
    "website designer in Uganda",
    "website design company in Kampala",
    "Cheap website designer in Uganda",
    ".ug domain name registration Uganda",
    "website design",
    "Freelancers",
    "php Laravel Developer",
    "Coders",
    "Developers",
    "Web Designers",
    "Website Design",
    "graphic design website",
    "graphic design company",
    "graphic design crowd sourcing website",
    "Fliers Banners design Business Card design",
    "graphic design",
    "Web development",
    "graphic design websites",
    "freelance graphic design",
    "Graphics designer",
    "Graphics design",
    "Web Developer Forest Mall Lugogo",
    "Forest Mall Lugogo",
    "Web Developer Ntinda",
    "Web Developer Kireka",
    "Responsive design",
    "UI/UX design",
    "Front-end development",
    "Front-end developer",
    "Back-end development",
    "Back-end developer",
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "WordPress",
    "E-commerce",
    "Mobile app development",
    "Logo design",
    "Branding",
    "Digital marketing Kampala",
    "SEO optimization Kampala",
    "Social media marketing",
    "Content management system",
    "Web hosting",
    "Domain registration",
    "Website maintenance",
    "Custom web development",
    "CMS customization",
    "Print design",
    "Brochure design",
    "Business card design",
    "Flyer design",
    "Poster design",
    "Banner design",
    "Packaging design",
    "Label design",
    "Illustrative design",
    "Infographic design",
    "Motion graphics",
    "Animation",
    "Brand identity",
    "Logo branding",
    "Color palette",
    "Visual consistency",
    "Cross-browser compatibility",
    "Responsive images",
    "Website speed optimization",
    "Google Analytics",
    "Keyword research",
    "Digital strategy",
    "Online presence",
    "Creative solutions",
    "Art direction",
    "Photography",
    "Image editing",
    "Video editing",
    "Website templates",
    "Landing page design",
    "Call-to-action",
    "Lead generation",
    "Responsive email design",
    "Newsletter design",
    "Search engine optimization",
    "Local SEO",
    "Pay-per-click advertising",
    "Social media advertising",
    "Target audience",
    "Market research",
    "Competitor analysis",
    "Brand strategy",
    "Website security",
    "SSL certificate",
    "Mobile app design",
    "App prototyping",
    "Wire framing",
    "Icon design",
    "Usability testing",
    "E-commerce platforms",
    "Payment gateway integration",
    "Website accessibility",
    "CMS training",
    "Blog design",
    "Portfolio design",
    "Testimonials",
    "Customer reviews",
    "Client collaboration",
    "Project management",
    "Responsive navigation",
  ],

  authors: [
    {
      name: "Kisakye Moses A.K.A Uncle Moses",
      url: "https://kisakye-moses.vercel.app",
    },
  ],
  creator: "Kisakye Moses A.K.A Uncle Moses",
  publisher: "Kisakye Moses A.K.A Uncle Moses",
  openGraph: {
    title: "Kisakye Moses - Uncle Moses | Web Developer In Kampala Uganda",
    description:
      "Kisakye Moses AKA Uncle Moses: Your trusted website developer and graphics designer in Kampala, Uganda. I specialize in crafting stunning websites, captivating graphics, and effective branding solutions. Elevate your online presence with my expertise in UI/UX design, responsive development, and digital marketing strategies. Partner with me to create a powerful visual identity that leaves a lasting impression.",
    url: "https://kisakye-moses.vercel.app",
    siteName: "Kisakye Moses Website",
    images: [
      {
        url: "https://kisakye-moses.vercel.app/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Kisakye Moses | Og Image Alt",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    handle: "@bantu_creative",
    site: "@https://twitter.com/bantu_creative",
    cardType: "summary_large_image",
    title: "Kisakye Moses - Uncle Moses | Website Developer In Kampala Uganda",
    description:
      "Unlock the potential of your online presence with Kisakye Moses A.K.A Uncle Moses. Am a top-notch website developer and graphics designer in Kampala, Uganda. From stunning web design to captivating graphics, I deliver tailor-made solutions that leave a lasting impact. Let's bring your digital vision to life and stand out in the digital landscape.",
  },
  linkedin: {
    handle: "@Kisakye Moses",
    site: "@https://linkedin.com/kisakye-moses",
    cardType: "summary_large_image",
    title: "Kisakye Moses - Uncle Moses | Website Developer In Kampala Uganda",
    description:
      "Unlock the potential of your online presence with Kisakye Moses A.K.A Uncle Moses. Am a top-notch website developer and graphics designer in Kampala, Uganda. From stunning web design to captivating graphics, I deliver tailor-made solutions that leave a lasting impact. Let's bring your digital vision to life and stand out in the digital landscape.",
  },
  alternates: {
    canonical: "https://kisakye-moses.vercel.app",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        {/* <Top/> */}
        <Navbar />
        {children}
        {/* <Footer /> */}
        <SubFooter />
      </body>
    </html>
  );
}
