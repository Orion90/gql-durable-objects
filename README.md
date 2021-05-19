# 👷 Durable Objects Counter template using GraphQL

## Installation
1. Get a copy of wrangler@1.16.0-durable-objects-rc.0
2. Move `wrangler.toml.example` to `wrangler.toml` and add your `account_id` and update the the name property as well.
3. Run `wrangler publish --new-class Counter`, this is not needed for subsequent publishes.
4. Open `<your-worker-url>` and perform some queries and mutations 🎉 🎉 🎉

For further information check out the two projects used as a base for this repo
Based on [Cloudflare Workers GraphQL Server](https://github.com/cloudflare/workers-graphql-server) and [Cloudflare Durable Objects Counter template](https://github.com/cloudflare/durable-objects-webpack-commonjs)
