import { RotatingLines } from 'react-loader-spinner';
import styled from 'styled-components';

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledRotatingLines = styled(RotatingLines)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { CenteredContainer, StyledRotatingLines };
