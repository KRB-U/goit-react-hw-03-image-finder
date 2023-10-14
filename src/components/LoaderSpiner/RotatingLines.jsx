import { CenteredContainer } from './RotatingLines.styled';
import { RotatingLines } from 'react-loader-spinner';

const RotatingLines = () => {
  return (
    <CenteredContainer>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="3"
        animationDuration="0.5"
        width="70"
        visible={true}
      />
    </CenteredContainer>
  );
};

export { RotatingLines };
