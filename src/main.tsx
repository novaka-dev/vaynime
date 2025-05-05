import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Hero } from "./components/sections/Hero";
import { Layout } from "./components/Layout";
import { ThemeProvider } from "./components/ThemeProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout title="Vaynime" />,
    children: [
      { index: true, element: <Hero /> }, // Home, halaman utama
      { path: "new", element: <div>New Anime</div> },
      { path: "popular", element: <div>Popular Anime</div> },
      { path: "genre", element: <div>All Genre</div> },
      { path: "genre/:id", element: <div>Genre by ID</div> }, // ← ini adalah dynamic route!
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
