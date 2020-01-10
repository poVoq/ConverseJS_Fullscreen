# External http_upload php scripts
Php scripts to enable external upload of files and purging of these in regular intervalls
This can be used to offload the file uploading to cheap shared php hosting.

## Ejabberd config
For single-domain setups:
```
modules:
  mod_http_upload:
  put_url: "https://your.example.com/path/to/share.php/"
  external_secret: "this is your secret string"
  ## Limit upload size to 20mb
  max_size: 20971520
```
For multi-domain setups:
```
append_host_config:
  "xmpp.example.com":
    modules:
      mod_http_upload:
        put_url: "https://your.example.com/path/to/share.php/"
        external_secret: "this is your secret string"
        ## Limit upload size to 20mb
        max_size: 20971520
```
## Purge php script
See details in the delete_older_than.php file. Needs to be run with a Cron job or similar.
The default setup purges uploaded files older than 90 days and sends an email about it to the admin.
