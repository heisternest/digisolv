import { Outlet, ScrollRestoration } from "react-router";

const RootLayout = () => {
  return (
    <>
      <ScrollRestoration />
      {/* Your header/nav */}
      <main>
        <Outlet />
      </main>
      {/* Your footer */}
    </>
  );
};

export default RootLayout;
