import styled from "styled-components";
import ControlPanel from "./ControlPanel";
import TowerGroup from "./TowerGroup";
import Header from "./Header";
import Footer from "./Footer";
import React from "react";
import { range, hanoi } from "../utils";

export default function Main() {
  const [discNum, setDiscNum] = React.useState(3);
  const [hanoiStepList, setHanoiStepList] = React.useState(() =>
    hanoi(discNum, "A", "B", "C")
  );
  const [currentStep, setCurrentStep] = React.useState(0);

  return (
    <>
      <Wrapper>
        <Header />
        <TowerGroup
          discNum={discNum}
          currentStep={currentStep}
          hanoiStepList={hanoiStepList}
        />
        <ControlPanel
          setDiscNum={setDiscNum}
          discNum={discNum}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          hanoiStepList={hanoiStepList}
          setHanoiStepList={setHanoiStepList}
        />
      </Wrapper>
      <Footer></Footer>
    </>
  );
}
const Wrapper = styled.main`
  height: 100%;
  margin: 0 auto;
  max-width: 600px;
`;
