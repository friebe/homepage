import Mustache from 'mustache';
import layoutTemplate from './templates/layout.mustache?raw';
import type { PageContent } from './types';

export function createLayout(content: PageContent): string {
  return Mustache.render(layoutTemplate, {
    content: content.html,
    meta: content.meta,
  });
}