module Api
  class FlowersController < ApplicationController
 
  skip_before_action :verify_authenticity_token

  def index
    @flowers = Flower.all
    json_response(@flowers)
  end

  def show
    @flower = Flower.find(params[:id])
    json_response(@flower)
  end

  def create
    @flower = Flower.create!(flower_params)
    json_response(@flower)
  end

  def update
    @flower = Flower.find(params[:id])
    @flower.update!(flower_params)
    json_response(@flower)
  end

  def destroy
    @flower = Flower.find(params[:id])
    @flower.destroy
    json_response({message: "destroyed!"})
  end

  private
    def json_response(object, status = :ok)
      render json: object, status: status
    end

    def flower_params
      params.permit(:title, :description, :price)
    end
  end
end