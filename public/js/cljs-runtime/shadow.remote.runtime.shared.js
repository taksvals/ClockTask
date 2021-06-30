goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__48705,res){
var map__48706 = p__48705;
var map__48706__$1 = cljs.core.__destructure_map(map__48706);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48706__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48706__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__48707 = res;
var G__48707__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48707,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__48707);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48707__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__48707__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__48726 = arguments.length;
switch (G__48726) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__48732,msg,handlers,timeout_after_ms){
var map__48733 = p__48732;
var map__48733__$1 = cljs.core.__destructure_map(map__48733);
var runtime = map__48733__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48733__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___48930 = arguments.length;
var i__4830__auto___48931 = (0);
while(true){
if((i__4830__auto___48931 < len__4829__auto___48930)){
args__4835__auto__.push((arguments[i__4830__auto___48931]));

var G__48932 = (i__4830__auto___48931 + (1));
i__4830__auto___48931 = G__48932;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__48763,ev,args){
var map__48764 = p__48763;
var map__48764__$1 = cljs.core.__destructure_map(map__48764);
var runtime = map__48764__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48764__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__48765 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__48768 = null;
var count__48769 = (0);
var i__48770 = (0);
while(true){
if((i__48770 < count__48769)){
var ext = chunk__48768.cljs$core$IIndexed$_nth$arity$2(null,i__48770);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__48937 = seq__48765;
var G__48938 = chunk__48768;
var G__48939 = count__48769;
var G__48940 = (i__48770 + (1));
seq__48765 = G__48937;
chunk__48768 = G__48938;
count__48769 = G__48939;
i__48770 = G__48940;
continue;
} else {
var G__48941 = seq__48765;
var G__48942 = chunk__48768;
var G__48943 = count__48769;
var G__48944 = (i__48770 + (1));
seq__48765 = G__48941;
chunk__48768 = G__48942;
count__48769 = G__48943;
i__48770 = G__48944;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48765);
if(temp__5753__auto__){
var seq__48765__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48765__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__48765__$1);
var G__48945 = cljs.core.chunk_rest(seq__48765__$1);
var G__48946 = c__4649__auto__;
var G__48947 = cljs.core.count(c__4649__auto__);
var G__48948 = (0);
seq__48765 = G__48945;
chunk__48768 = G__48946;
count__48769 = G__48947;
i__48770 = G__48948;
continue;
} else {
var ext = cljs.core.first(seq__48765__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__48949 = cljs.core.next(seq__48765__$1);
var G__48950 = null;
var G__48951 = (0);
var G__48952 = (0);
seq__48765 = G__48949;
chunk__48768 = G__48950;
count__48769 = G__48951;
i__48770 = G__48952;
continue;
} else {
var G__48953 = cljs.core.next(seq__48765__$1);
var G__48954 = null;
var G__48955 = (0);
var G__48956 = (0);
seq__48765 = G__48953;
chunk__48768 = G__48954;
count__48769 = G__48955;
i__48770 = G__48956;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq48738){
var G__48739 = cljs.core.first(seq48738);
var seq48738__$1 = cljs.core.next(seq48738);
var G__48740 = cljs.core.first(seq48738__$1);
var seq48738__$2 = cljs.core.next(seq48738__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48739,G__48740,seq48738__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__48776,p__48777){
var map__48778 = p__48776;
var map__48778__$1 = cljs.core.__destructure_map(map__48778);
var runtime = map__48778__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48778__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__48779 = p__48777;
var map__48779__$1 = cljs.core.__destructure_map(map__48779);
var msg = map__48779__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48779__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__48780 = cljs.core.deref(state_ref);
var map__48780__$1 = cljs.core.__destructure_map(map__48780);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48780__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48780__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__48790){
var map__48791 = p__48790;
var map__48791__$1 = cljs.core.__destructure_map(map__48791);
var runtime = map__48791__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48791__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4223__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__48805,msg){
var map__48808 = p__48805;
var map__48808__$1 = cljs.core.__destructure_map(map__48808);
var runtime = map__48808__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48808__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__48818,key,p__48819){
var map__48825 = p__48818;
var map__48825__$1 = cljs.core.__destructure_map(map__48825);
var state = map__48825__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48825__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__48826 = p__48819;
var map__48826__$1 = cljs.core.__destructure_map(map__48826);
var spec = map__48826__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48826__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__48831,key,spec){
var map__48832 = p__48831;
var map__48832__$1 = cljs.core.__destructure_map(map__48832);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48832__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__48833_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__48833_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__48834_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__48834_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__48835_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__48835_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__48836_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__48836_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__48837_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__48837_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__48862,key){
var map__48863 = p__48862;
var map__48863__$1 = cljs.core.__destructure_map(map__48863);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48863__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__48867,msg){
var map__48868 = p__48867;
var map__48868__$1 = cljs.core.__destructure_map(map__48868);
var runtime = map__48868__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48868__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__48869,p__48870){
var map__48871 = p__48869;
var map__48871__$1 = cljs.core.__destructure_map(map__48871);
var runtime = map__48871__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48871__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__48872 = p__48870;
var map__48872__$1 = cljs.core.__destructure_map(map__48872);
var msg = map__48872__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48872__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48872__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__48879 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__48881 = null;
var count__48882 = (0);
var i__48883 = (0);
while(true){
if((i__48883 < count__48882)){
var map__48889 = chunk__48881.cljs$core$IIndexed$_nth$arity$2(null,i__48883);
var map__48889__$1 = cljs.core.__destructure_map(map__48889);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48889__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__49012 = seq__48879;
var G__49013 = chunk__48881;
var G__49014 = count__48882;
var G__49015 = (i__48883 + (1));
seq__48879 = G__49012;
chunk__48881 = G__49013;
count__48882 = G__49014;
i__48883 = G__49015;
continue;
} else {
var G__49016 = seq__48879;
var G__49017 = chunk__48881;
var G__49018 = count__48882;
var G__49019 = (i__48883 + (1));
seq__48879 = G__49016;
chunk__48881 = G__49017;
count__48882 = G__49018;
i__48883 = G__49019;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48879);
if(temp__5753__auto__){
var seq__48879__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48879__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__48879__$1);
var G__49020 = cljs.core.chunk_rest(seq__48879__$1);
var G__49021 = c__4649__auto__;
var G__49022 = cljs.core.count(c__4649__auto__);
var G__49023 = (0);
seq__48879 = G__49020;
chunk__48881 = G__49021;
count__48882 = G__49022;
i__48883 = G__49023;
continue;
} else {
var map__48899 = cljs.core.first(seq__48879__$1);
var map__48899__$1 = cljs.core.__destructure_map(map__48899);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48899__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__49024 = cljs.core.next(seq__48879__$1);
var G__49025 = null;
var G__49026 = (0);
var G__49027 = (0);
seq__48879 = G__49024;
chunk__48881 = G__49025;
count__48882 = G__49026;
i__48883 = G__49027;
continue;
} else {
var G__49028 = cljs.core.next(seq__48879__$1);
var G__49029 = null;
var G__49030 = (0);
var G__49031 = (0);
seq__48879 = G__49028;
chunk__48881 = G__49029;
count__48882 = G__49030;
i__48883 = G__49031;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
