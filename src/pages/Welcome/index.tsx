import Header from "./Header";
import GetWebSite from "./GetWebSite";
import PageList from "./Header/PageList";

const Welcome = () => {
  return (
    <div className="mx-2 sm:mx-auto">
      <Header />
      <PageList />
      <GetWebSite />
    </div>
  );
};

export default Welcome;
