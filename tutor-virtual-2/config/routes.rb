Rails.application.routes.draw do
  resources :tutors
  resources :supervisors
  resources :stakeholders
  resources :coordinators
  resources :students
  resources :courses
end
