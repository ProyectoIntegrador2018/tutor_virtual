Rails.application.routes.draw do
  resources :preinscritos
  devise_for :users
  get 'static_pages/dashboard', :as => 'dashboard'
  get 'static_pages/home',  :as => 'home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#dashboard'
end
