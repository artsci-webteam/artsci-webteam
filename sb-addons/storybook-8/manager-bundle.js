try{
(()=>{var V=__STORYBOOK_ADDONS__,{addons:l,types:n,mockChannel:i}=__STORYBOOK_ADDONS__;var O=__STORYBOOK_THEMING__,{CacheProvider:H,ClassNames:b,Global:f,ThemeProvider:x,background:T,color:B,convert:w,create:m,createCache:S,createGlobal:u,createReset:y,css:R,darken:D,ensure:N,ignoreSsrWarning:k,isPropValid:G,jsx:I,keyframes:K,lighten:P,styled:Y,themes:A,typography:L,useTheme:E,withTheme:j}=__STORYBOOK_THEMING__;var e='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 408.2 64" xml:space="preserve"><path d="M37.3 40.2h370.1m-370.1-.4h370.1v.9H37.3zm258-29.2c.4 0 1.3-1.5 1.3-2s-.9-2-1.3-2-1.3 1.6-1.3 2 .9 2 1.3 2zm17.5 15.3v-6.4c0-3-1-7.3-5.3-7.3-3.2 0-4.8 3-4.8 2.6v-2.2c0-.4-.2-.6-.4-.6-.8 0-1.3 1.3-3.9 2.1-.2 0-.6 0-.7.3 0 .8 2.6-1.1 2.5 2.1V26c0 1.8-.9 2-1.5 2.1h-.1c-.7 0-2.1-.3-2.1-1.7v-14c0-.4-.2-.6-.4-.6-.8 0-1.2 1.4-3.3 2.1-.2 0-.5.1-.5.3 0 .8 1.9-.8 1.8 2.1v9.2c.1 2.4-1.2 2.6-1.9 2.6-1.1 0-.8.1-.8.5s.7.4 1.7.4c.4 0 1.3-.1 2.3-.1 1.3 0 2.4.2 3.1.2.4 0 1.5-.2 3.2-.2 1.9 0 2.6.2 3.1.2s1.1-.2.7-.5c-.5-.5-2.9.1-2.9-2.6v-9c0-.6 1.1-3 3.9-3 2.7 0 3.8 2.9 3.8 4.9V26c0 2.9-1 2-1.4 2.5-.2.3.2.5.6.5s1.1-.2 2.4-.2c1.6 0 2.3.1 2.7.1.3 0 .9-.3.6-.5-.8-.6-2.4.4-2.4-2.5zM62.8 3.3c.5-.1.7-.2.7-.2 0-.3-.1-.4-.5-.4-.8 0-1.3.1-2.1.1-.9 0-1.6-.1-2.3-.1-.4 0-.4.1-.4.4s.8.1 1.3 1.1c.3.5.2 1.7-.1 2.4L53.1 24l-2.7-7.7-1.1-2.8s-.2.1.6-2.3l1.5-4.5c.7-2.2 1.5-3.3 2.4-3.4 1.2 0 1.2-.7.3-.7s-1.4.1-2.2.1-1.3-.1-2.1-.1c-.3 0-.7.1-.7.4s.5.2.9.4c.6.3 1 1.6.6 2.9l-2 5.7-2-5.2c-.4-1-.9-3.2 0-3.4s.8-.7.2-.7c-1.1 0-1.7.1-2.7.1-1.2 0-2-.1-3.1-.1-.2 0-.7 0-.5.5.1.3.6.2 1 .4 1.3.9 1.6 2 2 3.2l2.9 8.2c.5 1.5.6.9.1 2.2l-2.5 7-6.2-18c-.5-1.3-.8-2.2.3-2.7.5-.2.6-.3.7-.4.1-.1.1-.4-.6-.4-1.1 0-1.8.1-2.9.1-1.2 0-2-.1-3.1-.1-.4 0-.4.2-.4.4 0 .4.9.1 1.7 1 .4.5 1.3 2.1 1.5 2.7l7.5 21.7c.1.3.2 1 .6 1 .3 0 .4-.7.5-1l4-10.9 3.9 10.3c.2.4.4 1.5.8 1.5.3 0 .5-.5.6-1.1l7.5-21.4c.5-1.5 1.2-3.4 2.4-3.6zm82.9 8.5c-4.1 0-7.3 4.2-7.3 9 0 2.5.7 4.4 1.8 5.9-.4.3-1.2.9-2.7.9-1.4 0-2.1-.8-2.2-2.5V14.5h4.3c.3 0 .8-1.8.8-1.9 0-.2.1-.4.2-.6.1-.3-.2-.4-.5 0-.2.2-.4.7-1.3.7h-3.6c0-3.1 0-4.4-.4-4.4-.5 0-.4.1-.8 1.5-.6 1.8-2.3 2.8-3.3 3.4-.5.1-1 .1-1.6 0-.9-.2-2-1.3-4.8-1.3-3 0-5.6 2.5-5.6 5.8 0 1.8.8 3.5 2.2 4.4-.3.2-1.9 1.6-1.7 3.2 0 0 0 1.7 1.3 2.3-.4.2-.8.4-1.2.8-.9-.3-2.2-.1-2.2-2.4v-6.4c0-3-1-7.3-5.3-7.3-3.2 0-4.8 3-4.8 2.5v-2.2c0-.4-.2-.6-.4-.6-.8 0-.9 1.3-3.7 2-.2 0-.5.1-.6.4 0 .8 2.2-.9 2.2 2.1V26c0 2.1-1.7 2.1-1.9 2.1h-.4c-.7-.1-1.9-.4-1.9-1.7v-14c0-.4-.2-.6-.4-.6-.8 0-1.2 1.4-3.3 2.1-.2 0-.5.1-.5.3 0 .8 1.9-.8 1.8 2.1v9.2c.1 2.3-1.1 2.6-1.8 2.6-.9-.1-1.5-.5-1.5-1.8v-6.5c0-3.4-1.3-7.7-5.5-7.7-1.9 0-3.5 1-4.7 2.4V3.3c0-.4-.2-.6-.4-.6-.5 0-1.4 1.5-3.7 2.1-.2 0-.8.1-.8.3 0 .8 2.5-.4 2.5 2.1v19.1c0 1.9-1.6 1.7-1.9 2.3-.3.3-.1.4.1.4.5 0 2-.2 3-.2s2.7.2 3.3.2c.4 0 .6-.1.6-.5-.3-.7-2.9.4-2.9-3v-8.2c0-2 2.4-3.5 3.8-3.5 1.1 0 4 .9 4 5.7v7.1c0 1.4-1.5 1.6-1.6 2 0 .3.2.4.5.4.4 0 1.4-.2 2.7-.2.7 0 1.4 0 1.9.1.3.1.7.1 1.2.1.4 0 1.3-.1 2.3-.1s1.9.1 2.5.1h1.4c.4 0 1.1-.2 2.8-.2 1.9 0 2.6.2 3.1.2s1.1-.2.7-.5c-.5-.5-2.9.1-2.9-2.6v-9c0-.6 1.1-3 3.9-3 2.7 0 3.8 2.9 3.8 4.9V26c0 2.5-1 2-1.4 2.5-.2.3.2.5.6.5s1.1-.2 2.4-.2c1.2 0 1.9.1 2.4.1-.4.5-.6 1.1-.6 1.8-.2 3.2 3.7 4.3 7 4.3 6.5-.1 8.3-4.6 7-7-1.4-2.5-4.4-2.4-7.2-2.4-5.3 0-4.3-3.3-2.1-3.2.5 0 .3.2 2 .2 3.1 0 6-2.1 5.9-5.5 0-.3.1-1.3-.7-2.7h3.1v9.7c0 4.4 2.1 5.1 3.6 5.1 2.2 0 3.8-1.5 4.1-2.1 1.3 1.4 3.1 2.1 5.2 2.1 4 0 7.1-3.7 7.1-8.6.1-7.3-4.5-8.8-7-8.8zm-23.8 16c.3 0 .3.1 3.3.2 3.1.1 4.2 1 4.4 1.8.3 1.4-.7 4.5-5.1 4.2-2.8-.2-3.6-1.5-3.8-1.8-1-1.5-.2-4.3 1.2-4.4zm2.6-5.8c-2.6 0-3.5-2.5-3.5-4.9 0-2.5.7-4.5 3.4-4.5s3.7 2.7 3.7 5.1-1.1 4.3-3.6 4.3zm21.5 6.1c-3.8 0-5.3-4.8-5.3-8.6 0-3.4 1.3-6.5 4.5-6.5 3.9 0 5.3 4.2 5.3 8.2 0 4.9-1.7 6.9-4.5 6.9z"/><path d="M166.9 25.9v-6.4c0-3-1-7.3-5.3-7.3-3.2 0-4.8 3-4.8 2.6v-2.2c0-.4-.2-.6-.4-.6-.8 0-1.3 1.3-3.9 2.1-.2 0-.6 0-.7.3 0 .8 2.6-1.1 2.5 2.1V26c0 2.5-1.7 1.9-2.1 2.6-.2.3.3.4.7.4s1-.2 2.8-.2c1.9 0 2.6.2 3.1.2s1.1-.2.7-.5c-.5-.5-2.9.1-2.9-2.6v-9c0-.6 1.1-3 3.9-3 2.7 0 3.8 2.9 3.8 4.9V26c0 2.9-1 2-1.4 2.5-.2.3.2.5.6.5.4 0 1.1-.2 2.4-.2 1.6 0 2.3.1 2.7.1.3 0 .9-.3.6-.5-.7-.6-2.3.4-2.3-2.5zm-68-15.3c.4 0 1.3-1.5 1.3-2s-.9-2-1.3-2-1.3 1.6-1.3 2 .9 2 1.3 2zM77 19.4c-.6-.3-1.6-.9-2.1-1.1-2.1-1.1-2.9-1.9-2.9-2.9-.1-1.8 1.5-2.8 2.8-2.6 3.2-.1 3.6 3.5 4 3.5.5 0 .4-.5.4-1.5 0-.3 0-1.6-.2-1.9-.4-.6-2.7-.9-3.2-.9h-1.2c-2.3 0-4.4 1.4-4.4 4.5.1 2.8 3.3 4.4 5.1 5.4 1.3.7 2.9 1.5 2.8 3.2 0 2-1.6 3.4-3.3 3.3-4-.1-3.4-5.1-4.2-5.1-.5 0-.4 1.3-.4 1.9v1.7c-.1.5-.3.9-.7.9-1.6.1-1.2-2.4-1.2-3.7V16c-.1-2.5-2-4.1-4.8-4.1-3.9 0-6.7 4.8-5.4 6.3.3.4 1.6-1 1.7-1.1.2-.1.2-.2.2-.2 0-1.6 1.2-3.7 3-3.9 2-.2 3 1.3 3 3.4V19c-7.7 1.5-8.8 4.1-8.8 6.2 0 2.8 2 4 4.1 4 1.8 0 3.6-.9 5-2.3.4 1.3 1.3 2.1 2.6 2 .4 0 .5.1 1.9-.5.5-.1.4-.1 1 0 .7.2 1.7.7 3.4.7 2.6 0 4.9-2.3 4.9-5.3-.1-1.7-.6-2.8-3.1-4.4zm-10.7 5.5c0 2.1-2.1 3.2-3.3 3.2-1.7 0-3-1.1-3-3.4 0-3.5 4.2-4.1 6.3-4.6v4.8zm278.7.3c-.4 0-1.4 1.6-1.4 2.1 0 .4 1 2 1.4 2s1.4-1.6 1.4-2c-.1-.6-1-2.1-1.4-2.1zm42.7 1.4V12.8c0-.8-.4-1-.6-1-.5 0-.8.1-1.1.2-.3.1-.7.3-1.6.3-.2 0-1-.1-1 .3.1.5 2 .2 2 1.6v9.9c-.2 1.7-1.6 3.6-3.4 3.6-.4 0-3-.3-3-4.6V12.8c0-.8-.4-1-.6-1-.5 0-.8.1-1.1.2-.3.1-.8.3-1.7.2-.5 0-1-.1-.9.4.1.4 2 0 2 1.6v9.5c0 3.5 2 5.5 4.5 5.5 1.6 0 3.2-.4 4.1-2.3h.1v1.7c0 .2 0 .6.3.6.5 0 .7-.4 1.1-.5s.5-.4 1.6-.5c.5 0 1-.3 1-.6-.1-.7-1.7 0-1.7-1z"/><path d="M368.3 11.8c-4.1 0-7.3 4.2-7.3 9 0 2.2.5 4 1.4 5.4-1 .7-2.8 1.4-6.3 1.4-2.7 0-2.4-.9-2.4-3.2V6.1c0-3.4 2.5-2.4 2.6-3 0-.4-.4-.3-.8-.3-.5 0-1.4.2-3.2.2-1.6 0-3-.1-3.6-.1-.4 0-.8.1-.7.4.3.7 2.7.1 2.7 2.1v19.1c0 1.8.3 3-.6 3.5-1 .6-2.2.7-2.1 1.1.1.3.6.3.9.3 1.3 0 3.1-.2 4.4-.2 2.4-.1 4.9.2 7.3.2 1.4 0 1.8-.3 2.8-1.7v-.1c1.3 1.2 3 1.8 4.9 1.8 4 0 7.1-3.7 7.1-8.6 0-7.5-4.6-9-7.1-9zm.3 16.3c-3.8 0-5.3-4.8-5.3-8.6 0-3.4 1.3-6.5 4.5-6.5 3.9 0 5.3 4.2 5.3 8.2 0 4.9-1.7 6.9-4.5 6.9zM328 14.8c-.9-.5-2.3-1.3-3-1.7-3-1.7-4.2-2.9-4.3-4.5-.1-2.8 2.6-4.5 4.5-4.2 2.5 0 4.5 1.5 5.4 4.7.1.3.4 1.1.7 1.1.3 0 .3-.3.3-.6l-.4-5.1c0-.4-.2-.5-.3-.5-.3 0-.5.4-.7.4-.4 0-1.4-1.4-4.8-1.4h-.5c-3.3-.1-6.5 2.2-6.4 6.8.1 4.3 4.9 6.7 7.5 8.3 1.9 1.1 3.9 3 3.8 5-.1 3.1-2.1 5.2-4.5 5-5.8-.1-5-7.8-6.1-7.8-.7 0-.6 1.9-.6 2.9 0 2.4-.1 4.4.2 4.8.1.1.4.1.9.1 1.1 0 2.5 1.3 5.9 1.3 3.7.1 6.8-3.4 6.8-7.9 0-2.6-.7-4.3-4.4-6.7zm65.5-4.2c.4 0 1.3-1.5 1.3-2s-.9-2-1.3-2-1.3 1.6-1.3 2 .9 2 1.3 2zm3.3 17.6c-.7 0-2.1-.3-2.1-1.7v-14c0-.4-.2-.6-.4-.6-.8 0-1.2 1.4-3.3 2.1-.2 0-.5.1-.5.3 0 .8 1.9-.8 1.8 2.1v9.2c.1 2.4-1.2 2.6-1.9 2.6-1.1 0-.8.1-.8.5s.7.4 1.7.4c.4 0 1.3-.1 2.3-.1 1.3 0 2.4.2 3 .2.6-.2 1.1-1.2.2-1zm7.6-8.8c-.6-.3-1.6-.9-2.1-1.1-2.1-1.1-2.9-1.9-2.9-2.9-.1-1.8 1.5-2.8 2.8-2.6 3.2-.1 3.6 3.5 4 3.5.5 0 .4-.5.4-1.5 0-.3 0-1.6-.2-1.9-.4-.6-2.7-.9-3.2-.9H402c-2.3 0-4.4 1.4-4.4 4.5.1 2.8 3.3 4.4 5.1 5.4 1.3.7 2.9 1.5 2.8 3.2 0 2-1.6 3.4-3.3 3.3-4-.1-3.4-5.1-4.2-5.1-.5 0-.4 1.3-.4 1.9 0 1.6-.1 2.9.1 3.1.1.1.3 0 .6 0 .8 0 1.7.9 4 .9 2.6 0 4.9-2.3 4.9-5.3.2-1.8-.3-2.9-2.8-4.5zm-61.7 7.2c-.3.2-1.1 1-2.9 1-1.4 0-2.1-.8-2.2-2.5V13.9h4.3c.3 0 .8-1.8.8-1.9 0-.2.1-.4.2-.6.1-.3-.2-.4-.5 0-.2.2-.4.7-1.3.7h-3.6c0-3 0-3.8-.4-3.8-.5 0-.4.1-.8 1.5-.7 2.3-3.2 3.3-4 3.8-.2.1-.2.1-.2.2 0 .3.9.2 2.9.2v10.2c0 4.4 2.1 5.1 3.6 5.1 2.4 0 4.1-1.7 4.2-2.3.1-.4.1-.4-.1-.4zm-103-1.4c-.7 0-1.8 2.1-4.6 2.1-2 0-5.3-1.9-5.3-8.4h8.7c.8 0 1.1 0 1.1-.7 0-1.6-1.8-6.3-5.8-6.3-4.1 0-6.4 4.2-6.4 9.3 0 2.6 1.7 8.1 6.6 8.1 3 0 5.8-2.8 5.8-3.7 0-.2 0-.4-.1-.4zm-6.5-12.4c1.8 0 3.6 2 3.6 4.2 0 .6-.2.8-.7.8h-6.5c.2-2.2 1.6-5 3.6-5zm-40.1-9.3c.1-.2-.3-.3-.5-.3-.5 0-1.7.1-2.3.1-1.1 0-2.1-.1-3.2-.1-.1 0-.6.1-.6.2 0 .8 2.7-.1 2.7 3.3v13.4c0 4-1.2 8.1-6.7 8.1-3.9 0-6-2.4-6-7.8V5.9c0-2.4 1.9-1.9 1.9-2.4s-1.7-.2-1.8-.2c-.9 0-1.5.1-2.5.1-.8 0-1.7-.1-2.5-.1-.1 0-.7 0-.8.2-.3.7 2.4.3 2.4 2.3v13.8c0 5.2 1.5 10.2 9.1 10.1 9-.2 8.9-8.3 8.9-9.9v-13c.1-3.1 1.6-2.8 1.9-3.3zm35.7 9.2c.2-.3.3-.7-.7-.6-.6 0-1 .1-1.5.1-.7 0-.9 0-1.5-.1-.9 0-1.1.1-1 .3.1.8 2 0 1.7 2.3-.2 1.9-.8 3.5-1.4 5.2l-2.2 5.8L219 16c-.4-1.2-.6-1.9-.6-2 0-1.2 1.5-.9 1.8-1.5.2-.3-.2-.5-.7-.5-.4 0-.8.1-2.1.2-1 0-1.7 0-2.2-.1-1.1-.2-1 .4-.6.6.4.2.6 0 1.2 1.7l5 14c.1.3.2 1 .7 1s.5-.5 1.1-2.2c0 0 4.7-13.3 5.1-13.7.4-.9.9-.5 1.1-.8z"/><path d="M247.1 12.1c-1.3 0-2.3 1.6-3 2.7h-.1v-2.4c0-.4-.2-.6-.4-.6-.5 0-.9 1-3.6 1.7-.2 0-.6.1-.6.4 0 .8 2.3-.2 2.3 2.4v10.2c0 1.6-1.6 1.4-1.6 2.2 0 .2.1.3.4.3.2 0 .8-.2 2.9-.2 1.8 0 2.6.2 3 .2.3 0 .5-.1.5-.4 0-1.2-2.8.6-2.8-3v-8.7c0-.5.8-2.3 2.1-2.3 1.1 0 1.3.9 1.9.9.4 0 1.1-1.2 1.1-1.7 0-.7-1.4-1.7-2.1-1.7zm41.3.1c-.3 0-1.2.1-2 .1-1 0-1.4-.1-1.8-.1-.6 0-1.2 0-1.1.4.1.5 2.2.3 2.2 2.6 0 .3 0 .7-.4 2.2l-2.6 8.4-3.7-10.3s-.2-.3-.2-1c0-1.7 2-1.5 2-1.8.1-.2-.3-.5-.8-.5h-8.3c0-3.1 0-3.8-.4-3.8-.5 0-.4.1-.8 1.5-.7 2.3-3.2 3.3-4 3.8-.2.1-.2.1-.2.2 0 .3 1 .2 2.9.2v10.2c0 4.4 2.1 5.1 3.6 5.1 2.4 0 4.1-1.7 4.2-2.3 0-.3 0-.4-.2-.3-.3.2-1.1 1-2.9 1-1.4 0-2.1-.8-2.2-2.5V13.9h4.1c0 .1.1.2.1.2l3.8 10.7c.3.9.5 1.2.9 2.7.2 1 .2 1.9.2 1.9-.4 1.6-1.4 2.5-2.9 5.5-.1.3 2.2 0 2.3-.1.2-.1.2-.1.4-.5l1.7-5 4.7-14.4c.7-2.5 1.8-2.1 1.9-2.4 0-.1-.1-.3-.5-.3zm-6.1 16.9-.1.3zm-18.7-18.5c.4 0 1.3-1.5 1.3-2s-.9-2-1.3-2-1.3 1.6-1.3 2 .9 2 1.3 2zm3.4 17.6c-.7 0-2.1-.3-2.1-1.7v-14c0-.4-.2-.6-.4-.6-.8 0-1.2 1.4-3.3 2.1-.2 0-.5.1-.5.3 0 .8 1.9-.8 1.8 2.1v9.2c.1 2.4-1.2 2.6-1.9 2.6-1.1 0-.8.1-.8.5s.7.4 1.7.4c.4 0 1.3-.1 2.3-.1 1.3 0 2.4.2 3 .2.5-.2 1-1.2.2-1zm-55.2-17.6c.4 0 1.3-1.5 1.3-2s-.9-2-1.3-2-1.3 1.6-1.3 2 .9 2 1.3 2zm3.3 17.6c-.7 0-2.1-.3-2.1-1.7v-14c0-.4-.2-.6-.4-.6-.8 0-1.2 1.4-3.3 2.1-.2 0-.5.1-.5.3 0 .8 1.9-.8 1.8 2.1v9.2c.1 2.4-1.2 2.6-1.9 2.6h-.2c-.7-.1-1.3-.4-1.3-2.3v-6.4c0-3-1-7.3-5.3-7.3-3.2 0-4.8 3-4.8 2.6v-2.2c0-.4-.2-.6-.4-.6-.8 0-1.3 1.3-3.9 2.1-.2 0-.6 0-.7.3 0 .8 2.6-1.1 2.5 2.1V26c0 2.5-1.7 1.9-2.1 2.6-.2.3.3.4.7.4s1.1-.2 2.8-.2c1.9 0 2.6.2 3.1.2s1.1-.2.7-.5c-.5-.5-2.9.1-2.9-2.6v-9c0-.6 1.1-3 3.9-3 2.7 0 3.8 2.9 3.8 4.9V26c0 2.9-1 2-1.4 2.5-.2.3.2.5.6.5.4 0 1.1-.2 2.4-.2 1.6 0 2.3.1 2.7.1h.6c.4 0 1.3-.1 2.3-.1 1.3 0 2.4.2 3.1.2.5 0 1.1-1 .2-.8zm41.5-8.8c-.6-.3-1.6-.9-2.1-1.1-2.1-1.1-2.9-1.9-2.9-2.9-.1-1.8 1.5-2.8 2.8-2.6 3.2-.1 3.6 3.5 4 3.5.5 0 .4-.5.4-1.5 0-.3 0-1.6-.2-1.9-.4-.6-2.7-.9-3.2-.9h-1.2c-2.3 0-4.4 1.4-4.4 4.5.1 2.8 3.3 4.4 5.1 5.4 1.3.7 2.9 1.5 2.8 3.2 0 2-1.6 3.4-3.3 3.3-4-.1-3.4-5.1-4.2-5.1-.5 0-.4 1.3-.4 1.9 0 1.6-.1 2.9.1 3.1.1.1.3 0 .6 0 .8 0 1.7.9 4 .9 2.6 0 4.9-2.3 4.9-5.3.2-1.8-.4-2.9-2.8-4.5zM14.1 2.5C14 2.5 8.5 2.6.8 1v22.6c0 1 .4 1.8 1 2.5.4.4 1 .9 1.7 1.3.2.1.4.2.7.4l.6.3c.2.1.7.3.9.4l8.4 3.2 8.4-3.2c.2-.1.7-.3.9-.4l.6-.3c.3-.1.5-.2.7-.4.8-.4 1.3-.9 1.7-1.3.6-.7.9-1.5 1-2.5V1c-7.7 1.6-13.2 1.5-13.3 1.5zm12.1 20.1v.6c0 .9-.3 1.7-.9 2.3-.4.4-.9.8-1.6 1.2l-.6.3c-.2.1-.4.2-.5.2-.2.1-.6.3-.8.3l-7.6 2.9-7.6-2.9c-.2-.1-.7-.3-.8-.3-.2-.1-.4-.2-.5-.2l-.6-.3c-.7-.4-1.2-.8-1.6-1.2-.8-.6-1.1-1.3-1.1-2.3V2.4c7 1.5 12 1.4 12.1 1.4.1 0 5.1 0 12.1-1.4v20.2z"/><path d="M14.1 5C14 5 9.4 5.1 3 3.7v5.2c6.4 1.3 11 1.3 11.1 1.3.1 0 4.7 0 11.1-1.3V3.7C18.7 5.1 14.2 5 14.1 5zM8.2 9.1l-1.3-1-1.3 1 .5-1.6-1.3-1h1.6L6.9 5l.5 1.6H9l-1.3 1 .5 1.5zm12.5-2.6.5-1.5.5 1.6h1.6l-1.3 1 .5 1.6-1.3-.9-1.3.9.5-1.6-1.3-1 1.6-.1zm-4.5.6-1.3 1 .5 1.6-1.3-.9-1.3.9.5-1.6-1.3-1h1.6l.5-1.6.5 1.6h1.6zm-2.1 14.6c-.1 0-4.7 0-11.1-1.3v2.3c0 .9.3 1.5.8 2.1.3.4.8.7 1.5 1.1l.6.3c.2.1.3.1.5.2.1.1.6.3.7.3l7 2.6 7-2.6c.1-.1.6-.3.7-.3.2-.1.3-.1.5-.2l.6-.3c.7-.4 1.1-.7 1.5-1.1.5-.6.8-1.3.8-2.1v-2.3c-6.5 1.3-11 1.3-11.1 1.3zm-7.7 3.6-.3.3-.5-.4v-.4h.7v.5h.1zm0-.7H6V24l-.4-.4-.5.3-.3-.3v-.5h1.1l.5.5v1zm.5 1.7-.4-.5.2-.4v-.6h.4v.6l.2.4-.4.5zm.4-3.3-.2.6v1h-.4v-1l-.2-.6v-1.1l.4-.4.4.4V23zm.8 2.2-.5.4-.3-.3v-.4H8v.3h.1zm.9-1.6-.3.3-.5-.3-.4.4v.6h-.4v-1l.5-.5H9v.5zm4.4 3.9-.4.4-.6-.5v-.5h1v.6zm0-1.1h-.6v-.8l-.5-.6-.7.4-.4-.4v-.7h1.5l.7.8v1.3zm.7 2.5-.6-.7.3-.5v-.8h.6v.8l.3.5-.6.7zm6.7-3.6-.3.3-.5-.4v-.4h.7l.1.5zm.9-1.7.5-.5h1.1v.5l-.3.3-.5-.3-.4.4v.6h-.4v-1zm0 1.2h.7v.4l-.4.4-.3-.3v-.5zm-.9-1.8v-1.1l.4-.4.4.4V23l-.2.6v1H21v-1l-.2-.6zm.3 2.4v-.6h.4v.6l.2.4-.4.5-.4-.5.2-.4zm-1.9-2.3h1.1l.5.5v1h-.4V24l-.4-.4-.5.3-.3-.3v-.5zM14.8 25l.7-.8H17v.8l-.4.4-.7-.4-.5.6v.8h-.6V25zm0 1.8h1v.5l-.6.5-.4-.4v-.6zm-.1-2.6-.3.8v1.4h-.6V25l-.3-.8v-1.6l.6-.6.6.6v1.6zm-.1-5.3-.5.4-.6-.4-.3-.3H8.8V12l-.9.7v6.8h5.2l.4.4.6.5.5-.5.5-.4h5.2v-6.8l-.9-.7v6.6h-4.5z"/><path d="m13.5 11.6-.1-.1H9.7v6.2h3.7l.2.2.5.4.4-.4.3-.2h3.6v-6.2h-3.6l-.2.1-.5.5zm7.7 6c1.2-.2 2.5-.4 3.9-.7v-4.2c-1.4.3-2.7.5-3.9.7v4.2zM6.9 13.4c-1.2-.2-2.5-.4-3.9-.7v4.2c1.4.3 2.7.5 3.9.7v-4.2zm84.4 39.3s2.1-1.2 2-3.4c-.1-2.1-1.2-2.8-2-2.8s-1.8.6-1.9 2.5c-.2 2.2 1.9 3.7 1.9 3.7zm3.1 6c-.8-1.1-1.6-2.1-2.6-3.1-.7-.8-1.4-1.4-1.4-1.4s-.8.6-1.3 1.1-1.2 1.7-1 3.4c.3 2.4 1.9 3 3.4 2.8s3-2.7 2.9-2.8zm4.9 4.2h-2.2l-.2-.3-.5-.8c-.2-.4-.7-1.1-1.5-2.3-1.6 2.3-2.7 3.4-4.5 3.4-3 0-3.9-2.4-3.9-4.5 0-1.3.5-2.4 1.3-3.3.5-.6 1.1-1.1 2-1.6-1.1-1-1.9-2-1.9-3.5 0-2.7 1.7-4.5 3.5-4.5 1.7 0 3.2 1.5 3.2 3.8 0 1.1-.4 1.7-1 2.4-.3.4-1 1.1-1.6 1.6-.1.1 1.5 1.7 1.6 1.9l1.8 2.1s2-3.9 1.6-4.5c-.3-.5-1.7-.6-1.7-.6v-.7h5v.7c-.4 0-1.2.1-1.8.8-.3.3-2.6 4.8-2.6 4.8s1.7 2.4 1.8 2.6c0 0 .3.4.4.6l.1.2c.7.8.7.9 1.1 1.7zm-44-11.1c0-.8 0-.8 1.1-.8 1.2 0 2.3.8 2.3 2.6 0 .9-.2 1.9-.8 2.4-.5.4-1 .4-1.5.4h-1l-.1-4.6zm0 5.4h.7c.6 0 .8.1 1.1.7.4.8 1 2.1 1.6 3 .6 1 1.4 1.7 3.3 1.7h.3l.1-.6c-.5-.2-.9-.5-1.2-.8-.4-.4-.8-1-1.3-2-.5-.8-1.2-2.1-1.5-2.7 1.3-.6 2.2-1.5 2.2-3.2 0-1.2-.5-2.1-1.1-2.5-.7-.5-1.5-.6-2.6-.6H52v.6c1.4.1 1.5.2 1.5 2.3v6.4c0 2-.1 2.1-1.6 2.3v.6h4.9v-.6c-1.4-.1-1.6-.3-1.6-2.3l.1-2.3zm11 2.4c0 2-.1 2.1-1.7 2.3v.6h5.2v-.6c-1.6-.1-1.8-.3-1.8-2.3v-8.5h1c1 0 1.5.2 1.8.5.2.3.4.8.6 1.9l.6-.1c-.1-1.2-.2-2.9-.2-3.7h-.3c-.2.4-.3.5-.8.5h-7c-.4 0-.6-.1-.9-.5h-.3c0 1-.1 2.3-.2 3.7h.7c.2-1 .4-1.5.6-1.8.2-.3.7-.6 2-.6h.7v8.6zm6.5-1c.2 1.2.4 2.8.5 3.2.4.3 1.4 1 2.9 1 2.2 0 3.8-1.6 3.8-3.9s-1.6-3.2-3.2-3.9c-1-.5-2.1-1-2.1-2.4 0-1 .6-2 1.8-2 1.3 0 2.1 1.2 2.4 2.8l.6-.1c-.2-1.3-.2-2.3-.4-3.1-.4-.1-1.2-.5-2.2-.5-2.2 0-3.6 1.5-3.6 3.7 0 2.1 1.8 3 2.9 3.6 1 .5 2.2 1.1 2.2 2.7 0 1.3-.8 2.2-2 2.2-1.5 0-2.7-1.9-3-3.4l-.6.1zm-28.7-9.9 2 5.9h-3.9l1.9-5.9zM43 49.8l-3.2 9.3c-.8 2.5-1 2.6-2.4 2.8v.6h4.8v-.6l-.8-.1c-1-.1-1.2-.4-.8-2 .3-1.2 1.1-3.3 1.3-4.1h4.5c.6 2 1.3 4.1 1.4 4.8.2.9.1 1.2-.7 1.3l-.7.1v.6h5.5v-.6c-1.4-.1-1.7-.3-2.4-2.6-.9-2.9-4.5-13.8-4.5-13.8l-.5.2-1.5 4.1zm62.2 8.3c.2 1.4.4 3.2.6 3.9.3.1.6.3 1.2.5.5.2 1.2.4 2 .4 2.7 0 4.7-2.3 4.7-5.3 0-3.2-2.2-4.4-3.6-5.1-1.6-.9-2.7-1.5-2.7-3.4 0-1.5.7-2.8 2.2-2.8 1.9 0 2.6 1.7 2.9 3.3l.5-.1c-.2-1.5-.3-2.6-.4-3.5-.2-.1-.5-.2-.8-.3-.4-.2-1.2-.3-1.7-.3-2.8 0-4.3 2.2-4.3 4.7 0 3.1 2.9 4.4 3.6 4.8 1.3.8 2.7 1.6 2.7 3.8 0 2-1.2 3.3-2.8 3.3-2.2 0-3.1-2.8-3.4-4l-.7.1zm19.2-4.6c-.1-1.2-.2-2.2-.3-3.3-.6-.2-1.7-.5-3.2-.5-3.4 0-6.1 2.7-6.1 6.6 0 3.1 1.9 6.3 5.9 6.3 1.2 0 2.7-.4 3.2-.5.2-.7.6-2.4.8-3.4l-.6-.1c-.8 2.1-1.7 3.2-3.4 3.2-2.4 0-4-2.4-4-5.9 0-3.1 1.4-5.4 3.8-5.4 1.6 0 2.7.7 3.2 3h.7zm5-.5c0-2 .1-2.1 1.6-2.3v-.6h-4.9v.6c1.4.1 1.6.2 1.6 2.3v6.4c0 2-.1 2.1-1.6 2.3v.6h4.9v-.6c-1.4-.1-1.6-.3-1.6-2.3V53zm4.6 6.4c0 2-.1 2.2-1.7 2.3v.6h8.5c.1-.5.5-2.5.6-3.2l-.6-.1c-.2.9-.5 1.5-.8 1.9-.4.4-1.1.6-2 .6-1 0-1.5 0-1.8-.2s-.4-.8-.4-1.9v-3h1.8c1.4 0 1.5.1 1.6 1.6h.6v-4h-.6c-.2 1.4-.2 1.5-1.6 1.5h-1.8v-3.9c0-.7 0-.7.7-.7h1.3c1.1 0 1.6.3 1.8.6s.4.8.6 1.8l.6-.1c-.1-1.3-.2-2.6-.2-3.1h-8v.6c1.4.1 1.5.2 1.5 2.3v6.4h-.1zm18.5-4.1c0-2 .1-2.9.1-3.6.1-.7.6-1 1.5-1v-.6h-4.3v.6c1.1.1 1.6.4 1.7 1 .1.6.1 1.6.1 3.6v3.8l-6.7-9h-2.8v.6c1.5.1 1.9.6 1.9 2.8v3.7c0 2-.1 2.9-.1 3.5-.1.7-.6 1-1.5 1v.6h4.3v-.6c-1.1-.1-1.6-.4-1.7-1-.1-.6-.1-1.5-.1-3.5v-4l6.9 9.4h.7v-7.3zm11.6-1.8c-.1-1.2-.2-2.2-.3-3.3-.6-.2-1.7-.5-3.2-.5-3.4 0-6.1 2.7-6.1 6.6 0 3.1 1.9 6.3 5.9 6.3 1.2 0 2.7-.4 3.2-.5.2-.7.6-2.4.8-3.4l-.6-.1c-.8 2.1-1.7 3.2-3.4 3.2-2.4 0-4-2.4-4-5.9 0-3.1 1.4-5.4 3.8-5.4 1.6 0 2.7.7 3.2 3h.7zm2.8 5.9c0 2-.1 2.2-1.7 2.3v.6h8.5c.1-.5.5-2.5.6-3.2l-.6-.1c-.2.9-.5 1.5-.8 1.9-.4.4-1.1.6-2 .6-1 0-1.5 0-1.8-.2s-.4-.8-.4-1.9v-3h1.8c1.4 0 1.5.1 1.6 1.6h.6v-4h-.6c-.2 1.4-.2 1.5-1.6 1.5h-1.8v-3.9c0-.7 0-.7.7-.7h1.3c1.1 0 1.6.3 1.8.6s.4.8.6 1.8l.6-.1c-.1-1.3-.2-2.6-.2-3.1h-8v.6c1.4.1 1.5.2 1.5 2.3v6.4h-.1zm8.5-.8c.2 1.2.4 2.8.5 3.2.4.3 1.4 1 2.9 1 2.2 0 3.8-1.6 3.8-3.9s-1.6-3.2-3.2-3.9c-1-.5-2.1-1-2.1-2.4 0-1 .6-2 1.8-2 1.3 0 2.1 1.2 2.4 2.8l.6-.1c-.2-1.3-.2-2.3-.4-3.1-.4-.1-1.2-.5-2.2-.5-2.2 0-3.6 1.5-3.6 3.7 0 2.1 1.8 3 2.9 3.6 1 .5 2.2 1.1 2.2 2.7 0 1.3-.8 2.2-2 2.2-1.5 0-2.7-1.9-3-3.4l-.6.1z"/></svg>';var s=m({base:"light",colorPrimary:"#d01c29",colorSecondary:"#151515",appBg:"white",appContentBg:"white",appBorderColor:"grey",appBorderRadius:0,fontBase:'"Roboto", sans-serif',fontCode:"monospace",textColor:"#151515",textInverseColor:"white",barTextColor:"#63666A",barSelectedColor:"#151515",barBg:"#d01c29",brandTitle:" Research Design System",brandUrl:"https://research-dev.artsci.wustl.edu",brandImage:e});l.setConfig({theme:s});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
