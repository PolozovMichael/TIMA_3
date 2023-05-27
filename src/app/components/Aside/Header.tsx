import Logo from "/images/logo.svg";

const Header = () => {
  return (
    <div className="aside__header">
      <img
        src={Logo}
        alt="project logo"
      />
      <p className="aside__title">
        <span className="aside__title--bold">Greenfield</span>
        <span className="aside__title--small">lab</span>
      </p>
    </div>
  );
}

export default Header;
