import { PropertyProps } from "./Property.props";
import "./property.scss";
import { ForwardedRef, forwardRef } from "react";

export const Property = forwardRef(function Property(
  { className, name, value, valueType = "txt", ...props }: PropertyProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const Value = () => {
    switch (valueType) {
      case "txt":
        return <>{value}</>;
      case "walletLink":
        return <a href={`https://etherscan.io/address/${value}`}>{value}</a>;
      case "email":
        return <a href={`mailto:${value}`}>{value}</a>;
    }
  };
  return (
    <div className="property" {...props} ref={ref}>
      <span className="property__name">{`${name}:`}</span>
      <span className="property__value">
        <Value />
      </span>
    </div>
  );
});
