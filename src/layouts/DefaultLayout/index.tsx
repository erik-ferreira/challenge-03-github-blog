import { Outlet } from "react-router-dom";

import { Header } from "../../components/Header";

import { ContainerMain } from "./styles";

export function DefaultLayout() {
  return (
    <>
      <Header />
      <ContainerMain>
        <Outlet />
      </ContainerMain>
    </>
  );
}
