import './style.css';
import { router } from './router';
import { PAGE_META } from './config';
import { initTheme, syncThemeToggle, toggleTheme } from './theme';

const KNOWN_ROUTES = new Set(['/', '/about']);

class App {
  private static instance: App;
  
  private constructor() {
    initTheme();
    this.setupEventListeners();
    this.loadContent();
  }
  
  public static getInstance(): App {
    if (!App.instance) {
      App.instance = new App();
    }
    return App.instance;
  }
  
  private async loadContent(): Promise<void> {
    try {
      const path = window.location.pathname;
      const content = await router(path);
      
      this.updateDocumentMeta(path);
      this.renderContent(content);

    } catch (error) {
      console.error('Error loading content:', error);
    }
  }
  
  private updateDocumentMeta(path: string): void {
    const meta = PAGE_META[path] || PAGE_META['/'];
    document.title = meta.title;
    
    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute('content', meta.description);
    }
  }
  
  private renderContent(content: string): void {
    const appElement = document.querySelector<HTMLDivElement>('#app');
    if (appElement) {
      appElement.innerHTML = content;
      syncThemeToggle();
    }
  }
  
  private setupEventListeners(): void {
    window.addEventListener('popstate', () => this.loadContent());

    document.addEventListener('click', (event) => {
      const target = event.target as Element | null;

      if (target?.closest('[data-theme-toggle]')) {
        event.preventDefault();
        toggleTheme();
        return;
      }

      const link = target?.closest('a');
      if (!link || link.target === '_blank' || link.hasAttribute('download')) return;

      const url = new URL(link.href, window.location.origin);
      if (url.origin !== window.location.origin) return;
      if (!KNOWN_ROUTES.has(url.pathname)) return;

      event.preventDefault();
      if (url.pathname !== window.location.pathname) {
        history.pushState(null, '', url.pathname);
        this.loadContent();
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// Initialize the application
App.getInstance();