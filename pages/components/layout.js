import TopNav from "./header/index";
export default function Layout({ children }) {
  return (
    <>
      <TopNav />
      <main>{children}</main>
    </>
  );
}
