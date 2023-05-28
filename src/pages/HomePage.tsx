import { GreetingModule } from "../modules/GreetingModule";
import { LastFiveBucketsModule } from "../modules/LastFiveBucketsModule";

const HomePage = () => {
  return (
    <>
      <GreetingModule />
      <LastFiveBucketsModule />
    </>
  );
}

export default HomePage;
