# Changelog

## 1.0.0 (2024-10-08)


### ⚠ BREAKING CHANGES

* **fetch_ssl_cert:** In this change, the backend api is created to parse the ssl certificate for the given domain and  return the appropriate json

### Features

* **backend:** create rust backend implementation and init toml file ([26ee4b4](https://www.github.com/0xprasanth/ssl-checker/commit/26ee4b407329e6f05960a39cbac6efdabb96a9a4))
* **fetch_ssl_cert:** create utility func to fetch ssl cert and parse it ([f00e0c7](https://www.github.com/0xprasanth/ssl-checker/commit/f00e0c773fd866fa544ef070e0fae6c05a4066b8))


### Bug Fixes

* use actix-web to create api endpoint in backend ([cfa1136](https://www.github.com/0xprasanth/ssl-checker/commit/cfa1136e5bd6dfc119c6e7a79b889a1d1d0946ae))
