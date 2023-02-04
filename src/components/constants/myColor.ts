/**
 * Create a pure color independent of logic
 */
const originColor = {
  grey1: "#434242",
  grey2: "#222222",
  white: "#FFFFFF",
  black: "#000000",
  pastelYellow: "#F3EFE0",
  turquoise: "#22A39F",
  blue: "#1932B9",
};

export const myColor = {
  ...originColor,
  backGround: originColor.white,
  text: originColor.grey2,
  primary: originColor.blue,
};
