module Api
  class AddressesController < ApplicationController

    before_action :authenticate_user!

    def index
      @addresses = current_user.addresses
      json_response(@addresses)
    end

    def create
      @address = Address.create!({user_id: current_user.id}.merge!(address_params))
      json_response(@address)
    end

    def destroy
      @address = Address.find_by(user_id: current_user.id, id: params[:id])
      @address.destroy
      @addresses = current_user.addresses
      response = @addresses
      json_response(response)
    end

    def show
      @address = Address.find(params[:id])
      json_response(@address)
    end

    def update
      @address = Address.find(params[:id])
      @address.update!(address_params)
      json_response(@address)
    end

    def set_default
      @addresses = current_user.addresses
      @addresses.update_all(default: false)
      @address = Address.find(params[:id])
      @address.update!(default: true)
      @addresses = current_user.addresses
      json_response(@addresses)
    end


    private
     def address_params
      params.permit(:first_name, :last_name, :street,:apt_ste_unit, :city, :state, :zip, :phone)
     end
  end
end