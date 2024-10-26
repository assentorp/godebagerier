module.exports = {
  siteMetadata: {
    title: "16 gode restauranter i København → GodeKaffeBarer.dk",
    titleTemplate: "%s → godekaffebarer.dk",
    description:
      "Et overblik over de bedste gode restauranter i København og omegn. Restauranterne er kommet på ud for tre centrale kriterier: Smag, Stemning og Service.",
    siteUrl: `https://godekaffebarer.dk`,
    url: "https://godekaffebarer.dk",
    image: "/godekaffebarer.png",
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
