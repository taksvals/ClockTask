goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__45201 = arguments.length;
switch (G__45201) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45202 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45202 = (function (f,blockable,meta45203){
this.f = f;
this.blockable = blockable;
this.meta45203 = meta45203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45204,meta45203__$1){
var self__ = this;
var _45204__$1 = this;
return (new cljs.core.async.t_cljs$core$async45202(self__.f,self__.blockable,meta45203__$1));
}));

(cljs.core.async.t_cljs$core$async45202.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45204){
var self__ = this;
var _45204__$1 = this;
return self__.meta45203;
}));

(cljs.core.async.t_cljs$core$async45202.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45202.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45202.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async45202.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async45202.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta45203","meta45203",1647751616,null)], null);
}));

(cljs.core.async.t_cljs$core$async45202.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45202.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45202");

(cljs.core.async.t_cljs$core$async45202.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async45202");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45202.
 */
cljs.core.async.__GT_t_cljs$core$async45202 = (function cljs$core$async$__GT_t_cljs$core$async45202(f__$1,blockable__$1,meta45203){
return (new cljs.core.async.t_cljs$core$async45202(f__$1,blockable__$1,meta45203));
});

}

return (new cljs.core.async.t_cljs$core$async45202(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__45241 = arguments.length;
switch (G__45241) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__45252 = arguments.length;
switch (G__45252) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__45258 = arguments.length;
switch (G__45258) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_47131 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47131) : fn1.call(null,val_47131));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47131) : fn1.call(null,val_47131));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__45260 = arguments.length;
switch (G__45260) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4706__auto___47139 = n;
var x_47140 = (0);
while(true){
if((x_47140 < n__4706__auto___47139)){
(a[x_47140] = x_47140);

var G__47141 = (x_47140 + (1));
x_47140 = G__47141;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45262 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45262 = (function (flag,meta45263){
this.flag = flag;
this.meta45263 = meta45263;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45264,meta45263__$1){
var self__ = this;
var _45264__$1 = this;
return (new cljs.core.async.t_cljs$core$async45262(self__.flag,meta45263__$1));
}));

(cljs.core.async.t_cljs$core$async45262.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45264){
var self__ = this;
var _45264__$1 = this;
return self__.meta45263;
}));

(cljs.core.async.t_cljs$core$async45262.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45262.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async45262.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45262.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async45262.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta45263","meta45263",-1213527839,null)], null);
}));

(cljs.core.async.t_cljs$core$async45262.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45262.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45262");

(cljs.core.async.t_cljs$core$async45262.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async45262");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45262.
 */
cljs.core.async.__GT_t_cljs$core$async45262 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async45262(flag__$1,meta45263){
return (new cljs.core.async.t_cljs$core$async45262(flag__$1,meta45263));
});

}

return (new cljs.core.async.t_cljs$core$async45262(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45272 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45272 = (function (flag,cb,meta45273){
this.flag = flag;
this.cb = cb;
this.meta45273 = meta45273;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45274,meta45273__$1){
var self__ = this;
var _45274__$1 = this;
return (new cljs.core.async.t_cljs$core$async45272(self__.flag,self__.cb,meta45273__$1));
}));

(cljs.core.async.t_cljs$core$async45272.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45274){
var self__ = this;
var _45274__$1 = this;
return self__.meta45273;
}));

(cljs.core.async.t_cljs$core$async45272.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45272.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async45272.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45272.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async45272.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta45273","meta45273",1735272534,null)], null);
}));

(cljs.core.async.t_cljs$core$async45272.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45272.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45272");

(cljs.core.async.t_cljs$core$async45272.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async45272");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45272.
 */
cljs.core.async.__GT_t_cljs$core$async45272 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async45272(flag__$1,cb__$1,meta45273){
return (new cljs.core.async.t_cljs$core$async45272(flag__$1,cb__$1,meta45273));
});

}

return (new cljs.core.async.t_cljs$core$async45272(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45306_SHARP_){
var G__45318 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45306_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__45318) : fret.call(null,G__45318));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45307_SHARP_){
var G__45319 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45307_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__45319) : fret.call(null,G__45319));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4223__auto__ = wport;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return port;
}
})()], null));
} else {
var G__47147 = (i + (1));
i = G__47147;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4223__auto__ = ret;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4221__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4221__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___47148 = arguments.length;
var i__4830__auto___47149 = (0);
while(true){
if((i__4830__auto___47149 < len__4829__auto___47148)){
args__4835__auto__.push((arguments[i__4830__auto___47149]));

var G__47150 = (i__4830__auto___47149 + (1));
i__4830__auto___47149 = G__47150;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__45322){
var map__45323 = p__45322;
var map__45323__$1 = cljs.core.__destructure_map(map__45323);
var opts = map__45323__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq45320){
var G__45321 = cljs.core.first(seq45320);
var seq45320__$1 = cljs.core.next(seq45320);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45321,seq45320__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__45328 = arguments.length;
switch (G__45328) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__45133__auto___47153 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45134__auto__ = (function (){var switch__44930__auto__ = (function (state_45375){
var state_val_45376 = (state_45375[(1)]);
if((state_val_45376 === (7))){
var inst_45371 = (state_45375[(2)]);
var state_45375__$1 = state_45375;
var statearr_45377_47154 = state_45375__$1;
(statearr_45377_47154[(2)] = inst_45371);

(statearr_45377_47154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45376 === (1))){
var state_45375__$1 = state_45375;
var statearr_45378_47155 = state_45375__$1;
(statearr_45378_47155[(2)] = null);

(statearr_45378_47155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45376 === (4))){
var inst_45354 = (state_45375[(7)]);
var inst_45354__$1 = (state_45375[(2)]);
var inst_45355 = (inst_45354__$1 == null);
var state_45375__$1 = (function (){var statearr_45385 = state_45375;
(statearr_45385[(7)] = inst_45354__$1);

return statearr_45385;
})();
if(cljs.core.truth_(inst_45355)){
var statearr_45386_47156 = state_45375__$1;
(statearr_45386_47156[(1)] = (5));

} else {
var statearr_45387_47157 = state_45375__$1;
(statearr_45387_47157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45376 === (13))){
var state_45375__$1 = state_45375;
var statearr_45388_47161 = state_45375__$1;
(statearr_45388_47161[(2)] = null);

(statearr_45388_47161[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45376 === (6))){
var inst_45354 = (state_45375[(7)]);
var state_45375__$1 = state_45375;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45375__$1,(11),to,inst_45354);
} else {
if((state_val_45376 === (3))){
var inst_45373 = (state_45375[(2)]);
var state_45375__$1 = state_45375;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45375__$1,inst_45373);
} else {
if((state_val_45376 === (12))){
var state_45375__$1 = state_45375;
var statearr_45389_47162 = state_45375__$1;
(statearr_45389_47162[(2)] = null);

(statearr_45389_47162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45376 === (2))){
var state_45375__$1 = state_45375;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45375__$1,(4),from);
} else {
if((state_val_45376 === (11))){
var inst_45364 = (state_45375[(2)]);
var state_45375__$1 = state_45375;
if(cljs.core.truth_(inst_45364)){
var statearr_45399_47165 = state_45375__$1;
(statearr_45399_47165[(1)] = (12));

} else {
var statearr_45400_47166 = state_45375__$1;
(statearr_45400_47166[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45376 === (9))){
var state_45375__$1 = state_45375;
var statearr_45402_47167 = state_45375__$1;
(statearr_45402_47167[(2)] = null);

(statearr_45402_47167[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45376 === (5))){
var state_45375__$1 = state_45375;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45403_47169 = state_45375__$1;
(statearr_45403_47169[(1)] = (8));

} else {
var statearr_45404_47171 = state_45375__$1;
(statearr_45404_47171[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45376 === (14))){
var inst_45369 = (state_45375[(2)]);
var state_45375__$1 = state_45375;
var statearr_45405_47173 = state_45375__$1;
(statearr_45405_47173[(2)] = inst_45369);

(statearr_45405_47173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45376 === (10))){
var inst_45361 = (state_45375[(2)]);
var state_45375__$1 = state_45375;
var statearr_45412_47175 = state_45375__$1;
(statearr_45412_47175[(2)] = inst_45361);

(statearr_45412_47175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45376 === (8))){
var inst_45358 = cljs.core.async.close_BANG_(to);
var state_45375__$1 = state_45375;
var statearr_45413_47176 = state_45375__$1;
(statearr_45413_47176[(2)] = inst_45358);

(statearr_45413_47176[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44931__auto__ = null;
var cljs$core$async$state_machine__44931__auto____0 = (function (){
var statearr_45414 = [null,null,null,null,null,null,null,null];
(statearr_45414[(0)] = cljs$core$async$state_machine__44931__auto__);

(statearr_45414[(1)] = (1));

return statearr_45414;
});
var cljs$core$async$state_machine__44931__auto____1 = (function (state_45375){
while(true){
var ret_value__44932__auto__ = (function (){try{while(true){
var result__44933__auto__ = switch__44930__auto__(state_45375);
if(cljs.core.keyword_identical_QMARK_(result__44933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44933__auto__;
}
break;
}
}catch (e45415){var ex__44934__auto__ = e45415;
var statearr_45416_47177 = state_45375;
(statearr_45416_47177[(2)] = ex__44934__auto__);


if(cljs.core.seq((state_45375[(4)]))){
var statearr_45417_47179 = state_45375;
(statearr_45417_47179[(1)] = cljs.core.first((state_45375[(4)])));

} else {
throw ex__44934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47182 = state_45375;
state_45375 = G__47182;
continue;
} else {
return ret_value__44932__auto__;
}
break;
}
});
cljs$core$async$state_machine__44931__auto__ = function(state_45375){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44931__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44931__auto____1.call(this,state_45375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44931__auto____0;
cljs$core$async$state_machine__44931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44931__auto____1;
return cljs$core$async$state_machine__44931__auto__;
})()
})();
var state__45135__auto__ = (function (){var statearr_45418 = f__45134__auto__();
(statearr_45418[(6)] = c__45133__auto___47153);

return statearr_45418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45135__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__45420){
var vec__45421 = p__45420;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45421,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45421,(1),null);
var job = vec__45421;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__45133__auto___47185 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45134__auto__ = (function (){var switch__44930__auto__ = (function (state_45429){
var state_val_45430 = (state_45429[(1)]);
if((state_val_45430 === (1))){
var state_45429__$1 = state_45429;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45429__$1,(2),res,v);
} else {
if((state_val_45430 === (2))){
var inst_45426 = (state_45429[(2)]);
var inst_45427 = cljs.core.async.close_BANG_(res);
var state_45429__$1 = (function (){var statearr_45431 = state_45429;
(statearr_45431[(7)] = inst_45426);

return statearr_45431;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45429__$1,inst_45427);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44931__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44931__auto____0 = (function (){
var statearr_45432 = [null,null,null,null,null,null,null,null];
(statearr_45432[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44931__auto__);

(statearr_45432[(1)] = (1));

return statearr_45432;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44931__auto____1 = (function (state_45429){
while(true){
var ret_value__44932__auto__ = (function (){try{while(true){
var result__44933__auto__ = switch__44930__auto__(state_45429);
if(cljs.core.keyword_identical_QMARK_(result__44933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44933__auto__;
}
break;
}
}catch (e45433){var ex__44934__auto__ = e45433;
var statearr_45434_47194 = state_45429;
(statearr_45434_47194[(2)] = ex__44934__auto__);


if(cljs.core.seq((state_45429[(4)]))){
var statearr_45435_47195 = state_45429;
(statearr_45435_47195[(1)] = cljs.core.first((state_45429[(4)])));

} else {
throw ex__44934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47196 = state_45429;
state_45429 = G__47196;
continue;
} else {
return ret_value__44932__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44931__auto__ = function(state_45429){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44931__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44931__auto____1.call(this,state_45429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44931__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44931__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44931__auto__;
})()
})();
var state__45135__auto__ = (function (){var statearr_45436 = f__45134__auto__();
(statearr_45436[(6)] = c__45133__auto___47185);

return statearr_45436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45135__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__45438){
var vec__45439 = p__45438;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45439,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45439,(1),null);
var job = vec__45439;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4706__auto___47228 = n;
var __47229 = (0);
while(true){
if((__47229 < n__4706__auto___47228)){
var G__45442_47231 = type;
var G__45442_47232__$1 = (((G__45442_47231 instanceof cljs.core.Keyword))?G__45442_47231.fqn:null);
switch (G__45442_47232__$1) {
case "compute":
var c__45133__auto___47234 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47229,c__45133__auto___47234,G__45442_47231,G__45442_47232__$1,n__4706__auto___47228,jobs,results,process,async){
return (function (){
var f__45134__auto__ = (function (){var switch__44930__auto__ = ((function (__47229,c__45133__auto___47234,G__45442_47231,G__45442_47232__$1,n__4706__auto___47228,jobs,results,process,async){
return (function (state_45455){
var state_val_45456 = (state_45455[(1)]);
if((state_val_45456 === (1))){
var state_45455__$1 = state_45455;
var statearr_45457_47235 = state_45455__$1;
(statearr_45457_47235[(2)] = null);

(statearr_45457_47235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45456 === (2))){
var state_45455__$1 = state_45455;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45455__$1,(4),jobs);
} else {
if((state_val_45456 === (3))){
var inst_45453 = (state_45455[(2)]);
var state_45455__$1 = state_45455;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45455__$1,inst_45453);
} else {
if((state_val_45456 === (4))){
var inst_45445 = (state_45455[(2)]);
var inst_45446 = process(inst_45445);
var state_45455__$1 = state_45455;
if(cljs.core.truth_(inst_45446)){
var statearr_45458_47236 = state_45455__$1;
(statearr_45458_47236[(1)] = (5));

} else {
var statearr_45459_47237 = state_45455__$1;
(statearr_45459_47237[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45456 === (5))){
var state_45455__$1 = state_45455;
var statearr_45460_47238 = state_45455__$1;
(statearr_45460_47238[(2)] = null);

(statearr_45460_47238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45456 === (6))){
var state_45455__$1 = state_45455;
var statearr_45461_47239 = state_45455__$1;
(statearr_45461_47239[(2)] = null);

(statearr_45461_47239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45456 === (7))){
var inst_45451 = (state_45455[(2)]);
var state_45455__$1 = state_45455;
var statearr_45462_47240 = state_45455__$1;
(statearr_45462_47240[(2)] = inst_45451);

(statearr_45462_47240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47229,c__45133__auto___47234,G__45442_47231,G__45442_47232__$1,n__4706__auto___47228,jobs,results,process,async))
;
return ((function (__47229,switch__44930__auto__,c__45133__auto___47234,G__45442_47231,G__45442_47232__$1,n__4706__auto___47228,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44931__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44931__auto____0 = (function (){
var statearr_45463 = [null,null,null,null,null,null,null];
(statearr_45463[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44931__auto__);

(statearr_45463[(1)] = (1));

return statearr_45463;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44931__auto____1 = (function (state_45455){
while(true){
var ret_value__44932__auto__ = (function (){try{while(true){
var result__44933__auto__ = switch__44930__auto__(state_45455);
if(cljs.core.keyword_identical_QMARK_(result__44933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44933__auto__;
}
break;
}
}catch (e45464){var ex__44934__auto__ = e45464;
var statearr_45465_47241 = state_45455;
(statearr_45465_47241[(2)] = ex__44934__auto__);


if(cljs.core.seq((state_45455[(4)]))){
var statearr_45466_47242 = state_45455;
(statearr_45466_47242[(1)] = cljs.core.first((state_45455[(4)])));

} else {
throw ex__44934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47243 = state_45455;
state_45455 = G__47243;
continue;
} else {
return ret_value__44932__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44931__auto__ = function(state_45455){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44931__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44931__auto____1.call(this,state_45455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44931__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44931__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44931__auto__;
})()
;})(__47229,switch__44930__auto__,c__45133__auto___47234,G__45442_47231,G__45442_47232__$1,n__4706__auto___47228,jobs,results,process,async))
})();
var state__45135__auto__ = (function (){var statearr_45467 = f__45134__auto__();
(statearr_45467[(6)] = c__45133__auto___47234);

return statearr_45467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45135__auto__);
});})(__47229,c__45133__auto___47234,G__45442_47231,G__45442_47232__$1,n__4706__auto___47228,jobs,results,process,async))
);


break;
case "async":
var c__45133__auto___47244 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47229,c__45133__auto___47244,G__45442_47231,G__45442_47232__$1,n__4706__auto___47228,jobs,results,process,async){
return (function (){
var f__45134__auto__ = (function (){var switch__44930__auto__ = ((function (__47229,c__45133__auto___47244,G__45442_47231,G__45442_47232__$1,n__4706__auto___47228,jobs,results,process,async){
return (function (state_45480){
var state_val_45481 = (state_45480[(1)]);
if((state_val_45481 === (1))){
var state_45480__$1 = state_45480;
var statearr_45488_47245 = state_45480__$1;
(statearr_45488_47245[(2)] = null);

(statearr_45488_47245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45481 === (2))){
var state_45480__$1 = state_45480;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45480__$1,(4),jobs);
} else {
if((state_val_45481 === (3))){
var inst_45478 = (state_45480[(2)]);
var state_45480__$1 = state_45480;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45480__$1,inst_45478);
} else {
if((state_val_45481 === (4))){
var inst_45470 = (state_45480[(2)]);
var inst_45471 = async(inst_45470);
var state_45480__$1 = state_45480;
if(cljs.core.truth_(inst_45471)){
var statearr_45489_47246 = state_45480__$1;
(statearr_45489_47246[(1)] = (5));

} else {
var statearr_45490_47247 = state_45480__$1;
(statearr_45490_47247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45481 === (5))){
var state_45480__$1 = state_45480;
var statearr_45491_47248 = state_45480__$1;
(statearr_45491_47248[(2)] = null);

(statearr_45491_47248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45481 === (6))){
var state_45480__$1 = state_45480;
var statearr_45492_47249 = state_45480__$1;
(statearr_45492_47249[(2)] = null);

(statearr_45492_47249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45481 === (7))){
var inst_45476 = (state_45480[(2)]);
var state_45480__$1 = state_45480;
var statearr_45493_47250 = state_45480__$1;
(statearr_45493_47250[(2)] = inst_45476);

(statearr_45493_47250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47229,c__45133__auto___47244,G__45442_47231,G__45442_47232__$1,n__4706__auto___47228,jobs,results,process,async))
;
return ((function (__47229,switch__44930__auto__,c__45133__auto___47244,G__45442_47231,G__45442_47232__$1,n__4706__auto___47228,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44931__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44931__auto____0 = (function (){
var statearr_45494 = [null,null,null,null,null,null,null];
(statearr_45494[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44931__auto__);

(statearr_45494[(1)] = (1));

return statearr_45494;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44931__auto____1 = (function (state_45480){
while(true){
var ret_value__44932__auto__ = (function (){try{while(true){
var result__44933__auto__ = switch__44930__auto__(state_45480);
if(cljs.core.keyword_identical_QMARK_(result__44933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44933__auto__;
}
break;
}
}catch (e45495){var ex__44934__auto__ = e45495;
var statearr_45496_47255 = state_45480;
(statearr_45496_47255[(2)] = ex__44934__auto__);


if(cljs.core.seq((state_45480[(4)]))){
var statearr_45497_47256 = state_45480;
(statearr_45497_47256[(1)] = cljs.core.first((state_45480[(4)])));

} else {
throw ex__44934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47257 = state_45480;
state_45480 = G__47257;
continue;
} else {
return ret_value__44932__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44931__auto__ = function(state_45480){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44931__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44931__auto____1.call(this,state_45480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44931__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44931__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44931__auto__;
})()
;})(__47229,switch__44930__auto__,c__45133__auto___47244,G__45442_47231,G__45442_47232__$1,n__4706__auto___47228,jobs,results,process,async))
})();
var state__45135__auto__ = (function (){var statearr_45498 = f__45134__auto__();
(statearr_45498[(6)] = c__45133__auto___47244);

return statearr_45498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45135__auto__);
});})(__47229,c__45133__auto___47244,G__45442_47231,G__45442_47232__$1,n__4706__auto___47228,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45442_47232__$1)].join('')));

}

var G__47258 = (__47229 + (1));
__47229 = G__47258;
continue;
} else {
}
break;
}

var c__45133__auto___47259 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45134__auto__ = (function (){var switch__44930__auto__ = (function (state_45528){
var state_val_45529 = (state_45528[(1)]);
if((state_val_45529 === (7))){
var inst_45524 = (state_45528[(2)]);
var state_45528__$1 = state_45528;
var statearr_45530_47260 = state_45528__$1;
(statearr_45530_47260[(2)] = inst_45524);

(statearr_45530_47260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45529 === (1))){
var state_45528__$1 = state_45528;
var statearr_45533_47261 = state_45528__$1;
(statearr_45533_47261[(2)] = null);

(statearr_45533_47261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45529 === (4))){
var inst_45505 = (state_45528[(7)]);
var inst_45505__$1 = (state_45528[(2)]);
var inst_45506 = (inst_45505__$1 == null);
var state_45528__$1 = (function (){var statearr_45537 = state_45528;
(statearr_45537[(7)] = inst_45505__$1);

return statearr_45537;
})();
if(cljs.core.truth_(inst_45506)){
var statearr_45538_47262 = state_45528__$1;
(statearr_45538_47262[(1)] = (5));

} else {
var statearr_45539_47263 = state_45528__$1;
(statearr_45539_47263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45529 === (6))){
var inst_45505 = (state_45528[(7)]);
var inst_45510 = (state_45528[(8)]);
var inst_45510__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_45515 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45516 = [inst_45505,inst_45510__$1];
var inst_45517 = (new cljs.core.PersistentVector(null,2,(5),inst_45515,inst_45516,null));
var state_45528__$1 = (function (){var statearr_45543 = state_45528;
(statearr_45543[(8)] = inst_45510__$1);

return statearr_45543;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45528__$1,(8),jobs,inst_45517);
} else {
if((state_val_45529 === (3))){
var inst_45526 = (state_45528[(2)]);
var state_45528__$1 = state_45528;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45528__$1,inst_45526);
} else {
if((state_val_45529 === (2))){
var state_45528__$1 = state_45528;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45528__$1,(4),from);
} else {
if((state_val_45529 === (9))){
var inst_45521 = (state_45528[(2)]);
var state_45528__$1 = (function (){var statearr_45547 = state_45528;
(statearr_45547[(9)] = inst_45521);

return statearr_45547;
})();
var statearr_45549_47264 = state_45528__$1;
(statearr_45549_47264[(2)] = null);

(statearr_45549_47264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45529 === (5))){
var inst_45508 = cljs.core.async.close_BANG_(jobs);
var state_45528__$1 = state_45528;
var statearr_45554_47265 = state_45528__$1;
(statearr_45554_47265[(2)] = inst_45508);

(statearr_45554_47265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45529 === (8))){
var inst_45510 = (state_45528[(8)]);
var inst_45519 = (state_45528[(2)]);
var state_45528__$1 = (function (){var statearr_45555 = state_45528;
(statearr_45555[(10)] = inst_45519);

return statearr_45555;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45528__$1,(9),results,inst_45510);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44931__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44931__auto____0 = (function (){
var statearr_45556 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45556[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44931__auto__);

(statearr_45556[(1)] = (1));

return statearr_45556;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44931__auto____1 = (function (state_45528){
while(true){
var ret_value__44932__auto__ = (function (){try{while(true){
var result__44933__auto__ = switch__44930__auto__(state_45528);
if(cljs.core.keyword_identical_QMARK_(result__44933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44933__auto__;
}
break;
}
}catch (e45557){var ex__44934__auto__ = e45557;
var statearr_45558_47266 = state_45528;
(statearr_45558_47266[(2)] = ex__44934__auto__);


if(cljs.core.seq((state_45528[(4)]))){
var statearr_45559_47267 = state_45528;
(statearr_45559_47267[(1)] = cljs.core.first((state_45528[(4)])));

} else {
throw ex__44934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47268 = state_45528;
state_45528 = G__47268;
continue;
} else {
return ret_value__44932__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44931__auto__ = function(state_45528){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44931__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44931__auto____1.call(this,state_45528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44931__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44931__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44931__auto__;
})()
})();
var state__45135__auto__ = (function (){var statearr_45562 = f__45134__auto__();
(statearr_45562[(6)] = c__45133__auto___47259);

return statearr_45562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45135__auto__);
}));


var c__45133__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45134__auto__ = (function (){var switch__44930__auto__ = (function (state_45600){
var state_val_45601 = (state_45600[(1)]);
if((state_val_45601 === (7))){
var inst_45596 = (state_45600[(2)]);
var state_45600__$1 = state_45600;
var statearr_45602_47269 = state_45600__$1;
(statearr_45602_47269[(2)] = inst_45596);

(statearr_45602_47269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45601 === (20))){
var state_45600__$1 = state_45600;
var statearr_45603_47270 = state_45600__$1;
(statearr_45603_47270[(2)] = null);

(statearr_45603_47270[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45601 === (1))){
var state_45600__$1 = state_45600;
var statearr_45604_47271 = state_45600__$1;
(statearr_45604_47271[(2)] = null);

(statearr_45604_47271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45601 === (4))){
var inst_45565 = (state_45600[(7)]);
var inst_45565__$1 = (state_45600[(2)]);
var inst_45566 = (inst_45565__$1 == null);
var state_45600__$1 = (function (){var statearr_45605 = state_45600;
(statearr_45605[(7)] = inst_45565__$1);

return statearr_45605;
})();
if(cljs.core.truth_(inst_45566)){
var statearr_45607_47272 = state_45600__$1;
(statearr_45607_47272[(1)] = (5));

} else {
var statearr_45608_47273 = state_45600__$1;
(statearr_45608_47273[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45601 === (15))){
var inst_45578 = (state_45600[(8)]);
var state_45600__$1 = state_45600;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45600__$1,(18),to,inst_45578);
} else {
if((state_val_45601 === (21))){
var inst_45591 = (state_45600[(2)]);
var state_45600__$1 = state_45600;
var statearr_45609_47275 = state_45600__$1;
(statearr_45609_47275[(2)] = inst_45591);

(statearr_45609_47275[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45601 === (13))){
var inst_45593 = (state_45600[(2)]);
var state_45600__$1 = (function (){var statearr_45610 = state_45600;
(statearr_45610[(9)] = inst_45593);

return statearr_45610;
})();
var statearr_45611_47277 = state_45600__$1;
(statearr_45611_47277[(2)] = null);

(statearr_45611_47277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45601 === (6))){
var inst_45565 = (state_45600[(7)]);
var state_45600__$1 = state_45600;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45600__$1,(11),inst_45565);
} else {
if((state_val_45601 === (17))){
var inst_45586 = (state_45600[(2)]);
var state_45600__$1 = state_45600;
if(cljs.core.truth_(inst_45586)){
var statearr_45612_47278 = state_45600__$1;
(statearr_45612_47278[(1)] = (19));

} else {
var statearr_45613_47279 = state_45600__$1;
(statearr_45613_47279[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45601 === (3))){
var inst_45598 = (state_45600[(2)]);
var state_45600__$1 = state_45600;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45600__$1,inst_45598);
} else {
if((state_val_45601 === (12))){
var inst_45575 = (state_45600[(10)]);
var state_45600__$1 = state_45600;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45600__$1,(14),inst_45575);
} else {
if((state_val_45601 === (2))){
var state_45600__$1 = state_45600;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45600__$1,(4),results);
} else {
if((state_val_45601 === (19))){
var state_45600__$1 = state_45600;
var statearr_45614_47288 = state_45600__$1;
(statearr_45614_47288[(2)] = null);

(statearr_45614_47288[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45601 === (11))){
var inst_45575 = (state_45600[(2)]);
var state_45600__$1 = (function (){var statearr_45615 = state_45600;
(statearr_45615[(10)] = inst_45575);

return statearr_45615;
})();
var statearr_45616_47290 = state_45600__$1;
(statearr_45616_47290[(2)] = null);

(statearr_45616_47290[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45601 === (9))){
var state_45600__$1 = state_45600;
var statearr_45617_47291 = state_45600__$1;
(statearr_45617_47291[(2)] = null);

(statearr_45617_47291[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45601 === (5))){
var state_45600__$1 = state_45600;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45618_47292 = state_45600__$1;
(statearr_45618_47292[(1)] = (8));

} else {
var statearr_45619_47293 = state_45600__$1;
(statearr_45619_47293[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45601 === (14))){
var inst_45580 = (state_45600[(11)]);
var inst_45578 = (state_45600[(8)]);
var inst_45578__$1 = (state_45600[(2)]);
var inst_45579 = (inst_45578__$1 == null);
var inst_45580__$1 = cljs.core.not(inst_45579);
var state_45600__$1 = (function (){var statearr_45620 = state_45600;
(statearr_45620[(11)] = inst_45580__$1);

(statearr_45620[(8)] = inst_45578__$1);

return statearr_45620;
})();
if(inst_45580__$1){
var statearr_45621_47294 = state_45600__$1;
(statearr_45621_47294[(1)] = (15));

} else {
var statearr_45627_47295 = state_45600__$1;
(statearr_45627_47295[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45601 === (16))){
var inst_45580 = (state_45600[(11)]);
var state_45600__$1 = state_45600;
var statearr_45628_47296 = state_45600__$1;
(statearr_45628_47296[(2)] = inst_45580);

(statearr_45628_47296[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45601 === (10))){
var inst_45572 = (state_45600[(2)]);
var state_45600__$1 = state_45600;
var statearr_45629_47297 = state_45600__$1;
(statearr_45629_47297[(2)] = inst_45572);

(statearr_45629_47297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45601 === (18))){
var inst_45583 = (state_45600[(2)]);
var state_45600__$1 = state_45600;
var statearr_45630_47298 = state_45600__$1;
(statearr_45630_47298[(2)] = inst_45583);

(statearr_45630_47298[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45601 === (8))){
var inst_45569 = cljs.core.async.close_BANG_(to);
var state_45600__$1 = state_45600;
var statearr_45635_47299 = state_45600__$1;
(statearr_45635_47299[(2)] = inst_45569);

(statearr_45635_47299[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44931__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44931__auto____0 = (function (){
var statearr_45660 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45660[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44931__auto__);

(statearr_45660[(1)] = (1));

return statearr_45660;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44931__auto____1 = (function (state_45600){
while(true){
var ret_value__44932__auto__ = (function (){try{while(true){
var result__44933__auto__ = switch__44930__auto__(state_45600);
if(cljs.core.keyword_identical_QMARK_(result__44933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44933__auto__;
}
break;
}
}catch (e45661){var ex__44934__auto__ = e45661;
var statearr_45662_47300 = state_45600;
(statearr_45662_47300[(2)] = ex__44934__auto__);


if(cljs.core.seq((state_45600[(4)]))){
var statearr_45663_47301 = state_45600;
(statearr_45663_47301[(1)] = cljs.core.first((state_45600[(4)])));

} else {
throw ex__44934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47302 = state_45600;
state_45600 = G__47302;
continue;
} else {
return ret_value__44932__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44931__auto__ = function(state_45600){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44931__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44931__auto____1.call(this,state_45600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44931__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44931__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44931__auto__;
})()
})();
var state__45135__auto__ = (function (){var statearr_45664 = f__45134__auto__();
(statearr_45664[(6)] = c__45133__auto__);

return statearr_45664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45135__auto__);
}));

return c__45133__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__45671 = arguments.length;
switch (G__45671) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__45674 = arguments.length;
switch (G__45674) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__45676 = arguments.length;
switch (G__45676) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__45133__auto___47313 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45134__auto__ = (function (){var switch__44930__auto__ = (function (state_45705){
var state_val_45706 = (state_45705[(1)]);
if((state_val_45706 === (7))){
var inst_45698 = (state_45705[(2)]);
var state_45705__$1 = state_45705;
var statearr_45707_47314 = state_45705__$1;
(statearr_45707_47314[(2)] = inst_45698);

(statearr_45707_47314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45706 === (1))){
var state_45705__$1 = state_45705;
var statearr_45710_47315 = state_45705__$1;
(statearr_45710_47315[(2)] = null);

(statearr_45710_47315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45706 === (4))){
var inst_45679 = (state_45705[(7)]);
var inst_45679__$1 = (state_45705[(2)]);
var inst_45680 = (inst_45679__$1 == null);
var state_45705__$1 = (function (){var statearr_45711 = state_45705;
(statearr_45711[(7)] = inst_45679__$1);

return statearr_45711;
})();
if(cljs.core.truth_(inst_45680)){
var statearr_45712_47316 = state_45705__$1;
(statearr_45712_47316[(1)] = (5));

} else {
var statearr_45713_47317 = state_45705__$1;
(statearr_45713_47317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45706 === (13))){
var state_45705__$1 = state_45705;
var statearr_45714_47318 = state_45705__$1;
(statearr_45714_47318[(2)] = null);

(statearr_45714_47318[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45706 === (6))){
var inst_45679 = (state_45705[(7)]);
var inst_45685 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_45679) : p.call(null,inst_45679));
var state_45705__$1 = state_45705;
if(cljs.core.truth_(inst_45685)){
var statearr_45718_47319 = state_45705__$1;
(statearr_45718_47319[(1)] = (9));

} else {
var statearr_45719_47320 = state_45705__$1;
(statearr_45719_47320[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45706 === (3))){
var inst_45700 = (state_45705[(2)]);
var state_45705__$1 = state_45705;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45705__$1,inst_45700);
} else {
if((state_val_45706 === (12))){
var state_45705__$1 = state_45705;
var statearr_45720_47321 = state_45705__$1;
(statearr_45720_47321[(2)] = null);

(statearr_45720_47321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45706 === (2))){
var state_45705__$1 = state_45705;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45705__$1,(4),ch);
} else {
if((state_val_45706 === (11))){
var inst_45679 = (state_45705[(7)]);
var inst_45689 = (state_45705[(2)]);
var state_45705__$1 = state_45705;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45705__$1,(8),inst_45689,inst_45679);
} else {
if((state_val_45706 === (9))){
var state_45705__$1 = state_45705;
var statearr_45723_47322 = state_45705__$1;
(statearr_45723_47322[(2)] = tc);

(statearr_45723_47322[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45706 === (5))){
var inst_45682 = cljs.core.async.close_BANG_(tc);
var inst_45683 = cljs.core.async.close_BANG_(fc);
var state_45705__$1 = (function (){var statearr_45724 = state_45705;
(statearr_45724[(8)] = inst_45682);

return statearr_45724;
})();
var statearr_45725_47323 = state_45705__$1;
(statearr_45725_47323[(2)] = inst_45683);

(statearr_45725_47323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45706 === (14))){
var inst_45696 = (state_45705[(2)]);
var state_45705__$1 = state_45705;
var statearr_45726_47324 = state_45705__$1;
(statearr_45726_47324[(2)] = inst_45696);

(statearr_45726_47324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45706 === (10))){
var state_45705__$1 = state_45705;
var statearr_45730_47325 = state_45705__$1;
(statearr_45730_47325[(2)] = fc);

(statearr_45730_47325[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45706 === (8))){
var inst_45691 = (state_45705[(2)]);
var state_45705__$1 = state_45705;
if(cljs.core.truth_(inst_45691)){
var statearr_45731_47326 = state_45705__$1;
(statearr_45731_47326[(1)] = (12));

} else {
var statearr_45732_47330 = state_45705__$1;
(statearr_45732_47330[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44931__auto__ = null;
var cljs$core$async$state_machine__44931__auto____0 = (function (){
var statearr_45733 = [null,null,null,null,null,null,null,null,null];
(statearr_45733[(0)] = cljs$core$async$state_machine__44931__auto__);

(statearr_45733[(1)] = (1));

return statearr_45733;
});
var cljs$core$async$state_machine__44931__auto____1 = (function (state_45705){
while(true){
var ret_value__44932__auto__ = (function (){try{while(true){
var result__44933__auto__ = switch__44930__auto__(state_45705);
if(cljs.core.keyword_identical_QMARK_(result__44933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44933__auto__;
}
break;
}
}catch (e45734){var ex__44934__auto__ = e45734;
var statearr_45735_47331 = state_45705;
(statearr_45735_47331[(2)] = ex__44934__auto__);


if(cljs.core.seq((state_45705[(4)]))){
var statearr_45736_47332 = state_45705;
(statearr_45736_47332[(1)] = cljs.core.first((state_45705[(4)])));

} else {
throw ex__44934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47336 = state_45705;
state_45705 = G__47336;
continue;
} else {
return ret_value__44932__auto__;
}
break;
}
});
cljs$core$async$state_machine__44931__auto__ = function(state_45705){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44931__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44931__auto____1.call(this,state_45705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44931__auto____0;
cljs$core$async$state_machine__44931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44931__auto____1;
return cljs$core$async$state_machine__44931__auto__;
})()
})();
var state__45135__auto__ = (function (){var statearr_45737 = f__45134__auto__();
(statearr_45737[(6)] = c__45133__auto___47313);

return statearr_45737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45135__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__45133__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45134__auto__ = (function (){var switch__44930__auto__ = (function (state_45767){
var state_val_45768 = (state_45767[(1)]);
if((state_val_45768 === (7))){
var inst_45763 = (state_45767[(2)]);
var state_45767__$1 = state_45767;
var statearr_45769_47337 = state_45767__$1;
(statearr_45769_47337[(2)] = inst_45763);

(statearr_45769_47337[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45768 === (1))){
var inst_45742 = init;
var inst_45743 = inst_45742;
var state_45767__$1 = (function (){var statearr_45770 = state_45767;
(statearr_45770[(7)] = inst_45743);

return statearr_45770;
})();
var statearr_45771_47341 = state_45767__$1;
(statearr_45771_47341[(2)] = null);

(statearr_45771_47341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45768 === (4))){
var inst_45746 = (state_45767[(8)]);
var inst_45746__$1 = (state_45767[(2)]);
var inst_45751 = (inst_45746__$1 == null);
var state_45767__$1 = (function (){var statearr_45772 = state_45767;
(statearr_45772[(8)] = inst_45746__$1);

return statearr_45772;
})();
if(cljs.core.truth_(inst_45751)){
var statearr_45773_47342 = state_45767__$1;
(statearr_45773_47342[(1)] = (5));

} else {
var statearr_45774_47343 = state_45767__$1;
(statearr_45774_47343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45768 === (6))){
var inst_45743 = (state_45767[(7)]);
var inst_45754 = (state_45767[(9)]);
var inst_45746 = (state_45767[(8)]);
var inst_45754__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_45743,inst_45746) : f.call(null,inst_45743,inst_45746));
var inst_45755 = cljs.core.reduced_QMARK_(inst_45754__$1);
var state_45767__$1 = (function (){var statearr_45775 = state_45767;
(statearr_45775[(9)] = inst_45754__$1);

return statearr_45775;
})();
if(inst_45755){
var statearr_45776_47348 = state_45767__$1;
(statearr_45776_47348[(1)] = (8));

} else {
var statearr_45777_47350 = state_45767__$1;
(statearr_45777_47350[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45768 === (3))){
var inst_45765 = (state_45767[(2)]);
var state_45767__$1 = state_45767;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45767__$1,inst_45765);
} else {
if((state_val_45768 === (2))){
var state_45767__$1 = state_45767;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45767__$1,(4),ch);
} else {
if((state_val_45768 === (9))){
var inst_45754 = (state_45767[(9)]);
var inst_45743 = inst_45754;
var state_45767__$1 = (function (){var statearr_45778 = state_45767;
(statearr_45778[(7)] = inst_45743);

return statearr_45778;
})();
var statearr_45779_47357 = state_45767__$1;
(statearr_45779_47357[(2)] = null);

(statearr_45779_47357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45768 === (5))){
var inst_45743 = (state_45767[(7)]);
var state_45767__$1 = state_45767;
var statearr_45780_47358 = state_45767__$1;
(statearr_45780_47358[(2)] = inst_45743);

(statearr_45780_47358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45768 === (10))){
var inst_45761 = (state_45767[(2)]);
var state_45767__$1 = state_45767;
var statearr_45781_47359 = state_45767__$1;
(statearr_45781_47359[(2)] = inst_45761);

(statearr_45781_47359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45768 === (8))){
var inst_45754 = (state_45767[(9)]);
var inst_45757 = cljs.core.deref(inst_45754);
var state_45767__$1 = state_45767;
var statearr_45782_47361 = state_45767__$1;
(statearr_45782_47361[(2)] = inst_45757);

(statearr_45782_47361[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__44931__auto__ = null;
var cljs$core$async$reduce_$_state_machine__44931__auto____0 = (function (){
var statearr_45783 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45783[(0)] = cljs$core$async$reduce_$_state_machine__44931__auto__);

(statearr_45783[(1)] = (1));

return statearr_45783;
});
var cljs$core$async$reduce_$_state_machine__44931__auto____1 = (function (state_45767){
while(true){
var ret_value__44932__auto__ = (function (){try{while(true){
var result__44933__auto__ = switch__44930__auto__(state_45767);
if(cljs.core.keyword_identical_QMARK_(result__44933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44933__auto__;
}
break;
}
}catch (e45784){var ex__44934__auto__ = e45784;
var statearr_45785_47362 = state_45767;
(statearr_45785_47362[(2)] = ex__44934__auto__);


if(cljs.core.seq((state_45767[(4)]))){
var statearr_45786_47364 = state_45767;
(statearr_45786_47364[(1)] = cljs.core.first((state_45767[(4)])));

} else {
throw ex__44934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47365 = state_45767;
state_45767 = G__47365;
continue;
} else {
return ret_value__44932__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__44931__auto__ = function(state_45767){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__44931__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__44931__auto____1.call(this,state_45767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__44931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__44931__auto____0;
cljs$core$async$reduce_$_state_machine__44931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__44931__auto____1;
return cljs$core$async$reduce_$_state_machine__44931__auto__;
})()
})();
var state__45135__auto__ = (function (){var statearr_45787 = f__45134__auto__();
(statearr_45787[(6)] = c__45133__auto__);

return statearr_45787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45135__auto__);
}));

return c__45133__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__45133__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45134__auto__ = (function (){var switch__44930__auto__ = (function (state_45793){
var state_val_45794 = (state_45793[(1)]);
if((state_val_45794 === (1))){
var inst_45788 = cljs.core.async.reduce(f__$1,init,ch);
var state_45793__$1 = state_45793;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45793__$1,(2),inst_45788);
} else {
if((state_val_45794 === (2))){
var inst_45790 = (state_45793[(2)]);
var inst_45791 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_45790) : f__$1.call(null,inst_45790));
var state_45793__$1 = state_45793;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45793__$1,inst_45791);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__44931__auto__ = null;
var cljs$core$async$transduce_$_state_machine__44931__auto____0 = (function (){
var statearr_45795 = [null,null,null,null,null,null,null];
(statearr_45795[(0)] = cljs$core$async$transduce_$_state_machine__44931__auto__);

(statearr_45795[(1)] = (1));

return statearr_45795;
});
var cljs$core$async$transduce_$_state_machine__44931__auto____1 = (function (state_45793){
while(true){
var ret_value__44932__auto__ = (function (){try{while(true){
var result__44933__auto__ = switch__44930__auto__(state_45793);
if(cljs.core.keyword_identical_QMARK_(result__44933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44933__auto__;
}
break;
}
}catch (e45796){var ex__44934__auto__ = e45796;
var statearr_45797_47370 = state_45793;
(statearr_45797_47370[(2)] = ex__44934__auto__);


if(cljs.core.seq((state_45793[(4)]))){
var statearr_45798_47371 = state_45793;
(statearr_45798_47371[(1)] = cljs.core.first((state_45793[(4)])));

} else {
throw ex__44934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47375 = state_45793;
state_45793 = G__47375;
continue;
} else {
return ret_value__44932__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__44931__auto__ = function(state_45793){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__44931__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__44931__auto____1.call(this,state_45793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__44931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__44931__auto____0;
cljs$core$async$transduce_$_state_machine__44931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__44931__auto____1;
return cljs$core$async$transduce_$_state_machine__44931__auto__;
})()
})();
var state__45135__auto__ = (function (){var statearr_45803 = f__45134__auto__();
(statearr_45803[(6)] = c__45133__auto__);

return statearr_45803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45135__auto__);
}));

return c__45133__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__45810 = arguments.length;
switch (G__45810) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__45133__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45134__auto__ = (function (){var switch__44930__auto__ = (function (state_45839){
var state_val_45840 = (state_45839[(1)]);
if((state_val_45840 === (7))){
var inst_45821 = (state_45839[(2)]);
var state_45839__$1 = state_45839;
var statearr_45841_47377 = state_45839__$1;
(statearr_45841_47377[(2)] = inst_45821);

(statearr_45841_47377[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45840 === (1))){
var inst_45815 = cljs.core.seq(coll);
var inst_45816 = inst_45815;
var state_45839__$1 = (function (){var statearr_45842 = state_45839;
(statearr_45842[(7)] = inst_45816);

return statearr_45842;
})();
var statearr_45843_47378 = state_45839__$1;
(statearr_45843_47378[(2)] = null);

(statearr_45843_47378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45840 === (4))){
var inst_45816 = (state_45839[(7)]);
var inst_45819 = cljs.core.first(inst_45816);
var state_45839__$1 = state_45839;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45839__$1,(7),ch,inst_45819);
} else {
if((state_val_45840 === (13))){
var inst_45833 = (state_45839[(2)]);
var state_45839__$1 = state_45839;
var statearr_45844_47379 = state_45839__$1;
(statearr_45844_47379[(2)] = inst_45833);

(statearr_45844_47379[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45840 === (6))){
var inst_45824 = (state_45839[(2)]);
var state_45839__$1 = state_45839;
if(cljs.core.truth_(inst_45824)){
var statearr_45845_47380 = state_45839__$1;
(statearr_45845_47380[(1)] = (8));

} else {
var statearr_45846_47381 = state_45839__$1;
(statearr_45846_47381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45840 === (3))){
var inst_45837 = (state_45839[(2)]);
var state_45839__$1 = state_45839;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45839__$1,inst_45837);
} else {
if((state_val_45840 === (12))){
var state_45839__$1 = state_45839;
var statearr_45847_47382 = state_45839__$1;
(statearr_45847_47382[(2)] = null);

(statearr_45847_47382[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45840 === (2))){
var inst_45816 = (state_45839[(7)]);
var state_45839__$1 = state_45839;
if(cljs.core.truth_(inst_45816)){
var statearr_45848_47383 = state_45839__$1;
(statearr_45848_47383[(1)] = (4));

} else {
var statearr_45849_47384 = state_45839__$1;
(statearr_45849_47384[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45840 === (11))){
var inst_45830 = cljs.core.async.close_BANG_(ch);
var state_45839__$1 = state_45839;
var statearr_45850_47388 = state_45839__$1;
(statearr_45850_47388[(2)] = inst_45830);

(statearr_45850_47388[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45840 === (9))){
var state_45839__$1 = state_45839;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45851_47389 = state_45839__$1;
(statearr_45851_47389[(1)] = (11));

} else {
var statearr_45852_47390 = state_45839__$1;
(statearr_45852_47390[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45840 === (5))){
var inst_45816 = (state_45839[(7)]);
var state_45839__$1 = state_45839;
var statearr_45853_47391 = state_45839__$1;
(statearr_45853_47391[(2)] = inst_45816);

(statearr_45853_47391[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45840 === (10))){
var inst_45835 = (state_45839[(2)]);
var state_45839__$1 = state_45839;
var statearr_45854_47392 = state_45839__$1;
(statearr_45854_47392[(2)] = inst_45835);

(statearr_45854_47392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45840 === (8))){
var inst_45816 = (state_45839[(7)]);
var inst_45826 = cljs.core.next(inst_45816);
var inst_45816__$1 = inst_45826;
var state_45839__$1 = (function (){var statearr_45855 = state_45839;
(statearr_45855[(7)] = inst_45816__$1);

return statearr_45855;
})();
var statearr_45856_47393 = state_45839__$1;
(statearr_45856_47393[(2)] = null);

(statearr_45856_47393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44931__auto__ = null;
var cljs$core$async$state_machine__44931__auto____0 = (function (){
var statearr_45857 = [null,null,null,null,null,null,null,null];
(statearr_45857[(0)] = cljs$core$async$state_machine__44931__auto__);

(statearr_45857[(1)] = (1));

return statearr_45857;
});
var cljs$core$async$state_machine__44931__auto____1 = (function (state_45839){
while(true){
var ret_value__44932__auto__ = (function (){try{while(true){
var result__44933__auto__ = switch__44930__auto__(state_45839);
if(cljs.core.keyword_identical_QMARK_(result__44933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44933__auto__;
}
break;
}
}catch (e45858){var ex__44934__auto__ = e45858;
var statearr_45859_47395 = state_45839;
(statearr_45859_47395[(2)] = ex__44934__auto__);


if(cljs.core.seq((state_45839[(4)]))){
var statearr_45860_47396 = state_45839;
(statearr_45860_47396[(1)] = cljs.core.first((state_45839[(4)])));

} else {
throw ex__44934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47397 = state_45839;
state_45839 = G__47397;
continue;
} else {
return ret_value__44932__auto__;
}
break;
}
});
cljs$core$async$state_machine__44931__auto__ = function(state_45839){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44931__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44931__auto____1.call(this,state_45839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44931__auto____0;
cljs$core$async$state_machine__44931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44931__auto____1;
return cljs$core$async$state_machine__44931__auto__;
})()
})();
var state__45135__auto__ = (function (){var statearr_45861 = f__45134__auto__();
(statearr_45861[(6)] = c__45133__auto__);

return statearr_45861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45135__auto__);
}));

return c__45133__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__45866 = arguments.length;
switch (G__45866) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_47399 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_47399(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_47402 = (function (m,ch,close_QMARK_){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4522__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4519__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_47402(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_47405 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_47405(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_47406 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_47406(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45874 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45874 = (function (ch,cs,meta45875){
this.ch = ch;
this.cs = cs;
this.meta45875 = meta45875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45876,meta45875__$1){
var self__ = this;
var _45876__$1 = this;
return (new cljs.core.async.t_cljs$core$async45874(self__.ch,self__.cs,meta45875__$1));
}));

(cljs.core.async.t_cljs$core$async45874.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45876){
var self__ = this;
var _45876__$1 = this;
return self__.meta45875;
}));

(cljs.core.async.t_cljs$core$async45874.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45874.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async45874.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45874.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async45874.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async45874.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async45874.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta45875","meta45875",-227864658,null)], null);
}));

(cljs.core.async.t_cljs$core$async45874.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45874.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45874");

(cljs.core.async.t_cljs$core$async45874.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async45874");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45874.
 */
cljs.core.async.__GT_t_cljs$core$async45874 = (function cljs$core$async$mult_$___GT_t_cljs$core$async45874(ch__$1,cs__$1,meta45875){
return (new cljs.core.async.t_cljs$core$async45874(ch__$1,cs__$1,meta45875));
});

}

return (new cljs.core.async.t_cljs$core$async45874(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__45133__auto___47407 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45134__auto__ = (function (){var switch__44930__auto__ = (function (state_46010){
var state_val_46011 = (state_46010[(1)]);
if((state_val_46011 === (7))){
var inst_46006 = (state_46010[(2)]);
var state_46010__$1 = state_46010;
var statearr_46020_47408 = state_46010__$1;
(statearr_46020_47408[(2)] = inst_46006);

(statearr_46020_47408[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46011 === (20))){
var inst_45910 = (state_46010[(7)]);
var inst_45923 = cljs.core.first(inst_45910);
var inst_45924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45923,(0),null);
var inst_45925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45923,(1),null);
var state_46010__$1 = (function (){var statearr_46023 = state_46010;
(statearr_46023[(8)] = inst_45924);

return statearr_46023;
})();
if(cljs.core.truth_(inst_45925)){
var statearr_46024_47409 = state_46010__$1;
(statearr_46024_47409[(1)] = (22));

} else {
var statearr_46029_47410 = state_46010__$1;
(statearr_46029_47410[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46011 === (27))){
var inst_45960 = (state_46010[(9)]);
var inst_45953 = (state_46010[(10)]);
var inst_45879 = (state_46010[(11)]);
var inst_45955 = (state_46010[(12)]);
var inst_45960__$1 = cljs.core._nth(inst_45953,inst_45955);
var inst_45961 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45960__$1,inst_45879,done);
var state_46010__$1 = (function (){var statearr_46034 = state_46010;
(statearr_46034[(9)] = inst_45960__$1);

return statearr_46034;
})();
if(cljs.core.truth_(inst_45961)){
var statearr_46035_47411 = state_46010__$1;
(statearr_46035_47411[(1)] = (30));

} else {
var statearr_46037_47412 = state_46010__$1;
(statearr_46037_47412[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46011 === (1))){
var state_46010__$1 = state_46010;
var statearr_46040_47413 = state_46010__$1;
(statearr_46040_47413[(2)] = null);

(statearr_46040_47413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46011 === (24))){
var inst_45910 = (state_46010[(7)]);
var inst_45930 = (state_46010[(2)]);
var inst_45931 = cljs.core.next(inst_45910);
var inst_45888 = inst_45931;
var inst_45889 = null;
var inst_45890 = (0);
var inst_45891 = (0);
var state_46010__$1 = (function (){var statearr_46041 = state_46010;
(statearr_46041[(13)] = inst_45930);

(statearr_46041[(14)] = inst_45891);

(statearr_46041[(15)] = inst_45888);

(statearr_46041[(16)] = inst_45890);

(statearr_46041[(17)] = inst_45889);

return statearr_46041;
})();
var statearr_46042_47414 = state_46010__$1;
(statearr_46042_47414[(2)] = null);

(statearr_46042_47414[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46011 === (39))){
var state_46010__$1 = state_46010;
var statearr_46056_47415 = state_46010__$1;
(statearr_46056_47415[(2)] = null);

(statearr_46056_47415[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46011 === (4))){
var inst_45879 = (state_46010[(11)]);
var inst_45879__$1 = (state_46010[(2)]);
var inst_45880 = (inst_45879__$1 == null);
var state_46010__$1 = (function (){var statearr_46057 = state_46010;
(statearr_46057[(11)] = inst_45879__$1);

return statearr_46057;
})();
if(cljs.core.truth_(inst_45880)){
var statearr_46060_47416 = state_46010__$1;
(statearr_46060_47416[(1)] = (5));

} else {
var statearr_46061_47417 = state_46010__$1;
(statearr_46061_47417[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46011 === (15))){
var inst_45891 = (state_46010[(14)]);
var inst_45888 = (state_46010[(15)]);
var inst_45890 = (state_46010[(16)]);
var inst_45889 = (state_46010[(17)]);
var inst_45906 = (state_46010[(2)]);
var inst_45907 = (inst_45891 + (1));
var tmp46049 = inst_45888;
var tmp46050 = inst_45890;
var tmp46051 = inst_45889;
var inst_45888__$1 = tmp46049;
var inst_45889__$1 = tmp46051;
var inst_45890__$1 = tmp46050;
var inst_45891__$1 = inst_45907;
var state_46010__$1 = (function (){var statearr_46065 = state_46010;
(statearr_46065[(14)] = inst_45891__$1);

(statearr_46065[(18)] = inst_45906);

(statearr_46065[(15)] = inst_45888__$1);

(statearr_46065[(16)] = inst_45890__$1);

(statearr_46065[(17)] = inst_45889__$1);

return statearr_46065;
})();
var statearr_46066_47418 = state_46010__$1;
(statearr_46066_47418[(2)] = null);

(statearr_46066_47418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46011 === (21))){
var inst_45934 = (state_46010[(2)]);
var state_46010__$1 = state_46010;
var statearr_46070_47419 = state_46010__$1;
(statearr_46070_47419[(2)] = inst_45934);

(statearr_46070_47419[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46011 === (31))){
var inst_45960 = (state_46010[(9)]);
var inst_45964 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45960);
var state_46010__$1 = state_46010;
var statearr_46075_47420 = state_46010__$1;
(statearr_46075_47420[(2)] = inst_45964);

(statearr_46075_47420[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46011 === (32))){
var inst_45954 = (state_46010[(19)]);
var inst_45953 = (state_46010[(10)]);
var inst_45952 = (state_46010[(20)]);
var inst_45955 = (state_46010[(12)]);
var inst_45966 = (state_46010[(2)]);
var inst_45967 = (inst_45955 + (1));
var tmp46067 = inst_45954;
var tmp46068 = inst_45953;
var tmp46069 = inst_45952;
var inst_45952__$1 = tmp46069;
var inst_45953__$1 = tmp46068;
var inst_45954__$1 = tmp46067;
var inst_45955__$1 = inst_45967;
var state_46010__$1 = (function (){var statearr_46077 = state_46010;
(statearr_46077[(21)] = inst_45966);

(statearr_46077[(19)] = inst_45954__$1);

(statearr_46077[(10)] = inst_45953__$1);

(statearr_46077[(20)] = inst_45952__$1);

(statearr_46077[(12)] = inst_45955__$1);

return statearr_46077;
})();
var statearr_46080_47423 = state_46010__$1;
(statearr_46080_47423[(2)] = null);

(statearr_46080_47423[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46011 === (40))){
var inst_45979 = (state_46010[(22)]);
var inst_45983 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45979);
var state_46010__$1 = state_46010;
var statearr_46081_47427 = state_46010__$1;
(statearr_46081_47427[(2)] = inst_45983);

(statearr_46081_47427[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46011 === (33))){
var inst_45970 = (state_46010[(23)]);
var inst_45972 = cljs.core.chunked_seq_QMARK_(inst_45970);
var state_46010__$1 = state_46010;
if(inst_45972){
var statearr_46082_47430 = state_46010__$1;
(statearr_46082_47430[(1)] = (36));

} else {
var statearr_46083_47431 = state_46010__$1;
(statearr_46083_47431[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46011 === (13))){
var inst_45900 = (state_46010[(24)]);
var inst_45903 = cljs.core.async.close_BANG_(inst_45900);
var state_46010__$1 = state_46010;
var statearr_46084_47432 = state_46010__$1;
(statearr_46084_47432[(2)] = inst_45903);

(statearr_46084_47432[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46011 === (22))){
var inst_45924 = (state_46010[(8)]);
var inst_45927 = cljs.core.async.close_BANG_(inst_45924);
var state_46010__$1 = state_46010;
var statearr_46089_47434 = state_46010__$1;
(statearr_46089_47434[(2)] = inst_45927);

(statearr_46089_47434[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46011 === (36))){
var inst_45970 = (state_46010[(23)]);
var inst_45974 = cljs.core.chunk_first(inst_45970);
var inst_45975 = cljs.core.chunk_rest(inst_45970);
var inst_45976 = cljs.core.count(inst_45974);
var inst_45952 = inst_45975;
var inst_45953 = inst_45974;
var inst_45954 = inst_45976;
var inst_45955 = (0);
var state_46010__$1 = (function (){var statearr_46094 = state_46010;
(statearr_46094[(19)] = inst_45954);

(statearr_46094[(10)] = inst_45953);

(statearr_46094[(20)] = inst_45952);

(statearr_46094[(12)] = inst_45955);

return statearr_46094;
})();
var statearr_46097_47435 = state_46010__$1;
(statearr_46097_47435[(2)] = null);

(statearr_46097_47435[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46011 === (41))){
var inst_45970 = (state_46010[(23)]);
var inst_45985 = (state_46010[(2)]);
var inst_45986 = cljs.core.next(inst_45970);
var inst_45952 = inst_45986;
var inst_45953 = null;
var inst_45954 = (0);
var inst_45955 = (0);
var state_46010__$1 = (function (){var statearr_46107 = state_46010;
(statearr_46107[(25)] = inst_45985);

(statearr_46107[(19)] = inst_45954);

(statearr_46107[(10)] = inst_45953);

(statearr_46107[(20)] = inst_45952);

(statearr_46107[(12)] = inst_45955);

return statearr_46107;
})();
var statearr_46108_47436 = state_46010__$1;
(statearr_46108_47436[(2)] = null);

(statearr_46108_47436[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46011 === (43))){
var state_46010__$1 = state_46010;
var statearr_46113_47437 = state_46010__$1;
(statearr_46113_47437[(2)] = null);

(statearr_46113_47437[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46011 === (29))){
var inst_45994 = (state_46010[(2)]);
var state_46010__$1 = state_46010;
var statearr_46117_47438 = state_46010__$1;
(statearr_46117_47438[(2)] = inst_45994);

(statearr_46117_47438[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46011 === (44))){
var inst_46003 = (state_46010[(2)]);
var state_46010__$1 = (function (){var statearr_46121 = state_46010;
(statearr_46121[(26)] = inst_46003);

return statearr_46121;
})();
var statearr_46122_47439 = state_46010__$1;
(statearr_46122_47439[(2)] = null);

(statearr_46122_47439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46011 === (6))){
var inst_45944 = (state_46010[(27)]);
var inst_45943 = cljs.core.deref(cs);
var inst_45944__$1 = cljs.core.keys(inst_45943);
var inst_45945 = cljs.core.count(inst_45944__$1);
var inst_45946 = cljs.core.reset_BANG_(dctr,inst_45945);
var inst_45951 = cljs.core.seq(inst_45944__$1);
var inst_45952 = inst_45951;
var inst_45953 = null;
var inst_45954 = (0);
var inst_45955 = (0);
var state_46010__$1 = (function (){var statearr_46126 = state_46010;
(statearr_46126[(28)] = inst_45946);

(statearr_46126[(19)] = inst_45954);

(statearr_46126[(27)] = inst_45944__$1);

(statearr_46126[(10)] = inst_45953);

(statearr_46126[(20)] = inst_45952);

(statearr_46126[(12)] = inst_45955);

return statearr_46126;
})();
var statearr_46128_47440 = state_46010__$1;
(statearr_46128_47440[(2)] = null);

(statearr_46128_47440[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46011 === (28))){
var inst_45970 = (state_46010[(23)]);
var inst_45952 = (state_46010[(20)]);
var inst_45970__$1 = cljs.core.seq(inst_45952);
var state_46010__$1 = (function (){var statearr_46131 = state_46010;
(statearr_46131[(23)] = inst_45970__$1);

return statearr_46131;
})();
if(inst_45970__$1){
var statearr_46133_47441 = state_46010__$1;
(statearr_46133_47441[(1)] = (33));

} else {
var statearr_46136_47442 = state_46010__$1;
(statearr_46136_47442[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46011 === (25))){
var inst_45954 = (state_46010[(19)]);
var inst_45955 = (state_46010[(12)]);
var inst_45957 = (inst_45955 < inst_45954);
var inst_45958 = inst_45957;
var state_46010__$1 = state_46010;
if(cljs.core.truth_(inst_45958)){
var statearr_46138_47443 = state_46010__$1;
(statearr_46138_47443[(1)] = (27));

} else {
var statearr_46139_47444 = state_46010__$1;
(statearr_46139_47444[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46011 === (34))){
var state_46010__$1 = state_46010;
var statearr_46154_47445 = state_46010__$1;
(statearr_46154_47445[(2)] = null);

(statearr_46154_47445[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46011 === (17))){
var state_46010__$1 = state_46010;
var statearr_46158_47447 = state_46010__$1;
(statearr_46158_47447[(2)] = null);

(statearr_46158_47447[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46011 === (3))){
var inst_46008 = (state_46010[(2)]);
var state_46010__$1 = state_46010;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46010__$1,inst_46008);
} else {
if((state_val_46011 === (12))){
var inst_45939 = (state_46010[(2)]);
var state_46010__$1 = state_46010;
var statearr_46162_47451 = state_46010__$1;
(statearr_46162_47451[(2)] = inst_45939);

(statearr_46162_47451[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46011 === (2))){
var state_46010__$1 = state_46010;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46010__$1,(4),ch);
} else {
if((state_val_46011 === (23))){
var state_46010__$1 = state_46010;
var statearr_46169_47452 = state_46010__$1;
(statearr_46169_47452[(2)] = null);

(statearr_46169_47452[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46011 === (35))){
var inst_45992 = (state_46010[(2)]);
var state_46010__$1 = state_46010;
var statearr_46173_47453 = state_46010__$1;
(statearr_46173_47453[(2)] = inst_45992);

(statearr_46173_47453[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46011 === (19))){
var inst_45910 = (state_46010[(7)]);
var inst_45914 = cljs.core.chunk_first(inst_45910);
var inst_45915 = cljs.core.chunk_rest(inst_45910);
var inst_45916 = cljs.core.count(inst_45914);
var inst_45888 = inst_45915;
var inst_45889 = inst_45914;
var inst_45890 = inst_45916;
var inst_45891 = (0);
var state_46010__$1 = (function (){var statearr_46177 = state_46010;
(statearr_46177[(14)] = inst_45891);

(statearr_46177[(15)] = inst_45888);

(statearr_46177[(16)] = inst_45890);

(statearr_46177[(17)] = inst_45889);

return statearr_46177;
})();
var statearr_46178_47454 = state_46010__$1;
(statearr_46178_47454[(2)] = null);

(statearr_46178_47454[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46011 === (11))){
var inst_45910 = (state_46010[(7)]);
var inst_45888 = (state_46010[(15)]);
var inst_45910__$1 = cljs.core.seq(inst_45888);
var state_46010__$1 = (function (){var statearr_46183 = state_46010;
(statearr_46183[(7)] = inst_45910__$1);

return statearr_46183;
})();
if(inst_45910__$1){
var statearr_46184_47455 = state_46010__$1;
(statearr_46184_47455[(1)] = (16));

} else {
var statearr_46185_47456 = state_46010__$1;
(statearr_46185_47456[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46011 === (9))){
var inst_45941 = (state_46010[(2)]);
var state_46010__$1 = state_46010;
var statearr_46189_47457 = state_46010__$1;
(statearr_46189_47457[(2)] = inst_45941);

(statearr_46189_47457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46011 === (5))){
var inst_45886 = cljs.core.deref(cs);
var inst_45887 = cljs.core.seq(inst_45886);
var inst_45888 = inst_45887;
var inst_45889 = null;
var inst_45890 = (0);
var inst_45891 = (0);
var state_46010__$1 = (function (){var statearr_46193 = state_46010;
(statearr_46193[(14)] = inst_45891);

(statearr_46193[(15)] = inst_45888);

(statearr_46193[(16)] = inst_45890);

(statearr_46193[(17)] = inst_45889);

return statearr_46193;
})();
var statearr_46197_47458 = state_46010__$1;
(statearr_46197_47458[(2)] = null);

(statearr_46197_47458[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46011 === (14))){
var state_46010__$1 = state_46010;
var statearr_46198_47459 = state_46010__$1;
(statearr_46198_47459[(2)] = null);

(statearr_46198_47459[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46011 === (45))){
var inst_46000 = (state_46010[(2)]);
var state_46010__$1 = state_46010;
var statearr_46203_47460 = state_46010__$1;
(statearr_46203_47460[(2)] = inst_46000);

(statearr_46203_47460[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46011 === (26))){
var inst_45944 = (state_46010[(27)]);
var inst_45996 = (state_46010[(2)]);
var inst_45997 = cljs.core.seq(inst_45944);
var state_46010__$1 = (function (){var statearr_46210 = state_46010;
(statearr_46210[(29)] = inst_45996);

return statearr_46210;
})();
if(inst_45997){
var statearr_46211_47461 = state_46010__$1;
(statearr_46211_47461[(1)] = (42));

} else {
var statearr_46212_47462 = state_46010__$1;
(statearr_46212_47462[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46011 === (16))){
var inst_45910 = (state_46010[(7)]);
var inst_45912 = cljs.core.chunked_seq_QMARK_(inst_45910);
var state_46010__$1 = state_46010;
if(inst_45912){
var statearr_46213_47463 = state_46010__$1;
(statearr_46213_47463[(1)] = (19));

} else {
var statearr_46216_47464 = state_46010__$1;
(statearr_46216_47464[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46011 === (38))){
var inst_45989 = (state_46010[(2)]);
var state_46010__$1 = state_46010;
var statearr_46221_47465 = state_46010__$1;
(statearr_46221_47465[(2)] = inst_45989);

(statearr_46221_47465[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46011 === (30))){
var state_46010__$1 = state_46010;
var statearr_46222_47466 = state_46010__$1;
(statearr_46222_47466[(2)] = null);

(statearr_46222_47466[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46011 === (10))){
var inst_45891 = (state_46010[(14)]);
var inst_45889 = (state_46010[(17)]);
var inst_45899 = cljs.core._nth(inst_45889,inst_45891);
var inst_45900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45899,(0),null);
var inst_45901 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45899,(1),null);
var state_46010__$1 = (function (){var statearr_46226 = state_46010;
(statearr_46226[(24)] = inst_45900);

return statearr_46226;
})();
if(cljs.core.truth_(inst_45901)){
var statearr_46228_47467 = state_46010__$1;
(statearr_46228_47467[(1)] = (13));

} else {
var statearr_46231_47468 = state_46010__$1;
(statearr_46231_47468[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46011 === (18))){
var inst_45937 = (state_46010[(2)]);
var state_46010__$1 = state_46010;
var statearr_46233_47469 = state_46010__$1;
(statearr_46233_47469[(2)] = inst_45937);

(statearr_46233_47469[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46011 === (42))){
var state_46010__$1 = state_46010;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46010__$1,(45),dchan);
} else {
if((state_val_46011 === (37))){
var inst_45970 = (state_46010[(23)]);
var inst_45979 = (state_46010[(22)]);
var inst_45879 = (state_46010[(11)]);
var inst_45979__$1 = cljs.core.first(inst_45970);
var inst_45980 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45979__$1,inst_45879,done);
var state_46010__$1 = (function (){var statearr_46240 = state_46010;
(statearr_46240[(22)] = inst_45979__$1);

return statearr_46240;
})();
if(cljs.core.truth_(inst_45980)){
var statearr_46243_47470 = state_46010__$1;
(statearr_46243_47470[(1)] = (39));

} else {
var statearr_46244_47471 = state_46010__$1;
(statearr_46244_47471[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46011 === (8))){
var inst_45891 = (state_46010[(14)]);
var inst_45890 = (state_46010[(16)]);
var inst_45893 = (inst_45891 < inst_45890);
var inst_45894 = inst_45893;
var state_46010__$1 = state_46010;
if(cljs.core.truth_(inst_45894)){
var statearr_46249_47472 = state_46010__$1;
(statearr_46249_47472[(1)] = (10));

} else {
var statearr_46250_47473 = state_46010__$1;
(statearr_46250_47473[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__44931__auto__ = null;
var cljs$core$async$mult_$_state_machine__44931__auto____0 = (function (){
var statearr_46257 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46257[(0)] = cljs$core$async$mult_$_state_machine__44931__auto__);

(statearr_46257[(1)] = (1));

return statearr_46257;
});
var cljs$core$async$mult_$_state_machine__44931__auto____1 = (function (state_46010){
while(true){
var ret_value__44932__auto__ = (function (){try{while(true){
var result__44933__auto__ = switch__44930__auto__(state_46010);
if(cljs.core.keyword_identical_QMARK_(result__44933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44933__auto__;
}
break;
}
}catch (e46259){var ex__44934__auto__ = e46259;
var statearr_46262_47474 = state_46010;
(statearr_46262_47474[(2)] = ex__44934__auto__);


if(cljs.core.seq((state_46010[(4)]))){
var statearr_46265_47475 = state_46010;
(statearr_46265_47475[(1)] = cljs.core.first((state_46010[(4)])));

} else {
throw ex__44934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47476 = state_46010;
state_46010 = G__47476;
continue;
} else {
return ret_value__44932__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__44931__auto__ = function(state_46010){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__44931__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__44931__auto____1.call(this,state_46010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__44931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__44931__auto____0;
cljs$core$async$mult_$_state_machine__44931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__44931__auto____1;
return cljs$core$async$mult_$_state_machine__44931__auto__;
})()
})();
var state__45135__auto__ = (function (){var statearr_46270 = f__45134__auto__();
(statearr_46270[(6)] = c__45133__auto___47407);

return statearr_46270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45135__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__46274 = arguments.length;
switch (G__46274) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_47482 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_47482(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_47490 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_47490(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_47497 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_47497(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_47498 = (function (m,state_map){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4522__auto__.call(null,m,state_map));
} else {
var m__4519__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4519__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_47498(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_47499 = (function (m,mode){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4522__auto__.call(null,m,mode));
} else {
var m__4519__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4519__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_47499(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___47500 = arguments.length;
var i__4830__auto___47501 = (0);
while(true){
if((i__4830__auto___47501 < len__4829__auto___47500)){
args__4835__auto__.push((arguments[i__4830__auto___47501]));

var G__47502 = (i__4830__auto___47501 + (1));
i__4830__auto___47501 = G__47502;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__46305){
var map__46306 = p__46305;
var map__46306__$1 = cljs.core.__destructure_map(map__46306);
var opts = map__46306__$1;
var statearr_46307_47503 = state;
(statearr_46307_47503[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_46308_47504 = state;
(statearr_46308_47504[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_46309_47505 = state;
(statearr_46309_47505[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq46301){
var G__46302 = cljs.core.first(seq46301);
var seq46301__$1 = cljs.core.next(seq46301);
var G__46303 = cljs.core.first(seq46301__$1);
var seq46301__$2 = cljs.core.next(seq46301__$1);
var G__46304 = cljs.core.first(seq46301__$2);
var seq46301__$3 = cljs.core.next(seq46301__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46302,G__46303,G__46304,seq46301__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46310 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46310 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta46311){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta46311 = meta46311;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46312,meta46311__$1){
var self__ = this;
var _46312__$1 = this;
return (new cljs.core.async.t_cljs$core$async46310(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta46311__$1));
}));

(cljs.core.async.t_cljs$core$async46310.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46312){
var self__ = this;
var _46312__$1 = this;
return self__.meta46311;
}));

(cljs.core.async.t_cljs$core$async46310.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46310.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async46310.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46310.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46310.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46310.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46310.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46310.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46310.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta46311","meta46311",-159915992,null)], null);
}));

(cljs.core.async.t_cljs$core$async46310.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46310.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46310");

(cljs.core.async.t_cljs$core$async46310.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async46310");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46310.
 */
cljs.core.async.__GT_t_cljs$core$async46310 = (function cljs$core$async$mix_$___GT_t_cljs$core$async46310(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46311){
return (new cljs.core.async.t_cljs$core$async46310(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46311));
});

}

return (new cljs.core.async.t_cljs$core$async46310(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45133__auto___47512 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45134__auto__ = (function (){var switch__44930__auto__ = (function (state_46380){
var state_val_46381 = (state_46380[(1)]);
if((state_val_46381 === (7))){
var inst_46340 = (state_46380[(2)]);
var state_46380__$1 = state_46380;
if(cljs.core.truth_(inst_46340)){
var statearr_46382_47513 = state_46380__$1;
(statearr_46382_47513[(1)] = (8));

} else {
var statearr_46383_47514 = state_46380__$1;
(statearr_46383_47514[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46381 === (20))){
var inst_46333 = (state_46380[(7)]);
var state_46380__$1 = state_46380;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46380__$1,(23),out,inst_46333);
} else {
if((state_val_46381 === (1))){
var inst_46316 = calc_state();
var inst_46317 = cljs.core.__destructure_map(inst_46316);
var inst_46318 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46317,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46319 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46317,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46320 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46317,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_46321 = inst_46316;
var state_46380__$1 = (function (){var statearr_46384 = state_46380;
(statearr_46384[(8)] = inst_46321);

(statearr_46384[(9)] = inst_46318);

(statearr_46384[(10)] = inst_46319);

(statearr_46384[(11)] = inst_46320);

return statearr_46384;
})();
var statearr_46385_47515 = state_46380__$1;
(statearr_46385_47515[(2)] = null);

(statearr_46385_47515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46381 === (24))){
var inst_46324 = (state_46380[(12)]);
var inst_46321 = inst_46324;
var state_46380__$1 = (function (){var statearr_46386 = state_46380;
(statearr_46386[(8)] = inst_46321);

return statearr_46386;
})();
var statearr_46387_47516 = state_46380__$1;
(statearr_46387_47516[(2)] = null);

(statearr_46387_47516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46381 === (4))){
var inst_46335 = (state_46380[(13)]);
var inst_46333 = (state_46380[(7)]);
var inst_46332 = (state_46380[(2)]);
var inst_46333__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46332,(0),null);
var inst_46334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46332,(1),null);
var inst_46335__$1 = (inst_46333__$1 == null);
var state_46380__$1 = (function (){var statearr_46388 = state_46380;
(statearr_46388[(13)] = inst_46335__$1);

(statearr_46388[(14)] = inst_46334);

(statearr_46388[(7)] = inst_46333__$1);

return statearr_46388;
})();
if(cljs.core.truth_(inst_46335__$1)){
var statearr_46389_47517 = state_46380__$1;
(statearr_46389_47517[(1)] = (5));

} else {
var statearr_46390_47518 = state_46380__$1;
(statearr_46390_47518[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46381 === (15))){
var inst_46354 = (state_46380[(15)]);
var inst_46325 = (state_46380[(16)]);
var inst_46354__$1 = cljs.core.empty_QMARK_(inst_46325);
var state_46380__$1 = (function (){var statearr_46391 = state_46380;
(statearr_46391[(15)] = inst_46354__$1);

return statearr_46391;
})();
if(inst_46354__$1){
var statearr_46392_47519 = state_46380__$1;
(statearr_46392_47519[(1)] = (17));

} else {
var statearr_46393_47520 = state_46380__$1;
(statearr_46393_47520[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46381 === (21))){
var inst_46324 = (state_46380[(12)]);
var inst_46321 = inst_46324;
var state_46380__$1 = (function (){var statearr_46394 = state_46380;
(statearr_46394[(8)] = inst_46321);

return statearr_46394;
})();
var statearr_46395_47521 = state_46380__$1;
(statearr_46395_47521[(2)] = null);

(statearr_46395_47521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46381 === (13))){
var inst_46347 = (state_46380[(2)]);
var inst_46348 = calc_state();
var inst_46321 = inst_46348;
var state_46380__$1 = (function (){var statearr_46396 = state_46380;
(statearr_46396[(8)] = inst_46321);

(statearr_46396[(17)] = inst_46347);

return statearr_46396;
})();
var statearr_46397_47522 = state_46380__$1;
(statearr_46397_47522[(2)] = null);

(statearr_46397_47522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46381 === (22))){
var inst_46374 = (state_46380[(2)]);
var state_46380__$1 = state_46380;
var statearr_46398_47523 = state_46380__$1;
(statearr_46398_47523[(2)] = inst_46374);

(statearr_46398_47523[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46381 === (6))){
var inst_46334 = (state_46380[(14)]);
var inst_46338 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46334,change);
var state_46380__$1 = state_46380;
var statearr_46399_47524 = state_46380__$1;
(statearr_46399_47524[(2)] = inst_46338);

(statearr_46399_47524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46381 === (25))){
var state_46380__$1 = state_46380;
var statearr_46400_47525 = state_46380__$1;
(statearr_46400_47525[(2)] = null);

(statearr_46400_47525[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46381 === (17))){
var inst_46334 = (state_46380[(14)]);
var inst_46326 = (state_46380[(18)]);
var inst_46356 = (inst_46326.cljs$core$IFn$_invoke$arity$1 ? inst_46326.cljs$core$IFn$_invoke$arity$1(inst_46334) : inst_46326.call(null,inst_46334));
var inst_46357 = cljs.core.not(inst_46356);
var state_46380__$1 = state_46380;
var statearr_46401_47526 = state_46380__$1;
(statearr_46401_47526[(2)] = inst_46357);

(statearr_46401_47526[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46381 === (3))){
var inst_46378 = (state_46380[(2)]);
var state_46380__$1 = state_46380;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46380__$1,inst_46378);
} else {
if((state_val_46381 === (12))){
var state_46380__$1 = state_46380;
var statearr_46402_47527 = state_46380__$1;
(statearr_46402_47527[(2)] = null);

(statearr_46402_47527[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46381 === (2))){
var inst_46321 = (state_46380[(8)]);
var inst_46324 = (state_46380[(12)]);
var inst_46324__$1 = cljs.core.__destructure_map(inst_46321);
var inst_46325 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46324__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46326 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46324__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46327 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46324__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46380__$1 = (function (){var statearr_46403 = state_46380;
(statearr_46403[(16)] = inst_46325);

(statearr_46403[(12)] = inst_46324__$1);

(statearr_46403[(18)] = inst_46326);

return statearr_46403;
})();
return cljs.core.async.ioc_alts_BANG_(state_46380__$1,(4),inst_46327);
} else {
if((state_val_46381 === (23))){
var inst_46365 = (state_46380[(2)]);
var state_46380__$1 = state_46380;
if(cljs.core.truth_(inst_46365)){
var statearr_46404_47528 = state_46380__$1;
(statearr_46404_47528[(1)] = (24));

} else {
var statearr_46405_47529 = state_46380__$1;
(statearr_46405_47529[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46381 === (19))){
var inst_46360 = (state_46380[(2)]);
var state_46380__$1 = state_46380;
var statearr_46406_47530 = state_46380__$1;
(statearr_46406_47530[(2)] = inst_46360);

(statearr_46406_47530[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46381 === (11))){
var inst_46334 = (state_46380[(14)]);
var inst_46344 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_46334);
var state_46380__$1 = state_46380;
var statearr_46407_47531 = state_46380__$1;
(statearr_46407_47531[(2)] = inst_46344);

(statearr_46407_47531[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46381 === (9))){
var inst_46325 = (state_46380[(16)]);
var inst_46334 = (state_46380[(14)]);
var inst_46351 = (state_46380[(19)]);
var inst_46351__$1 = (inst_46325.cljs$core$IFn$_invoke$arity$1 ? inst_46325.cljs$core$IFn$_invoke$arity$1(inst_46334) : inst_46325.call(null,inst_46334));
var state_46380__$1 = (function (){var statearr_46408 = state_46380;
(statearr_46408[(19)] = inst_46351__$1);

return statearr_46408;
})();
if(cljs.core.truth_(inst_46351__$1)){
var statearr_46409_47532 = state_46380__$1;
(statearr_46409_47532[(1)] = (14));

} else {
var statearr_46410_47533 = state_46380__$1;
(statearr_46410_47533[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46381 === (5))){
var inst_46335 = (state_46380[(13)]);
var state_46380__$1 = state_46380;
var statearr_46411_47534 = state_46380__$1;
(statearr_46411_47534[(2)] = inst_46335);

(statearr_46411_47534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46381 === (14))){
var inst_46351 = (state_46380[(19)]);
var state_46380__$1 = state_46380;
var statearr_46412_47535 = state_46380__$1;
(statearr_46412_47535[(2)] = inst_46351);

(statearr_46412_47535[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46381 === (26))){
var inst_46370 = (state_46380[(2)]);
var state_46380__$1 = state_46380;
var statearr_46413_47536 = state_46380__$1;
(statearr_46413_47536[(2)] = inst_46370);

(statearr_46413_47536[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46381 === (16))){
var inst_46362 = (state_46380[(2)]);
var state_46380__$1 = state_46380;
if(cljs.core.truth_(inst_46362)){
var statearr_46414_47537 = state_46380__$1;
(statearr_46414_47537[(1)] = (20));

} else {
var statearr_46415_47538 = state_46380__$1;
(statearr_46415_47538[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46381 === (10))){
var inst_46376 = (state_46380[(2)]);
var state_46380__$1 = state_46380;
var statearr_46416_47539 = state_46380__$1;
(statearr_46416_47539[(2)] = inst_46376);

(statearr_46416_47539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46381 === (18))){
var inst_46354 = (state_46380[(15)]);
var state_46380__$1 = state_46380;
var statearr_46417_47540 = state_46380__$1;
(statearr_46417_47540[(2)] = inst_46354);

(statearr_46417_47540[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46381 === (8))){
var inst_46333 = (state_46380[(7)]);
var inst_46342 = (inst_46333 == null);
var state_46380__$1 = state_46380;
if(cljs.core.truth_(inst_46342)){
var statearr_46418_47541 = state_46380__$1;
(statearr_46418_47541[(1)] = (11));

} else {
var statearr_46419_47542 = state_46380__$1;
(statearr_46419_47542[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__44931__auto__ = null;
var cljs$core$async$mix_$_state_machine__44931__auto____0 = (function (){
var statearr_46420 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46420[(0)] = cljs$core$async$mix_$_state_machine__44931__auto__);

(statearr_46420[(1)] = (1));

return statearr_46420;
});
var cljs$core$async$mix_$_state_machine__44931__auto____1 = (function (state_46380){
while(true){
var ret_value__44932__auto__ = (function (){try{while(true){
var result__44933__auto__ = switch__44930__auto__(state_46380);
if(cljs.core.keyword_identical_QMARK_(result__44933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44933__auto__;
}
break;
}
}catch (e46421){var ex__44934__auto__ = e46421;
var statearr_46422_47543 = state_46380;
(statearr_46422_47543[(2)] = ex__44934__auto__);


if(cljs.core.seq((state_46380[(4)]))){
var statearr_46423_47544 = state_46380;
(statearr_46423_47544[(1)] = cljs.core.first((state_46380[(4)])));

} else {
throw ex__44934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47545 = state_46380;
state_46380 = G__47545;
continue;
} else {
return ret_value__44932__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__44931__auto__ = function(state_46380){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__44931__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__44931__auto____1.call(this,state_46380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__44931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__44931__auto____0;
cljs$core$async$mix_$_state_machine__44931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__44931__auto____1;
return cljs$core$async$mix_$_state_machine__44931__auto__;
})()
})();
var state__45135__auto__ = (function (){var statearr_46424 = f__45134__auto__();
(statearr_46424[(6)] = c__45133__auto___47512);

return statearr_46424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45135__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_47546 = (function (p,v,ch,close_QMARK_){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4522__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4519__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_47546(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_47553 = (function (p,v,ch){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4522__auto__.call(null,p,v,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4519__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_47553(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_47554 = (function() {
var G__47555 = null;
var G__47555__1 = (function (p){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4522__auto__.call(null,p));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4519__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__47555__2 = (function (p,v){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4522__auto__.call(null,p,v));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4519__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__47555 = function(p,v){
switch(arguments.length){
case 1:
return G__47555__1.call(this,p);
case 2:
return G__47555__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47555.cljs$core$IFn$_invoke$arity$1 = G__47555__1;
G__47555.cljs$core$IFn$_invoke$arity$2 = G__47555__2;
return G__47555;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__46426 = arguments.length;
switch (G__46426) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_47554(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_47554(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__46429 = arguments.length;
switch (G__46429) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__46427_SHARP_){
if(cljs.core.truth_((p1__46427_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__46427_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__46427_SHARP_.call(null,topic)))){
return p1__46427_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__46427_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46430 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46430 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46431){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46431 = meta46431;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46432,meta46431__$1){
var self__ = this;
var _46432__$1 = this;
return (new cljs.core.async.t_cljs$core$async46430(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46431__$1));
}));

(cljs.core.async.t_cljs$core$async46430.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46432){
var self__ = this;
var _46432__$1 = this;
return self__.meta46431;
}));

(cljs.core.async.t_cljs$core$async46430.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46430.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46430.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46430.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async46430.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async46430.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async46430.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async46430.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46431","meta46431",-1349869672,null)], null);
}));

(cljs.core.async.t_cljs$core$async46430.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46430.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46430");

(cljs.core.async.t_cljs$core$async46430.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async46430");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46430.
 */
cljs.core.async.__GT_t_cljs$core$async46430 = (function cljs$core$async$__GT_t_cljs$core$async46430(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46431){
return (new cljs.core.async.t_cljs$core$async46430(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46431));
});

}

return (new cljs.core.async.t_cljs$core$async46430(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45133__auto___47564 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45134__auto__ = (function (){var switch__44930__auto__ = (function (state_46504){
var state_val_46505 = (state_46504[(1)]);
if((state_val_46505 === (7))){
var inst_46500 = (state_46504[(2)]);
var state_46504__$1 = state_46504;
var statearr_46506_47565 = state_46504__$1;
(statearr_46506_47565[(2)] = inst_46500);

(statearr_46506_47565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46505 === (20))){
var state_46504__$1 = state_46504;
var statearr_46507_47566 = state_46504__$1;
(statearr_46507_47566[(2)] = null);

(statearr_46507_47566[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46505 === (1))){
var state_46504__$1 = state_46504;
var statearr_46508_47567 = state_46504__$1;
(statearr_46508_47567[(2)] = null);

(statearr_46508_47567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46505 === (24))){
var inst_46483 = (state_46504[(7)]);
var inst_46492 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_46483);
var state_46504__$1 = state_46504;
var statearr_46509_47568 = state_46504__$1;
(statearr_46509_47568[(2)] = inst_46492);

(statearr_46509_47568[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46505 === (4))){
var inst_46435 = (state_46504[(8)]);
var inst_46435__$1 = (state_46504[(2)]);
var inst_46436 = (inst_46435__$1 == null);
var state_46504__$1 = (function (){var statearr_46510 = state_46504;
(statearr_46510[(8)] = inst_46435__$1);

return statearr_46510;
})();
if(cljs.core.truth_(inst_46436)){
var statearr_46511_47569 = state_46504__$1;
(statearr_46511_47569[(1)] = (5));

} else {
var statearr_46512_47570 = state_46504__$1;
(statearr_46512_47570[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46505 === (15))){
var inst_46477 = (state_46504[(2)]);
var state_46504__$1 = state_46504;
var statearr_46513_47571 = state_46504__$1;
(statearr_46513_47571[(2)] = inst_46477);

(statearr_46513_47571[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46505 === (21))){
var inst_46497 = (state_46504[(2)]);
var state_46504__$1 = (function (){var statearr_46514 = state_46504;
(statearr_46514[(9)] = inst_46497);

return statearr_46514;
})();
var statearr_46515_47572 = state_46504__$1;
(statearr_46515_47572[(2)] = null);

(statearr_46515_47572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46505 === (13))){
var inst_46459 = (state_46504[(10)]);
var inst_46461 = cljs.core.chunked_seq_QMARK_(inst_46459);
var state_46504__$1 = state_46504;
if(inst_46461){
var statearr_46516_47573 = state_46504__$1;
(statearr_46516_47573[(1)] = (16));

} else {
var statearr_46517_47574 = state_46504__$1;
(statearr_46517_47574[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46505 === (22))){
var inst_46489 = (state_46504[(2)]);
var state_46504__$1 = state_46504;
if(cljs.core.truth_(inst_46489)){
var statearr_46518_47575 = state_46504__$1;
(statearr_46518_47575[(1)] = (23));

} else {
var statearr_46519_47576 = state_46504__$1;
(statearr_46519_47576[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46505 === (6))){
var inst_46435 = (state_46504[(8)]);
var inst_46483 = (state_46504[(7)]);
var inst_46485 = (state_46504[(11)]);
var inst_46483__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_46435) : topic_fn.call(null,inst_46435));
var inst_46484 = cljs.core.deref(mults);
var inst_46485__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46484,inst_46483__$1);
var state_46504__$1 = (function (){var statearr_46520 = state_46504;
(statearr_46520[(7)] = inst_46483__$1);

(statearr_46520[(11)] = inst_46485__$1);

return statearr_46520;
})();
if(cljs.core.truth_(inst_46485__$1)){
var statearr_46521_47577 = state_46504__$1;
(statearr_46521_47577[(1)] = (19));

} else {
var statearr_46522_47578 = state_46504__$1;
(statearr_46522_47578[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46505 === (25))){
var inst_46494 = (state_46504[(2)]);
var state_46504__$1 = state_46504;
var statearr_46523_47579 = state_46504__$1;
(statearr_46523_47579[(2)] = inst_46494);

(statearr_46523_47579[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46505 === (17))){
var inst_46459 = (state_46504[(10)]);
var inst_46468 = cljs.core.first(inst_46459);
var inst_46469 = cljs.core.async.muxch_STAR_(inst_46468);
var inst_46470 = cljs.core.async.close_BANG_(inst_46469);
var inst_46471 = cljs.core.next(inst_46459);
var inst_46445 = inst_46471;
var inst_46446 = null;
var inst_46447 = (0);
var inst_46448 = (0);
var state_46504__$1 = (function (){var statearr_46524 = state_46504;
(statearr_46524[(12)] = inst_46445);

(statearr_46524[(13)] = inst_46447);

(statearr_46524[(14)] = inst_46446);

(statearr_46524[(15)] = inst_46470);

(statearr_46524[(16)] = inst_46448);

return statearr_46524;
})();
var statearr_46525_47580 = state_46504__$1;
(statearr_46525_47580[(2)] = null);

(statearr_46525_47580[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46505 === (3))){
var inst_46502 = (state_46504[(2)]);
var state_46504__$1 = state_46504;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46504__$1,inst_46502);
} else {
if((state_val_46505 === (12))){
var inst_46479 = (state_46504[(2)]);
var state_46504__$1 = state_46504;
var statearr_46526_47581 = state_46504__$1;
(statearr_46526_47581[(2)] = inst_46479);

(statearr_46526_47581[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46505 === (2))){
var state_46504__$1 = state_46504;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46504__$1,(4),ch);
} else {
if((state_val_46505 === (23))){
var state_46504__$1 = state_46504;
var statearr_46527_47582 = state_46504__$1;
(statearr_46527_47582[(2)] = null);

(statearr_46527_47582[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46505 === (19))){
var inst_46435 = (state_46504[(8)]);
var inst_46485 = (state_46504[(11)]);
var inst_46487 = cljs.core.async.muxch_STAR_(inst_46485);
var state_46504__$1 = state_46504;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46504__$1,(22),inst_46487,inst_46435);
} else {
if((state_val_46505 === (11))){
var inst_46445 = (state_46504[(12)]);
var inst_46459 = (state_46504[(10)]);
var inst_46459__$1 = cljs.core.seq(inst_46445);
var state_46504__$1 = (function (){var statearr_46528 = state_46504;
(statearr_46528[(10)] = inst_46459__$1);

return statearr_46528;
})();
if(inst_46459__$1){
var statearr_46529_47583 = state_46504__$1;
(statearr_46529_47583[(1)] = (13));

} else {
var statearr_46530_47584 = state_46504__$1;
(statearr_46530_47584[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46505 === (9))){
var inst_46481 = (state_46504[(2)]);
var state_46504__$1 = state_46504;
var statearr_46531_47585 = state_46504__$1;
(statearr_46531_47585[(2)] = inst_46481);

(statearr_46531_47585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46505 === (5))){
var inst_46442 = cljs.core.deref(mults);
var inst_46443 = cljs.core.vals(inst_46442);
var inst_46444 = cljs.core.seq(inst_46443);
var inst_46445 = inst_46444;
var inst_46446 = null;
var inst_46447 = (0);
var inst_46448 = (0);
var state_46504__$1 = (function (){var statearr_46532 = state_46504;
(statearr_46532[(12)] = inst_46445);

(statearr_46532[(13)] = inst_46447);

(statearr_46532[(14)] = inst_46446);

(statearr_46532[(16)] = inst_46448);

return statearr_46532;
})();
var statearr_46533_47586 = state_46504__$1;
(statearr_46533_47586[(2)] = null);

(statearr_46533_47586[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46505 === (14))){
var state_46504__$1 = state_46504;
var statearr_46537_47587 = state_46504__$1;
(statearr_46537_47587[(2)] = null);

(statearr_46537_47587[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46505 === (16))){
var inst_46459 = (state_46504[(10)]);
var inst_46463 = cljs.core.chunk_first(inst_46459);
var inst_46464 = cljs.core.chunk_rest(inst_46459);
var inst_46465 = cljs.core.count(inst_46463);
var inst_46445 = inst_46464;
var inst_46446 = inst_46463;
var inst_46447 = inst_46465;
var inst_46448 = (0);
var state_46504__$1 = (function (){var statearr_46538 = state_46504;
(statearr_46538[(12)] = inst_46445);

(statearr_46538[(13)] = inst_46447);

(statearr_46538[(14)] = inst_46446);

(statearr_46538[(16)] = inst_46448);

return statearr_46538;
})();
var statearr_46539_47588 = state_46504__$1;
(statearr_46539_47588[(2)] = null);

(statearr_46539_47588[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46505 === (10))){
var inst_46445 = (state_46504[(12)]);
var inst_46447 = (state_46504[(13)]);
var inst_46446 = (state_46504[(14)]);
var inst_46448 = (state_46504[(16)]);
var inst_46453 = cljs.core._nth(inst_46446,inst_46448);
var inst_46454 = cljs.core.async.muxch_STAR_(inst_46453);
var inst_46455 = cljs.core.async.close_BANG_(inst_46454);
var inst_46456 = (inst_46448 + (1));
var tmp46534 = inst_46445;
var tmp46535 = inst_46447;
var tmp46536 = inst_46446;
var inst_46445__$1 = tmp46534;
var inst_46446__$1 = tmp46536;
var inst_46447__$1 = tmp46535;
var inst_46448__$1 = inst_46456;
var state_46504__$1 = (function (){var statearr_46540 = state_46504;
(statearr_46540[(12)] = inst_46445__$1);

(statearr_46540[(13)] = inst_46447__$1);

(statearr_46540[(17)] = inst_46455);

(statearr_46540[(14)] = inst_46446__$1);

(statearr_46540[(16)] = inst_46448__$1);

return statearr_46540;
})();
var statearr_46541_47589 = state_46504__$1;
(statearr_46541_47589[(2)] = null);

(statearr_46541_47589[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46505 === (18))){
var inst_46474 = (state_46504[(2)]);
var state_46504__$1 = state_46504;
var statearr_46542_47590 = state_46504__$1;
(statearr_46542_47590[(2)] = inst_46474);

(statearr_46542_47590[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46505 === (8))){
var inst_46447 = (state_46504[(13)]);
var inst_46448 = (state_46504[(16)]);
var inst_46450 = (inst_46448 < inst_46447);
var inst_46451 = inst_46450;
var state_46504__$1 = state_46504;
if(cljs.core.truth_(inst_46451)){
var statearr_46543_47591 = state_46504__$1;
(statearr_46543_47591[(1)] = (10));

} else {
var statearr_46544_47592 = state_46504__$1;
(statearr_46544_47592[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44931__auto__ = null;
var cljs$core$async$state_machine__44931__auto____0 = (function (){
var statearr_46545 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46545[(0)] = cljs$core$async$state_machine__44931__auto__);

(statearr_46545[(1)] = (1));

return statearr_46545;
});
var cljs$core$async$state_machine__44931__auto____1 = (function (state_46504){
while(true){
var ret_value__44932__auto__ = (function (){try{while(true){
var result__44933__auto__ = switch__44930__auto__(state_46504);
if(cljs.core.keyword_identical_QMARK_(result__44933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44933__auto__;
}
break;
}
}catch (e46546){var ex__44934__auto__ = e46546;
var statearr_46547_47593 = state_46504;
(statearr_46547_47593[(2)] = ex__44934__auto__);


if(cljs.core.seq((state_46504[(4)]))){
var statearr_46548_47594 = state_46504;
(statearr_46548_47594[(1)] = cljs.core.first((state_46504[(4)])));

} else {
throw ex__44934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47595 = state_46504;
state_46504 = G__47595;
continue;
} else {
return ret_value__44932__auto__;
}
break;
}
});
cljs$core$async$state_machine__44931__auto__ = function(state_46504){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44931__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44931__auto____1.call(this,state_46504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44931__auto____0;
cljs$core$async$state_machine__44931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44931__auto____1;
return cljs$core$async$state_machine__44931__auto__;
})()
})();
var state__45135__auto__ = (function (){var statearr_46549 = f__45134__auto__();
(statearr_46549[(6)] = c__45133__auto___47564);

return statearr_46549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45135__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__46551 = arguments.length;
switch (G__46551) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__46553 = arguments.length;
switch (G__46553) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__46555 = arguments.length;
switch (G__46555) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__45133__auto___47599 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45134__auto__ = (function (){var switch__44930__auto__ = (function (state_46598){
var state_val_46599 = (state_46598[(1)]);
if((state_val_46599 === (7))){
var state_46598__$1 = state_46598;
var statearr_46600_47600 = state_46598__$1;
(statearr_46600_47600[(2)] = null);

(statearr_46600_47600[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46599 === (1))){
var state_46598__$1 = state_46598;
var statearr_46601_47601 = state_46598__$1;
(statearr_46601_47601[(2)] = null);

(statearr_46601_47601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46599 === (4))){
var inst_46559 = (state_46598[(7)]);
var inst_46558 = (state_46598[(8)]);
var inst_46561 = (inst_46559 < inst_46558);
var state_46598__$1 = state_46598;
if(cljs.core.truth_(inst_46561)){
var statearr_46602_47602 = state_46598__$1;
(statearr_46602_47602[(1)] = (6));

} else {
var statearr_46603_47603 = state_46598__$1;
(statearr_46603_47603[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46599 === (15))){
var inst_46584 = (state_46598[(9)]);
var inst_46589 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_46584);
var state_46598__$1 = state_46598;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46598__$1,(17),out,inst_46589);
} else {
if((state_val_46599 === (13))){
var inst_46584 = (state_46598[(9)]);
var inst_46584__$1 = (state_46598[(2)]);
var inst_46585 = cljs.core.some(cljs.core.nil_QMARK_,inst_46584__$1);
var state_46598__$1 = (function (){var statearr_46604 = state_46598;
(statearr_46604[(9)] = inst_46584__$1);

return statearr_46604;
})();
if(cljs.core.truth_(inst_46585)){
var statearr_46605_47604 = state_46598__$1;
(statearr_46605_47604[(1)] = (14));

} else {
var statearr_46606_47605 = state_46598__$1;
(statearr_46606_47605[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46599 === (6))){
var state_46598__$1 = state_46598;
var statearr_46607_47606 = state_46598__$1;
(statearr_46607_47606[(2)] = null);

(statearr_46607_47606[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46599 === (17))){
var inst_46591 = (state_46598[(2)]);
var state_46598__$1 = (function (){var statearr_46609 = state_46598;
(statearr_46609[(10)] = inst_46591);

return statearr_46609;
})();
var statearr_46610_47607 = state_46598__$1;
(statearr_46610_47607[(2)] = null);

(statearr_46610_47607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46599 === (3))){
var inst_46596 = (state_46598[(2)]);
var state_46598__$1 = state_46598;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46598__$1,inst_46596);
} else {
if((state_val_46599 === (12))){
var _ = (function (){var statearr_46611 = state_46598;
(statearr_46611[(4)] = cljs.core.rest((state_46598[(4)])));

return statearr_46611;
})();
var state_46598__$1 = state_46598;
var ex46608 = (state_46598__$1[(2)]);
var statearr_46612_47608 = state_46598__$1;
(statearr_46612_47608[(5)] = ex46608);


if((ex46608 instanceof Object)){
var statearr_46613_47609 = state_46598__$1;
(statearr_46613_47609[(1)] = (11));

(statearr_46613_47609[(5)] = null);

} else {
throw ex46608;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46599 === (2))){
var inst_46557 = cljs.core.reset_BANG_(dctr,cnt);
var inst_46558 = cnt;
var inst_46559 = (0);
var state_46598__$1 = (function (){var statearr_46614 = state_46598;
(statearr_46614[(11)] = inst_46557);

(statearr_46614[(7)] = inst_46559);

(statearr_46614[(8)] = inst_46558);

return statearr_46614;
})();
var statearr_46615_47610 = state_46598__$1;
(statearr_46615_47610[(2)] = null);

(statearr_46615_47610[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46599 === (11))){
var inst_46563 = (state_46598[(2)]);
var inst_46564 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_46598__$1 = (function (){var statearr_46616 = state_46598;
(statearr_46616[(12)] = inst_46563);

return statearr_46616;
})();
var statearr_46617_47611 = state_46598__$1;
(statearr_46617_47611[(2)] = inst_46564);

(statearr_46617_47611[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46599 === (9))){
var inst_46559 = (state_46598[(7)]);
var _ = (function (){var statearr_46618 = state_46598;
(statearr_46618[(4)] = cljs.core.cons((12),(state_46598[(4)])));

return statearr_46618;
})();
var inst_46570 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_46559) : chs__$1.call(null,inst_46559));
var inst_46571 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_46559) : done.call(null,inst_46559));
var inst_46572 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_46570,inst_46571);
var ___$1 = (function (){var statearr_46619 = state_46598;
(statearr_46619[(4)] = cljs.core.rest((state_46598[(4)])));

return statearr_46619;
})();
var state_46598__$1 = state_46598;
var statearr_46620_47612 = state_46598__$1;
(statearr_46620_47612[(2)] = inst_46572);

(statearr_46620_47612[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46599 === (5))){
var inst_46582 = (state_46598[(2)]);
var state_46598__$1 = (function (){var statearr_46621 = state_46598;
(statearr_46621[(13)] = inst_46582);

return statearr_46621;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46598__$1,(13),dchan);
} else {
if((state_val_46599 === (14))){
var inst_46587 = cljs.core.async.close_BANG_(out);
var state_46598__$1 = state_46598;
var statearr_46622_47613 = state_46598__$1;
(statearr_46622_47613[(2)] = inst_46587);

(statearr_46622_47613[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46599 === (16))){
var inst_46594 = (state_46598[(2)]);
var state_46598__$1 = state_46598;
var statearr_46623_47614 = state_46598__$1;
(statearr_46623_47614[(2)] = inst_46594);

(statearr_46623_47614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46599 === (10))){
var inst_46559 = (state_46598[(7)]);
var inst_46575 = (state_46598[(2)]);
var inst_46576 = (inst_46559 + (1));
var inst_46559__$1 = inst_46576;
var state_46598__$1 = (function (){var statearr_46624 = state_46598;
(statearr_46624[(7)] = inst_46559__$1);

(statearr_46624[(14)] = inst_46575);

return statearr_46624;
})();
var statearr_46625_47615 = state_46598__$1;
(statearr_46625_47615[(2)] = null);

(statearr_46625_47615[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46599 === (8))){
var inst_46580 = (state_46598[(2)]);
var state_46598__$1 = state_46598;
var statearr_46626_47616 = state_46598__$1;
(statearr_46626_47616[(2)] = inst_46580);

(statearr_46626_47616[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44931__auto__ = null;
var cljs$core$async$state_machine__44931__auto____0 = (function (){
var statearr_46627 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46627[(0)] = cljs$core$async$state_machine__44931__auto__);

(statearr_46627[(1)] = (1));

return statearr_46627;
});
var cljs$core$async$state_machine__44931__auto____1 = (function (state_46598){
while(true){
var ret_value__44932__auto__ = (function (){try{while(true){
var result__44933__auto__ = switch__44930__auto__(state_46598);
if(cljs.core.keyword_identical_QMARK_(result__44933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44933__auto__;
}
break;
}
}catch (e46628){var ex__44934__auto__ = e46628;
var statearr_46629_47617 = state_46598;
(statearr_46629_47617[(2)] = ex__44934__auto__);


if(cljs.core.seq((state_46598[(4)]))){
var statearr_46630_47618 = state_46598;
(statearr_46630_47618[(1)] = cljs.core.first((state_46598[(4)])));

} else {
throw ex__44934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47620 = state_46598;
state_46598 = G__47620;
continue;
} else {
return ret_value__44932__auto__;
}
break;
}
});
cljs$core$async$state_machine__44931__auto__ = function(state_46598){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44931__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44931__auto____1.call(this,state_46598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44931__auto____0;
cljs$core$async$state_machine__44931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44931__auto____1;
return cljs$core$async$state_machine__44931__auto__;
})()
})();
var state__45135__auto__ = (function (){var statearr_46631 = f__45134__auto__();
(statearr_46631[(6)] = c__45133__auto___47599);

return statearr_46631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45135__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__46634 = arguments.length;
switch (G__46634) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45133__auto___47626 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45134__auto__ = (function (){var switch__44930__auto__ = (function (state_46666){
var state_val_46667 = (state_46666[(1)]);
if((state_val_46667 === (7))){
var inst_46645 = (state_46666[(7)]);
var inst_46646 = (state_46666[(8)]);
var inst_46645__$1 = (state_46666[(2)]);
var inst_46646__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46645__$1,(0),null);
var inst_46647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46645__$1,(1),null);
var inst_46648 = (inst_46646__$1 == null);
var state_46666__$1 = (function (){var statearr_46668 = state_46666;
(statearr_46668[(9)] = inst_46647);

(statearr_46668[(7)] = inst_46645__$1);

(statearr_46668[(8)] = inst_46646__$1);

return statearr_46668;
})();
if(cljs.core.truth_(inst_46648)){
var statearr_46669_47627 = state_46666__$1;
(statearr_46669_47627[(1)] = (8));

} else {
var statearr_46670_47628 = state_46666__$1;
(statearr_46670_47628[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (1))){
var inst_46635 = cljs.core.vec(chs);
var inst_46636 = inst_46635;
var state_46666__$1 = (function (){var statearr_46671 = state_46666;
(statearr_46671[(10)] = inst_46636);

return statearr_46671;
})();
var statearr_46672_47629 = state_46666__$1;
(statearr_46672_47629[(2)] = null);

(statearr_46672_47629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (4))){
var inst_46636 = (state_46666[(10)]);
var state_46666__$1 = state_46666;
return cljs.core.async.ioc_alts_BANG_(state_46666__$1,(7),inst_46636);
} else {
if((state_val_46667 === (6))){
var inst_46662 = (state_46666[(2)]);
var state_46666__$1 = state_46666;
var statearr_46673_47630 = state_46666__$1;
(statearr_46673_47630[(2)] = inst_46662);

(statearr_46673_47630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (3))){
var inst_46664 = (state_46666[(2)]);
var state_46666__$1 = state_46666;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46666__$1,inst_46664);
} else {
if((state_val_46667 === (2))){
var inst_46636 = (state_46666[(10)]);
var inst_46638 = cljs.core.count(inst_46636);
var inst_46639 = (inst_46638 > (0));
var state_46666__$1 = state_46666;
if(cljs.core.truth_(inst_46639)){
var statearr_46675_47631 = state_46666__$1;
(statearr_46675_47631[(1)] = (4));

} else {
var statearr_46676_47632 = state_46666__$1;
(statearr_46676_47632[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (11))){
var inst_46636 = (state_46666[(10)]);
var inst_46655 = (state_46666[(2)]);
var tmp46674 = inst_46636;
var inst_46636__$1 = tmp46674;
var state_46666__$1 = (function (){var statearr_46677 = state_46666;
(statearr_46677[(10)] = inst_46636__$1);

(statearr_46677[(11)] = inst_46655);

return statearr_46677;
})();
var statearr_46678_47633 = state_46666__$1;
(statearr_46678_47633[(2)] = null);

(statearr_46678_47633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (9))){
var inst_46646 = (state_46666[(8)]);
var state_46666__$1 = state_46666;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46666__$1,(11),out,inst_46646);
} else {
if((state_val_46667 === (5))){
var inst_46660 = cljs.core.async.close_BANG_(out);
var state_46666__$1 = state_46666;
var statearr_46679_47634 = state_46666__$1;
(statearr_46679_47634[(2)] = inst_46660);

(statearr_46679_47634[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (10))){
var inst_46658 = (state_46666[(2)]);
var state_46666__$1 = state_46666;
var statearr_46680_47635 = state_46666__$1;
(statearr_46680_47635[(2)] = inst_46658);

(statearr_46680_47635[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (8))){
var inst_46636 = (state_46666[(10)]);
var inst_46647 = (state_46666[(9)]);
var inst_46645 = (state_46666[(7)]);
var inst_46646 = (state_46666[(8)]);
var inst_46650 = (function (){var cs = inst_46636;
var vec__46641 = inst_46645;
var v = inst_46646;
var c = inst_46647;
return (function (p1__46632_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__46632_SHARP_);
});
})();
var inst_46651 = cljs.core.filterv(inst_46650,inst_46636);
var inst_46636__$1 = inst_46651;
var state_46666__$1 = (function (){var statearr_46681 = state_46666;
(statearr_46681[(10)] = inst_46636__$1);

return statearr_46681;
})();
var statearr_46682_47637 = state_46666__$1;
(statearr_46682_47637[(2)] = null);

(statearr_46682_47637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44931__auto__ = null;
var cljs$core$async$state_machine__44931__auto____0 = (function (){
var statearr_46683 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46683[(0)] = cljs$core$async$state_machine__44931__auto__);

(statearr_46683[(1)] = (1));

return statearr_46683;
});
var cljs$core$async$state_machine__44931__auto____1 = (function (state_46666){
while(true){
var ret_value__44932__auto__ = (function (){try{while(true){
var result__44933__auto__ = switch__44930__auto__(state_46666);
if(cljs.core.keyword_identical_QMARK_(result__44933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44933__auto__;
}
break;
}
}catch (e46684){var ex__44934__auto__ = e46684;
var statearr_46685_47639 = state_46666;
(statearr_46685_47639[(2)] = ex__44934__auto__);


if(cljs.core.seq((state_46666[(4)]))){
var statearr_46686_47640 = state_46666;
(statearr_46686_47640[(1)] = cljs.core.first((state_46666[(4)])));

} else {
throw ex__44934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47641 = state_46666;
state_46666 = G__47641;
continue;
} else {
return ret_value__44932__auto__;
}
break;
}
});
cljs$core$async$state_machine__44931__auto__ = function(state_46666){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44931__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44931__auto____1.call(this,state_46666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44931__auto____0;
cljs$core$async$state_machine__44931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44931__auto____1;
return cljs$core$async$state_machine__44931__auto__;
})()
})();
var state__45135__auto__ = (function (){var statearr_46687 = f__45134__auto__();
(statearr_46687[(6)] = c__45133__auto___47626);

return statearr_46687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45135__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__46689 = arguments.length;
switch (G__46689) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45133__auto___47645 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45134__auto__ = (function (){var switch__44930__auto__ = (function (state_46713){
var state_val_46714 = (state_46713[(1)]);
if((state_val_46714 === (7))){
var inst_46695 = (state_46713[(7)]);
var inst_46695__$1 = (state_46713[(2)]);
var inst_46696 = (inst_46695__$1 == null);
var inst_46697 = cljs.core.not(inst_46696);
var state_46713__$1 = (function (){var statearr_46715 = state_46713;
(statearr_46715[(7)] = inst_46695__$1);

return statearr_46715;
})();
if(inst_46697){
var statearr_46716_47646 = state_46713__$1;
(statearr_46716_47646[(1)] = (8));

} else {
var statearr_46717_47647 = state_46713__$1;
(statearr_46717_47647[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46714 === (1))){
var inst_46690 = (0);
var state_46713__$1 = (function (){var statearr_46718 = state_46713;
(statearr_46718[(8)] = inst_46690);

return statearr_46718;
})();
var statearr_46719_47648 = state_46713__$1;
(statearr_46719_47648[(2)] = null);

(statearr_46719_47648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46714 === (4))){
var state_46713__$1 = state_46713;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46713__$1,(7),ch);
} else {
if((state_val_46714 === (6))){
var inst_46708 = (state_46713[(2)]);
var state_46713__$1 = state_46713;
var statearr_46720_47649 = state_46713__$1;
(statearr_46720_47649[(2)] = inst_46708);

(statearr_46720_47649[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46714 === (3))){
var inst_46710 = (state_46713[(2)]);
var inst_46711 = cljs.core.async.close_BANG_(out);
var state_46713__$1 = (function (){var statearr_46721 = state_46713;
(statearr_46721[(9)] = inst_46710);

return statearr_46721;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46713__$1,inst_46711);
} else {
if((state_val_46714 === (2))){
var inst_46690 = (state_46713[(8)]);
var inst_46692 = (inst_46690 < n);
var state_46713__$1 = state_46713;
if(cljs.core.truth_(inst_46692)){
var statearr_46722_47650 = state_46713__$1;
(statearr_46722_47650[(1)] = (4));

} else {
var statearr_46723_47651 = state_46713__$1;
(statearr_46723_47651[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46714 === (11))){
var inst_46690 = (state_46713[(8)]);
var inst_46700 = (state_46713[(2)]);
var inst_46701 = (inst_46690 + (1));
var inst_46690__$1 = inst_46701;
var state_46713__$1 = (function (){var statearr_46724 = state_46713;
(statearr_46724[(8)] = inst_46690__$1);

(statearr_46724[(10)] = inst_46700);

return statearr_46724;
})();
var statearr_46725_47652 = state_46713__$1;
(statearr_46725_47652[(2)] = null);

(statearr_46725_47652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46714 === (9))){
var state_46713__$1 = state_46713;
var statearr_46726_47653 = state_46713__$1;
(statearr_46726_47653[(2)] = null);

(statearr_46726_47653[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46714 === (5))){
var state_46713__$1 = state_46713;
var statearr_46727_47654 = state_46713__$1;
(statearr_46727_47654[(2)] = null);

(statearr_46727_47654[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46714 === (10))){
var inst_46705 = (state_46713[(2)]);
var state_46713__$1 = state_46713;
var statearr_46728_47655 = state_46713__$1;
(statearr_46728_47655[(2)] = inst_46705);

(statearr_46728_47655[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46714 === (8))){
var inst_46695 = (state_46713[(7)]);
var state_46713__$1 = state_46713;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46713__$1,(11),out,inst_46695);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44931__auto__ = null;
var cljs$core$async$state_machine__44931__auto____0 = (function (){
var statearr_46729 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46729[(0)] = cljs$core$async$state_machine__44931__auto__);

(statearr_46729[(1)] = (1));

return statearr_46729;
});
var cljs$core$async$state_machine__44931__auto____1 = (function (state_46713){
while(true){
var ret_value__44932__auto__ = (function (){try{while(true){
var result__44933__auto__ = switch__44930__auto__(state_46713);
if(cljs.core.keyword_identical_QMARK_(result__44933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44933__auto__;
}
break;
}
}catch (e46730){var ex__44934__auto__ = e46730;
var statearr_46731_47656 = state_46713;
(statearr_46731_47656[(2)] = ex__44934__auto__);


if(cljs.core.seq((state_46713[(4)]))){
var statearr_46732_47657 = state_46713;
(statearr_46732_47657[(1)] = cljs.core.first((state_46713[(4)])));

} else {
throw ex__44934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47658 = state_46713;
state_46713 = G__47658;
continue;
} else {
return ret_value__44932__auto__;
}
break;
}
});
cljs$core$async$state_machine__44931__auto__ = function(state_46713){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44931__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44931__auto____1.call(this,state_46713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44931__auto____0;
cljs$core$async$state_machine__44931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44931__auto____1;
return cljs$core$async$state_machine__44931__auto__;
})()
})();
var state__45135__auto__ = (function (){var statearr_46733 = f__45134__auto__();
(statearr_46733[(6)] = c__45133__auto___47645);

return statearr_46733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45135__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46735 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46735 = (function (f,ch,meta46736){
this.f = f;
this.ch = ch;
this.meta46736 = meta46736;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46737,meta46736__$1){
var self__ = this;
var _46737__$1 = this;
return (new cljs.core.async.t_cljs$core$async46735(self__.f,self__.ch,meta46736__$1));
}));

(cljs.core.async.t_cljs$core$async46735.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46737){
var self__ = this;
var _46737__$1 = this;
return self__.meta46736;
}));

(cljs.core.async.t_cljs$core$async46735.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46735.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46735.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46735.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46735.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46738 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46738 = (function (f,ch,meta46736,_,fn1,meta46739){
this.f = f;
this.ch = ch;
this.meta46736 = meta46736;
this._ = _;
this.fn1 = fn1;
this.meta46739 = meta46739;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46740,meta46739__$1){
var self__ = this;
var _46740__$1 = this;
return (new cljs.core.async.t_cljs$core$async46738(self__.f,self__.ch,self__.meta46736,self__._,self__.fn1,meta46739__$1));
}));

(cljs.core.async.t_cljs$core$async46738.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46740){
var self__ = this;
var _46740__$1 = this;
return self__.meta46739;
}));

(cljs.core.async.t_cljs$core$async46738.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46738.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async46738.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46738.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__46734_SHARP_){
var G__46741 = (((p1__46734_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__46734_SHARP_) : self__.f.call(null,p1__46734_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__46741) : f1.call(null,G__46741));
});
}));

(cljs.core.async.t_cljs$core$async46738.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46736","meta46736",91854994,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async46735","cljs.core.async/t_cljs$core$async46735",1468561409,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta46739","meta46739",1293600445,null)], null);
}));

(cljs.core.async.t_cljs$core$async46738.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46738.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46738");

(cljs.core.async.t_cljs$core$async46738.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async46738");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46738.
 */
cljs.core.async.__GT_t_cljs$core$async46738 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46738(f__$1,ch__$1,meta46736__$1,___$2,fn1__$1,meta46739){
return (new cljs.core.async.t_cljs$core$async46738(f__$1,ch__$1,meta46736__$1,___$2,fn1__$1,meta46739));
});

}

return (new cljs.core.async.t_cljs$core$async46738(self__.f,self__.ch,self__.meta46736,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4221__auto__ = ret;
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__46742 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__46742) : self__.f.call(null,G__46742));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async46735.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46735.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async46735.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46736","meta46736",91854994,null)], null);
}));

(cljs.core.async.t_cljs$core$async46735.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46735.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46735");

(cljs.core.async.t_cljs$core$async46735.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async46735");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46735.
 */
cljs.core.async.__GT_t_cljs$core$async46735 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46735(f__$1,ch__$1,meta46736){
return (new cljs.core.async.t_cljs$core$async46735(f__$1,ch__$1,meta46736));
});

}

return (new cljs.core.async.t_cljs$core$async46735(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46743 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46743 = (function (f,ch,meta46744){
this.f = f;
this.ch = ch;
this.meta46744 = meta46744;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46745,meta46744__$1){
var self__ = this;
var _46745__$1 = this;
return (new cljs.core.async.t_cljs$core$async46743(self__.f,self__.ch,meta46744__$1));
}));

(cljs.core.async.t_cljs$core$async46743.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46745){
var self__ = this;
var _46745__$1 = this;
return self__.meta46744;
}));

(cljs.core.async.t_cljs$core$async46743.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46743.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46743.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46743.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46743.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46743.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async46743.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46744","meta46744",-873105602,null)], null);
}));

(cljs.core.async.t_cljs$core$async46743.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46743.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46743");

(cljs.core.async.t_cljs$core$async46743.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async46743");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46743.
 */
cljs.core.async.__GT_t_cljs$core$async46743 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async46743(f__$1,ch__$1,meta46744){
return (new cljs.core.async.t_cljs$core$async46743(f__$1,ch__$1,meta46744));
});

}

return (new cljs.core.async.t_cljs$core$async46743(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46746 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46746 = (function (p,ch,meta46747){
this.p = p;
this.ch = ch;
this.meta46747 = meta46747;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46748,meta46747__$1){
var self__ = this;
var _46748__$1 = this;
return (new cljs.core.async.t_cljs$core$async46746(self__.p,self__.ch,meta46747__$1));
}));

(cljs.core.async.t_cljs$core$async46746.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46748){
var self__ = this;
var _46748__$1 = this;
return self__.meta46747;
}));

(cljs.core.async.t_cljs$core$async46746.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46746.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46746.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46746.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46746.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46746.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46746.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async46746.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46747","meta46747",1036157830,null)], null);
}));

(cljs.core.async.t_cljs$core$async46746.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46746.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46746");

(cljs.core.async.t_cljs$core$async46746.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async46746");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46746.
 */
cljs.core.async.__GT_t_cljs$core$async46746 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async46746(p__$1,ch__$1,meta46747){
return (new cljs.core.async.t_cljs$core$async46746(p__$1,ch__$1,meta46747));
});

}

return (new cljs.core.async.t_cljs$core$async46746(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__46750 = arguments.length;
switch (G__46750) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45133__auto___47662 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45134__auto__ = (function (){var switch__44930__auto__ = (function (state_46771){
var state_val_46772 = (state_46771[(1)]);
if((state_val_46772 === (7))){
var inst_46767 = (state_46771[(2)]);
var state_46771__$1 = state_46771;
var statearr_46773_47663 = state_46771__$1;
(statearr_46773_47663[(2)] = inst_46767);

(statearr_46773_47663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46772 === (1))){
var state_46771__$1 = state_46771;
var statearr_46774_47664 = state_46771__$1;
(statearr_46774_47664[(2)] = null);

(statearr_46774_47664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46772 === (4))){
var inst_46753 = (state_46771[(7)]);
var inst_46753__$1 = (state_46771[(2)]);
var inst_46754 = (inst_46753__$1 == null);
var state_46771__$1 = (function (){var statearr_46775 = state_46771;
(statearr_46775[(7)] = inst_46753__$1);

return statearr_46775;
})();
if(cljs.core.truth_(inst_46754)){
var statearr_46776_47665 = state_46771__$1;
(statearr_46776_47665[(1)] = (5));

} else {
var statearr_46777_47666 = state_46771__$1;
(statearr_46777_47666[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46772 === (6))){
var inst_46753 = (state_46771[(7)]);
var inst_46758 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46753) : p.call(null,inst_46753));
var state_46771__$1 = state_46771;
if(cljs.core.truth_(inst_46758)){
var statearr_46778_47667 = state_46771__$1;
(statearr_46778_47667[(1)] = (8));

} else {
var statearr_46779_47668 = state_46771__$1;
(statearr_46779_47668[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46772 === (3))){
var inst_46769 = (state_46771[(2)]);
var state_46771__$1 = state_46771;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46771__$1,inst_46769);
} else {
if((state_val_46772 === (2))){
var state_46771__$1 = state_46771;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46771__$1,(4),ch);
} else {
if((state_val_46772 === (11))){
var inst_46761 = (state_46771[(2)]);
var state_46771__$1 = state_46771;
var statearr_46780_47669 = state_46771__$1;
(statearr_46780_47669[(2)] = inst_46761);

(statearr_46780_47669[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46772 === (9))){
var state_46771__$1 = state_46771;
var statearr_46781_47670 = state_46771__$1;
(statearr_46781_47670[(2)] = null);

(statearr_46781_47670[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46772 === (5))){
var inst_46756 = cljs.core.async.close_BANG_(out);
var state_46771__$1 = state_46771;
var statearr_46782_47671 = state_46771__$1;
(statearr_46782_47671[(2)] = inst_46756);

(statearr_46782_47671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46772 === (10))){
var inst_46764 = (state_46771[(2)]);
var state_46771__$1 = (function (){var statearr_46783 = state_46771;
(statearr_46783[(8)] = inst_46764);

return statearr_46783;
})();
var statearr_46784_47672 = state_46771__$1;
(statearr_46784_47672[(2)] = null);

(statearr_46784_47672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46772 === (8))){
var inst_46753 = (state_46771[(7)]);
var state_46771__$1 = state_46771;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46771__$1,(11),out,inst_46753);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44931__auto__ = null;
var cljs$core$async$state_machine__44931__auto____0 = (function (){
var statearr_46785 = [null,null,null,null,null,null,null,null,null];
(statearr_46785[(0)] = cljs$core$async$state_machine__44931__auto__);

(statearr_46785[(1)] = (1));

return statearr_46785;
});
var cljs$core$async$state_machine__44931__auto____1 = (function (state_46771){
while(true){
var ret_value__44932__auto__ = (function (){try{while(true){
var result__44933__auto__ = switch__44930__auto__(state_46771);
if(cljs.core.keyword_identical_QMARK_(result__44933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44933__auto__;
}
break;
}
}catch (e46786){var ex__44934__auto__ = e46786;
var statearr_46787_47673 = state_46771;
(statearr_46787_47673[(2)] = ex__44934__auto__);


if(cljs.core.seq((state_46771[(4)]))){
var statearr_46788_47674 = state_46771;
(statearr_46788_47674[(1)] = cljs.core.first((state_46771[(4)])));

} else {
throw ex__44934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47675 = state_46771;
state_46771 = G__47675;
continue;
} else {
return ret_value__44932__auto__;
}
break;
}
});
cljs$core$async$state_machine__44931__auto__ = function(state_46771){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44931__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44931__auto____1.call(this,state_46771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44931__auto____0;
cljs$core$async$state_machine__44931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44931__auto____1;
return cljs$core$async$state_machine__44931__auto__;
})()
})();
var state__45135__auto__ = (function (){var statearr_46789 = f__45134__auto__();
(statearr_46789[(6)] = c__45133__auto___47662);

return statearr_46789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45135__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__46791 = arguments.length;
switch (G__46791) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__45133__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45134__auto__ = (function (){var switch__44930__auto__ = (function (state_46853){
var state_val_46854 = (state_46853[(1)]);
if((state_val_46854 === (7))){
var inst_46849 = (state_46853[(2)]);
var state_46853__$1 = state_46853;
var statearr_46855_47677 = state_46853__$1;
(statearr_46855_47677[(2)] = inst_46849);

(statearr_46855_47677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46854 === (20))){
var inst_46819 = (state_46853[(7)]);
var inst_46830 = (state_46853[(2)]);
var inst_46831 = cljs.core.next(inst_46819);
var inst_46805 = inst_46831;
var inst_46806 = null;
var inst_46807 = (0);
var inst_46808 = (0);
var state_46853__$1 = (function (){var statearr_46856 = state_46853;
(statearr_46856[(8)] = inst_46807);

(statearr_46856[(9)] = inst_46830);

(statearr_46856[(10)] = inst_46808);

(statearr_46856[(11)] = inst_46805);

(statearr_46856[(12)] = inst_46806);

return statearr_46856;
})();
var statearr_46857_47678 = state_46853__$1;
(statearr_46857_47678[(2)] = null);

(statearr_46857_47678[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46854 === (1))){
var state_46853__$1 = state_46853;
var statearr_46858_47679 = state_46853__$1;
(statearr_46858_47679[(2)] = null);

(statearr_46858_47679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46854 === (4))){
var inst_46794 = (state_46853[(13)]);
var inst_46794__$1 = (state_46853[(2)]);
var inst_46795 = (inst_46794__$1 == null);
var state_46853__$1 = (function (){var statearr_46859 = state_46853;
(statearr_46859[(13)] = inst_46794__$1);

return statearr_46859;
})();
if(cljs.core.truth_(inst_46795)){
var statearr_46860_47680 = state_46853__$1;
(statearr_46860_47680[(1)] = (5));

} else {
var statearr_46861_47681 = state_46853__$1;
(statearr_46861_47681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46854 === (15))){
var state_46853__$1 = state_46853;
var statearr_46865_47682 = state_46853__$1;
(statearr_46865_47682[(2)] = null);

(statearr_46865_47682[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46854 === (21))){
var state_46853__$1 = state_46853;
var statearr_46866_47683 = state_46853__$1;
(statearr_46866_47683[(2)] = null);

(statearr_46866_47683[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46854 === (13))){
var inst_46807 = (state_46853[(8)]);
var inst_46808 = (state_46853[(10)]);
var inst_46805 = (state_46853[(11)]);
var inst_46806 = (state_46853[(12)]);
var inst_46815 = (state_46853[(2)]);
var inst_46816 = (inst_46808 + (1));
var tmp46862 = inst_46807;
var tmp46863 = inst_46805;
var tmp46864 = inst_46806;
var inst_46805__$1 = tmp46863;
var inst_46806__$1 = tmp46864;
var inst_46807__$1 = tmp46862;
var inst_46808__$1 = inst_46816;
var state_46853__$1 = (function (){var statearr_46867 = state_46853;
(statearr_46867[(8)] = inst_46807__$1);

(statearr_46867[(14)] = inst_46815);

(statearr_46867[(10)] = inst_46808__$1);

(statearr_46867[(11)] = inst_46805__$1);

(statearr_46867[(12)] = inst_46806__$1);

return statearr_46867;
})();
var statearr_46868_47684 = state_46853__$1;
(statearr_46868_47684[(2)] = null);

(statearr_46868_47684[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46854 === (22))){
var state_46853__$1 = state_46853;
var statearr_46869_47685 = state_46853__$1;
(statearr_46869_47685[(2)] = null);

(statearr_46869_47685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46854 === (6))){
var inst_46794 = (state_46853[(13)]);
var inst_46803 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46794) : f.call(null,inst_46794));
var inst_46804 = cljs.core.seq(inst_46803);
var inst_46805 = inst_46804;
var inst_46806 = null;
var inst_46807 = (0);
var inst_46808 = (0);
var state_46853__$1 = (function (){var statearr_46870 = state_46853;
(statearr_46870[(8)] = inst_46807);

(statearr_46870[(10)] = inst_46808);

(statearr_46870[(11)] = inst_46805);

(statearr_46870[(12)] = inst_46806);

return statearr_46870;
})();
var statearr_46871_47686 = state_46853__$1;
(statearr_46871_47686[(2)] = null);

(statearr_46871_47686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46854 === (17))){
var inst_46819 = (state_46853[(7)]);
var inst_46823 = cljs.core.chunk_first(inst_46819);
var inst_46824 = cljs.core.chunk_rest(inst_46819);
var inst_46825 = cljs.core.count(inst_46823);
var inst_46805 = inst_46824;
var inst_46806 = inst_46823;
var inst_46807 = inst_46825;
var inst_46808 = (0);
var state_46853__$1 = (function (){var statearr_46872 = state_46853;
(statearr_46872[(8)] = inst_46807);

(statearr_46872[(10)] = inst_46808);

(statearr_46872[(11)] = inst_46805);

(statearr_46872[(12)] = inst_46806);

return statearr_46872;
})();
var statearr_46873_47687 = state_46853__$1;
(statearr_46873_47687[(2)] = null);

(statearr_46873_47687[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46854 === (3))){
var inst_46851 = (state_46853[(2)]);
var state_46853__$1 = state_46853;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46853__$1,inst_46851);
} else {
if((state_val_46854 === (12))){
var inst_46839 = (state_46853[(2)]);
var state_46853__$1 = state_46853;
var statearr_46874_47688 = state_46853__$1;
(statearr_46874_47688[(2)] = inst_46839);

(statearr_46874_47688[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46854 === (2))){
var state_46853__$1 = state_46853;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46853__$1,(4),in$);
} else {
if((state_val_46854 === (23))){
var inst_46847 = (state_46853[(2)]);
var state_46853__$1 = state_46853;
var statearr_46875_47690 = state_46853__$1;
(statearr_46875_47690[(2)] = inst_46847);

(statearr_46875_47690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46854 === (19))){
var inst_46834 = (state_46853[(2)]);
var state_46853__$1 = state_46853;
var statearr_46876_47691 = state_46853__$1;
(statearr_46876_47691[(2)] = inst_46834);

(statearr_46876_47691[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46854 === (11))){
var inst_46819 = (state_46853[(7)]);
var inst_46805 = (state_46853[(11)]);
var inst_46819__$1 = cljs.core.seq(inst_46805);
var state_46853__$1 = (function (){var statearr_46877 = state_46853;
(statearr_46877[(7)] = inst_46819__$1);

return statearr_46877;
})();
if(inst_46819__$1){
var statearr_46878_47692 = state_46853__$1;
(statearr_46878_47692[(1)] = (14));

} else {
var statearr_46879_47693 = state_46853__$1;
(statearr_46879_47693[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46854 === (9))){
var inst_46841 = (state_46853[(2)]);
var inst_46842 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_46853__$1 = (function (){var statearr_46880 = state_46853;
(statearr_46880[(15)] = inst_46841);

return statearr_46880;
})();
if(cljs.core.truth_(inst_46842)){
var statearr_46881_47694 = state_46853__$1;
(statearr_46881_47694[(1)] = (21));

} else {
var statearr_46882_47695 = state_46853__$1;
(statearr_46882_47695[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46854 === (5))){
var inst_46797 = cljs.core.async.close_BANG_(out);
var state_46853__$1 = state_46853;
var statearr_46883_47696 = state_46853__$1;
(statearr_46883_47696[(2)] = inst_46797);

(statearr_46883_47696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46854 === (14))){
var inst_46819 = (state_46853[(7)]);
var inst_46821 = cljs.core.chunked_seq_QMARK_(inst_46819);
var state_46853__$1 = state_46853;
if(inst_46821){
var statearr_46884_47701 = state_46853__$1;
(statearr_46884_47701[(1)] = (17));

} else {
var statearr_46885_47702 = state_46853__$1;
(statearr_46885_47702[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46854 === (16))){
var inst_46837 = (state_46853[(2)]);
var state_46853__$1 = state_46853;
var statearr_46886_47703 = state_46853__$1;
(statearr_46886_47703[(2)] = inst_46837);

(statearr_46886_47703[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46854 === (10))){
var inst_46808 = (state_46853[(10)]);
var inst_46806 = (state_46853[(12)]);
var inst_46813 = cljs.core._nth(inst_46806,inst_46808);
var state_46853__$1 = state_46853;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46853__$1,(13),out,inst_46813);
} else {
if((state_val_46854 === (18))){
var inst_46819 = (state_46853[(7)]);
var inst_46828 = cljs.core.first(inst_46819);
var state_46853__$1 = state_46853;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46853__$1,(20),out,inst_46828);
} else {
if((state_val_46854 === (8))){
var inst_46807 = (state_46853[(8)]);
var inst_46808 = (state_46853[(10)]);
var inst_46810 = (inst_46808 < inst_46807);
var inst_46811 = inst_46810;
var state_46853__$1 = state_46853;
if(cljs.core.truth_(inst_46811)){
var statearr_46887_47704 = state_46853__$1;
(statearr_46887_47704[(1)] = (10));

} else {
var statearr_46888_47705 = state_46853__$1;
(statearr_46888_47705[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__44931__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__44931__auto____0 = (function (){
var statearr_46889 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46889[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__44931__auto__);

(statearr_46889[(1)] = (1));

return statearr_46889;
});
var cljs$core$async$mapcat_STAR__$_state_machine__44931__auto____1 = (function (state_46853){
while(true){
var ret_value__44932__auto__ = (function (){try{while(true){
var result__44933__auto__ = switch__44930__auto__(state_46853);
if(cljs.core.keyword_identical_QMARK_(result__44933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44933__auto__;
}
break;
}
}catch (e46890){var ex__44934__auto__ = e46890;
var statearr_46891_47706 = state_46853;
(statearr_46891_47706[(2)] = ex__44934__auto__);


if(cljs.core.seq((state_46853[(4)]))){
var statearr_46892_47707 = state_46853;
(statearr_46892_47707[(1)] = cljs.core.first((state_46853[(4)])));

} else {
throw ex__44934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47708 = state_46853;
state_46853 = G__47708;
continue;
} else {
return ret_value__44932__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__44931__auto__ = function(state_46853){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__44931__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__44931__auto____1.call(this,state_46853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__44931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__44931__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__44931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__44931__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__44931__auto__;
})()
})();
var state__45135__auto__ = (function (){var statearr_46893 = f__45134__auto__();
(statearr_46893[(6)] = c__45133__auto__);

return statearr_46893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45135__auto__);
}));

return c__45133__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__46895 = arguments.length;
switch (G__46895) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__46897 = arguments.length;
switch (G__46897) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__46899 = arguments.length;
switch (G__46899) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45133__auto___47719 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45134__auto__ = (function (){var switch__44930__auto__ = (function (state_46923){
var state_val_46924 = (state_46923[(1)]);
if((state_val_46924 === (7))){
var inst_46918 = (state_46923[(2)]);
var state_46923__$1 = state_46923;
var statearr_46925_47720 = state_46923__$1;
(statearr_46925_47720[(2)] = inst_46918);

(statearr_46925_47720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46924 === (1))){
var inst_46900 = null;
var state_46923__$1 = (function (){var statearr_46926 = state_46923;
(statearr_46926[(7)] = inst_46900);

return statearr_46926;
})();
var statearr_46927_47724 = state_46923__$1;
(statearr_46927_47724[(2)] = null);

(statearr_46927_47724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46924 === (4))){
var inst_46903 = (state_46923[(8)]);
var inst_46903__$1 = (state_46923[(2)]);
var inst_46904 = (inst_46903__$1 == null);
var inst_46905 = cljs.core.not(inst_46904);
var state_46923__$1 = (function (){var statearr_46928 = state_46923;
(statearr_46928[(8)] = inst_46903__$1);

return statearr_46928;
})();
if(inst_46905){
var statearr_46929_47725 = state_46923__$1;
(statearr_46929_47725[(1)] = (5));

} else {
var statearr_46930_47729 = state_46923__$1;
(statearr_46930_47729[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46924 === (6))){
var state_46923__$1 = state_46923;
var statearr_46931_47730 = state_46923__$1;
(statearr_46931_47730[(2)] = null);

(statearr_46931_47730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46924 === (3))){
var inst_46920 = (state_46923[(2)]);
var inst_46921 = cljs.core.async.close_BANG_(out);
var state_46923__$1 = (function (){var statearr_46932 = state_46923;
(statearr_46932[(9)] = inst_46920);

return statearr_46932;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46923__$1,inst_46921);
} else {
if((state_val_46924 === (2))){
var state_46923__$1 = state_46923;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46923__$1,(4),ch);
} else {
if((state_val_46924 === (11))){
var inst_46903 = (state_46923[(8)]);
var inst_46912 = (state_46923[(2)]);
var inst_46900 = inst_46903;
var state_46923__$1 = (function (){var statearr_46933 = state_46923;
(statearr_46933[(10)] = inst_46912);

(statearr_46933[(7)] = inst_46900);

return statearr_46933;
})();
var statearr_46934_47731 = state_46923__$1;
(statearr_46934_47731[(2)] = null);

(statearr_46934_47731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46924 === (9))){
var inst_46903 = (state_46923[(8)]);
var state_46923__$1 = state_46923;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46923__$1,(11),out,inst_46903);
} else {
if((state_val_46924 === (5))){
var inst_46903 = (state_46923[(8)]);
var inst_46900 = (state_46923[(7)]);
var inst_46907 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46903,inst_46900);
var state_46923__$1 = state_46923;
if(inst_46907){
var statearr_46936_47735 = state_46923__$1;
(statearr_46936_47735[(1)] = (8));

} else {
var statearr_46937_47736 = state_46923__$1;
(statearr_46937_47736[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46924 === (10))){
var inst_46915 = (state_46923[(2)]);
var state_46923__$1 = state_46923;
var statearr_46938_47741 = state_46923__$1;
(statearr_46938_47741[(2)] = inst_46915);

(statearr_46938_47741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46924 === (8))){
var inst_46900 = (state_46923[(7)]);
var tmp46935 = inst_46900;
var inst_46900__$1 = tmp46935;
var state_46923__$1 = (function (){var statearr_46939 = state_46923;
(statearr_46939[(7)] = inst_46900__$1);

return statearr_46939;
})();
var statearr_46940_47742 = state_46923__$1;
(statearr_46940_47742[(2)] = null);

(statearr_46940_47742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44931__auto__ = null;
var cljs$core$async$state_machine__44931__auto____0 = (function (){
var statearr_46941 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46941[(0)] = cljs$core$async$state_machine__44931__auto__);

(statearr_46941[(1)] = (1));

return statearr_46941;
});
var cljs$core$async$state_machine__44931__auto____1 = (function (state_46923){
while(true){
var ret_value__44932__auto__ = (function (){try{while(true){
var result__44933__auto__ = switch__44930__auto__(state_46923);
if(cljs.core.keyword_identical_QMARK_(result__44933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44933__auto__;
}
break;
}
}catch (e46942){var ex__44934__auto__ = e46942;
var statearr_46943_47743 = state_46923;
(statearr_46943_47743[(2)] = ex__44934__auto__);


if(cljs.core.seq((state_46923[(4)]))){
var statearr_46944_47744 = state_46923;
(statearr_46944_47744[(1)] = cljs.core.first((state_46923[(4)])));

} else {
throw ex__44934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47745 = state_46923;
state_46923 = G__47745;
continue;
} else {
return ret_value__44932__auto__;
}
break;
}
});
cljs$core$async$state_machine__44931__auto__ = function(state_46923){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44931__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44931__auto____1.call(this,state_46923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44931__auto____0;
cljs$core$async$state_machine__44931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44931__auto____1;
return cljs$core$async$state_machine__44931__auto__;
})()
})();
var state__45135__auto__ = (function (){var statearr_46945 = f__45134__auto__();
(statearr_46945[(6)] = c__45133__auto___47719);

return statearr_46945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45135__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__46947 = arguments.length;
switch (G__46947) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45133__auto___47747 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45134__auto__ = (function (){var switch__44930__auto__ = (function (state_46985){
var state_val_46986 = (state_46985[(1)]);
if((state_val_46986 === (7))){
var inst_46981 = (state_46985[(2)]);
var state_46985__$1 = state_46985;
var statearr_46987_47748 = state_46985__$1;
(statearr_46987_47748[(2)] = inst_46981);

(statearr_46987_47748[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46986 === (1))){
var inst_46948 = (new Array(n));
var inst_46949 = inst_46948;
var inst_46950 = (0);
var state_46985__$1 = (function (){var statearr_46988 = state_46985;
(statearr_46988[(7)] = inst_46949);

(statearr_46988[(8)] = inst_46950);

return statearr_46988;
})();
var statearr_46989_47751 = state_46985__$1;
(statearr_46989_47751[(2)] = null);

(statearr_46989_47751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46986 === (4))){
var inst_46953 = (state_46985[(9)]);
var inst_46953__$1 = (state_46985[(2)]);
var inst_46954 = (inst_46953__$1 == null);
var inst_46955 = cljs.core.not(inst_46954);
var state_46985__$1 = (function (){var statearr_46990 = state_46985;
(statearr_46990[(9)] = inst_46953__$1);

return statearr_46990;
})();
if(inst_46955){
var statearr_46991_47752 = state_46985__$1;
(statearr_46991_47752[(1)] = (5));

} else {
var statearr_46992_47753 = state_46985__$1;
(statearr_46992_47753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46986 === (15))){
var inst_46975 = (state_46985[(2)]);
var state_46985__$1 = state_46985;
var statearr_46993_47754 = state_46985__$1;
(statearr_46993_47754[(2)] = inst_46975);

(statearr_46993_47754[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46986 === (13))){
var state_46985__$1 = state_46985;
var statearr_46994_47755 = state_46985__$1;
(statearr_46994_47755[(2)] = null);

(statearr_46994_47755[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46986 === (6))){
var inst_46950 = (state_46985[(8)]);
var inst_46971 = (inst_46950 > (0));
var state_46985__$1 = state_46985;
if(cljs.core.truth_(inst_46971)){
var statearr_46995_47756 = state_46985__$1;
(statearr_46995_47756[(1)] = (12));

} else {
var statearr_46996_47757 = state_46985__$1;
(statearr_46996_47757[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46986 === (3))){
var inst_46983 = (state_46985[(2)]);
var state_46985__$1 = state_46985;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46985__$1,inst_46983);
} else {
if((state_val_46986 === (12))){
var inst_46949 = (state_46985[(7)]);
var inst_46973 = cljs.core.vec(inst_46949);
var state_46985__$1 = state_46985;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46985__$1,(15),out,inst_46973);
} else {
if((state_val_46986 === (2))){
var state_46985__$1 = state_46985;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46985__$1,(4),ch);
} else {
if((state_val_46986 === (11))){
var inst_46965 = (state_46985[(2)]);
var inst_46966 = (new Array(n));
var inst_46949 = inst_46966;
var inst_46950 = (0);
var state_46985__$1 = (function (){var statearr_46997 = state_46985;
(statearr_46997[(7)] = inst_46949);

(statearr_46997[(10)] = inst_46965);

(statearr_46997[(8)] = inst_46950);

return statearr_46997;
})();
var statearr_46998_47758 = state_46985__$1;
(statearr_46998_47758[(2)] = null);

(statearr_46998_47758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46986 === (9))){
var inst_46949 = (state_46985[(7)]);
var inst_46963 = cljs.core.vec(inst_46949);
var state_46985__$1 = state_46985;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46985__$1,(11),out,inst_46963);
} else {
if((state_val_46986 === (5))){
var inst_46953 = (state_46985[(9)]);
var inst_46958 = (state_46985[(11)]);
var inst_46949 = (state_46985[(7)]);
var inst_46950 = (state_46985[(8)]);
var inst_46957 = (inst_46949[inst_46950] = inst_46953);
var inst_46958__$1 = (inst_46950 + (1));
var inst_46959 = (inst_46958__$1 < n);
var state_46985__$1 = (function (){var statearr_46999 = state_46985;
(statearr_46999[(11)] = inst_46958__$1);

(statearr_46999[(12)] = inst_46957);

return statearr_46999;
})();
if(cljs.core.truth_(inst_46959)){
var statearr_47000_47759 = state_46985__$1;
(statearr_47000_47759[(1)] = (8));

} else {
var statearr_47001_47760 = state_46985__$1;
(statearr_47001_47760[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46986 === (14))){
var inst_46978 = (state_46985[(2)]);
var inst_46979 = cljs.core.async.close_BANG_(out);
var state_46985__$1 = (function (){var statearr_47003 = state_46985;
(statearr_47003[(13)] = inst_46978);

return statearr_47003;
})();
var statearr_47004_47761 = state_46985__$1;
(statearr_47004_47761[(2)] = inst_46979);

(statearr_47004_47761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46986 === (10))){
var inst_46969 = (state_46985[(2)]);
var state_46985__$1 = state_46985;
var statearr_47005_47762 = state_46985__$1;
(statearr_47005_47762[(2)] = inst_46969);

(statearr_47005_47762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46986 === (8))){
var inst_46958 = (state_46985[(11)]);
var inst_46949 = (state_46985[(7)]);
var tmp47002 = inst_46949;
var inst_46949__$1 = tmp47002;
var inst_46950 = inst_46958;
var state_46985__$1 = (function (){var statearr_47006 = state_46985;
(statearr_47006[(7)] = inst_46949__$1);

(statearr_47006[(8)] = inst_46950);

return statearr_47006;
})();
var statearr_47007_47763 = state_46985__$1;
(statearr_47007_47763[(2)] = null);

(statearr_47007_47763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44931__auto__ = null;
var cljs$core$async$state_machine__44931__auto____0 = (function (){
var statearr_47008 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47008[(0)] = cljs$core$async$state_machine__44931__auto__);

(statearr_47008[(1)] = (1));

return statearr_47008;
});
var cljs$core$async$state_machine__44931__auto____1 = (function (state_46985){
while(true){
var ret_value__44932__auto__ = (function (){try{while(true){
var result__44933__auto__ = switch__44930__auto__(state_46985);
if(cljs.core.keyword_identical_QMARK_(result__44933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44933__auto__;
}
break;
}
}catch (e47009){var ex__44934__auto__ = e47009;
var statearr_47010_47764 = state_46985;
(statearr_47010_47764[(2)] = ex__44934__auto__);


if(cljs.core.seq((state_46985[(4)]))){
var statearr_47011_47765 = state_46985;
(statearr_47011_47765[(1)] = cljs.core.first((state_46985[(4)])));

} else {
throw ex__44934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47766 = state_46985;
state_46985 = G__47766;
continue;
} else {
return ret_value__44932__auto__;
}
break;
}
});
cljs$core$async$state_machine__44931__auto__ = function(state_46985){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44931__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44931__auto____1.call(this,state_46985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44931__auto____0;
cljs$core$async$state_machine__44931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44931__auto____1;
return cljs$core$async$state_machine__44931__auto__;
})()
})();
var state__45135__auto__ = (function (){var statearr_47012 = f__45134__auto__();
(statearr_47012[(6)] = c__45133__auto___47747);

return statearr_47012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45135__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__47014 = arguments.length;
switch (G__47014) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45133__auto___47772 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45134__auto__ = (function (){var switch__44930__auto__ = (function (state_47059){
var state_val_47060 = (state_47059[(1)]);
if((state_val_47060 === (7))){
var inst_47055 = (state_47059[(2)]);
var state_47059__$1 = state_47059;
var statearr_47061_47773 = state_47059__$1;
(statearr_47061_47773[(2)] = inst_47055);

(statearr_47061_47773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47060 === (1))){
var inst_47015 = [];
var inst_47016 = inst_47015;
var inst_47017 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47059__$1 = (function (){var statearr_47062 = state_47059;
(statearr_47062[(7)] = inst_47016);

(statearr_47062[(8)] = inst_47017);

return statearr_47062;
})();
var statearr_47063_47774 = state_47059__$1;
(statearr_47063_47774[(2)] = null);

(statearr_47063_47774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47060 === (4))){
var inst_47020 = (state_47059[(9)]);
var inst_47020__$1 = (state_47059[(2)]);
var inst_47021 = (inst_47020__$1 == null);
var inst_47022 = cljs.core.not(inst_47021);
var state_47059__$1 = (function (){var statearr_47064 = state_47059;
(statearr_47064[(9)] = inst_47020__$1);

return statearr_47064;
})();
if(inst_47022){
var statearr_47065_47775 = state_47059__$1;
(statearr_47065_47775[(1)] = (5));

} else {
var statearr_47066_47776 = state_47059__$1;
(statearr_47066_47776[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47060 === (15))){
var inst_47016 = (state_47059[(7)]);
var inst_47047 = cljs.core.vec(inst_47016);
var state_47059__$1 = state_47059;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47059__$1,(18),out,inst_47047);
} else {
if((state_val_47060 === (13))){
var inst_47042 = (state_47059[(2)]);
var state_47059__$1 = state_47059;
var statearr_47067_47777 = state_47059__$1;
(statearr_47067_47777[(2)] = inst_47042);

(statearr_47067_47777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47060 === (6))){
var inst_47016 = (state_47059[(7)]);
var inst_47044 = inst_47016.length;
var inst_47045 = (inst_47044 > (0));
var state_47059__$1 = state_47059;
if(cljs.core.truth_(inst_47045)){
var statearr_47068_47778 = state_47059__$1;
(statearr_47068_47778[(1)] = (15));

} else {
var statearr_47069_47779 = state_47059__$1;
(statearr_47069_47779[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47060 === (17))){
var inst_47052 = (state_47059[(2)]);
var inst_47053 = cljs.core.async.close_BANG_(out);
var state_47059__$1 = (function (){var statearr_47070 = state_47059;
(statearr_47070[(10)] = inst_47052);

return statearr_47070;
})();
var statearr_47071_47780 = state_47059__$1;
(statearr_47071_47780[(2)] = inst_47053);

(statearr_47071_47780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47060 === (3))){
var inst_47057 = (state_47059[(2)]);
var state_47059__$1 = state_47059;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47059__$1,inst_47057);
} else {
if((state_val_47060 === (12))){
var inst_47016 = (state_47059[(7)]);
var inst_47035 = cljs.core.vec(inst_47016);
var state_47059__$1 = state_47059;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47059__$1,(14),out,inst_47035);
} else {
if((state_val_47060 === (2))){
var state_47059__$1 = state_47059;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47059__$1,(4),ch);
} else {
if((state_val_47060 === (11))){
var inst_47016 = (state_47059[(7)]);
var inst_47024 = (state_47059[(11)]);
var inst_47020 = (state_47059[(9)]);
var inst_47032 = inst_47016.push(inst_47020);
var tmp47072 = inst_47016;
var inst_47016__$1 = tmp47072;
var inst_47017 = inst_47024;
var state_47059__$1 = (function (){var statearr_47073 = state_47059;
(statearr_47073[(12)] = inst_47032);

(statearr_47073[(7)] = inst_47016__$1);

(statearr_47073[(8)] = inst_47017);

return statearr_47073;
})();
var statearr_47074_47786 = state_47059__$1;
(statearr_47074_47786[(2)] = null);

(statearr_47074_47786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47060 === (9))){
var inst_47017 = (state_47059[(8)]);
var inst_47028 = cljs.core.keyword_identical_QMARK_(inst_47017,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_47059__$1 = state_47059;
var statearr_47075_47787 = state_47059__$1;
(statearr_47075_47787[(2)] = inst_47028);

(statearr_47075_47787[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47060 === (5))){
var inst_47025 = (state_47059[(13)]);
var inst_47024 = (state_47059[(11)]);
var inst_47017 = (state_47059[(8)]);
var inst_47020 = (state_47059[(9)]);
var inst_47024__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47020) : f.call(null,inst_47020));
var inst_47025__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47024__$1,inst_47017);
var state_47059__$1 = (function (){var statearr_47080 = state_47059;
(statearr_47080[(13)] = inst_47025__$1);

(statearr_47080[(11)] = inst_47024__$1);

return statearr_47080;
})();
if(inst_47025__$1){
var statearr_47081_47788 = state_47059__$1;
(statearr_47081_47788[(1)] = (8));

} else {
var statearr_47082_47789 = state_47059__$1;
(statearr_47082_47789[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47060 === (14))){
var inst_47024 = (state_47059[(11)]);
var inst_47020 = (state_47059[(9)]);
var inst_47037 = (state_47059[(2)]);
var inst_47038 = [];
var inst_47039 = inst_47038.push(inst_47020);
var inst_47016 = inst_47038;
var inst_47017 = inst_47024;
var state_47059__$1 = (function (){var statearr_47083 = state_47059;
(statearr_47083[(7)] = inst_47016);

(statearr_47083[(14)] = inst_47037);

(statearr_47083[(15)] = inst_47039);

(statearr_47083[(8)] = inst_47017);

return statearr_47083;
})();
var statearr_47087_47791 = state_47059__$1;
(statearr_47087_47791[(2)] = null);

(statearr_47087_47791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47060 === (16))){
var state_47059__$1 = state_47059;
var statearr_47088_47792 = state_47059__$1;
(statearr_47088_47792[(2)] = null);

(statearr_47088_47792[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47060 === (10))){
var inst_47030 = (state_47059[(2)]);
var state_47059__$1 = state_47059;
if(cljs.core.truth_(inst_47030)){
var statearr_47089_47793 = state_47059__$1;
(statearr_47089_47793[(1)] = (11));

} else {
var statearr_47090_47795 = state_47059__$1;
(statearr_47090_47795[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47060 === (18))){
var inst_47049 = (state_47059[(2)]);
var state_47059__$1 = state_47059;
var statearr_47091_47799 = state_47059__$1;
(statearr_47091_47799[(2)] = inst_47049);

(statearr_47091_47799[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47060 === (8))){
var inst_47025 = (state_47059[(13)]);
var state_47059__$1 = state_47059;
var statearr_47092_47800 = state_47059__$1;
(statearr_47092_47800[(2)] = inst_47025);

(statearr_47092_47800[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44931__auto__ = null;
var cljs$core$async$state_machine__44931__auto____0 = (function (){
var statearr_47095 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47095[(0)] = cljs$core$async$state_machine__44931__auto__);

(statearr_47095[(1)] = (1));

return statearr_47095;
});
var cljs$core$async$state_machine__44931__auto____1 = (function (state_47059){
while(true){
var ret_value__44932__auto__ = (function (){try{while(true){
var result__44933__auto__ = switch__44930__auto__(state_47059);
if(cljs.core.keyword_identical_QMARK_(result__44933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44933__auto__;
}
break;
}
}catch (e47096){var ex__44934__auto__ = e47096;
var statearr_47097_47801 = state_47059;
(statearr_47097_47801[(2)] = ex__44934__auto__);


if(cljs.core.seq((state_47059[(4)]))){
var statearr_47098_47802 = state_47059;
(statearr_47098_47802[(1)] = cljs.core.first((state_47059[(4)])));

} else {
throw ex__44934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47803 = state_47059;
state_47059 = G__47803;
continue;
} else {
return ret_value__44932__auto__;
}
break;
}
});
cljs$core$async$state_machine__44931__auto__ = function(state_47059){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44931__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44931__auto____1.call(this,state_47059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44931__auto____0;
cljs$core$async$state_machine__44931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44931__auto____1;
return cljs$core$async$state_machine__44931__auto__;
})()
})();
var state__45135__auto__ = (function (){var statearr_47099 = f__45134__auto__();
(statearr_47099[(6)] = c__45133__auto___47772);

return statearr_47099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45135__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
