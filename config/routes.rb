Rails.application.routes.draw do
  resources :preinscritos
  devise_for :users
  
  root 'static_pages#dashboard'
end
