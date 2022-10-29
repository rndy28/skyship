import React from "react";
import Button from "components/UI/atoms/Button";
import { IconAlertTriangle } from "@tabler/icons";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Router from "next/router";

const FourOhFour = () => {
  return (
    <>
      <Head>
        <title>404 | Skyship</title>
      </Head>
      <div className="absolute top-2/4 left-2/4 translate-y-[-50%] translate-x-[-50%] w-[95%] max-w-3xl text-center flex flex-col items-center gap-2">
        <Image src="/assets/404.svg" alt="404 illustration" width={400} height={300} />
        <div className="h-[2rem] w-fit flex items-center justify-center gap-2 bg-[#fef2f2] text-[#991b1b] rounded-[5px] px-4 text-sm">
          <IconAlertTriangle />
          <span className="font-semibold">404</span>
        </div>
        <h1 className="text-[#434C5E] text-3xl">Page not Found</h1>
        <p className="text-[#4C566A] max-w-lg">
          Sorry, the page you are looking for doesn&apos;t exist or has been removed. Keep exploring
          out site:
        </p>
        <Button size="md" variant="primary" onClick={() => Router.back()}>
          Go back
        </Button>
      </div>
    </>
  );
};

export default FourOhFour;
