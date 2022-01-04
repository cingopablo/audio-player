import * as dotenv from 'dotenv'

dotenv.config()

export default {
  siteMetadata: {
    title: `Official Website of 1990 Group`,
    description: `We are your professional team of event coordinating specialists. We thrive on delighting you by providing access to nightlife venues in Miami and NYC.`,
    author: `Pablo Cingolani @cingopablo`,
    siteUrl: 'http://www.1990group.us/',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-XR2T7ED8NE'],
        gtagConfig: {
          optimize_id: 'OPT-WLGKTF8',
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/../../static/images/`,
      },
    },
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -100,
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Official Website of 1990 Group`,
        short_name: `1990 Group`,
        start_url: `/`,
        display: `standalone`,
        icon: 'src/images/logo.png',
      },
    },
    'gatsby-plugin-image',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
