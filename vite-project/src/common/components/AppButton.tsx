import { Button, type ButtonProps } from "primereact/button";
import React from "react";

// interface Props1 extends ButtonProps{}

const PrimaryButtonPT = {
  root: {
    className: "bg-primary-400 border-primary-500 hover:bg-primary-300",
  },
};

type Props = {
  /**
   * Makes it more Masculine!
   */
  primary?: boolean;
} & ButtonProps;

const AppButton = ({ primary, ...props }: Props) => {
  return (
    <Button {...props} pt={primary ? PrimaryButtonPT : {}}>
      Login
    </Button>
  );
};

export default AppButton;
