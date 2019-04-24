Rails.application.routes.draw do
  	resources :aliados
	resources :preinscritos do
  		collection { post :import }
  		collection { delete :destroy_multiple }
  	end
  	devise_for :users
  root 'static_pages#dashboard'
end

