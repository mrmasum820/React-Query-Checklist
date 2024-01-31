import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Main from "./layout/Main";
import Home from "./components/Home";
import SuperHeroes from "./components/SuperHeroes";
import RQSuperHeroes from "./components/RQSuperHeroes";
import RQSuperHero from "./components/RQSuperHero";
import ParallelQueries from "./components/ParallelQueries";
import DynamicParallel from "./components/DynamicParallel";
import DependentQueries from "./components/DependentQueries";
import PaginatedQueries from "./components/PaginatedQueries";
import InfiniteQueries from "./components/InfiniteQueries";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/super-heroes",
        element: <SuperHeroes />,
      },

      {
        path: "/rq-super-heroes",
        element: <RQSuperHeroes />,
      },
      {
        path: "/rq-super-heroes/:heroId",
        element: <RQSuperHero />,
      },
      {
        path: "/rq-parallel",
        element: <ParallelQueries />,
      },
      {
        path: "/rq-dynamic-parallel",
        element: <DynamicParallel heroIds={[1, 3]} />,
      },
      {
        path: "/rq-dependent",
        element: <DependentQueries email="mrmasum820@gmail.com" />,
      },
      {
        path: "/rq-paginated",
        element: <PaginatedQueries />,
      },
      {
        path: "/rq-infinite",
        element: <InfiniteQueries />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
