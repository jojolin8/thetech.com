!function(){function e(e,n,a,o,i,r,s,l){var c=e.config,u=new CKEDITOR.style(s),d=i.split(";");i=[];for(var p={},h=0;h<d.length;h++){var m=d[h];if(m){var m=m.split("/"),f={},g=d[h]=m[0];f[a]=i[h]=m[1]||g,p[g]=new CKEDITOR.style(s,f),p[g]._.definition.name=g}else d.splice(h--,1)}e.ui.addRichCombo(n,{label:o.label,title:o.panelTitle,toolbar:"styles,"+l,allowedContent:u,requiredContent:u,panel:{css:[CKEDITOR.skin.getPath("editor")].concat(c.contentsCss),multiSelect:!1,attributes:{"aria-label":o.panelTitle}},init:function(){this.startGroup(o.panelTitle);for(var e=0;e<d.length;e++){var t=d[e];this.add(t,p[t].buildPreview(),t)}},onClick:function(n){e.focus(),e.fire("saveSnapshot");var a=this.getValue(),o=p[n];if(a&&n!=a){var i=p[a],r=e.getSelection().getRanges()[0];if(r.collapsed){var s=e.elementPath(),l=s.contains(function(e){return i.checkElementRemovable(e)});if(l){var c=r.checkBoundaryOfElement(l,CKEDITOR.START),u=r.checkBoundaryOfElement(l,CKEDITOR.END);if(c&&u){for(c=r.createBookmark();s=l.getFirst();)s.insertBefore(l);l.remove(),r.moveToBookmark(c)}else c?r.moveToPosition(l,CKEDITOR.POSITION_BEFORE_START):u?r.moveToPosition(l,CKEDITOR.POSITION_AFTER_END):(r.splitElement(l),r.moveToPosition(l,CKEDITOR.POSITION_AFTER_END),t(r,s.elements.slice(),l));e.getSelection().selectRanges([r])}}else e.removeStyle(i)}e[a==n?"removeStyle":"applyStyle"](o),e.fire("saveSnapshot")},onRender:function(){e.on("selectionChange",function(t){var n=this.getValue();t=t.data.path.elements;for(var a,o=0;o<t.length;o++){a=t[o];for(var i in p)if(p[i].checkElementMatch(a,!0,e))return void(i!=n&&this.setValue(i))}this.setValue("",r)},this)},refresh:function(){e.activeFilter.check(u)||this.setState(CKEDITOR.TRISTATE_DISABLED)}})}function t(e,n,a){var o=n.pop();if(o){if(a)return t(e,n,o.equals(a)?null:a);a=o.clone(),e.insertNode(a),e.moveToPosition(a,CKEDITOR.POSITION_AFTER_START),t(e,n)}}CKEDITOR.plugins.add("font",{requires:"richcombo",lang:"en",init:function(t){var n=t.config;e(t,"Font","family",t.lang.font,n.font_names,n.font_defaultLabel,n.font_style,30),e(t,"FontSize","size",t.lang.font.fontSize,n.fontSize_sizes,n.fontSize_defaultLabel,n.fontSize_style,40)}})}(),CKEDITOR.config.font_names="Arial/Arial, Helvetica, sans-serif;Comic Sans MS/Comic Sans MS, cursive;Courier New/Courier New, Courier, monospace;Georgia/Georgia, serif;Lucida Sans Unicode/Lucida Sans Unicode, Lucida Grande, sans-serif;Tahoma/Tahoma, Geneva, sans-serif;Times New Roman/Times New Roman, Times, serif;Trebuchet MS/Trebuchet MS, Helvetica, sans-serif;Verdana/Verdana, Geneva, sans-serif",CKEDITOR.config.font_defaultLabel="",CKEDITOR.config.font_style={element:"span",styles:{"font-family":"#(family)"},overrides:[{element:"font",attributes:{face:null}}]},CKEDITOR.config.fontSize_sizes="8/8px;9/9px;10/10px;11/11px;12/12px;14/14px;16/16px;18/18px;20/20px;22/22px;24/24px;26/26px;28/28px;36/36px;48/48px;72/72px",CKEDITOR.config.fontSize_defaultLabel="",CKEDITOR.config.fontSize_style={element:"span",styles:{"font-size":"#(size)"},overrides:[{element:"font",attributes:{size:null}}]};