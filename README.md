# Redmine history details toggle plugin

## Install

Move redmie plugin directory.

```console
$ cd /path/to/redmine/plugins/
```

Clone plugin from github.

```console
$ git clone https://github.com/ngyuki/redmine_history_details_toggle.git
```

Copy plugin assets.

```console
$ bundle exec rake redmine:plugins:assets
```

Restart Redmine.

```console
$ sudo service httpd restart
```
