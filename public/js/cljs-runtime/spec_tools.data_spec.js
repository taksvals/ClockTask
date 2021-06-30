goog.provide('spec_tools.data_spec');

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
spec_tools.data_spec.OptionalKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(spec_tools.data_spec.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k48911,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__48915 = k48911;
var G__48915__$1 = (((G__48915 instanceof cljs.core.Keyword))?G__48915.fqn:null);
switch (G__48915__$1) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48911,else__4475__auto__);

}
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__48917){
var vec__48918 = p__48917;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48918,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48918,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#spec-tools.data-spec.OptionalKey{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48910){
var self__ = this;
var G__48910__$1 = this;
return (new cljs.core.RecordIter((0),G__48910__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"k","k",-2146297393)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new spec_tools.data_spec.OptionalKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-261180351 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48912,other48913){
var self__ = this;
var this48912__$1 = this;
return (((!((other48913 == null)))) && ((((this48912__$1.constructor === other48913.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48912__$1.k,other48913.k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48912__$1.__extmap,other48913.__extmap)))))));
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new spec_tools.data_spec.OptionalKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k48911){
var self__ = this;
var this__4479__auto____$1 = this;
var G__48968 = k48911;
var G__48968__$1 = (((G__48968 instanceof cljs.core.Keyword))?G__48968.fqn:null);
switch (G__48968__$1) {
case "k":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k48911);

}
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__48910){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__48969 = cljs.core.keyword_identical_QMARK_;
var expr__48970 = k__4481__auto__;
if(cljs.core.truth_((pred__48969.cljs$core$IFn$_invoke$arity$2 ? pred__48969.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"k","k",-2146297393),expr__48970) : pred__48969.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__48970)))){
return (new spec_tools.data_spec.OptionalKey(G__48910,self__.__meta,self__.__extmap,null));
} else {
return (new spec_tools.data_spec.OptionalKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__48910),null));
}
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"k","k",-2146297393),self__.k,null))], null),self__.__extmap));
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__48910){
var self__ = this;
var this__4471__auto____$1 = this;
return (new spec_tools.data_spec.OptionalKey(self__.k,G__48910,self__.__extmap,self__.__hash));
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(spec_tools.data_spec.OptionalKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null)], null);
}));

(spec_tools.data_spec.OptionalKey.cljs$lang$type = true);

(spec_tools.data_spec.OptionalKey.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"spec-tools.data-spec/OptionalKey",null,(1),null));
}));

(spec_tools.data_spec.OptionalKey.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"spec-tools.data-spec/OptionalKey");
}));

/**
 * Positional factory function for spec-tools.data-spec/OptionalKey.
 */
spec_tools.data_spec.__GT_OptionalKey = (function spec_tools$data_spec$__GT_OptionalKey(k){
return (new spec_tools.data_spec.OptionalKey(k,null,null,null));
});

/**
 * Factory function for spec-tools.data-spec/OptionalKey, taking a map of keywords to field values.
 */
spec_tools.data_spec.map__GT_OptionalKey = (function spec_tools$data_spec$map__GT_OptionalKey(G__48914){
var extmap__4512__auto__ = (function (){var G__48974 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__48914,new cljs.core.Keyword(null,"k","k",-2146297393));
if(cljs.core.record_QMARK_(G__48914)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48974);
} else {
return G__48974;
}
})();
return (new spec_tools.data_spec.OptionalKey(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__48914),null,cljs.core.not_empty(extmap__4512__auto__),null));
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
spec_tools.data_spec.RequiredKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(spec_tools.data_spec.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k48977,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__49009 = k48977;
var G__49009__$1 = (((G__49009 instanceof cljs.core.Keyword))?G__49009.fqn:null);
switch (G__49009__$1) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48977,else__4475__auto__);

}
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__49010){
var vec__49011 = p__49010;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49011,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49011,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#spec-tools.data-spec.RequiredKey{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48976){
var self__ = this;
var G__48976__$1 = this;
return (new cljs.core.RecordIter((0),G__48976__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"k","k",-2146297393)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new spec_tools.data_spec.RequiredKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-470971127 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48978,other48979){
var self__ = this;
var this48978__$1 = this;
return (((!((other48979 == null)))) && ((((this48978__$1.constructor === other48979.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48978__$1.k,other48979.k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48978__$1.__extmap,other48979.__extmap)))))));
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new spec_tools.data_spec.RequiredKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k48977){
var self__ = this;
var this__4479__auto____$1 = this;
var G__49064 = k48977;
var G__49064__$1 = (((G__49064 instanceof cljs.core.Keyword))?G__49064.fqn:null);
switch (G__49064__$1) {
case "k":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k48977);

}
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__48976){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__49065 = cljs.core.keyword_identical_QMARK_;
var expr__49066 = k__4481__auto__;
if(cljs.core.truth_((pred__49065.cljs$core$IFn$_invoke$arity$2 ? pred__49065.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"k","k",-2146297393),expr__49066) : pred__49065.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__49066)))){
return (new spec_tools.data_spec.RequiredKey(G__48976,self__.__meta,self__.__extmap,null));
} else {
return (new spec_tools.data_spec.RequiredKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__48976),null));
}
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"k","k",-2146297393),self__.k,null))], null),self__.__extmap));
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__48976){
var self__ = this;
var this__4471__auto____$1 = this;
return (new spec_tools.data_spec.RequiredKey(self__.k,G__48976,self__.__extmap,self__.__hash));
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(spec_tools.data_spec.RequiredKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null)], null);
}));

(spec_tools.data_spec.RequiredKey.cljs$lang$type = true);

(spec_tools.data_spec.RequiredKey.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"spec-tools.data-spec/RequiredKey",null,(1),null));
}));

(spec_tools.data_spec.RequiredKey.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"spec-tools.data-spec/RequiredKey");
}));

/**
 * Positional factory function for spec-tools.data-spec/RequiredKey.
 */
spec_tools.data_spec.__GT_RequiredKey = (function spec_tools$data_spec$__GT_RequiredKey(k){
return (new spec_tools.data_spec.RequiredKey(k,null,null,null));
});

/**
 * Factory function for spec-tools.data-spec/RequiredKey, taking a map of keywords to field values.
 */
spec_tools.data_spec.map__GT_RequiredKey = (function spec_tools$data_spec$map__GT_RequiredKey(G__48980){
var extmap__4512__auto__ = (function (){var G__49082 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__48980,new cljs.core.Keyword(null,"k","k",-2146297393));
if(cljs.core.record_QMARK_(G__48980)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49082);
} else {
return G__49082;
}
})();
return (new spec_tools.data_spec.RequiredKey(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__48980),null,cljs.core.not_empty(extmap__4512__auto__),null));
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
spec_tools.data_spec.Maybe = (function (v,__meta,__extmap,__hash){
this.v = v;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(spec_tools.data_spec.Maybe.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k49091,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__49114 = k49091;
var G__49114__$1 = (((G__49114 instanceof cljs.core.Keyword))?G__49114.fqn:null);
switch (G__49114__$1) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49091,else__4475__auto__);

}
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__49116){
var vec__49117 = p__49116;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49117,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49117,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#spec-tools.data-spec.Maybe{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null))], null),self__.__extmap));
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49090){
var self__ = this;
var G__49090__$1 = this;
return (new cljs.core.RecordIter((0),G__49090__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new spec_tools.data_spec.Maybe(self__.v,self__.__meta,self__.__extmap,self__.__hash));
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1150224619 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49092,other49093){
var self__ = this;
var this49092__$1 = this;
return (((!((other49093 == null)))) && ((((this49092__$1.constructor === other49093.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49092__$1.v,other49093.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49092__$1.__extmap,other49093.__extmap)))))));
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new spec_tools.data_spec.Maybe(self__.v,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k49091){
var self__ = this;
var this__4479__auto____$1 = this;
var G__49122 = k49091;
var G__49122__$1 = (((G__49122 instanceof cljs.core.Keyword))?G__49122.fqn:null);
switch (G__49122__$1) {
case "v":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k49091);

}
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__49090){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__49123 = cljs.core.keyword_identical_QMARK_;
var expr__49124 = k__4481__auto__;
if(cljs.core.truth_((pred__49123.cljs$core$IFn$_invoke$arity$2 ? pred__49123.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"v","v",21465059),expr__49124) : pred__49123.call(null,new cljs.core.Keyword(null,"v","v",21465059),expr__49124)))){
return (new spec_tools.data_spec.Maybe(G__49090,self__.__meta,self__.__extmap,null));
} else {
return (new spec_tools.data_spec.Maybe(self__.v,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__49090),null));
}
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"v","v",21465059),self__.v,null))], null),self__.__extmap));
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__49090){
var self__ = this;
var this__4471__auto____$1 = this;
return (new spec_tools.data_spec.Maybe(self__.v,G__49090,self__.__extmap,self__.__hash));
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(spec_tools.data_spec.Maybe.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null);
}));

(spec_tools.data_spec.Maybe.cljs$lang$type = true);

(spec_tools.data_spec.Maybe.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"spec-tools.data-spec/Maybe",null,(1),null));
}));

(spec_tools.data_spec.Maybe.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"spec-tools.data-spec/Maybe");
}));

/**
 * Positional factory function for spec-tools.data-spec/Maybe.
 */
spec_tools.data_spec.__GT_Maybe = (function spec_tools$data_spec$__GT_Maybe(v){
return (new spec_tools.data_spec.Maybe(v,null,null,null));
});

/**
 * Factory function for spec-tools.data-spec/Maybe, taking a map of keywords to field values.
 */
spec_tools.data_spec.map__GT_Maybe = (function spec_tools$data_spec$map__GT_Maybe(G__49094){
var extmap__4512__auto__ = (function (){var G__49126 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49094,new cljs.core.Keyword(null,"v","v",21465059));
if(cljs.core.record_QMARK_(G__49094)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49126);
} else {
return G__49126;
}
})();
return (new spec_tools.data_spec.Maybe(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__49094),null,cljs.core.not_empty(extmap__4512__auto__),null));
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
spec_tools.data_spec.Or = (function (v,__meta,__extmap,__hash){
this.v = v;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(spec_tools.data_spec.Or.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(spec_tools.data_spec.Or.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k49128,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__49132 = k49128;
var G__49132__$1 = (((G__49132 instanceof cljs.core.Keyword))?G__49132.fqn:null);
switch (G__49132__$1) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49128,else__4475__auto__);

}
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__49133){
var vec__49134 = p__49133;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49134,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49134,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#spec-tools.data-spec.Or{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null))], null),self__.__extmap));
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49127){
var self__ = this;
var G__49127__$1 = this;
return (new cljs.core.RecordIter((0),G__49127__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(spec_tools.data_spec.Or.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new spec_tools.data_spec.Or(self__.v,self__.__meta,self__.__extmap,self__.__hash));
}));

(spec_tools.data_spec.Or.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (1620079539 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49129,other49130){
var self__ = this;
var this49129__$1 = this;
return (((!((other49130 == null)))) && ((((this49129__$1.constructor === other49130.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49129__$1.v,other49130.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49129__$1.__extmap,other49130.__extmap)))))));
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new spec_tools.data_spec.Or(self__.v,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k49128){
var self__ = this;
var this__4479__auto____$1 = this;
var G__49137 = k49128;
var G__49137__$1 = (((G__49137 instanceof cljs.core.Keyword))?G__49137.fqn:null);
switch (G__49137__$1) {
case "v":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k49128);

}
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__49127){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__49138 = cljs.core.keyword_identical_QMARK_;
var expr__49139 = k__4481__auto__;
if(cljs.core.truth_((pred__49138.cljs$core$IFn$_invoke$arity$2 ? pred__49138.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"v","v",21465059),expr__49139) : pred__49138.call(null,new cljs.core.Keyword(null,"v","v",21465059),expr__49139)))){
return (new spec_tools.data_spec.Or(G__49127,self__.__meta,self__.__extmap,null));
} else {
return (new spec_tools.data_spec.Or(self__.v,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__49127),null));
}
}));

(spec_tools.data_spec.Or.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"v","v",21465059),self__.v,null))], null),self__.__extmap));
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__49127){
var self__ = this;
var this__4471__auto____$1 = this;
return (new spec_tools.data_spec.Or(self__.v,G__49127,self__.__extmap,self__.__hash));
}));

(spec_tools.data_spec.Or.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(spec_tools.data_spec.Or.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null);
}));

(spec_tools.data_spec.Or.cljs$lang$type = true);

(spec_tools.data_spec.Or.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"spec-tools.data-spec/Or",null,(1),null));
}));

(spec_tools.data_spec.Or.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"spec-tools.data-spec/Or");
}));

/**
 * Positional factory function for spec-tools.data-spec/Or.
 */
spec_tools.data_spec.__GT_Or = (function spec_tools$data_spec$__GT_Or(v){
return (new spec_tools.data_spec.Or(v,null,null,null));
});

/**
 * Factory function for spec-tools.data-spec/Or, taking a map of keywords to field values.
 */
spec_tools.data_spec.map__GT_Or = (function spec_tools$data_spec$map__GT_Or(G__49131){
var extmap__4512__auto__ = (function (){var G__49142 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49131,new cljs.core.Keyword(null,"v","v",21465059));
if(cljs.core.record_QMARK_(G__49131)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49142);
} else {
return G__49142;
}
})();
return (new spec_tools.data_spec.Or(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__49131),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

/**
 * Makes a key optional:
 * 
 *   ```clojure
 *   {:name string?
 * (ds/opt :age) int?}
 *   ```
 */
spec_tools.data_spec.opt = (function spec_tools$data_spec$opt(k){
return spec_tools.data_spec.__GT_OptionalKey(k);
});
/**
 * Test if the key is wrapped with [[opt]]
 */
spec_tools.data_spec.opt_QMARK_ = (function spec_tools$data_spec$opt_QMARK_(x){
return (x instanceof spec_tools.data_spec.OptionalKey);
});
/**
 * Makes a key required:
 * 
 *   ```clojure
 *   {:name string?
 * (ds/req :age) int?}
 *   ```
 */
spec_tools.data_spec.req = (function spec_tools$data_spec$req(k){
return spec_tools.data_spec.__GT_RequiredKey(k);
});
/**
 * Test if the key is wrapped with [[req]]
 */
spec_tools.data_spec.req_QMARK_ = (function spec_tools$data_spec$req_QMARK_(x){
return (!(spec_tools.data_spec.opt_QMARK_(x)));
});
/**
 * Makes a value nillable:
 * 
 *   ```clojure
 *   {:name string?
 * :age (ds/maybe int?)}
 *   ```
 */
spec_tools.data_spec.maybe = (function spec_tools$data_spec$maybe(v){
return spec_tools.data_spec.__GT_Maybe(v);
});
/**
 * Test if the value is wrapped with [[maybe]]
 */
spec_tools.data_spec.maybe_QMARK_ = (function spec_tools$data_spec$maybe_QMARK_(x){
return (x instanceof spec_tools.data_spec.Maybe);
});
spec_tools.data_spec.or = (function spec_tools$data_spec$or(v){
return spec_tools.data_spec.__GT_Or(v);
});
spec_tools.data_spec.or_QMARK_ = (function spec_tools$data_spec$or_QMARK_(x){
return (x instanceof spec_tools.data_spec.Or);
});
/**
 * Test if the key is wrapped with [[opt]] or [[req]]
 */
spec_tools.data_spec.wrapped_key_QMARK_ = (function spec_tools$data_spec$wrapped_key_QMARK_(x){
return ((spec_tools.data_spec.opt_QMARK_(x)) || ((x instanceof spec_tools.data_spec.RequiredKey)));
});
/**
 * Unwrap the [[opt]] or [[req]] key.
 */
spec_tools.data_spec.unwrap_key = (function spec_tools$data_spec$unwrap_key(x){
if(spec_tools.data_spec.wrapped_key_QMARK_(x)){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;
}
});
spec_tools.data_spec._nested_key = (function spec_tools$data_spec$_nested_key(n,k){
if(cljs.core.qualified_keyword_QMARK_(n)){
} else {
throw (new Error(["Assert failed: ","spec must have a qualified name","\n","(qualified-keyword? n)"].join('')));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.namespace(n),"$",cljs.core.name(n),(function (){var temp__5751__auto__ = cljs.core.namespace(k);
if(cljs.core.truth_(temp__5751__auto__)){
var kns = temp__5751__auto__;
return ["$",kns].join('');
} else {
return null;
}
})(),"/",cljs.core.name(k)].join(''));
});
spec_tools.data_spec._map_spec = (function spec_tools$data_spec$_map_spec(data,p__49146){
var map__49147 = p__49146;
var map__49147__$1 = cljs.core.__destructure_map(map__49147);
var opts = map__49147__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49147__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var keys_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49147__$1,new cljs.core.Keyword(null,"keys-spec","keys-spec",920288948),spec_tools.impl.keys_spec);
var keys_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49147__$1,new cljs.core.Keyword(null,"keys-default","keys-default",-1790373239));
var temp__5751__auto__ = (function (){var and__4221__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(data));
if(and__4221__auto__){
var vec__49148 = cljs.core.first(data);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49148,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49148,(1),null);
var and__4221__auto____$1 = (!((((k instanceof cljs.core.Keyword)) || (spec_tools.data_spec.wrapped_key_QMARK_(k)))));
if(and__4221__auto____$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var vec__49151 = temp__5751__auto__;
var k_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49151,(0),null);
var v_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49151,(1),null);
return spec_tools.core.create_spec(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),spec_tools.impl.map_of_spec((spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2 ? spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(n,k_SINGLEQUOTE_) : spec_tools.data_spec.spec.call(null,n,k_SINGLEQUOTE_)),(function (){var G__49154 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),n,new cljs.core.Keyword(null,"spec","spec",347520401),v_SINGLEQUOTE_], null);
return (spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$1 ? spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$1(G__49154) : spec_tools.data_spec.spec.call(null,G__49154));
})())], null));
} else {
var m = cljs.core.reduce_kv((function (acc,k,v){
var k__$1 = (cljs.core.truth_((function (){var and__4221__auto__ = keys_default;
if(cljs.core.truth_(and__4221__auto__)){
return (k instanceof cljs.core.Keyword);
} else {
return and__4221__auto__;
}
})())?(keys_default.cljs$core$IFn$_invoke$arity$1 ? keys_default.cljs$core$IFn$_invoke$arity$1(k) : keys_default.call(null,k)):k);
var kv = spec_tools.data_spec.unwrap_key(k__$1);
var rk = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([((spec_tools.data_spec.req_QMARK_(k__$1))?"req":"opt"),(((!(cljs.core.qualified_keyword_QMARK_(kv))))?"-un":null)].join(''));
var vec__49155 = ((spec_tools.data_spec.maybe_QMARK_(v))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(v),cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__49145_SHARP_){
return spec_tools.core.create_spec(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),p1__49145_SHARP_], null));
}),spec_tools.impl.nilable_spec)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.identity], null));
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49155,(0),null);
var wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49155,(1),null);
var vec__49158 = ((cljs.core.qualified_keyword_QMARK_(kv))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kv,((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(kv,v__$1))?kv:null)], null):(function (){var k_SINGLEQUOTE_ = spec_tools.data_spec._nested_key(n,spec_tools.data_spec.unwrap_key(kv));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_SINGLEQUOTE_,k_SINGLEQUOTE_], null);
})());
var k_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49158,(0),null);
var n_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49158,(1),null);
var v_SINGLEQUOTE_ = (cljs.core.truth_(n_SINGLEQUOTE_)?(function (){var G__49168 = (function (){var G__49169 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"name","name",1843675177),n_SINGLEQUOTE_),new cljs.core.Keyword(null,"spec","spec",347520401),v__$1);
return (spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$1 ? spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$1(G__49169) : spec_tools.data_spec.spec.call(null,G__49169));
})();
return (wrap.cljs$core$IFn$_invoke$arity$1 ? wrap.cljs$core$IFn$_invoke$arity$1(G__49168) : wrap.call(null,G__49168));
})():null);
var G__49170 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,rk,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),k_SINGLEQUOTE_);
if(cljs.core.truth_(v_SINGLEQUOTE_)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__49170,new cljs.core.Keyword("spec-tools.data-spec","defs","spec-tools.data-spec/defs",-916917298),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_SINGLEQUOTE_,v_SINGLEQUOTE_], null));
} else {
return G__49170;
}
}),cljs.core.PersistentArrayMap.EMPTY,data);
var defs = new cljs.core.Keyword("spec-tools.data-spec","defs","spec-tools.data-spec/defs",-916917298).cljs$core$IFn$_invoke$arity$1(m);
var data__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword("spec-tools.data-spec","defs","spec-tools.data-spec/defs",-916917298))));
var seq__49171_49299 = cljs.core.seq(defs);
var chunk__49172_49300 = null;
var count__49173_49301 = (0);
var i__49174_49302 = (0);
while(true){
if((i__49174_49302 < count__49173_49301)){
var vec__49185_49303 = chunk__49172_49300.cljs$core$IIndexed$_nth$arity$2(null,i__49174_49302);
var k_49304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49185_49303,(0),null);
var s_49306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49185_49303,(1),null);
var synthetic_QMARK__49307 = (function (){var and__4221__auto__ = spec_tools.core.spec_QMARK_(s_49306);
if(cljs.core.truth_(and__4221__auto__)){
return (!(spec_tools.parse.collection_type_QMARK_(s_49306)));
} else {
return and__4221__auto__;
}
})();
spec_tools.impl.register_spec_BANG_(k_49304,(function (){var G__49188 = s_49306;
if(cljs.core.truth_(synthetic_QMARK__49307)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49188,new cljs.core.Keyword("spec-tools.core","synthetic?","spec-tools.core/synthetic?",-2118167094),true);
} else {
return G__49188;
}
})());


var G__49308 = seq__49171_49299;
var G__49309 = chunk__49172_49300;
var G__49310 = count__49173_49301;
var G__49311 = (i__49174_49302 + (1));
seq__49171_49299 = G__49308;
chunk__49172_49300 = G__49309;
count__49173_49301 = G__49310;
i__49174_49302 = G__49311;
continue;
} else {
var temp__5753__auto___49312 = cljs.core.seq(seq__49171_49299);
if(temp__5753__auto___49312){
var seq__49171_49313__$1 = temp__5753__auto___49312;
if(cljs.core.chunked_seq_QMARK_(seq__49171_49313__$1)){
var c__4649__auto___49314 = cljs.core.chunk_first(seq__49171_49313__$1);
var G__49315 = cljs.core.chunk_rest(seq__49171_49313__$1);
var G__49316 = c__4649__auto___49314;
var G__49317 = cljs.core.count(c__4649__auto___49314);
var G__49318 = (0);
seq__49171_49299 = G__49315;
chunk__49172_49300 = G__49316;
count__49173_49301 = G__49317;
i__49174_49302 = G__49318;
continue;
} else {
var vec__49189_49319 = cljs.core.first(seq__49171_49313__$1);
var k_49320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49189_49319,(0),null);
var s_49321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49189_49319,(1),null);
var synthetic_QMARK__49322 = (function (){var and__4221__auto__ = spec_tools.core.spec_QMARK_(s_49321);
if(cljs.core.truth_(and__4221__auto__)){
return (!(spec_tools.parse.collection_type_QMARK_(s_49321)));
} else {
return and__4221__auto__;
}
})();
spec_tools.impl.register_spec_BANG_(k_49320,(function (){var G__49192 = s_49321;
if(cljs.core.truth_(synthetic_QMARK__49322)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49192,new cljs.core.Keyword("spec-tools.core","synthetic?","spec-tools.core/synthetic?",-2118167094),true);
} else {
return G__49192;
}
})());


var G__49323 = cljs.core.next(seq__49171_49313__$1);
var G__49324 = null;
var G__49325 = (0);
var G__49326 = (0);
seq__49171_49299 = G__49323;
chunk__49172_49300 = G__49324;
count__49173_49301 = G__49325;
i__49174_49302 = G__49326;
continue;
}
} else {
}
}
break;
}

return spec_tools.core.create_spec(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),(keys_spec.cljs$core$IFn$_invoke$arity$1 ? keys_spec.cljs$core$IFn$_invoke$arity$1(data__$1) : keys_spec.call(null,data__$1))], null));
}
});
spec_tools.data_spec._coll_spec = (function spec_tools$data_spec$_coll_spec(data,p__49193){
var map__49194 = p__49193;
var map__49194__$1 = cljs.core.__destructure_map(map__49194);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49194__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49194__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(data))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["data-spec collection ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind)," should be homogeneous, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(data))," values found"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),n,new cljs.core.Keyword(null,"kind","kind",-717265803),kind,new cljs.core.Keyword(null,"values","values",372645556),data], null));
}

var spec = (function (){var G__49195 = n;
var G__49196 = cljs.core.first(data);
return (spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2 ? spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(G__49195,G__49196) : spec_tools.data_spec.spec.call(null,G__49195,G__49196));
})();
return spec_tools.core.create_spec(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),spec_tools.impl.coll_of_spec(spec,kind)], null));
});
spec_tools.data_spec._or_spec = (function spec_tools$data_spec$_or_spec(n,v){
if(((cljs.core.map_QMARK_(v)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.keys(v))))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["data-spec or must be a map of keyword keys -> specs, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)," found"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),n,new cljs.core.Keyword(null,"value","value",305978217),v], null));
}

return spec_tools.impl.or_spec(cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var iter__4622__auto__ = (function spec_tools$data_spec$_or_spec_$_iter__49197(s__49198){
return (new cljs.core.LazySeq(null,(function (){
var s__49198__$1 = s__49198;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__49198__$1);
if(temp__5753__auto__){
var s__49198__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49198__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__49198__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__49200 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__49199 = (0);
while(true){
if((i__49199 < size__4621__auto__)){
var vec__49207 = cljs.core._nth(c__4620__auto__,i__49199);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49207,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49207,(1),null);
cljs.core.chunk_append(b__49200,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var G__49211 = spec_tools.data_spec._nested_key(n,k);
var G__49212 = v__$1;
return (spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2 ? spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(G__49211,G__49212) : spec_tools.data_spec.spec.call(null,G__49211,G__49212));
})()], null));

var G__49329 = (i__49199 + (1));
i__49199 = G__49329;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49200),spec_tools$data_spec$_or_spec_$_iter__49197(cljs.core.chunk_rest(s__49198__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49200),null);
}
} else {
var vec__49215 = cljs.core.first(s__49198__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49215,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49215,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var G__49218 = spec_tools.data_spec._nested_key(n,k);
var G__49219 = v__$1;
return (spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2 ? spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(G__49218,G__49219) : spec_tools.data_spec.spec.call(null,G__49218,G__49219));
})()], null),spec_tools$data_spec$_or_spec_$_iter__49197(cljs.core.rest(s__49198__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(v);
})(),cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Creates a `clojure.spec.alpha/Spec` out of a data-spec. Supports 2 arities:
 * 
 *   ```clojure
 *   ;; arity1
 *   (ds/spec
 *  {:spec {:i int?}
 *   :name ::map})
 * 
 *   ;; arity2 (legacy)
 *   (ds/spec ::map {:i int?})
 *   ```
 * 
 *   The following options are valid for the 1 arity case:
 * 
 *   | Key              | Description
 *   | -----------------|----------------
 *   | `:spec`          | The wrapped data-spec.
 *   | `:name`          | Qualified root spec name - used to generate unique names for sub-specs.
 *   | `:keys-spec`     | Function to wrap not-wrapped keys, e.g. [[opt]] to make keys optional by default.
 *   | `:keys-default`  | Function to generate the keys-specs, default [[keys-specs]].
 */
spec_tools.data_spec.spec = (function spec_tools$data_spec$spec(var_args){
var G__49228 = arguments.length;
switch (G__49228) {
case 1:
return spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$1 = (function (p__49229){
var map__49231 = p__49229;
var map__49231__$1 = cljs.core.__destructure_map(map__49231);
var opts = map__49231__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49231__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49231__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var nested_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49231__$1,new cljs.core.Keyword("spec-tools.data-spec","nested?","spec-tools.data-spec/nested?",-662981973));
if(cljs.core.truth_(spec_tools.data_spec.spec)){
} else {
throw (new Error(["Assert failed: ","missing :spec predicate in data-spec","\n","spec"].join('')));
}

var opts__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"name","name",1843675177),name),new cljs.core.Keyword(null,"spec","spec",347520401));
var named_spec = (function (p1__49225_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__49225_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177),name);
});
var maybe_named_spec = (function (p1__49226_SHARP_){
var G__49232 = p1__49226_SHARP_;
if(cljs.core.not(nested_QMARK_)){
return named_spec(G__49232);
} else {
return G__49232;
}
});
var nested_opts = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,new cljs.core.Keyword("spec-tools.data-spec","nested?","spec-tools.data-spec/nested?",-662981973),true);
if(cljs.core.truth_(spec_tools.core.spec_QMARK_(data))){
return maybe_named_spec(data);
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(data))){
return data;
} else {
if(spec_tools.data_spec.or_QMARK_(data)){
return spec_tools.data_spec._or_spec(name,new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(data));
} else {
if(spec_tools.data_spec.maybe_QMARK_(data)){
return spec_tools.impl.nilable_spec(spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(data)));
} else {
if(cljs.core.map_QMARK_(data)){
return named_spec(spec_tools.data_spec._map_spec(data,nested_opts));
} else {
if(cljs.core.set_QMARK_(data)){
return maybe_named_spec(spec_tools.data_spec._coll_spec(data,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nested_opts,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.PersistentHashSet.EMPTY)));
} else {
if(cljs.core.vector_QMARK_(data)){
return maybe_named_spec(spec_tools.data_spec._coll_spec(data,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nested_opts,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.PersistentVector.EMPTY)));
} else {
return maybe_named_spec(spec_tools.core.create_spec(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),data], null)));

}
}
}
}
}
}
}
}));

(spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2 = (function (name,data){
return spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"spec","spec",347520401),data], null));
}));

(spec_tools.data_spec.spec.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=spec_tools.data_spec.js.map
