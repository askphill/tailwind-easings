const plugin = require("tailwindcss/plugin");

const easing = plugin(() => {}, {
  theme: {
    extend: {
      transitionTimingFunction: {
        "linear": "cubic-bezier( 0.250, 0.250, 0.750, 0.750)",

        "in-quad": "cubic-bezier( 0.26, 0, 0.6, 0.2 )",
        "out-quad": "cubic-bezier( 0.4, 0.8, 0.74, 1 )",
        "in-out-quad": "cubic-bezier( 0.48, 0.04, 0.52, 0.96 )",

        "in-cubic": "cubic-bezier( 0.4, 0, 0.68, 0.06 )",
        "out-cubic": "cubic-bezier( 0.34, 1.02, 0.68, 1 )",
        "in-out-cubic": "cubic-bezier( 0.66, 0, 0.34, 1 )",

        "in-quart": "cubic-bezier( 0.52, 0, 0.74, 0 )",
        "out-quart": "cubic-bezier( 0.26, 1.04, 0.54, 1 )",
        "in-out-quart": "cubic-bezier( 0.770, 0.000, 0.175, 1.000 )",

        "in-expo": "cubic-bezier( 0.66, 0, 0.86, 0 )",
        "out-expo": "cubic-bezier( 0.16, 1.08, 0.38, 0.98 )",
        "in-out-expo": "cubic-bezier( 0.9, 0, 0.1, 1 )",

        "in-back": "cubic-bezier( 0.600, -0.280, 0.735, 0.045 )",
        "out-back": "cubic-bezier( 0.175, 0.885, 0.320, 1.275 )",
        "in-out-back": "cubic-bezier( 0.175, 0.885, 0.320, 1.275 )",
      },
    },
  },
});

module.exports = easing;
