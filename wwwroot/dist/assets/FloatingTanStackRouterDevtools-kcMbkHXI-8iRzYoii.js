import{A as e,C as t,D as n,E as r,O as i,S as a,T as o,_ as s,a as c,b as l,c as u,d,f,g as p,h as m,i as h,k as g,l as _,m as v,n as y,o as b,p as x,r as S,s as C,t as w,u as T,v as E,w as D,x as O,y as k}from"./index-KViR8nhy.js";var A={data:``},j=e=>{if(typeof window==`object`){let t=(e?e.querySelector(`#_goober`):window._goober)||Object.assign(document.createElement(`style`),{innerHTML:` `,id:`_goober`});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||A},M=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,N=/\/\*[^]*?\*\/|  +/g,P=/\n+/g,F=(e,t)=>{let n=``,r=``,i=``;for(let a in e){let o=e[a];a[0]==`@`?a[1]==`i`?n=a+` `+o+`;`:r+=a[1]==`f`?F(o,a):a+`{`+F(o,a[1]==`k`?``:t)+`}`:typeof o==`object`?r+=F(o,t?t.replace(/([^,])+/g,e=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+` `+t:t)):a):o!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,`-$&`).toLowerCase(),i+=F.p?F.p(a,o):a+`:`+o+`;`)}return n+(t&&i?t+`{`+i+`}`:i)+r},I={},L=e=>{if(typeof e==`object`){let t=``;for(let n in e)t+=n+L(e[n]);return t}return e},ee=(e,t,n,r,i)=>{let a=L(e),o=I[a]||(I[a]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return`go`+n})(a));if(!I[o]){let t=a===e?(e=>{let t,n,r=[{}];for(;t=M.exec(e.replace(N,``));)t[4]?r.shift():t[3]?(n=t[3].replace(P,` `).trim(),r.unshift(r[0][n]=r[0][n]||{})):r[0][t[1]]=t[2].replace(P,` `).trim();return r[0]})(e):e;I[o]=F(i?{[`@keyframes `+o]:t}:t,n?``:`.`+o)}let s=n&&I.g?I.g:null;return n&&(I.g=I[o]),((e,t,n,r)=>{r?t.data=t.data.replace(r,e):t.data.indexOf(e)===-1&&(t.data=n?e+t.data:t.data+e)})(I[o],t,r,s),o},R=(e,t,n)=>e.reduce((e,r,i)=>{let a=t[i];if(a&&a.call){let e=a(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;a=t?`.`+t:e&&typeof e==`object`?e.props?``:F(e,``):!1===e?``:e}return e+r+(a??``)},``);function z(e){let t=this||{},n=e.call?e(t.p):e;return ee(n.unshift?n.raw?R(n,[].slice.call(arguments,1),t.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(t.p):n),{}):n,j(t.target),t.g,t.o,t.k)}z.bind({g:1}),z.bind({k:1});var te=typeof window>`u`;function B(e){return e.isFetching&&e.status===`success`?e.isFetching===`beforeLoad`?`purple`:`blue`:{pending:`yellow`,success:`green`,error:`red`,notFound:`purple`,redirected:`gray`}[e.status]}function V(e,t){let n=e.find(e=>e.routeId===t.id);return n?B(n):`gray`}function ne(){let[e,t]=v(!1);return(te?d:x)(()=>{t(!0)}),e}var re=e=>{let t=Object.getOwnPropertyNames(Object(e)),n=typeof e==`bigint`?`${e.toString()}n`:e;try{return JSON.stringify(n,t)}catch{return`unable to stringify`}};function H(e,t=[e=>e]){return e.map((e,t)=>[e,t]).sort(([e,n],[r,i])=>{for(let n of t){let t=n(e),i=n(r);if(t===void 0){if(i===void 0)continue;return 1}if(t!==i)return t>i?1:-1}return n-i}).map(([e])=>e)}var U={colors:{inherit:`inherit`,current:`currentColor`,transparent:`transparent`,black:`#000000`,white:`#ffffff`,neutral:{50:`#f9fafb`,100:`#f2f4f7`,200:`#eaecf0`,300:`#d0d5dd`,400:`#98a2b3`,500:`#667085`,600:`#475467`,700:`#344054`,800:`#1d2939`,900:`#101828`},darkGray:{50:`#525c7a`,100:`#49536e`,200:`#414962`,300:`#394056`,400:`#313749`,500:`#292e3d`,600:`#212530`,700:`#191c24`,800:`#111318`,900:`#0b0d10`},gray:{50:`#f9fafb`,100:`#f2f4f7`,200:`#eaecf0`,300:`#d0d5dd`,400:`#98a2b3`,500:`#667085`,600:`#475467`,700:`#344054`,800:`#1d2939`,900:`#101828`},blue:{25:`#F5FAFF`,50:`#EFF8FF`,100:`#D1E9FF`,200:`#B2DDFF`,300:`#84CAFF`,400:`#53B1FD`,500:`#2E90FA`,600:`#1570EF`,700:`#175CD3`,800:`#1849A9`,900:`#194185`},green:{25:`#F6FEF9`,50:`#ECFDF3`,100:`#D1FADF`,200:`#A6F4C5`,300:`#6CE9A6`,400:`#32D583`,500:`#12B76A`,600:`#039855`,700:`#027A48`,800:`#05603A`,900:`#054F31`},red:{50:`#fef2f2`,100:`#fee2e2`,200:`#fecaca`,300:`#fca5a5`,400:`#f87171`,500:`#ef4444`,600:`#dc2626`,700:`#b91c1c`,800:`#991b1b`,900:`#7f1d1d`,950:`#450a0a`},yellow:{25:`#FFFCF5`,50:`#FFFAEB`,100:`#FEF0C7`,200:`#FEDF89`,300:`#FEC84B`,400:`#FDB022`,500:`#F79009`,600:`#DC6803`,700:`#B54708`,800:`#93370D`,900:`#7A2E0E`},purple:{25:`#FAFAFF`,50:`#F4F3FF`,100:`#EBE9FE`,200:`#D9D6FE`,300:`#BDB4FE`,400:`#9B8AFB`,500:`#7A5AF8`,600:`#6938EF`,700:`#5925DC`,800:`#4A1FB8`,900:`#3E1C96`},teal:{25:`#F6FEFC`,50:`#F0FDF9`,100:`#CCFBEF`,200:`#99F6E0`,300:`#5FE9D0`,400:`#2ED3B7`,500:`#15B79E`,600:`#0E9384`,700:`#107569`,800:`#125D56`,900:`#134E48`},pink:{25:`#fdf2f8`,50:`#fce7f3`,100:`#fbcfe8`,200:`#f9a8d4`,300:`#f472b6`,400:`#ec4899`,500:`#db2777`,600:`#be185d`,700:`#9d174d`,800:`#831843`,900:`#500724`},cyan:{25:`#ecfeff`,50:`#cffafe`,100:`#a5f3fc`,200:`#67e8f9`,300:`#22d3ee`,400:`#06b6d4`,500:`#0891b2`,600:`#0e7490`,700:`#155e75`,800:`#164e63`,900:`#083344`}},alpha:{90:`e5`,70:`b3`,20:`33`},font:{size:{"2xs":`calc(var(--tsrd-font-size) * 0.625)`,xs:`calc(var(--tsrd-font-size) * 0.75)`,sm:`calc(var(--tsrd-font-size) * 0.875)`,md:`var(--tsrd-font-size)`},lineHeight:{xs:`calc(var(--tsrd-font-size) * 1)`,sm:`calc(var(--tsrd-font-size) * 1.25)`},weight:{normal:`400`,medium:`500`,semibold:`600`,bold:`700`},fontFamily:{sans:`ui-sans-serif, Inter, system-ui, sans-serif, sans-serif`,mono:`ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`}},border:{radius:{xs:`calc(var(--tsrd-font-size) * 0.125)`,sm:`calc(var(--tsrd-font-size) * 0.25)`,md:`calc(var(--tsrd-font-size) * 0.375)`,full:`9999px`}},size:{0:`0px`,.5:`calc(var(--tsrd-font-size) * 0.125)`,1:`calc(var(--tsrd-font-size) * 0.25)`,1.5:`calc(var(--tsrd-font-size) * 0.375)`,2:`calc(var(--tsrd-font-size) * 0.5)`,2.5:`calc(var(--tsrd-font-size) * 0.625)`,3:`calc(var(--tsrd-font-size) * 0.75)`,3.5:`calc(var(--tsrd-font-size) * 0.875)`,4:`calc(var(--tsrd-font-size) * 1)`,5:`calc(var(--tsrd-font-size) * 1.25)`,8:`calc(var(--tsrd-font-size) * 2)`}},ie=e=>{let{colors:t,font:n,size:r,alpha:i,border:a}=U,{fontFamily:o,lineHeight:s,size:c}=n,l=e?z.bind({target:e}):z;return{devtoolsPanelContainer:l`
      direction: ltr;
      position: fixed;
      bottom: 0;
      right: 0;
      z-index: 99999;
      width: 100%;
      max-height: 90%;
      border-top: 1px solid ${t.gray[700]};
      transform-origin: top;
    `,devtoolsPanelContainerVisibility:e=>l`
        visibility: ${e?`visible`:`hidden`};
      `,devtoolsPanelContainerResizing:e=>e()?l`
          transition: none;
        `:l`
        transition: all 0.4s ease;
      `,devtoolsPanelContainerAnimation:(e,t)=>e?l`
          pointer-events: auto;
          transform: translateY(0);
        `:l`
        pointer-events: none;
        transform: translateY(${t}px);
      `,logo:l`
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      font-family: ${o.sans};
      gap: ${U.size[.5]};
      padding: 0px;
      &:hover {
        opacity: 0.7;
      }
      &:focus-visible {
        outline-offset: 4px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${t.blue[800]};
      }
    `,tanstackLogo:l`
      font-size: ${n.size.md};
      font-weight: ${n.weight.bold};
      line-height: ${n.lineHeight.xs};
      white-space: nowrap;
      color: ${t.gray[300]};
    `,routerLogo:l`
      font-weight: ${n.weight.semibold};
      font-size: ${n.size.xs};
      background: linear-gradient(to right, #84cc16, #10b981);
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,devtoolsPanel:l`
      display: flex;
      font-size: ${c.sm};
      font-family: ${o.sans};
      background-color: ${t.darkGray[700]};
      color: ${t.gray[300]};

      @media (max-width: 700px) {
        flex-direction: column;
      }
      @media (max-width: 600px) {
        font-size: ${c.xs};
      }
    `,dragHandle:l`
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 4px;
      cursor: row-resize;
      z-index: 100000;
      &:hover {
        background-color: ${t.purple[400]}${i[90]};
      }
    `,firstContainer:l`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      border-right: 1px solid ${t.gray[700]};
      display: flex;
      flex-direction: column;
    `,routerExplorerContainer:l`
      overflow-y: auto;
      flex: 1;
    `,routerExplorer:l`
      padding: ${U.size[2]};
    `,row:l`
      display: flex;
      align-items: center;
      padding: ${U.size[2]} ${U.size[2.5]};
      gap: ${U.size[2.5]};
      border-bottom: ${t.darkGray[500]} 1px solid;
      align-items: center;
    `,detailsHeader:l`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      position: sticky;
      top: 0;
      z-index: 2;
      background-color: ${t.darkGray[600]};
      padding: 0px ${U.size[2]};
      font-weight: ${n.weight.medium};
      font-size: ${n.size.xs};
      min-height: ${U.size[8]};
      line-height: ${n.lineHeight.xs};
      text-align: left;
      display: flex;
      align-items: center;
    `,maskedBadge:l`
      background: ${t.yellow[900]}${i[70]};
      color: ${t.yellow[300]};
      display: inline-block;
      padding: ${U.size[0]} ${U.size[2.5]};
      border-radius: ${a.radius.full};
      font-size: ${n.size.xs};
      font-weight: ${n.weight.normal};
      border: 1px solid ${t.yellow[300]};
    `,maskedLocation:l`
      color: ${t.yellow[300]};
    `,detailsContent:l`
      padding: ${U.size[1.5]} ${U.size[2]};
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: ${n.size.xs};
    `,routeMatchesToggle:l`
      display: flex;
      align-items: center;
      border: 1px solid ${t.gray[500]};
      border-radius: ${a.radius.sm};
      overflow: hidden;
    `,routeMatchesToggleBtn:(e,r)=>{let a=[l`
        appearance: none;
        border: none;
        font-size: 12px;
        padding: 4px 8px;
        background: transparent;
        cursor: pointer;
        font-family: ${o.sans};
        font-weight: ${n.weight.medium};
      `];if(e){let e=l`
          background: ${t.darkGray[400]};
          color: ${t.gray[300]};
        `;a.push(e)}else{let e=l`
          color: ${t.gray[500]};
          background: ${t.darkGray[800]}${i[20]};
        `;a.push(e)}return r&&a.push(l`
          border-right: 1px solid ${U.colors.gray[500]};
        `),a},detailsHeaderInfo:l`
      flex: 1;
      justify-content: flex-end;
      display: flex;
      align-items: center;
      font-weight: ${n.weight.normal};
      color: ${t.gray[400]};
    `,matchRow:e=>{let n=[l`
        display: flex;
        border-bottom: 1px solid ${t.darkGray[400]};
        cursor: pointer;
        align-items: center;
        padding: ${r[1]} ${r[2]};
        gap: ${r[2]};
        font-size: ${c.xs};
        color: ${t.gray[300]};
      `];if(e){let e=l`
          background: ${t.darkGray[500]};
        `;n.push(e)}return n},matchIndicator:e=>{let n=[l`
        flex: 0 0 auto;
        width: ${r[3]};
        height: ${r[3]};
        background: ${t[e][900]};
        border: 1px solid ${t[e][500]};
        border-radius: ${a.radius.full};
        transition: all 0.25s ease-out;
        box-sizing: border-box;
      `];if(e===`gray`){let e=l`
          background: ${t.gray[700]};
          border-color: ${t.gray[400]};
        `;n.push(e)}return n},matchID:l`
      flex: 1;
      line-height: ${s.xs};
    `,ageTicker:e=>{let n=[l`
        display: flex;
        gap: ${r[1]};
        font-size: ${c.xs};
        color: ${t.gray[400]};
        font-variant-numeric: tabular-nums;
        line-height: ${s.xs};
      `];if(e){let e=l`
          color: ${t.yellow[400]};
        `;n.push(e)}return n},secondContainer:l`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      border-right: 1px solid ${t.gray[700]};
      display: flex;
      flex-direction: column;
    `,thirdContainer:l`
      flex: 1 1 500px;
      overflow: auto;
      display: flex;
      flex-direction: column;
      height: 100%;
      border-right: 1px solid ${t.gray[700]};

      @media (max-width: 700px) {
        border-top: 2px solid ${t.gray[700]};
      }
    `,fourthContainer:l`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      display: flex;
      flex-direction: column;
    `,routesContainer:l`
      overflow-x: auto;
      overflow-y: visible;
    `,routesRowContainer:(e,n)=>{let i=[l`
        display: flex;
        border-bottom: 1px solid ${t.darkGray[400]};
        align-items: center;
        padding: ${r[1]} ${r[2]};
        gap: ${r[2]};
        font-size: ${c.xs};
        color: ${t.gray[300]};
        cursor: ${n?`pointer`:`default`};
        line-height: ${s.xs};
      `];if(e){let e=l`
          background: ${t.darkGray[500]};
        `;i.push(e)}return i},routesRow:e=>{let n=[l`
        flex: 1 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: ${c.xs};
        line-height: ${s.xs};
      `];if(!e){let e=l`
          color: ${t.gray[400]};
        `;n.push(e)}return n},routesRowInner:l`
      display: 'flex';
      align-items: 'center';
      flex-grow: 1;
      min-width: 0;
    `,routeParamInfo:l`
      color: ${t.gray[400]};
      font-size: ${c.xs};
      line-height: ${s.xs};
    `,nestedRouteRow:e=>l`
        margin-left: ${e?0:r[3.5]};
        border-left: ${e?``:`solid 1px ${t.gray[700]}`};
      `,code:l`
      font-size: ${c.xs};
      line-height: ${s.xs};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `,matchesContainer:l`
      flex: 1 1 auto;
      overflow-y: auto;
    `,cachedMatchesContainer:l`
      flex: 1 1 auto;
      overflow-y: auto;
      max-height: 50%;
    `,historyContainer:l`
      display: flex;
      flex: 1 1 auto;
      overflow-y: auto;
      max-height: 50%;
    `,historyOverflowContainer:l`
      padding: ${r[1]} ${r[2]};
      font-size: ${U.font.size.xs};
    `,maskedBadgeContainer:l`
      flex: 1;
      justify-content: flex-end;
      display: flex;
    `,matchDetails:l`
      display: flex;
      flex-direction: column;
      padding: ${U.size[2]};
      font-size: ${U.font.size.xs};
      color: ${U.colors.gray[300]};
      line-height: ${U.font.lineHeight.sm};
    `,matchStatus:(e,t)=>{let n=t&&e===`success`?t===`beforeLoad`?`purple`:`blue`:{pending:`yellow`,success:`green`,error:`red`,notFound:`purple`,redirected:`gray`}[e];return l`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        border-radius: ${U.border.radius.sm};
        font-weight: ${U.font.weight.normal};
        background-color: ${U.colors[n][900]}${U.alpha[90]};
        color: ${U.colors[n][300]};
        border: 1px solid ${U.colors[n][600]};
        margin-bottom: ${U.size[2]};
        transition: all 0.25s ease-out;
      `},matchDetailsInfo:l`
      display: flex;
      justify-content: flex-end;
      flex: 1;
    `,matchDetailsInfoLabel:l`
      display: flex;
    `,mainCloseBtn:l`
      background: ${t.darkGray[700]};
      padding: ${r[1]} ${r[2]} ${r[1]} ${r[1.5]};
      border-radius: ${a.radius.md};
      position: fixed;
      z-index: 99999;
      display: inline-flex;
      width: fit-content;
      cursor: pointer;
      appearance: none;
      border: 0;
      gap: 8px;
      align-items: center;
      border: 1px solid ${t.gray[500]};
      font-size: ${n.size.xs};
      cursor: pointer;
      transition: all 0.25s ease-out;

      &:hover {
        background: ${t.darkGray[500]};
      }
    `,mainCloseBtnPosition:e=>l`
        ${e===`top-left`?`top: ${r[2]}; left: ${r[2]};`:``}
        ${e===`top-right`?`top: ${r[2]}; right: ${r[2]};`:``}
        ${e===`bottom-left`?`bottom: ${r[2]}; left: ${r[2]};`:``}
        ${e===`bottom-right`?`bottom: ${r[2]}; right: ${r[2]};`:``}
      `,mainCloseBtnAnimation:e=>e?l`
        opacity: 0;
        pointer-events: none;
        visibility: hidden;
      `:l`
          opacity: 1;
          pointer-events: auto;
          visibility: visible;
        `,routerLogoCloseButton:l`
      font-weight: ${n.weight.semibold};
      font-size: ${n.size.xs};
      background: linear-gradient(to right, #98f30c, #00f4a3);
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,mainCloseBtnDivider:l`
      width: 1px;
      background: ${U.colors.gray[600]};
      height: 100%;
      border-radius: 999999px;
      color: transparent;
    `,mainCloseBtnIconContainer:l`
      position: relative;
      width: ${r[5]};
      height: ${r[5]};
      background: pink;
      border-radius: 999999px;
      overflow: hidden;
    `,mainCloseBtnIconOuter:l`
      width: ${r[5]};
      height: ${r[5]};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      filter: blur(3px) saturate(1.8) contrast(2);
    `,mainCloseBtnIconInner:l`
      width: ${r[4]};
      height: ${r[4]};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `,panelCloseBtn:l`
      position: absolute;
      cursor: pointer;
      z-index: 100001;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      background-color: ${t.darkGray[700]};
      &:hover {
        background-color: ${t.darkGray[500]};
      }

      top: 0;
      right: ${r[2]};
      transform: translate(0, -100%);
      border-right: ${t.darkGray[300]} 1px solid;
      border-left: ${t.darkGray[300]} 1px solid;
      border-top: ${t.darkGray[300]} 1px solid;
      border-bottom: none;
      border-radius: ${a.radius.sm} ${a.radius.sm} 0px 0px;
      padding: ${r[1]} ${r[1.5]} ${r[.5]} ${r[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        top: 100%;
        left: -${r[2.5]};
        height: ${r[1.5]};
        width: calc(100% + ${r[5]});
      }
    `,panelCloseBtnIcon:l`
      color: ${t.gray[400]};
      width: ${r[2]};
      height: ${r[2]};
    `,navigateButton:l`
      background: none;
      border: none;
      padding: 0 0 0 4px;
      margin: 0;
      color: ${t.gray[400]};
      font-size: ${c.md};
      cursor: pointer;
      line-height: 1;
      vertical-align: middle;
      margin-right: 0.5ch;
      flex-shrink: 0;
      &:hover {
        color: ${t.blue[300]};
      }
    `}};function W(){let e=D(c),[t]=v(ie(e));return t}var G=e=>{try{let t=localStorage.getItem(e);return typeof t==`string`?JSON.parse(t):void 0}catch{return}};function K(e,t){let[n,r]=v();return d(()=>{let n=G(e);r(n??(typeof t==`function`?t():t))}),[n,t=>{r(n=>{let r=t;typeof t==`function`&&(r=t(n));try{localStorage.setItem(e,JSON.stringify(r))}catch{}return r})}]}var q=a(`<span><svg xmlns=http://www.w3.org/2000/svg width=12 height=12 fill=none viewBox="0 0 24 24"><path stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M9 18l6-6-6-6">`),J=a(`<div>`),ae=a(`<button><span> `),oe=a(`<div><div><button> [<!> ... <!>]`),se=a(`<button><span></span> 🔄 `),ce=a(`<span>:`),le=a(`<span>`),ue=({expanded:e,style:t={}})=>{let n=me();return(()=>{var t=q(),i=t.firstChild;return x(a=>{var o=n().expander,s=r(n().expanderIcon(e));return o!==a.e&&_(t,a.e=o),s!==a.t&&l(i,`class`,a.t=s),a},{e:void 0,t:void 0}),t})()};function de(e,t){if(t<1)return[];let n=0,r=[];for(;n<e.length;)r.push(e.slice(n,n+t)),n+=t;return r}function fe(e){return Symbol.iterator in e}function Y({value:e,defaultExpanded:t,pageSize:n=100,filterSubEntries:i,...a}){let[o,c]=v(!!t),l=()=>c(e=>!e),u=f(()=>typeof e()),d=f(()=>{let n=[],r=e=>{let n=t===!0?{[e.label]:!0}:t?.[e.label];return{...e,value:()=>e.value,defaultExpanded:n}};return Array.isArray(e())?n=e().map((e,t)=>r({label:t.toString(),value:e})):e()!==null&&typeof e()==`object`&&fe(e())&&typeof e()[Symbol.iterator]==`function`?n=Array.from(e(),(e,t)=>r({label:t.toString(),value:e})):typeof e()==`object`&&e()!==null&&(n=Object.entries(e()).map(([e,t])=>r({label:e,value:t}))),i?i(n):n}),p=f(()=>de(d(),n)),[m,h]=v([]),[g,y]=v(void 0),b=me(),S=()=>{y(e()())},C=t=>T(Y,E({value:e,filterSubEntries:i},a,t));return(()=>{var t=J();return s(t,(()=>{var t=f(()=>!!p().length);return()=>t()?[(()=>{var e=ae(),t=e.firstChild,n=t.firstChild;return e.$$click=()=>l(),s(e,T(ue,{get expanded(){return o()??!1}}),t),s(e,()=>a.label,t),s(t,()=>String(u).toLowerCase()===`iterable`?`(Iterable) `:``,n),s(t,()=>d().length,n),s(t,()=>d().length>1?`items`:`item`,null),x(n=>{var r=b().expandButton,i=b().info;return r!==n.e&&_(e,n.e=r),i!==n.t&&_(t,n.t=i),n},{e:void 0,t:void 0}),e})(),f(()=>f(()=>!!(o()??!1))()?f(()=>p().length===1)()?(()=>{var e=J();return s(e,()=>d().map((e,t)=>C(e))),x(()=>_(e,b().subEntries)),e})():(()=>{var e=J();return s(e,()=>p().map((e,t)=>(()=>{var i=oe(),a=i.firstChild,o=a.firstChild,c=o.firstChild,l=c.nextSibling,u=l.nextSibling.nextSibling;return u.nextSibling,o.$$click=()=>h(e=>e.includes(t)?e.filter(e=>e!==t):[...e,t]),s(o,T(ue,{get expanded(){return m().includes(t)}}),c),s(o,t*n,l),s(o,t*n+n-1,u),s(a,(()=>{var n=f(()=>!!m().includes(t));return()=>n()?(()=>{var t=J();return s(t,()=>e.map(e=>C(e))),x(()=>_(t,b().subEntries)),t})():null})(),null),x(e=>{var t=b().entry,n=r(b().labelButton,`labelButton`);return t!==e.e&&_(a,e.e=t),n!==e.t&&_(o,e.t=n),e},{e:void 0,t:void 0}),i})())),x(()=>_(e,b().subEntries)),e})():null)]:(()=>{var t=f(()=>u()===`function`);return()=>t()?T(Y,{get label(){return(()=>{var e=se(),t=e.firstChild;return e.$$click=S,s(t,()=>a.label),x(()=>_(e,b().refreshValueBtn)),e})()},value:g,defaultExpanded:{}}):[(()=>{var e=ce(),t=e.firstChild;return s(e,()=>a.label,t),e})(),` `,(()=>{var t=le();return s(t,()=>re(e())),x(()=>_(t,b().value)),t})()]})()})()),x(()=>_(t,b().entry)),t})()}var pe=e=>{let{colors:t,font:n,size:r}=U,{fontFamily:i,lineHeight:a,size:o}=n,s=e?z.bind({target:e}):z;return{entry:s`
      font-family: ${i.mono};
      font-size: ${o.xs};
      line-height: ${a.sm};
      outline: none;
      word-break: break-word;
    `,labelButton:s`
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      background: transparent;
      border: none;
      padding: 0;
    `,expander:s`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: ${r[3]};
      height: ${r[3]};
      padding-left: 3px;
      box-sizing: content-box;
    `,expanderIcon:e=>e?s`
          transform: rotate(90deg);
          transition: transform 0.1s ease;
        `:s`
        transform: rotate(0deg);
        transition: transform 0.1s ease;
      `,expandButton:s`
      display: flex;
      gap: ${r[1]};
      align-items: center;
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      background: transparent;
      border: none;
      padding: 0;
    `,value:s`
      color: ${t.purple[400]};
    `,subEntries:s`
      margin-left: ${r[2]};
      padding-left: ${r[2]};
      border-left: 2px solid ${t.darkGray[400]};
    `,info:s`
      color: ${t.gray[500]};
      font-size: ${o[`2xs`]};
      padding-left: ${r[1]};
    `,refreshValueBtn:s`
      appearance: none;
      border: 0;
      cursor: pointer;
      background: transparent;
      color: inherit;
      padding: 0;
      font-family: ${i.mono};
      font-size: ${o.xs};
    `}};function me(){let e=D(c),[t]=v(pe(e));return t}p([`click`]);var he=a(`<div><div></div><div>/</div><div></div><div>/</div><div>`);function X(e){let t=[`s`,`min`,`h`,`d`],n=[e/1e3,e/6e4,e/36e5,e/864e5],r=0;for(let e=1;e<n.length&&!(n[e]<1);e++)r=e;return new Intl.NumberFormat(navigator.language,{compactDisplay:`short`,notation:`compact`,maximumFractionDigits:0}).format(n[r])+t[r]}function Z({match:e,router:t}){let n=W();if(!e)return null;let i=t().looseRoutesById[e.routeId];if(!i.options.loader)return null;let a=Date.now()-e.updatedAt,o=i.options.staleTime??t().options.defaultStaleTime??0,c=i.options.gcTime??t().options.defaultGcTime??1800*1e3;return(()=>{var e=he(),t=e.firstChild,i=t.nextSibling.nextSibling,l=i.nextSibling.nextSibling;return s(t,()=>X(a)),s(i,()=>X(o)),s(l,()=>X(c)),x(()=>_(e,r(n().ageTicker(a>o)))),e})()}var ge=a(`<button type=button>➔`);function Q({to:e,params:t,search:n,router:r}){let i=W();return(()=>{var a=ge();return a.$$click=i=>{i.stopPropagation(),r().navigate({to:e,params:t,search:n})},l(a,`title`,`Navigate to ${e}`),x(()=>_(a,i().navigateButton)),a})()}p([`click`]);var _e=a(`<button><div>TANSTACK</div><div>TanStack Router v1`),ve=a(`<div><div>`),ye=a(`<code> `),$=a(`<code>`),be=a(`<div><div role=button><div>`),xe=a(`<div>`),Se=a(`<div><ul>`),Ce=a(`<div><button><svg xmlns=http://www.w3.org/2000/svg width=10 height=6 fill=none viewBox="0 0 10 6"><path stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=1.667 d="M1 1l4 4 4-4"></path></svg></button><div><div></div><div><div></div></div></div><div><div><div><span>Pathname</span></div><div><code></code></div><div><div><button type=button>Routes</button><button type=button>Matches</button><button type=button>History</button></div><div><div>age / staleTime / gcTime</div></div></div><div>`),we=a(`<div><span>masked`),Te=a(`<div role=button><div>`),Ee=a(`<li><div>`),De=a(`<li>This panel displays the most recent 15 navigations.`),Oe=a(`<div><div><div>Cached Matches</div><div>age / staleTime / gcTime</div></div><div>`),ke=a(`<div><div>Match Details</div><div><div><div><div></div></div><div><div>ID:</div><div><code></code></div></div><div><div>State:</div><div></div></div><div><div>Last Updated:</div><div></div></div></div></div><div>Explorer</div><div>`),Ae=a(`<div>Loader Data`),je=a(`<div><div><span>Search Params</span></div><div>`),Me=a(`<span style=margin-left:0.5rem;>`),Ne=a(`<button type=button style=cursor:pointer; aria-label="Copy value to clipboard">`),Pe=15;function Fe(e){let{className:t,...n}=e,i=W();return(()=>{var e=_e(),a=e.firstChild,o=a.nextSibling;return O(e,E(n,{get class(){return r(i().logo,t?t():``)}}),!1,!0),x(e=>{var t=i().tanstackLogo,n=i().routerLogo;return t!==e.e&&_(a,e.e=t),n!==e.t&&_(o,e.t=n),e},{e:void 0,t:void 0}),e})()}function Ie(e){return(()=>{var t=ve(),n=t.firstChild;return t.style.setProperty(`display`,`flex`),t.style.setProperty(`align-items`,`center`),t.style.setProperty(`width`,`100%`),s(t,()=>e.left,n),n.style.setProperty(`flex-grow`,`1`),n.style.setProperty(`min-width`,`0`),s(n,()=>e.children),s(t,()=>e.right,null),x(()=>_(t,e.class)),t})()}function Le({routerState:e,router:t,route:a,isRoot:o,activeId:c,setActiveId:u}){let d=W(),p=f(()=>e().pendingMatches||e().matches),m=f(()=>e().matches.find(e=>e.routeId===a.id)),h=f(()=>{try{if(m()?.params){let e=m()?.params,t=a.path||i(a.id);if(t.startsWith(`$`)){let n=t.slice(1);if(e[n])return`(${e[n]})`}}return``}catch{return``}}),v=f(()=>{if(o||!a.path)return;let e=Object.assign({},...p().map(e=>e.params)),r=n({path:a.fullPath,params:e,leaveWildcards:!1,leaveParams:!1,decodeCharMap:t().pathParamsDecodeCharMap});return r.isMissingParams?void 0:r.interpolatedPath});return(()=>{var n=be(),y=n.firstChild,S=y.firstChild;return y.$$click=()=>{m()&&u(c()===a.id?``:a.id)},s(y,T(Ie,{get class(){return r(d().routesRow(!!m()))},get left(){return T(b,{get when(){return v()},children:e=>T(Q,{get to(){return e()},router:t})})},get right(){return T(Z,{get match(){return m()},router:t})},get children(){return[(()=>{var e=ye(),t=e.firstChild;return s(e,()=>o?g:a.path||i(a.id),t),x(()=>_(e,d().code)),e})(),(()=>{var e=$();return s(e,h),x(()=>_(e,d().routeParamInfo)),e})()]}}),null),s(n,(()=>{var n=f(()=>!!a.children?.length);return()=>n()?(()=>{var n=xe();return s(n,()=>[...a.children].sort((e,t)=>e.rank-t.rank).map(n=>T(Le,{routerState:e,router:t,route:n,activeId:c,setActiveId:u}))),x(()=>_(n,d().nestedRouteRow(!!o))),n})():null})(),null),x(e=>{var t=`Open match details for ${a.id}`,n=r(d().routesRowContainer(a.id===c(),!!m())),i=r(d().matchIndicator(V(p(),a)));return t!==e.e&&l(y,`aria-label`,e.e=t),n!==e.t&&_(y,e.t=n),i!==e.a&&_(S,e.a=i),e},{e:void 0,t:void 0,a:void 0}),n})()}var Re=function({...n}){let{isOpen:i=!0,setIsOpen:a,handleDragStart:c,router:p,routerState:m,shadowDOMTarget:y,...b}=n,{onCloseClick:w}=o(),D=W(),{className:k,style:A,...j}=b;e(p,`No router was found for the TanStack Router Devtools. Please place the devtools in the <RouterProvider> component tree or pass the router instance to the devtools manually.`);let[M,N]=K(`tanstackRouterDevtoolsActiveTab`,`routes`),[P,F]=K(`tanstackRouterDevtoolsActiveRouteId`,``),[I,L]=v([]),[ee,R]=v(!1);d(()=>{let e=m().matches,n=e[e.length-1];if(!n)return;let r=t(()=>I()),i=r[0],a=i&&i.pathname===n.pathname&&JSON.stringify(i.search??{})===JSON.stringify(n.search??{});(!i||!a)&&(r.length>=Pe&&R(!0),L(e=>{let t=[n,...e];return t.splice(Pe),t}))});let z=f(()=>[...m().pendingMatches??[],...m().matches,...m().cachedMatches].find(e=>e.routeId===P()||e.id===P())),te=f(()=>Object.keys(m().location.search).length),V=f(()=>({...p(),state:m()})),ne=f(()=>Object.fromEntries(H(Object.keys(V()),[`state`,`routesById`,`routesByPath`,`flatRoutes`,`options`,`manifest`].map(e=>t=>t!==e)).map(e=>[e,V()[e]]).filter(e=>typeof e[1]!=`function`&&![`__store`,`basepath`,`injectedHtml`,`subscribers`,`latestLoadPromise`,`navigateTimeout`,`resetNextScroll`,`tempLocationKey`,`latestLocation`,`routeTree`,`history`].includes(e[0])))),re=f(()=>z()?.loaderData),U=f(()=>z()),ie=f(()=>m().location.search);return(()=>{var e=Ce(),t=e.firstChild,n=t.firstChild,i=t.nextSibling,o=i.firstChild,d=o.nextSibling,v=d.firstChild,y=i.nextSibling,b=y.firstChild,L=b.firstChild;L.firstChild;var R=L.nextSibling,V=R.firstChild,H=R.nextSibling,W=H.firstChild,G=W.firstChild,K=G.nextSibling,q=K.nextSibling,J=W.nextSibling,ae=H.nextSibling;return O(e,E({get class(){return r(D().devtoolsPanel,`TanStackRouterDevtoolsPanel`,k?k():``)},get style(){return A?A():``}},j),!1,!0),s(e,c?(()=>{var e=xe();return u(e,`mousedown`,c,!0),x(()=>_(e,D().dragHandle)),e})():null,t),t.$$click=e=>{a&&a(!1),w(e)},s(o,T(Fe,{"aria-hidden":!0,onClick:e=>{a&&a(!1),w(e)}})),s(v,T(Y,{label:`Router`,value:ne,defaultExpanded:{state:{},context:{},options:{}},filterSubEntries:e=>e.filter(e=>typeof e.value()!=`function`)})),s(L,(()=>{var e=f(()=>!!m().location.maskedLocation);return()=>e()?(()=>{var e=we(),t=e.firstChild;return x(n=>{var r=D().maskedBadgeContainer,i=D().maskedBadge;return r!==n.e&&_(e,n.e=r),i!==n.t&&_(t,n.t=i),n},{e:void 0,t:void 0}),e})():null})(),null),s(V,()=>m().location.pathname),s(R,(()=>{var e=f(()=>!!m().location.maskedLocation);return()=>e()?(()=>{var e=$();return s(e,()=>m().location.maskedLocation?.pathname),x(()=>_(e,D().maskedLocation)),e})():null})(),null),G.$$click=()=>{N(`routes`)},K.$$click=()=>{N(`matches`)},q.$$click=()=>{N(`history`)},s(ae,T(C,{get children(){return[T(h,{get when(){return M()===`routes`},get children(){return T(Le,{routerState:m,router:p,get route(){return p().routeTree},isRoot:!0,activeId:P,setActiveId:F})}}),T(h,{get when(){return M()===`matches`},get children(){var e=xe();return s(e,()=>(m().pendingMatches?.length?m().pendingMatches:m().matches)?.map((e,t)=>(()=>{var t=Te(),n=t.firstChild;return t.$$click=()=>F(P()===e.id?``:e.id),s(t,T(Ie,{get left(){return T(Q,{get to(){return e.pathname},get params(){return e.params},get search(){return e.search},router:p})},get right(){return T(Z,{match:e,router:p})},get children(){var t=$();return s(t,()=>`${e.routeId===`__root__`?g:e.pathname}`),x(()=>_(t,D().matchID)),t}}),null),x(i=>{var a=`Open match details for ${e.id}`,o=r(D().matchRow(e===z())),s=r(D().matchIndicator(B(e)));return a!==i.e&&l(t,`aria-label`,i.e=a),o!==i.t&&_(t,i.t=o),s!==i.a&&_(n,i.a=s),i},{e:void 0,t:void 0,a:void 0}),t})())),e}}),T(h,{get when(){return M()===`history`},get children(){var e=Se(),t=e.firstChild;return s(t,T(S,{get each(){return I()},children:(e,t)=>(()=>{var n=Ee(),i=n.firstChild;return s(n,T(Ie,{get left(){return T(Q,{get to(){return e.pathname},get params(){return e.params},get search(){return e.search},router:p})},get right(){return T(Z,{match:e,router:p})},get children(){var t=$();return s(t,()=>`${e.routeId===`__root__`?g:e.pathname}`),x(()=>_(t,D().matchID)),t}}),null),x(a=>{var o=r(D().matchRow(e===z())),s=r(D().matchIndicator(t()===0?`green`:`gray`));return o!==a.e&&_(n,a.e=o),s!==a.t&&_(i,a.t=s),a},{e:void 0,t:void 0}),n})()}),null),s(t,(()=>{var e=f(()=>!!ee());return()=>e()?(()=>{var e=De();return x(()=>_(e,D().historyOverflowContainer)),e})():null})(),null),e}})]}})),s(y,(()=>{var e=f(()=>!!m().cachedMatches.length);return()=>e()?(()=>{var e=Oe(),t=e.firstChild,n=t.firstChild.nextSibling,i=t.nextSibling;return s(i,()=>m().cachedMatches.map(e=>(()=>{var t=Te(),n=t.firstChild;return t.$$click=()=>F(P()===e.id?``:e.id),s(t,T(Ie,{get left(){return T(Q,{get to(){return e.pathname},get params(){return e.params},get search(){return e.search},router:p})},get right(){return T(Z,{match:e,router:p})},get children(){var t=$();return s(t,()=>`${e.id}`),x(()=>_(t,D().matchID)),t}}),null),x(i=>{var a=`Open match details for ${e.id}`,o=r(D().matchRow(e===z())),s=r(D().matchIndicator(B(e)));return a!==i.e&&l(t,`aria-label`,i.e=a),o!==i.t&&_(t,i.t=o),s!==i.a&&_(n,i.a=s),i},{e:void 0,t:void 0,a:void 0}),t})())),x(r=>{var i=D().cachedMatchesContainer,a=D().detailsHeader,o=D().detailsHeaderInfo;return i!==r.e&&_(e,r.e=i),a!==r.t&&_(t,r.t=a),o!==r.a&&_(n,r.a=o),r},{e:void 0,t:void 0,a:void 0}),e})():null})(),null),s(e,(()=>{var e=f(()=>!!(z()&&z()?.status));return()=>e()?(()=>{var e=ke(),t=e.firstChild,n=t.nextSibling,r=n.firstChild,i=r.firstChild,a=i.firstChild,o=i.nextSibling,c=o.firstChild.nextSibling,l=c.firstChild,u=o.nextSibling,d=u.firstChild.nextSibling,p=u.nextSibling,h=p.firstChild.nextSibling,g=n.nextSibling,v=g.nextSibling;return s(a,(()=>{var e=f(()=>!!(z()?.status===`success`&&z()?.isFetching));return()=>e()?`fetching`:z()?.status})()),s(l,()=>z()?.id),s(d,(()=>{var e=f(()=>!!m().pendingMatches?.find(e=>e.id===z()?.id));return()=>e()?`Pending`:m().matches.find(e=>e.id===z()?.id)?`Active`:`Cached`})()),s(h,(()=>{var e=f(()=>!!z()?.updatedAt);return()=>e()?new Date(z()?.updatedAt).toLocaleTimeString():`N/A`})()),s(e,(()=>{var e=f(()=>!!re());return()=>e()?[(()=>{var e=Ae();return x(()=>_(e,D().detailsHeader)),e})(),(()=>{var e=xe();return s(e,T(Y,{label:`loaderData`,value:re,defaultExpanded:{}})),x(()=>_(e,D().detailsContent)),e})()]:null})(),g),s(v,T(Y,{label:`Match`,value:U,defaultExpanded:{}})),x(n=>{var a=D().thirdContainer,s=D().detailsHeader,l=D().matchDetails,f=D().matchStatus(z()?.status,z()?.isFetching),m=D().matchDetailsInfoLabel,y=D().matchDetailsInfo,b=D().matchDetailsInfoLabel,x=D().matchDetailsInfo,S=D().matchDetailsInfoLabel,C=D().matchDetailsInfo,w=D().detailsHeader,T=D().detailsContent;return a!==n.e&&_(e,n.e=a),s!==n.t&&_(t,n.t=s),l!==n.a&&_(r,n.a=l),f!==n.o&&_(i,n.o=f),m!==n.i&&_(o,n.i=m),y!==n.n&&_(c,n.n=y),b!==n.s&&_(u,n.s=b),x!==n.h&&_(d,n.h=x),S!==n.r&&_(p,n.r=S),C!==n.d&&_(h,n.d=C),w!==n.l&&_(g,n.l=w),T!==n.u&&_(v,n.u=T),n},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0}),e})():null})(),null),s(e,(()=>{var e=f(()=>!!te());return()=>e()?(()=>{var e=je(),t=e.firstChild;t.firstChild;var n=t.nextSibling;return s(t,typeof navigator<`u`?(()=>{var e=Me();return s(e,T(ze,{getValue:()=>{let e=m().location.search;return JSON.stringify(e)}})),e})():null,null),s(n,T(Y,{value:ie,get defaultExpanded(){return Object.keys(m().location.search).reduce((e,t)=>(e[t]={},e),{})}})),x(r=>{var i=D().fourthContainer,a=D().detailsHeader,o=D().detailsContent;return i!==r.e&&_(e,r.e=i),a!==r.t&&_(t,r.t=a),o!==r.a&&_(n,r.a=o),r},{e:void 0,t:void 0,a:void 0}),e})():null})(),null),x(e=>{var a=D().panelCloseBtn,s=D().panelCloseBtnIcon,c=D().firstContainer,u=D().row,f=D().routerExplorerContainer,p=D().routerExplorer,m=D().secondContainer,h=D().matchesContainer,g=D().detailsHeader,x=D().detailsContent,S=D().detailsHeader,C=D().routeMatchesToggle,w=M()===`routes`,T=r(D().routeMatchesToggleBtn(M()===`routes`,!0)),E=M()===`matches`,O=r(D().routeMatchesToggleBtn(M()===`matches`,!0)),k=M()===`history`,A=r(D().routeMatchesToggleBtn(M()===`history`,!1)),j=D().detailsHeaderInfo,N=r(D().routesContainer);return a!==e.e&&_(t,e.e=a),s!==e.t&&l(n,`class`,e.t=s),c!==e.a&&_(i,e.a=c),u!==e.o&&_(o,e.o=u),f!==e.i&&_(d,e.i=f),p!==e.n&&_(v,e.n=p),m!==e.s&&_(y,e.s=m),h!==e.h&&_(b,e.h=h),g!==e.r&&_(L,e.r=g),x!==e.d&&_(R,e.d=x),S!==e.l&&_(H,e.l=S),C!==e.u&&_(W,e.u=C),w!==e.c&&(G.disabled=e.c=w),T!==e.w&&_(G,e.w=T),E!==e.m&&(K.disabled=e.m=E),O!==e.f&&_(K,e.f=O),k!==e.y&&(q.disabled=e.y=k),A!==e.g&&_(q,e.g=A),j!==e.p&&_(J,e.p=j),N!==e.b&&_(ae,e.b=N),e},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0,p:void 0,b:void 0}),e})()};function ze({getValue:e}){let[t,n]=v(!1),r=null,i=async()=>{if(typeof navigator>`u`||!navigator.clipboard?.writeText){console.warn(`TanStack Router Devtools: Clipboard API unavailable`);return}try{let t=e();await navigator.clipboard.writeText(t),n(!0),r&&clearTimeout(r),r=setTimeout(()=>n(!1),2500)}catch(e){console.error(`TanStack Router Devtools: Failed to copy`,e)}};return k(()=>{r&&clearTimeout(r)}),(()=>{var e=Ne();return e.$$click=i,s(e,()=>t()?`✅`:`📋`),x(()=>l(e,`title`,t()?`Copied!`:`Copy`)),e})()}p([`click`,`mousedown`]);var Be=a(`<svg xmlns=http://www.w3.org/2000/svg enable-background="new 0 0 634 633"viewBox="0 0 634 633"><g transform=translate(1)><linearGradient x1=-641.486 x2=-641.486 y1=856.648 y2=855.931 gradientTransform="matrix(633 0 0 -633 406377 542258)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#6bdaff></stop><stop offset=0.319 stop-color=#f9ffb5></stop><stop offset=0.706 stop-color=#ffa770></stop><stop offset=1 stop-color=#ff7373></stop></linearGradient><circle cx=316.5 cy=316.5 r=316.5 fill-rule=evenodd clip-rule=evenodd></circle><defs><filter width=454 height=396.9 x=-137.5 y=412 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=-137.5 y=412 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=89.5 cy=610.5 fill=#015064 fill-rule=evenodd stroke=#00CFE2 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=316.5 y=412 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=316.5 y=412 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=543.5 cy=610.5 fill=#015064 fill-rule=evenodd stroke=#00CFE2 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=-137.5 y=450 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=-137.5 y=450 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=89.5 cy=648.5 fill=#015064 fill-rule=evenodd stroke=#00A8B8 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=316.5 y=450 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=316.5 y=450 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=543.5 cy=648.5 fill=#015064 fill-rule=evenodd stroke=#00A8B8 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=-137.5 y=486 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=-137.5 y=486 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=89.5 cy=684.5 fill=#015064 fill-rule=evenodd stroke=#007782 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=316.5 y=486 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=316.5 y=486 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=543.5 cy=684.5 fill=#015064 fill-rule=evenodd stroke=#007782 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=176.9 height=129.3 x=272.2 y=308 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=176.9 height=129.3 x=272.2 y=308 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><g><path fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11 d="M436 403.2l-5 28.6m-140-90.3l-10.9 62m52.8-19.4l-4.3 27.1"></path><linearGradient x1=-645.656 x2=-646.499 y1=854.878 y2=854.788 gradientTransform="matrix(-184.159 -32.4722 11.4608 -64.9973 -128419.844 34938.836)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ee2700></stop><stop offset=1 stop-color=#ff008e></stop></linearGradient><path fill-rule=evenodd d="M344.1 363l97.7 17.2c5.8 2.1 8.2 6.2 7.1 12.1-1 5.9-4.7 9.2-11 9.9l-106-18.7-57.5-59.2c-3.2-4.8-2.9-9.1.8-12.8 3.7-3.7 8.3-4.4 13.7-2.1l55.2 53.6z"clip-rule=evenodd></path><path fill=#D8D8D8 fill-rule=evenodd stroke=#FFF stroke-linecap=round stroke-linejoin=bevel stroke-width=7 d="M428.3 384.5l.9-6.5m-33.9 1.5l.9-6.5m-34 .5l.9-6.1m-38.9-16.1l4.2-3.9m-25.2-16.1l4.2-3.9"clip-rule=evenodd></path></g><defs><filter width=280.6 height=317.4 x=73.2 y=113.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=280.6 height=317.4 x=73.2 y=113.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><g><linearGradient x1=-646.8 x2=-646.8 y1=854.844 y2=853.844 gradientTransform="matrix(-100.1751 48.8587 -97.9753 -200.879 19124.773 203538.61)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#a17500></stop><stop offset=1 stop-color=#5d2100></stop></linearGradient><path fill-rule=evenodd d="M192.3 203c8.1 37.3 14 73.6 17.8 109.1 3.8 35.4 2.8 75.2-2.9 119.2l61.2-16.7c-15.6-59-25.2-97.9-28.6-116.6-3.4-18.7-10.8-51.8-22.2-99.6l-25.3 4.6"clip-rule=evenodd></path><linearGradient x1=-635.467 x2=-635.467 y1=852.115 y2=851.115 gradientTransform="matrix(92.6873 4.8575 2.0257 -38.6535 57323.695 36176.047)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M195 183.9s-12.6-22.1-36.5-29.9c-15.9-5.2-34.4-1.5-55.5 11.1 15.9 14.3 29.5 22.6 40.7 24.9 16.8 3.6 51.3-6.1 51.3-6.1z"clip-rule=evenodd></path><linearGradient x1=-636.573 x2=-636.573 y1=855.444 y2=854.444 gradientTransform="matrix(109.9945 5.7646 6.3597 -121.3507 64719.133 107659.336)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5s-47.5-8.5-83.2 15.7c-23.8 16.2-34.3 49.3-31.6 99.3 30.3-27.8 52.1-48.5 65.2-61.9 19.8-20 49.6-53.1 49.6-53.1z"clip-rule=evenodd></path><linearGradient x1=-632.145 x2=-632.145 y1=854.174 y2=853.174 gradientTransform="matrix(62.9558 3.2994 3.5021 -66.8246 37035.367 59284.227)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M195 183.9c-.8-21.9 6-38 20.6-48.2 14.6-10.2 29.8-15.3 45.5-15.3-6.1 21.4-14.5 35.8-25.2 43.4-10.7 7.5-24.4 14.2-40.9 20.1z"clip-rule=evenodd></path><linearGradient x1=-638.224 x2=-638.224 y1=853.801 y2=852.801 gradientTransform="matrix(152.4666 7.9904 3.0934 -59.0251 94939.86 55646.855)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5c31.9-30 64.1-39.7 96.7-29 32.6 10.7 50.8 30.4 54.6 59.1-35.2-5.5-60.4-9.6-75.8-12.1-15.3-2.6-40.5-8.6-75.5-18z"clip-rule=evenodd></path><linearGradient x1=-637.723 x2=-637.723 y1=855.103 y2=854.103 gradientTransform="matrix(136.467 7.1519 5.2165 -99.5377 82830.875 89859.578)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5c35.8-7.6 65.6-.2 89.2 22 23.6 22.2 37.7 49 42.3 80.3-39.8-9.7-68.3-23.8-85.5-42.4-17.2-18.5-32.5-38.5-46-59.9z"clip-rule=evenodd></path><linearGradient x1=-631.79 x2=-631.79 y1=855.872 y2=854.872 gradientTransform="matrix(60.8683 3.19 8.7771 -167.4773 31110.818 145537.61)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5c-33.6 13.8-53.6 35.7-60.1 65.6-6.5 29.9-3.6 63.1 8.7 99.6 27.4-40.3 43.2-69.6 47.4-88 4.2-18.3 5.5-44.1 4-77.2z"clip-rule=evenodd></path><path fill=none stroke=#2F8A00 stroke-linecap=round stroke-width=8 d="M196.5 182.3c-14.8 21.6-25.1 41.4-30.8 59.4-5.7 18-9.4 33-11.1 45.1"></path><path fill=none stroke=#2F8A00 stroke-linecap=round stroke-width=8 d="M194.8 185.7c-24.4 1.7-43.8 9-58.1 21.8-14.3 12.8-24.7 25.4-31.3 37.8m99.1-68.9c29.7-6.7 52-8.4 67-5 15 3.4 26.9 8.7 35.8 15.9m-110.8-5.9c20.3 9.9 38.2 20.5 53.9 31.9 15.7 11.4 27.4 22.1 35.1 32"></path></g><defs><filter width=532 height=633 x=50.5 y=399 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=532 height=633 x=50.5 y=399 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><linearGradient x1=-641.104 x2=-641.278 y1=856.577 y2=856.183 gradientTransform="matrix(532 0 0 -633 341484.5 542657)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#fff400></stop><stop offset=1 stop-color=#3c8700></stop></linearGradient><ellipse cx=316.5 cy=715.5 fill-rule=evenodd clip-rule=evenodd rx=266 ry=316.5></ellipse><defs><filter width=288 height=283 x=391 y=-24 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=288 height=283 x=391 y=-24 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><g><g transform="translate(397 -24)"><linearGradient x1=-1036.672 x2=-1036.672 y1=880.018 y2=879.018 gradientTransform="matrix(227 0 0 -227 235493 199764)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffdf00></stop><stop offset=1 stop-color=#ff9d00></stop></linearGradient><circle cx=168.5 cy=113.5 r=113.5 fill-rule=evenodd clip-rule=evenodd></circle><linearGradient x1=-1017.329 x2=-1018.602 y1=658.003 y2=657.998 gradientTransform="matrix(30 0 0 -1 30558 771)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M30 113H0"></path><linearGradient x1=-1014.501 x2=-1015.774 y1=839.985 y2=839.935 gradientTransform="matrix(26.5 0 0 -5.5 26925 4696.5)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M33.5 79.5L7 74"></path><linearGradient x1=-1016.59 x2=-1017.862 y1=852.671 y2=852.595 gradientTransform="matrix(29 0 0 -8 29523 6971)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M34 146l-29 8"></path><linearGradient x1=-1011.984 x2=-1013.257 y1=863.523 y2=863.229 gradientTransform="matrix(24 0 0 -13 24339 11407)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M45 177l-24 13"></path><linearGradient x1=-1006.673 x2=-1007.946 y1=869.279 y2=868.376 gradientTransform="matrix(20 0 0 -19 20205 16720)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M67 204l-20 19"></path><linearGradient x1=-992.85 x2=-993.317 y1=871.258 y2=870.258 gradientTransform="matrix(13.8339 0 0 -22.8467 13825.796 20131.938)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M94.4 227l-13.8 22.8"></path><linearGradient x1=-953.835 x2=-953.965 y1=871.9 y2=870.9 gradientTransform="matrix(7.5 0 0 -24.5 7278 21605)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M127.5 243.5L120 268"></path><linearGradient x1=244.504 x2=244.496 y1=871.898 y2=870.898 gradientTransform="matrix(.5 0 0 -24.5 45.5 21614)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M167.5 252.5l.5 24.5">`);function Ve(){let e=m();return(()=>{var t=Be(),n=t.firstChild.firstChild,r=n.nextSibling,i=r.nextSibling,a=i.firstChild,o=i.nextSibling,s=o.firstChild,c=o.nextSibling,u=c.nextSibling,d=u.firstChild,f=u.nextSibling,p=f.firstChild,m=f.nextSibling,h=m.nextSibling,g=h.firstChild,_=h.nextSibling,v=_.firstChild,y=_.nextSibling,b=y.nextSibling,x=b.firstChild,S=b.nextSibling,C=S.firstChild,w=S.nextSibling,T=w.nextSibling,E=T.firstChild,D=T.nextSibling,O=D.firstChild,k=D.nextSibling,A=k.nextSibling,j=A.firstChild,M=A.nextSibling,N=M.firstChild,P=M.nextSibling,F=P.nextSibling,I=F.firstChild,L=F.nextSibling,ee=L.firstChild,R=L.nextSibling,z=R.firstChild.nextSibling,te=z.nextSibling,B=R.nextSibling,V=B.firstChild,ne=B.nextSibling,re=ne.firstChild,H=ne.nextSibling,U=H.firstChild,ie=U.nextSibling,W=ie.nextSibling,G=W.nextSibling,K=G.nextSibling,q=K.nextSibling,J=q.nextSibling,ae=J.nextSibling,oe=ae.nextSibling,se=oe.nextSibling,ce=se.nextSibling,le=ce.nextSibling,ue=le.nextSibling,de=ue.nextSibling,fe=H.nextSibling,Y=fe.firstChild,pe=fe.nextSibling,me=pe.firstChild,he=pe.nextSibling,X=he.nextSibling,Z=X.nextSibling,ge=Z.firstChild,Q=Z.nextSibling,_e=Q.firstChild,ve=Q.nextSibling,ye=ve.firstChild.firstChild,$=ye.nextSibling,be=$.nextSibling,xe=be.nextSibling,Se=xe.nextSibling,Ce=Se.nextSibling,we=Ce.nextSibling,Te=we.nextSibling,Ee=Te.nextSibling,De=Ee.nextSibling,Oe=De.nextSibling,ke=Oe.nextSibling,Ae=ke.nextSibling,je=Ae.nextSibling,Me=je.nextSibling,Ne=Me.nextSibling,Pe=Ne.nextSibling,Fe=Pe.nextSibling;return l(n,`id`,`a-${e}`),l(r,`fill`,`url(#a-${e})`),l(a,`id`,`b-${e}`),l(o,`id`,`c-${e}`),l(s,`filter`,`url(#b-${e})`),l(c,`mask`,`url(#c-${e})`),l(d,`id`,`d-${e}`),l(f,`id`,`e-${e}`),l(p,`filter`,`url(#d-${e})`),l(m,`mask`,`url(#e-${e})`),l(g,`id`,`f-${e}`),l(_,`id`,`g-${e}`),l(v,`filter`,`url(#f-${e})`),l(y,`mask`,`url(#g-${e})`),l(x,`id`,`h-${e}`),l(S,`id`,`i-${e}`),l(C,`filter`,`url(#h-${e})`),l(w,`mask`,`url(#i-${e})`),l(E,`id`,`j-${e}`),l(D,`id`,`k-${e}`),l(O,`filter`,`url(#j-${e})`),l(k,`mask`,`url(#k-${e})`),l(j,`id`,`l-${e}`),l(M,`id`,`m-${e}`),l(N,`filter`,`url(#l-${e})`),l(P,`mask`,`url(#m-${e})`),l(I,`id`,`n-${e}`),l(L,`id`,`o-${e}`),l(ee,`filter`,`url(#n-${e})`),l(R,`mask`,`url(#o-${e})`),l(z,`id`,`p-${e}`),l(te,`fill`,`url(#p-${e})`),l(V,`id`,`q-${e}`),l(ne,`id`,`r-${e}`),l(re,`filter`,`url(#q-${e})`),l(H,`mask`,`url(#r-${e})`),l(U,`id`,`s-${e}`),l(ie,`fill`,`url(#s-${e})`),l(W,`id`,`t-${e}`),l(G,`fill`,`url(#t-${e})`),l(K,`id`,`u-${e}`),l(q,`fill`,`url(#u-${e})`),l(J,`id`,`v-${e}`),l(ae,`fill`,`url(#v-${e})`),l(oe,`id`,`w-${e}`),l(se,`fill`,`url(#w-${e})`),l(ce,`id`,`x-${e}`),l(le,`fill`,`url(#x-${e})`),l(ue,`id`,`y-${e}`),l(de,`fill`,`url(#y-${e})`),l(Y,`id`,`z-${e}`),l(pe,`id`,`A-${e}`),l(me,`filter`,`url(#z-${e})`),l(he,`id`,`B-${e}`),l(X,`fill`,`url(#B-${e})`),l(X,`mask`,`url(#A-${e})`),l(ge,`id`,`C-${e}`),l(Q,`id`,`D-${e}`),l(_e,`filter`,`url(#C-${e})`),l(ve,`mask`,`url(#D-${e})`),l(ye,`id`,`E-${e}`),l($,`fill`,`url(#E-${e})`),l(be,`id`,`F-${e}`),l(xe,`stroke`,`url(#F-${e})`),l(Se,`id`,`G-${e}`),l(Ce,`stroke`,`url(#G-${e})`),l(we,`id`,`H-${e}`),l(Te,`stroke`,`url(#H-${e})`),l(Ee,`id`,`I-${e}`),l(De,`stroke`,`url(#I-${e})`),l(Oe,`id`,`J-${e}`),l(ke,`stroke`,`url(#J-${e})`),l(Ae,`id`,`K-${e}`),l(je,`stroke`,`url(#K-${e})`),l(Me,`id`,`L-${e}`),l(Ne,`stroke`,`url(#L-${e})`),l(Pe,`id`,`M-${e}`),l(Fe,`stroke`,`url(#M-${e})`),t})()}var He=a(`<button type=button><div><div></div><div></div></div><div>-</div><div>TanStack Router`);function Ue({initialIsOpen:e,panelProps:t={},closeButtonProps:n={},toggleButtonProps:i={},position:a=`bottom-left`,containerElement:o=`footer`,router:c,routerState:l,shadowDOMTarget:u}){let[p,m]=v(),h,[g,b]=K(`tanstackRouterDevtoolsOpen`,e),[S,C]=K(`tanstackRouterDevtoolsHeight`,null),[D,k]=v(!1),[A,j]=v(!1),M=ne(),N=W(),P=(e,t)=>{if(t.button!==0)return;j(!0);let n={originalHeight:e?.getBoundingClientRect().height??0,pageY:t.pageY},r=e=>{let t=n.pageY-e.pageY,r=n.originalHeight+t;C(r),b(!(r<70))},i=()=>{j(!1),document.removeEventListener(`mousemove`,r),document.removeEventListener(`mouseUp`,i)};document.addEventListener(`mousemove`,r),document.addEventListener(`mouseup`,i)};g(),d(()=>{k(g()??!1)}),d(()=>{if(D()){let e=p()?.parentElement?.style.paddingBottom,t=()=>{let e=h.getBoundingClientRect().height;p()?.parentElement&&m(t=>(t?.parentElement&&(t.parentElement.style.paddingBottom=`${e}px`),t))};if(t(),typeof window<`u`)return window.addEventListener(`resize`,t),()=>{window.removeEventListener(`resize`,t),p()?.parentElement&&typeof e==`string`&&m(t=>(t.parentElement.style.paddingBottom=e,t))}}else p()?.parentElement&&m(e=>(e?.parentElement&&e.parentElement.removeAttribute(`style`),e))}),d(()=>{if(p()){let e=p(),t=getComputedStyle(e).fontSize;e?.style.setProperty(`--tsrd-font-size`,t)}});let{style:F={},...I}=t,{style:L={},onClick:ee,...R}=n,{onClick:z,class:te,...B}=i;if(!M())return null;let V=f(()=>S()??500),re=f(()=>r(N().devtoolsPanelContainer,N().devtoolsPanelContainerVisibility(!!g()),N().devtoolsPanelContainerResizing(A),N().devtoolsPanelContainerAnimation(D(),V()+16))),H=f(()=>({height:`${V()}px`,...F||{}})),U=f(()=>r(N().mainCloseBtn,N().mainCloseBtnPosition(a),N().mainCloseBtnAnimation(!!g()),te));return T(y,{component:o,ref:m,class:`TanStackRouterDevtools`,get children(){return[T(w.Provider,{value:{onCloseClick:ee??(()=>{})},get children(){return T(Re,E({ref(e){var t=h;typeof t==`function`?t(e):h=e}},I,{router:c,routerState:l,className:re,style:H,get isOpen(){return D()},setIsOpen:b,handleDragStart:e=>P(h,e),shadowDOMTarget:u}))}}),(()=>{var e=He(),t=e.firstChild,n=t.firstChild,r=n.nextSibling,i=t.nextSibling,a=i.nextSibling;return O(e,E(B,{"aria-label":`Open TanStack Router Devtools`,onClick:e=>{b(!0),z&&z(e)},get class(){return U()}}),!1,!0),s(n,T(Ve,{})),s(r,T(Ve,{})),x(e=>{var o=N().mainCloseBtnIconContainer,s=N().mainCloseBtnIconOuter,c=N().mainCloseBtnIconInner,l=N().mainCloseBtnDivider,u=N().routerLogoCloseButton;return o!==e.e&&_(t,e.e=o),s!==e.t&&_(n,e.t=s),c!==e.a&&_(r,e.a=c),l!==e.o&&_(i,e.o=l),u!==e.i&&_(a,e.i=u),e},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),e})()]}})}export{Ue as FloatingTanStackRouterDevtools,Ue as default};