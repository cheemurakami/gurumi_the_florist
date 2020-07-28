module Api
  class FlowersController < ApplicationController
 

  def index
    #changed to add active storage -> json
    flowers = Flower.all
    
    flowers = flowers.map do |flower|
      {
        title: flower.title,
        description: flower.description,
        price: flower.price,
        created_at: flower.created_at,
        updated_at: flower.updated_at,
        flower_photos: image_urls(flower)
      }
    end
    json_response(flowers)
  end

 # this is a method to get image urls from flower 
 # flower_photos ha active storage 
  def image_urls(flower)
    flower.flower_photos.map do |flower_photo|
      url_for(flower_photo)
    end
  end

  def show
    flower = Flower.find(params[:id])
    flower = {
      title: flower.title,
      description: flower.description,
      price: flower.price,
      created_at: flower.created_at,
      updated_at: flower.updated_at,
      flower_photos: image_urls(flower)
    }
    json_response(flower)
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
      params.permit(:title, :description, :price, flower_photos: []) #images:???
    end
  end
end