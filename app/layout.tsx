import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import Navbar from "@/components/Navbar";
import React from "react";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Converso",
  description: "Real-time AI Teaching Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className={`${bricolage.variable} antialiased`}>
          <ClerkProvider appearance={{variables:{colorPrimary: '#fe5933'}}}>
            {/*<header>*/}
            {/*  <SignedOut>*/}
            {/*    <SignInButton />*/}
            {/*    <SignUpButton />*/}
            {/*  </SignedOut>*/}
            {/*  <SignedIn>*/}
            {/*    <UserButton />*/}
            {/*  </SignedIn>*/}
            {/*</header>*/}
            <Navbar/>
            {children}
          </ClerkProvider>
        </body>
      </html>
  );
}
