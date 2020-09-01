module Api
  class CartItemsController < ApplicationController

    before_action :authenticate_user!

    def index

    end

  end
end