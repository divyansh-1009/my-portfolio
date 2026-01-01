import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SidebarWrapper from "@/components/SidebarWrapper";

// Some environments may expose a non-standard `localStorage` on the server
// (e.g. when `--localstorage-file` is passed to Node) that lacks the standard
// Storage API. We normalize it here to prevent runtime crashes in Next.js.
const ensureServerSafeLocalStorage = () => {
  if (typeof globalThis === "undefined") return;

  const existing = (globalThis as unknown as { localStorage?: unknown }).localStorage;
  const hasValidAPI =
    typeof existing === "object" &&
    existing !== null &&
    typeof (existing as Storage).getItem === "function" &&
    typeof (existing as Storage).setItem === "function";

  if (hasValidAPI) return;

  const store = new Map<string, string>();
  const safeStorage: Storage = {
    get length() {
      return store.size;
    },
    clear() {
      store.clear();
    },
    getItem(key: string) {
      return store.has(key) ? store.get(key)! : null;
    },
    key(index: number) {
      return Array.from(store.keys())[index] ?? null;
    },
    removeItem(key: string) {
      store.delete(key);
    },
    setItem(key: string, value: string) {
      store.set(key, String(value));
    },
  };

  (globalThis as unknown as { localStorage: Storage }).localStorage = safeStorage;
};

ensureServerSafeLocalStorage();

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen">
          <SidebarWrapper />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
