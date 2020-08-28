module Api
  class FavoritesController < ApplicationController
    
    before_action :authenticate_user!

    def index
      @favorite_flowers = current_user.flowers
      json_response(@favorite_flowers)
    end

    def toggle
      favorite = Favorite.find_by(user: current_user, flower_id: params[:flower_id])

      if favorite
        favorite.destroy!
        response = {msg: "Unfavorited"}
      else
        @favorite_flowers = Favorite.create!(user_id: current_user.id, flower_id: params[:flower_id])
        response = {msg: "Favorited"}
      end

        json_response(response)
    end
    
  end
end