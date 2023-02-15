/**
 * Create a pure color independent of logic
 */
const originColor = {
  grey1: "#F2F2F2",
  grey2: "#434242",
  grey3: "#333333",
  grey4: "#222222",
  white: "#FFFFFF",
  black: "#000000",
  pastelYellow: "#F3EFE0",
  turquoise: "#22A39F",
  blue: "#1932B9",
  lightBlue: "#7584D5",
};

export const myColor = {
  ...originColor,
  backGround: originColor.grey1,
  text: originColor.grey3,
  primary: originColor.lightBlue,
};
