export const colors = ["sky", "pink", "purple", "emerald"]
export const randomizeColor = () => colors[Math.floor(Math.random() * (colors.length))]
export const randomizeHue = () => Math.floor((Math.random() * (2) + 5) + 1) * 100
export const getColorClass = () => `bg-${randomizeColor()}-${randomizeHue()}`