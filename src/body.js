'use strict';
(function(){

    function _insertNewMenu(){
        let menu_bar_table = document.querySelector('.mceToolbarRow2');
        let row = menu_bar_table.rows[0];
        let last = row.cells[row.cells.length - 1];
        let td = document.createElement('td');
        td.setAttribute('style', 'position:relative');
        td.innerHTML = '<a role="button" href="javascript:;" class="mceButton mceButtonEnabled mce_image" onmousedown="return false;" title="Add Images" tabindex="-1"><img src="'+window._assets.images.multi_file+'" /></a>'
        let a = td.querySelector('a');
        a.onclick = _openFileBrowser;
        row.insertBefore(td, last);
    }
    function _openFileBrowser(){
        var modal = new window.Ext.Window({
            title: "Choose Files",
            modal: true,
            width: 670,
            height: 350,
            border: false,
            layout: "fit",
            multiSelect:true,
            items: [{
                xtype: "docsfilepicker",
                appID: 'WEBSITE_IMAGES',
                keyID: OnCourse.settings.user_id,
                theFormEl: 'src',
                settings: {
                    CurrentView: "thumbs",
                    multiSelect:true
                },
                listeners: {
                    fileselect: function(i, h) {
                        if (Ext.isEmpty(h)) {
                            return;
                        }
                        modal.close();
                        let result = '<p>';
                        h.forEach(function(item){
                            result += '<img src="'+item.publicURL+'" alt="" />';
                        });
                        result+= '</p>';
                        tinyMCE.activeEditor.execCommand('mceInsertContent', false, result);
                    }
                }
            }]
        });
        modal.show();
        Ext.WindowMgr.getActive().items.map["file-manager-main"].multiSelect = true;
    }
    function Init(){
        _insertNewMenu();
    }
    Init();
})();