import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/header/Header";
import { Metadata } from "next";
import React, { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Cinemania",
  description:
    "Discover and interact in a world of movies at your fingertips! Dive into synopsis, rating and more in cinemania today.",
};


const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col justify-between min-h-[100svh]">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
