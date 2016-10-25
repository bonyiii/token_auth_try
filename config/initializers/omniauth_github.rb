Rails.application.config.middleware.use OmniAuth::Builder do
  provider :github, '65cf9cfbd3c016813e7a', 'd0abb6ba44f8eee880803d25dddc121c2783d1d1'
end
