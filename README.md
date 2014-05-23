# Redmine history details toggle plugin

This plugin add checkbox to show/hide details of history on ticket.

## Install

Move redmine plugin directory.

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

## Snapshot

When toggle is ON then show details.
![01.png](https://raw.githubusercontent.com/ngyuki/redmine_history_details_toggle/misc/01.png)

When toggle is OFF then hide details.
![02.png](https://raw.githubusercontent.com/ngyuki/redmine_history_details_toggle/misc/02.png)
