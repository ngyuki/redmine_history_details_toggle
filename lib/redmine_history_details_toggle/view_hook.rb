module RedmineHistoryDetailsToggle
  class ViewHook < Redmine::Hook::ViewListener
    render_on :view_issues_show_description_bottom, :partial => 'issues/history_details_toggle'
  end
end
