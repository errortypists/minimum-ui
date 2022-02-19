import styled from "styled-components"
import { BaseColor } from "../../assets/styles/color"

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <a href="https://github.com/kdilot" target="_blank" rel="noreferrer">
        Kdilot
      </a>
      <span />
      <a href="https://github.com/Kelten89" target="_blank" rel="noreferrer">
        Kelten
      </a>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 41px;
  width: 100%;
  border-top: 1px solid ${BaseColor.border};

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1px;
    height: 12px;
    margin: 0 10px;
    background: ${BaseColor.font};
  }

  a {
    text-decoration: none;
    font-family: Kanit;
    font-weight: 200;
  }
`

export default Footer
