"use client";
import { SessionProvider } from "next-auth/react";
import { SnackbarProvider } from "notistack";
import {
  QueryClient,
  QueryClientProvider,
  useQuery as useReactQuery,
} from "@tanstack/react-query";

export const queryClient = new QueryClient();
// export const accessToken : string = localStorage.getItem("access-token") || " ";
export {
  SnackbarProvider,
  SessionProvider,
  QueryClient,
  QueryClientProvider,
  useReactQuery as useQuery,
};
