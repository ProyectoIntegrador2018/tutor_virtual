Rails.application.routes.draw do


  resources :cursos
	resources :sessions, only: [:new, :create, :destroy]

	resources :users do
		collection { post :import }
		collection { delete :destroy_multiple }
		collection { delete :destroy_all}
	end

	resources :aliados do
		collection { post :import }
		collection { delete :destroy_multiple }
		collection { delete :destroy_all}
	end

	resources :preinscritos do
		collection { post :import }
		collection { delete :destroy_multiple }
		collection { delete :destroy_all}
	end

	resources :cursos do
		collection { post :import }
		collection { delete :destroy_multiple }
		collection { delete :destroy_all}
	end

  	get 'login', to: 'sessions#new', as: 'login'
  	get 'logout', to: 'sessions#destroy', as: 'logout'
  	root 'static_pages#dashboard'
end
