import styled from "styled-components";

export default function Header() {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo src="/hduLogo.png" />
        <Text>杭州电子科技大学</Text>
      </LogoWrapper>
      <Title>汉诺塔演示: 使用React与Styled-components</Title>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  text-align: center;
  margin-bottom: -2rem;
  padding: 1rem 1rem 0 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Logo = styled.img`
  width: 70px;
`;
const LogoWrapper = styled.div``;
const Text = styled.p`
  font-size: 0.55rem;
`;
const Title = styled.p`
  margin-top: -0.5rem;
  font-size: 1.25rem;
  font-weight: 500;
`;
