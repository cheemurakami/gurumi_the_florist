module Api
  class FlowersController < ApplicationController
 
  def index
    #changed to add active storage -> json
    search = params[:search]
    if search
      @flowers = Flower.tagged_with(search)
    else
      @flowers = Flower.all
    end
    @flowers = @flowers.map do |flower|
      {
        title: flower.title,
        description: flower.description,
        price: flower.price,
        created_at: flower.created_at,
        updated_at: flower.updated_at,
        flower_photos: images(flower),
        id: flower.id
      }
    end
    json_response(@flowers)
  end

 # this is a method to get image urls from flower 
 # flower_photos ha active storage 
  def images(flower)
    flower.flower_photos.map do |flower_photo|
      {
       url: url_for(flower_photo),
       id: flower_photo.id,
      }
    end
  end

  def delete_image
    @image = ActiveStorage::Attachment.find(params[:id])
    @image.destroy
  end

  def show
    @flower = Flower.find(params[:id])
    @flower = {
      title: @flower.title,
      description: @flower.description,
      price: @flower.price,
      created_at: @flower.created_at,
      updated_at: @flower.updated_at,
      flower_photos: images(@flower),
      id: @flower.id
    }
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
      params.permit(:title, :description, :price, :tag_list, flower_photos: []) ##array needs to be the last
    end
  end
end