import React from "react";

export const SelectCustomOption = ({ label, value }) => {
  return (
    <div className="currency">
      <i className={`currency-flag currency-flag-${value}`} />
      {label}
    </div>
  );
}