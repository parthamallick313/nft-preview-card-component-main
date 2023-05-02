# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Links

- Solution URL: [Github](https://github.com/parthamallick313/nft-preview-card-component-main)
- Live Site URL: [Netlify](https://nftpreviewcard-fmio.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind CSS
- Flexbox
- Mobile-first workflow

### What I learned

Learned pretty cool creative hover effect throughout the completion of this challenge.

```html
<div class="relative rounded-lg cursor-pointer background group">
  <img src="images/image-equilibrium.jpg" alt="" class="opacity-0" />
  <img
    src="images/icon-view.svg"
    alt="view"
    class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-10 hidden group-hover:block"
  />
</div>
```

```css
.background {
  background-image: url("/images/image-equilibrium.jpg");
  @apply bg-cover bg-no-repeat bg-blend-overlay;
}

.background:hover {
  background-image: url("/images/image-equilibrium.jpg"), linear-gradient(to
        bottom, rgba(0, 255, 247, 0.5), rgba(0, 255, 247, 0.5));
}
```

## Author

- Frontend Mentor - [@parthamallick313](https://www.frontendmentor.io/profile/parthamallick313)
