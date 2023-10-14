import { RotatingLines } from 'react-loader-spinner';
import styled from 'styled-components';

const CenteredContainer = styled.div`
  /* position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
`;

const StyledRotatingLines = styled(RotatingLines)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export { StyledRotatingLines };
