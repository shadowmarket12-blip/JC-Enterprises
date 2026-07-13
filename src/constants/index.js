// constants/index.js

export const PHONE_NUMBER = "+1234567890";

export const COMPANY_INFO = {
  name: "JC Enterprises",
  logoText: "JC Enterprises",
  logo: "/images/logo-mark.png",
  tagline: "Premium Quality Products",
  phone: PHONE_NUMBER,
  email: "info@growyld.com",
  address: "123 Business Street, New York, NY 10001",
};

// Consumed by Navbar.jsx / MobileMenu.jsx — `icon` on dropdown items must
// match a key in ResourcesDropdown.jsx's iconMap
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  {
    label: "Resources",
    children: [
      {
        label: "Blogs",
        href: "/blogs",
        description: "Insights, stories & guides",
        icon: "FiBookOpen",
      },
      {
        label: "Clients",
        href: "/clients",
        description: "Brands that trust us",
        icon: "FiUsers",
      },
      {
        label: "About Us",
        href: "/about",
        description: "Our story & mission",
        icon: "FiInfo",
      },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const NAVIGATION_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Shop", href: "/shop" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

// Footer link groups consumed by Footer.jsx, FooterCategories.jsx and FooterSupport.jsx
export const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  categories: [
    { label: "Electronics", href: "/category/electronics" },
    { label: "Fashion", href: "/category/fashion" },
    { label: "Home & Living", href: "/category/home-living" },
    { label: "Beauty", href: "/category/beauty" },
    { label: "Sports", href: "/category/sports" },
  ],
  support: [
    { label: "FAQ", href: "/faq" },
    { label: "Shipping Info", href: "/shipping" },
    { label: "Returns", href: "/returns" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

// Consumed by FooterSocial.jsx — `icon` must match a key in its iconMap
export const SOCIAL_LINKS = [
  { label: "Facebook", icon: "FaFacebook", href: "https://facebook.com" },
  { label: "Twitter", icon: "FaTwitter", href: "https://twitter.com" },
  { label: "Instagram", icon: "FaInstagram", href: "https://instagram.com" },
  { label: "LinkedIn", icon: "FaLinkedin", href: "https://linkedin.com" },
  { label: "YouTube", icon: "FaYoutube", href: "https://youtube.com" },
];
