import styled from "styled-components";
import { Typography } from "ui-kit";

const { Title, SubTitle, Body, Caption } = Typography;

const TypographyPage: React.FC = () => {
  return (
    <Wrapper>
      <Title>
        안녕하세요.
        <br />
        제목으로 쓰이는 공간입니다
      </Title>
      <SubTitle>부제목으로 쓰이는 공간이에요</SubTitle>
      <Body>
        내용입니다 내용 내용입니다 내용 내용입니다 내용 내용입니다 내용
        내용입니다 내용 내용입니다 내용 내용입니다 내용 내용입니다 내용
        내용입니다 내용 내용입니다 내용 내용입니다 내용 내용입니다 내용
        내용입니다 내용 내용입니다 내용
      </Body>
      <Body>
        내용입니다 내용 내용입니다 내용 내용입니다 내용 내용입니다 내용
        내용입니다 내용 내용입니다 내용 내용입니다 내용 내용입니다 내용
        내용입니다 내용 내용입니다 내용 내용입니다 내용 내용입니다 내용
        내용입니다 내용 내용입니다 내용
      </Body>
      <Caption>사이드 문구입니다</Caption>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 500px;
`;

export default TypographyPage;
