# Lens API Testing

This is a small sample app to test out using Contentful to
query Lens data.

## Installation
Run `yarn install` in order to install dependencies.

You must set two environment variables to access the API.
These must be acquired from a Contentful admin.

* `SPACE_ID`
* `ACCESS_TOKEN`

## Development
Run `yarn build` to build the TypeScript app.

Use `yarn go` to run the app.

All this does right now is run a small test query against
the Contentful API / Lens space.

We may not actually need this repo, but similar code can
probably be used in the app itself to query data.
