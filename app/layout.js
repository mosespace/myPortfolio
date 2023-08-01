import Navbar from "@/components/Navbar";
import "../styles/main.scss";
import Top from "@/components/Top";
import Footer from "@/components/Footer";
import SubFooter from "@/components/SubFooter";

export const metadata = {
  metadataBase: new URL("https://kisakye-moses.vercel.app"),
  title: {
    default: "Kisakye Moses - Uncle Moses | Developer In Kampala Uganda",
    template:
      "%s | Kisakye Moses - Uncle Moses | Developer Kampala Uganda - Affordable Website Developer & Graphics Designer. ",
  },

  description:
    "Welcome to Kisakye Moses Also Known as Uncle Moses, a leading website developer and graphics designer based in Kampala, Uganda. With a passion for creating visually stunning and user-friendly digital experiences, i specialize in crafting custom websites, designing captivating graphics, and implementing effective branding strategies. I am skilled as a developer and a graphics designer who utilizes cutting-edge technologies such as React, NextJs, NodeJs, NuxtJs, Vue, Php, Lalavel, HTML, CSS, JavaScript, and WordPress to bring your ideas to life. From responsive website design to engaging mobile app development, i deliver tailor-made solutions that resonate with your target audience. Whether you need a captivating logo, eye-catching print materials, or a robust e-commerce platform, i've got you covered. With a focus on user experience, search engine optimization, and digital marketing, i ensure that your online presence stands out in the competitive landscape. Partner with me (Kisakye Moses Also Known As Uncle Moses) to transform your digital vision into reality and achieve success in the ever-evolving digital world. I am a reliable web designer in Kampala Uganda. Call me today 0770 981 193",

  keywords: [
    "Uncle Moses",
    "Kisakye Moses",
    "Typify Media",
    "Brand Rider",
    "Desishub",
    "printbroug",
    "printbro ug",
    "printbro",
    "ivan aluho",
    "printbro uganda",
    "Website development",
    "website designer in Uganda",
    "website design company in Kampala",
    "Cheap website designer in Uganda",
    ".ug domain name registration Uganda",
    "website design",
    "Freelancers",
    "php Laravel Programmers",
    "Coders",
    "Developers",
    "Web Designers",
    "graphic design website",
    "graphic design company",
    "graphic design crowdsourcing website",
    "Fliers Banners design Business Card design",
    "graphic design",
    "Web development",
    "graphic design websites",
    "freelance graphic design",
    "Graphics design",
    "Kampala Uganda",
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
    "Visual identity",
    "User experience",
    "User interface",
    "Digital marketing",
    "SEO optimization",
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
    "User-centered design",
    "Mobile-friendly design",
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
    "Wireframing",
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
      name: "Kisakye Moses Also Known As Uncle Moses",
      url: "https://kisakye-moses.vercel.app",
    },
  ],
  creator: "Kisakye Moses Also Known As Uncle Moses",
  publisher: "Kisakye Moses Also Known As Uncle Moses",
  openGraph: {
    title: "Kisakye Moses - Uncle Moses | Web Developer In Kampala Uganda",
    description:
      "Kisakye Moses AKA Uncle Moses: Your trusted website developer and graphics designer in Kampala, Uganda. I specialize in crafting stunning websites, captivating graphics, and effective branding solutions. Elevate your online presence with my expertise in UI/UX design, responsive development, and digital marketing strategies. Partner with me to create a powerful visual identity that leaves a lasting impression.",
    url: "https://kisakye-moses.vercel.app",
    siteName: "Kisakye Moses Website",
    // images: [
    //   {
    //     url: "https://www.jazzafricaadventures.com/og-image.jpg",
    //     width: 800,
    //     height: 600,
    //     alt: "Og Image Alt",
    //   },
    // ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    handle: "@bantu_creative",
    site: "@https://twitter.com/bantu_creative",
    cardType: "summary_large_image",
    title: "Kisakye Moses - Uncle Moses | Developer In Kampala Uganda",
    description:
      "Unlock the potential of your online presence with Kisakye Moses also Known Uncle Moses. Am a top-notch website developer and graphics designer in Kampala, Uganda. From stunning web design to captivating graphics, I deliver tailor-made solutions that leave a lasting impact. Let's bring your digital vision to life and stand out in the digital landscape.",
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
        <SubFooter/>
      </body>
    </html>
  );
}
