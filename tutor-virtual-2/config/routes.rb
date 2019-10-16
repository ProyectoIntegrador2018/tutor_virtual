Rails.application.routes.draw do
  resources :tutors
  resources :supervisors
  resources :stakeholders
  resources :coordinators
  resources :students
  resources :courses
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
