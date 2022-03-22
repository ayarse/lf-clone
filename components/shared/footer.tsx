const footerLinks = [
  {
    name: 'Discover',
    items: [
      {
        title: 'Free Animations',
        url: '#',
      },
      {
        title: 'Marketplace',
        url: '#',
      },
      {
        title: 'Hire Animators',
        url: '#',
      },
      {
        title: 'Showcase',
        url: '#',
      },
      {
        title: 'Sell Animations',
        url: '#',
      },
      {
        title: 'Telegram Sticker Packs',
        url: '#',
      },
    ],
  },
  {
    name: 'Design',
    items: [
      {
        title: 'Adobe After Effects plugin',
        url: '#',
      },
      {
        title: 'Lottie Preview',
        url: '#',
      },
      {
        title: 'Lottie Editor',
        url: '#',
      },
      {
        title: 'SVG to Lottie',
        url: '#',
      },
      {
        title: 'Figma Plugin',
        url: '#',
      },
    ],
  },
  {
    name: 'Code',
    items: [
      { title: 'Web Player', url: '#' },

      { title: 'Lottie Libraries', url: '#' },

      { title: 'JSON Editor', url: '#' },

      { title: 'Supported Features', url: '#' },

      { title: 'Changelog', url: '#' },
    ],
  },
  {
    name: 'Learn',
    items: [
      { title: 'Blog', url: '#' },

      { title: 'Courses', url: '#' },

      { title: 'What is Lottie', url: '#' },

      { title: 'Forum', url: '#' },

      { title: 'FAQ & Support', url: '#' },
    ],
  },
  {
    name: 'Terms and Policies',
    items: [
      {
        title: 'Privacy Policy',
        url: '#',
      },

      {
        title: 'Terms and Conditions',
        url: '#',
      },

      {
        title: 'Terms of Sale',
        url: '#',
      },

      {
        title: 'Community Guidelines',
        url: '#',
      },

      {
        title: 'Upload Guidelines',
        url: '#',
      },
    ],
  },
]
const Footer = () => {
  return (
    <footer className="border-t-lf-grey-50 container mx-auto justify-center border-t py-12">
      <div className="grid grid-cols-6">
        {footerLinks.map((menu) => (
          <div key={menu.name} className="mx-4">
            <p className="text-lf-grey-darkest mb-6">{menu.name}</p>
            <ul className="averta-light text-lf-grey-dark">
              {menu.items.map((item) => (
                <li key={item.title} className="mb-1">
                  <a href={item.url}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <p className="text-lf-grey-darkest mb-4">
            Get LottieFiles for mobile and desktop
          </p>
          <ul>
            <li>
              <a href="https://apps.apple.com/us/app/lottiefiles-render-and-share/id1231821260?itsct=apps_box_badge&itscg=30200">
                <img
                  className="w-44"
                  src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1494374400&h=658ebc53ff8b0511a5059765b4d4a1b4"
                  alt="Download on the App Store"
                />
              </a>
            </li>
            <li>
              <a href="https://play.google.com/store/apps/details?id=com.lottiefiles.app&hl=en&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                <img
                  className="-mx-2 w-48 "
                  alt="Get it on Google Play"
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full p-6 text-sm text-lf-grey">
        <p>LottieFiles is by Design Barn Inc.</p>
        <p>Copyright © 2022 Design Barn Inc. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
