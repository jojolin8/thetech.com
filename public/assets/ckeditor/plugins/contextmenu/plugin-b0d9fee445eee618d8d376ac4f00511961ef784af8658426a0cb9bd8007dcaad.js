CKEDITOR.plugins.add("contextmenu",{requires:"menu",lang:"en",onLoad:function(){CKEDITOR.plugins.contextMenu=CKEDITOR.tools.createClass({base:CKEDITOR.menu,$:function(e){this.base.call(this,e,{panel:{className:"cke_menu_panel",attributes:{"aria-label":e.lang.contextmenu.options}}})},proto:{addTarget:function(e,t){if(e.on("contextmenu",function(e){e=e.data;var o=CKEDITOR.env.webkit?n:CKEDITOR.env.mac?e.$.metaKey:e.$.ctrlKey;if(!t||!o){if(e.preventDefault(),CKEDITOR.env.mac&&CKEDITOR.env.webkit){var o=this.editor,a=new CKEDITOR.dom.elementPath(e.getTarget(),o.editable()).contains(function(e){return e.hasAttribute("contenteditable")},!0);a&&"false"==a.getAttribute("contenteditable")&&o.getSelection().fake(a)}var a=e.getTarget().getDocument(),i=e.getTarget().getDocument().getDocumentElement(),o=!a.equals(CKEDITOR.document),a=a.getWindow().getScrollPosition(),r=o?e.$.clientX:e.$.pageX||a.x+e.$.clientX,s=o?e.$.clientY:e.$.pageY||a.y+e.$.clientY;CKEDITOR.tools.setTimeout(function(){this.open(i,null,r,s)},CKEDITOR.env.ie?200:0,this)}},this),CKEDITOR.env.webkit){var n,o=function(){n=0};e.on("keydown",function(e){n=CKEDITOR.env.mac?e.data.$.metaKey:e.data.$.ctrlKey}),e.on("keyup",o),e.on("contextmenu",o)}},open:function(e,t,n,o){this.editor.focus(),e=e||CKEDITOR.document.getDocumentElement(),this.editor.selectionChange(1),this.show(e,t,n,o)}}})},beforeInit:function(e){var t=e.contextMenu=new CKEDITOR.plugins.contextMenu(e);e.on("contentDom",function(){t.addTarget(e.editable(),!1!==e.config.browserContextMenuOnCtrl)}),e.addCommand("contextMenu",{exec:function(){e.contextMenu.open(e.document.getBody())}}),e.setKeystroke(CKEDITOR.SHIFT+121,"contextMenu"),e.setKeystroke(CKEDITOR.CTRL+CKEDITOR.SHIFT+121,"contextMenu")}});