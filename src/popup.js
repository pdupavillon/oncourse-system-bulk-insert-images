(function(){
    document.addEventListener('DOMContentLoaded', function() {
        const link = document.getElementById('gotooncourse');

        link.addEventListener('click', function() {
            chrome.tabs.create({ url: 'https://app.oncoursesystems.com/#websites' });
        });
    });
})();
