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
define(["ojs/ojcore","jquery","knockout","ojs/ojdatasource-common"],function(a,g,c){a.bd=function(a){this.data=a;this.current=0;this.Init();this.U6(10)};o_("ArrayPagingDataSource",a.bd,a);a.f.va(a.bd,a.Pn,"oj.ArrayPagingDataSource");a.bd.prototype.Init=function(){a.bd.N.Init.call(this)};a.f.j("ArrayPagingDataSource.prototype.Init",{Init:a.bd.prototype.Init});a.bd.prototype.r3=function(){return this.Tl()?this.Mu:this.totalSize()-this.current};a.bd.prototype.JA=function(a){a=a||{};this.fk=Array(this.r3());
for(var c=0;c<this.fk.length;c++)this.fk[c]=this.data[this.current+c];this.gL();this.dn=this.oa+this.fk.length-1;a.silent||this.handleEvent("sync",{data:this.fk,startIndex:this.current})};a.bd.prototype.gL=function(){if(void 0!==this.Bq){this.Bq.removeAll();for(var a=0;a<this.fk.length;a++)this.Bq.push(this.fk[a])}};a.bd.prototype.handleEvent=function(b,c){return a.bd.N.handleEvent.call(this,b,c)};a.bd.prototype.$u=function(){return this.fk};a.f.j("ArrayPagingDataSource.prototype.getWindow",{$u:a.bd.prototype.$u});
a.bd.prototype.KM=function(){void 0===this.Bq&&(this.Bq=c.observableArray(),this.gL());return this.Bq};a.f.j("ArrayPagingDataSource.prototype.getWindowObservable",{KM:a.bd.prototype.KM});a.bd.prototype.getPage=function(){return this.bf};a.f.j("ArrayPagingDataSource.prototype.getPage",{getPage:a.bd.prototype.getPage});a.bd.prototype.setPage=function(b,c){c=c||{};b=parseInt(b,10);try{a.bd.N.handleEvent.call(this,a.bi.ga.BEFOREPAGE,{page:b,previousPage:this.bf})}catch(e){return Promise.reject(null)}this.pageSize=
null!=c.pageSize?c.pageSize:this.pageSize;c.startIndex=b*this.pageSize;var f=this.bf;this.bf=b;this.oa=c.startIndex;var g=this;return new Promise(function(b,e){g.ki(c).then(function(){a.bd.N.handleEvent.call(g,a.bi.ga.PAGE,{page:g.bf,previousPage:f});b(null)},function(){g.bf=f;g.oa=g.bf*g.pageSize;e(null)})})};a.f.j("ArrayPagingDataSource.prototype.setPage",{setPage:a.bd.prototype.setPage});a.bd.prototype.getStartItemIndex=function(){return this.oa};a.f.j("ArrayPagingDataSource.prototype.getStartItemIndex",
{getStartItemIndex:a.bd.prototype.getStartItemIndex});a.bd.prototype.getEndItemIndex=function(){return this.dn};a.f.j("ArrayPagingDataSource.prototype.getEndItemIndex",{getEndItemIndex:a.bd.prototype.getEndItemIndex});a.bd.prototype.getPageCount=function(){var a=this.totalSize();return-1==a?-1:Math.ceil(a/this.pageSize)};a.f.j("ArrayPagingDataSource.prototype.getPageCount",{getPageCount:a.bd.prototype.getPageCount});a.bd.prototype.fetch=function(a){a=a||{};if(void 0!==a.pageSize&&void 0!==a.startIndex){if(!this.Tl())return Promise.resolve();
this.Mu=a.startIndex+a.pageSize}this.JA(null);return Promise.resolve()};a.f.j("ArrayPagingDataSource.prototype.fetch",{fetch:a.bd.prototype.fetch});a.bd.prototype.ki=function(a){var c=a||{};void 0!==c.startIndex&&(this.current=c.startIndex);void 0!==c.pageSize&&(this.Mu=this.pageSize=c.pageSize);this.JA(a);return Promise.resolve({data:this.fk,startIndex:this.current})};a.bd.prototype.Tl=function(){return this.current+this.Mu<this.totalSize()};a.bd.prototype.U6=function(a){this.Mu=this.pageSize=a;
this.JA(null)};a.bd.prototype.totalSize=function(){return this.data.length};a.bd.prototype.totalSizeConfidence=function(){return"actual"};a.f.j("ArrayPagingDataSource.prototype.totalSizeConfidence",{totalSizeConfidence:a.bd.prototype.totalSizeConfidence});a.bd.prototype.getCapability=function(){return null};a.f.j("ArrayPagingDataSource.prototype.getCapability",{getCapability:a.bd.prototype.getCapability})});