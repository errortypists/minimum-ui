import { useState } from "react"
import { Flex, Pagination } from "ui-kit"

const PaginationPage: React.FC = () => {
  const [page, setPage] = useState(1)
  return (
    <Flex direction="column" align="flex-start">
      <Pagination
        currentPage={page}
        pageSize={100}
        onChange={(page) => setPage(page)}
      />
      <Pagination
        currentPage={7}
        pageSize={20}
        onChange={(page) => console.log(page)}
        buttonTexts={["이전", "다음"]}
      />
    </Flex>
  )
}

export default PaginationPage
