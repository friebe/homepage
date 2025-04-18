import { marked } from 'marked';
import { createLayout } from './layout';
import type { PageContent } from './types';
import { PAGE_META } from './config';

import homeContent from './content/home.md?raw';
import aboutContent from './content/about.md?raw';

const contentMap: Record<string, string> = {
  '/': homeContent,
  '/about': aboutContent,
};

export async function router(path: string): Promise<string> {
  try {
    const normalizedPath = path === '' ? '/' : path;
    const content = await loadContent(normalizedPath);
    return createLayout(content);
  } catch (error) {
    console.error('Routing error:', error);
    return createLayout({
      html: Promise.resolve('<h1>Error loading content</h1>'),
      meta: PAGE_META['/']
    });
  }
}

async function loadContent(path: string): Promise<PageContent> {
  try {
    const markdown = contentMap[path] || contentMap['/'];
    return {
      html: Promise.resolve(marked(markdown)),
      meta: PAGE_META[path] || PAGE_META['/']
    };
  } catch (error) {
    console.error('Error loading content:', error);
    throw error;
  }
}