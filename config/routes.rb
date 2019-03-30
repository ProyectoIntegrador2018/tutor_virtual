Rails.application.routes.draw do
  resources :preinscritos do
  	collection { post :import }
  end
  devise_for :users
  
  root 'static_pages#dashboard'
end
