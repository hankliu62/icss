import{a as f,i as c,t as u}from"./toNumber.ea332b01.js";function _(r,n,t){var i=-1,e=r.length;n<0&&(n=-n>e?0:e+n),t=t>e?e:t,t<0&&(t+=e),e=n>t?0:t-n>>>0,n>>>=0;for(var a=Array(e);++i<e;)a[i]=r[i+n];return a}var I=_;function g(r,n){return r===n||r!==r&&n!==n}var b=g,F=f,$=c,v="[object AsyncFunction]",y="[object Function]",A="[object GeneratorFunction]",m="[object Proxy]";function T(r){if(!$(r))return!1;var n=F(r);return n==y||n==A||n==v||n==m}var h=T,p=9007199254740991;function x(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=p}var E=x,l=h,N=E;function G(r){return r!=null&&N(r.length)&&!l(r)}var L=G,M=9007199254740991,k=/^(?:0|[1-9]\d*)$/;function S(r,n){var t=typeof r;return n=n==null?M:n,!!n&&(t=="number"||t!="symbol"&&k.test(r))&&r>-1&&r%1==0&&r<n}var C=S,j=b,q=L,O=C,R=c;function X(r,n,t){if(!R(t))return!1;var i=typeof n;return(i=="number"?q(t)&&O(n,t.length):i=="string"&&n in t)?j(t[n],r):!1}var w=X,P=u,s=1/0,U=17976931348623157e292;function Y(r){if(!r)return r===0?r:0;if(r=P(r),r===s||r===-s){var n=r<0?-1:1;return n*U}return r===r?r:0}var d=Y,B=d;function D(r){var n=B(r),t=n%1;return n===n?t?n-t:n:0}var H=D,J=I,K=w,Q=H,V=Math.ceil,W=Math.max;function Z(r,n,t){(t?K(r,n,t):n===void 0)?n=1:n=W(Q(n),0);var i=r==null?0:r.length;if(!i||n<1)return[];for(var e=0,a=0,o=Array(V(i/n));e<i;)o[a++]=J(r,e,e+=n);return o}var rr=Z;export{C as _,E as a,L as b,rr as c,b as e,h as i};