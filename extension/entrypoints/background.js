import { browser } from 'wxt/browser';
export default defineBackground(() => {
console.log('Hello background.');
console.log(browser);
  // browser.runtime.onInstall.ad
browser.runtime.onInstalled.addListener((details)=>{
  if(details.reason === 'install' || details.reason === 'update'){
    console.log('extension installed');
    chrome.tabs.create({ url: 'welcome.html' });
  }
})
// chrome.runtime.onInstalled.addListener((details)=>{
//   if(details.reason === 'install' || details.reason === 'update'){
//     console.log('extension installed');
//     chrome.tabs.create({ url: 'welcome.html' });
//   }
// })

});
