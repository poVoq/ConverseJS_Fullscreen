# XEP-0156 auto discovery of alternative conection methods
See: https://xmpp.org/extensions/xep-0156.html

## Simple usage with Ejabberd
Modify and place the host-meta and host-meta.json files in a .well-known sub-folder that your ejabberd server can access.
Make sure you chown them to the ejabberd user (9000 in case of the official Docker image).

### Ejabberd configuration
Modify the ejabberd.yml similar to this:
```
-
  port: 5280
  ip: "::"
  module: ejabberd_http
  request_handlers:
    "": mod_http_fileserver
```
and:
```
mod_http_fileserver:
  docroot: "/var/www/ejabberd/web"
  custom_headers:
    "Access-Control-Allow-Origin": "*"
  content_types:
    ".json": "application/jrd+json"
  default_content_type: "application/xrd+xml"
```
Note: you will also need a reverse-proxy setup for https or wss connections as assumed in this example.
