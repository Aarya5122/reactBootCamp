# Class 2 - Ignite your app

- Production grade code => Bundler => Optimized, Bundle (Minify) => Code spliting, Chunking, Image optimizaion, Compress, Remove comments, cached.
- NPM - Manages packages of JS
- package.json => Configuration file. (Dependencies and versionsb , scripts, meta)
- package-lock.json => Exact version of dependency, Integrity => Hash of dependency version, Transitive dependency packages
- Parcel => Easy Config (0 Config)
- ^(carrot) => Minor, Patch Updates (new functionality and backward compatible, default); ~(tilde) => Patch updates (bug fix)
- npx - executing package
- Avoid CDN => Network call, Versioning
- Vite, Webpack, Parcel are bundlers

## Parcel Features

- Dev build
- Local server
- Hot module replacement (HMR) (Refersh) => File watching Algo => C++
- Tree shaking => Remove unused code
- Caching the build - Faster build
- Image optimization
- Bundling
- Minification
- Compress
- Optimise
- Consistent hashing
- Differential bundling => Bundle based on browsers supported (palyfills)
- Code spliting
- Diagonistics
- Can host on https

