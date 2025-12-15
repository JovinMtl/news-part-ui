// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   compatibilityDate: '2025-07-15',
//   devtools: { enabled: true }
// })

// import tailwindcss from "@tailwindcss/vite";
// export default defineNuxtConfig({
//   compatibilityDate: "2025-07-15",
//   devtools: { enabled: true },
//   vite: {
//     plugins: [
//       tailwindcss(),
//     ],
//   },
// });

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: [
    './app/assets/css/main.css',
    '@fontsource/inter/300.css',
    '@fontsource/inter/400.css',
    '@fontsource/inter/500.css',
    '@fontsource/inter/600.css',
    '@fontsource/inter/700.css'
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  // app: {
  //   head: {
  //     link: [
  //       {
  //         rel: 'stylesheet',
  //         href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
  //       },
  //       {
  //         rel: 'preconnect',
  //         href: 'https://fonts.googleapis.com'
  //       },
  //       {
  //         rel: 'preconnect',
  //         href: 'https://fonts.gstatic.com',
  //         crossorigin: ''
  //       },
  //       {
  //         rel: 'stylesheet',
  //         href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
  //       }
  //     ]
  //   }
  // }
});

