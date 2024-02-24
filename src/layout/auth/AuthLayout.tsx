import { Outlet } from "react-router-dom";

type AuthLayoutProps = {};

const AuthLayout = (props: AuthLayoutProps) => {
  return (
    <main className="col-span-1">
      <Outlet />
    </main>
  );
};
