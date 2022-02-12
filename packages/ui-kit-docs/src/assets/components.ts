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
  layout: {
    displayName: "Layout",
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
        type: ["object"],
        default: "",
        description: "The CSS style with object",
      },
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
        type: ["object"],
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
        name: "type",
        type: ["box", "line"],
        default: "box",
        description: "The line type has fixed height",
      },
      {
        name: "color",
        type: ["string"],
        default: "",
        description: "The color of divider height",
      },
      {
        name: "style",
        type: ["object"],
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
        type: ["object"],
        default: "",
        description: "The CSS style with object",
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
