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
        type: ["object"],
        default: "",
        description:
          "The CSS style with object The CSS style with object The CSS style with object The CSS style with object",
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
    ],
  },
  layout: {
    displayName: "Layout",
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
        type: ["object"],
        default: "",
        description:
          "The CSS style with object The CSS style with object The CSS style with object The CSS style with object",
      },
    ],
  },
  divider: {
    displayName: "Divider",
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
        type: ["object"],
        default: "",
        description:
          "The CSS style with object The CSS style with object The CSS style with object The CSS style with object",
      },
    ],
  },
  typography: {
    displayName: "Typography",
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
        type: ["object"],
        default: "",
        description:
          "The CSS style with object The CSS style with object The CSS style with object The CSS style with object",
      },
    ],
  },
  modal: {
    displayName: "Modal",
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
        type: ["object"],
        default: "",
        description:
          "The CSS style with object The CSS style with object The CSS style with object The CSS style with object",
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
        type: ["object"],
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
        type: ["object"],
        default: "",
        description:
          "The CSS style with object The CSS style with object The CSS style with object The CSS style with object",
      },
    ],
  },
  textarea: {
    displayName: "Textarea",
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
        type: ["object"],
        default: "",
        description:
          "The CSS style with object The CSS style with object The CSS style with object The CSS style with object",
      },
    ],
  },
  drawer: {
    displayName: "Drawer",
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
        type: ["object"],
        default: "",
        description:
          "The CSS style with object The CSS style with object The CSS style with object The CSS style with object",
      },
    ],
  },
  table: {
    displayName: "Table",
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
        type: ["object"],
        default: "",
        description:
          "The CSS style with object The CSS style with object The CSS style with object The CSS style with object",
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
        type: ["object"],
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
        type: ["object"],
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
        type: ["object"],
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
        type: ["object"],
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
        type: ["number"],
        default: "24",
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
        type: ["number"],
        default: "24",
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
