# Polymesh Dynamic Schema

By default, `/${target}/` will redirect to `https://raw.githubusercontent.com/PolymathNetwork/Polymesh/${target}/polymesh_schema.json` unless it is overwritten in the config object of index.js. In that case, `target` will be replaces by the overwritten value.

`target` can be a branch like `alcyone` or a commit hash or a release version like `v2.4.0`.

Here are some sample URLs

- <https://schema.polymesh.live/alcyone>
- <https://schema.polymesh.live/staging/>
- <https://schema.polymesh.live/tooling/any_gibberish_here_doesn/t_matter?gibberish=true>
- <https://schema.polymesh.live/v2.4.0>
- <http://schema.polymesh.live/af9b89c1243a9ac089a50fb05e6a718649a957d7>
