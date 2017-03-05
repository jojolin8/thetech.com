(function(){var t=function(t,e){return function(){return t.apply(e,arguments)}},e=function(t,e){function r(){this.constructor=t}for(var i in e)n.call(e,i)&&(t[i]=e[i]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},n={}.hasOwnProperty;this.ImageList=function(n){function r(e){this.handleSearchKeyDown=t(this.handleSearchKeyDown,this),this.loadNextPage=t(this.loadNextPage,this),this.appendImages=t(this.appendImages,this),r.__super__.constructor.call(this,e),this.state={images:this.props.images,loading:!0},this.styles={infiniteScrollTriggerRow:{textAlign:"center",fontSize:"40px"}}}return e(r,n),r.propTypes={images:React.PropTypes.array,authors:React.PropTypes.array,articles:React.PropTypes.array,fetch:React.PropTypes.string},r.prototype.appendImages=function(t){return this.setState({page:this.state.page+1,images:this.state.images.concat(t)})},r.prototype.loadNextPage=function(){return this.setState({loading:!0}),axios.get(this.nextPage).then(function(t){return function(e){return e.data.error?alert(e.data.error):(t.nextPage=e.data.nextPage,t.setState({loading:!1}),t.appendImages(e.data.images))}}(this))["catch"](function(){return function(t){return logError(t),alert("Unknown error. Please refresh the page. ")}}(this))},r.prototype.componentDidMount=function(){return MessageBus.subscribe("/updates",function(t){return function(e){if("image"===e.model)return axios.get(Routes.image_path(e.id)).then(function(e){return e.data.error?alert(e.data.error):t.replaceImage(e.data.image)})["catch"](function(t){return logError(t),alert("Unknown error. Please refresh the page. ")})}}(this)),null!=this.props.fetch&&(this.nextPage=this.props.fetch,this.loadNextPage()),$(this.refs.infiniteScrollTrigger).appear(),$(this.refs.infiniteScrollTrigger).on("appear",function(t){return function(){if(!t.state.loading&&null!=t.nextPage)return t.loadNextPage()}}(this))},r.prototype.replaceImage=function(t){var e,n;if(e=this.state.images.slice(),n=_.findIndex(e,{id:t.id}),!(n<0))return t.destroyed?e.splice(n,1):e[n]=t,this.setState({images:e})},r.prototype.handleAction=function(t,e,n,r,i){return axios({method:e,url:n,data:r}).then(function(t){return function(e){return null!=i&&i(),e.data.error?alert(e.data.error):t.replaceImage(e.data.image)}}(this))["catch"](function(){return function(t){return logError(t),alert("Cannot complete the action. Please refresh the page and try again. ")}}(this))},r.prototype.handleSearchKeyDown=function(t){if(13===t.keyCode)return this.setState({images:[]}),this.nextPage=Routes.images_path({q:t.target.value}),this.loadNextPage()},r.prototype.render=function(){return React.createElement("table",{className:"table"},React.createElement("thead",null,React.createElement("tr",null,React.createElement("td",{colSpan:"4"},React.createElement("input",{className:"form-control",onKeyDown:this.handleSearchKeyDown,placeholder:'Search for images by volume (e.g. "V134 N7") or by text. Press ENTER to search. '})))),React.createElement("tbody",null,this.state.images.map(function(t){return React.createElement(Image,{image:t,authors:this.props.authors,articles:this.props.articles,key:t.id,onAction:this.handleAction.bind(this,t)})},this),React.createElement("tr",{style:this.styles.infiniteScrollTriggerRow,"data-appear-top-offset":"1000",ref:"infiniteScrollTrigger"},React.createElement("td",{colSpan:"4"},this.state.loading?React.createElement("i",{className:"fa fa-spin fa-circle-o-notch"}):null))))},r}(React.Component)}).call(this);