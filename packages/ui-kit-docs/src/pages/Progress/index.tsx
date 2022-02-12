import React from "react"

import { Progress, Flex } from "ui-kit"

import useStatus from "../../hooks/useStatus"
import Layout from "../../components/Layout"
import { PropsBox } from "../../components"

const {
  ContentsLayout,
  ComponentWrapper,
  CodeWrapper,
  Title,
  Description,
  ComponentTitle,
  ComponentDescription,
} = Layout

const ProgressPage: React.FC = () => {
  const { selectedMenu } = useStatus()

  return (
    <ContentsLayout>
      <Title>Progress</Title>
      <Description>
        progress는 어떤 상황의 진행상태나, 유예를 표현하기위한 컴포넌트입니다.
        비율을 입력하여 상태를 표현할 수 있습니다.
      </Description>
      <ComponentTitle>Basic progress</ComponentTitle>
      <ComponentWrapper>
        <Flex direction="column" justify="center" gap={0}>
          <Progress type={"linear"} progress={10} />
          <br />
          <Progress type={"linear"} progress={30} />
          <br />
          <Progress type={"linear"} progress={50} />
          <br />
          <Progress type={"linear"} progress={70} />
          <br />
          <Progress type={"linear"} progress={100} />
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`<Progress type={"linear"} progress={10} />
<Progress type={"linear"} progress={30} />
<Progress type={"linear"} progress={50} />
<Progress type={"linear"} progress={70} />
<Progress type={"linear"} progress={100} />
`}
      />
      <ComponentTitle>Type</ComponentTitle>
      <ComponentDescription>
        진행상태를 표현할 형태를 제공합니다.
      </ComponentDescription>
      <ComponentWrapper>
        <Flex direction="column" justify="center" gap={0}>
          <Flex direction="row" justify="center" gap={20}>
            <Progress type={"linear"} progress={30} />
            <Progress type={"linear"} progress={60} />
            <Progress type={"linear"} progress={90} />
          </Flex>
          <br />
          <Flex direction="row" justify="center" gap={20}>
            <Progress type={"circle"} progress={30} />
            <Progress type={"circle"} progress={60} />
            <Progress type={"circle"} progress={90} />
          </Flex>
          <br />
          <Flex direction="row" justify="center" gap={20}>
            <Progress type={"circular"} progress={30} />
            <Progress type={"circular"} progress={60} />
            <Progress type={"circular"} progress={90} />
          </Flex>
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`<Progress type={"linear"} progress={30} />
<Progress type={"circle"} progress={30} />
<Progress type={"circular"} progress={30} />`}
      />
      <ComponentTitle>Color & Background</ComponentTitle>
      <ComponentDescription>
        진행에 표현할 색깔과 배경색깔을 지정가능합니다.
      </ComponentDescription>
      <ComponentWrapper>
        <Flex direction="column" justify="center" gap={0}>
          <Progress
            type={"linear"}
            progress={10}
            color="red"
            bgColor="#eeeeee"
          />
          <br />
          <Progress
            type={"linear"}
            progress={50}
            color="blue"
            bgColor="#aaaaaa"
          />
          <br />
          <Progress
            type={"linear"}
            progress={90}
            color="green"
            bgColor="#888888"
          />
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`<Progress type={"linear"} progress={10} color="red" bgColor="#eeeeee" />
<Progress type={"linear"} progress={50} color="blue" bgColor="#aaaaaa" />
<Progress type={"linear"} progress={90} color="green" bgColor="#888888" />`}
      />
      <PropsBox name={selectedMenu?.id || ""} />
    </ContentsLayout>
  )
}

export default ProgressPage
