Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :flowers
  end

#at btm
  root 'home#index'
  match '*path', to: 'home#index', via: :all 
end
