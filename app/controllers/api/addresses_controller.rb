module Api
  class AddressesController < ApplicationController

    before_action :authenticate_user!

    def index
      @addresses = current_user.addresses
      json_response(@addresses)
    end

    def create
      if address_params[:default] == true
        reset_default
      end
      @address = Address.create!({user_id: current_user.id}.merge!(address_params))
      json_response(@address)
    end

    def destroy
      @address = Address.find_by(user_id: current_user.id, id: params[:id])
      @address.destroy
      @addresses = current_user.addresses
      json_response(@addresses)
    end

    def show
      @address = Address.find(params[:id])
      json_response(@address)
    end

    def update
      if address_params[:default] == true
        reset_default
      end
      @address = Address.find(params[:id])
      @address.update!(address_params)
      json_response(@address)
    end

    def set_default
      reset_default
      @address = Address.find(params[:id])
      @address.update!(default: true)
      @addresses = current_user.addresses
      json_response(@addresses)
    end


    private
     def address_params
      params.permit(:first_name, :last_name, :street,:apt_ste_unit, :city, :state, :zip, :phone, :default)
     end
     
     def reset_default
      @addresses = current_user.addresses.update_all(default: false) 
     end
  end
end