Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'pages#index'

  get 'pages/users', to: 'pages#users'
  get 'pages/show', to: 'pages#show'
  get 'pages/show/*valami', to: 'pages#show'

  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }
end
