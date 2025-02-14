"use client";

import AppLayout from "@/components/site/AppLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <AppLayout>{children}</AppLayout>;
}
