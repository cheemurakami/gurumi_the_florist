module Api
  class FavoritesController < ApplicationController
    
    before_action :authenticate_user!

    def index
      @favorite_flowers = current_user.flowers.map do |flower|
        {
          title: flower.title,
          description: flower.description,
          price: flower.price,
          created_at: flower.created_at,
          updated_at: flower.updated_at,
          flower_photos: images(flower),
          id: flower.id,
          tags: flower.tag_list,
          is_in_cart: CartItem.find_by(user_id: current_user.id, flower_id: flower.id).present?
        }
      end
      json_response(@favorite_flowers)
    end

    def images(flower)
      flower.flower_photos.map do |flower_photo|
        {
         url: url_for(flower_photo),
         id: flower_photo.id,
        }
      end
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
    
    def delete
      favorite = Favorite.find_by(user: current_user, flower_id: params[:id])
      favorite.destroy
      @favorite_flowers = current_user.flowers.map do |flower|
        {
          title: flower.title,
          description: flower.description,
          price: flower.price,
          created_at: flower.created_at,
          updated_at: flower.updated_at,
          flower_photos: images(flower),
          id: flower.id,
          tags: flower.tag_list,
          is_in_cart: CartItem.find_by(user_id: current_user.id, flower_id: flower.id).present?
        }
      end
      json_response(@favorite_flowers)
    end
    
  end
end