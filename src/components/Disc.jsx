import styled from "styled-components";
import { DISK_COLORS } from "../Constant";
export default function Disc({ radius, thickness, pos, number }) {
  return (
    <rect
      x={-radius}
      y={90 - thickness * pos}
      width={radius * 2}
      height={thickness}
      rx={thickness / 2}
      fill={`hsl(${number * 60 - 60}, 80%, 60%)`}
      stroke={`hsl(${number * 60 - 60}, 80%, 30%)`}
      strokeWidth={1}
      strokeOpacity={0.5}
    />
  );
}
//
