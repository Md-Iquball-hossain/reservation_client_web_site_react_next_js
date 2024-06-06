import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/page";
import "react-datepicker/dist/react-datepicker.css";
import Footer from "@/components/footer/page";
import TopNavbar from "@/components/Navbar/TopNavbar";
import { getServerSession } from "next-auth";
import {
  QueryClientProvider,
  SessionProvider,
  SnackbarProvider,
  queryClient,
} from "../components/exportComponents/SessionProviders";
import FilterProviders from "@/providers/ContextProviders";
// import { ContextProviders } from "@/app/providers/ContextProviders";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reservation",
  description: "Reservation : One & Only Option",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={roboto.className}>
        <FilterProviders>
          <SessionProvider session={session}>
            <SnackbarProvider>
              <QueryClientProvider client={queryClient}>
                <TopNavbar />
                <Navbar />
                {children}
                <Footer />
              </QueryClientProvider>
            </SnackbarProvider>
          </SessionProvider>
        </FilterProviders>
      </body>
    </html>
  );
}
