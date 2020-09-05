module Api
  class CartItemsController < ApplicationController

    before_action :authenticate_user!

    def index
      @flowers_in_cart = current_user.flowers_in_cart
      @flowers_in_cart = @flowers_in_cart.map do |flower|
        {
          title: flower.title,
          description: flower.description,
          price: flower.price,
          created_at: flower.created_at,
          updated_at: flower.updated_at,
          flower_photos: images(flower),
          id: flower.id,
          tags: flower.tag_list
        }
      end
      json_response(@flowers_in_cart)
    end

    def images(flower)
      flower.flower_photos.map do |flower_photo|
        {
         url: url_for(flower_photo),
         id: flower_photo.id,
        }
      end
    end
    
    def create
      if CartItem.find_by(user_id: current_user.id, flower_id: params[:flower_id])
        response = {msg: "Already in cart"}
      else
        CartItem.create!(user_id: current_user.id, flower_id: params[:flower_id])
        response = {msg: "Added in cart"}
      end
      json_response(response)
    end

    def delete
      @cart_item = CartItem.find_by(user: current_user, flower_id: params[:id])
      @cart_item.destroy
      @flowers_in_cart = current_user.flowers_in_cart
      @flowers_in_cart = @flowers_in_cart.map do |flower|
        {
          title: flower.title,
          description: flower.description,
          price: flower.price,
          created_at: flower.created_at,
          updated_at: flower.updated_at,
          flower_photos: images(flower),
          id: flower.id,
          tags: flower.tag_list
        }
      end
      json_response(@flowers_in_cart)
    end

  end
end