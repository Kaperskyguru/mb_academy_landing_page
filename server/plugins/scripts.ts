export default defineNitroPlugin((nitroApp: any) => {
  if (process.env.NODE_ENV == "development") return;
  nitroApp.hooks.hook("render:html", (html: any, { event }: any) => {
    html.head.push(`
    <script src="https://tally.so/widgets/embed.js"></script>
    <script src="https://assets.lemonsqueezy.com/lemon.js" defer></script>


    <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-041ETKKJKD"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-041ETKKJKD');
</script>

    `);
  });
});
