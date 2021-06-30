goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_47903 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_47903(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_47904 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_47904(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__47122 = coll;
var G__47123 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__47122,G__47123) : shadow.dom.lazy_native_coll_seq.call(null,G__47122,G__47123));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4223__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__47136 = arguments.length;
switch (G__47136) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__47143 = arguments.length;
switch (G__47143) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__47145 = arguments.length;
switch (G__47145) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__47158 = arguments.length;
switch (G__47158) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__47160 = arguments.length;
switch (G__47160) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__47214 = arguments.length;
switch (G__47214) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e47227){if((e47227 instanceof Object)){
var e = e47227;
return console.log("didnt support attachEvent",el,e);
} else {
throw e47227;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__47251 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__47252 = null;
var count__47253 = (0);
var i__47254 = (0);
while(true){
if((i__47254 < count__47253)){
var el = chunk__47252.cljs$core$IIndexed$_nth$arity$2(null,i__47254);
var handler_47911__$1 = ((function (seq__47251,chunk__47252,count__47253,i__47254,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47251,chunk__47252,count__47253,i__47254,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_47911__$1);


var G__47912 = seq__47251;
var G__47913 = chunk__47252;
var G__47914 = count__47253;
var G__47915 = (i__47254 + (1));
seq__47251 = G__47912;
chunk__47252 = G__47913;
count__47253 = G__47914;
i__47254 = G__47915;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47251);
if(temp__5753__auto__){
var seq__47251__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47251__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__47251__$1);
var G__47916 = cljs.core.chunk_rest(seq__47251__$1);
var G__47917 = c__4649__auto__;
var G__47918 = cljs.core.count(c__4649__auto__);
var G__47919 = (0);
seq__47251 = G__47916;
chunk__47252 = G__47917;
count__47253 = G__47918;
i__47254 = G__47919;
continue;
} else {
var el = cljs.core.first(seq__47251__$1);
var handler_47920__$1 = ((function (seq__47251,chunk__47252,count__47253,i__47254,el,seq__47251__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47251,chunk__47252,count__47253,i__47254,el,seq__47251__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_47920__$1);


var G__47921 = cljs.core.next(seq__47251__$1);
var G__47922 = null;
var G__47923 = (0);
var G__47924 = (0);
seq__47251 = G__47921;
chunk__47252 = G__47922;
count__47253 = G__47923;
i__47254 = G__47924;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__47276 = arguments.length;
switch (G__47276) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__47305 = cljs.core.seq(events);
var chunk__47307 = null;
var count__47308 = (0);
var i__47309 = (0);
while(true){
if((i__47309 < count__47308)){
var vec__47333 = chunk__47307.cljs$core$IIndexed$_nth$arity$2(null,i__47309);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47333,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47333,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__47926 = seq__47305;
var G__47927 = chunk__47307;
var G__47928 = count__47308;
var G__47929 = (i__47309 + (1));
seq__47305 = G__47926;
chunk__47307 = G__47927;
count__47308 = G__47928;
i__47309 = G__47929;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47305);
if(temp__5753__auto__){
var seq__47305__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47305__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__47305__$1);
var G__47930 = cljs.core.chunk_rest(seq__47305__$1);
var G__47931 = c__4649__auto__;
var G__47932 = cljs.core.count(c__4649__auto__);
var G__47933 = (0);
seq__47305 = G__47930;
chunk__47307 = G__47931;
count__47308 = G__47932;
i__47309 = G__47933;
continue;
} else {
var vec__47338 = cljs.core.first(seq__47305__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47338,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47338,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__47934 = cljs.core.next(seq__47305__$1);
var G__47935 = null;
var G__47936 = (0);
var G__47937 = (0);
seq__47305 = G__47934;
chunk__47307 = G__47935;
count__47308 = G__47936;
i__47309 = G__47937;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__47344 = cljs.core.seq(styles);
var chunk__47345 = null;
var count__47346 = (0);
var i__47347 = (0);
while(true){
if((i__47347 < count__47346)){
var vec__47372 = chunk__47345.cljs$core$IIndexed$_nth$arity$2(null,i__47347);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47372,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47372,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__47938 = seq__47344;
var G__47939 = chunk__47345;
var G__47940 = count__47346;
var G__47941 = (i__47347 + (1));
seq__47344 = G__47938;
chunk__47345 = G__47939;
count__47346 = G__47940;
i__47347 = G__47941;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47344);
if(temp__5753__auto__){
var seq__47344__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47344__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__47344__$1);
var G__47942 = cljs.core.chunk_rest(seq__47344__$1);
var G__47943 = c__4649__auto__;
var G__47944 = cljs.core.count(c__4649__auto__);
var G__47945 = (0);
seq__47344 = G__47942;
chunk__47345 = G__47943;
count__47346 = G__47944;
i__47347 = G__47945;
continue;
} else {
var vec__47385 = cljs.core.first(seq__47344__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47385,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47385,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__47946 = cljs.core.next(seq__47344__$1);
var G__47947 = null;
var G__47948 = (0);
var G__47949 = (0);
seq__47344 = G__47946;
chunk__47345 = G__47947;
count__47346 = G__47948;
i__47347 = G__47949;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__47394_47950 = key;
var G__47394_47951__$1 = (((G__47394_47950 instanceof cljs.core.Keyword))?G__47394_47950.fqn:null);
switch (G__47394_47951__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_47953 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4223__auto__ = goog.string.startsWith(ks_47953,"data-");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return goog.string.startsWith(ks_47953,"aria-");
}
})())){
el.setAttribute(ks_47953,value);
} else {
(el[ks_47953] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__47421){
var map__47422 = p__47421;
var map__47422__$1 = cljs.core.__destructure_map(map__47422);
var props = map__47422__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47422__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__47424 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47424,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47424,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47424,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__47428 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__47428,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__47428;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__47433 = arguments.length;
switch (G__47433) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__47446){
var vec__47448 = p__47446;
var seq__47449 = cljs.core.seq(vec__47448);
var first__47450 = cljs.core.first(seq__47449);
var seq__47449__$1 = cljs.core.next(seq__47449);
var nn = first__47450;
var first__47450__$1 = cljs.core.first(seq__47449__$1);
var seq__47449__$2 = cljs.core.next(seq__47449__$1);
var np = first__47450__$1;
var nc = seq__47449__$2;
var node = vec__47448;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47477 = nn;
var G__47478 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47477,G__47478) : create_fn.call(null,G__47477,G__47478));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47480 = nn;
var G__47481 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47480,G__47481) : create_fn.call(null,G__47480,G__47481));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__47483 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47483,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47483,(1),null);
var seq__47486_47957 = cljs.core.seq(node_children);
var chunk__47487_47958 = null;
var count__47488_47959 = (0);
var i__47489_47960 = (0);
while(true){
if((i__47489_47960 < count__47488_47959)){
var child_struct_47961 = chunk__47487_47958.cljs$core$IIndexed$_nth$arity$2(null,i__47489_47960);
var children_47962 = shadow.dom.dom_node(child_struct_47961);
if(cljs.core.seq_QMARK_(children_47962)){
var seq__47547_47963 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_47962));
var chunk__47549_47964 = null;
var count__47550_47965 = (0);
var i__47551_47966 = (0);
while(true){
if((i__47551_47966 < count__47550_47965)){
var child_47967 = chunk__47549_47964.cljs$core$IIndexed$_nth$arity$2(null,i__47551_47966);
if(cljs.core.truth_(child_47967)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47967);


var G__47968 = seq__47547_47963;
var G__47969 = chunk__47549_47964;
var G__47970 = count__47550_47965;
var G__47971 = (i__47551_47966 + (1));
seq__47547_47963 = G__47968;
chunk__47549_47964 = G__47969;
count__47550_47965 = G__47970;
i__47551_47966 = G__47971;
continue;
} else {
var G__47972 = seq__47547_47963;
var G__47973 = chunk__47549_47964;
var G__47974 = count__47550_47965;
var G__47975 = (i__47551_47966 + (1));
seq__47547_47963 = G__47972;
chunk__47549_47964 = G__47973;
count__47550_47965 = G__47974;
i__47551_47966 = G__47975;
continue;
}
} else {
var temp__5753__auto___47976 = cljs.core.seq(seq__47547_47963);
if(temp__5753__auto___47976){
var seq__47547_47977__$1 = temp__5753__auto___47976;
if(cljs.core.chunked_seq_QMARK_(seq__47547_47977__$1)){
var c__4649__auto___47978 = cljs.core.chunk_first(seq__47547_47977__$1);
var G__47979 = cljs.core.chunk_rest(seq__47547_47977__$1);
var G__47980 = c__4649__auto___47978;
var G__47981 = cljs.core.count(c__4649__auto___47978);
var G__47982 = (0);
seq__47547_47963 = G__47979;
chunk__47549_47964 = G__47980;
count__47550_47965 = G__47981;
i__47551_47966 = G__47982;
continue;
} else {
var child_47983 = cljs.core.first(seq__47547_47977__$1);
if(cljs.core.truth_(child_47983)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47983);


var G__47984 = cljs.core.next(seq__47547_47977__$1);
var G__47985 = null;
var G__47986 = (0);
var G__47987 = (0);
seq__47547_47963 = G__47984;
chunk__47549_47964 = G__47985;
count__47550_47965 = G__47986;
i__47551_47966 = G__47987;
continue;
} else {
var G__47988 = cljs.core.next(seq__47547_47977__$1);
var G__47989 = null;
var G__47990 = (0);
var G__47991 = (0);
seq__47547_47963 = G__47988;
chunk__47549_47964 = G__47989;
count__47550_47965 = G__47990;
i__47551_47966 = G__47991;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_47962);
}


var G__47992 = seq__47486_47957;
var G__47993 = chunk__47487_47958;
var G__47994 = count__47488_47959;
var G__47995 = (i__47489_47960 + (1));
seq__47486_47957 = G__47992;
chunk__47487_47958 = G__47993;
count__47488_47959 = G__47994;
i__47489_47960 = G__47995;
continue;
} else {
var temp__5753__auto___47996 = cljs.core.seq(seq__47486_47957);
if(temp__5753__auto___47996){
var seq__47486_47997__$1 = temp__5753__auto___47996;
if(cljs.core.chunked_seq_QMARK_(seq__47486_47997__$1)){
var c__4649__auto___47998 = cljs.core.chunk_first(seq__47486_47997__$1);
var G__47999 = cljs.core.chunk_rest(seq__47486_47997__$1);
var G__48000 = c__4649__auto___47998;
var G__48001 = cljs.core.count(c__4649__auto___47998);
var G__48002 = (0);
seq__47486_47957 = G__47999;
chunk__47487_47958 = G__48000;
count__47488_47959 = G__48001;
i__47489_47960 = G__48002;
continue;
} else {
var child_struct_48003 = cljs.core.first(seq__47486_47997__$1);
var children_48004 = shadow.dom.dom_node(child_struct_48003);
if(cljs.core.seq_QMARK_(children_48004)){
var seq__47558_48005 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48004));
var chunk__47560_48006 = null;
var count__47561_48007 = (0);
var i__47562_48008 = (0);
while(true){
if((i__47562_48008 < count__47561_48007)){
var child_48009 = chunk__47560_48006.cljs$core$IIndexed$_nth$arity$2(null,i__47562_48008);
if(cljs.core.truth_(child_48009)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48009);


var G__48010 = seq__47558_48005;
var G__48011 = chunk__47560_48006;
var G__48012 = count__47561_48007;
var G__48013 = (i__47562_48008 + (1));
seq__47558_48005 = G__48010;
chunk__47560_48006 = G__48011;
count__47561_48007 = G__48012;
i__47562_48008 = G__48013;
continue;
} else {
var G__48014 = seq__47558_48005;
var G__48015 = chunk__47560_48006;
var G__48016 = count__47561_48007;
var G__48017 = (i__47562_48008 + (1));
seq__47558_48005 = G__48014;
chunk__47560_48006 = G__48015;
count__47561_48007 = G__48016;
i__47562_48008 = G__48017;
continue;
}
} else {
var temp__5753__auto___48018__$1 = cljs.core.seq(seq__47558_48005);
if(temp__5753__auto___48018__$1){
var seq__47558_48019__$1 = temp__5753__auto___48018__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47558_48019__$1)){
var c__4649__auto___48020 = cljs.core.chunk_first(seq__47558_48019__$1);
var G__48021 = cljs.core.chunk_rest(seq__47558_48019__$1);
var G__48022 = c__4649__auto___48020;
var G__48023 = cljs.core.count(c__4649__auto___48020);
var G__48024 = (0);
seq__47558_48005 = G__48021;
chunk__47560_48006 = G__48022;
count__47561_48007 = G__48023;
i__47562_48008 = G__48024;
continue;
} else {
var child_48025 = cljs.core.first(seq__47558_48019__$1);
if(cljs.core.truth_(child_48025)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48025);


var G__48026 = cljs.core.next(seq__47558_48019__$1);
var G__48027 = null;
var G__48028 = (0);
var G__48029 = (0);
seq__47558_48005 = G__48026;
chunk__47560_48006 = G__48027;
count__47561_48007 = G__48028;
i__47562_48008 = G__48029;
continue;
} else {
var G__48030 = cljs.core.next(seq__47558_48019__$1);
var G__48031 = null;
var G__48032 = (0);
var G__48033 = (0);
seq__47558_48005 = G__48030;
chunk__47560_48006 = G__48031;
count__47561_48007 = G__48032;
i__47562_48008 = G__48033;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48004);
}


var G__48034 = cljs.core.next(seq__47486_47997__$1);
var G__48035 = null;
var G__48036 = (0);
var G__48037 = (0);
seq__47486_47957 = G__48034;
chunk__47487_47958 = G__48035;
count__47488_47959 = G__48036;
i__47489_47960 = G__48037;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__47622 = cljs.core.seq(node);
var chunk__47623 = null;
var count__47624 = (0);
var i__47625 = (0);
while(true){
if((i__47625 < count__47624)){
var n = chunk__47623.cljs$core$IIndexed$_nth$arity$2(null,i__47625);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48039 = seq__47622;
var G__48040 = chunk__47623;
var G__48041 = count__47624;
var G__48042 = (i__47625 + (1));
seq__47622 = G__48039;
chunk__47623 = G__48040;
count__47624 = G__48041;
i__47625 = G__48042;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47622);
if(temp__5753__auto__){
var seq__47622__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47622__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__47622__$1);
var G__48043 = cljs.core.chunk_rest(seq__47622__$1);
var G__48044 = c__4649__auto__;
var G__48045 = cljs.core.count(c__4649__auto__);
var G__48046 = (0);
seq__47622 = G__48043;
chunk__47623 = G__48044;
count__47624 = G__48045;
i__47625 = G__48046;
continue;
} else {
var n = cljs.core.first(seq__47622__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48048 = cljs.core.next(seq__47622__$1);
var G__48049 = null;
var G__48050 = (0);
var G__48051 = (0);
seq__47622 = G__48048;
chunk__47623 = G__48049;
count__47624 = G__48050;
i__47625 = G__48051;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__47638 = arguments.length;
switch (G__47638) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__47644 = arguments.length;
switch (G__47644) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__47660 = arguments.length;
switch (G__47660) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4223__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4835__auto__ = [];
var len__4829__auto___48057 = arguments.length;
var i__4830__auto___48058 = (0);
while(true){
if((i__4830__auto___48058 < len__4829__auto___48057)){
args__4835__auto__.push((arguments[i__4830__auto___48058]));

var G__48059 = (i__4830__auto___48058 + (1));
i__4830__auto___48058 = G__48059;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__47697_48060 = cljs.core.seq(nodes);
var chunk__47698_48061 = null;
var count__47699_48062 = (0);
var i__47700_48063 = (0);
while(true){
if((i__47700_48063 < count__47699_48062)){
var node_48064 = chunk__47698_48061.cljs$core$IIndexed$_nth$arity$2(null,i__47700_48063);
fragment.appendChild(shadow.dom._to_dom(node_48064));


var G__48065 = seq__47697_48060;
var G__48066 = chunk__47698_48061;
var G__48067 = count__47699_48062;
var G__48068 = (i__47700_48063 + (1));
seq__47697_48060 = G__48065;
chunk__47698_48061 = G__48066;
count__47699_48062 = G__48067;
i__47700_48063 = G__48068;
continue;
} else {
var temp__5753__auto___48069 = cljs.core.seq(seq__47697_48060);
if(temp__5753__auto___48069){
var seq__47697_48070__$1 = temp__5753__auto___48069;
if(cljs.core.chunked_seq_QMARK_(seq__47697_48070__$1)){
var c__4649__auto___48072 = cljs.core.chunk_first(seq__47697_48070__$1);
var G__48073 = cljs.core.chunk_rest(seq__47697_48070__$1);
var G__48074 = c__4649__auto___48072;
var G__48075 = cljs.core.count(c__4649__auto___48072);
var G__48076 = (0);
seq__47697_48060 = G__48073;
chunk__47698_48061 = G__48074;
count__47699_48062 = G__48075;
i__47700_48063 = G__48076;
continue;
} else {
var node_48078 = cljs.core.first(seq__47697_48070__$1);
fragment.appendChild(shadow.dom._to_dom(node_48078));


var G__48079 = cljs.core.next(seq__47697_48070__$1);
var G__48080 = null;
var G__48081 = (0);
var G__48082 = (0);
seq__47697_48060 = G__48079;
chunk__47698_48061 = G__48080;
count__47699_48062 = G__48081;
i__47700_48063 = G__48082;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq47689){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47689));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__47711_48086 = cljs.core.seq(scripts);
var chunk__47712_48087 = null;
var count__47713_48088 = (0);
var i__47714_48089 = (0);
while(true){
if((i__47714_48089 < count__47713_48088)){
var vec__47726_48091 = chunk__47712_48087.cljs$core$IIndexed$_nth$arity$2(null,i__47714_48089);
var script_tag_48092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47726_48091,(0),null);
var script_body_48093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47726_48091,(1),null);
eval(script_body_48093);


var G__48094 = seq__47711_48086;
var G__48095 = chunk__47712_48087;
var G__48096 = count__47713_48088;
var G__48097 = (i__47714_48089 + (1));
seq__47711_48086 = G__48094;
chunk__47712_48087 = G__48095;
count__47713_48088 = G__48096;
i__47714_48089 = G__48097;
continue;
} else {
var temp__5753__auto___48099 = cljs.core.seq(seq__47711_48086);
if(temp__5753__auto___48099){
var seq__47711_48100__$1 = temp__5753__auto___48099;
if(cljs.core.chunked_seq_QMARK_(seq__47711_48100__$1)){
var c__4649__auto___48101 = cljs.core.chunk_first(seq__47711_48100__$1);
var G__48103 = cljs.core.chunk_rest(seq__47711_48100__$1);
var G__48104 = c__4649__auto___48101;
var G__48105 = cljs.core.count(c__4649__auto___48101);
var G__48106 = (0);
seq__47711_48086 = G__48103;
chunk__47712_48087 = G__48104;
count__47713_48088 = G__48105;
i__47714_48089 = G__48106;
continue;
} else {
var vec__47732_48107 = cljs.core.first(seq__47711_48100__$1);
var script_tag_48108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47732_48107,(0),null);
var script_body_48109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47732_48107,(1),null);
eval(script_body_48109);


var G__48110 = cljs.core.next(seq__47711_48100__$1);
var G__48111 = null;
var G__48112 = (0);
var G__48113 = (0);
seq__47711_48086 = G__48110;
chunk__47712_48087 = G__48111;
count__47713_48088 = G__48112;
i__47714_48089 = G__48113;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__47737){
var vec__47738 = p__47737;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47738,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47738,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__47750 = arguments.length;
switch (G__47750) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__47768 = cljs.core.seq(style_keys);
var chunk__47769 = null;
var count__47770 = (0);
var i__47771 = (0);
while(true){
if((i__47771 < count__47770)){
var it = chunk__47769.cljs$core$IIndexed$_nth$arity$2(null,i__47771);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48115 = seq__47768;
var G__48116 = chunk__47769;
var G__48117 = count__47770;
var G__48118 = (i__47771 + (1));
seq__47768 = G__48115;
chunk__47769 = G__48116;
count__47770 = G__48117;
i__47771 = G__48118;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47768);
if(temp__5753__auto__){
var seq__47768__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47768__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__47768__$1);
var G__48119 = cljs.core.chunk_rest(seq__47768__$1);
var G__48120 = c__4649__auto__;
var G__48121 = cljs.core.count(c__4649__auto__);
var G__48122 = (0);
seq__47768 = G__48119;
chunk__47769 = G__48120;
count__47770 = G__48121;
i__47771 = G__48122;
continue;
} else {
var it = cljs.core.first(seq__47768__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48126 = cljs.core.next(seq__47768__$1);
var G__48127 = null;
var G__48128 = (0);
var G__48129 = (0);
seq__47768 = G__48126;
chunk__47769 = G__48127;
count__47770 = G__48128;
i__47771 = G__48129;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k47782,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__47790 = k47782;
var G__47790__$1 = (((G__47790 instanceof cljs.core.Keyword))?G__47790.fqn:null);
switch (G__47790__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47782,else__4475__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__47794){
var vec__47796 = p__47794;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47796,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47796,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47781){
var self__ = this;
var G__47781__$1 = this;
return (new cljs.core.RecordIter((0),G__47781__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47783,other47784){
var self__ = this;
var this47783__$1 = this;
return (((!((other47784 == null)))) && ((((this47783__$1.constructor === other47784.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47783__$1.x,other47784.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47783__$1.y,other47784.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47783__$1.__extmap,other47784.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k47782){
var self__ = this;
var this__4479__auto____$1 = this;
var G__47804 = k47782;
var G__47804__$1 = (((G__47804 instanceof cljs.core.Keyword))?G__47804.fqn:null);
switch (G__47804__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k47782);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__47781){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__47805 = cljs.core.keyword_identical_QMARK_;
var expr__47806 = k__4481__auto__;
if(cljs.core.truth_((pred__47805.cljs$core$IFn$_invoke$arity$2 ? pred__47805.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__47806) : pred__47805.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__47806)))){
return (new shadow.dom.Coordinate(G__47781,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47805.cljs$core$IFn$_invoke$arity$2 ? pred__47805.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__47806) : pred__47805.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__47806)))){
return (new shadow.dom.Coordinate(self__.x,G__47781,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__47781),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__47781){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__47781,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__47785){
var extmap__4512__auto__ = (function (){var G__47808 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47785,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__47785)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47808);
} else {
return G__47808;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__47785),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__47785),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k47810,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__47814 = k47810;
var G__47814__$1 = (((G__47814 instanceof cljs.core.Keyword))?G__47814.fqn:null);
switch (G__47814__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47810,else__4475__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__47815){
var vec__47816 = p__47815;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47816,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47816,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Size{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47809){
var self__ = this;
var G__47809__$1 = this;
return (new cljs.core.RecordIter((0),G__47809__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47811,other47812){
var self__ = this;
var this47811__$1 = this;
return (((!((other47812 == null)))) && ((((this47811__$1.constructor === other47812.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47811__$1.w,other47812.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47811__$1.h,other47812.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47811__$1.__extmap,other47812.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k47810){
var self__ = this;
var this__4479__auto____$1 = this;
var G__47819 = k47810;
var G__47819__$1 = (((G__47819 instanceof cljs.core.Keyword))?G__47819.fqn:null);
switch (G__47819__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k47810);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__47809){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__47820 = cljs.core.keyword_identical_QMARK_;
var expr__47821 = k__4481__auto__;
if(cljs.core.truth_((pred__47820.cljs$core$IFn$_invoke$arity$2 ? pred__47820.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__47821) : pred__47820.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__47821)))){
return (new shadow.dom.Size(G__47809,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47820.cljs$core$IFn$_invoke$arity$2 ? pred__47820.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__47821) : pred__47820.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__47821)))){
return (new shadow.dom.Size(self__.w,G__47809,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__47809),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__47809){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__47809,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__47813){
var extmap__4512__auto__ = (function (){var G__47823 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47813,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__47813)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47823);
} else {
return G__47823;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__47813),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__47813),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4703__auto__ = opts;
var l__4704__auto__ = a__4703__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4704__auto__)){
var G__48156 = (i + (1));
var G__48157 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__48156;
ret = G__48157;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47828){
var vec__47829 = p__47828;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47829,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47829,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__47833 = arguments.length;
switch (G__47833) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__48160 = ps;
var G__48161 = (i + (1));
el__$1 = G__48160;
i = G__48161;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__47834 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47834,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47834,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47834,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__47837_48165 = cljs.core.seq(props);
var chunk__47838_48166 = null;
var count__47839_48167 = (0);
var i__47840_48168 = (0);
while(true){
if((i__47840_48168 < count__47839_48167)){
var vec__47847_48169 = chunk__47838_48166.cljs$core$IIndexed$_nth$arity$2(null,i__47840_48168);
var k_48170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47847_48169,(0),null);
var v_48171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47847_48169,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_48170);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48170),v_48171);


var G__48172 = seq__47837_48165;
var G__48173 = chunk__47838_48166;
var G__48174 = count__47839_48167;
var G__48175 = (i__47840_48168 + (1));
seq__47837_48165 = G__48172;
chunk__47838_48166 = G__48173;
count__47839_48167 = G__48174;
i__47840_48168 = G__48175;
continue;
} else {
var temp__5753__auto___48177 = cljs.core.seq(seq__47837_48165);
if(temp__5753__auto___48177){
var seq__47837_48182__$1 = temp__5753__auto___48177;
if(cljs.core.chunked_seq_QMARK_(seq__47837_48182__$1)){
var c__4649__auto___48183 = cljs.core.chunk_first(seq__47837_48182__$1);
var G__48184 = cljs.core.chunk_rest(seq__47837_48182__$1);
var G__48185 = c__4649__auto___48183;
var G__48186 = cljs.core.count(c__4649__auto___48183);
var G__48187 = (0);
seq__47837_48165 = G__48184;
chunk__47838_48166 = G__48185;
count__47839_48167 = G__48186;
i__47840_48168 = G__48187;
continue;
} else {
var vec__47850_48188 = cljs.core.first(seq__47837_48182__$1);
var k_48189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47850_48188,(0),null);
var v_48190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47850_48188,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_48189);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48189),v_48190);


var G__48191 = cljs.core.next(seq__47837_48182__$1);
var G__48192 = null;
var G__48193 = (0);
var G__48194 = (0);
seq__47837_48165 = G__48191;
chunk__47838_48166 = G__48192;
count__47839_48167 = G__48193;
i__47840_48168 = G__48194;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__47854 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47854,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47854,(1),null);
var seq__47857_48195 = cljs.core.seq(node_children);
var chunk__47859_48196 = null;
var count__47860_48197 = (0);
var i__47861_48198 = (0);
while(true){
if((i__47861_48198 < count__47860_48197)){
var child_struct_48199 = chunk__47859_48196.cljs$core$IIndexed$_nth$arity$2(null,i__47861_48198);
if((!((child_struct_48199 == null)))){
if(typeof child_struct_48199 === 'string'){
var text_48200 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48200),child_struct_48199].join(''));
} else {
var children_48201 = shadow.dom.svg_node(child_struct_48199);
if(cljs.core.seq_QMARK_(children_48201)){
var seq__47875_48202 = cljs.core.seq(children_48201);
var chunk__47877_48203 = null;
var count__47878_48204 = (0);
var i__47879_48205 = (0);
while(true){
if((i__47879_48205 < count__47878_48204)){
var child_48206 = chunk__47877_48203.cljs$core$IIndexed$_nth$arity$2(null,i__47879_48205);
if(cljs.core.truth_(child_48206)){
node.appendChild(child_48206);


var G__48207 = seq__47875_48202;
var G__48208 = chunk__47877_48203;
var G__48209 = count__47878_48204;
var G__48210 = (i__47879_48205 + (1));
seq__47875_48202 = G__48207;
chunk__47877_48203 = G__48208;
count__47878_48204 = G__48209;
i__47879_48205 = G__48210;
continue;
} else {
var G__48211 = seq__47875_48202;
var G__48212 = chunk__47877_48203;
var G__48213 = count__47878_48204;
var G__48214 = (i__47879_48205 + (1));
seq__47875_48202 = G__48211;
chunk__47877_48203 = G__48212;
count__47878_48204 = G__48213;
i__47879_48205 = G__48214;
continue;
}
} else {
var temp__5753__auto___48215 = cljs.core.seq(seq__47875_48202);
if(temp__5753__auto___48215){
var seq__47875_48216__$1 = temp__5753__auto___48215;
if(cljs.core.chunked_seq_QMARK_(seq__47875_48216__$1)){
var c__4649__auto___48224 = cljs.core.chunk_first(seq__47875_48216__$1);
var G__48225 = cljs.core.chunk_rest(seq__47875_48216__$1);
var G__48226 = c__4649__auto___48224;
var G__48227 = cljs.core.count(c__4649__auto___48224);
var G__48228 = (0);
seq__47875_48202 = G__48225;
chunk__47877_48203 = G__48226;
count__47878_48204 = G__48227;
i__47879_48205 = G__48228;
continue;
} else {
var child_48229 = cljs.core.first(seq__47875_48216__$1);
if(cljs.core.truth_(child_48229)){
node.appendChild(child_48229);


var G__48230 = cljs.core.next(seq__47875_48216__$1);
var G__48231 = null;
var G__48232 = (0);
var G__48233 = (0);
seq__47875_48202 = G__48230;
chunk__47877_48203 = G__48231;
count__47878_48204 = G__48232;
i__47879_48205 = G__48233;
continue;
} else {
var G__48234 = cljs.core.next(seq__47875_48216__$1);
var G__48235 = null;
var G__48236 = (0);
var G__48237 = (0);
seq__47875_48202 = G__48234;
chunk__47877_48203 = G__48235;
count__47878_48204 = G__48236;
i__47879_48205 = G__48237;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48201);
}
}


var G__48238 = seq__47857_48195;
var G__48239 = chunk__47859_48196;
var G__48240 = count__47860_48197;
var G__48241 = (i__47861_48198 + (1));
seq__47857_48195 = G__48238;
chunk__47859_48196 = G__48239;
count__47860_48197 = G__48240;
i__47861_48198 = G__48241;
continue;
} else {
var G__48242 = seq__47857_48195;
var G__48243 = chunk__47859_48196;
var G__48244 = count__47860_48197;
var G__48245 = (i__47861_48198 + (1));
seq__47857_48195 = G__48242;
chunk__47859_48196 = G__48243;
count__47860_48197 = G__48244;
i__47861_48198 = G__48245;
continue;
}
} else {
var temp__5753__auto___48246 = cljs.core.seq(seq__47857_48195);
if(temp__5753__auto___48246){
var seq__47857_48247__$1 = temp__5753__auto___48246;
if(cljs.core.chunked_seq_QMARK_(seq__47857_48247__$1)){
var c__4649__auto___48248 = cljs.core.chunk_first(seq__47857_48247__$1);
var G__48249 = cljs.core.chunk_rest(seq__47857_48247__$1);
var G__48250 = c__4649__auto___48248;
var G__48251 = cljs.core.count(c__4649__auto___48248);
var G__48252 = (0);
seq__47857_48195 = G__48249;
chunk__47859_48196 = G__48250;
count__47860_48197 = G__48251;
i__47861_48198 = G__48252;
continue;
} else {
var child_struct_48253 = cljs.core.first(seq__47857_48247__$1);
if((!((child_struct_48253 == null)))){
if(typeof child_struct_48253 === 'string'){
var text_48254 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48254),child_struct_48253].join(''));
} else {
var children_48255 = shadow.dom.svg_node(child_struct_48253);
if(cljs.core.seq_QMARK_(children_48255)){
var seq__47881_48256 = cljs.core.seq(children_48255);
var chunk__47883_48257 = null;
var count__47884_48258 = (0);
var i__47885_48259 = (0);
while(true){
if((i__47885_48259 < count__47884_48258)){
var child_48260 = chunk__47883_48257.cljs$core$IIndexed$_nth$arity$2(null,i__47885_48259);
if(cljs.core.truth_(child_48260)){
node.appendChild(child_48260);


var G__48261 = seq__47881_48256;
var G__48262 = chunk__47883_48257;
var G__48263 = count__47884_48258;
var G__48264 = (i__47885_48259 + (1));
seq__47881_48256 = G__48261;
chunk__47883_48257 = G__48262;
count__47884_48258 = G__48263;
i__47885_48259 = G__48264;
continue;
} else {
var G__48265 = seq__47881_48256;
var G__48266 = chunk__47883_48257;
var G__48267 = count__47884_48258;
var G__48268 = (i__47885_48259 + (1));
seq__47881_48256 = G__48265;
chunk__47883_48257 = G__48266;
count__47884_48258 = G__48267;
i__47885_48259 = G__48268;
continue;
}
} else {
var temp__5753__auto___48269__$1 = cljs.core.seq(seq__47881_48256);
if(temp__5753__auto___48269__$1){
var seq__47881_48270__$1 = temp__5753__auto___48269__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47881_48270__$1)){
var c__4649__auto___48271 = cljs.core.chunk_first(seq__47881_48270__$1);
var G__48272 = cljs.core.chunk_rest(seq__47881_48270__$1);
var G__48273 = c__4649__auto___48271;
var G__48274 = cljs.core.count(c__4649__auto___48271);
var G__48275 = (0);
seq__47881_48256 = G__48272;
chunk__47883_48257 = G__48273;
count__47884_48258 = G__48274;
i__47885_48259 = G__48275;
continue;
} else {
var child_48276 = cljs.core.first(seq__47881_48270__$1);
if(cljs.core.truth_(child_48276)){
node.appendChild(child_48276);


var G__48277 = cljs.core.next(seq__47881_48270__$1);
var G__48278 = null;
var G__48279 = (0);
var G__48280 = (0);
seq__47881_48256 = G__48277;
chunk__47883_48257 = G__48278;
count__47884_48258 = G__48279;
i__47885_48259 = G__48280;
continue;
} else {
var G__48281 = cljs.core.next(seq__47881_48270__$1);
var G__48282 = null;
var G__48283 = (0);
var G__48284 = (0);
seq__47881_48256 = G__48281;
chunk__47883_48257 = G__48282;
count__47884_48258 = G__48283;
i__47885_48259 = G__48284;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48255);
}
}


var G__48285 = cljs.core.next(seq__47857_48247__$1);
var G__48286 = null;
var G__48287 = (0);
var G__48288 = (0);
seq__47857_48195 = G__48285;
chunk__47859_48196 = G__48286;
count__47860_48197 = G__48287;
i__47861_48198 = G__48288;
continue;
} else {
var G__48289 = cljs.core.next(seq__47857_48247__$1);
var G__48290 = null;
var G__48291 = (0);
var G__48292 = (0);
seq__47857_48195 = G__48289;
chunk__47859_48196 = G__48290;
count__47860_48197 = G__48291;
i__47861_48198 = G__48292;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___48293 = arguments.length;
var i__4830__auto___48294 = (0);
while(true){
if((i__4830__auto___48294 < len__4829__auto___48293)){
args__4835__auto__.push((arguments[i__4830__auto___48294]));

var G__48295 = (i__4830__auto___48294 + (1));
i__4830__auto___48294 = G__48295;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq47887){
var G__47888 = cljs.core.first(seq47887);
var seq47887__$1 = cljs.core.next(seq47887);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47888,seq47887__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__47890 = arguments.length;
switch (G__47890) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4221__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4221__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4221__auto__;
}
})())){
var c__45133__auto___48297 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45134__auto__ = (function (){var switch__44930__auto__ = (function (state_47895){
var state_val_47896 = (state_47895[(1)]);
if((state_val_47896 === (1))){
var state_47895__$1 = state_47895;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47895__$1,(2),once_or_cleanup);
} else {
if((state_val_47896 === (2))){
var inst_47892 = (state_47895[(2)]);
var inst_47893 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_47895__$1 = (function (){var statearr_47897 = state_47895;
(statearr_47897[(7)] = inst_47892);

return statearr_47897;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47895__$1,inst_47893);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__44931__auto__ = null;
var shadow$dom$state_machine__44931__auto____0 = (function (){
var statearr_47898 = [null,null,null,null,null,null,null,null];
(statearr_47898[(0)] = shadow$dom$state_machine__44931__auto__);

(statearr_47898[(1)] = (1));

return statearr_47898;
});
var shadow$dom$state_machine__44931__auto____1 = (function (state_47895){
while(true){
var ret_value__44932__auto__ = (function (){try{while(true){
var result__44933__auto__ = switch__44930__auto__(state_47895);
if(cljs.core.keyword_identical_QMARK_(result__44933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44933__auto__;
}
break;
}
}catch (e47899){var ex__44934__auto__ = e47899;
var statearr_47900_48298 = state_47895;
(statearr_47900_48298[(2)] = ex__44934__auto__);


if(cljs.core.seq((state_47895[(4)]))){
var statearr_47901_48302 = state_47895;
(statearr_47901_48302[(1)] = cljs.core.first((state_47895[(4)])));

} else {
throw ex__44934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48303 = state_47895;
state_47895 = G__48303;
continue;
} else {
return ret_value__44932__auto__;
}
break;
}
});
shadow$dom$state_machine__44931__auto__ = function(state_47895){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__44931__auto____0.call(this);
case 1:
return shadow$dom$state_machine__44931__auto____1.call(this,state_47895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__44931__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__44931__auto____0;
shadow$dom$state_machine__44931__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__44931__auto____1;
return shadow$dom$state_machine__44931__auto__;
})()
})();
var state__45135__auto__ = (function (){var statearr_47902 = f__45134__auto__();
(statearr_47902[(6)] = c__45133__auto___48297);

return statearr_47902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45135__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
