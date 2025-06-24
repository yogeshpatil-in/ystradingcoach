import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "YS Trading Coach",
  description: "unlock consistent profitability in trading",
  base: '/ystradingcoach/',
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Posts', link: '/posts' },
      {
        text: 'Trading Course & Tools',
        items: [
          {text: 'Live Webinar', link:'/live-webinar'},
          {text: 'Trading with PAV Course', link:'/trading-with-pav-course'},
          {text: 'Volume Profile & VWAP tools', link:'/volume-profile-vwap-tools'}
        ]
      },
      {
        text: 'Resources',
        items: [
          {text: 'Bookstore', link:'/bookstore'},
          {text: 'eBooks', link:'/ebooks'},
          {text: 'Affiliates', link:'/affiliates'}
        ]
      },
      {
        text: 'Site Info',
        items: [
          {text: 'About', link:'/about'},
          {text: 'FAQ', link:'/faq'},
          {text: 'Social Media', link:'/social-media'},
          {text: 'Site Map', link:'/site-map'},
          {text: 'Disclaimer Policy', link:'/disclaimer-policy'},
          {text: 'Terms and Conditions', link:'/terms-and-conditions'},
          {text: 'Refund Policy', link:'/refund-policy'},
          {text: 'Privacy Policy', link:'/privacy-policy'}
        ]
      },
      { text: 'Contact', link: '/contact' },
      { text: 'My Account', link: '/my-account' },
      { text: 'VIP', link: '/trading-with-price-action-volume' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'youtube', link: 'https://www.youtube.com/@YSTradingCoach' },
      { icon: 'instagram', link: 'https://www.instagram.com/yogeshrp42' },
      { icon: 'facebook', link: 'https://www.facebook.com/Yogeshrp42' },
      { icon: 'whatsapp', link: 'https://whatsapp.com/channel/0029VbAxk0rGpLHK1TnTJF2K' },
      { icon: 'telegram', link: 'https://t.me/ystradingcoach' },
      { icon: 'bluesky', link: 'https://bsky.app/profile/yogeshrp42.bsky.social' },
      { icon: 'x', link: 'https://x.com/Yogeshrp42' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Financial freedom starts with YS Trading Coach',
      copyright: 'Copyright © 2022 - 2025, YS Trading Coach. <p> All rights reserved.',
    }
  }
})