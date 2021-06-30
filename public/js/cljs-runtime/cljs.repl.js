goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__49844){
var map__49845 = p__49844;
var map__49845__$1 = cljs.core.__destructure_map(map__49845);
var m = map__49845__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49845__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49845__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4223__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__49846_50059 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49847_50060 = null;
var count__49848_50061 = (0);
var i__49849_50062 = (0);
while(true){
if((i__49849_50062 < count__49848_50061)){
var f_50063 = chunk__49847_50060.cljs$core$IIndexed$_nth$arity$2(null,i__49849_50062);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50063], 0));


var G__50064 = seq__49846_50059;
var G__50065 = chunk__49847_50060;
var G__50066 = count__49848_50061;
var G__50067 = (i__49849_50062 + (1));
seq__49846_50059 = G__50064;
chunk__49847_50060 = G__50065;
count__49848_50061 = G__50066;
i__49849_50062 = G__50067;
continue;
} else {
var temp__5753__auto___50068 = cljs.core.seq(seq__49846_50059);
if(temp__5753__auto___50068){
var seq__49846_50069__$1 = temp__5753__auto___50068;
if(cljs.core.chunked_seq_QMARK_(seq__49846_50069__$1)){
var c__4649__auto___50071 = cljs.core.chunk_first(seq__49846_50069__$1);
var G__50072 = cljs.core.chunk_rest(seq__49846_50069__$1);
var G__50073 = c__4649__auto___50071;
var G__50074 = cljs.core.count(c__4649__auto___50071);
var G__50075 = (0);
seq__49846_50059 = G__50072;
chunk__49847_50060 = G__50073;
count__49848_50061 = G__50074;
i__49849_50062 = G__50075;
continue;
} else {
var f_50076 = cljs.core.first(seq__49846_50069__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50076], 0));


var G__50077 = cljs.core.next(seq__49846_50069__$1);
var G__50078 = null;
var G__50079 = (0);
var G__50080 = (0);
seq__49846_50059 = G__50077;
chunk__49847_50060 = G__50078;
count__49848_50061 = G__50079;
i__49849_50062 = G__50080;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_50081 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_50081], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_50081)))?cljs.core.second(arglists_50081):arglists_50081)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__49853_50087 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49854_50088 = null;
var count__49855_50089 = (0);
var i__49856_50090 = (0);
while(true){
if((i__49856_50090 < count__49855_50089)){
var vec__49869_50091 = chunk__49854_50088.cljs$core$IIndexed$_nth$arity$2(null,i__49856_50090);
var name_50092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49869_50091,(0),null);
var map__49872_50093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49869_50091,(1),null);
var map__49872_50094__$1 = cljs.core.__destructure_map(map__49872_50093);
var doc_50095 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49872_50094__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50096 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49872_50094__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50092], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50096], 0));

if(cljs.core.truth_(doc_50095)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50095], 0));
} else {
}


var G__50099 = seq__49853_50087;
var G__50100 = chunk__49854_50088;
var G__50101 = count__49855_50089;
var G__50102 = (i__49856_50090 + (1));
seq__49853_50087 = G__50099;
chunk__49854_50088 = G__50100;
count__49855_50089 = G__50101;
i__49856_50090 = G__50102;
continue;
} else {
var temp__5753__auto___50103 = cljs.core.seq(seq__49853_50087);
if(temp__5753__auto___50103){
var seq__49853_50104__$1 = temp__5753__auto___50103;
if(cljs.core.chunked_seq_QMARK_(seq__49853_50104__$1)){
var c__4649__auto___50105 = cljs.core.chunk_first(seq__49853_50104__$1);
var G__50106 = cljs.core.chunk_rest(seq__49853_50104__$1);
var G__50107 = c__4649__auto___50105;
var G__50108 = cljs.core.count(c__4649__auto___50105);
var G__50109 = (0);
seq__49853_50087 = G__50106;
chunk__49854_50088 = G__50107;
count__49855_50089 = G__50108;
i__49856_50090 = G__50109;
continue;
} else {
var vec__49873_50110 = cljs.core.first(seq__49853_50104__$1);
var name_50111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49873_50110,(0),null);
var map__49876_50112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49873_50110,(1),null);
var map__49876_50113__$1 = cljs.core.__destructure_map(map__49876_50112);
var doc_50114 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49876_50113__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50115 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49876_50113__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50111], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50115], 0));

if(cljs.core.truth_(doc_50114)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50114], 0));
} else {
}


var G__50119 = cljs.core.next(seq__49853_50104__$1);
var G__50120 = null;
var G__50121 = (0);
var G__50122 = (0);
seq__49853_50087 = G__50119;
chunk__49854_50088 = G__50120;
count__49855_50089 = G__50121;
i__49856_50090 = G__50122;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__49880 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__49881 = null;
var count__49882 = (0);
var i__49883 = (0);
while(true){
if((i__49883 < count__49882)){
var role = chunk__49881.cljs$core$IIndexed$_nth$arity$2(null,i__49883);
var temp__5753__auto___50123__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___50123__$1)){
var spec_50124 = temp__5753__auto___50123__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50124)], 0));
} else {
}


var G__50125 = seq__49880;
var G__50126 = chunk__49881;
var G__50127 = count__49882;
var G__50128 = (i__49883 + (1));
seq__49880 = G__50125;
chunk__49881 = G__50126;
count__49882 = G__50127;
i__49883 = G__50128;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__49880);
if(temp__5753__auto____$1){
var seq__49880__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__49880__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__49880__$1);
var G__50129 = cljs.core.chunk_rest(seq__49880__$1);
var G__50130 = c__4649__auto__;
var G__50131 = cljs.core.count(c__4649__auto__);
var G__50132 = (0);
seq__49880 = G__50129;
chunk__49881 = G__50130;
count__49882 = G__50131;
i__49883 = G__50132;
continue;
} else {
var role = cljs.core.first(seq__49880__$1);
var temp__5753__auto___50133__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___50133__$2)){
var spec_50134 = temp__5753__auto___50133__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50134)], 0));
} else {
}


var G__50135 = cljs.core.next(seq__49880__$1);
var G__50136 = null;
var G__50137 = (0);
var G__50138 = (0);
seq__49880 = G__50135;
chunk__49881 = G__50136;
count__49882 = G__50137;
i__49883 = G__50138;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__50143 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__50144 = cljs.core.ex_cause(t);
via = G__50143;
t = G__50144;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__49983 = datafied_throwable;
var map__49983__$1 = cljs.core.__destructure_map(map__49983);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49983__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49983__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49983__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__49984 = cljs.core.last(via);
var map__49984__$1 = cljs.core.__destructure_map(map__49984);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49984__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49984__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49984__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__49985 = data;
var map__49985__$1 = cljs.core.__destructure_map(map__49985);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49985__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49985__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49985__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__49987 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__49987__$1 = cljs.core.__destructure_map(map__49987);
var top_data = map__49987__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49987__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__49989 = phase;
var G__49989__$1 = (((G__49989 instanceof cljs.core.Keyword))?G__49989.fqn:null);
switch (G__49989__$1) {
case "read-source":
var map__49990 = data;
var map__49990__$1 = cljs.core.__destructure_map(map__49990);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49990__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49990__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__49991 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__49991__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49991,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__49991);
var G__49991__$2 = (cljs.core.truth_((function (){var fexpr__49993 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49993.cljs$core$IFn$_invoke$arity$1 ? fexpr__49993.cljs$core$IFn$_invoke$arity$1(source) : fexpr__49993.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49991__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__49991__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49991__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__49991__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__49994 = top_data;
var G__49994__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49994,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__49994);
var G__49994__$2 = (cljs.core.truth_((function (){var fexpr__49996 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49996.cljs$core$IFn$_invoke$arity$1 ? fexpr__49996.cljs$core$IFn$_invoke$arity$1(source) : fexpr__49996.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49994__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__49994__$1);
var G__49994__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49994__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__49994__$2);
var G__49994__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49994__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__49994__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49994__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__49994__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__49998 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49998,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49998,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49998,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49998,(3),null);
var G__50001 = top_data;
var G__50001__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50001,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__50001);
var G__50001__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50001__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__50001__$1);
var G__50001__$3 = (cljs.core.truth_((function (){var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50001__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__50001__$2);
var G__50001__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50001__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50001__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50001__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50001__$4;
}

break;
case "execution":
var vec__50003 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50003,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50003,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50003,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50003,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__49982_SHARP_){
var or__4223__auto__ = (p1__49982_SHARP_ == null);
if(or__4223__auto__){
return or__4223__auto__;
} else {
var fexpr__50006 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50006.cljs$core$IFn$_invoke$arity$1 ? fexpr__50006.cljs$core$IFn$_invoke$arity$1(p1__49982_SHARP_) : fexpr__50006.call(null,p1__49982_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return line;
}
})();
var G__50007 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__50007__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50007,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__50007);
var G__50007__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50007__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50007__$1);
var G__50007__$3 = (cljs.core.truth_((function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50007__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__50007__$2);
var G__50007__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50007__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__50007__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50007__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50007__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49989__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__50018){
var map__50019 = p__50018;
var map__50019__$1 = cljs.core.__destructure_map(map__50019);
var triage_data = map__50019__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50019__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50019__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50019__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50019__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50019__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50019__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50019__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50019__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = source;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = line;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4223__auto__ = class$;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__50020 = phase;
var G__50020__$1 = (((G__50020 instanceof cljs.core.Keyword))?G__50020.fqn:null);
switch (G__50020__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__50021 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__50022 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50023 = loc;
var G__50024 = (cljs.core.truth_(spec)?(function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50025_50152 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50026_50153 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50027_50154 = true;
var _STAR_print_fn_STAR__temp_val__50028_50155 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50027_50154);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50028_50155);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50016_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50016_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50026_50153);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50025_50152);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50021,G__50022,G__50023,G__50024) : format.call(null,G__50021,G__50022,G__50023,G__50024));

break;
case "macroexpansion":
var G__50030 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__50031 = cause_type;
var G__50032 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50033 = loc;
var G__50034 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50030,G__50031,G__50032,G__50033,G__50034) : format.call(null,G__50030,G__50031,G__50032,G__50033,G__50034));

break;
case "compile-syntax-check":
var G__50035 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__50036 = cause_type;
var G__50037 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50038 = loc;
var G__50039 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50035,G__50036,G__50037,G__50038,G__50039) : format.call(null,G__50035,G__50036,G__50037,G__50038,G__50039));

break;
case "compilation":
var G__50040 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__50041 = cause_type;
var G__50042 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50043 = loc;
var G__50044 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50040,G__50041,G__50042,G__50043,G__50044) : format.call(null,G__50040,G__50041,G__50042,G__50043,G__50044));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__50045 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__50046 = symbol;
var G__50047 = loc;
var G__50048 = (function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50049_50164 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50050_50165 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50051_50166 = true;
var _STAR_print_fn_STAR__temp_val__50052_50167 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50051_50166);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50052_50167);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50017_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50017_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50050_50165);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50049_50164);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50045,G__50046,G__50047,G__50048) : format.call(null,G__50045,G__50046,G__50047,G__50048));
} else {
var G__50054 = "Execution error%s at %s(%s).\n%s\n";
var G__50055 = cause_type;
var G__50056 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50057 = loc;
var G__50058 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50054,G__50055,G__50056,G__50057,G__50058) : format.call(null,G__50054,G__50055,G__50056,G__50057,G__50058));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50020__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
