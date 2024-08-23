<p align="center">
<img src="https://user-images.githubusercontent.com/11247099/140462375-7b7ac4db-35b7-453c-8a05-13d8d20282c4.png" width="600"/>
</p>

<h2 align="center">
<a href="https://github.com/antfu/vitesse">Vitesse</a> for Nuxt 3 (Modified)
</h2><br>

<p align="center">
<br>
<a href="[Your Preview URL]">🖥 Online Preview</a>
<br><br>
<a href="[Your StackBlitz URL]"><img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg" alt=""></a>
</p>

## Features

- 💚 [Nuxt 3](https://nuxt.com/) - SSR, ESR, File-based routing, components auto importing, modules, etc.

- 🎨 [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework packed with classes.

- 🌼 [Daisyui](https://daisyui.com/) - The most popular component library for Tailwind CSS.

- 😃 [Nuxt Icon](https://github.com/nuxt-modules/icon) - Use any icon from Iconify sets.

- 🔥 The `<script setup>` syntax.

- 🍍 [State Management via Pinia](https://github.com/vuejs/pinia).

- 📑 [Layout system](./layouts).

- 📥 APIs auto importing - for Composition API, VueUse and custom composables.

- 🌍 [I18n](https://i18n.nuxtjs.org/) - Internationalization support.

- 🦾 TypeScript, of course.

- 📷 [Nuxt Image](https://image.nuxtjs.org/) - Optimized images with a plugin.

- 🔄 [Vue Query](https://tanstack.com/query/latest) - Powerful asynchronous state management.

- ✅ [Vee-Validate](https://vee-validate.logaretm.com/v4/) with Zod - Form validation made easy.

- 📅 [DayJS](https://day.js.org/) - Fast 2kB date library.

- 🧩 [Nuxt Layers](https://nuxt.com/docs/getting-started/layers) - Extend and customize the project using Nuxt Layers.

## Plugins

### Nuxt Modules

- [VueUse](https://github.com/vueuse/vueuse) - Collection of useful composition APIs.
- [ColorMode](https://github.com/nuxt-modules/color-mode) - Dark and Light mode with auto detection.
- [Pinia](https://github.com/vuejs/pinia) - Intuitive, type safe, light and flexible Store for Vue.
- [Nuxt I18n](https://i18n.nuxtjs.org/) - Internationalization module for Nuxt.
- [Nuxt Tailwind](https://tailwindcss.nuxtjs.org/) - Tailwind CSS module for Nuxt.
- [FormKit Auto Animate](https://auto-animate.formkit.com/) - Add motion to your apps with a single line of code.
- [Nuxt Image](https://image.nuxtjs.org/) - Optimized images for Nuxt applications.
- [Nuxt Icon](https://github.com/nuxt-modules/icon) - Icon module for Nuxt.
- [Vee-Validate](https://vee-validate.logaretm.com/v4/integrations/nuxt/) - Template Based Validation Framework for Vue.js.
- [DayJS Nuxt](https://github.com/fumeapp/dayjs) - DayJS integration for Nuxt.
- [Nuxt Fonts](https://github.com/nuxt/fonts) - Web fonts for Nuxt.
- [Vue Query Nuxt](https://github.com/Hebilicious/vue-query-nuxt) - Vue Query integration for Nuxt.

## IDE

We recommend using [VS Code](https://code.visualstudio.com/) with [Volar](https://github.com/johnsoncodehk/volar) to get the best experience (You might want to disable [Vetur](https://vuejs.github.io/vetur/) if you have it).

## Try it now!

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/[YourUsername]/[YourRepoName]/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
bunx degit [YourUsername]/[YourRepoName] my-nuxt3-app
cd my-nuxt3-app
bun i # If you don't have pnpm installed, run: npm install -g pnpm
```

### Extending with Nuxt Layers

This project supports [Nuxt Layers](https://nuxt.com/docs/getting-started/layers), allowing you to easily extend and customize the project without modifying the core files.

To extend this project using Nuxt Layers:

```bash
# Create a new project
bun x nuxi@latest init <project-name>
```

Add the following to your nuxt.config.ts:

```typescript
export default defineNuxtConfig({
  // Add this line ⬇️
  extends: ['github:Cyenoch/vitesse-nuxt3#layer'],

  // Enable nuxt 4 folder structure
  future: {
    compatibilityVersion: 4,
  },
})
```

That's it! You can now extend the project using Nuxt Layers.
Then run `bun dev` to start the development server.
