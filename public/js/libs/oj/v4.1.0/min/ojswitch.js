/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","ojs/ojeditablevalue"],function(a,g){(function(){a.hb("oj.ojSwitch",g.oj.editableValue,{version:"1.1.0",defaultElement:"\x3cinput\x3e",widgetEventPrefix:"oj",options:{disabled:!1,readOnly:!1,value:!1},widget:function(){return this.ho},getNodeBySubId:function(a){var b=this._super(a),d=this.widget();return b||(b=null==a||null==a.subId?d:null,b||(a=a.subId,"oj-switch-thumb"!==a&&"oj-switch-track"!==a))?b||null:d.find("."+a)[0]},getSubIdByNode:function(a){var b=g(this.element).attr("id"),
d,e=this._super(a);null!=a&&(g(a).hasClass("oj-switch-track")||g(a).hasClass("oj-switch-thumb"))&&(d=g(a).parents("div.oj-switch").find("input.oj-component-initnode").attr("id"),b===d&&g(a).hasClass("oj-switch-track")?e={subId:"oj-switch-track"}:b===d&&g(a).hasClass("oj-switch-thumb")&&(e={subId:"oj-switch-thumb"}));return e},cb:{HFa:"SwitchOFF",IFa:"SwitchON"},Ah:function(c,b){var d;d=[{Aa:"disabled",jf:!0},{Aa:"readonly",option:"readOnly",jf:!0},{Aa:"checked",option:"value",jf:!1,ek:function(a){return a?
!0:!1}},{Aa:"title"}];this._super(c,b);this.Y()||(a.ia.xs(d,b,this),d=this.option("value"),this.option({value:!!d},{_context:{ld:!0,mb:!0}}))},qc:function(){this._super();if(!this.element.is("input"))throw Error("ojSwitch can be bound to INPUT only.");this.Ena=this.element.css("display");this.element.css("display","none").attr("type","checkbox").attr("checked",this.option("value")).attr("tabindex","-1").attr("disabled",this.option("disabled")).attr("readonly",this.option("readOnly"));this.ho=this.Fc?
g(this.Fc):this.element.wrap("\x3cdiv\x3e\x3c/div\x3e").parent();this.ho.addClass("oj-switch oj-component oj-form-control");this.ho.append("\x3cdiv class\x3d'oj-switch-container'\x3e\x3cdiv class\x3d'oj-switch-track'\x3e\x3cdiv class\x3d'oj-switch-thumb' tabIndex\x3d'0'\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e");this.Kq=this.ho.find(".oj-switch-thumb");this.Kq.attr("role","switch checkbox")},Kf:function(){this._super();this.KFa(this.Kq)},KFa:function(c){var b;b=this.Fc?this.ho[0]:this.ho[0].querySelector("input");
var d;if(this.Y())d=this.uuid+"_Label",d=a.ia.CM(this.widget(),d);else{var e=this.iz();e&&(d=e.attr("id"))}if(d)c.attr("aria-labelledby",d);else if(d=b.getAttribute("aria-label"))c.attr("aria-label",d),b.removeAttr("aria-label")},qb:function(){var a=g(this.widget());this.Yp();if(void 0!==a){this.element.attr("checked",this.option("value"));a.removeClass("oj-disabled oj-read-only oj-selected oj-hover oj-active");g(this.Kq).attr("tabindex","0");g(this.Kq).html("");if(this.option("disabled")||this.option("readOnly"))this.option("disabled")?
a.addClass("oj-disabled"):(a.addClass("oj-read-only"),g(this.Kq).html(this.$Xa())),g(this.Kq).removeAttr("tabindex");this.option("value")&&a.addClass("oj-selected");g(this.Kq).attr("aria-checked",this.option("value"));g(this.Kq).removeAttr("aria-disabled");a.removeAttr("aria-disabled");this.Uq()||g(this.Kq).attr("aria-disabled","true")}},$Xa:function(){var a=this.cb.HFa;this.option("value")&&(a=this.cb.IFa);return this.R(a)},Yp:function(){this._off(this.ho,"keydown keyup mousedown mouseup mouseleave mouseenter touchstart touchend");
this.Uq()&&(this._on(this.ho,this.VYa),this.xg(this.ho));this._focusable({element:this.Kq,applyHighlight:!0})},VYa:{keydown:function(a){if(a.which===g.ui.keyCode.ENTER||a.which===g.ui.keyCode.SPACE)g(a.currentTarget).addClass("oj-active"),a.preventDefault()},keyup:function(a){a.which!==g.ui.keyCode.ENTER&&a.which!==g.ui.keyCode.SPACE||this.ic(!this.option("value"),a)},mousedown:function(a){1===a.which&&(g(a.currentTarget).addClass("oj-active"),a.preventDefault())},mouseup:function(a){1===a.which&&
this.ic(!this.option("value"),a)},mouseleave:function(a){1===a.which&&g(a.currentTarget).removeClass("oj-active")},mouseenter:function(a){1===a.which&&g(a.currentTarget).addClass("oj-active")},touchstart:function(a){g(a.currentTarget).addClass("oj-active");a.preventDefault()},touchend:function(a){this.ic(!this.option("value"),a)}},_GetDefaultStyleClass:function(){return"oj-switch"},Uq:function(){return this._super()?this.options.readOnly?!1:!0:!1},q8a:function(){return"switch checkbox"},_destroy:function(){this.Uq()&&
this.sz(this.ho);this.ho.find(".oj-switch-track").remove();a.T.unwrap(this.element);this.fD(this.element);return this._super()},_GetMessagingLauncherElement:function(){return this.ho},ze:function(){return this.Kq},kt:function(c,b,d){this._superApply(arguments);switch(c){case "readOnly":this.QC(c,a.ia.DN)}},_setOption:function(a,b,d){switch(a){case "disabled":case "readOnly":case "value":b=!!b;break}this._super(a,b,d)},hr:function(a,b,d){this._superApply(arguments);this.qb()}})})();a.J.Ua("oj-switch",
"editableValue",{properties:{value:{type:"boolean",writeback:!0},readonly:{type:"boolean"}},methods:{},extension:{jt:{readonly:"readOnly"},Dj:"input",Xa:"ojSwitch"}});a.J.register("oj-switch",{metadata:a.J.getMetadata("oj-switch")})});