class Flower < ApplicationRecord
  has_many_attached :flower_photos
  acts_as_taggable_on :tags
  #belongs_to :user
end