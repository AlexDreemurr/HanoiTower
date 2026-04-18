import styled from "styled-components";
import { COLORS } from "../Constant";
export default function Footer() {
  return (
    <Wrapper>
      <Text>AlexDreemurr® 2026. All Rights Reserved.</Text>
      <Text>Made by Fang Xinrui(1%), Supported by AlexDreemurr(99%):D</Text>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 75px;
  background-color: hsl(0deg 0% 15%);
  color: hsl(0deg 0% 55%);
  display: flex;
  gap: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  font-size: 0.75rem;
`;
