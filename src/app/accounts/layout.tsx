// import Header from "@/components/accounts/header/Header";
import Footer from "../../components/accounts/footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <Header /> */}
      <main className="pb-[200px]">{children}</main>
      <Footer />
    </>
  );
}
