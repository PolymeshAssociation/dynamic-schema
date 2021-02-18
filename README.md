# Polymesh Dynamic Schema

By default, `/${target}/` will redirect to `https://raw.githubusercontent.com/PolymathNetwork/Polymesh/${target}/polymesh_schema.json` unless it is overwritten in the config object of index.js. In that case, `target` will be replaces by the overwritten value.

`target` can be a branch like `alcyone` or a commit hash or a release version like `v2.4.0`.
