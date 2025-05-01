import { useEffect } from "react";
import { Footer } from "./elements/Footer";
import { Navbar } from "./elements/Navbar";

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

export const Layout = ({ title, children }: LayoutProps) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
