(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1055:function(e,t){e.exports=function(){throw new Error("define cannot be used indirect")}},264:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=f(a(33)),r=f(a(49)),o=f(a(516)),s=f(a(0)),i=f(a(1)),l=a(2),u=d(a(20)),c=d(a(522)),p=f(a(3));function d(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function f(e){return e&&e.__esModule?e:{default:e}}t.default=s.default.createClass({displayName:"ExportE2eKeysDialog",propTypes:{matrixClient:i.default.instanceOf(u.MatrixClient).isRequired,onFinished:i.default.func.isRequired},getInitialState:function(){return{phase:1,errStr:null}},componentWillMount:function(){this._unmounted=!1},componentWillUnmount:function(){this._unmounted=!0},_onPassphraseFormSubmit:function(e){e.preventDefault();var t=this.refs.passphrase1.value;return t!==this.refs.passphrase2.value?(this.setState({errStr:(0,l._t)("Passphrases must match")}),!1):t?(this._startExport(t),!1):(this.setState({errStr:(0,l._t)("Passphrase must not be empty")}),!1)},_startExport:function(e){var t=this;r.default.resolve().then(function(){return t.props.matrixClient.exportRoomKeys()}).then(function(t){return c.encryptMegolmKeyFile((0,n.default)(t),e)}).then(function(e){var a=new Blob([e],{type:"text/plain;charset=us-ascii"});o.default.saveAs(a,"riot-keys.txt"),t.props.onFinished(!0)}).catch(function(e){if(console.error("Error exporting e2e keys:",e),!t._unmounted){var a=e.friendlyText||(0,l._t)("Unknown error");t.setState({errStr:a,phase:1})}}),this.setState({errStr:null,phase:2})},_onCancelClick:function(e){return e.preventDefault(),this.props.onFinished(!1),!1},render:function(){var e=p.default.getComponent("views.dialogs.BaseDialog"),t=2===this.state.phase;return s.default.createElement(e,{className:"mx_exportE2eKeysDialog",onFinished:this.props.onFinished,title:(0,l._t)("Export room keys")},s.default.createElement("form",{onSubmit:this._onPassphraseFormSubmit},s.default.createElement("div",{className:"mx_Dialog_content"},s.default.createElement("p",null,(0,l._t)("This process allows you to export the keys for messages you have received in encrypted rooms to a local file. You will then be able to import the file into another Matrix client in the future, so that client will also be able to decrypt these messages.")),s.default.createElement("p",null,(0,l._t)("The exported file will allow anyone who can read it to decrypt any encrypted messages that you can see, so you should be careful to keep it secure. To help with this, you should enter a passphrase below, which will be used to encrypt the exported data. It will only be possible to import the data by using the same passphrase.")),s.default.createElement("div",{className:"error"},this.state.errStr),s.default.createElement("div",{className:"mx_E2eKeysDialog_inputTable"},s.default.createElement("div",{className:"mx_E2eKeysDialog_inputRow"},s.default.createElement("div",{className:"mx_E2eKeysDialog_inputLabel"},s.default.createElement("label",{htmlFor:"passphrase1"},(0,l._t)("Enter passphrase"))),s.default.createElement("div",{className:"mx_E2eKeysDialog_inputCell"},s.default.createElement("input",{ref:"passphrase1",id:"passphrase1",autoFocus:!0,size:"64",type:"password",disabled:t}))),s.default.createElement("div",{className:"mx_E2eKeysDialog_inputRow"},s.default.createElement("div",{className:"mx_E2eKeysDialog_inputLabel"},s.default.createElement("label",{htmlFor:"passphrase2"},(0,l._t)("Confirm passphrase"))),s.default.createElement("div",{className:"mx_E2eKeysDialog_inputCell"},s.default.createElement("input",{ref:"passphrase2",id:"passphrase2",size:"64",type:"password",disabled:t}))))),s.default.createElement("div",{className:"mx_Dialog_buttons"},s.default.createElement("input",{className:"mx_Dialog_primary",type:"submit",value:(0,l._t)("Export"),disabled:t}),s.default.createElement("button",{onClick:this._onCancelClick,disabled:t},(0,l._t)("Cancel")))))}}),e.exports=t.default},516:function(e,t,a){var n,r=r||function(e){"use strict";if(!(void 0===e||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){var t=function(){return e.URL||e.webkitURL||e},a=e.document.createElementNS("http://www.w3.org/1999/xhtml","a"),n="download"in a,r=/constructor/i.test(e.HTMLElement)||e.safari,o=/CriOS\/[\d]+/.test(navigator.userAgent),s=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},i=function(e){setTimeout(function(){"string"==typeof e?t().revokeObjectURL(e):e.remove()},4e4)},l=function(e){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([String.fromCharCode(65279),e],{type:e.type}):e},u=function(u,c,p){p||(u=l(u));var d,f=this,m="application/octet-stream"===u.type,h=function(){!function(e,t,a){for(var n=(t=[].concat(t)).length;n--;){var r=e["on"+t[n]];if("function"==typeof r)try{r.call(e,a||e)}catch(e){s(e)}}}(f,"writestart progress write writeend".split(" "))};if(f.readyState=f.INIT,n)return d=t().createObjectURL(u),void setTimeout(function(){a.href=d,a.download=c,function(e){var t=new MouseEvent("click");e.dispatchEvent(t)}(a),h(),i(d),f.readyState=f.DONE});!function(){if((o||m&&r)&&e.FileReader){var a=new FileReader;return a.onloadend=function(){var t=o?a.result:a.result.replace(/^data:[^;]*;/,"data:attachment/file;");e.open(t,"_blank")||(e.location.href=t),t=void 0,f.readyState=f.DONE,h()},a.readAsDataURL(u),void(f.readyState=f.INIT)}d||(d=t().createObjectURL(u)),m?e.location.href=d:e.open(d,"_blank")||(e.location.href=d);f.readyState=f.DONE,h(),i(d)}()},c=u.prototype;return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(e,t,a){return t=t||e.name||"download",a||(e=l(e)),navigator.msSaveOrOpenBlob(e,t)}:(c.abort=function(){},c.readyState=c.INIT=0,c.WRITING=1,c.DONE=2,c.error=c.onwritestart=c.onprogress=c.onwrite=c.onabort=c.onerror=c.onwriteend=null,function(e,t,a){return new u(e,t||e.name||"download",a)})}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content);
/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */e.exports?e.exports.saveAs=r:null!==a(1055)&&null!==a(524)&&(void 0===(n=function(){return r}.call(t,a,t,e))||(e.exports=n))}}]);
//# sourceMappingURL=2.js.map