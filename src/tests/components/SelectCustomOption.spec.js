import React from "react";
import { shallow } from "enzyme";
import { SelectCustomOption } from "components/SelectCustomOption";

describe("SelectCustomOption", () => {
  const getComp = (props) => shallow(
    <SelectCustomOption
      label={props?.label}
      value={props?.value}
    />
  );

  it ("should not explode without given props", () => {
    const comp = getComp();
    expect(comp.exists()).toBe(true);
    expect(comp.find(".currency-flag-undefined").exists()).toBe(true);
    expect(comp.find(".currency-option").text()).toEqual("");
  });

  it("should display currency flag for given value", () => {
    const comp = getComp({ label: "EUR", value: "eur" });
    expect(comp.find(".currency-flag-eur").exists()).toBe(true);
  });

  it("should display given label", () => {
    const comp = getComp({ label: "EUR", value: "eur" });
    expect(comp.find(".currency-option").text()).toEqual("EUR");
  });
});
