# Ask Phill Tailwind Easings

A Tailwind CSS plugin extends `transitionTimingFunction` with easing similar to the GSAP ones.

## Installation

Install the plugin from npm:

```sh
npm i @askphill/tailwind-easings
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


## All available classes

```css
 ease-linear

 ease-in-quad
 ease-out-quad
 ease-in-out-quad

 ease-in-cubic
 ease-out-cubic
 ease-in-out-cubic

 ease-in-quart
 ease-out-quart
 ease-in-out-quart

 ease-in-expo
 ease-out-expo
 ease-in-out-expo

 ease-in-back
 ease-out-back
 ease-in-out-back
```