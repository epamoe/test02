import styled from "@emotion/styled";
import colors from "./colors";

export const Chip = styled("div")({
  fontSize: "0.75rem",
  background: colors.patina[50].hex,
  color: colors.matter[200].hex,
  fontWeight: 400,
  display: "inline-flex",
  paddingTop: 4,
  paddingBottom: 4,
  paddingLeft: 8,
  paddingRight: 8,
  borderRadius: 16
});
