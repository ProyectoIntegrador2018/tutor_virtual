Rails.application.routes.draw do
  get 'home/index'
  devise_for :users

  devise_scope :user do
    authenticated :user do
      root 'home#index', as: :authenticated_root

      resources :tutors do
		      collection { post :import }
		      collection { delete :destroy_multiple }
          collection { delete :destroy_all}
	    end

      resources :supervisors do
		      collection { delete :destroy_multiple }
          collection { delete :destroy_all}
	    end

      resources :stakeholders do
		      collection { delete :destroy_multiple }
          collection { delete :destroy_all}
	    end

      resources :coordinators do
		      collection { delete :destroy_multiple }
          collection { delete :destroy_all}
	    end

      resources :students do
		      collection { post :import }
		      collection { delete :destroy_multiple }
          collection { delete :destroy_all}
	    end

      resources :courses do
		      collection { post :import }
		      collection { delete :destroy_multiple }
          collection { delete :destroy_all}
	    end

      get "/logout" => "devise/sessions#destroy"
    end

    unauthenticated do
      root 'devise/sessions#new', as: :unauthenticated_root
      get "/login" => "devise/sessions#new"
    end
  end
end
