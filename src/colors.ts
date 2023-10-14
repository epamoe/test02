/* ******************* */
/* **** DS colors **** */
/* ******************* */

/* ************************ */
/* **** New palette colors **** */

export const casebookColors = [
  "framboise",
  "heather",
  "indigo",
  "matter",
  "millennial",
  "nightshade",
  "ocean",
  "patina",
  "stratus"
] as const;

export type CasebookColors = typeof casebookColors[number];

export const casebookTones = [
  25,
  50,
  100,
  200,
  300,
  400,
  500,
  600,
  700,
  800,
  900
] as const;

export type CasebookTones = typeof casebookTones[number];

export const white = "#FFFFFF";
export const black = "#030D20";
export const blackAlt = "#242C3C";

/* MATTER is used only for text, icons, borders, and some component backgrounds */

/* this intermediate local variable `matterBasic` is used as a temporary 
definition so that the primaryText and primaryAlt definitions for lighter 
shades can be definted later as references to its own keys */
export const matter = {
  25: {
    hex: "#F0F1F2",
    primaryText: black,
    primaryAlt: blackAlt
  },
  50: {
    hex: "#E1E2E4",
    primaryText: black,
    primaryAlt: blackAlt
  },
  100: {
    hex: "#B3B6BC",
    primaryText: black,
    primaryAlt: blackAlt
  },
  200: {
    hex: "#686E79",
    primaryText: white,
    primaryAlt: white
  },
  300: {
    hex: "#4F5663",
    primaryText: white,
    primaryAlt: white
  },
  400: {
    hex: blackAlt,
    primaryText: white,
    primaryAlt: white
  },
  500: {
    hex: black,
    primaryText: white,
    primaryAlt: white
  },
  600: {
    hex: "#030B1C",
    primaryText: white,
    primaryAlt: white
  },
  700: {
    hex: "#020918",
    primaryText: white,
    primaryAlt: white
  },
  800: {
    hex: "#020713",
    primaryText: white,
    primaryAlt: white
  },
  900: {
    hex: "#01030B",
    primaryText: white,
    primaryAlt: white
  },
  A100: { hex: "#5050FF" },
  A200: { hex: "#1D1DFF" },
  A400: { hex: "#0000E9" },
  A700: { hex: "#0000CF" },
  contrastDefaultColor: "light"
} as const;

/* Primary hues */
export const patina = {
  25: {
    hex: "#F0F8F7",
    primaryText: black,
    primaryAlt: blackAlt
  },
  50: {
    hex: "#E1F0EF",
    primaryText: black,
    primaryAlt: blackAlt
  },
  100: {
    hex: "#B3D9D7",
    primaryText: black,
    primaryAlt: blackAlt
  },
  200: {
    hex: "#81BFBD",
    primaryText: black,
    primaryAlt: blackAlt
  },
  300: {
    hex: "#4EA5A3",
    primaryText: black,
    primaryAlt: blackAlt
  },
  400: {
    hex: "#28928F",
    primaryText: black,
    primaryAlt: black
  },
  500: {
    hex: "#027F7B",
    primaryText: white,
    primaryAlt: white
  },
  600: {
    hex: "#027773",
    primaryText: white,
    primaryAlt: white
  },
  700: {
    hex: "#016C68",
    primaryText: white,
    primaryAlt: white
  },
  800: {
    hex: "#01625E",
    primaryText: white,
    primaryAlt: white
  },
  900: {
    hex: "#014F4B",
    primaryText: white,
    primaryAlt: white
  },
  A100: { hex: "#82FFF7" },
  A200: { hex: "#4FFFF4" },
  A400: { hex: "#1CFFF1" },
  A700: { hex: "#03FFEF" },
  contrastDefaultColor: "light"
} as const;

export const ocean = {
  25: {
    hex: "#F1FAFC",
    primaryText: black,
    primaryAlt: blackAlt
  },
  50: {
    hex: "#E2F5F9",
    primaryText: black,
    primaryAlt: blackAlt
  },
  100: {
    hex: "#B6E6F0",
    primaryText: black,
    primaryAlt: blackAlt
  },
  200: {
    hex: "#85D6E6",
    primaryText: black,
    primaryAlt: blackAlt
  },
  300: {
    hex: "#54C5DC",
    primaryText: black,
    primaryAlt: blackAlt
  },
  400: {
    hex: "#2FB8D5",
    primaryText: black,
    primaryAlt: blackAlt
  },
  500: {
    hex: "#0AACCD",
    primaryText: black,
    primaryAlt: blackAlt
  },
  600: {
    hex: "#09A5C8",
    primaryText: black,
    primaryAlt: blackAlt
  },
  700: {
    hex: "#079BC1",
    primaryText: black,
    primaryAlt: black
  },
  800: {
    hex: "#0592BA",
    primaryText: black,
    primaryAlt: black
  },
  900: {
    hex: "#007DA9",
    primaryText: white,
    primaryAlt: white
  },
  A100: { hex: "#D8F4FF" },
  A200: { hex: "#A5E5FF" },
  A400: { hex: "#72D6FF" },
  A700: { hex: "#58CEFF" },
  contrastDefaultColor: "dark"
} as const;

export const indigo = {
  25: {
    hex: "#F1F3F7",
    primaryText: black,
    primaryAlt: blackAlt
  },
  50: {
    hex: "#E2E6EE",
    primaryText: black,
    primaryAlt: blackAlt
  },
  100: {
    hex: "#B6C1D5",
    primaryText: black,
    primaryAlt: blackAlt
  },
  200: {
    hex: "#8697B9",
    primaryText: black,
    primaryAlt: blackAlt
  },
  300: {
    hex: "#556D9D",
    primaryText: white,
    primaryAlt: white
  },
  400: {
    hex: "#304E88",
    disabled: "#304e888c",
    primaryText: white,
    primaryAlt: white
  },
  500: {
    hex: "#0C2F73",
    primaryText: white,
    primaryAlt: white
  },
  600: {
    hex: "#0A2A6B",
    primaryText: white,
    primaryAlt: white
  },
  700: {
    hex: "#082360",
    primaryText: white,
    primaryAlt: white
  },
  800: {
    hex: "#061D56",
    primaryText: white,
    primaryAlt: white
  },
  900: {
    hex: "#031243",
    primaryText: white,
    primaryAlt: white
  },
  A100: { hex: "#788DFF" },
  A200: { hex: "#4562FF" },
  A400: { hex: "#1237FF" },
  A700: { hex: "#0027F7" },
  contrastDefaultColor: "light"
} as const;

export const heather = {
  25: {
    hex: "#F7F6FA",
    primaryText: black,
    primaryAlt: blackAlt
  },
  50: {
    hex: "#EFEDF5",
    primaryText: black,
    primaryAlt: blackAlt
  },
  100: {
    hex: "#D7D2E7",
    primaryText: black,
    primaryAlt: blackAlt
  },
  200: {
    hex: "#BDB5D7",
    primaryText: black,
    primaryAlt: blackAlt
  },
  300: {
    hex: "#A397C7",
    primaryText: black,
    primaryAlt: blackAlt
  },
  400: {
    hex: "#8F80BB",
    primaryText: black,
    primaryAlt: black
  },
  500: {
    disabled: "#7B6AAF8c",
    hex: "#7B6AAF",
    primaryText: white,
    primaryAlt: white
  },
  600: {
    hex: "#7362A8",
    primaryText: white,
    primaryAlt: white
  },
  700: {
    hex: "#68579F",
    primaryText: white,
    primaryAlt: white
  },
  800: {
    hex: "#5E4D96",
    primaryText: white,
    primaryAlt: white
  },
  900: {
    hex: "#4B3C86",
    primaryText: white,
    primaryAlt: white
  },
  A100: { hex: "#E0D8FF" },
  A200: { hex: "#B7A5FF" },
  A400: { hex: "#8E72FF" },
  A700: { hex: "#7958FF" },
  contrastDefaultColor: "light"
} as const;

export const framboise = {
  25: {
    hex: "#FEF1F5",
    primaryText: black,
    primaryAlt: blackAlt
  },
  50: {
    hex: "#FCE2EB",
    primaryText: black,
    primaryAlt: blackAlt
  },
  100: {
    hex: "#F7B6CE",
    primaryText: black,
    primaryAlt: blackAlt
  },
  200: {
    hex: "#F185AE",
    primaryText: black,
    primaryAlt: blackAlt
  },
  300: {
    hex: "#EB548D",
    primaryText: black,
    primaryAlt: black
  },
  400: {
    hex: "#DD266A",
    primaryText: white,
    primaryAlt: white
  },
  500: {
    hex: "#E30B5C",
    primaryText: white,
    primaryAlt: white
  },
  600: {
    hex: "#E00A54",
    primaryText: white,
    primaryAlt: white
  },
  700: {
    hex: "#DC084A",
    primaryText: white,
    primaryAlt: white
  },
  800: {
    hex: "#D80641",
    primaryText: white,
    primaryAlt: white
  },
  900: {
    hex: "#D00330",
    primaryText: white,
    primaryAlt: white
  },
  A100: { hex: "#FFF8F9" },
  A200: { hex: "#FFC5CF" },
  A400: { hex: "#FF92A4" },
  A700: { hex: "#FF798F" },
  contrastDefaultColor: "light"
} as const;

export const millennial = {
  25: {
    hex: "#FFFCF2",
    primaryText: black,
    primaryAlt: blackAlt
  },
  50: {
    hex: "#FEF9E5",
    primaryText: black,
    primaryAlt: blackAlt
  },
  100: {
    hex: "#FCEFBD",
    primaryText: black,
    primaryAlt: blackAlt
  },
  200: {
    hex: "#FAE592",
    primaryText: black,
    primaryAlt: blackAlt
  },
  300: {
    hex: "#F8DB66",
    primaryText: black,
    primaryAlt: blackAlt
  },
  400: {
    hex: "#F7D345",
    primaryText: black,
    primaryAlt: blackAlt
  },
  500: {
    hex: "#F5CB24",
    primaryText: black,
    primaryAlt: blackAlt
  },
  600: {
    hex: "#F4C620",
    primaryText: black,
    primaryAlt: blackAlt
  },
  700: {
    hex: "#F2BE1B",
    primaryText: black,
    primaryAlt: blackAlt
  },
  800: {
    hex: "#F0B816",
    primaryText: black,
    primaryAlt: blackAlt
  },
  900: {
    hex: "#EEAC0D",
    primaryText: black,
    primaryAlt: blackAlt
  },
  A100: { hex: "#FFFFFF" },
  A200: { hex: "#FFF7E5" },
  A400: { hex: "#FFE6B3" },
  A700: { hex: "#FFDE99" },
  contrastDefaultColor: "dark"
} as const;

export const nightshade = {
  25: {
    hex: "#F4F3F4",
    primaryText: black,
    primaryAlt: blackAlt
  },
  50: {
    hex: "#E9E7E9",
    primaryText: black,
    primaryAlt: blackAlt
  },
  100: {
    hex: "#C8C4C8",
    primaryText: black,
    primaryAlt: blackAlt
  },
  200: {
    hex: "#A39DA4",
    primaryText: black,
    primaryAlt: blackAlt
  },
  300: {
    hex: "#746B75",
    primaryText: white,
    primaryAlt: white
  },
  400: {
    hex: "#635863",
    primaryText: white,
    primaryAlt: white
  },
  500: {
    hex: "#473A48",
    primaryText: white,
    primaryAlt: white
  },
  600: {
    hex: "#403441",
    primaryText: white,
    primaryAlt: white
  },
  700: {
    hex: "#372C38",
    primaryText: white,
    primaryAlt: white
  },
  800: {
    hex: "#2F2530",
    primaryText: white,
    primaryAlt: white
  },
  900: {
    hex: "#201821",
    primaryText: white,
    primaryAlt: white
  },
  A100: { hex: "#E968FF" },
  A200: { hex: "#E235FF" },
  A400: { hex: "#DB02FF" },
  A700: { hex: "#C700E8" },
  contrastDefaultColor: "light"
} as const;

export const stratus = {
  25: {
    hex: "#FEFEFE",
    primaryText: black,
    primaryAlt: blackAlt
  },
  50: {
    hex: "#FCFCFC",
    primaryText: black,
    primaryAlt: blackAlt
  },
  100: {
    hex: "#F8F8F8",
    primaryText: black,
    primaryAlt: blackAlt
  },
  200: {
    hex: "#F3F3F4",
    primaryText: black,
    primaryAlt: blackAlt
  },
  300: {
    hex: "#EEEEF0",
    primaryText: black,
    primaryAlt: blackAlt
  },
  400: {
    hex: "#EBEBEC",
    primaryText: black,
    primaryAlt: blackAlt
  },
  500: {
    hex: "#E7E7E9",
    primaryText: black,
    primaryAlt: blackAlt
  },
  600: {
    hex: "#E4E4E6",
    primaryText: black,
    primaryAlt: blackAlt
  },
  700: {
    hex: "#E0E0E3",
    primaryText: black,
    primaryAlt: blackAlt
  },
  800: {
    hex: "#DDDDDF",
    primaryText: black,
    primaryAlt: blackAlt
  },
  900: {
    hex: "#D7D7D9",
    primaryText: black,
    primaryAlt: blackAlt
  },
  A100: { hex: "#FFFFFF" },
  A200: { hex: "#FFFFFF" },
  A400: { hex: "#FFFFFF" },
  A700: { hex: "#FFFFFF" },
  contrastDefaultColor: "dark"
} as const;

export type CasebookGradientName =
  | "framboise"
  | "heather-dark"
  | "heather-framboise"
  | "heather-patina"
  | "heather-patina-light"
  | "heather-patina-dark"
  | "indigo"
  | "indigo-dark"
  | "indigo-framboise"
  | "indigo-heather"
  | "indigo-heather-light"
  | "indigo-light"
  | "indigo-patina"
  | "matter-dark"
  | "millennial"
  | "nightshade-dark"
  | "nightshade-light"
  | "patina-dark"
  | "patina-millennial-light"
  | "stratus-light";

export const gradient: {
  [key in CasebookGradientName]: {
    app?: string;
    style: { background: string; backgroundColor: string; color: string };
    complimentary: { backgroundColor: string; color: string };
  };
} = {
  framboise: {
    app: "cbp Dev Documentation",
    style: {
      background: `linear-gradient(72deg, ${framboise[600].hex} 24%, ${framboise[400].hex} 100%)`,
      backgroundColor: framboise[600].hex,
      color: framboise[600].primaryText
    },
    complimentary: {
      backgroundColor: framboise[50].hex,
      color: framboise[900].hex
    }
  },
  "heather-dark": {
    app: "cb Note",
    style: {
      background: `linear-gradient(72deg, ${heather[900].hex} 24%, ${heather[700].hex} 100%)`,
      backgroundColor: heather[900].hex,
      color: heather[900].primaryText
    },
    complimentary: {
      backgroundColor: heather[200].hex,
      color: heather[900].hex
    }
  },
  "heather-framboise": {
    app: "cb Admin",
    style: {
      background: `linear-gradient(72deg, ${heather[500].hex} 24%, ${framboise[500].hex} 100%)`,
      backgroundColor: heather[500].hex,
      color: heather[500].primaryText
    },
    complimentary: {
      backgroundColor: heather[200].hex,
      color: heather[200].primaryText
    }
  },
  "heather-patina": {
    app: "cb Match",
    style: {
      background: `linear-gradient(72deg, ${heather[500].hex} 24%, ${patina[500].hex} 100%)`,
      backgroundColor: heather[500].hex,
      color: heather[500].primaryText
    },
    complimentary: {
      backgroundColor: heather[200].hex,
      color: heather[200].primaryText
    }
  },
  "heather-patina-light": {
    app: "",
    style: {
      background: `linear-gradient(72deg, ${heather[50].hex} 24%, ${patina[50].hex} 100%)`,
      backgroundColor: heather[50].hex,
      color: heather[50].primaryText
    },
    complimentary: {
      backgroundColor: heather[200].hex,
      color: heather[200].primaryText
    }
  },
  "heather-patina-dark": {
    app: "cb Eligibility",
    style: {
      background: `linear-gradient(72deg, ${heather[900].hex} 24%, ${patina[500].hex} 100%)`,
      backgroundColor: heather[900].hex,
      color: heather[900].primaryText
    },
    complimentary: {
      backgroundColor: heather[300].hex,
      color: heather[300].primaryText
    }
  },
  indigo: {
    style: {
      background: `linear-gradient(72deg, ${indigo[500].hex} 24%, ${indigo[300].hex} 100%)`,
      backgroundColor: indigo[500].hex,
      color: indigo[500].primaryText
    },
    complimentary: {
      backgroundColor: indigo[100].hex,
      color: indigo[100].primaryAlt!
    }
  },
  "indigo-dark": {
    app: "cb Report",
    style: {
      background: `linear-gradient(72deg, ${indigo[900].hex} 24%, ${indigo[600].hex} 100%)`,
      backgroundColor: indigo[900].hex,
      color: indigo[900].primaryText
    },
    complimentary: {
      backgroundColor: indigo[300].hex,
      color: indigo[900].primaryText
    }
  },
  "indigo-framboise": {
    style: {
      background: `linear-gradient(72deg, ${indigo[500].hex} 24%, ${framboise[400].hex} 100%)`,
      backgroundColor: indigo[500].hex,
      color: indigo[500].primaryText
    },
    complimentary: {
      backgroundColor: indigo[50].hex,
      color: indigo[50].primaryAlt!
    }
  },
  "indigo-heather": {
    app: "cb Assess",
    style: {
      background: `linear-gradient(72deg, ${indigo[600].hex} 24%, ${heather[500].hex} 100%)`,
      backgroundColor: indigo[600].hex,
      color: indigo[600].primaryText
    },
    complimentary: {
      backgroundColor: indigo[50].hex,
      color: indigo[50].primaryAlt!
    }
  },
  "indigo-heather-light": {
    app: "cbp Design System",
    style: {
      background: `linear-gradient(72deg, ${indigo[100].hex} 24%, ${heather[200].hex} 100%)`,
      backgroundColor: indigo[100].hex,
      color: indigo[100].primaryAlt!
    },
    complimentary: {
      backgroundColor: indigo[50].hex,
      color: indigo[50].primaryAlt!
    }
  },
  "indigo-light": {
    style: {
      background: `linear-gradient(72deg, ${indigo[200].hex} 24%, ${indigo[100].hex} 100%)`,
      backgroundColor: indigo[200].hex,
      color: indigo[200].primaryText
    },
    complimentary: {
      backgroundColor: indigo[50].hex,
      color: indigo[50].primaryAlt!
    }
  },
  "indigo-patina": {
    app: "cb Evaluate",
    style: {
      background: `linear-gradient(72deg, ${indigo[500].hex} 24%, ${patina[500].hex} 100%)`,
      backgroundColor: indigo[500].hex,
      color: indigo[500].primaryText
    },
    complimentary: {
      backgroundColor: indigo[50].hex,
      color: indigo[50].primaryAlt!
    }
  },
  "matter-dark": {
    app: "cbp Authorize and cbp Authenticate",
    style: {
      background: `linear-gradient(72deg, ${matter[700].hex} 24%, ${matter[500].hex} 100%)`,
      backgroundColor: matter[600].hex,
      color: millennial[900].hex
    },
    complimentary: {
      backgroundColor: matter[400].hex,
      color: millennial[500].hex
    }
  },
  millennial: {
    app: "cbp Forms, cbp Clean, and cbp Audit",
    style: {
      background: `linear-gradient(72deg, ${millennial[600].hex} 24%, ${millennial[300].hex} 100%)`,
      backgroundColor: millennial[600].hex,
      color: millennial[600].primaryText
    },
    complimentary: {
      backgroundColor: millennial[100].hex,
      color: millennial[100].primaryText
    }
  },
  "nightshade-dark": {
    app: "Analytics & Reporting",
    style: {
      background: `linear-gradient(72deg, ${nightshade[900].hex} 24%, ${nightshade[600].hex} 100%)`,
      backgroundColor: nightshade[900].hex,
      color: nightshade[900].primaryText
    },
    complimentary: {
      backgroundColor: nightshade[200].hex,
      color: nightshade[200].primaryText
    }
  },
  "nightshade-light": {
    app: "cb Index",
    style: {
      background: `linear-gradient(72deg, ${nightshade[200].hex} 24%, ${nightshade[100].hex} 100%)`,
      backgroundColor: nightshade[200].hex,
      color: nightshade[200].primaryText
    },
    complimentary: {
      backgroundColor: nightshade[400].hex,
      color: nightshade[400].primaryText
    }
  },
  "patina-dark": {
    app: "cb Account",
    style: {
      background: `linear-gradient(72deg, ${patina[900].hex} 24%, ${patina[500].hex} 100%)`,
      backgroundColor: patina[900].hex,
      color: patina[900].primaryText
    },
    complimentary: {
      backgroundColor: patina[100].hex,
      color: patina[100].primaryAlt!
    }
  },
  "patina-millennial-light": {
    app: "cb Access",
    style: {
      background: `linear-gradient(72deg, ${patina[200].hex} 24%, ${millennial[200].hex} 100%)`,
      backgroundColor: patina[200].hex,
      color: patina[900].hex
    },
    complimentary: {
      backgroundColor: patina[50].hex,
      color: patina[50].primaryAlt!
    }
  },
  "stratus-light": {
    style: {
      background: `linear-gradient(72deg, ${stratus[200].hex} 24%, ${stratus[100].hex} 100%)`,
      backgroundColor: stratus[100].hex,
      color: stratus[100].primaryText
    },
    complimentary: {
      backgroundColor: stratus[900].hex,
      color: stratus[900].primaryText
    }
  }
} as const;

/* **** Applied colors **** */

/* Text colors */
export const textColors = {
  primary: black,
  primaryRGB: "3, 13, 32" /* matter[500] in RGB */,
  primaryAlt: blackAlt,
  secondary: matter[300].hex,
  disabled: matter[100].hex,
  borderLight: matter[50].hex,
  error: framboise[900].hex
} as const;

/* Element colors */
export const elementColors = {
  divider: `rgba(${textColors.primaryRGB}, .12)`,
  icon: matter[200].hex,
  iconPrimaryHover: "rgba(115,98,168,.1)" /* heather[600] at .1 alpha */,
  iconSecondaryHover: "rgba(40,146,143,.1)" /* patina[400] at .1 alpha */,
  iconHover: heather[300].hex,
  globalFocus: heather[600].hex,
  destructiveFocus: framboise[900].hex,
  requiredBorderColor: patina[900].hex,
  requiredBackgroundColor: patina[100].hex,
  requiredTextColor: patina[900].hex
} as const;

/* Inputs + Select text, background, and border colors */
export const inputColors = {
  default: {
    color: textColors.primary,
    backgroundColor: white,
    borderColor: matter[100].hex
  },
  focus: {
    color: textColors.primary,
    backgroundColor: white,
    borderColor: matter[100].hex
  },
  error: {
    color: textColors.primary,
    backgroundColor: white,
    borderColor: framboise[900].hex
  },
  disabled: {
    color: textColors.disabled,
    backgroundColor: stratus[200].hex,
    borderColor: matter[100].hex
  }
} as const;

/* ******************************** */
/* **** Below to be refactored **** */

export const typography = {
  primaryTextColor: "#011728",
  secondaryTextColor: "rgba(1, 23, 40, 0.65)"
} as const;

export const dividers = {
  "divider-light-theme": `rgba(${textColors.primaryRGB}, 0.12)`,
  "divider-dark-theme": `rgba(${white}, 0.12)`,
  "divider-guidelines-theme": "rgba(0,0,0,.12)"
} as const;

export const textInputs = {
  "text-disabled": "rgba(1, 23, 40, 0.45)",
  "text-disabled-border": "rgba(1, 23, 40, 0.16)",
  "text-default": "rgba(1, 23, 40, 1.0)",
  "text-placeholder": "rgba(1, 23, 40, 0.65)",
  "text-focus": "#011728",
  "text-error": "#bf2600",
  "text-multiline-focus": "rgba(255, 85, 0, 0.3)"
} as const;

export const drawer = {
  "drawer-border-color": "rgba(0,0,0,0.18)"
} as const;

export const guidelines = {
  "header-background-color": "#f4f6f8"
} as const;

export const table = {
  "table-border": "rgba(1,23,40,0.12)"
} as const;

export const RGBA = {
  darkGray500: "rgb(27, 38, 56)",
  beigeGray300: "rgb(243, 243, 243)",
  blueGray100: "rgb(235, 238, 241)",
  blueGray50: "rgb(244, 246, 248)",
  blueGray500: "rgb(196, 205, 213)",
  blue500: "rgb(0, 110, 185)",
  white: "rgb(255, 255, 255)",
  red100: "rgb(239, 194, 188)",
  red500: "rgb(200, 53, 30)",
  marigold200: "rgb(250, 211, 145)",
  marigold500: "rgb(245, 166, 35)",
  green100: "rgb(185, 213, 211)",
  green500: "rgb(22, 115, 108)",
  greenA400: "rgb(32, 164, 154)",
  purple200: "rgb(160, 163, 210)",
  purple500: "rgb(65, 70, 165)",
  lightTextPrimary: "rgba(1, 23, 40, 1)",
  lightTextSecondary: "rgba(1, 23, 40, 0.65)",
  lightTextDisabled: "rgba(1, 23, 40, 0.45)",
  darkTextPrimary: "rgba(255, 255, 255, 1)",
  darkTextPrimaryAlt: "rgba(255, 255, 255, 0.9)",
  darkTextSecondary: "rgba(255, 255, 255, 0.7)",
  darkTextDisabled: "rgba(255, 255, 255, 0.5)"
} as const;

export const overview = {
  boxTextColor: "#f9f9f9"
} as const;

export default {
  white,
  black,
  textColors,
  elementColors,
  inputColors,
  dividers,
  textInputs,
  typography,
  drawer,
  guidelines,
  table,
  RGBA,
  overview,
  matter,
  patina,
  ocean,
  indigo,
  heather,
  framboise,
  millennial,
  nightshade,
  stratus,
  gradient
} as const;
