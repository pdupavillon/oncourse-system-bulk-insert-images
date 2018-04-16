'use strict';
(function(){
    function injectScript(file_path, tag, str) {
        var node = document.getElementsByTagName(tag)[0];
        var script = document.createElement('script');
        script.setAttribute('type', 'text/javascript');
        if (file_path){
            script.setAttribute('src', file_path);
        }
        if (str){
            script.innerHTML=str;
        }
        node.appendChild(script);
    }
    window.onload = function(){
        let assets = {
            images:{
                multi_file:chrome.extension.getURL("/assets/icons/multi_file.gif")
            }
        };
        injectScript(chrome.extension.getURL('body.js'), 'body');
        injectScript(null, 'body', 'window._assets = '+JSON.stringify(assets)+';');
    }
})();