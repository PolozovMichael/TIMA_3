import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { login, logout } from "../../../../redux";
import ButtonComponent from "../../../../components/ButtonComponent";
import { useAddress } from "../../../../hooks/useAddress";

const Auth = () => {
  const dispatch = useAppDispatch();
  const [ userAccount, setUserAccount ] = useState("");

  let eth;

  if (typeof window !== "undefined") {
    eth = window.ethereum;
  }

  async function connectWallet(metamask = eth) {
    try {
      // check if metamask is installed
      if (!metamask) {
        return alert("please install metamask to proceed");
      }
      // access the account
      const acc = await metamask.request({ method: "eth_requestAccounts" });
      setUserAccount(acc);
      dispatch(login());
      localStorage.setItem("address", acc[0]);
      window.location.reload();
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object found");
    }
  }

  function disconnectWallet() {
    dispatch(logout());
    localStorage.removeItem("address");
    window.location.reload();
  }


  useEffect(() => {
    const checkWalletConnect = async (metamask = eth) => {
      try {
        if (!metamask) {
          return alert("please install metamask to continue")
        }
        const acc = await metamask.request({ method: "eth_accounts" });

        if (acc.length) {
          setUserAccount(acc[0])
        } else {
          localStorage.removeItem("address");
        }
      } catch (error) {
        console.log(error);
        throw new Error("No Ethereum object")
      }
    }

    checkWalletConnect().then();
  }, [ eth ]);


  const userWalletAddress = useAddress(userAccount);
  return (
    <div className="auth">
      {
        localStorage.getItem("address") ?
          <>
            <span>{userWalletAddress}</span>
            <br />
            <br />
            <ButtonComponent
              text="Logout"
              type="primary"
              onClick={disconnectWallet}
            />
          </>
          : <Link to="/">
            <ButtonComponent
              text="Log in via Metamask"
              type="primary"
              onClick={() => connectWallet()}
            />
          </Link>
      }
    </div>
  );
}

export default Auth;
