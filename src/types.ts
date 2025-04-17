// Define common types used across the application
export interface NavItem {
  path: string;
  label: string;
  active: boolean;
}

export interface PageMeta {
  title: string;
  description: string;
}

export interface PageContent {
  html: string;
  meta: PageMeta;
}