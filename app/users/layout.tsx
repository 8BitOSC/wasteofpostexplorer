import React from "react";

export const metadata = {
    title: "Filter Users | Wasteof Post Explorer",
    description: "Filter, sort, paginate, and search wasteof.money users.",
  };

  
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
        {children}
        </>
    )
  }
