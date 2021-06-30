goog.provide('app.pages.home.core');
var module$node_modules$react_clock$dist$umd$index=shadow.js.require("module$node_modules$react_clock$dist$umd$index", {});
app.pages.home.core.clock = reagent.core.adapt_react_class(module$node_modules$react_clock$dist$umd$index.default);
app.pages.home.core.new_date_string = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("10/11/12");
app.pages.home.core.date = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((new Date()));
app.pages.home.core.on_click = (function app$pages$home$core$on_click(value){
var val = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,/\//);
cljs.core.deref(app.pages.home.core.date).setHours(cljs.core.first(val),cljs.core.second(val),cljs.core.last(val));

return console.log(cljs.core.deref(app.pages.home.core.date));
});
app.pages.home.core.home_page = (function app$pages$home$core$home_page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Set your time"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.pages.home.core.clock,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(app.pages.home.core.date)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(app.pages.home.core.new_date_string),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__48347_SHARP_){
return cljs.core.reset_BANG_(app.pages.home.core.new_date_string,p1__48347_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),app.pages.home.core.on_click(cljs.core.deref(app.pages.home.core.new_date_string))], null),"Set Time"], null)], null)], null);
});

//# sourceMappingURL=app.pages.home.core.js.map
