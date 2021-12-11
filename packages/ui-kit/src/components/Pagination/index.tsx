import React from "react"
import { useState, useMemo } from "react"
import styled, { css } from "styled-components"
import BaseStyle from "assets/styles/base"
import { BaseColor } from "assets/styles/color"
import { useEffect } from "react"
import Flex from "components/Flex"
import Icon from "components/Icon"

interface Props {
  currentPage: number
  pageSize: number
  withButton?: boolean
  buttonIcons?: [React.ReactElement, React.ReactElement]
  buttonTexts?: [string, string]
  onChange(page: number): void
  style?: React.CSSProperties
  buttonStyle?: React.CSSProperties
}

const Pagination: React.FC<Props> = ({
  currentPage,
  pageSize,
  withButton = true,
  buttonIcons = [null, null],
  buttonTexts = [null, null],
  onChange,
  style,
  buttonStyle,
}) => {
  const PAGINATION_SIZE = 5
  const [page, setPage] = useState<number>(currentPage)
  const [prevIcon, nextIcon] = buttonIcons
  const [prevText, nextText] = buttonTexts

  const generatePages = (current: number, max: number) => {
    const floorPaginationSize = Math.floor(PAGINATION_SIZE / 2)
    if (current + floorPaginationSize <= PAGINATION_SIZE)
      return Array(PAGINATION_SIZE)
        .fill(1)
        .map((size, index) => size + index)
    if (current + PAGINATION_SIZE - floorPaginationSize > max) {
      return Array(PAGINATION_SIZE)
        .fill(max)
        .map((size, index) => size - PAGINATION_SIZE + (index + 1))
    }
    return Array(PAGINATION_SIZE)
      .fill(current)
      .map((size, index) => size - floorPaginationSize + index)
  }
  const pages = useMemo(() => generatePages(page, pageSize), [page, pageSize])
  const disablePrev = useMemo(() => page === 1, [page])
  const disableNext = useMemo(() => page === pageSize, [page, pageSize])

  const onClickNextPage = (isNext: boolean = true) => {
    if (isNext && page === pageSize) return
    if (!isNext && page === 1) return
    setPage((page) => (isNext ? page + 1 : page - 1))
  }

  useEffect(() => {
    if (page !== currentPage) {
      onChange(page)
    }
  }, [page, currentPage, onChange])

  return (
    <Flex>
      {withButton && (
        <PageButton
          disabled={disablePrev}
          onClick={() => (disablePrev ? null : onClickNextPage(false))}
          style={buttonStyle}
        >
          {prevText || prevIcon || (
            <IconWrapper>
              <Icon name="arrowLeft" color={BaseColor.default} />
            </IconWrapper>
          )}
        </PageButton>
      )}
      {pages.map((_, index) => (
        <BoxWrapper
          key={index}
          onClick={() => (_ === page ? null : setPage(_))}
          isSelected={_ === page}
          style={style}
        >
          {_}
        </BoxWrapper>
      ))}
      {withButton && (
        <PageButton
          disabled={disableNext}
          onClick={() => (disableNext ? null : onClickNextPage())}
          style={buttonStyle}
        >
          {nextText || nextIcon || (
            <IconWrapper>
              <Icon name="arrowRight" />
            </IconWrapper>
          )}
        </PageButton>
      )}
    </Flex>
  )
}

const BoxWrapper = styled.div<any>`
  min-width: 38px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border: 1px solid ${BaseColor.inputBorder};
  border-radius: ${BaseStyle.radius};
  cursor: pointer;
  padding: 0 5px;
  padding-bottom: 1px;
  box-sizing: border-box;
  user-select: none;

  ${(props) =>
    props.isSelected &&
    css`
      font-weight: bold;
      background: ${BaseColor.default};
      border: 1px solid ${BaseColor.default};
      color: #fff;
    `}
`

const PageButton = styled(BoxWrapper)`
  min-width: 30px;
  width: auto;
  padding-bottom: 0;

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.2;
    `}
`

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 13px;
  height: 13px;
  line-height: 13px;
`

export default Pagination
