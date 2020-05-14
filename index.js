const port = process.env.PORT || 3000
const Koa = require('koa');
const Router = require('@koa/router');
const Feed = require('feed').Feed;
const axios = require('axios').default;

const app = new Koa();
const router = new Router();

router.get('/:repo*', async (ctx, next) => {
    let repo = ctx.params.repo;
    console.log(ctx.request.querystring)
    let response = await axios.get(`https://api.github.com/repos/${repo}/issues?${ctx.querystring}`);

    const feed = new Feed({
        title: `${repo} Issues`,
    });

    response.data.forEach((data) => {
        feed.addItem({
            title: data.title,
            id: data.url,
            url: data.url,
            date: new Date(Date.parse(data.created_at)),
        })
    });

    ctx.body = feed.rss2()
});

app
    .use(router.routes())
    .use(router.allowedMethods());


app.listen(port);
