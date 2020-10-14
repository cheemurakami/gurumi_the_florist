Rails.application.routes.draw do

  namespace :api do
    resources :flowers
    delete '/delete_image/:id' => 'flowers#delete_image'
    post '/toggle_favorite' => 'favorites#toggle'
    get '/favorites' => 'favorites#index'
    delete '/delete_favorite/:id' => 'favorites#delete'
    post '/cart/:id' => 'cart_items#create'
    get '/cart' => 'cart_items#index'
    delete '/cart_delete/:id' => 'cart_items#delete'
    patch '/cart_update/:id' => 'cart_items#update'
    resources :addresses
    put '/addresses/:id/set_default' => 'addresses#set_default'
    get '/braintrees/client_token' => 'braintrees#client_token'
  end
  
  #at btm
  root 'home#index'
  
  #react browserできたやつをfetchするとき
  #deviseのdefault controllerをsessionsとregistrationに行ってもらうように書く  
  #sessions controllerを千里が作る -> sign in
  #registration controllerを千里が作る ->　sign up
  get "/users/sign_up", to: 'home#index' 

  devise_for :users, :controllers => {sessions: 'sessions', registrations: 'registrations'} 
  devise_scope :user do
    get '/signed_in' => 'sessions#signed_in'
  end

  # IMPORTANT #
  # This `match` must be the *last* route in routes.rb 

  # qiitaのノート：本番環境で、 ルーティングが存在しないパスへアクセス(GET)があった場合に、ないrouteが叩かれたらhomeに行くようにするため⬇
  # 'rails/active_storage'が含まれているパスはリダイレクト対象外にする
  match '*path', to: 'home#index', via: :all, constraints: lambda { |req|
    req.path.exclude? 'rails/active_storage'
  }
end
