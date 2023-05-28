import GreetingPoster from "/images/GreetingPoster.png";
import BannerComponent from "../../../components/BannerComponent";

const Module = () => {
  return (
    <section className="greeting">
      <BannerComponent
        image={GreetingPoster}
        title={
          <span>
            BNB <span className="greeting__gradient">Greenfield</span> Exploring Dashboard
          </span>
        }
        subtitle="A blockchain explorer and analytics platform for BNB Greenfield."
      >
        {/*<button className="greeting__button">*/}
        {/*  EXPLORE*/}
        {/*</button>*/}
      </BannerComponent>
    </section>
  );
};

export default Module;
