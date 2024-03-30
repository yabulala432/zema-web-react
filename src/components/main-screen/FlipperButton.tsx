import { Button } from "@chakra-ui/react";

import "./FlipperButton.css";

type Props = {
  onClick: () => void;
  label: string;
};

function FlipperButton({ onClick, label }: Props) {
  return (
    <>
      <Button
        height={"80px"}
        width={"80px"}
        padding={0}
        bgColor={"#f7d1a1"}
        transition="transform 0.5s"
        _hover={{
          bgColor: "#f7d1a1",
          transform: "scale(1.05)",
        }}
        className="rectangle-wrapper"
        onClick={onClick}
      >
        <div className="rectangle">
          <i>{label}</i>
        </div>
      </Button>
    </>
  );
}

export default FlipperButton;
