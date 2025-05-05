import { useEffect } from "react";
import { Footer } from "./elements/Footer";
import { Navbar } from "./elements/Navbar";
import { Outlet } from "react-router-dom";

interface LayoutProps {
  title: string;
}

export const Layout = ({ title }: LayoutProps) => {
  useEffect(() => {
    if (title) document.title = `${title} - Vaynime`;
  }, [title]);
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* Hero akan otomatis muncul hanya di Home */}
      </main>
      <Footer />
    </>
  );
};
