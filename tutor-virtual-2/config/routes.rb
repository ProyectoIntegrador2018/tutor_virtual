Rails.application.routes.draw do
  resources :stakeholders
  resources :coordinators
  resources :supervisors
  resources :tutors
  resources :students
  resources :courses
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
