namespace :project do
  task :build_frontend do
    #system 'npm --no-color install yarn'
    system 'yarn install'
    system 'npm --no-color run build'
  end
end
