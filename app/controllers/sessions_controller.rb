class SessionsController < Devise::SessionsController
  respond_to :json
end

# ここでjsonにしてる
# -> compに帰る