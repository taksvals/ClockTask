goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___50795 = arguments.length;
var i__4830__auto___50796 = (0);
while(true){
if((i__4830__auto___50796 < len__4829__auto___50795)){
args__4835__auto__.push((arguments[i__4830__auto___50796]));

var G__50797 = (i__4830__auto___50796 + (1));
i__4830__auto___50796 = G__50797;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq50534){
var G__50535 = cljs.core.first(seq50534);
var seq50534__$1 = cljs.core.next(seq50534);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50535,seq50534__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__50544 = cljs.core.seq(sources);
var chunk__50545 = null;
var count__50546 = (0);
var i__50547 = (0);
while(true){
if((i__50547 < count__50546)){
var map__50554 = chunk__50545.cljs$core$IIndexed$_nth$arity$2(null,i__50547);
var map__50554__$1 = cljs.core.__destructure_map(map__50554);
var src = map__50554__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50554__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50554__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50554__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50554__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e50555){var e_50798 = e50555;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_50798);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_50798.message)].join('')));
}

var G__50799 = seq__50544;
var G__50800 = chunk__50545;
var G__50801 = count__50546;
var G__50802 = (i__50547 + (1));
seq__50544 = G__50799;
chunk__50545 = G__50800;
count__50546 = G__50801;
i__50547 = G__50802;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50544);
if(temp__5753__auto__){
var seq__50544__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50544__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50544__$1);
var G__50803 = cljs.core.chunk_rest(seq__50544__$1);
var G__50804 = c__4649__auto__;
var G__50805 = cljs.core.count(c__4649__auto__);
var G__50806 = (0);
seq__50544 = G__50803;
chunk__50545 = G__50804;
count__50546 = G__50805;
i__50547 = G__50806;
continue;
} else {
var map__50556 = cljs.core.first(seq__50544__$1);
var map__50556__$1 = cljs.core.__destructure_map(map__50556);
var src = map__50556__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50556__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50556__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50556__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50556__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e50557){var e_50807 = e50557;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_50807);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_50807.message)].join('')));
}

var G__50808 = cljs.core.next(seq__50544__$1);
var G__50809 = null;
var G__50810 = (0);
var G__50811 = (0);
seq__50544 = G__50808;
chunk__50545 = G__50809;
count__50546 = G__50810;
i__50547 = G__50811;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__50562 = cljs.core.seq(js_requires);
var chunk__50563 = null;
var count__50564 = (0);
var i__50565 = (0);
while(true){
if((i__50565 < count__50564)){
var js_ns = chunk__50563.cljs$core$IIndexed$_nth$arity$2(null,i__50565);
var require_str_50812 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_50812);


var G__50813 = seq__50562;
var G__50814 = chunk__50563;
var G__50815 = count__50564;
var G__50816 = (i__50565 + (1));
seq__50562 = G__50813;
chunk__50563 = G__50814;
count__50564 = G__50815;
i__50565 = G__50816;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50562);
if(temp__5753__auto__){
var seq__50562__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50562__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50562__$1);
var G__50822 = cljs.core.chunk_rest(seq__50562__$1);
var G__50823 = c__4649__auto__;
var G__50824 = cljs.core.count(c__4649__auto__);
var G__50825 = (0);
seq__50562 = G__50822;
chunk__50563 = G__50823;
count__50564 = G__50824;
i__50565 = G__50825;
continue;
} else {
var js_ns = cljs.core.first(seq__50562__$1);
var require_str_50826 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_50826);


var G__50828 = cljs.core.next(seq__50562__$1);
var G__50829 = null;
var G__50830 = (0);
var G__50831 = (0);
seq__50562 = G__50828;
chunk__50563 = G__50829;
count__50564 = G__50830;
i__50565 = G__50831;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__50574){
var map__50575 = p__50574;
var map__50575__$1 = cljs.core.__destructure_map(map__50575);
var msg = map__50575__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50575__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50575__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50576(s__50577){
return (new cljs.core.LazySeq(null,(function (){
var s__50577__$1 = s__50577;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__50577__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__50587 = cljs.core.first(xs__6308__auto__);
var map__50587__$1 = cljs.core.__destructure_map(map__50587);
var src = map__50587__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50587__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50587__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4618__auto__ = ((function (s__50577__$1,map__50587,map__50587__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50575,map__50575__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50576_$_iter__50578(s__50579){
return (new cljs.core.LazySeq(null,((function (s__50577__$1,map__50587,map__50587__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50575,map__50575__$1,msg,info,reload_info){
return (function (){
var s__50579__$1 = s__50579;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__50579__$1);
if(temp__5753__auto____$1){
var s__50579__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50579__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__50579__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__50581 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__50580 = (0);
while(true){
if((i__50580 < size__4621__auto__)){
var warning = cljs.core._nth(c__4620__auto__,i__50580);
cljs.core.chunk_append(b__50581,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__50836 = (i__50580 + (1));
i__50580 = G__50836;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50581),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50576_$_iter__50578(cljs.core.chunk_rest(s__50579__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50581),null);
}
} else {
var warning = cljs.core.first(s__50579__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50576_$_iter__50578(cljs.core.rest(s__50579__$2)));
}
} else {
return null;
}
break;
}
});})(s__50577__$1,map__50587,map__50587__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50575,map__50575__$1,msg,info,reload_info))
,null,null));
});})(s__50577__$1,map__50587,map__50587__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50575,map__50575__$1,msg,info,reload_info))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(warnings));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50576(cljs.core.rest(s__50577__$1)));
} else {
var G__50839 = cljs.core.rest(s__50577__$1);
s__50577__$1 = G__50839;
continue;
}
} else {
var G__50842 = cljs.core.rest(s__50577__$1);
s__50577__$1 = G__50842;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__50602_50843 = cljs.core.seq(warnings);
var chunk__50603_50844 = null;
var count__50604_50845 = (0);
var i__50605_50846 = (0);
while(true){
if((i__50605_50846 < count__50604_50845)){
var map__50613_50848 = chunk__50603_50844.cljs$core$IIndexed$_nth$arity$2(null,i__50605_50846);
var map__50613_50849__$1 = cljs.core.__destructure_map(map__50613_50848);
var w_50850 = map__50613_50849__$1;
var msg_50851__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50613_50849__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_50852 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50613_50849__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_50853 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50613_50849__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_50854 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50613_50849__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_50854)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50852),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_50853),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_50851__$1)].join(''));


var G__50855 = seq__50602_50843;
var G__50856 = chunk__50603_50844;
var G__50857 = count__50604_50845;
var G__50858 = (i__50605_50846 + (1));
seq__50602_50843 = G__50855;
chunk__50603_50844 = G__50856;
count__50604_50845 = G__50857;
i__50605_50846 = G__50858;
continue;
} else {
var temp__5753__auto___50859 = cljs.core.seq(seq__50602_50843);
if(temp__5753__auto___50859){
var seq__50602_50861__$1 = temp__5753__auto___50859;
if(cljs.core.chunked_seq_QMARK_(seq__50602_50861__$1)){
var c__4649__auto___50862 = cljs.core.chunk_first(seq__50602_50861__$1);
var G__50863 = cljs.core.chunk_rest(seq__50602_50861__$1);
var G__50864 = c__4649__auto___50862;
var G__50865 = cljs.core.count(c__4649__auto___50862);
var G__50866 = (0);
seq__50602_50843 = G__50863;
chunk__50603_50844 = G__50864;
count__50604_50845 = G__50865;
i__50605_50846 = G__50866;
continue;
} else {
var map__50618_50867 = cljs.core.first(seq__50602_50861__$1);
var map__50618_50868__$1 = cljs.core.__destructure_map(map__50618_50867);
var w_50869 = map__50618_50868__$1;
var msg_50870__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50618_50868__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_50871 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50618_50868__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_50872 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50618_50868__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_50873 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50618_50868__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_50873)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50871),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_50872),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_50870__$1)].join(''));


var G__50876 = cljs.core.next(seq__50602_50861__$1);
var G__50877 = null;
var G__50878 = (0);
var G__50879 = (0);
seq__50602_50843 = G__50876;
chunk__50603_50844 = G__50877;
count__50604_50845 = G__50878;
i__50605_50846 = G__50879;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__50573_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__50573_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4221__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4221__auto__){
var and__4221__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4221__auto____$1){
return new$;
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__50629){
var map__50630 = p__50629;
var map__50630__$1 = cljs.core.__destructure_map(map__50630);
var msg = map__50630__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50630__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__50631 = cljs.core.seq(updates);
var chunk__50633 = null;
var count__50634 = (0);
var i__50635 = (0);
while(true){
if((i__50635 < count__50634)){
var path = chunk__50633.cljs$core$IIndexed$_nth$arity$2(null,i__50635);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50705_50889 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50711_50890 = null;
var count__50712_50891 = (0);
var i__50713_50892 = (0);
while(true){
if((i__50713_50892 < count__50712_50891)){
var node_50894 = chunk__50711_50890.cljs$core$IIndexed$_nth$arity$2(null,i__50713_50892);
if(cljs.core.not(node_50894.shadow$old)){
var path_match_50895 = shadow.cljs.devtools.client.browser.match_paths(node_50894.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50895)){
var new_link_50896 = (function (){var G__50724 = node_50894.cloneNode(true);
G__50724.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50895),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50724;
})();
(node_50894.shadow$old = true);

(new_link_50896.onload = ((function (seq__50705_50889,chunk__50711_50890,count__50712_50891,i__50713_50892,seq__50631,chunk__50633,count__50634,i__50635,new_link_50896,path_match_50895,node_50894,path,map__50630,map__50630__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_50894);
});})(seq__50705_50889,chunk__50711_50890,count__50712_50891,i__50713_50892,seq__50631,chunk__50633,count__50634,i__50635,new_link_50896,path_match_50895,node_50894,path,map__50630,map__50630__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50895], 0));

goog.dom.insertSiblingAfter(new_link_50896,node_50894);


var G__50897 = seq__50705_50889;
var G__50898 = chunk__50711_50890;
var G__50899 = count__50712_50891;
var G__50900 = (i__50713_50892 + (1));
seq__50705_50889 = G__50897;
chunk__50711_50890 = G__50898;
count__50712_50891 = G__50899;
i__50713_50892 = G__50900;
continue;
} else {
var G__50901 = seq__50705_50889;
var G__50902 = chunk__50711_50890;
var G__50903 = count__50712_50891;
var G__50904 = (i__50713_50892 + (1));
seq__50705_50889 = G__50901;
chunk__50711_50890 = G__50902;
count__50712_50891 = G__50903;
i__50713_50892 = G__50904;
continue;
}
} else {
var G__50905 = seq__50705_50889;
var G__50906 = chunk__50711_50890;
var G__50907 = count__50712_50891;
var G__50908 = (i__50713_50892 + (1));
seq__50705_50889 = G__50905;
chunk__50711_50890 = G__50906;
count__50712_50891 = G__50907;
i__50713_50892 = G__50908;
continue;
}
} else {
var temp__5753__auto___50909 = cljs.core.seq(seq__50705_50889);
if(temp__5753__auto___50909){
var seq__50705_50910__$1 = temp__5753__auto___50909;
if(cljs.core.chunked_seq_QMARK_(seq__50705_50910__$1)){
var c__4649__auto___50911 = cljs.core.chunk_first(seq__50705_50910__$1);
var G__50912 = cljs.core.chunk_rest(seq__50705_50910__$1);
var G__50913 = c__4649__auto___50911;
var G__50914 = cljs.core.count(c__4649__auto___50911);
var G__50915 = (0);
seq__50705_50889 = G__50912;
chunk__50711_50890 = G__50913;
count__50712_50891 = G__50914;
i__50713_50892 = G__50915;
continue;
} else {
var node_50916 = cljs.core.first(seq__50705_50910__$1);
if(cljs.core.not(node_50916.shadow$old)){
var path_match_50917 = shadow.cljs.devtools.client.browser.match_paths(node_50916.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50917)){
var new_link_50918 = (function (){var G__50731 = node_50916.cloneNode(true);
G__50731.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50917),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50731;
})();
(node_50916.shadow$old = true);

(new_link_50918.onload = ((function (seq__50705_50889,chunk__50711_50890,count__50712_50891,i__50713_50892,seq__50631,chunk__50633,count__50634,i__50635,new_link_50918,path_match_50917,node_50916,seq__50705_50910__$1,temp__5753__auto___50909,path,map__50630,map__50630__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_50916);
});})(seq__50705_50889,chunk__50711_50890,count__50712_50891,i__50713_50892,seq__50631,chunk__50633,count__50634,i__50635,new_link_50918,path_match_50917,node_50916,seq__50705_50910__$1,temp__5753__auto___50909,path,map__50630,map__50630__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50917], 0));

goog.dom.insertSiblingAfter(new_link_50918,node_50916);


var G__50921 = cljs.core.next(seq__50705_50910__$1);
var G__50922 = null;
var G__50923 = (0);
var G__50924 = (0);
seq__50705_50889 = G__50921;
chunk__50711_50890 = G__50922;
count__50712_50891 = G__50923;
i__50713_50892 = G__50924;
continue;
} else {
var G__50925 = cljs.core.next(seq__50705_50910__$1);
var G__50926 = null;
var G__50927 = (0);
var G__50928 = (0);
seq__50705_50889 = G__50925;
chunk__50711_50890 = G__50926;
count__50712_50891 = G__50927;
i__50713_50892 = G__50928;
continue;
}
} else {
var G__50929 = cljs.core.next(seq__50705_50910__$1);
var G__50930 = null;
var G__50931 = (0);
var G__50932 = (0);
seq__50705_50889 = G__50929;
chunk__50711_50890 = G__50930;
count__50712_50891 = G__50931;
i__50713_50892 = G__50932;
continue;
}
}
} else {
}
}
break;
}


var G__50933 = seq__50631;
var G__50934 = chunk__50633;
var G__50935 = count__50634;
var G__50936 = (i__50635 + (1));
seq__50631 = G__50933;
chunk__50633 = G__50934;
count__50634 = G__50935;
i__50635 = G__50936;
continue;
} else {
var G__50937 = seq__50631;
var G__50938 = chunk__50633;
var G__50939 = count__50634;
var G__50940 = (i__50635 + (1));
seq__50631 = G__50937;
chunk__50633 = G__50938;
count__50634 = G__50939;
i__50635 = G__50940;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50631);
if(temp__5753__auto__){
var seq__50631__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50631__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50631__$1);
var G__50941 = cljs.core.chunk_rest(seq__50631__$1);
var G__50942 = c__4649__auto__;
var G__50943 = cljs.core.count(c__4649__auto__);
var G__50944 = (0);
seq__50631 = G__50941;
chunk__50633 = G__50942;
count__50634 = G__50943;
i__50635 = G__50944;
continue;
} else {
var path = cljs.core.first(seq__50631__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50732_50945 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50736_50946 = null;
var count__50737_50947 = (0);
var i__50738_50948 = (0);
while(true){
if((i__50738_50948 < count__50737_50947)){
var node_50950 = chunk__50736_50946.cljs$core$IIndexed$_nth$arity$2(null,i__50738_50948);
if(cljs.core.not(node_50950.shadow$old)){
var path_match_50952 = shadow.cljs.devtools.client.browser.match_paths(node_50950.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50952)){
var new_link_50953 = (function (){var G__50745 = node_50950.cloneNode(true);
G__50745.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50952),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50745;
})();
(node_50950.shadow$old = true);

(new_link_50953.onload = ((function (seq__50732_50945,chunk__50736_50946,count__50737_50947,i__50738_50948,seq__50631,chunk__50633,count__50634,i__50635,new_link_50953,path_match_50952,node_50950,path,seq__50631__$1,temp__5753__auto__,map__50630,map__50630__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_50950);
});})(seq__50732_50945,chunk__50736_50946,count__50737_50947,i__50738_50948,seq__50631,chunk__50633,count__50634,i__50635,new_link_50953,path_match_50952,node_50950,path,seq__50631__$1,temp__5753__auto__,map__50630,map__50630__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50952], 0));

goog.dom.insertSiblingAfter(new_link_50953,node_50950);


var G__50956 = seq__50732_50945;
var G__50957 = chunk__50736_50946;
var G__50958 = count__50737_50947;
var G__50959 = (i__50738_50948 + (1));
seq__50732_50945 = G__50956;
chunk__50736_50946 = G__50957;
count__50737_50947 = G__50958;
i__50738_50948 = G__50959;
continue;
} else {
var G__50960 = seq__50732_50945;
var G__50961 = chunk__50736_50946;
var G__50962 = count__50737_50947;
var G__50963 = (i__50738_50948 + (1));
seq__50732_50945 = G__50960;
chunk__50736_50946 = G__50961;
count__50737_50947 = G__50962;
i__50738_50948 = G__50963;
continue;
}
} else {
var G__50964 = seq__50732_50945;
var G__50965 = chunk__50736_50946;
var G__50966 = count__50737_50947;
var G__50967 = (i__50738_50948 + (1));
seq__50732_50945 = G__50964;
chunk__50736_50946 = G__50965;
count__50737_50947 = G__50966;
i__50738_50948 = G__50967;
continue;
}
} else {
var temp__5753__auto___50968__$1 = cljs.core.seq(seq__50732_50945);
if(temp__5753__auto___50968__$1){
var seq__50732_50969__$1 = temp__5753__auto___50968__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50732_50969__$1)){
var c__4649__auto___50970 = cljs.core.chunk_first(seq__50732_50969__$1);
var G__50971 = cljs.core.chunk_rest(seq__50732_50969__$1);
var G__50972 = c__4649__auto___50970;
var G__50973 = cljs.core.count(c__4649__auto___50970);
var G__50974 = (0);
seq__50732_50945 = G__50971;
chunk__50736_50946 = G__50972;
count__50737_50947 = G__50973;
i__50738_50948 = G__50974;
continue;
} else {
var node_50975 = cljs.core.first(seq__50732_50969__$1);
if(cljs.core.not(node_50975.shadow$old)){
var path_match_50976 = shadow.cljs.devtools.client.browser.match_paths(node_50975.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50976)){
var new_link_50977 = (function (){var G__50747 = node_50975.cloneNode(true);
G__50747.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50976),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50747;
})();
(node_50975.shadow$old = true);

(new_link_50977.onload = ((function (seq__50732_50945,chunk__50736_50946,count__50737_50947,i__50738_50948,seq__50631,chunk__50633,count__50634,i__50635,new_link_50977,path_match_50976,node_50975,seq__50732_50969__$1,temp__5753__auto___50968__$1,path,seq__50631__$1,temp__5753__auto__,map__50630,map__50630__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_50975);
});})(seq__50732_50945,chunk__50736_50946,count__50737_50947,i__50738_50948,seq__50631,chunk__50633,count__50634,i__50635,new_link_50977,path_match_50976,node_50975,seq__50732_50969__$1,temp__5753__auto___50968__$1,path,seq__50631__$1,temp__5753__auto__,map__50630,map__50630__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50976], 0));

goog.dom.insertSiblingAfter(new_link_50977,node_50975);


var G__50978 = cljs.core.next(seq__50732_50969__$1);
var G__50979 = null;
var G__50980 = (0);
var G__50981 = (0);
seq__50732_50945 = G__50978;
chunk__50736_50946 = G__50979;
count__50737_50947 = G__50980;
i__50738_50948 = G__50981;
continue;
} else {
var G__50982 = cljs.core.next(seq__50732_50969__$1);
var G__50983 = null;
var G__50984 = (0);
var G__50985 = (0);
seq__50732_50945 = G__50982;
chunk__50736_50946 = G__50983;
count__50737_50947 = G__50984;
i__50738_50948 = G__50985;
continue;
}
} else {
var G__50986 = cljs.core.next(seq__50732_50969__$1);
var G__50987 = null;
var G__50988 = (0);
var G__50989 = (0);
seq__50732_50945 = G__50986;
chunk__50736_50946 = G__50987;
count__50737_50947 = G__50988;
i__50738_50948 = G__50989;
continue;
}
}
} else {
}
}
break;
}


var G__50990 = cljs.core.next(seq__50631__$1);
var G__50991 = null;
var G__50992 = (0);
var G__50993 = (0);
seq__50631 = G__50990;
chunk__50633 = G__50991;
count__50634 = G__50992;
i__50635 = G__50993;
continue;
} else {
var G__50994 = cljs.core.next(seq__50631__$1);
var G__50995 = null;
var G__50996 = (0);
var G__50997 = (0);
seq__50631 = G__50994;
chunk__50633 = G__50995;
count__50634 = G__50996;
i__50635 = G__50997;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__50748){
var map__50749 = p__50748;
var map__50749__$1 = cljs.core.__destructure_map(map__50749);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50749__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__50750){
var map__50751 = p__50750;
var map__50751__$1 = cljs.core.__destructure_map(map__50751);
var _ = map__50751__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50751__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__50752,done,error){
var map__50753 = p__50752;
var map__50753__$1 = cljs.core.__destructure_map(map__50753);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50753__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__50754,done,error){
var map__50755 = p__50754;
var map__50755__$1 = cljs.core.__destructure_map(map__50755);
var msg = map__50755__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50755__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50755__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50755__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__50756){
var map__50757 = p__50756;
var map__50757__$1 = cljs.core.__destructure_map(map__50757);
var src = map__50757__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50757__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4221__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4221__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__50758 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__50758) : done.call(null,G__50758));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__50759){
var map__50760 = p__50759;
var map__50760__$1 = cljs.core.__destructure_map(map__50760);
var msg__$1 = map__50760__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50760__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e50761){var ex = e50761;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__50762){
var map__50763 = p__50762;
var map__50763__$1 = cljs.core.__destructure_map(map__50763);
var env = map__50763__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50763__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__50764){
var map__50765 = p__50764;
var map__50765__$1 = cljs.core.__destructure_map(map__50765);
var msg = map__50765__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50765__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__50769){
var map__50771 = p__50769;
var map__50771__$1 = cljs.core.__destructure_map(map__50771);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50771__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50771__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__50772){
var map__50781 = p__50772;
var map__50781__$1 = cljs.core.__destructure_map(map__50781);
var svc = map__50781__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50781__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
