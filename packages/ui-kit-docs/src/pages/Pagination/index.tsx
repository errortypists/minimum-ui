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
      <Description>
        Pagination 컴퍼넌트는 게시판등 목록화 하여 각각의 데이터를 페이지로
        순번을 매겨 관리할때 사용합니다.
      </Description>
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
      <Description>
        Pagination의 이전 페이지, 다음 페이지의 구성을 텍스트로 표기할 수
        있습니다.
      </Description>
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
      <Description>
        Pagination의 이전 페이지, 다음 페이지의 구성을 아이콘으로 표기할 수
        있습니다.
      </Description>
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
