(function(){$(function(){var e,t,n,o,r,c,d;return $("body.frontend_homepage_show").length>0&&(o=document.referrer,n=/http:\/\/tech.mit.edu\/V(\d+)\/N(\d+)\/(.*)/,r=n.exec(o),r&&(d=parseInt(r[1]),e=parseInt(r[2]),t=r[3],d>=127&&(135!==d||8>=e)))?(c="/V"+d+"/N"+e+"/"+t,document.location=c):void 0})}).call(this);