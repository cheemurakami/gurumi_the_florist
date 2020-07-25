Rails.application.routes.draw do
  
  #react browserできたやつをfetchするとき
  #deviseのdefault controllerをsessionsとregistrationに行ってもらうように書く
  
  #sessions controllerを千里が作る -> sign in
  #registration controllerを千里が作る ->　sign up
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :flowers
  end
  
  #at btm
  root 'home#index'
  devise_for :users, :controllers => {sessions: 'sessions', registrations: 'registrations'} 
  match '*path', to: 'home#index', via: :all 
end
