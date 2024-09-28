"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[952],{8149:function(e,r,t){t.d(r,{M:function(){return n}});function n(e,r,{checkForDefaultPrevented:t=!0}={}){return function(n){if(e?.(n),!1===t||!n.defaultPrevented)return r?.(n)}}},976:function(e,r,t){t.d(r,{B:function(){return a}});var n=t(2265),o=t(8324),l=t(1584),i=t(1538),s=t(7437);function a(e){let r=e+"CollectionProvider",[t,a]=(0,o.b)(r),[c,d]=t(r,{collectionRef:{current:null},itemMap:new Map}),u=e=>{let{scope:r,children:t}=e,o=n.useRef(null),l=n.useRef(new Map).current;return(0,s.jsx)(c,{scope:r,itemMap:l,collectionRef:o,children:t})};u.displayName=r;let p=e+"CollectionSlot",f=n.forwardRef((e,r)=>{let{scope:t,children:n}=e,o=d(p,t),a=(0,l.e)(r,o.collectionRef);return(0,s.jsx)(i.g7,{ref:a,children:n})});f.displayName=p;let b=e+"CollectionItemSlot",m="data-radix-collection-item",g=n.forwardRef((e,r)=>{let{scope:t,children:o,...a}=e,c=n.useRef(null),u=(0,l.e)(r,c),p=d(b,t);return n.useEffect(()=>(p.itemMap.set(c,{ref:c,...a}),()=>void p.itemMap.delete(c))),(0,s.jsx)(i.g7,{[m]:"",ref:u,children:o})});return g.displayName=b,[{Provider:u,Slot:f,ItemSlot:g},function(r){let t=d(e+"CollectionConsumer",r);return n.useCallback(()=>{let e=t.collectionRef.current;if(!e)return[];let r=Array.from(e.querySelectorAll("[".concat(m,"]")));return Array.from(t.itemMap.values()).sort((e,t)=>r.indexOf(e.ref.current)-r.indexOf(t.ref.current))},[t.collectionRef,t.itemMap])},a]}},1584:function(e,r,t){t.d(r,{F:function(){return o},e:function(){return l}});var n=t(2265);function o(...e){return r=>e.forEach(e=>{"function"==typeof e?e(r):null!=e&&(e.current=r)})}function l(...e){return n.useCallback(o(...e),e)}},8324:function(e,r,t){t.d(r,{b:function(){return l}});var n=t(2265),o=t(7437);function l(e,r=[]){let t=[],l=()=>{let r=t.map(e=>n.createContext(e));return function(t){let o=t?.[e]||r;return n.useMemo(()=>({[`__scope${e}`]:{...t,[e]:o}}),[t,o])}};return l.scopeName=e,[function(r,l){let i=n.createContext(l),s=t.length;function a(r){let{scope:t,children:l,...a}=r,c=t?.[e][s]||i,d=n.useMemo(()=>a,Object.values(a));return(0,o.jsx)(c.Provider,{value:d,children:l})}return t=[...t,l],a.displayName=r+"Provider",[a,function(t,o){let a=o?.[e][s]||i,c=n.useContext(a);if(c)return c;if(void 0!==l)return l;throw Error(`\`${t}\` must be used within \`${r}\``)}]},function(...e){let r=e[0];if(1===e.length)return r;let t=()=>{let t=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=t.reduce((r,{useScope:t,scopeName:n})=>{let o=t(e)[`__scope${n}`];return{...r,...o}},{});return n.useMemo(()=>({[`__scope${r.scopeName}`]:o}),[o])}};return t.scopeName=r.scopeName,t}(l,...r)]}},2358:function(e,r,t){t.d(r,{I0:function(){return v},XB:function(){return p},fC:function(){return g}});var n,o=t(2265),l=t(8149),i=t(5171),s=t(1584),a=t(5137),c=t(7437),d="dismissableLayer.update",u=o.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),p=o.forwardRef((e,r)=>{var t,p;let{disableOutsidePointerEvents:f=!1,onEscapeKeyDown:g,onPointerDownOutside:v,onFocusOutside:h,onInteractOutside:y,onDismiss:w,...x}=e,E=o.useContext(u),[k,N]=o.useState(null),C=null!==(p=null==k?void 0:k.ownerDocument)&&void 0!==p?p:null===(t=globalThis)||void 0===t?void 0:t.document,[,z]=o.useState({}),j=(0,s.e)(r,e=>N(e)),O=Array.from(E.layers),[P]=[...E.layersWithOutsidePointerEventsDisabled].slice(-1),R=O.indexOf(P),S=k?O.indexOf(k):-1,M=E.layersWithOutsidePointerEventsDisabled.size>0,W=S>=R,L=function(e){var r;let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(r=globalThis)||void 0===r?void 0:r.document,n=(0,a.W)(e),l=o.useRef(!1),i=o.useRef(()=>{});return o.useEffect(()=>{let e=e=>{if(e.target&&!l.current){let r=function(){m("dismissableLayer.pointerDownOutside",n,o,{discrete:!0})},o={originalEvent:e};"touch"===e.pointerType?(t.removeEventListener("click",i.current),i.current=r,t.addEventListener("click",i.current,{once:!0})):r()}else t.removeEventListener("click",i.current);l.current=!1},r=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(r),t.removeEventListener("pointerdown",e),t.removeEventListener("click",i.current)}},[t,n]),{onPointerDownCapture:()=>l.current=!0}}(e=>{let r=e.target,t=[...E.branches].some(e=>e.contains(r));!W||t||(null==v||v(e),null==y||y(e),e.defaultPrevented||null==w||w())},C),T=function(e){var r;let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(r=globalThis)||void 0===r?void 0:r.document,n=(0,a.W)(e),l=o.useRef(!1);return o.useEffect(()=>{let e=e=>{e.target&&!l.current&&m("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>l.current=!0,onBlurCapture:()=>l.current=!1}}(e=>{let r=e.target;[...E.branches].some(e=>e.contains(r))||(null==h||h(e),null==y||y(e),e.defaultPrevented||null==w||w())},C);return!function(e,r=globalThis?.document){let t=(0,a.W)(e);o.useEffect(()=>{let e=e=>{"Escape"===e.key&&t(e)};return r.addEventListener("keydown",e,{capture:!0}),()=>r.removeEventListener("keydown",e,{capture:!0})},[t,r])}(e=>{S!==E.layers.size-1||(null==g||g(e),!e.defaultPrevented&&w&&(e.preventDefault(),w()))},C),o.useEffect(()=>{if(k)return f&&(0===E.layersWithOutsidePointerEventsDisabled.size&&(n=C.body.style.pointerEvents,C.body.style.pointerEvents="none"),E.layersWithOutsidePointerEventsDisabled.add(k)),E.layers.add(k),b(),()=>{f&&1===E.layersWithOutsidePointerEventsDisabled.size&&(C.body.style.pointerEvents=n)}},[k,C,f,E]),o.useEffect(()=>()=>{k&&(E.layers.delete(k),E.layersWithOutsidePointerEventsDisabled.delete(k),b())},[k,E]),o.useEffect(()=>{let e=()=>z({});return document.addEventListener(d,e),()=>document.removeEventListener(d,e)},[]),(0,c.jsx)(i.WV.div,{...x,ref:j,style:{pointerEvents:M?W?"auto":"none":void 0,...e.style},onFocusCapture:(0,l.M)(e.onFocusCapture,T.onFocusCapture),onBlurCapture:(0,l.M)(e.onBlurCapture,T.onBlurCapture),onPointerDownCapture:(0,l.M)(e.onPointerDownCapture,L.onPointerDownCapture)})});p.displayName="DismissableLayer";var f=o.forwardRef((e,r)=>{let t=o.useContext(u),n=o.useRef(null),l=(0,s.e)(r,n);return o.useEffect(()=>{let e=n.current;if(e)return t.branches.add(e),()=>{t.branches.delete(e)}},[t.branches]),(0,c.jsx)(i.WV.div,{...e,ref:l})});function b(){let e=new CustomEvent(d);document.dispatchEvent(e)}function m(e,r,t,n){let{discrete:o}=n,l=t.originalEvent.target,s=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:t});r&&l.addEventListener(e,r,{once:!0}),o?(0,i.jH)(l,s):l.dispatchEvent(s)}f.displayName="DismissableLayerBranch";var g=p,v=f},6935:function(e,r,t){t.d(r,{h:function(){return a}});var n=t(2265),o=t(4887),l=t(5171),i=t(1336),s=t(7437),a=n.forwardRef((e,r)=>{var t,a;let{container:c,...d}=e,[u,p]=n.useState(!1);(0,i.b)(()=>p(!0),[]);let f=c||u&&(null===(a=globalThis)||void 0===a?void 0:null===(t=a.document)||void 0===t?void 0:t.body);return f?o.createPortal((0,s.jsx)(l.WV.div,{...d,ref:r}),f):null});a.displayName="Portal"},1383:function(e,r,t){t.d(r,{z:function(){return s}});var n=t(2265),o=t(4887),l=t(1584),i=t(1336),s=e=>{var r,t;let s,c;let{present:d,children:u}=e,p=function(e){var r,t;let[l,s]=n.useState(),c=n.useRef({}),d=n.useRef(e),u=n.useRef("none"),[p,f]=(r=e?"mounted":"unmounted",t={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},n.useReducer((e,r)=>{let n=t[e][r];return null!=n?n:e},r));return n.useEffect(()=>{let e=a(c.current);u.current="mounted"===p?e:"none"},[p]),(0,i.b)(()=>{let r=c.current,t=d.current;if(t!==e){let n=u.current,o=a(r);e?f("MOUNT"):"none"===o||(null==r?void 0:r.display)==="none"?f("UNMOUNT"):t&&n!==o?f("ANIMATION_OUT"):f("UNMOUNT"),d.current=e}},[e,f]),(0,i.b)(()=>{if(l){let e=e=>{let r=a(c.current).includes(e.animationName);e.target===l&&r&&o.flushSync(()=>f("ANIMATION_END"))},r=e=>{e.target===l&&(u.current=a(c.current))};return l.addEventListener("animationstart",r),l.addEventListener("animationcancel",e),l.addEventListener("animationend",e),()=>{l.removeEventListener("animationstart",r),l.removeEventListener("animationcancel",e),l.removeEventListener("animationend",e)}}f("ANIMATION_END")},[l,f]),{isPresent:["mounted","unmountSuspended"].includes(p),ref:n.useCallback(e=>{e&&(c.current=getComputedStyle(e)),s(e)},[])}}(d),f="function"==typeof u?u({present:p.isPresent}):n.Children.only(u),b=(0,l.e)(p.ref,(s=null===(r=Object.getOwnPropertyDescriptor(f.props,"ref"))||void 0===r?void 0:r.get)&&"isReactWarning"in s&&s.isReactWarning?f.ref:(s=null===(t=Object.getOwnPropertyDescriptor(f,"ref"))||void 0===t?void 0:t.get)&&"isReactWarning"in s&&s.isReactWarning?f.props.ref:f.props.ref||f.ref);return"function"==typeof u||p.isPresent?n.cloneElement(f,{ref:b}):null};function a(e){return(null==e?void 0:e.animationName)||"none"}s.displayName="Presence"},5171:function(e,r,t){t.d(r,{WV:function(){return s},jH:function(){return a}});var n=t(2265),o=t(4887),l=t(1538),i=t(7437),s=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let t=n.forwardRef((e,t)=>{let{asChild:n,...o}=e,s=n?l.g7:r;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,i.jsx)(s,{...o,ref:t})});return t.displayName=`Primitive.${r}`,{...e,[r]:t}},{});function a(e,r){e&&o.flushSync(()=>e.dispatchEvent(r))}},1538:function(e,r,t){t.d(r,{g7:function(){return i}});var n=t(2265),o=t(1584),l=t(7437),i=n.forwardRef((e,r)=>{let{children:t,...o}=e,i=n.Children.toArray(t),a=i.find(c);if(a){let e=a.props.children,t=i.map(r=>r!==a?r:n.Children.count(e)>1?n.Children.only(null):n.isValidElement(e)?e.props.children:null);return(0,l.jsx)(s,{...o,ref:r,children:n.isValidElement(e)?n.cloneElement(e,void 0,t):null})}return(0,l.jsx)(s,{...o,ref:r,children:t})});i.displayName="Slot";var s=n.forwardRef((e,r)=>{let{children:t,...l}=e;if(n.isValidElement(t)){let e,i;let s=(e=Object.getOwnPropertyDescriptor(t.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?t.ref:(e=Object.getOwnPropertyDescriptor(t,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?t.props.ref:t.props.ref||t.ref;return n.cloneElement(t,{...function(e,r){let t={...r};for(let n in r){let o=e[n],l=r[n];/^on[A-Z]/.test(n)?o&&l?t[n]=(...e)=>{l(...e),o(...e)}:o&&(t[n]=o):"style"===n?t[n]={...o,...l}:"className"===n&&(t[n]=[o,l].filter(Boolean).join(" "))}return{...e,...t}}(l,t.props),ref:r?(0,o.F)(r,s):s})}return n.Children.count(t)>1?n.Children.only(null):null});s.displayName="SlotClone";var a=({children:e})=>(0,l.jsx)(l.Fragment,{children:e});function c(e){return n.isValidElement(e)&&e.type===a}},5137:function(e,r,t){t.d(r,{W:function(){return o}});var n=t(2265);function o(e){let r=n.useRef(e);return n.useEffect(()=>{r.current=e}),n.useMemo(()=>(...e)=>r.current?.(...e),[])}},1715:function(e,r,t){t.d(r,{T:function(){return l}});var n=t(2265),o=t(5137);function l({prop:e,defaultProp:r,onChange:t=()=>{}}){let[l,i]=function({defaultProp:e,onChange:r}){let t=n.useState(e),[l]=t,i=n.useRef(l),s=(0,o.W)(r);return n.useEffect(()=>{i.current!==l&&(s(l),i.current=l)},[l,i,s]),t}({defaultProp:r,onChange:t}),s=void 0!==e,a=s?e:l,c=(0,o.W)(t);return[a,n.useCallback(r=>{if(s){let t="function"==typeof r?r(e):r;t!==e&&c(t)}else i(r)},[s,e,i,c])]}},1336:function(e,r,t){t.d(r,{b:function(){return o}});var n=t(2265),o=globalThis?.document?n.useLayoutEffect:()=>{}},2218:function(e,r,t){t.d(r,{j:function(){return l}});let n=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,o=function(){for(var e,r,t=0,n="";t<arguments.length;)(e=arguments[t++])&&(r=function e(r){var t,n,o="";if("string"==typeof r||"number"==typeof r)o+=r;else if("object"==typeof r){if(Array.isArray(r))for(t=0;t<r.length;t++)r[t]&&(n=e(r[t]))&&(o&&(o+=" "),o+=n);else for(t in r)r[t]&&(o&&(o+=" "),o+=t)}return o}(e))&&(n&&(n+=" "),n+=r);return n},l=(e,r)=>t=>{var l;if((null==r?void 0:r.variants)==null)return o(e,null==t?void 0:t.class,null==t?void 0:t.className);let{variants:i,defaultVariants:s}=r,a=Object.keys(i).map(e=>{let r=null==t?void 0:t[e],o=null==s?void 0:s[e];if(null===r)return null;let l=n(r)||n(o);return i[e][l]}),c=t&&Object.entries(t).reduce((e,r)=>{let[t,n]=r;return void 0===n||(e[t]=n),e},{});return o(e,a,null==r?void 0:null===(l=r.compoundVariants)||void 0===l?void 0:l.reduce((e,r)=>{let{class:t,className:n,...o}=r;return Object.entries(o).every(e=>{let[r,t]=e;return Array.isArray(t)?t.includes({...s,...c}[r]):({...s,...c})[r]===t})?[...e,t,n]:e},[]),null==t?void 0:t.class,null==t?void 0:t.className)}},4839:function(e,r,t){t.d(r,{W:function(){return n}});function n(){for(var e,r,t=0,n="",o=arguments.length;t<o;t++)(e=arguments[t])&&(r=function e(r){var t,n,o="";if("string"==typeof r||"number"==typeof r)o+=r;else if("object"==typeof r){if(Array.isArray(r)){var l=r.length;for(t=0;t<l;t++)r[t]&&(n=e(r[t]))&&(o&&(o+=" "),o+=n)}else for(n in r)r[n]&&(o&&(o+=" "),o+=n)}return o}(e))&&(n&&(n+=" "),n+=r);return n}},6164:function(e,r,t){t.d(r,{m6:function(){return Z}});let n=e=>{let r=s(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:n}=e;return{getClassGroupId:e=>{let t=e.split("-");return""===t[0]&&1!==t.length&&t.shift(),o(t,r)||i(e)},getConflictingClassGroupIds:(e,r)=>{let o=t[e]||[];return r&&n[e]?[...o,...n[e]]:o}}},o=(e,r)=>{if(0===e.length)return r.classGroupId;let t=e[0],n=r.nextPart.get(t),l=n?o(e.slice(1),n):void 0;if(l)return l;if(0===r.validators.length)return;let i=e.join("-");return r.validators.find(({validator:e})=>e(i))?.classGroupId},l=/^\[(.+)\]$/,i=e=>{if(l.test(e)){let r=l.exec(e)[1],t=r?.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}},s=e=>{let{theme:r,prefix:t}=e,n={nextPart:new Map,validators:[]};return u(Object.entries(e.classGroups),t).forEach(([e,t])=>{a(t,n,e,r)}),n},a=(e,r,t,n)=>{e.forEach(e=>{if("string"==typeof e){(""===e?r:c(r,e)).classGroupId=t;return}if("function"==typeof e){if(d(e)){a(e(n),r,t,n);return}r.validators.push({validator:e,classGroupId:t});return}Object.entries(e).forEach(([e,o])=>{a(o,c(r,e),t,n)})})},c=(e,r)=>{let t=e;return r.split("-").forEach(e=>{t.nextPart.has(e)||t.nextPart.set(e,{nextPart:new Map,validators:[]}),t=t.nextPart.get(e)}),t},d=e=>e.isThemeGetter,u=(e,r)=>r?e.map(([e,t])=>[e,t.map(e=>"string"==typeof e?r+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(([e,t])=>[r+e,t])):e)]):e,p=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let r=0,t=new Map,n=new Map,o=(o,l)=>{t.set(o,l),++r>e&&(r=0,n=t,t=new Map)};return{get(e){let r=t.get(e);return void 0!==r?r:void 0!==(r=n.get(e))?(o(e,r),r):void 0},set(e,r){t.has(e)?t.set(e,r):o(e,r)}}},f=e=>{let{separator:r,experimentalParseClassName:t}=e,n=1===r.length,o=r[0],l=r.length,i=e=>{let t;let i=[],s=0,a=0;for(let c=0;c<e.length;c++){let d=e[c];if(0===s){if(d===o&&(n||e.slice(c,c+l)===r)){i.push(e.slice(a,c)),a=c+l;continue}if("/"===d){t=c;continue}}"["===d?s++:"]"===d&&s--}let c=0===i.length?e:e.substring(a),d=c.startsWith("!"),u=d?c.substring(1):c;return{modifiers:i,hasImportantModifier:d,baseClassName:u,maybePostfixModifierPosition:t&&t>a?t-a:void 0}};return t?e=>t({className:e,parseClassName:i}):i},b=e=>{if(e.length<=1)return e;let r=[],t=[];return e.forEach(e=>{"["===e[0]?(r.push(...t.sort(),e),t=[]):t.push(e)}),r.push(...t.sort()),r},m=e=>({cache:p(e.cacheSize),parseClassName:f(e),...n(e)}),g=/\s+/,v=(e,r)=>{let{parseClassName:t,getClassGroupId:n,getConflictingClassGroupIds:o}=r,l=[],i=e.trim().split(g),s="";for(let e=i.length-1;e>=0;e-=1){let r=i[e],{modifiers:a,hasImportantModifier:c,baseClassName:d,maybePostfixModifierPosition:u}=t(r),p=!!u,f=n(p?d.substring(0,u):d);if(!f){if(!p||!(f=n(d))){s=r+(s.length>0?" "+s:s);continue}p=!1}let m=b(a).join(":"),g=c?m+"!":m,v=g+f;if(l.includes(v))continue;l.push(v);let h=o(f,p);for(let e=0;e<h.length;++e){let r=h[e];l.push(g+r)}s=r+(s.length>0?" "+s:s)}return s};function h(){let e,r,t=0,n="";for(;t<arguments.length;)(e=arguments[t++])&&(r=y(e))&&(n&&(n+=" "),n+=r);return n}let y=e=>{let r;if("string"==typeof e)return e;let t="";for(let n=0;n<e.length;n++)e[n]&&(r=y(e[n]))&&(t&&(t+=" "),t+=r);return t},w=e=>{let r=r=>r[e]||[];return r.isThemeGetter=!0,r},x=/^\[(?:([a-z-]+):)?(.+)\]$/i,E=/^\d+\/\d+$/,k=new Set(["px","full","screen"]),N=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,C=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,z=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,j=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,O=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,P=e=>S(e)||k.has(e)||E.test(e),R=e=>B(e,"length",F),S=e=>!!e&&!Number.isNaN(Number(e)),M=e=>B(e,"number",S),W=e=>!!e&&Number.isInteger(Number(e)),L=e=>e.endsWith("%")&&S(e.slice(0,-1)),T=e=>x.test(e),D=e=>N.test(e),A=new Set(["length","size","percentage"]),I=e=>B(e,A,q),_=e=>B(e,"position",q),$=new Set(["image","url"]),G=e=>B(e,$,X),U=e=>B(e,"",H),V=()=>!0,B=(e,r,t)=>{let n=x.exec(e);return!!n&&(n[1]?"string"==typeof r?n[1]===r:r.has(n[1]):t(n[2]))},F=e=>C.test(e)&&!z.test(e),q=()=>!1,H=e=>j.test(e),X=e=>O.test(e),Z=function(e,...r){let t,n,o;let l=function(s){return n=(t=m(r.reduce((e,r)=>r(e),e()))).cache.get,o=t.cache.set,l=i,i(s)};function i(e){let r=n(e);if(r)return r;let l=v(e,t);return o(e,l),l}return function(){return l(h.apply(null,arguments))}}(()=>{let e=w("colors"),r=w("spacing"),t=w("blur"),n=w("brightness"),o=w("borderColor"),l=w("borderRadius"),i=w("borderSpacing"),s=w("borderWidth"),a=w("contrast"),c=w("grayscale"),d=w("hueRotate"),u=w("invert"),p=w("gap"),f=w("gradientColorStops"),b=w("gradientColorStopPositions"),m=w("inset"),g=w("margin"),v=w("opacity"),h=w("padding"),y=w("saturate"),x=w("scale"),E=w("sepia"),k=w("skew"),N=w("space"),C=w("translate"),z=()=>["auto","contain","none"],j=()=>["auto","hidden","clip","visible","scroll"],O=()=>["auto",T,r],A=()=>[T,r],$=()=>["",P,R],B=()=>["auto",S,T],F=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],q=()=>["solid","dashed","dotted","double","none"],H=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],X=()=>["start","end","center","between","around","evenly","stretch"],Z=()=>["","0",T],J=()=>["auto","avoid","all","avoid-page","page","left","right","column"],K=()=>[S,T];return{cacheSize:500,separator:":",theme:{colors:[V],spacing:[P,R],blur:["none","",D,T],brightness:K(),borderColor:[e],borderRadius:["none","","full",D,T],borderSpacing:A(),borderWidth:$(),contrast:K(),grayscale:Z(),hueRotate:K(),invert:Z(),gap:A(),gradientColorStops:[e],gradientColorStopPositions:[L,R],inset:O(),margin:O(),opacity:K(),padding:A(),saturate:K(),scale:K(),sepia:Z(),skew:K(),space:A(),translate:A()},classGroups:{aspect:[{aspect:["auto","square","video",T]}],container:["container"],columns:[{columns:[D]}],"break-after":[{"break-after":J()}],"break-before":[{"break-before":J()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...F(),T]}],overflow:[{overflow:j()}],"overflow-x":[{"overflow-x":j()}],"overflow-y":[{"overflow-y":j()}],overscroll:[{overscroll:z()}],"overscroll-x":[{"overscroll-x":z()}],"overscroll-y":[{"overscroll-y":z()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",W,T]}],basis:[{basis:O()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",T]}],grow:[{grow:Z()}],shrink:[{shrink:Z()}],order:[{order:["first","last","none",W,T]}],"grid-cols":[{"grid-cols":[V]}],"col-start-end":[{col:["auto",{span:["full",W,T]},T]}],"col-start":[{"col-start":B()}],"col-end":[{"col-end":B()}],"grid-rows":[{"grid-rows":[V]}],"row-start-end":[{row:["auto",{span:[W,T]},T]}],"row-start":[{"row-start":B()}],"row-end":[{"row-end":B()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",T]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",T]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...X()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...X(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...X(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[h]}],px:[{px:[h]}],py:[{py:[h]}],ps:[{ps:[h]}],pe:[{pe:[h]}],pt:[{pt:[h]}],pr:[{pr:[h]}],pb:[{pb:[h]}],pl:[{pl:[h]}],m:[{m:[g]}],mx:[{mx:[g]}],my:[{my:[g]}],ms:[{ms:[g]}],me:[{me:[g]}],mt:[{mt:[g]}],mr:[{mr:[g]}],mb:[{mb:[g]}],ml:[{ml:[g]}],"space-x":[{"space-x":[N]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[N]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",T,r]}],"min-w":[{"min-w":[T,r,"min","max","fit"]}],"max-w":[{"max-w":[T,r,"none","full","min","max","fit","prose",{screen:[D]},D]}],h:[{h:[T,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[T,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[T,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[T,r,"auto","min","max","fit"]}],"font-size":[{text:["base",D,R]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",M]}],"font-family":[{font:[V]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",T]}],"line-clamp":[{"line-clamp":["none",S,M]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",P,T]}],"list-image":[{"list-image":["none",T]}],"list-style-type":[{list:["none","disc","decimal",T]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[v]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[v]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...q(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",P,R]}],"underline-offset":[{"underline-offset":["auto",P,T]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:A()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",T]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",T]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[v]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...F(),_]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",I]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},G]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[b]}],"gradient-via-pos":[{via:[b]}],"gradient-to-pos":[{to:[b]}],"gradient-from":[{from:[f]}],"gradient-via":[{via:[f]}],"gradient-to":[{to:[f]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[v]}],"border-style":[{border:[...q(),"hidden"]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[v]}],"divide-style":[{divide:q()}],"border-color":[{border:[o]}],"border-color-x":[{"border-x":[o]}],"border-color-y":[{"border-y":[o]}],"border-color-t":[{"border-t":[o]}],"border-color-r":[{"border-r":[o]}],"border-color-b":[{"border-b":[o]}],"border-color-l":[{"border-l":[o]}],"divide-color":[{divide:[o]}],"outline-style":[{outline:["",...q()]}],"outline-offset":[{"outline-offset":[P,T]}],"outline-w":[{outline:[P,R]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:$()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[v]}],"ring-offset-w":[{"ring-offset":[P,R]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",D,U]}],"shadow-color":[{shadow:[V]}],opacity:[{opacity:[v]}],"mix-blend":[{"mix-blend":[...H(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":H()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[n]}],contrast:[{contrast:[a]}],"drop-shadow":[{"drop-shadow":["","none",D,T]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[u]}],saturate:[{saturate:[y]}],sepia:[{sepia:[E]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[n]}],"backdrop-contrast":[{"backdrop-contrast":[a]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[v]}],"backdrop-saturate":[{"backdrop-saturate":[y]}],"backdrop-sepia":[{"backdrop-sepia":[E]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",T]}],duration:[{duration:K()}],ease:[{ease:["linear","in","out","in-out",T]}],delay:[{delay:K()}],animate:[{animate:["none","spin","ping","pulse","bounce",T]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[x]}],"scale-x":[{"scale-x":[x]}],"scale-y":[{"scale-y":[x]}],rotate:[{rotate:[W,T]}],"translate-x":[{"translate-x":[C]}],"translate-y":[{"translate-y":[C]}],"skew-x":[{"skew-x":[k]}],"skew-y":[{"skew-y":[k]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",T]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",T]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":A()}],"scroll-mx":[{"scroll-mx":A()}],"scroll-my":[{"scroll-my":A()}],"scroll-ms":[{"scroll-ms":A()}],"scroll-me":[{"scroll-me":A()}],"scroll-mt":[{"scroll-mt":A()}],"scroll-mr":[{"scroll-mr":A()}],"scroll-mb":[{"scroll-mb":A()}],"scroll-ml":[{"scroll-ml":A()}],"scroll-p":[{"scroll-p":A()}],"scroll-px":[{"scroll-px":A()}],"scroll-py":[{"scroll-py":A()}],"scroll-ps":[{"scroll-ps":A()}],"scroll-pe":[{"scroll-pe":A()}],"scroll-pt":[{"scroll-pt":A()}],"scroll-pr":[{"scroll-pr":A()}],"scroll-pb":[{"scroll-pb":A()}],"scroll-pl":[{"scroll-pl":A()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",T]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[P,R,M]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}})}}]);