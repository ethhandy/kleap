import GetWebSitePng from "Assets/getwebsite.png";

import { Button } from "Elements/Button";
import { Typography } from "Elements/Typography";

const GetWebSite = () => {
  return (
    <section className="flex lg:gap-6 justify-center sm:py-24 py-4">
      <div className="flex flex-col gap-12 w-[550px]">
        <Typography
          text={
            <>
              Get a website, update, sell online, and get 10x more results
              <span className="text-pink-500"> with AI.</span>
            </>
          }
          size="6xl"
          weight={7}
          tracking="tighter"
          extraClass="pr-12"
        />

        <Typography
          text={
            <>
              Get an entire mobile website with images, copy, and product ready
              to sell
              <span className="font-black"> in the next 30 seconds</span>
            </>
          }
          size="lg"
          weight={3}
        />

        <div className="flex gap-4">
          <Button
            value={
              <Typography text="Get started for free" weight={5} size="xl" />
            }
            color="amber"
            colorWeight={5}
            hoverColor="green"
            hoverColorWeight={5}
            extraClass="rounded-md"
          />

          <Button
            value={<Typography text="I have an account" weight={4} size="xl" />}
            color="gray"
            colorWeight={1}
            hoverColor="green"
            hoverColorWeight={5}
            extraClass="rounded-md"
          />
        </div>
      </div>
      <img
        src={GetWebSitePng}
        alt="GetWebSite"
        width={440}
        className="max-[1000px]:hidden"
      />
    </section>
  );
};

export default GetWebSite;
