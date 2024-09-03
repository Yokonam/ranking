import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_B077omZB.mjs';
import { d as decodeKey } from './chunks/astro/server_cVH6mvyz.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/wan55/Desktop/training/ranking/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const o=document.querySelector(\".cover\"),e=o.querySelector(\"#bgm\"),r=document.querySelectorAll(\"[data-state]\"),a=o.querySelector(\".play\");a.addEventListener(\"click\",function(){e.paused?(e.play(),a.setAttribute(\"data-play\",\"true\"),r.forEach(t=>{t.setAttribute(\"data-state\",\"\")})):(e.pause(),a.removeAttribute(\"data-play\"),r.forEach(t=>{t.setAttribute(\"data-state\",\"paused\")}))});\n"}],"styles":[{"type":"inline","content":":root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% )}*{box-sizing:border-box}html{font-family:system-ui,sans-serif;background:#13151a;box-sizing:border-box}body{height:100vh;margin:0}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}.link-card[data-astro-cid-dohjnao5]{background:#282828;box-shadow:0 0 10px #0000001a;width:calc(400/ var(--contet-width) * 100vw);font-weight:900;border:solid 2px #000}.img[data-astro-cid-dohjnao5]{display:block}a[data-astro-cid-dohjnao5]{transition:filter .3s;display:flex;flex-direction:column;text-decoration:none;height:100%}a[data-astro-cid-dohjnao5]:hover{filter:brightness(1.2)}img[data-astro-cid-dohjnao5]{width:100%;height:100%;object-fit:cover;aspect-ratio:1;display:block}p[data-astro-cid-dohjnao5]{margin:0}.rank[data-astro-cid-dohjnao5]{text-align:center;width:100%;font-size:calc(48/ var(--contet-width) * 100vw);color:#000;background-color:silver}.body[data-astro-cid-dohjnao5]{padding:calc(10/ var(--contet-width) * 100vw);text-align:center;color:#fff;font-size:calc(40/ var(--contet-width) * 100vw);width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;flex-grow:1;padding-bottom:calc(70/ var(--contet-width) * 100vw)}.title[data-astro-cid-dohjnao5]{font-size:calc(64/ var(--contet-width) * 100vw);line-height:1.2}.artist[data-astro-cid-dohjnao5]{font-size:calc(48/ var(--contet-width) * 100vw);margin-top:calc(10/ var(--contet-width) * 100vw)}@media (max-width: 768px){.link-card[data-astro-cid-dohjnao5]{width:100vw}}.play[data-astro-cid-vnzlvqnm]{background:none;border:none;color:#fff;text-align:center;font-size:calc(30/ var(--contet-width) * 100vw);font-weight:900;cursor:pointer;border:solid calc(5/ var(--contet-width) * 100vw);border-radius:50%;aspect-ratio:1;padding:calc(16/ var(--contet-width) * 100vw);position:fixed;left:calc(14/ var(--contet-width) * 100vw);bottom:calc(14/ var(--contet-width) * 100vw);z-index:1;transition:scale .3s}.play[data-astro-cid-vnzlvqnm] small[data-astro-cid-vnzlvqnm]{font-size:calc(20/ var(--contet-width) * 100vw)}.play[data-astro-cid-vnzlvqnm]:hover{scale:1;opacity:1}[data-astro-cid-vnzlvqnm][data-play]{opacity:.5;scale:.8}[data-astro-cid-vnzlvqnm][data-play]:before,[data-astro-cid-vnzlvqnm][data-play].play:after{content:\"\"}.play[data-astro-cid-vnzlvqnm]:before,.play[data-astro-cid-vnzlvqnm]:after{display:block;position:absolute;inset:0;margin:auto;width:100%;height:100%;border:1px solid #fff;border-radius:50%;box-sizing:border-box;pointer-events:none;animation:pulsate 2s linear infinite}.play[data-astro-cid-vnzlvqnm]:after{animation-delay:1s}@keyframes pulsate{0%{transform:scale(1);opacity:1}to{transform:scale(1.4);opacity:0}}:root{--contet-width: 1600}@media (orientation: portrait){:root{--contet-width: 768}}main[data-astro-cid-j7pv25f6]{--time: calc(var(--num) * 12s);margin:auto;padding:1rem;color:#fff;font-size:calc(20/ var(--contet-width) * 100vw);line-height:1.6;height:100%;display:grid;grid-template-rows:1fr 1fr 1fr;place-items:center}h1[data-astro-cid-j7pv25f6]{font-size:calc(60/ var(--contet-width) * 100vw);font-weight:700;text-align:center;margin:0}ul[data-astro-cid-j7pv25f6]{position:fixed;top:0;right:0;list-style:\"\";margin:0;padding:0;display:flex;height:100%;animation:slide var(--time) linear infinite;transform:translate(0);z-index:1}.cover[data-astro-cid-j7pv25f6]{width:100%;height:100%;padding:calc(10/ var(--contet-width) * 100vw)}.thx[data-astro-cid-j7pv25f6]{animation:thx var(--time) linear;opacity:0;animation-fill-mode:forwards}[data-astro-cid-j7pv25f6][data-state=paused]{animation-play-state:paused}@keyframes slide{0%{transform:translate(100%)}to{transform:translate(-100%)}}@keyframes thx{0%{opacity:0}30%{opacity:0}50%{opacity:1}to{opacity:1}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/wan55/Desktop/training/ranking/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/Users/wan55/Desktop/training/ranking/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_C4VICQAn.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.BhLPb7ji.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/favicon.svg","/assets/audio/bgm.mp3"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"9kSu854ujVVLUZvPgg8soH3eIue7ROKkRv6+re9uKrc=","experimentalEnvGetSecretEnabled":false});

export { manifest };
