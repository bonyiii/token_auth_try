namespace :ci do
  namespace :build do

  end

  def build_frontend
    Rake::Task['build_frontend'].invoke
  end

end
