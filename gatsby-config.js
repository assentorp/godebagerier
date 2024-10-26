module.exports = {
  siteMetadata: {
    title: "16 gode bagerier i København → godebagerier.dk",
    titleTemplate: "%s → godebagerier.dk",
    description:
      "Et overblik over de bedste gode bagerier i København og omegn. Bagerierne er kommet på ud for tre centrale kriterier: Smag, Stemning og Service.",
    siteUrl: `https://godebagerier.dk`,
    url: "https://godebagerier.dk",
    image: "/godebagerier.png",
    twitterUsername: "@assentorp",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-sass",
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-3528PK69ME"],
        pluginConfig: {
          head: true,
        },
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-react-leaflet",
      options: {
        linkStyles: true, // (default: true) Enable/disable loading stylesheets via CDN
      },
    },
  ],
};
