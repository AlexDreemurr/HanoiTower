import styled from "styled-components";
import { hanoi } from "../utils";
import Select from "./Select/Select";
import { AVALABLE_N, AVALABLE_SPEED, COLORS } from "../Constant";
import React from "react";
export default function ControlPanel({
  discNum,
  setDiscNum,
  currentStep,
  setCurrentStep,
  hanoiStepList,
  setHanoiStepList,
}) {
  const [isAutoPlay, setIsAutoPlay] = React.useState(false);
  const [playSpeed, setPlaySpeed] = React.useState(500);
  React.useEffect(() => {
    if (!isAutoPlay) {
      return;
    }
    const intervalId = setInterval(() => {
      if (currentStep >= parseInt(Math.pow(2, discNum)) - 1) {
        setIsAutoPlay(false);
        return;
      }
      setCurrentStep(currentStep + 1);
    }, playSpeed);
    return () => {
      clearInterval(intervalId);
    };
  }, [isAutoPlay, currentStep]);
  return (
    <Wrapper>
      <Box>
        <SelectWrapper>
          <label htmlFor="n-select">圆盘的数量</label>
          <Select
            disabled={isAutoPlay}
            id="n-select"
            value={discNum}
            onChange={(event) => {
              const newVal = +event.target.value;
              setDiscNum(newVal);
              setHanoiStepList(hanoi(newVal, "A", "B", "C"));
              setCurrentStep(0);
            }}
          >
            {AVALABLE_N.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </Select>
        </SelectWrapper>

        <SelectWrapper>
          <label htmlFor="speed-select">速度</label>
          <Select
            id="speed-select"
            disabled={isAutoPlay}
            value={playSpeed}
            onChange={(event) => {
              const newVal = +event.target.value;
              setPlaySpeed(newVal);
            }}
          >
            {Object.keys(AVALABLE_SPEED).map((speed) => (
              <option key={speed} value={AVALABLE_SPEED[speed]}>
                {speed}
              </option>
            ))}
          </Select>
        </SelectWrapper>
        <Text>
          步骤 <NumberText>{currentStep}</NumberText>
        </Text>
      </Box>

      <ButtonGroup>
        <Button
          disabled={isAutoPlay}
          onClick={() => {
            if (currentStep <= 0) {
              alert("已经是第0步了!");
            } else {
              setCurrentStep(currentStep - 1);
            }
          }}
        >
          上一步
        </Button>
        <Button
          disabled={isAutoPlay}
          onClick={() => {
            if (currentStep >= parseInt(Math.pow(2, discNum)) - 1) {
              alert("已经是最后一步了!");
            } else {
              setCurrentStep(currentStep + 1);
            }
          }}
        >
          下一步
        </Button>
        <Button
          onClick={() => {
            setIsAutoPlay(false);
            setCurrentStep(0);
          }}
        >
          重置
        </Button>
        <Button
          onClick={() => {
            if (currentStep >= parseInt(Math.pow(2, discNum)) - 1) {
              alert("已经是第0步了!");
            } else {
              setIsAutoPlay(true);
            }
          }}
        >
          播放
        </Button>
        <Button onClick={() => setIsAutoPlay(false)}>暂停</Button>
      </ButtonGroup>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  gap: 20px;
  /* border: 1px black solid; */
`;
const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Box = styled.div`
  /* flex: 1 0 190px; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 10px;
`;
const ButtonGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
const Button = styled.button`
  flex: 1 0 0;
  &:disabled {
    pointer-events: all;
    cursor: not-allowed;
  }
`;
const Text = styled.p`
  /* flex: 1 0 190px; */
`;
const NumberText = styled.span`
  display: inline-block;
  background-color: ${COLORS.transparentGray15};
  padding: 10px;
  border-radius: 5px;
`;
