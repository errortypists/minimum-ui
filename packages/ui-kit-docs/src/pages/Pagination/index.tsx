import { Pagination } from "ui-kit"
import Layout from "../../components/Layout"

const {
  ContentsLayout,
  ComponentWrapper,
  ComponentTitle,
  CodeWrapper,
  Title,
  Description,
} = Layout

const PaginationPage: React.FC = () => {
  return (
    <ContentsLayout>
      <Title>Pagination</Title>
      <Description>Information of page</Description>
      <ComponentWrapper>
        <Pagination
          currentPage={5}
          pageSize={100}
          onChange={(page: number) => console.log(page)}
        />
      </ComponentWrapper>
      <CodeWrapper
        code={`<Pagination
  currentPage={5}
  pageSize={100}
  onChange={(page) => console.log(page)}
/>`}
      />
      <ComponentTitle>Texts</ComponentTitle>
      <ComponentWrapper>
        <Pagination
          currentPage={7}
          pageSize={20}
          onChange={(page: number) => console.log(page)}
          buttonTexts={["Prev", "Next"]}
        />
      </ComponentWrapper>
      <CodeWrapper
        code={`<Pagination
  currentPage={7}
  pageSize={20}
  onChange={(page) => console.log(page)}
  buttonTexts={["Prev", "Next"]}
/>`}
      />
      <ComponentTitle>Icons</ComponentTitle>
      <ComponentWrapper>
        <Pagination
          currentPage={14}
          pageSize={35}
          onChange={(page: number) => console.log(page)}
          buttonIcons={[<div>{"<"}</div>, <div>{">"}</div>]}
        />
      </ComponentWrapper>
      <CodeWrapper
        code={`<Pagination
  currentPage={14}
  pageSize={35}
  onChange={(page) => console.log(page)}
  buttonIcons={[<div>{"<"}</div>, <div>{">"}</div>]}
/>`}
      />
    </ContentsLayout>
  )
}

export default PaginationPage
