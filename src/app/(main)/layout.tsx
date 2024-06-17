import Footer from "@/components/ui/Footer";
import ScrollToTopUI from "@/components/ui/ScrollToTop";
import Header from "@/components/ui/header/Header";
import { Metadata } from "next";
import React, { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Cinemania",
  description:
    "Discover and interact in a world of movies and TV shows at your fingertips! Dive into synopsis, rating and more in cinemania today!",
};

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <ScrollToTopUI />
    </div>
  );
};

export default MainLayout;
