module Api
  class AddressController < ApplicationController

    before_action :authenticate_user!

    def index
      @address = Address.all 
      json_response(@address)
    end

    def create
      @address = Address.create!(user_id: current_user.id, address_params)
      json_response(@address)
    end


    private
     def address_params
      params.permit(:first_name, :last_name, :street,:apt_ste_unit, :city, :state, :zip, :phone)
     end
  end
end