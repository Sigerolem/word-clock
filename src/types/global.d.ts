export { }; // needed to make TypeScript happy

declare global {
  interface Window {
    wallpaperPropertyListener: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      applyUserProperties: (properties: any) => void;
    }
  }
}