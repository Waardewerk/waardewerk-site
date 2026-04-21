import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App.tsx';
import { getAllNews } from './data/news.ts';

export function render(url: string): string {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>
  );
}

// Her-geëxporteerd zodat het prerender-script nieuwsroutes kan ontdekken
// zonder een apart bronbestand te hoeven laden.
export { getAllNews };
