
 function getAppleID(){
   var idpath = window.location.pathname.split('/');
   var appleid = idpath[4].substring(2);
   if (appleid==null){
      return null;
   }
   else{
      return appleid;
   }
 }

var imgURL = chrome.extension.getURL("/images/send2veracode.png");
var marslink = 'https://mobile.veracode.com/myapps?appleid=' + getAppleID();

$('<img />').attr({
  src: imgURL,
  width:'200',
  height:'51'
}).appendTo($('<a />').attr({
  href:marslink
}).insertAfter('a.action.view-in-itunes'));
