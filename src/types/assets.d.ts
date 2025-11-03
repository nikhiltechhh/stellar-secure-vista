// Type declarations for static asset imports (images, fonts).
// Including uppercase extensions (e.g. .JPG) to satisfy TypeScript imports.
declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.JPG' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  const src: string;
  export default src;
}
