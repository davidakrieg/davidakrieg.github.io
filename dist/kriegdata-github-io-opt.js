(function(){'use strict';var g="object"===typeof __ScalaJSEnv&&__ScalaJSEnv?__ScalaJSEnv:{},k="object"===typeof g.global&&g.global?g.global:"object"===typeof global&&global&&global.Object===Object?global:this;g.global=k;var l="object"===typeof g.exportsNamespace&&g.exportsNamespace?g.exportsNamespace:k;g.exportsNamespace=l;k.Object.freeze(g);var aa=0;function ba(a){var b,c;for(c in a)b=c;return b}function ca(a,b,c){var d=new a.U(b[c]);if(c<b.length-1){a=a.t;c+=1;for(var e=d.P,f=0;f<e.length;f++)e[f]=ca(a,b,c)}return d}
function da(a){switch(typeof a){case "string":return m(ea);case "number":var b=a|0;return b===a?b<<24>>24===b&&1/b!==1/-0?m(fa):b<<16>>16===b&&1/b!==1/-0?m(ga):m(ha):a!==a||ia(a)===a?m(ja):m(ka);case "boolean":return m(la);case "undefined":return m(ma);default:if(null===a)throw(new p).g();return q(a)?m(na):a&&a.d?m(a.d):null}}
function r(a){switch(typeof a){case "string":return s(t(),a);case "number":return oa(pa(),a);case "boolean":return a?1231:1237;case "undefined":return 0;default:return a&&a.d||null===a?a.v():42}}function x(a){return null===a?y().h:a}this.__ScalaJSExportsNamespace=l;
function z(a,b,c,d,e,f,n){var h=ba(a);f=f||function(a){return!!(a&&a.d&&a.d.i[h])};n=n||function(a,b){return!!(a&&a.d&&a.d.G===b&&a.d.E.i[h])};this.U=void 0;this.M=e;this.i=d;this.fa=this.t=null;this.R="L"+c+";";this.r=this.s=void 0;this.ba=n;this.name=c;this.isPrimitive=!1;this.isInterface=b;this.isArrayClass=!1;this.isInstance=f}
function qa(a){function b(a){if("number"===typeof a){this.P=Array(a);for(var b=0;b<a;b++)this.P[b]=c}else this.P=a}var c=a.fa;"longZero"==c&&(c=y().h);b.prototype=new A;b.prototype.d=this;var d="["+a.R,e=a.E||a,f=(a.G||0)+1;this.U=b;this.M=ra;this.i={f:1};this.t=a;this.E=e;this.G=f;this.fa=null;this.R=d;this.ba=this.r=this.s=void 0;this.name=d;this.isInterface=this.isPrimitive=!1;this.isArrayClass=!0;this.isInstance=function(a){return e.ba(a,f)}}
function m(a){if(!a.s){var b=new B;b.u=a;a.s=b}return a.s}z.prototype.getFakeInstance=function(){return this===ea?"some string":this===la?!1:this===fa||this===ga||this===ha||this===ja||this===ka?0:this===na?y().h:this===ma?void 0:{d:this}};z.prototype.getSuperclass=function(){return this.M?m(this.M):null};z.prototype.getComponentType=function(){return this.t?m(this.t):null};z.prototype.newArrayOfThisClass=function(a){for(var b=this,c=0;c<a.length;c++)b.r||(b.r=new qa(b)),b=b.r;return ca(b,a,0)};
qa.prototype=z.prototype;var C=k.Math.imul||function(a,b){var c=a&65535,d=b&65535;return c*d+((a>>>16&65535)*d+c*(b>>>16&65535)<<16>>>0)|0},ia=k.Math.fround||function(a){return+a};function D(){}function A(){}A.prototype=D.prototype;D.prototype.g=function(){return this};D.prototype.o=function(){var a=sa(da(this)),b=(+(this.v()>>>0)).toString(16);return a+"@"+b};D.prototype.v=function(){var a;this&&this.d?(a=this.$idHashCode$0,void 0===a&&(this.$idHashCode$0=aa=a=aa+1|0)):a=null===this?0:r(this);return a};D.prototype.toString=function(){return this.o()};
var ra=new z({f:0},!1,"java.lang.Object",{f:1},void 0,function(a){return null!==a},function(a,b){var c=a&&a.d;if(c){var d=c.G||0;return!(d<b)&&(d>b||!c.E.isPrimitive)}return!1});D.prototype.d=ra;function B(){this.u=null}B.prototype=new A;function sa(a){return a.u.name}B.prototype.o=function(){return(this.u.isInterface?"interface ":this.u.isPrimitive?"":"class ")+sa(this)};B.prototype.d=new z({qa:0},!1,"java.lang.Class",{qa:1,f:1});function ta(){this.cb=null;this.Va=this.Ra=this.Sa=0}
ta.prototype=new A;function ua(a,b){var c=b,c=c|c>>>1|0,c=c|c>>>2|0,c=c|c>>>4|0,c=c|c>>>8|0;return 32-va(c|c>>>16|0)|0}function va(a){a=a-(1431655765&a>>1)|0;a=(858993459&a)+(858993459&a>>2)|0;return C(16843009,252645135&(a+(a>>4)|0))>>24}function wa(a,b){return va(-1+(b&(-b|0))|0)}ta.prototype.d=new z({va:0},!1,"java.lang.Integer$",{va:1,f:1});var xa=void 0;function E(){xa||(xa=(new ta).g());return xa}function ya(){}ya.prototype=new A;function za(){}za.prototype=ya.prototype;function Aa(){}
Aa.prototype=new A;function Ba(){}Ba.prototype=Aa.prototype;function F(){this.l=!1;this.Y=this.ma=this.w=this.q=null;this.A=!1;this.ca=this.$=0}F.prototype=new A;
F.prototype.g=function(){G=this;this.q=(this.l=!!(k.ArrayBuffer&&k.Int32Array&&k.Float32Array&&k.Float64Array))?new k.ArrayBuffer(8):null;this.w=this.l?new k.Int32Array(this.q,0,2):null;this.ma=this.l?new k.Float32Array(this.q,0,2):null;this.Y=this.l?new k.Float64Array(this.q,0,1):null;if(this.l)this.w[0]=16909060,a=1===((new k.Int8Array(this.q,0,8))[0]|0);else var a=!0;this.$=(this.A=a)?0:1;this.ca=this.A?1:0;return this};
function oa(a,b){var c=b|0;if(c===b&&-Infinity!==1/b)return c;if(a.l)a.Y[0]=b,c=Ca(Da(H(a.w[a.$]|0),32),Ea((new I).e(4194303,1023,0),H(a.w[a.ca]|0)));else{if(b!==b)var c=!1,d=2047,e=+k.Math.pow(2,51);else if(Infinity===b||-Infinity===b)c=0>b,d=2047,e=0;else if(0===b)c=-Infinity===1/b,e=d=0;else{var f=(c=0>b)?-b:b;if(f>=+k.Math.pow(2,-1022)){var d=+k.Math.pow(2,52),e=+k.Math.log(f)/0.6931471805599453,e=+k.Math.floor(e)|0,e=1023>e?e:1023,n=f/+k.Math.pow(2,e)*d,f=+k.Math.floor(n),n=n-f,f=0.5>n?f:0.5<
n?1+f:0!==f%2?1+f:f;2<=f/d&&(e=1+e|0,f=1);1023<e?(e=2047,f=0):(e=1023+e|0,f-=d);d=e;e=f}else d=f/+k.Math.pow(2,-1074),e=+k.Math.floor(d),f=d-e,d=0,e=0.5>f?e:0.5<f?1+e:0!==e%2?1+e:e}e=+ +e;f=e|0;c=Ca(Da(H((c?-2147483648:0)|(d|0)<<20|e/4294967296|0),32),Ea((new I).e(4194303,1023,0),H(f)))}return J(K(c,L(c)))}F.prototype.d=new z({Ea:0},!1,"scala.scalajs.runtime.Bits$",{Ea:1,f:1});var G=void 0;function pa(){G||(G=(new F).g());return G}function Fa(){}Fa.prototype=new A;
function s(a,b){for(var c=0,d=1,e=-1+(b.length|0)|0;0<=e;)c=c+C(65535&(b.charCodeAt(e)|0),d)|0,d=C(31,d),e=-1+e|0;return c}Fa.prototype.d=new z({Ga:0},!1,"scala.scalajs.runtime.RuntimeString$",{Ga:1,f:1});var Ga=void 0;function t(){Ga||(Ga=(new Fa).g());return Ga}function M(){this.fb=!1;this.ja=this.W=this.ka=null;this.eb=!1}M.prototype=new A;
M.prototype.g=function(){N=this;for(var a={O:"java_lang_Object",T:"java_lang_String",V:"scala_Unit",Z:"scala_Boolean",C:"scala_Char",B:"scala_Byte",S:"scala_Short",I:"scala_Int",J:"scala_Long",F:"scala_Float",D:"scala_Double"},b=0;22>=b;)2<=b&&(a["T"+b]="scala_Tuple"+b),a["F"+b]="scala_Function"+b,b=1+b|0;this.ka=a;this.W={sjsr_:"scala_scalajs_runtime_",sjs_:"scala_scalajs_",sci_:"scala_collection_immutable_",scm_:"scala_collection_mutable_",scg_:"scala_collection_generic_",sc_:"scala_collection_",
sr_:"scala_runtime_",s_:"scala_",jl_:"java_lang_",ju_:"java_util_"};this.ja=k.Object.keys(this.W);return this};M.prototype.d=new z({Ha:0},!1,"scala.scalajs.runtime.StackTrace$",{Ha:1,f:1});var N=void 0;function Ha(){N||(N=(new M).g());return N}function Ia(){}Ia.prototype=new A;function Ja(a,b){return b&&b.d&&b.d.i.N?b.m:b}Ia.prototype.d=new z({Ia:0},!1,"scala.scalajs.runtime.package$",{Ia:1,f:1});var Ka=void 0;function La(){Ka||(Ka=(new Ia).g());return Ka}
var ma=new z({Ja:0},!1,"scala.runtime.BoxedUnit",{Ja:1,f:1},void 0,function(a){return void 0===a});function Ma(){}Ma.prototype=new A;Ma.prototype.d=new z({Ka:0},!1,"scala.runtime.BoxesRunTime$",{Ka:1,f:1});var Na=void 0;function Oa(){}Oa.prototype=new A;Oa.prototype.d=new z({La:0},!1,"scala.runtime.ScalaRunTime$",{La:1,f:1});var Pa=void 0;function O(){}O.prototype=new A;O.prototype.g=function(){P=this;return this};
O.prototype.main=function(){var a=k.document.createElement("p");a.innerHTML="\x3cstrong\x3eIt works!\x3c/strong\x3e";k.document.getElementById("playground").appendChild(a)};O.prototype.d=new z({ga:0},!1,"kriegdata.Home$",{ga:1,f:1,lb:1});var P=void 0;l.kriegdata=l.kriegdata||{};l.kriegdata.Home=function(){P||(P=(new O).g());return P};var la=new z({oa:0},!1,"java.lang.Boolean",{oa:1,f:1,j:1},void 0,function(a){return"boolean"===typeof a});function Q(){this.mb=this.la=this.da=null}Q.prototype=new A;
function Qa(){}Qa.prototype=Q.prototype;Q.prototype.X=function(){var a=Ha(),b;a:try{b=a.undef()}catch(c){La();c&&c.d&&c.d.i.x?a=c:(a=new R,a.m=c,S.prototype.g.call(a));if(null!==a){if(a&&a.d&&a.d.i.N){b=a.m;break a}throw Ja(La(),a);}throw c;}this.stackdata=b;return this};Q.prototype.o=function(){var a=sa(da(this)),b=this.da;return null===b?a:a+": "+b};Q.prototype.aa=function(a,b){this.da=a;this.la=b;this.X();return this};
function T(){this.Da=this.za=this.Ca=this.pb=this.ob=this.hb=this.nb=this.db=0}T.prototype=new Ba;T.prototype.g=function(){Ra=this;this.Ca=s(t(),"Seq");this.za=s(t(),"Map");this.Da=s(t(),"Set");return this};T.prototype.d=new z({Ba:0},!1,"scala.util.hashing.MurmurHash3$",{Ba:1,kb:1,f:1});
var Ra=void 0,fa=new z({pa:0},!1,"java.lang.Byte",{pa:1,n:1,f:1,j:1},void 0,function(a){return a<<24>>24===a&&1/a!==1/-0}),ka=new z({ra:0},!1,"java.lang.Double",{ra:1,n:1,f:1,j:1},void 0,function(a){return"number"===typeof a});function Sa(){Q.call(this)}Sa.prototype=new Qa;function Ta(){}Ta.prototype=Sa.prototype;
var ja=new z({sa:0},!1,"java.lang.Float",{sa:1,n:1,f:1,j:1},void 0,function(a){return a!==a||ia(a)===a}),ha=new z({ua:0},!1,"java.lang.Integer",{ua:1,n:1,f:1,j:1},void 0,function(a){return(a|0)===a&&1/a!==1/-0}),na=new z({wa:0},!1,"java.lang.Long",{wa:1,n:1,f:1,j:1},void 0,function(a){return q(a)}),ga=new z({ya:0},!1,"java.lang.Short",{ya:1,n:1,f:1,j:1},void 0,function(a){return a<<16>>16===a&&1/a!==1/-0});function I(){this.a=this.b=this.c=0}I.prototype=new za;
function Ca(a,b){return(new I).e(a.c|b.c,a.b|b.b,a.a|b.a)}I.prototype.e=function(a,b,c){this.c=a;this.b=b;this.a=c;return this};I.prototype.o=function(){if(0===this.c&&0===this.b&&0===this.a)return"0";if(U(this,y().k))return"-9223372036854775808";if(0!==(524288&this.a))return"-"+V(this).o();var a=y().Q,b=this,c="";for(;;){var d=b;if(0===d.c&&0===d.b&&0===d.a)return c;d=Ua(b,a);b=d[0];d=""+J(d[1]);c=(0===b.c&&0===b.b&&0===b.a?"":"000000000".substring(d.length|0))+d+c}};
function Ua(a,b){if(0===b.c&&0===b.b&&0===b.a)throw(new Va).H("/ by zero");if(0===a.c&&0===a.b&&0===a.a)return[y().h,y().h];if(U(b,y().k))return U(a,y().k)?[y().z,y().h]:[y().h,a];var c=0!==(524288&a.a),d=0!==(524288&b.a),e=U(a,y().k),f=0===b.a&&0===b.b&&0!==b.c&&0===(b.c&(-1+b.c|0))?wa(E(),b.c):0===b.a&&0!==b.b&&0===b.c&&0===(b.b&(-1+b.b|0))?22+wa(E(),b.b)|0:0!==b.a&&0===b.b&&0===b.c&&0===(b.a&(-1+b.a|0))?44+wa(E(),b.a)|0:-1;if(0<=f){if(e)return c=X(a,f),[d?V(c):c,y().h];var e=0!==(524288&a.a)?V(a):
a,n=X(e,f),d=c!==d?V(n):n,e=22>=f?(new I).e(e.c&(-1+(1<<f)|0),0,0):44>=f?(new I).e(e.c,e.b&(-1+(1<<(-22+f|0))|0),0):(new I).e(e.c,e.b,e.a&(-1+(1<<(-44+f|0))|0)),c=c?V(e):e;return[d,c]}f=0!==(524288&b.a)?V(b):b;if(e)var h=y().y;else if(h=0!==(524288&a.a)?V(a):a,0===(524288&f.a)?0!==(524288&h.a)||f.a>h.a||f.a===h.a&&f.b>h.b||f.a===h.a&&f.b===h.b&&f.c>h.c:!(0===(524288&h.a)||f.a<h.a||f.a===h.a&&f.b<h.b||f.a===h.a&&f.b===h.b&&f.c<=h.c))return[y().h,a];var v=Wa(f)-Wa(h)|0,w=Da(f,v),f=v,v=w,w=h,h=y().h;
a:{var W;for(;;){if(0>f)var u=!0;else u=w,u=0===u.c&&0===u.b&&0===u.a;if(u){W=w;n=h;break a}else u=Xa(w,V(v)),0===(524288&u.a)?(w=-1+f|0,v=X(v,1),h=22>f?(new I).e(h.c|1<<f,h.b,h.a):44>f?(new I).e(h.c,h.b|1<<(-22+f|0),h.a):(new I).e(h.c,h.b,h.a|1<<(-44+f|0)),f=w,w=u):(f=-1+f|0,v=X(v,1))}}d=c!==d?V(n):n;c&&e?(c=V(W),e=y().z,c=Xa(c,V(e))):c=c?V(W):W;return[d,c]}function Ea(a,b){return(new I).e(a.c&b.c,a.b&b.b,a.a&b.a)}function L(a){return(new I).e(4194303&(a.b>>10|a.a<<12),4194303&(a.a>>>10|0),0)}
function Da(a,b){var c=63&b;if(22>c){var d=22-c|0;return(new I).e(4194303&a.c<<c,4194303&(a.b<<c|a.c>>d),1048575&(a.a<<c|a.b>>d))}return 44>c?(d=-22+c|0,(new I).e(0,4194303&a.c<<d,1048575&(a.b<<d|a.c>>(44-c|0)))):(new I).e(0,0,1048575&a.c<<(-44+c|0))}function J(a){return a.c|a.b<<22}function H(a){var b=new I;I.prototype.e.call(b,4194303&a,4194303&a>>22,0>a?1048575:0);return b}
function V(a){var b=4194303&(1+~a.c|0),c=4194303&(~a.b+(0===b?1:0)|0);return(new I).e(b,c,1048575&(~a.a+(0===b&&0===c?1:0)|0))}function Xa(a,b){var c=a.c+b.c|0,d=(a.b+b.b|0)+(c>>22)|0;return(new I).e(4194303&c,4194303&d,1048575&((a.a+b.a|0)+(d>>22)|0))}
function X(a,b){var c=63&b,d=0!==(524288&a.a),e=d?-1048576|a.a:a.a;if(22>c)return d=22-c|0,(new I).e(4194303&(a.c>>c|a.b<<d),4194303&(a.b>>c|e<<d),1048575&e>>c);if(44>c){var f=-22+c|0;return(new I).e(4194303&(a.b>>f|e<<(44-c|0)),4194303&e>>f,1048575&(d?1048575:0))}return(new I).e(4194303&e>>(-44+c|0),4194303&(d?4194303:0),1048575&(d?1048575:0))}function Ya(a){return U(a,y().k)?-9223372036854775E3:0!==(524288&a.a)?-Ya(V(a)):a.c+4194304*a.b+17592186044416*a.a}
function Wa(a){return 0!==a.a?-12+ua(E(),a.a)|0:0!==a.b?10+ua(E(),a.b)|0:32+ua(E(),a.c)|0}I.prototype.v=function(){return J(K(this,L(this)))};function K(a,b){return(new I).e(a.c^b.c,a.b^b.b,a.a^b.a)}function U(a,b){return a.c===b.c&&a.b===b.b&&a.a===b.a}function q(a){return!!(a&&a.d&&a.d.i.ea)}I.prototype.d=new z({ea:0},!1,"scala.scalajs.runtime.RuntimeLong",{ea:1,n:1,f:1,j:1});
function Y(){this.bb=this.ab=this.$a=this.Za=this.Ya=this.Xa=this.Wa=this.Ua=this.Ta=this.Qa=this.Pa=this.Oa=this.Na=this.Ma=0;this.Q=this.y=this.k=this.ha=this.z=this.h=null}Y.prototype=new A;Y.prototype.g=function(){Z=this;this.h=(new I).e(0,0,0);this.z=(new I).e(1,0,0);this.ha=(new I).e(4194303,4194303,1048575);this.k=(new I).e(0,0,524288);this.y=(new I).e(4194303,4194303,524287);this.Q=(new I).e(1755648,238,0);return this};
function Za(a,b){if(b!==b)return a.h;if(-9223372036854775E3>b)return a.k;if(9223372036854775E3<=b)return a.y;if(0>b)return V(Za(a,-b));var c=b,d=17592186044416<=c?c/17592186044416|0:0,c=c-17592186044416*d,e=4194304<=c?c/4194304|0:0;return(new I).e(c-4194304*e|0,e,d)}Y.prototype.d=new z({Fa:0},!1,"scala.scalajs.runtime.RuntimeLong$",{Fa:1,f:1,Aa:1,p:1});var Z=void 0;function y(){Z||(Z=(new Y).g());return Z}
var ea=new z({ia:0},!1,"java.lang.String",{ia:1,f:1,p:1,gb:1,j:1},void 0,function(a){return"string"===typeof a});function S(){Q.call(this)}S.prototype=new Ta;function $(){}$.prototype=S.prototype;S.prototype.g=function(){S.prototype.aa.call(this,null,null);return this};S.prototype.H=function(a){S.prototype.aa.call(this,a,null);return this};function Va(){Q.call(this)}Va.prototype=new $;Va.prototype.d=new z({na:0},!1,"java.lang.ArithmeticException",{na:1,L:1,K:1,x:1,f:1,p:1});
function $a(){Q.call(this)}$a.prototype=new $;$a.prototype.d=new z({ta:0},!1,"java.lang.IndexOutOfBoundsException",{ta:1,L:1,K:1,x:1,f:1,p:1});function p(){Q.call(this)}p.prototype=new $;p.prototype.g=function(){p.prototype.H.call(this,null);return this};p.prototype.d=new z({xa:0},!1,"java.lang.NullPointerException",{xa:1,L:1,K:1,x:1,f:1,p:1});function R(){Q.call(this);this.m=null}R.prototype=new $;R.prototype.X=function(){Ha();this.stackdata=this.m;return this};
R.prototype.o=function(){return void 0===this.m?"undefined":this.m.toString()};
R.prototype.v=function(){var a;Ra||(Ra=(new T).g());var b=-889275714;for(a=0;1>a;){Pa||(Pa=(new Oa).g());var c;b:switch(a){case 0:c=this.m;break b;default:throw(new $a).H(""+a);}if(null===c)c=0;else if(c&&c.d&&c.d.i.n||"number"===typeof c){Na||(Na=(new Ma).g());var d=void 0;if((c|0)===c&&1/c!==1/-0)d=c|0;else if(d=void 0,q(c))d=J(x(c)),d=U(H(d),x(c))?d:J(K(x(c),L(x(c))));else if(d=void 0,"number"===typeof c){var e=+c|0,d=+c;e===d?d=e:(e=Za(y(),+c),d=Ya(e)===d?J(K(e,L(e))):oa(pa(),+c))}else d=r(c);
c=d}else c=r(c);d=void 0;c=C(-862048943,c);E();c=c<<15|c>>>-15|0;c=C(461845907,c);d=b^c;E();d=d<<13|d>>>-13|0;b=-430675100+C(5,d)|0;a=1+a|0}a=b^1;a=C(-2048144789,a^(a>>>16|0));a^=a>>>13|0;a=C(-1028477387,a);a^=a>>>16|0;return a};R.prototype.d=new z({N:0},!1,"scala.scalajs.js.JavaScriptException",{N:1,L:1,K:1,x:1,f:1,p:1,jb:1,ib:1,Aa:1});}).call(this);
//# sourceMappingURL=kriegdata-github-io-opt.js.map
