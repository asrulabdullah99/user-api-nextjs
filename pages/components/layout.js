import Navigasi from "./navigasi";

export default function Layout({ children }) {
  return (
    <>
      <Navigasi />
      <main>{children}</main>
    </>
  );
}
