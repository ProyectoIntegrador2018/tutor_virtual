Rails.application.routes.draw do
  get 'home/index'
  devise_for :users

  devise_scope :user do
    authenticated :user do
      root 'home#index', as: :authenticated_root
      resources :tutors
      resources :supervisors
      resources :stakeholders
      resources :coordinators
      resources :students
      resources :courses
      get "/logout" => "devise/sessions#destroy"
    end

    unauthenticated do
      root 'devise/sessions#new', as: :unauthenticated_root
      get "/login" => "devise/sessions#new"
    end
  end
end
