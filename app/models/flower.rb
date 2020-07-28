class Flower < ApplicationRecord
  has_many_attached :flower_photos
  #belongs_to :user
end