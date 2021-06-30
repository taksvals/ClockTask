goog.provide('clojure.core.rrb_vector.transients');
clojure.core.rrb_vector.transients.ensure_editable = (function clojure$core$rrb_vector$transients$ensure_editable(edit,node){
if((node.edit === edit)){
return node;
} else {
var new_arr = cljs.core.aclone(node.arr);
if(((33) === new_arr.length)){
(new_arr[(32)] = cljs.core.aclone((new_arr[(32)])));
} else {
}

return (new cljs.core.VectorNode(edit,new_arr));
}
});
clojure.core.rrb_vector.transients.editable_root = (function clojure$core$rrb_vector$transients$editable_root(root){
var new_arr = cljs.core.aclone(root.arr);
if(((33) === new_arr.length)){
(new_arr[(32)] = cljs.core.aclone((new_arr[(32)])));
} else {
}

return (new cljs.core.VectorNode(({}),new_arr));
});
clojure.core.rrb_vector.transients.editable_tail = (function clojure$core$rrb_vector$transients$editable_tail(tail){
var ret = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
cljs.core.array_copy(tail,(0),ret,(0),tail.length);

return ret;
});
clojure.core.rrb_vector.transients.push_tail_BANG_ = (function clojure$core$rrb_vector$transients$push_tail_BANG_(shift,cnt,root_edit,current_node,tail_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var n_49464 = ret;
var shift_49465__$1 = shift;
while(true){
var arr_49466 = n_49464.arr;
var subidx_49467 = (((cnt - (1)) >> shift_49465__$1) & (31));
if((shift_49465__$1 === (5))){
(arr_49466[subidx_49467] = tail_node);
} else {
var child_49468 = (arr_49466[subidx_49467]);
if((child_49468 == null)){
(arr_49466[subidx_49467] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift_49465__$1 - (5)),tail_node));
} else {
var editable_child_49469 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,child_49468);
(arr_49466[subidx_49467] = editable_child_49469);

var G__49470 = editable_child_49469;
var G__49471 = (shift_49465__$1 - (5));
n_49464 = G__49470;
shift_49465__$1 = G__49471;
continue;
}
}
break;
}

return ret;
} else {
var arr = ret.arr;
var rngs = clojure.core.rrb_vector.nodes.node_ranges(ret);
var li = ((rngs[(32)]) - (1));
var cret = (((shift === (5)))?null:(function (){var child = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr[li]));
var ccnt = ((((li > (0)))?((rngs[li]) - (rngs[(li - (1))])):(rngs[(0)])) + (32));
if((!(clojure.core.rrb_vector.nodes.overflow_QMARK_(child,(shift - (5)),ccnt)))){
var G__49435 = (shift - (5));
var G__49436 = ccnt;
var G__49437 = root_edit;
var G__49438 = child;
var G__49439 = tail_node;
return (clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5(G__49435,G__49436,G__49437,G__49438,G__49439) : clojure.core.rrb_vector.transients.push_tail_BANG_.call(null,G__49435,G__49436,G__49437,G__49438,G__49439));
} else {
return null;
}
})());
if(cljs.core.truth_(cret)){
(arr[li] = cret);

(rngs[li] = ((rngs[li]) + (32)));

return ret;
} else {
if((li >= (31))){
var msg_49472 = ["Assigning index ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((li + (1)))," of vector"," object array to become a node, when that"," index should only be used for storing"," range arrays."].join('');
var data_49473 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"shift","shift",997140064),shift,new cljs.core.Keyword(null,"cnd","cnd",-521882032),cnt,new cljs.core.Keyword(null,"current-node","current-node",-814308842),current_node,new cljs.core.Keyword(null,"tail-node","tail-node",-1373693221),tail_node,new cljs.core.Keyword(null,"rngs","rngs",-8039697),rngs,new cljs.core.Keyword(null,"li","li",723558921),li,new cljs.core.Keyword(null,"cret","cret",2090504467),cret], null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg_49472,data_49473);
} else {
}

(arr[(li + (1))] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift - (5)),tail_node));

(rngs[(li + (1))] = ((rngs[li]) + (32)));

(rngs[(32)] = ((rngs[(32)]) + (1)));

return ret;
}
}
});
clojure.core.rrb_vector.transients.pop_tail_BANG_ = (function clojure$core$rrb_vector$transients$pop_tail_BANG_(shift,cnt,root_edit,current_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var subidx = (((cnt - (2)) >> shift) & (31));
if((shift > (5))){
var child = (function (){var G__49442 = (shift - (5));
var G__49443 = cnt;
var G__49444 = root_edit;
var G__49445 = (ret.arr[subidx]);
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__49442,G__49443,G__49444,G__49445) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__49442,G__49443,G__49444,G__49445));
})();
if((((child == null)) && ((subidx === (0))))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = child);

return ret;
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = null);

return ret;

}
}
} else {
var rngs = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx = ((rngs[(32)]) - (1));
if((shift > (5))){
var child = (ret.arr[subidx]);
var child_cnt = (((subidx === (0)))?(rngs[(0)]):((rngs[subidx]) - (rngs[(subidx - (1))])));
var new_child = (function (){var G__49454 = (shift - (5));
var G__49455 = child_cnt;
var G__49456 = root_edit;
var G__49457 = child;
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__49454,G__49455,G__49456,G__49457) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__49454,G__49455,G__49456,G__49457));
})();
if((((new_child == null)) && ((subidx === (0))))){
return null;
} else {
if(clojure.core.rrb_vector.nodes.regular_QMARK_(child)){
var arr = ret.arr;
(rngs[subidx] = ((rngs[subidx]) - (32)));

(arr[subidx] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;
} else {
var rng = clojure.core.rrb_vector.nodes.last_range(child);
var diff = (rng - (cljs.core.truth_(new_child)?clojure.core.rrb_vector.nodes.last_range(new_child):(0)));
var arr = ret.arr;
(rngs[subidx] = ((rngs[subidx]) - diff));

(arr[subidx] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;

}
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = ret.arr;
var child = (arr[subidx]);
(arr[subidx] = null);

(rngs[subidx] = (0));

(rngs[(32)] = ((rngs[(32)]) - (1)));

return ret;

}
}
}
});
clojure.core.rrb_vector.transients.do_assoc_BANG_ = (function clojure$core$rrb_vector$transients$do_assoc_BANG_(shift,root_edit,current_node,i,val){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var shift_49481__$1 = shift;
var node_49482 = ret;
while(true){
if((shift_49481__$1 === (0))){
var arr_49483 = node_49482.arr;
(arr_49483[(i & (31))] = val);
} else {
var arr_49486 = node_49482.arr;
var subidx_49487 = ((i >> shift_49481__$1) & (31));
var child_49488 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr_49486[subidx_49487]));
(arr_49486[subidx_49487] = child_49488);

var G__49489 = (shift_49481__$1 - (5));
var G__49490 = child_49488;
shift_49481__$1 = G__49489;
node_49482 = G__49490;
continue;
}
break;
}
} else {
var arr_49491 = ret.arr;
var rngs_49492 = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx_49493 = ((i >> shift) & (31));
var subidx_49494__$1 = (function (){var subidx_49494__$1 = subidx_49493;
while(true){
if((i < ((rngs_49492[subidx_49494__$1]) | (0)))){
return subidx_49494__$1;
} else {
var G__49496 = (subidx_49494__$1 + (1));
subidx_49494__$1 = G__49496;
continue;
}
break;
}
})();
var i_49495__$1 = (((subidx_49494__$1 === (0)))?i:(i - (rngs_49492[(subidx_49494__$1 - (1))])));
(arr_49491[subidx_49494__$1] = (function (){var G__49459 = (shift - (5));
var G__49460 = root_edit;
var G__49461 = (arr_49491[subidx_49494__$1]);
var G__49462 = i_49495__$1;
var G__49463 = val;
return (clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5(G__49459,G__49460,G__49461,G__49462,G__49463) : clojure.core.rrb_vector.transients.do_assoc_BANG_.call(null,G__49459,G__49460,G__49461,G__49462,G__49463));
})());
}

return ret;
});

//# sourceMappingURL=clojure.core.rrb_vector.transients.js.map
