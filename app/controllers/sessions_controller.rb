class SessionsController < Devise::SessionsController
  respond_to :json # ここでjsonにしてる

  def signed_in
    if user_signed_in?
      render json: {
        user: current_user
      }
    else
      render json: {
        message: "Sign in"
      }
    end
  end


end

# ここでjsonにしてる
# -> compに帰る