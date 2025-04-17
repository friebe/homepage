import './style.css';
import { router } from './router';
import { PAGE_META } from './config';

class App {
  private static instance: App;
  
  private constructor() {
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
    }
  }
  
  private setupEventListeners(): void {
    window.addEventListener('popstate', () => this.loadContent());
  }
}

// Initialize the application
App.getInstance();