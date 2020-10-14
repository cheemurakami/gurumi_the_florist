module Api
  class BraintreesController < ApplicationController
    
    def client_token
        gateway = Braintree::Gateway.new(
          :environment => :sandbox,
          :merchant_id => Rails.application.credentials.dig(:braintree, :merchant_id),
          :public_key => Rails.application.credentials.dig(:braintree, :public_key),
          :private_key => Rails.application.credentials.dig(:braintree, :private_key),
        )
        @client_token = gateway.client_token.generate
        json_response({client_token: @client_token})
    end
  end
end