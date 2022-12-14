import React from 'react'
import "./Logout.css";
import { Link } from "react-router-dom";
import iconspline from '../../images/Spline 2.png';
import logoeth from '../../images/eth puteh 1.png';
import logo2 from '../../images/EVONESIA putih fix 5.png';

function logout() {
  return (
    <>
      <img className='logo2' src={logo2} alt="" />
      <img className='logoeth' src={logoeth} alt="" />
      <div className="main-logout">
        <div className='bingkai'><img className='iconspline' src={iconspline} alt="" /></div>
        <div className='kata'>
          <div id='kata1'>Our environmental impact matters to us.</div>
          <div id='kata2'>In order to enable our community to spend as little as possible in gas fees when minting,
            we opted for a contract made by Azuki called ERC721A,
            which allows minting multiple NFTs for essentially the same cost as minting a single one</div>
        </div>
        <div className="logout-contain">
          <div className='wallet'>
            <div id='wallet1'>Wallet logout </div >
            <div id='wallet2'><u>Lorem ipsum dolor sit amet, consectetur adipiscing elit</u>.</div >
            <div id='wallet3'><u>I already have a wallet</u></div >
            <Link to='/Home'><button type="submit" className="btn ">Connect to Wallet</button></Link>
          </div>
          <div id="menu">
            <div id="topmenu">
              <ul>
                <li><Link to='/Home'>Home</Link></li>
                <li><Link to='/logout'>logout</Link></li>
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

export default logout
