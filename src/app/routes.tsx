import { useEffect } from "react";
import { createBrowserRouter, Outlet, useLocation } from "react-router";
import { Header, Footer } from "./components/layout-elements";
import { Home, Consultations, Marketplace, Suppliers, ProductDetail, Register, SupplierLogin, MyRequests } from "./pages";
import { SupplierDashboard } from "./pages/supplier-dashboard";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Root = () => (
  <div className="flex flex-col min-h-screen">
    <ScrollToTop />
    <Header />
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "consultations",
        element: <Consultations />,
      },
      {
        path: "marketplace",
        element: <Marketplace />,
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
      },
      {
        path: "suppliers",
        element: <Suppliers />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <SupplierLogin />,
      },
      {
        path: "my-requests",
        element: <MyRequests />,
      },
      {
        path: "*",
        element: <div className="py-20 text-center">صفحة غير موجودة</div>,
      },
    ],
  },
  {
    path: "/supplier-dashboard",
    element: (
      <>
        <ScrollToTop />
        <SupplierDashboard />
      </>
    ),
  },
]);
