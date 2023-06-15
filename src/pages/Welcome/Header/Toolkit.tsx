import { Typography } from "Elements/Typography";

const Toolkit = () => {
  return (
    <div className="flex items-center sm:gap-8 gap-2">
      <Typography
        text="Login"
        color="black"
        size="lg"
        extraClass="hover:cursor-pointer"
      />
      <Typography
        text="Get Started"
        color="black"
        size="lg"
        extraClass="hover:cursor-pointer"
      />
    </div>
  );
};

export default Toolkit;
