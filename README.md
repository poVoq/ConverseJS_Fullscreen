# Fullscreen ConverseJS Chat
[ConverseJS](https://github.com/conversejs/converse.js) stand-alone fullscreen chat implementation. Simply clone and slightly adapt the connection settings in index.html (replace all "example.com").

## Implementation details
- Full-screen chat with Concord theme based on ConverseJS 9.1.0
- Fallback message if browser does not support Javascript
- Libsignal.js OMEMO End2End encryption (support enabled by default)
- Optional websocket/bosh connection URL input field (if XEP-0156 fails)

## Extras
- Php scripts for http_upload_external with regular purge
- Details on XEP-0156 implementation for ejabberd

## Used community plugins
- Actions
- Search
- Toolbar-utilities 

## Todo
- Please make suggestions :)

## License
Due to inclusion of libsignal.js the entire repository is AGPL 3.0 or later licensed, If you remove libsignal.js this repository can be also used under the upstream ConverseJS licensing (Mozilla Public License 2.0).
