goog.provide('app.pages.clock.core');
var module$node_modules$react_clock$dist$umd$index=shadow.js.require("module$node_modules$react_clock$dist$umd$index", {});
app.pages.clock.core.clock = reagent.core.adapt_react_class(module$node_modules$react_clock$dist$umd$index.default);
app.pages.clock.core.date = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((new Date()));
if((typeof app !== 'undefined') && (typeof app.pages !== 'undefined') && (typeof app.pages.clock !== 'undefined') && (typeof app.pages.clock.core !== 'undefined') && (typeof app.pages.clock.core.time_updater !== 'undefined')){
} else {
app.pages.clock.core.time_updater = setInterval((function (){
return cljs.core.reset_BANG_(app.pages.clock.core.date,(new Date()));
}),(1000));
}
app.pages.clock.core.clock_page = (function app$pages$clock$core$clock_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.pages.clock.core.clock,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(app.pages.clock.core.date)], null)], null)], null);
});

//# sourceMappingURL=app.pages.clock.core.js.map
