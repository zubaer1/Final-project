import React, { Component } from 'react';
//import logo from './logo.svg';
//import logo from "./image/zubaer.png";
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class NavbarBanner extends Component {
  render() {
    return (  







/*

 < src="//platform.linkedin.com/in.js" type="text/javascript"> lang: en_US</script>
       <script type="IN/Share" data-url="testing" data-counter="top">
    <br><br>
    <a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=Zubaer"
  data-size="large">Tweet</a>
  <br><br>
 




      <iframe src="https://www.facebook.com/plugins/follow.php?href=https%3A%2F%2Fwww.facebook.com%2Fzuck&width=78&height=65&layout=box_count&size=large&show_faces=true&appId" width="78" height="65" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe><br>


*/


(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.9";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

<script>window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));





);
  }
}


export default NavbarBanner;