import React from "react";
import Button from "components/UI/atoms/Button";
import { IconArrowLeft } from "@tabler/icons";
import Router from "next/router";

const BackButton = () => {
  return (
    <Button size="md" variant="primary" onClick={() => Router.back()}>
      <IconArrowLeft size={20} className="mr-2" />
      Back
    </Button>
  );
};

export default BackButton;
