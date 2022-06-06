# Ask Phill Tailwind Easings

A Tailwind CSS plugin extends `transitionTimingFunction` with easing similar to the GSAP ones.

## Installation

Install the plugin from npm:

```sh
npm install -D tailwindcss-easing
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require("@askphill/tailwind-easings"),
    // ...
  ],
};
```

## Usage

We have the following easing curves:

- `linear`
- `quad`
- `cubic`
- `quart`
- `expo`
- `back`

you can prefix it with

- `ease-in-{curve}`,
- `ease-out-{curve}`
- `ease-in-out-{curve}`

So for example use it as;

```html
<div class="ease-in-out-expo ...">Cart drawer</div>
```

or

```html
<div class="ease-in-quart ...">Cart drawer</div>
```

> Keep in mind **for linear you cannot use a prefix**: so thats always `ease-linear`
