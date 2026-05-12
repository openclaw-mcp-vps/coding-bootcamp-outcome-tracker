import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BootcampTrack — Predict Your Job Placement Success",
  description: "Aggregates bootcamp graduate data to predict job placement rates, salary outcomes, and skill gaps by program."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2d3c4331-1540-4ca9-9bef-a8dab1630ee5"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
