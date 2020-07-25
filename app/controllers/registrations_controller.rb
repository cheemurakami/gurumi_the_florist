class RegistrationsController < Devise::RegistrationsController
 respond_to :json
 
end

# ここでjsonにしてる
# -> compに帰る