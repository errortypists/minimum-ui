export interface ItemProps {
  name: string
  type: string[]
  default: string
  description: string
}

export interface ComponentProps {
  [key: string]: {
    displayName: string
    props: ItemProps[]
  }
}

const menus: ComponentProps = {
  tabs: {
    displayName: "Tabs",
    props: [
      {
        name: "headers",
        type: ["array"],
        default: "",
        description:
          "각 탭 아이템을 구성합니다 (item array 구성 : [{text: '', value: '', status: 'default', icon: ''}])",
      },
      {
        name: "value",
        type: ["string"],
        default: "",
        description:
          "각 탭 아이템 중 하나가 value 값과 동일한다면 해당되는 탭을 선택된걸로 표현합니다",
      },
      {
        name: "type",
        type: ["round", "rectangle"],
        default: "round",
        description: "각 탭 상단 모서리의 외형을 지정합니다",
      },
    ],
  },
  progress: {
    displayName: "Progress",
    props: [
      {
        name: "type",
        type: ["circle", "linear", "circular"],
        default: "reqiured",
        description: "진행 상태를 나타내는 형태를 지정합니다",
      },
      {
        name: "color",
        type: ["string"],
        default: "",
        description: "색상을 지정합니다",
      },
      {
        name: "backgroundColor",
        type: ["string"],
        default: "",
        description: "배경 색상을 지정합니다",
      },
      {
        name: "progress",
        type: ["number"],
        default: "100",
        description: "진행 상태가 얼마나 진행되었는지 지정합니다",
      },
      {
        name: "speed",
        type: ["number"],
        default: "2000",
        description: "type중 circular의 회전 속도를 조절합니다",
      },
    ],
  },
  flex: {
    displayName: "Flex",
    props: [
      {
        name: "align",
        type: ["center", "flex-start", "flex-end"],
        default: "center",
        description: "구성 항목의 세로 배치 설정을 지정합니다",
      },
      {
        name: "justify",
        type: [
          "center",
          "flex-start",
          "flex-end",
          "space-between",
          "space-around",
          "space-evenly",
          "stretch",
        ],
        default: "flex-start",
        description: "구성 항목의 가로 배치 설정을 지정합니다",
      },
      {
        name: "direction",
        type: ["row", "column"],
        default: "row",
        description: "구성 항목의 배치 방향을 지정합니다",
      },
      {
        name: "wrap",
        type: ["nowrap", "wrap", "wrap-reverse", "inherit"],
        default: "nowrap",
        description: "구성 항목의 wrap 형태를 지정합니다",
      },
      {
        name: "gap",
        type: ["number"],
        default: "8",
        description: "구성 항목의 간격을 지정합니다",
      },
      {
        name: "style",
        type: ["CSSProperties"],
        default: "",
        description: "일반적인 CSS style을 주입할 수 있습니다",
      },
    ],
  },
  grid: {
    displayName: "Grid",
    props: [
      {
        name: "row",
        type: ["number"],
        default: "1",
        description: "행의 개수를 지정합니다",
      },
      {
        name: "col",
        type: ["number"],
        default: "1",
        description: "열의 개수를 지정합니다",
      },
      {
        name: "align",
        type: ["center", "flex-start", "flex-end"],
        default: "center",
        description: "구성 항목의 세로 배치 설정을 지정합니다",
      },
      {
        name: "justify",
        type: ["center", "flex-start", "flex-end", "stretch"],
        default: "center",
        description: "구성 항목의 가로 배치 설정을 지정합니다",
      },
      {
        name: "gap",
        type: ["number"],
        default: "0",
        description: "구성 항목의 간격을 지정합니다",
      },
      {
        name: "style",
        type: ["CSSProperties"],
        default: "",
        description: "일반적인 CSS style을 주입할 수 있습니다",
      },
    ],
  },
  divider: {
    displayName: "Divider",
    props: [
      {
        name: "size",
        type: ["number"],
        default: "8",
        description: "두께를 지정합니다",
      },
      {
        name: "color",
        type: ["string"],
        default: "",
        description: "배경 색상을 지정합니다",
      },
      {
        name: "style",
        type: ["CSSProperties"],
        default: "",
        description: "일반적인 CSS style을 주입할 수 있습니다",
      },
    ],
  },
  typography: {
    displayName: "Typography",
    props: [
      {
        name: "style",
        type: ["CSSProperties"],
        default: "",
        description: "일반적인 CSS style을 주입할 수 있습니다",
      },
    ],
  },
  modal: {
    displayName: "Modal",
    props: [
      {
        name: "zIndex",
        type: ["number"],
        default: "1000",
        description: "z-index 를 지정합니다",
      },
      {
        name: "style",
        type: ["CSSProperties"],
        default: "",
        description: "일반적인 CSS style을 주입할 수 있습니다",
      },
      {
        name: "onClickOutside",
        type: ["function"],
        default: "",
        description: "열려있는 상태에서 비활성된 바깥 영역을 클릭시 동작합니다",
      },
    ],
  },
  collapse: {
    displayName: "Collapse",
    props: [
      {
        name: "open",
        type: ["boolean"],
        default: "false",
        description: "담고 있는 항목의 노출 여부를 지정합니다",
      },
      {
        name: "speed",
        type: ["number"],
        default: "200",
        description: "펼쳐지거나/닫혀질 때의 속도를 지정합니다",
      },
      {
        name: "style",
        type: ["CSSProperties"],
        default: "",
        description: "일반적인 CSS style을 주입할 수 있습니다",
      },
      {
        name: "width",
        type: ["number"],
        default: "100%",
        description: "펼침 영역의 너비를 지정합니다",
      },
    ],
  },
  button: {
    displayName: "Button",
    props: [
      {
        name: "size",
        type: ["samll", "medium", "large"],
        default: "medium",
        description: "크기를 지정합니다",
      },
      {
        name: "variant",
        type: ["default", "outline", "text"],
        default: "default",
        description: "외형을 지정합니다",
      },
      {
        name: "primary",
        type: ["boolean"],
        default: "false",
        description: "강조 여부를 지정합니다",
      },
      {
        name: "width",
        type: ["string"],
        default: "100%",
        description: "너비를 지정합니다",
      },
      {
        name: "leftIcon",
        type: ["ReactNode"],
        default: "",
        description: "버튼 텍스트 왼쪽에 배치할 아이콘을 지정합니다",
      },
      {
        name: "rightIcon",
        type: ["ReactNode"],
        default: "",
        description: "버튼 텍스트 오른쪽에 배치할 아이콘을 지정합니다",
      },
      {
        name: "loading",
        type: ["boolean"],
        default: "false",
        description: "로딩중 여부를 결정합니다",
      },
      {
        name: "disalbed",
        type: ["boolean"],
        default: "false",
        description: "비활성 여부를 결정합니다",
      },
      {
        name: "style",
        type: ["CSSProperties"],
        default: "",
        description: "일반적인 CSS style을 주입할 수 있습니다",
      },
    ],
  },
  textarea: {
    displayName: "Textarea",
    props: [
      {
        name: "width",
        type: ["string"],
        default: "100%",
        description: "너비를 지정합니다",
      },
      {
        name: "height",
        type: ["string"],
        default: "",
        description: "높이를 지정합니다",
      },
      {
        name: "placeholder",
        type: ["string"],
        default: "",
        description: "비어있을시 가이드로 보여줄 문구를 지정합니다",
      },
      {
        name: "cols",
        type: ["number"],
        default: "",
        description: "입력 텍스트의 열을 개수를 지정합니다",
      },
      {
        name: "rows",
        type: ["number"],
        default: "4",
        description: "입력 텍스트의 행의 개수를 지정합니다",
      },
      {
        name: "style",
        type: ["CSSProperties"],
        default: "",
        description: "일반적인 CSS style을 주입할 수 있습니다",
      },
    ],
  },
  drawer: {
    displayName: "Drawer",
    props: [
      {
        name: "open",
        type: ["boolean"],
        default: "false",
        description: "열림/닫힘 여부를 지정합니다",
      },
      {
        name: "zIndex",
        type: ["number"],
        default: "1000",
        description: "z-index 를 지정합니다",
      },
      {
        name: "size",
        type: ["number"],
        default: "200",
        description:
          "크기를 지정합니다. 생성되는 방향에 따라 너비 혹은 높이로 지정됩니다",
      },
      {
        name: "style",
        type: ["CSSProperties"],
        default: "",
        description: "일반적인 CSS style을 주입할 수 있습니다",
      },
      {
        name: "direction",
        type: ["left", "right", "top", "bottom"],
        default: "",
        description: "열림/닫힘시 어떤 방향에서 나타날지 지정합니다",
      },
      {
        name: "onClickOutside",
        type: ["function"],
        default: "",
        description: "열려있는 상태에서 비활성된 바깥 영역을 클릭시 동작합니다",
      },
    ],
  },
  table: {
    displayName: "Table",
    props: [
      {
        name: "style",
        type: ["object"],
        default: "",
        description:
          "일반적인 CSS style을 주입할 수 있습니다 구성하는 Root, Head, Body, Row, Cell 각각에도 지정 가능합니다",
      },
      {
        name: "ratio",
        type: ["array"],
        default: "",
        description:
          "구성 항목의 각 열에 비율이 전달됩니다. 미기입시 기본적으로 행의 데이터에 따라 균일하게 표현됩니다",
      },
    ],
  },
  quicktable: {
    displayName: "QuickTable",
    props: [
      {
        name: "header",
        type: ["array"],
        default: "",
        description: "문자열 배열을 사용해 테이블의 헤더를 구성합니다",
      },
      {
        name: "data",
        type: ["array"],
        default: "",
        description:
          "각 행을 구성할 객체 배열입니다. 행을 표현할때 해당 각 인덱스에 해당되는 데이터를 기반으로 테이블을 그려냅니다",
      },
      {
        name: "ratio",
        type: ["array"],
        default: "",
        description: "각 행의 비율을 지정합니다",
      },
      {
        name: "customHeader",
        type: ["function"],
        default: "",
        description:
          "각 헤더의 데이터를 기반으로 원하는대로 그려낼 수 있습니다",
      },
      {
        name: "customRow",
        type: ["function"],
        default: "",
        description: "각 행의 데이터를 기반으로 원하는대로 그려낼 수 있습니다",
      },
    ],
  },
  select: {
    displayName: "Select",
    props: [
      {
        name: "options",
        type: ["array"],
        default: "",
        description:
          "name과 value를 담고있는 아이템으로 구성된 배열입니다. 각 행의 name을 기반으로 표현됩니다",
      },
      {
        name: "width",
        type: ["string"],
        default: "100%",
        description: "너비를 지정합니다",
      },
      {
        name: "onChange",
        type: ["function"],
        default: "",
        description:
          "하나가 선택되었을때 호출되는 이벤트로 클릭한 행에 해당되는 데이터를 매개변수로 전달합니다",
      },
      {
        name: "style",
        type: ["CSSProperties"],
        default: "",
        description: "일반적인 CSS style을 주입할 수 있습니다",
      },
    ],
  },
  pagination: {
    displayName: "Pagination",
    props: [
      {
        name: "currentPage",
        type: ["number"],
        default: "",
        description: "현재 페이지를 지정합니다 ",
      },
      {
        name: "pageSize",
        type: ["number"],
        default: "",
        description: "전체 페이지 크기를 지정합니다",
      },
      {
        name: "withButton",
        type: ["boolean"],
        default: "true",
        description: "이전/다음 버튼의 활성 여부를 지정합니다",
      },
      {
        name: "customButtons",
        type: ["array"],
        default: "",
        description: "텍스트 및 아이콘을 사용하여 이전/다음 버튼을 구성합니다",
      },
      {
        name: "onChange",
        type: ["function"],
        default: "",
        description: "현재 페이지가 변경되었을 때 발생하는 이벤트입니다",
      },
      {
        name: "style",
        type: ["CSSProperties"],
        default: "",
        description: "일반적인 CSS style을 주입할 수 있습니다",
      },
      {
        name: "buttonStyle",
        type: ["CSSProperties"],
        default: "",
        description: "각 페이지 버튼들에 CSS Style을 주입할 수 있습니다",
      },
    ],
  },
  input: {
    displayName: "Input",
    props: [
      {
        name: "title",
        type: ["string"],
        default: "",
        description: "제목을 지정합니다",
      },
      {
        name: "value",
        type: ["any"],
        default: "",
        description: "값을 지정합니다",
      },
      {
        name: "width",
        type: ["string"],
        default: "100%",
        description: "너비를 지정합니다",
      },
      {
        name: "onChange",
        type: ["function"],
        default: "",
        description: "값이 변경 되었을 때 발생하는 이벤트입니다",
      },
      {
        name: "onBlur",
        type: ["function"],
        default: "",
        description: "포커스가 변경 되었을 때 발생하는 이벤트입니다",
      },
      {
        name: "style",
        type: ["CSSProperties"],
        default: "",
        description: "일반적인 CSS style을 주입할 수 있습니다",
      },
    ],
  },
  menu: {
    displayName: "Menu",
    props: [
      {
        name: "selected",
        type: ["boolean"],
        default: "false",
        description: "메뉴 아이템의 선택여부를 지정합니다.",
      },
      {
        name: "title",
        type: ["string"],
        default: "",
        description: "메뉴 그룹의 이름을 지정합니다.",
      },
      {
        name: "open",
        type: ["boolean"],
        default: "false",
        description: "메뉴 그룹의 열림/닫힘 상태를 지정합니다.",
      },
    ],
  },
  radio: {
    displayName: "Radio",
    props: [
      {
        name: "title",
        type: ["string"],
        default: "",
        description: "제목을 지정합니다",
      },
      {
        name: "direction",
        type: ["left", "right", "top", "bottom"],
        default: "right",
        description: "제목 방향을 지정합니다",
      },
      {
        name: "checked",
        type: ["boolean"],
        default: "false",
        description: "선택된 상태 여부를 지정합니다",
      },
      {
        name: "value",
        type: ["any"],
        default: "",
        description: "값을 지정합니다",
      },
      {
        name: "color",
        type: ["string"],
        default: "",
        description: "색상을 지정합니다",
      },
      {
        name: "disabled",
        type: ["boolean"],
        default: "false",
        description: "활성 여부를 지정합니다",
      },
      {
        name: "size",
        type: ["small", "medium", "large"],
        default: "medium",
        description: "크기를 지정합니다",
      },
      {
        name: "onChange",
        type: ["function"],
        default: "",
        description:
          "선택시 발생하는 이벤트입니다. 이때 매개변수로 value로 지정한 값이 전달됩니다",
      },
    ],
  },
  checkbox: {
    displayName: "Checkbox",
    props: [
      {
        name: "title",
        type: ["string"],
        default: "",
        description: "제목을 지정합니다",
      },
      {
        name: "direction",
        type: ["left", "right", "top", "bottom"],
        default: "left",
        description: "제목 방향을 지정합니다",
      },
      {
        name: "checked",
        type: ["boolean"],
        default: "false",
        description: "선택된 상태 여부를 지정합니다",
      },
      {
        name: "value",
        type: ["any"],
        default: "",
        description: "값을 지정합니다",
      },
      {
        name: "color",
        type: ["string"],
        default: "",
        description: "색상을 지정합니다",
      },
      {
        name: "disabled",
        type: ["boolean"],
        default: "",
        description: "활성 여부를 지정합니다",
      },
      {
        name: "size",
        type: ["small", "medium", "large"],
        default: "medium",
        description: "크기를 지정합니다",
      },
      {
        name: "onChange",
        type: ["function"],
        default: "",
        description:
          "선택시 발생하는 이벤트입니다. 이때 매개변수로 value로 지정한 값이 전달됩니다",
      },
    ],
  },
}

export default menus
