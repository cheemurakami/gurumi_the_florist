Rails.application.routes.draw do

  
  namespace :api do
    resources :flowers
    delete '/delete_image/:id' => 'flowers#delete_image'
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

  # ないrouteが叩かれたらhomeに行くようにするため⬇
  # match '*path', to: 'home#index', via: :all  

  # IMPORTANT #
  # This `match` must be the *last* route in routes.rb
  # 

  # qiitaのノート：本番環境で、 ルーティングが存在しないパスへアクセス(GET)があった場合に、
  # ルート(/)へリダイレクトさせる
  # 'rails/active_storage'が含まれているパスはリダイレクト対象外にする
  match '*path', to: 'home#index', via: :all, constraints: lambda { |req|
    req.path.exclude? 'rails/active_storage'
  }
end
