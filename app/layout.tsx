import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://getfuturereadynow.com"),
  title: "FutureReady — Get ready for what's next",
  description: "FutureReady is an employer-offered benefit that helps employees understand the benefits they already have and plan for life milestones: first home, going back to school, growing a family, career changes and retirement readiness.",
  keywords: "employee benefits, 401(k) match, HSA, FSA, open enrollment, life milestones, first home, going back to school, retirement readiness, benefits education",
  openGraph: {
    title: "FutureReady — Get ready for what's next",
    description: "An employer-offered benefit that helps employees use the benefits they already have and plan for life's big moments.",
    url: "https://getfuturereadynow.com",
    siteName: "FutureReady",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "FutureReady — Get ready for what's next",
    description: "An employer-offered benefit for life milestones and long-term readiness.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [],
    shortcut: [],
    apple: [],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
