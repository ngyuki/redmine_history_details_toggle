require 'redmine'

Rails.configuration.to_prepare do
  require_dependency 'redmine_history_details_toggle/view_hook'
end

Redmine::Plugin.register :redmine_history_details_toggle do
  name 'Redmine toggle history details plugin'
  author 'Toshiyuki Goto'
  description 'Redmine toggle history details plugin'
  version '0.0.1'
  url 'https://github.com/ngyuki/redmine_history_details_toggle'
  author_url 'https://github.com/ngyuki'
end
