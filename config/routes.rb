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
          collection { get :export}

	    end

      resources :groups do
		      collection { delete :destroy_multiple }
          collection { delete :destroy_all}
          collection { post :add_student}
          collection { delete :delete_student}
          collection { get :export}

          collection { delete :remove_students}
          collection { post :add_many_students}
	    end

      resources :supervisors do
		      collection { delete :destroy_multiple }
          collection { delete :destroy_all}
          collection { post :import }
	    end

      resources :stakeholders do
		      collection { delete :destroy_multiple }
          collection { delete :destroy_all}
          collection { post :import }
	    end

      resources :coordinators do
          collection { post :import }
		      collection { delete :destroy_multiple }
          collection { delete :destroy_all}

	    end

      resources :students do
		      collection { post :import }
		      collection { delete :destroy_multiple }
          collection { delete :destroy_all}
          collection { get :export}
	    end

      resources :courses do
		      collection { post :import }
		      collection { delete :destroy_multiple }
          collection { delete :destroy_all}
          collection { get :export}

	    end

      get "/logout" => "devise/sessions#destroy"
    end

    unauthenticated do
      root 'devise/sessions#new', as: :unauthenticated_root
      get "/login" => "devise/sessions#new"
    end
  end
end
