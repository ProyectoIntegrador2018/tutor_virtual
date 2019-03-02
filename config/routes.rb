Rails.application.routes.draw do
  get 'static_pages/dashboard'
  get 'static_pages/home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#dashboard'
  get "/dashboard", to: "static_pages#dashboard"
end
