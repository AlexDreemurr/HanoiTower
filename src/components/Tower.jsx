import styled from "styled-components";
import Disc from "./Disc";

const RADIUS_TOP = {
  1: 40,
  2: 40,
  3: 40,
  4: 40,
  5: 40,
  6: 40,
};
const RADIUS_GAP = {
  1: 20,
  2: 15,
  3: 10,
  4: 8,
  5: 7,
  6: 6,
};
const THICKNESS = {
  1: 19,
  2: 17,
  3: 15,
  4: 13,
  5: 11,
  6: 10,
};
export default function Tower({ n, discList }) {
  return (
    <Wrapper>
      <SvgWrapper viewBox="-50 -100 100 200">
        <Pillar x="-3" y="-60" width="6" height="160" rx="3" />
        <Base x="-45" y="90" width="90" height="10" rx="2" />

        {discList.map((disc, index) => (
          <Disc
            key={disc}
            radius={RADIUS_TOP[n] - RADIUS_GAP[n] * (n - disc)}
            thickness={THICKNESS[n]}
            pos={index + 1}
            number={disc}
          />
        ))}
      </SvgWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  /* border: 1px black solid; */
`;
const SvgWrapper = styled.svg`
  width: 100%;
`;
const Base = styled.rect`
  fill: hsl(100, 50%, 5%);
`;
const Pillar = styled.rect`
  fill: hsl(100, 50%, 5%);
`;
