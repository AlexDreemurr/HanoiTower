import styled from "styled-components";
import React from "react";
import Tower from "./Tower";
export default function TowerGroup({ discNum, currentStep, hanoiStepList }) {
  const currentHanoiStep = hanoiStepList[currentStep];

  return (
    <Wrapper>
      <Tower n={discNum} discList={currentHanoiStep.A}></Tower>
      <Tower n={discNum} discList={currentHanoiStep.B}></Tower>
      <Tower n={discNum} discList={currentHanoiStep.C}></Tower>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  max-width: 600px;
`;
