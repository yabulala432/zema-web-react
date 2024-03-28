import { IconBaseProps } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import styled, { css, keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(180deg);
  }
`;

const backSpin = keyframes`
    from {
        transform: rotate(180deg);
    }
    
    to {
        transform: rotate(0deg);
    }
    `;

interface SpinningHamburgerMenuProps extends IconBaseProps {
  should_spin_forward?: boolean;
  props?: any;
}

const SpinningHamburgerMenu = styled(
  ({ should_spin_forward, ...props }: SpinningHamburgerMenuProps) => (
    <GiHamburgerMenu {...props} />
  )
)<SpinningHamburgerMenuProps>`
  ${({ should_spin_forward }) =>
    should_spin_forward
      ? css`
          animation: ${spin} 1.3s linear 1;
        `
      : css`
          animation: ${backSpin} 1.3s linear 1;
        `};
`;

export default SpinningHamburgerMenu;
