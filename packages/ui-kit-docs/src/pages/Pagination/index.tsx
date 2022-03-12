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
      <Description>페이지의 정보를 보여줍니다.</Description>
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
      <ComponentTitle>Text</ComponentTitle>
      <ComponentWrapper>
        <Pagination
          currentPage={7}
          pageSize={20}
          onChange={(page: number) => console.log(page)}
          customButtons={["Prev", "Next"]}
        />
      </ComponentWrapper>
      <CodeWrapper
        code={`<Pagination
  currentPage={7}
  pageSize={20}
  onChange={(page) => console.log(page)}
  customButtons={["Prev", "Next"]}
/>`}
      />
      <ComponentTitle>Icon</ComponentTitle>
      <ComponentWrapper>
        <Pagination
          currentPage={14}
          pageSize={35}
          onChange={(page: number) => console.log(page)}
          customButtons={[<div>{"<"}</div>, <div>{">"}</div>]}
        />
      </ComponentWrapper>
      <CodeWrapper
        code={`<Pagination
  currentPage={14}
  pageSize={35}
  onChange={(page) => console.log(page)}
  customButtons={[<div>{"<"}</div>, <div>{">"}</div>]}
/>`}
      />
    </ContentsLayout>
  )
}

export default PaginationPage
