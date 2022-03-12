import Layout from "../../components/Layout"
import Header from "../../components/Header"

const OverviewPage: React.FC = () => {
  return (
    <Layout.MainLayout>
      <Layout.LeftWrapper />
      <Layout.RightWrapper>
        <Header></Header>
      </Layout.RightWrapper>
    </Layout.MainLayout>
  )
}

export default OverviewPage
