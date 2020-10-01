class User < ApplicationRecord
  has_many :favorites
  has_many :flowers, :through => :favorites
  has_many :cart_items
  has_many :flowers_in_cart, :through => :cart_items, :source => :flower
  has_many :addresses, dependent: :destroy
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

end
