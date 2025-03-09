import { Links,Meta,Outlet,Scripts,ScrollRestoration,} from "@remix-run/react";


import Navbar from "~/components/Navbar";  // Navbar'ı ekleyelim
import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap",
  },
];

export default function Root() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-gray-900 text-white w-full overflow-x-hidden">
        <Navbar />  {/* Navbar tüm sayfalarda olacak */}
        <div className="w-full">
          <Outlet />  {/* Remix sayfaları buraya yükleyecek */}
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
