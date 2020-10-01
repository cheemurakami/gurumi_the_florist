module Api
  class AddressesController < ApplicationController

    before_action :authenticate_user!

    def index
      @addresses = Address.all 
      json_response(@addresses)
    end

    def create
      @address = Address.create!({user_id: current_user.id}.merge!(address_params))
      json_response(@address)
    end


    private
     def address_params
      params.permit(:first_name, :last_name, :street,:apt_ste_unit, :city, :state, :zip, :phone)
     end
  end
end