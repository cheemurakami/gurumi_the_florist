module Api
  class FavoritesController < ApplicationController
    
    before_action :authenticate_user!

    def index
      @favorite_flowers = current_user.flowers
      json_response(@favorite_flowers)
    end

    def create
      @favorite_flowers = Favorite.create!(user_id: current_user.id, flower_id: params[:flower_id])
      json_response(@favorite_flowers)
    end

  end
end