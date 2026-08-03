import Mustache from 'mustache';
import layoutTemplate from './templates/layout.mustache?raw';
import type { PageContent } from './types';


export async function createLayout(content: PageContent): Promise<string> {
  const resolvedHtml = await content.html;

  return Mustache.render(layoutTemplate, {
    content: resolvedHtml,
    meta: { ...content.meta, year: new Date().getFullYear() },
    path: content.path,
    isHome: content.path === '/',
    isAbout: content.path === '/about',
  });
}