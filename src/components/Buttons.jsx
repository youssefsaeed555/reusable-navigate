import React from "react";
import propTypes, { number } from "prop-types";
import classNames from "classnames";

function Buttons({
  children,
  primary,
  secondary,
  success,
  error,
  warning,
  rounded,
  outline,
  ...rest
}) {
  const classStyles = classNames(
    rest.className,
    "flex justify-between items-center gap-1 px-3 py-1.5 border text-white",
    {
      "border-blue-600 bg-blue-500": primary,
      "border-gray-900 bg-gray-900": secondary,
      "border-yellow-400 bg-yellow-400": warning,
      "border-red-500 bg-red-500": error,
      "border-green-600 bg-green-600": success,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-green-600": outline && success,
      "text-red-500": outline && error,
      "text-gray-900": outline && secondary,
      "text-yellow-400": outline && warning,
    }
  );

  return (
    <button {...rest} className={classStyles}>
      {children}
    </button>
  );
}
Buttons.propTypes = {
  checkVariant: ({ primary, secondary, success, error, warning }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!error) +
      Number(!!warning);
    if (count > 1) {
      return new Error(
        "only one of : primary, secondary, success, error, waning can be true"
      );
    }
  },
};

export default Buttons;
