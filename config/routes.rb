Rails.application.routes.draw do

	
	resources :sessions, only: [:new, :create, :destroy]
	
	resources :users do
		collection { post :import }
		collection { delete :destroy_multiple }
	end
	
	resources :aliados do
		collection { post :import }
		collection { delete :destroy_multiple }
	end
	resources :preinscritos do
		collection { post :import }
		collection { delete :destroy_multiple }
	end

  	get 'login', to: 'sessions#new', as: 'login'
  	get 'logout', to: 'sessions#destroy', as: 'logout'
  	root 'static_pages#dashboard'
end

