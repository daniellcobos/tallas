require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Conversor de tallas de zapatos`,
    description: `Convierta tallas de zapatos de Adidas a Nike`,
    author: `@snowcastervz`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-147383529-2`,
      },
      
        resolve: 'gatsby-plugin-firebase',
        options: {
          credentials: {
            apiKey: "AIzaSyAtJ7iJz8ToDdmISMSqTZTJMSF4gMViItQ",
    authDomain: "ferrous-depth-251804.firebaseapp.com",
    databaseURL: "https://ferrous-depth-251804.firebaseio.com",
    projectId: "ferrous-depth-251804",
    storageBucket: "ferrous-depth-251804.appspot.com",
    messagingSenderId: "488377808646",
    appId: "1:488377808646:web:a9bfa9cf9184e1bc415087",
    measurementId: "G-5HBXZP6LJC"
          },
        },
      
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
