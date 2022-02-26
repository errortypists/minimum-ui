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
        default: "medium",
        description:
          "각 헤더의 아이템을 구성하는 속성입니다. 아래 headers item을 묶음으로써 갖고 있는 속성입니다.",
      },
      {
        name: "header item",
        type: ["object"],
        default: "",
        description: "{text: '', value: '', status: 'default', icon: ''}",
      },
      {
        name: "value",
        type: ["string"],
        default: "",
        description:
          "HeaderItem value와 일치하는지 검사할때 사용하는 값으로 탭의 선택여부를 결정합니다",
      },
      {
        name: "type",
        type: ["round", "rectangle"],
        default: "round",
        description: "Tab의 상단 모서리의 외형을 결정합니다",
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
        description: "진행바의 형태를 설정합니다.",
      },
      {
        name: "color",
        type: ["string"],
        default: "#00ff00",
        description: "진행바 색깔을 지정합니다",
      },
      {
        name: "backgroundColor",
        type: ["string"],
        default: "#D8D8D8",
        description: "진행바의 배경 색깔을 지정합니다.",
      },
      {
        name: "progress",
        type: ["number"],
        default: "100",
        description: "진행바의 진행도를 설정합니다.",
      },
      {
        name: "speed",
        type: ["number"],
        default: "2000",
        description: "circular 타입의 회전 속도를 조절합니다.",
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
        description: "The align items",
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
        description: "The justify content",
      },
      {
        name: "direction",
        type: ["row", "column"],
        default: "row",
        description: "The row",
      },
      {
        name: "wrap",
        type: ["nowrap", "wrap", "wrap-reverse", "inherit"],
        default: "nowrap",
        description: "The wrap",
      },
      {
        name: "gap",
        type: ["number"],
        default: "8",
        description: "The gap of inside components",
      },
      {
        name: "style",
        type: ["CSSProperties"],
        default: "",
        description: "The CSS style with object",
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
        description: "The count of row",
      },
      {
        name: "col",
        type: ["number"],
        default: "1",
        description: "The count of column",
      },
      {
        name: "align",
        type: ["center", "flex-start", "flex-end"],
        default: "center",
        description: "The align items",
      },
      {
        name: "justify",
        type: ["center", "flex-start", "flex-end", "stretch"],
        default: "center",
        description: "The justify content",
      },
      {
        name: "gap",
        type: ["number"],
        default: "0",
        description: "The gap of inside components",
      },
      {
        name: "style",
        type: ["CSSProperties"],
        default: "",
        description: "The CSS style with object",
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
        description: "The size of divider (only box type)",
      },
      {
        name: "color",
        type: ["string"],
        default: "",
        description: "The color of divider height",
      },
      {
        name: "style",
        type: ["CSSProperties"],
        default: "",
        description: "The style object",
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
        description: "The CSS style with object",
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
        description: "모달의 z-index 를 조정합니다",
      },
      {
        name: "style",
        type: ["CSSProperties"],
        default: "",
        description: "The CSS style with object",
      },
      {
        name: "onClickOutside",
        type: ["function"],
        default: "",
        description:
          "모달 활성상태에서 바깥 영역 클릭시 동작하는 이벤트입니다.",
      },
    ],
  },
  collapse: {
    displayName: "Collapse",
    props: [
      {
        name: "isOpen",
        type: ["boolean"],
        default: "false",
        description: "Collapse 컴포넌트의 펼침 여부를 결정합니다.",
      },
      {
        name: "speed",
        type: ["number"],
        default: "200",
        description:
          "Collapse 컴포넌트가 펼쳐지거나/닫혀질 때의 속도를 결정합니다.",
      },
      {
        name: "style",
        type: ["CSSProperties"],
        default: "",
        description: "The CSS style with object",
      },
      {
        name: "width",
        type: ["number"],
        default: "100%",
        description: "펼침영역의 너비를 지정합니다",
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
        description: "The size of button",
      },
      {
        name: "variant",
        type: ["default", "outline", "text"],
        default: "default",
        description: "The variant type",
      },
      {
        name: "primary",
        type: ["boolean"],
        default: "false",
        description: "Set the primary button",
      },
      {
        name: "width",
        type: ["string"],
        default: "",
        description: "The width size",
      },
      {
        name: "leftIcon",
        type: ["ReactNode"],
        default: "",
        description: "Text with left icon",
      },
      {
        name: "rightIcon",
        type: ["ReactNode"],
        default: "",
        description: "Text with right icon",
      },
      {
        name: "loading",
        type: ["boolean"],
        default: "false",
        description: "The status of loading",
      },
      {
        name: "style",
        type: ["CSSProperties"],
        default: "",
        description: "The CSS style with object",
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
        description: "The width of textarea",
      },
      {
        name: "height",
        type: ["string"],
        default: "",
        description: "The height of textarea",
      },
      {
        name: "placeholder",
        type: ["string"],
        default: "",
        description: "The placeholder of textarea",
      },
      {
        name: "cols",
        type: ["number"],
        default: "",
        description: "The cols of textarea",
      },
      {
        name: "rows",
        type: ["number"],
        default: "4",
        description: "The rows of textarea",
      },
      {
        name: "style",
        type: ["CSSProperties"],
        default: "",
        description: "The CSS style with object",
      },
    ],
  },
  drawer: {
    displayName: "Drawer",
    props: [
      {
        name: "isOpen",
        type: ["boolean"],
        default: "false",
        description: "Drawer의 열림/닫힘 상태를 결정합니다",
      },
      {
        name: "zIndex",
        type: ["number"],
        default: "1000",
        description: "Drawer의 z-index를 결정합니다",
      },
      {
        name: "size",
        type: ["number"],
        default: "200",
        description:
          "Drawer의 사이즈를 조정합니다. 생성되는 방향에 따라 너비 혹은 높이가 결정됩니다",
      },
      {
        name: "style",
        type: ["CSSProperties"],
        default: "",
        description: "The CSS style with object",
      },
      {
        name: "direction",
        type: ["left", "right", "top", "bottom"],
        default: "",
        description: "Drawer의 생성되는 방향을 결정합니다",
      },
      {
        name: "onClickOutside",
        type: ["function"],
        default: "",
        description:
          "Drawer가 열려있는 상태에서 바깥영역 클릭시 실행되는 이벤트입니다",
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
          "구성하는 Root, Head, Body, Row, Cell 에 각각의 스타일을 주입할 수 있습니다.",
      },
      {
        name: "ratio",
        type: ["array"],
        default: "",
        description:
          "Root에 주입하면 하위 구성요소의 각 열의 비율이 전달됩니다. 미기입시 기본적으로 행의 데이터에 따라 균일하게 표현됩니다.",
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
        description: "문자열 배열을 사용해 테이블의 헤더를 구성합니다.",
      },
      {
        name: "data",
        type: ["array"],
        default: "",
        description:
          "테이블의 각 행을 표현할 데이터 객체 배열입니다. 행을 표현할때 해당 데이터를 기반으로 하여 테이블을 그려냅니다.",
      },
      {
        name: "ratio",
        type: ["array"],
        default: "",
        description: "테이블 각 행의 비율을 정합니다.",
      },
      {
        name: "createRow",
        type: ["function"],
        default: "",
        description:
          "테이블을 그려낼때 각 행의 각 셀을 어떻게 그려낼지 함수의 리턴으로 그려냅니다.",
      },
    ],
  },
  select: {
    displayName: "Select",
    props: [
      {
        name: "variant",
        type: ["default", "outline", "text"],
        default: "medium",
        description: "The variant type",
      },
      {
        name: "size",
        type: ["samll", "medium", "large"],
        default: "medium",
        description: "The size of button",
      },
      {
        name: "primary",
        type: ["boolean"],
        default: "false",
        description: "Set the primary button",
      },
      {
        name: "width",
        type: ["string"],
        default: "",
        description: "The width size",
      },
      {
        name: "leftIcon",
        type: ["any"],
        default: "",
        description: "Button with left icon",
      },
      {
        name: "rightIcon",
        type: ["any"],
        default: "",
        description: "Button with right icon",
      },
      {
        name: "loading",
        type: ["boolean"],
        default: "false",
        description: "The status of loading",
      },
      {
        name: "style",
        type: ["CSSProperties"],
        default: "",
        description:
          "The CSS style with object The CSS style with object The CSS style with object The CSS style with object",
      },
    ],
  },
  pagination: {
    displayName: "Pagination",
    props: [
      {
        name: "variant",
        type: ["default", "outline", "text"],
        default: "medium",
        description: "The variant type",
      },
      {
        name: "size",
        type: ["samll", "medium", "large"],
        default: "medium",
        description: "The size of button",
      },
      {
        name: "primary",
        type: ["boolean"],
        default: "false",
        description: "Set the primary button",
      },
      {
        name: "width",
        type: ["string"],
        default: "",
        description: "The width size",
      },
      {
        name: "leftIcon",
        type: ["any"],
        default: "",
        description: "Button with left icon",
      },
      {
        name: "rightIcon",
        type: ["any"],
        default: "",
        description: "Button with right icon",
      },
      {
        name: "loading",
        type: ["boolean"],
        default: "false",
        description: "The status of loading",
      },
      {
        name: "style",
        type: ["CSSProperties"],
        default: "",
        description:
          "The CSS style with object The CSS style with object The CSS style with object The CSS style with object",
      },
    ],
  },
  input: {
    displayName: "Input",
    props: [
      {
        name: "variant",
        type: ["default", "outline", "text"],
        default: "medium",
        description: "The variant type",
      },
      {
        name: "size",
        type: ["samll", "medium", "large"],
        default: "medium",
        description: "The size of button",
      },
      {
        name: "primary",
        type: ["boolean"],
        default: "false",
        description: "Set the primary button",
      },
      {
        name: "width",
        type: ["string"],
        default: "",
        description: "The width size",
      },
      {
        name: "leftIcon",
        type: ["any"],
        default: "",
        description: "Button with left icon",
      },
      {
        name: "rightIcon",
        type: ["any"],
        default: "",
        description: "Button with right icon",
      },
      {
        name: "loading",
        type: ["boolean"],
        default: "false",
        description: "The status of loading",
      },
      {
        name: "style",
        type: ["CSSProperties"],
        default: "",
        description:
          "The CSS style with object The CSS style with object The CSS style with object The CSS style with object",
      },
    ],
  },
  menu: {
    displayName: "Menu",
    props: [
      {
        name: "variant",
        type: ["default", "outline", "text"],
        default: "medium",
        description: "The variant type",
      },
      {
        name: "size",
        type: ["samll", "medium", "large"],
        default: "medium",
        description: "The size of button",
      },
      {
        name: "primary",
        type: ["boolean"],
        default: "false",
        description: "Set the primary button",
      },
      {
        name: "width",
        type: ["string"],
        default: "",
        description: "The width size",
      },
      {
        name: "leftIcon",
        type: ["any"],
        default: "",
        description: "Button with left icon",
      },
      {
        name: "rightIcon",
        type: ["any"],
        default: "",
        description: "Button with right icon",
      },
      {
        name: "loading",
        type: ["boolean"],
        default: "false",
        description: "The status of loading",
      },
      {
        name: "style",
        type: ["CSSProperties"],
        default: "",
        description:
          "The CSS style with object The CSS style with object The CSS style with object The CSS style with object",
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
        description: "라디오에 제목을 붙여줍니다.",
      },
      {
        name: "titleDirection",
        type: ["left", "right", "top", "bottom"],
        default: "right",
        description: "라디오의 제목 방향을 지정합니다.",
      },
      {
        name: "checked",
        type: ["boolean"],
        default: "false",
        description: "라디오의 선택된 상태를 결정합니다.",
      },
      {
        name: "value",
        type: ["any"],
        default: "",
        description:
          "라디오를 선택했을때 onChange 이벤트에 전달하고자 하는 값을 지정합니다.",
      },
      {
        name: "color",
        type: ["string"],
        default: "#495057",
        description: "라디오의 색상을 지정합니다.",
      },
      {
        name: "disabled",
        type: ["boolean"],
        default: "false",
        description: "라디오의 활성 여부를 결정합니다.",
      },
      {
        name: "size",
        type: ["small", "medium", "large"],
        default: "medium",
        description: "라디오의 크기를 결정합니다.",
      },
      {
        name: "onChange",
        type: ["function"],
        default: "",
        description: "라디오 선택시 발생하는 이벤트입니다.",
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
        description: "체크박스에 제목을 표기합니다.",
      },
      {
        name: "titleDirection",
        type: ["left", "right", "top", "bottom"],
        default: "left",
        description: "체크박스를 기준으로 제목의 위치를 지정합니다.",
      },
      {
        name: "checked",
        type: ["boolean"],
        default: "false",
        description: "체크박스의 체크된 상태를 지정합니다.",
      },
      {
        name: "value",
        type: ["any"],
        default: "",
        description:
          "체크박스가 가지고 있는 값입니다.\n클릭 이벤트시 해당 값이 전달됩니다.",
      },
      {
        name: "color",
        type: ["string"],
        default: "",
        description: "체크박스의 색상을 지정합니다. ex) #000000",
      },
      {
        name: "disabled",
        type: ["boolean"],
        default: "",
        description: "체크박스의 활성 여부를 지정합니다.",
      },
      {
        name: "size",
        type: ["small", "medium", "large"],
        default: "medium",
        description: "체크박스의 크기를 지정합니다.",
      },
      {
        name: "onChange",
        type: ["function"],
        default: "",
        description:
          "체크박스의 체크여부 변경시 동작되는 함수입니다.\n이 때 미리 지정해둔 value가 전달됩니다.",
      },
    ],
  },
}

export default menus
