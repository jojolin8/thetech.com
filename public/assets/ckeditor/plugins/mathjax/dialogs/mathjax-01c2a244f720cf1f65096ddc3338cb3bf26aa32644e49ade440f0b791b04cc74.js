CKEDITOR.dialog.add("mathjax",function(e){var t,n=e.lang.mathjax;return{title:n.title,minWidth:350,minHeight:100,contents:[{id:"info",elements:[{id:"equation",type:"textarea",label:n.dialogInput,onLoad:function(){var e=this;CKEDITOR.env.ie&&8==CKEDITOR.env.version||this.getInputElement().on("keyup",function(){t.setValue("\\("+e.getInputElement().getValue()+"\\)")})},setup:function(e){this.setValue(CKEDITOR.plugins.mathjax.trim(e.data.math))},commit:function(e){e.setData("math","\\("+this.getValue()+"\\)")}},{id:"documentation",type:"html",html:'<div style="width:100%;text-align:right;margin:-8px 0 10px"><a class="cke_mathjax_doc" href="'+n.docUrl+'" target="_black" style="cursor:pointer;color:#00B2CE;text-decoration:underline">'+n.docLabel+"</a></div>"},!(CKEDITOR.env.ie&&8==CKEDITOR.env.version)&&{id:"preview",type:"html",html:'<div style="width:100%;text-align:center;"><iframe style="border:0;width:0;height:0;font-size:20px" scrolling="no" frameborder="0" allowTransparency="true" src="'+CKEDITOR.plugins.mathjax.fixSrc+'"></iframe></div>',onLoad:function(){var n=CKEDITOR.document.getById(this.domId).getChild(0);t=new CKEDITOR.plugins.mathjax.frameWrapper(n,e)},setup:function(e){t.setValue(e.data.math)}}]}]}});