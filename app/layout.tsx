"use client";

import "react-toastify/dist/ReactToastify.css";
import "tailwindcss/tailwind.css";

import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";

import { ThemeProvider } from "../context/theme";
import { ModalProvider } from "../context/modal";
import { CartProvider } from "../context/cart";
import { CheckoutProvider } from "../context/checkout";

import Layout from "../components/Layout";
import Modal from "../components/Modal";

const toastOptions = {
  position: "bottom-center",
  draggable: false,
  hideProgressBar: true,
  className: "w-full md:max-w-xl",
  toastClassName: "bg-ecru-white rounded-lg text-black px-3 shadow-md",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <ThemeProvider>
          <ModalProvider>
            <CartProvider>
              <CheckoutProvider>
                <Modal />
                <Layout>
                  <AnimatePresence initial={false} mode="wait">
                    {children}
                  </AnimatePresence>
                  <ToastContainer {...(toastOptions as any)} />
                </Layout>
              </CheckoutProvider>
            </CartProvider>
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
