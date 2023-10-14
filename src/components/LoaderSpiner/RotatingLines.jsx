import { StyledRotatingLines } from './RotatingLines.styled';

const RotatingLines = () => {
  return (
    <div>
      <StyledRotatingLines
        strokeColor="grey"
        strokeWidth="3"
        animationDuration="0.5"
        width="70"
        visible={true}
      />
    </div>
  );
};

export { RotatingLines };
