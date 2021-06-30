goog.provide('app.pages.item.core');
app.pages.item.core.item_page = (function app$pages$item$core$item_page(match){
var map__51969 = new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match);
var map__51969__$1 = cljs.core.__destructure_map(map__51969);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51969__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51969__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var map__51970 = path;
var map__51970__$1 = cljs.core.__destructure_map(map__51970);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51970__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Selected item ",id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"foo","foo",1268894036).cljs$core$IFn$_invoke$arity$1(query))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Optional foo query param: ",new cljs.core.Keyword(null,"foo","foo",1268894036).cljs$core$IFn$_invoke$arity$1(query)], null):null)], null);
});

//# sourceMappingURL=app.pages.item.core.js.map
