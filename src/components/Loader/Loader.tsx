import { ThreeCircles } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div className="mt-[80px]">
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="rgb(252,165,165)"
        ariaLabel="three-circles-loading"
        wrapperClass="items-center justify-center color-red-200"
      />
    </div>
  );
};
