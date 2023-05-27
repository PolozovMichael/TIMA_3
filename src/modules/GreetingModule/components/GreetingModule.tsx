import GreetingBackground from "/images/greetingBackground.png";

const GreetingModule = () => {
  return (
    <section className="greeting">
      <img
        className="greeting__background"
        src={GreetingBackground}
        alt="greeting bg"
      />
      <div className="greeting__block">
        <div className="greeting__text">
          <p className="greeting__title">
            BNB <span className="greeting__gradient">Greenfield</span> Exploring Dashboard
          </p>
          <br /><br />
          <p className="greeting__subtitle">
            A blockchain explorer and analytics platform for BNB Greenfield.
          </p>
          <br /><br />
          <br /><br />
          <button className="greeting__button">
            EXPLORE
          </button>
        </div>
        <div />
      </div>
    </section>
  );
};

export default GreetingModule;
