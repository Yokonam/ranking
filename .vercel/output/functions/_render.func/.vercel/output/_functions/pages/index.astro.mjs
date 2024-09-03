import { c as createComponent, r as renderTemplate, a as addAttribute, b as renderHead, e as renderSlot, f as createAstro, m as maybeRenderHead, g as renderComponent } from '../chunks/astro/server_cVH6mvyz.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/wan55/Desktop/training/ranking/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { title, img, artist, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="link-card" data-astro-cid-dohjnao5> <a${addAttribute(`${href}`, "href")} target="_blank" data-astro-cid-dohjnao5> <div class="img" data-astro-cid-dohjnao5> <img${addAttribute(`${img}`, "src")}${addAttribute(`${title}`, "alt")} data-astro-cid-dohjnao5> </div> <p class="rank" data-astro-cid-dohjnao5>1位</p> <div class="body" data-astro-cid-dohjnao5> <p class="title" data-astro-cid-dohjnao5>${title}</p> <p class="artist" data-astro-cid-dohjnao5>${artist}</p> </div> </a> </li> `;
}, "/Users/wan55/Desktop/training/ranking/src/components/Card.astro", void 0);

const $$Button = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button class="play" data-astro-cid-vnzlvqnm>
結果を見る<br data-astro-cid-vnzlvqnm><small data-astro-cid-vnzlvqnm>🔊 音が出ます</small> </button> `;
}, "/Users/wan55/Desktop/training/ranking/src/components/Button.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const items = [
    {
      title: "\u71C8",
      artist: "\u5D0E\u5C71\u84BC\u5FD7",
      img: "https://lh3.googleusercontent.com/TZp-8loN1-32xyh3aTkLqqFaUdtf5X-KEhY6p7cN_hRruXeMPqPZK_Hj3mnHYggGYtK5gAprwzep4r08ow",
      href: "https://music.youtube.com/watch?v=yFRNB8Jji4Y&si=nT4Oy47E1C-Cevpd"
    },
    {
      title: "Hey boy!",
      artist: "\u7247\u5E73\u91CC\u83DC",
      img: "https://lh3.googleusercontent.com/sQE5vKIXAgcySinWHhnM5wih3JjnFDxMi9BEiCqpkSeV6qKJzSgb69YTDOn8WwfDackXT2MQnHI0da8",
      href: "https://music.youtube.com/watch?v=68_STLaWvOA&si=c3n5GkYi-4dRfolc"
    },
    {
      title: "sabio",
      artist: "\u3066\u306B\u3092\u306F",
      img: "https://i.ytimg.com/vi/aH_yxdoiP6o/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3mXXc-qjJrDEBaq7J7P1mAs7hXo4w",
      href: "https://music.youtube.com/watch?v=aH_yxdoiP6o&si=WGNfSwCC0-Vqbmfg"
    },
    {
      title: "\u30AB\u30CA\u30C5\u30C1",
      artist: "hockrockb",
      img: "https://lh3.googleusercontent.com/5-PMC-cvQFwZtFh1gHpcUbNWblFL5gSOUHyQ6ZEytrtXaQrkV8IlirDJHFRBF5gBOBssAT_Xi6DUQ4cRTQ",
      href: "https://music.youtube.com/watch?v=URtGnPw-lpw&si=312RZAC3AnrYF8Wb"
    },
    {
      title: "\u30CA\u30A4\u30C8\u30EB\u30FC\u30C6\u30A3\u30F3",
      artist: "\u30AD\u30BF\u30CB\u30BF\u30C4\u30E4",
      img: "https://lh3.googleusercontent.com/Cn0EIPwf8nq8VhSSRfgN5Da8pQ5edHcNz6W7_C6vLorwyMHcJIi3BphfsuvpT9tC57aoXZqMhGmbJpU",
      href: "https://music.youtube.com/watch?v=CRwGzvNJpgE&si=qC3vYzVZrm-IUBpd"
    },
    {
      title: "\u3044\u3070\u3089",
      artist: "Ado",
      img: "https://lh3.googleusercontent.com/9WhR2UGFZHNqb0aEGm4yHftxx5k9o-9S1zD18dm_DXSkBNab2yMCFCz7BBjNiB3q5mheiJuxK-WgGDvo",
      href: "https://music.youtube.com/watch?v=KWCX4YfxlP0&si=-jWidhej6bOZBE9i"
    },
    {
      title: "\u79C1\u7684\u306A\u30B5\u30EB\u30D9\u30A4\u30B7\u30E7\u30F3",
      artist: "\u6697\u6708 feat. CONOMI",
      img: "https://lh3.googleusercontent.com/QtVqee1VehHVanI_oXmHRdGzcqriAnyBW209Ae-hZYo_m4YW80YvL-lUnHOYOM0Ws0ciOvvn0yRsF1KT",
      href: "https://music.youtube.com/watch?v=1ls1yNAIQJI&si=ZJi5D53Y7CVfFWWQ"
    },
    {
      title: "\u521D",
      artist: "\u521D\u661F\u5B66\u5712",
      img: "https://lh3.googleusercontent.com/cy3-3JvrFw_GzVlHh7s_S1jVLIhfhoib76Y_FcXohoOIyf6q_4IhStNmjYmTFR45uySKuUu56MSh7yhdSw",
      href: "https://music.youtube.com/watch?v=w-3PTQLwj4w&si=xbvkDfc_e0OOAshx"
    },
    {
      title: "\u666E\u904D",
      artist: "ano",
      img: "https://lh3.googleusercontent.com/W22xQoIdhumrygBTu8cvWDjt4SEl-c9bC-2phLDDVzeuGnHkSxl0bB9jsAH_5D5N92jOnAMVAqTHB0M",
      href: "https://music.youtube.com/watch?v=LYhyY7wCxjE&si=cUVRTc-MEEPerTwu"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u300C\u672C\u65E5\u306E\u304A\u3059\u3059\u3081\u66F2\u300D\u4EBA\u6C17\u66F2\u30E9\u30F3\u30AD\u30F3\u30B02024", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main${addAttribute(`--num: ${items.length};`, "style")} data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6></div> <h1 data-astro-cid-j7pv25f6>「本日のおすすめ曲」<br data-astro-cid-j7pv25f6>人気曲ランキング2024</h1> <ul class="card-list" data-state="paused" data-astro-cid-j7pv25f6> ${items.map(({ title, artist, img, href }) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "title": title, "artist": artist, "img": img, "href": href, "data-astro-cid-j7pv25f6": true })}`)} </ul> <strong class="thx" data-state="paused" data-astro-cid-j7pv25f6>投票ありがとうございました😁👍</strong> <div class="cover" data-astro-cid-j7pv25f6> <audio id="bgm" loop data-astro-cid-j7pv25f6> <source src="assets/audio/bgm.mp3" type="audio/mp3" data-astro-cid-j7pv25f6> </audio> ${renderComponent($$result2, "Button", $$Button, { "data-astro-cid-j7pv25f6": true })} </div> </main> ` })}  `;
}, "/Users/wan55/Desktop/training/ranking/src/pages/index.astro", void 0);

const $$file = "/Users/wan55/Desktop/training/ranking/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
