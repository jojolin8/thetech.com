﻿/*
 Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
(function(){function t(e){function d(a){0<b.length||a.type!=CKEDITOR.NODE_ELEMENT||!C.test(a.getName())||a.getCustomData("selected_cell")||(CKEDITOR.dom.element.setMarker(c,a,"selected_cell",!0),b.push(a))}e=e.getRanges();for(var b=[],c={},a=0;a<e.length;a++){var f=e[a];if(f.collapsed)f=f.getCommonAncestor(),(f=f.getAscendant("td",!0)||f.getAscendant("th",!0))&&b.push(f);else{var f=new CKEDITOR.dom.walker(f),g;for(f.guard=d;g=f.next();)g.type==CKEDITOR.NODE_ELEMENT&&g.is(CKEDITOR.dtd.table)||(g=g.getAscendant("td",
!0)||g.getAscendant("th",!0))&&!g.getCustomData("selected_cell")&&(CKEDITOR.dom.element.setMarker(c,g,"selected_cell",!0),b.push(g))}}CKEDITOR.dom.element.clearAllMarkers(c);return b}function p(e,d){for(var b=t(e),c=b[0],a=c.getAscendant("table"),c=c.getDocument(),f=b[0].getParent(),g=f.$.rowIndex,b=b[b.length-1],h=b.getParent().$.rowIndex+b.$.rowSpan-1,b=new CKEDITOR.dom.element(a.$.rows[h]),g=d?g:h,f=d?f:b,b=CKEDITOR.tools.buildTableMap(a),a=b[g],g=d?b[g-1]:b[g+1],b=b[0].length,c=c.createElement("tr"),
h=0;a[h]&&h<b;h++){var k;1<a[h].rowSpan&&g&&a[h]==g[h]?(k=a[h],k.rowSpan+=1):(k=(new CKEDITOR.dom.element(a[h])).clone(),k.removeAttribute("rowSpan"),k.appendBogus(),c.append(k),k=k.$);h+=k.colSpan-1}d?c.insertBefore(f):c.insertAfter(f)}function u(e){if(e instanceof CKEDITOR.dom.selection){var d=t(e),b=d[0].getAscendant("table"),c=CKEDITOR.tools.buildTableMap(b);e=d[0].getParent().$.rowIndex;for(var d=d[d.length-1],a=d.getParent().$.rowIndex+d.$.rowSpan-1,d=[],f=e;f<=a;f++){for(var g=c[f],h=new CKEDITOR.dom.element(b.$.rows[f]),
k=0;k<g.length;k++){var l=new CKEDITOR.dom.element(g[k]),n=l.getParent().$.rowIndex;1==l.$.rowSpan?l.remove():(--l.$.rowSpan,n==f&&(n=c[f+1],n[k-1]?l.insertAfter(new CKEDITOR.dom.element(n[k-1])):(new CKEDITOR.dom.element(b.$.rows[f+1])).append(l,1)));k+=l.$.colSpan-1}d.push(h)}c=b.$.rows;b=new CKEDITOR.dom.element(c[a+1]||(0<e?c[e-1]:null)||b.$.parentNode);for(f=d.length;0<=f;f--)u(d[f]);return b}e instanceof CKEDITOR.dom.element&&(b=e.getAscendant("table"),1==b.$.rows.length?b.remove():e.remove());
return null}function v(e,d){for(var b=d?Infinity:0,c=0;c<e.length;c++){var a;a=e[c];for(var f=d,g=a.getParent().$.cells,h=0,k=0;k<g.length;k++){var l=g[k],h=h+(f?1:l.colSpan);if(l==a.$)break}a=h-1;if(d?a<b:a>b)b=a}return b}function m(e,d){for(var b=t(e),c=b[0].getAscendant("table"),a=v(b,1),b=v(b),a=d?a:b,f=CKEDITOR.tools.buildTableMap(c),c=[],b=[],g=f.length,h=0;h<g;h++)c.push(f[h][a]),b.push(d?f[h][a-1]:f[h][a+1]);for(h=0;h<g;h++)c[h]&&(1<c[h].colSpan&&b[h]==c[h]?(a=c[h],a.colSpan+=1):(a=(new CKEDITOR.dom.element(c[h])).clone(),
a.removeAttribute("colSpan"),a.appendBogus(),a[d?"insertBefore":"insertAfter"].call(a,new CKEDITOR.dom.element(c[h])),a=a.$),h+=a.rowSpan-1)}function y(e,d){var b=e.getStartElement();if(b=b.getAscendant("td",1)||b.getAscendant("th",1)){var c=b.clone();c.appendBogus();d?c.insertBefore(b):c.insertAfter(b)}}function x(e){if(e instanceof CKEDITOR.dom.selection){e=t(e);var d=e[0]&&e[0].getAscendant("table"),b;a:{var c=0;b=e.length-1;for(var a={},f,g;f=e[c++];)CKEDITOR.dom.element.setMarker(a,f,"delete_cell",
!0);for(c=0;f=e[c++];)if((g=f.getPrevious())&&!g.getCustomData("delete_cell")||(g=f.getNext())&&!g.getCustomData("delete_cell")){CKEDITOR.dom.element.clearAllMarkers(a);b=g;break a}CKEDITOR.dom.element.clearAllMarkers(a);g=e[0].getParent();(g=g.getPrevious())?b=g.getLast():(g=e[b].getParent(),b=(g=g.getNext())?g.getChild(0):null)}for(g=e.length-1;0<=g;g--)x(e[g]);b?q(b,!0):d&&d.remove()}else e instanceof CKEDITOR.dom.element&&(d=e.getParent(),1==d.getChildCount()?d.remove():e.remove())}function q(e,
d){var b=e.getDocument(),c=CKEDITOR.document;CKEDITOR.env.ie&&10==CKEDITOR.env.version&&(c.focus(),b.focus());b=new CKEDITOR.dom.range(b);b["moveToElementEdit"+(d?"End":"Start")](e)||(b.selectNodeContents(e),b.collapse(d?!1:!0));b.select(!0)}function z(e,d,b){e=e[d];if("undefined"==typeof b)return e;for(d=0;e&&d<e.length;d++){if(b.is&&e[d]==b.$)return d;if(d==b)return new CKEDITOR.dom.element(e[d])}return b.is?-1:null}function w(e,d,b){var c=t(e),a;if((d?1!=c.length:2>c.length)||(a=e.getCommonAncestor())&&
a.type==CKEDITOR.NODE_ELEMENT&&a.is("table"))return!1;var f;e=c[0];a=e.getAscendant("table");var g=CKEDITOR.tools.buildTableMap(a),h=g.length,k=g[0].length,l=e.getParent().$.rowIndex,n=z(g,l,e);if(d){var r;try{var q=parseInt(e.getAttribute("rowspan"),10)||1;f=parseInt(e.getAttribute("colspan"),10)||1;r=g["up"==d?l-q:"down"==d?l+q:l]["left"==d?n-f:"right"==d?n+f:n]}catch(D){return!1}if(!r||e.$==r)return!1;c["up"==d||"left"==d?"unshift":"push"](new CKEDITOR.dom.element(r))}d=e.getDocument();var p=l,
q=r=0,u=!b&&new CKEDITOR.dom.documentFragment(d),w=0;for(d=0;d<c.length;d++){f=c[d];var m=f.getParent(),x=f.getFirst(),v=f.$.colSpan,y=f.$.rowSpan,m=m.$.rowIndex,A=z(g,m,f),w=w+v*y,q=Math.max(q,A-n+v);r=Math.max(r,m-l+y);b||(v=f,(y=v.getBogus())&&y.remove(),v.trim(),f.getChildren().count()&&(m==p||!x||x.isBlockBoundary&&x.isBlockBoundary({br:1})||(p=u.getLast(CKEDITOR.dom.walker.whitespaces(!0)),!p||p.is&&p.is("br")||u.append("br")),f.moveChildren(u)),d?f.remove():f.setHtml(""));p=m}if(b)return r*
q==w;u.moveChildren(e);e.appendBogus();q>=k?e.removeAttribute("rowSpan"):e.$.rowSpan=r;r>=h?e.removeAttribute("colSpan"):e.$.colSpan=q;b=new CKEDITOR.dom.nodeList(a.$.rows);c=b.count();for(d=c-1;0<=d;d--)a=b.getItem(d),a.$.cells.length||(a.remove(),c++);return e}function A(e,d){var b=t(e);if(1<b.length)return!1;if(d)return!0;var b=b[0],c=b.getParent(),a=c.getAscendant("table"),f=CKEDITOR.tools.buildTableMap(a),g=c.$.rowIndex,h=z(f,g,b),k=b.$.rowSpan,l;if(1<k){l=Math.ceil(k/2);for(var k=Math.floor(k/
2),c=g+l,a=new CKEDITOR.dom.element(a.$.rows[c]),f=z(f,c),n,c=b.clone(),g=0;g<f.length;g++)if(n=f[g],n.parentNode==a.$&&g>h){c.insertBefore(new CKEDITOR.dom.element(n));break}else n=null;n||a.append(c)}else for(k=l=1,a=c.clone(),a.insertAfter(c),a.append(c=b.clone()),n=z(f,g),h=0;h<n.length;h++)n[h].rowSpan++;c.appendBogus();b.$.rowSpan=l;c.$.rowSpan=k;1==l&&b.removeAttribute("rowSpan");1==k&&c.removeAttribute("rowSpan");return c}function B(e,d){var b=t(e);if(1<b.length)return!1;if(d)return!0;var b=
b[0],c=b.getParent(),a=c.getAscendant("table"),a=CKEDITOR.tools.buildTableMap(a),f=z(a,c.$.rowIndex,b),g=b.$.colSpan;if(1<g)c=Math.ceil(g/2),g=Math.floor(g/2);else{for(var g=c=1,h=[],k=0;k<a.length;k++){var l=a[k];h.push(l[f]);1<l[f].rowSpan&&(k+=l[f].rowSpan-1)}for(a=0;a<h.length;a++)h[a].colSpan++}a=b.clone();a.insertAfter(b);a.appendBogus();b.$.colSpan=c;a.$.colSpan=g;1==c&&b.removeAttribute("colSpan");1==g&&a.removeAttribute("colSpan");return a}var C=/^(?:td|th)$/;CKEDITOR.plugins.tabletools=
{requires:"table,dialog,contextmenu",init:function(e){function d(a){return CKEDITOR.tools.extend(a||{},{contextSensitive:1,refresh:function(a,b){this.setState(b.contains({td:1,th:1},1)?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED)}})}function b(a,b){var c=e.addCommand(a,b);e.addFeature(c)}var c=e.lang.table;b("cellProperties",new CKEDITOR.dialogCommand("cellProperties",d({allowedContent:"td th{width,height,border-color,background-color,white-space,vertical-align,text-align}[colspan,rowspan]",
requiredContent:"table"})));CKEDITOR.dialog.add("cellProperties",this.path+"dialogs/tableCell.js");b("rowDelete",d({requiredContent:"table",exec:function(a){a=a.getSelection();q(u(a))}}));b("rowInsertBefore",d({requiredContent:"table",exec:function(a){a=a.getSelection();p(a,!0)}}));b("rowInsertAfter",d({requiredContent:"table",exec:function(a){a=a.getSelection();p(a)}}));b("columnDelete",d({requiredContent:"table",exec:function(a){a=a.getSelection();a=t(a);var b=a[0],c=a[a.length-1];a=b.getAscendant("table");
for(var d=CKEDITOR.tools.buildTableMap(a),e,l,n=[],r=0,p=d.length;r<p;r++)for(var m=0,u=d[r].length;m<u;m++)d[r][m]==b.$&&(e=m),d[r][m]==c.$&&(l=m);for(r=e;r<=l;r++)for(m=0;m<d.length;m++)c=d[m],b=new CKEDITOR.dom.element(a.$.rows[m]),c=new CKEDITOR.dom.element(c[r]),c.$&&(1==c.$.colSpan?c.remove():--c.$.colSpan,m+=c.$.rowSpan-1,b.$.cells.length||n.push(b));l=a.$.rows[0]&&a.$.rows[0].cells;e=new CKEDITOR.dom.element(l[e]||(e?l[e-1]:a.$.parentNode));n.length==p&&a.remove();e&&q(e,!0)}}));b("columnInsertBefore",
d({requiredContent:"table",exec:function(a){a=a.getSelection();m(a,!0)}}));b("columnInsertAfter",d({requiredContent:"table",exec:function(a){a=a.getSelection();m(a)}}));b("cellDelete",d({requiredContent:"table",exec:function(a){a=a.getSelection();x(a)}}));b("cellMerge",d({allowedContent:"td[colspan,rowspan]",requiredContent:"td[colspan,rowspan]",exec:function(a){q(w(a.getSelection()),!0)}}));b("cellMergeRight",d({allowedContent:"td[colspan]",requiredContent:"td[colspan]",exec:function(a){q(w(a.getSelection(),
"right"),!0)}}));b("cellMergeDown",d({allowedContent:"td[rowspan]",requiredContent:"td[rowspan]",exec:function(a){q(w(a.getSelection(),"down"),!0)}}));b("cellVerticalSplit",d({allowedContent:"td[rowspan]",requiredContent:"td[rowspan]",exec:function(a){q(B(a.getSelection()))}}));b("cellHorizontalSplit",d({allowedContent:"td[colspan]",requiredContent:"td[colspan]",exec:function(a){q(A(a.getSelection()))}}));b("cellInsertBefore",d({requiredContent:"table",exec:function(a){a=a.getSelection();y(a,!0)}}));
b("cellInsertAfter",d({requiredContent:"table",exec:function(a){a=a.getSelection();y(a)}}));e.addMenuItems&&e.addMenuItems({tablecell:{label:c.cell.menu,group:"tablecell",order:1,getItems:function(){var a=e.getSelection(),b=t(a);return{tablecell_insertBefore:CKEDITOR.TRISTATE_OFF,tablecell_insertAfter:CKEDITOR.TRISTATE_OFF,tablecell_delete:CKEDITOR.TRISTATE_OFF,tablecell_merge:w(a,null,!0)?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,tablecell_merge_right:w(a,"right",!0)?CKEDITOR.TRISTATE_OFF:
CKEDITOR.TRISTATE_DISABLED,tablecell_merge_down:w(a,"down",!0)?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,tablecell_split_vertical:B(a,!0)?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,tablecell_split_horizontal:A(a,!0)?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,tablecell_properties:0<b.length?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED}}},tablecell_insertBefore:{label:c.cell.insertBefore,group:"tablecell",command:"cellInsertBefore",order:5},tablecell_insertAfter:{label:c.cell.insertAfter,
group:"tablecell",command:"cellInsertAfter",order:10},tablecell_delete:{label:c.cell.deleteCell,group:"tablecell",command:"cellDelete",order:15},tablecell_merge:{label:c.cell.merge,group:"tablecell",command:"cellMerge",order:16},tablecell_merge_right:{label:c.cell.mergeRight,group:"tablecell",command:"cellMergeRight",order:17},tablecell_merge_down:{label:c.cell.mergeDown,group:"tablecell",command:"cellMergeDown",order:18},tablecell_split_horizontal:{label:c.cell.splitHorizontal,group:"tablecell",
command:"cellHorizontalSplit",order:19},tablecell_split_vertical:{label:c.cell.splitVertical,group:"tablecell",command:"cellVerticalSplit",order:20},tablecell_properties:{label:c.cell.title,group:"tablecellproperties",command:"cellProperties",order:21},tablerow:{label:c.row.menu,group:"tablerow",order:1,getItems:function(){return{tablerow_insertBefore:CKEDITOR.TRISTATE_OFF,tablerow_insertAfter:CKEDITOR.TRISTATE_OFF,tablerow_delete:CKEDITOR.TRISTATE_OFF}}},tablerow_insertBefore:{label:c.row.insertBefore,
group:"tablerow",command:"rowInsertBefore",order:5},tablerow_insertAfter:{label:c.row.insertAfter,group:"tablerow",command:"rowInsertAfter",order:10},tablerow_delete:{label:c.row.deleteRow,group:"tablerow",command:"rowDelete",order:15},tablecolumn:{label:c.column.menu,group:"tablecolumn",order:1,getItems:function(){return{tablecolumn_insertBefore:CKEDITOR.TRISTATE_OFF,tablecolumn_insertAfter:CKEDITOR.TRISTATE_OFF,tablecolumn_delete:CKEDITOR.TRISTATE_OFF}}},tablecolumn_insertBefore:{label:c.column.insertBefore,
group:"tablecolumn",command:"columnInsertBefore",order:5},tablecolumn_insertAfter:{label:c.column.insertAfter,group:"tablecolumn",command:"columnInsertAfter",order:10},tablecolumn_delete:{label:c.column.deleteColumn,group:"tablecolumn",command:"columnDelete",order:15}});e.contextMenu&&e.contextMenu.addListener(function(a,b,c){return(a=c.contains({td:1,th:1},1))&&!a.isReadOnly()?{tablecell:CKEDITOR.TRISTATE_OFF,tablerow:CKEDITOR.TRISTATE_OFF,tablecolumn:CKEDITOR.TRISTATE_OFF}:null})},getSelectedCells:t};
CKEDITOR.plugins.add("tabletools",CKEDITOR.plugins.tabletools)})();CKEDITOR.tools.buildTableMap=function(t){t=t.$.rows;for(var p=-1,u=[],v=0;v<t.length;v++){p++;!u[p]&&(u[p]=[]);for(var m=-1,y=0;y<t[v].cells.length;y++){var x=t[v].cells[y];for(m++;u[p][m];)m++;for(var q=isNaN(x.colSpan)?1:x.colSpan,x=isNaN(x.rowSpan)?1:x.rowSpan,z=0;z<x;z++){u[p+z]||(u[p+z]=[]);for(var w=0;w<q;w++)u[p+z][m+w]=t[v].cells[y]}m+=q-1}}return u};