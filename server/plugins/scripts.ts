export default defineNitroPlugin((nitroApp: any) => {
  nitroApp.hooks.hook("render:html", (html: any, { event }: any) => {
    html.head.push(`
    <script src="https://tally.so/widgets/embed.js"></script>
    <script src="https://assets.lemonsqueezy.com/lemon.js" defer></script>
    `);
  });
});
