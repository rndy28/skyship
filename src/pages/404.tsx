import React from "react";
import Button from "components/UI/atoms/Button";
import { notFoundLayout, error } from "styles/css";
import { IconAlertTriangle } from "@tabler/icons";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const FourOhFour = () => {
  return (
    <>
      <Head>
        <title>Skyship | 404</title>
      </Head>
      <div css={notFoundLayout}>
        <div>
          <Image src="/assets/404.svg" alt="404 illustration" width={400} height={200} />
          <div css={error}>
            <IconAlertTriangle />
            <span>404</span>
          </div>
          <h3>Page not Found</h3>
          <p>
            Sorry, the page you are looking for doesn&apos;t exist or has been removed. Keep
            exploring out site:
          </p>
          <Link href="/" passHref>
            <Button variant="primary" size="md" asLink>
              Go back home
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FourOhFour;
