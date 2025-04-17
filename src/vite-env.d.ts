/// <reference types="vite/client" />

declare module '*.mustache?raw' {
  const content: string;
  export default content;
}

declare module '*.md?raw' {
  const content: string;
  export default content;
}