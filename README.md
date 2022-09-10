Development moved here: https://f-hub.org/infra/ConverseJS_Fullscreen

# Fullscreen ConverseJS Chat
[ConverseJS](https://github.com/conversejs/converse.js) stand-alone fullscreen chat implementation. Simply clone and slightly adapt the connection settings in index.html (replace all "example.com").

## Implementation details
- Full-screen chat based on ConverseJS 9.1.1
- Fallback message if browser does not support Javascript
- Libsignal.js OMEMO End2End encryption (support enabled by default)
- Optional websocket/bosh connection URL input field (if XEP-0156 fails)

## Extras
- Php scripts for http_upload_external with regular purge (might be broken)
- Details on XEP-0156 implementation for ejabberd (untested)

## Used community plugins
- Directory
- Http-auth
- Muc-directory
- Search
- Toolbar-utilities 

## Todo
- Please make suggestions :)

## License
Due to inclusion of libsignal.js the entire repository is AGPL 3.0 or later licensed, If you remove libsignal.js this repository can be also used under the upstream ConverseJS licensing (Mozilla Public License 2.0).
