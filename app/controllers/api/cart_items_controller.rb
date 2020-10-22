module Api
  class CartItemsController < ApplicationController

    before_action :authenticate_user!

    def index
      json_response(flowers_in_cart)
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
        response[:flower_in_cart] = flower_hash(CartItem.find_by(user_id: current_user.id, flower_id: params[:flower_id]))
        json_response(response)
    end

    def delete
      @cart_item = CartItem.find_by(user: current_user, flower_id: params[:id])
      @cart_item.destroy
      json_response(flowers_in_cart)
    end

    def update
      @cart_item = CartItem.find_by(user: current_user, flower_id: params[:id])
      @cart_item.update!(cart_item_params)
      json_response(flowers_in_cart)
    end

    def flowers_in_cart
      @flowers_in_cart =  current_user.cart_items.order(updated_at: :desc)
      .map do |flower|
        flower_hash(flower)
      end
    end

    def flower_hash(cart_item)
      flower = cart_item.flower
      {
        title: flower.title,
        description: flower.description,
        price: flower.price,
        created_at: flower.created_at,
        updated_at: flower.updated_at,
        flower_photos: images(flower),
        id: flower.id,
        tags: flower.tag_list,
        is_in_cart: true,
        qty: cart_item.qty,
        total_price: flower.price * cart_item.qty
      }
    end

    private

    def cart_item_params
      params.permit(:qty)
    end

  end
end