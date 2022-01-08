import styled from "styled-components"

const MainLayout = styled.div`
  width: 100%;
  max-width: 1024px;
  min-height: 100vh;
  margin: 0 auto;
  height: 100%;
  display: flex;

  @media only screen and (max-width: 820px) {
    justify-content: center;
  }
`
const LeftWrapper = styled.div`
  flex: 1;
  position: relative;
  min-width: 420px;
  max-width: 604px;
  border: 1px solid red;

  @media only screen and (max-width: 820px) {
    display: none;
  }
`

const RightWrapper = styled.div`
  position: relative;
  width: 420px;
  border: 1px solid blue;
  /* zoom: 1.25; */
`

const Layout = {
  MainLayout,
  LeftWrapper,
  RightWrapper,
}

export default Layout
