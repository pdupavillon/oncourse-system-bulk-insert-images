let manifest = {
    "name": "OnCourse bulk insert images",
    "version": "1.0.0",
    "description": "Bulk insert images in OnCouse website page",
    "manifest_version": 2,
    "permissions": [
        "tabs", "https://app.oncoursesystems.com/*"
    ],
    "content_scripts": [
        {
            "matches": ["https://app.oncoursesystems.com/websites/edit_section.aspx*"],
            "js": ["script.js"]
        }
    ],
    "browser_action": {
        "default_icon": "assets/icons/48.png",
        "default_popup": "popup.html"
    },
    "web_accessible_resources": ["assets/icons/multi_file.gif", "body.js"],
    "icons": {
        "16": "assets/icons/16.png",
        "48": "assets/icons/48.png",
        "128": "assets/icons/128.png"
    }
}

console.log(JSON.stringify(manifest, null, '\t'));