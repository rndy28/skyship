import clsx from "clsx";
import Link from "next/link";
import React, { ForwardedRef, forwardRef } from "react";
import type { Size, SizeDict, UnionToKeys, Variant } from "types";
import { UrlObject } from "url";

type StyledButtonProps = {
  variant: Variant;
  size: Size;
  loading?: boolean;
};

interface Props extends React.ComponentPropsWithoutRef<"button">, StyledButtonProps {}

interface PropsLink extends Omit<React.ComponentPropsWithoutRef<"a">, "href">, StyledButtonProps {
  asLink: boolean;
  href: string | UrlObject;
}

const sizeDict: SizeDict = {
  sm: "h-[2.5rem] max-w-[7rem]",
  md: "h-[2.8rem] max-w-[10rem]",
  lg: "h-[3rem] max-w-[11rem]",
};

const variantDict: UnionToKeys<Variant, string> = {
  primary: "bg-primary text-white hover:bg-primary-800",
  neutral: "bg-white text-primary",
};

const Button = forwardRef<unknown, Props | PropsLink>(
  ({ children, loading, size, variant, className, ...props }, ref) => {
    const withSize = sizeDict[size];
    const withVariant = variantDict[variant];

    const mergedClasses = clsx(
      "cursor-pointer flex justify-center items-center rounded-md w-full font-bold transition-all ease",
      withSize,
      withVariant,
      className
    );

    if ("asLink" in props) {
      const { asLink, href, ...rest } = props;
      return (
        <Link href={href} passHref>
          <a
            className={mergedClasses}
            role="button"
            ref={ref as ForwardedRef<HTMLAnchorElement>}
            {...rest}
          >
            {children}
          </a>
        </Link>
      );
    }

    return (
      <button className={mergedClasses} ref={ref as ForwardedRef<HTMLButtonElement>} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
