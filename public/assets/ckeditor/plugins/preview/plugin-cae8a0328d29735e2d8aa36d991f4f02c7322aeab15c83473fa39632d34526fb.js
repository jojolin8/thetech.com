!function(){var e,t={modes:{wysiwyg:1,source:1},canUndo:!1,readOnly:1,exec:function(t){var n,i=t.config,a=i.baseHref?'<base href="'+i.baseHref+'"/>':"";if(i.fullPage)n=t.getData().replace(/<head>/,"$&"+a).replace(/[^>]*(?=<\/title>)/,"$& &mdash; "+t.lang.preview.preview);else{var i="<body ",o=t.document&&t.document.getBody();o&&(o.getAttribute("id")&&(i+='id="'+o.getAttribute("id")+'" '),o.getAttribute("class")&&(i+='class="'+o.getAttribute("class")+'" ')),i+=">",n=t.config.docType+'<html dir="'+t.config.contentsLangDirection+'"><head>'+a+"<title>"+t.lang.preview.preview+"</title>"+CKEDITOR.tools.buildStyleHtml(t.config.contentsCss)+"</head>"+i+t.getData()+"</body></html>"}a=640,i=420,o=80;try{var r=window.screen,a=Math.round(.8*r.width),i=Math.round(.7*r.height),o=Math.round(.1*r.width)}catch(e){}if(!1===t.fire("contentPreview",t={dataValue:n}))return!1;var s,r="";return CKEDITOR.env.ie&&(window._cke_htmlToLoad=t.dataValue,s="javascript:void( (function(){document.open();"+("("+CKEDITOR.tools.fixDomain+")();").replace(/\/\/.*?\n/g,"").replace(/parent\./g,"window.opener.")+"document.write( window.opener._cke_htmlToLoad );document.close();window.opener._cke_htmlToLoad = null;})() )",r=""),CKEDITOR.env.gecko&&(window._cke_htmlToLoad=t.dataValue,r=CKEDITOR.getUrl(e+"preview.html")),r=window.open(r,null,"toolbar=yes,location=no,status=yes,menubar=yes,scrollbars=yes,resizable=yes,width="+a+",height="+i+",left="+o),CKEDITOR.env.ie&&r&&(r.location=s),CKEDITOR.env.ie||CKEDITOR.env.gecko||(s=r.document,s.open(),s.write(t.dataValue),s.close()),!0}};CKEDITOR.plugins.add("preview",{lang:"en",icons:"preview,preview-rtl",hidpi:!0,init:function(n){n.elementMode!=CKEDITOR.ELEMENT_MODE_INLINE&&(e=this.path,n.addCommand("preview",t),n.ui.addButton&&n.ui.addButton("Preview",{label:n.lang.preview.preview,command:"preview",toolbar:"document,40"}))}})}();