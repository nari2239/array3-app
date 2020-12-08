Rails.application.routes.draw do
  get 'tweets/index'
  resources :tweets
end
