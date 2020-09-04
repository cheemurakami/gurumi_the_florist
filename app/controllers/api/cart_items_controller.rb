module Api
  class CartItemsController < ApplicationController

    before_action :authenticate_user!

    def index
      @flowers_in_cart = current_user.flowers_in_cart
      json_response(@flowers_in_cart)
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
      @flowers_in_cart = CartItem.find_by(user: current_user, flower_id: params[:id])
      @flowers_in_cart.destroy
      response = {msg: "Deleted from your cart"}
      json_response(response)
    end
  end
end