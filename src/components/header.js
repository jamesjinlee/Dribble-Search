import React, {Component} from 'react';
import {Image} from 'semantic-ui-react';
const logoImg = 'images/dribbbleLogo2.png';
const uploadImg = 'images/upload.png';

const Header = (props) => {
  return (
    <div className="header1">
      <div className="heading">
        <Image src={logoImg}
        className='logo'/>
        <p>Shots</p>
      <p>Designers</p>
    <p>Teams</p>
  <p>Jobs</p>
      </div>

    <div className="heading heading2">
    <Image src= 'images/user.png'
      className = 'uploadLogo'/>
      <Image src={uploadImg}
      className = 'uploadLogo2'/>
    <Image src='images/search.png'
      className = 'uploadLogo searchIcon'/>
      </div>
    </div>


  );
};

export default Header;
