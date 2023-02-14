import { Button } from "@mui/material";

type Props = { children: string };

export const SubmitBtn = ({ children }: Props) => {
  return (
    <Button variant="outlined" type="submit" sx={{ width: "60%", height: 60 }}>
      {children}
    </Button>
  );
};
