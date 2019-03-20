const Koa = require('koa');
const app = new Koa();
const { normal } = require('./tpl/index');

app.use( async (ctx, next) => {
    ctx.type = 'text/html; charset-utf8'
    ctx.body = normal;
});

app.listen(8070);