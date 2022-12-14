import React, { useState } from 'react'
import "./Token.css";
import { Link } from "react-router-dom";
import iconspline from '../../images/Spline 2.png';
import logoeth from '../../images/eth puteh 1.png';
import logo2 from '../../images/EVONESIA putih fix 5.png';
import { ethers } from 'ethers'


function Token() {

  const [errorMessage, setErrorMessage] = useState(null);
  const [setDefaultAccount] = useState(null);
  const [setUserBalance] = useState(null);
  const [connButtonText, setConnButtonText] = useState('Connect Wallet');

  const connectWalletHandler = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      console.log('MetaMask Here!');

      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(result => {
          accountChangedHandler(result[0]);
          setConnButtonText('Wallet Connected');
          getAccountBalance(result[0]);
        })
        .catch(error => {
          setErrorMessage(error.message);

        });

    } else {
      console.log('Need to install MetaMask');
      setErrorMessage('Please install MetaMask browser extension ');
    }
  }

  // update account, 
  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    getAccountBalance(newAccount.toString());
  }

  const getAccountBalance = (account) => {
    window.ethereum.request({ method: 'eth_getBalance', params: [account, 'latest'] })
      .then(balance => {
        setUserBalance(ethers.utils.formatEther(balance));
      })
      .catch(error => {
        setErrorMessage(error.message);
      });
  };

  const chainChangedHandler = () => {
    // reload halaman
    window.location.reload();
  }


  // lganti aacount
  window.ethereum.on('accountsChanged', accountChangedHandler);

  window.ethereum.on('chainChanged', chainChangedHandler);


  return (
    <>
      <img className='logo2' src={logo2} alt="" />
      <img className='logoeth' src={logoeth} alt="" />
      <div className="main-token">
        <div className='bingkai'><img className='iconspline' src={iconspline} alt="" /></div>
        <div className='kata'>
          <div id='kata1'>Our environmental impact matters to us.</div>
          <div id='kata2'>In order to enable our community to spend as little as possible in gas fees when minting,
            we opted for a contract made by Azuki called ERC721A,
            which allows minting multiple NFTs for essentially the same cost as minting a single one</div>
        </div>
        <div className="token-contain">
          <div className='wallet'>
            <div id='wallet1'>Wallet Token </div >
            <div id='wallet2'><u>Lorem ipsum dolor sit amet, consectetur adipiscing elit</u>.</div >
            <div id='wallet3'><u>I already have a wallet</u></div >
            <div className='walletCard'>
              <Link><button type="submit" onClick={connectWalletHandler}>{connButtonText}</button></Link>

              {errorMessage}
            </div>
          </div>


          <div id="menu">
            <div id="topmenu">
              <ul>
                <li><Link to='/Home'>Home</Link></li>
                <li><Link to='/Token'>Token</Link></li>
                <li><Link to='/Survey'>Survey</Link></li>
                <li><Link to='/Polling'>Polling</Link></li>
                <li><Link to='/'>Log Out</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </>

  )
}

export default Token
