import { NextSeo } from "next-seo";
import React from "react";
import type { IMetaSeo } from "types";

interface Props extends Omit<IMetaSeo, "children"> {
  children: React.ReactNode;
}

const Layout = ({ children, ...props }: Props) => {
  const TITLE_TEMPLATE = `%s - ${props.titleTemplate ?? "Skyship Software House"}`;
  return (
    <>
      <NextSeo titleTemplate={TITLE_TEMPLATE} {...props} />
      {children}
    </>
  );
};

export default Layout;
