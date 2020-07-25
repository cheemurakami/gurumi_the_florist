Rails.application.routes.draw do

  namespace :api do
    resources :flowers
  end
  
  #at btm
  root 'home#index'
  
  #react browserできたやつをfetchするとき
  #deviseのdefault controllerをsessionsとregistrationに行ってもらうように書く  
  #sessions controllerを千里が作る -> sign in
  #registration controllerを千里が作る ->　sign up
  devise_for :users, :controllers => {sessions: 'sessions', registrations: 'registrations'} 
  
  devise_scope :user do
    get '/signed_in' => 'sessions#signed_in'
  end


  match '*path', to: 'home#index', via: :all 
end
