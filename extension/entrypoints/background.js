export default defineBackground(() => {
// console.log('Hello background.');
chrome.runtime.onInstalled.addListener((details)=>{
  if(details.reason === 'install'){
    console.log('extension installed');
    chrome.tabs.create({ url: 'welcome.html' });
  }
})

});
