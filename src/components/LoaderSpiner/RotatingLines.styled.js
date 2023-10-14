import styled from 'styled-components';
import { RotatingLines } from 'react-loader-spinner';

const CenteredContainer = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledRotatingLines = styled(RotatingLines)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export { StyledRotatingLines, CenteredContainer };
