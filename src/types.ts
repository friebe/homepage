export interface PageMeta {
  title: string;
  description: string;
}

export interface PageContent {
  html: Promise<string>;
  meta: PageMeta;
}