import styled from "@emotion/styled";
import { nameColor } from "./nameColor";

export interface AvatarProps {
  name?: string;
}

export const Avatar = styled("div")(({ name }: AvatarProps) => ({
  height: 28,
  width: 28,
  display: "flex",
  alignItems: "center",
  boxShadow: "0 0 1px inset #030d2033",
  justifyContent: "center",
  borderRadius: "100%",
  marginRight: "0.5rem",
  fontSize: "0.75rem",
  fontWeight: 400,
  color: nameColor(name).contrast,
  background: nameColor(name).color
}));
