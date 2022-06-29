module.exports = {
  siteMetadata: {
    title: `ArruranK`,
    siteUrl: `https://ArruranK.ca`,
    description: `ArruranK's Portfolio`,
    image: `/logo.png`,
  },
  plugins: [`gatsby-plugin-react-helmet`, `gatsby-plugin-postcss`, 
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `ArruranK's Portfolio`,
      short_name: `ArruranK`,
      start_url: `/`,
      icon: `src/images/icon.png`,
      background_color: `#000`,
      theme_color: `#338588`,
      display: `standalone`,
    },
  },]
};