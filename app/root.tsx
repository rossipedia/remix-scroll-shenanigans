import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import './tailwind.css';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration
          getKey={(location) => {
            if (location.hash) {
              console.log(`${location.pathname}${location.hash}`);
              return `${location.pathname}${location.hash}`;
            }
            return location.key;
          }}
        />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <div className="w-[600px] mx-auto font-sans">
      <Outlet />
    </div>
  );
}
