// uno.config.ts
import { defineConfig, presetUno } from "unocss";
import { handler } from "@unocss/preset-mini/utils";

export default defineConfig({
  rules: [
    ["font-rounded", { "font-family": "Torus" }],
    [
      "p-safe",
      {
        padding:
          "env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)",
      },
    ],
    ["pt-safe", { "padding-top": "env(safe-area-inset-top)" }],
    ["pb-safe", { "padding-bottom": "env(safe-area-inset-bottom)" }],
    ["pl-safe", { "padding-left": "env(safe-area-inset-left)" }],
    ["pr-safe", { "padding-right": "env(safe-area-inset-right)" }],
    [
      "pb-global",
      { "padding-bottom": "calc(env(safe-area-inset-bottom) + 5rem)" },
    ],
    [
      /^bg-gradient-(?:repeating-)?linear-(.+)$/,
      ([, s]) => ({
        "background-image": `linear-gradient${handler.bracket(s)}`,
      }),
    ],
  ],
  shortcuts: {
    "flex-container":
      "flex flex-col items-center justify-center py-4 gap-4 max-w-7xl mx-auto pl-[calc(env(safe-area-inset-left)+1rem)] pr-[calc(env(safe-area-inset-right)+1rem)]",
    "chunks-horizontal-2":
      "flex flex-col md:flex-row items-center justify-center gap-2 w-full",
  },
  presets: [presetUno()],
});
