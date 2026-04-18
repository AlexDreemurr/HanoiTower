import React from "react";
import styled from "styled-components";

import Icon from "../Icon/Icon";
import { getDisplayedValue } from "./Select.helpers";
import { COLORS } from "../../Constant";
const Select = ({ label, value, onChange, children, ...delegated }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange} {...delegated}>
        {children}
      </NativeSelect>
      <SelectWrapper>
        <SelectedText>{displayedValue}</SelectedText>
        <SelectIcon style={{ "--size": 24 + "px" }}>
          <Icon id="chevron-down" size={24} strokeWidth={2} />
        </SelectIcon>
      </SelectWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`;
const NativeSelect = styled.select`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;
const SelectWrapper = styled.div`
  height: 43px;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  padding: 12px 52px 12px 16px;
  border-radius: 8px;
  ${NativeSelect}:hover + & {
    color: black;
  }
  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
  ${NativeSelect}:disabled + & {
    color: ${COLORS.transparentGray35};
    pointer-events: all;
    cursor: not-allowed;
  }
`;
const SelectedText = styled.p`
  font-size: ${16 / 16}rem;
`;
const SelectIcon = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 10px;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`;
export default Select;
