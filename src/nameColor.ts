import palette from "./colors";
import { CasebookColors, CasebookTones } from "./colors";

/**
 * convert a string X into a new string Y composed of the
 * character codes that make up the lowercase version of X
 */
const convertToCharCodes = (s: string) =>
  s
    .toLowerCase()
    .split("")
    .map((c) => c.charCodeAt(0))
    .join("");

const useColors: CasebookColors[] = [
  "framboise",
  "heather",
  "indigo",
  "matter",
  "millennial",
  "nightshade",
  "stratus",
  "ocean",
  "patina"
];
const useTones: CasebookTones[] = [50, 100, 200, 300];

/**
 * Calculate a semi-unique color based on a name string
 * @param rawName The name to use for calculating a color
 * @return Object with color and contrast values
 */
export const nameColor = (rawName: string | undefined) => {
  const name = rawName?.substr(0, 100) || "kinship";
  const nameInt = parseInt(convertToCharCodes(name), 10);
  const colorIndex = nameInt % useColors.length;
  const toneIndex = nameInt % useTones.length;
  const color = useColors[colorIndex];
  const tone = useTones[toneIndex];
  return {
    color: palette[color][tone].hex,
    contrast:
      palette[color][tone].primaryAlt || palette[color][tone].primaryText
  };
};
