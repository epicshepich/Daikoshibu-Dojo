/**
 * Listens for the app launching, then creates the window.
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 * @see http://developer.chrome.com/apps/app.window.html
 */
chrome.app.runtime.onLaunched.addListener(function(launchData) {
 /* chrome.app.window.create(
    'index.html',
    {
      id: 'mainWindow',
      bounds: {width: 100, height: 100},
      frame:"none",
      resizable:false
    }
  );*/
  chrome.app.window.create(
    'index.html',
    {
      id: 'mainWindow',
      bounds: {width: 600, height:371},
      //resizable:false,
      frame:{type:"chrome",color:"#DD22CC"}
    }
  );
});
//majloelopndkekjcjikpngejpnjdaoap
//dllfeojcebcmkdjfppfpjnkainpkehin