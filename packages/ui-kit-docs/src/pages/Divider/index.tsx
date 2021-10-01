import styled from "styled-components";
import { Divider } from "ui-kit";

const DividerPage: React.FC = () => {
  return (
    <Wrapper>
      Section1
      <Divider />
      Section2
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 500px;
`;

export default DividerPage;
