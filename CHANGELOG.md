# Changelog

## [1.1.0](https://www.github.com/0xprasanth/ssl-checker/compare/v1.0.0...v1.1.0) (2024-10-09)


### Features

* **footer:** add footer component with blur bg and toaster from shadcn ui ([9cfda93](https://www.github.com/0xprasanth/ssl-checker/commit/9cfda93d98c8a0f94130a536bc679c6d422f3ce6))
* **ssl-result:** consume api data using trpc client and add ui components to render the output ([ad69074](https://www.github.com/0xprasanth/ssl-checker/commit/ad69074b943cdd001993b449334510bef49f4470))


### Bug Fixes

* add domain input to localstorage to access later in resultpage ([f3dc634](https://www.github.com/0xprasanth/ssl-checker/commit/f3dc634890d0008da2bb9c492cbae0d8e29ee791))
* **domaininput:** rollback from trpc to react-query mutation to minimise api calls ([b53dafc](https://www.github.com/0xprasanth/ssl-checker/commit/b53dafc8bbbe7ef6e7371d66625b965340baaeb1))
* **prettier:** change prettier config file to format code after save ([b5ad308](https://www.github.com/0xprasanth/ssl-checker/commit/b5ad308ea0f6032763fddb917c78744416c12538))
* **ssl-trpc:** use trpc to fetch details from rust api and client to consume it ([331fe74](https://www.github.com/0xprasanth/ssl-checker/commit/331fe74a6fc3fda8ca28037747d9c97b0c65e03e))

## 1.0.0 (2024-10-08)


### ⚠ BREAKING CHANGES

* **fetch_ssl_cert:** In this change, the backend api is created to parse the ssl certificate for the given domain and  return the appropriate json

### Features

* **backend:** create rust backend implementation and init toml file ([26ee4b4](https://www.github.com/0xprasanth/ssl-checker/commit/26ee4b407329e6f05960a39cbac6efdabb96a9a4))
* **fetch_ssl_cert:** create utility func to fetch ssl cert and parse it ([f00e0c7](https://www.github.com/0xprasanth/ssl-checker/commit/f00e0c773fd866fa544ef070e0fae6c05a4066b8))


### Bug Fixes

* use actix-web to create api endpoint in backend ([cfa1136](https://www.github.com/0xprasanth/ssl-checker/commit/cfa1136e5bd6dfc119c6e7a79b889a1d1d0946ae))
