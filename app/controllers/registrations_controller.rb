class RegistrationsController < Devise::RegistrationsController
 respond_to :json
 before_action :configure_sanitized_params, if: :devise_controller?

  protected
  def configure_sanitized_params
    devise_parameter_sanitizer.permit(:account_update, keys: [:username, :first_name, :last_name])
  end
end

# jsonにさせるために作ったファイル
# configure_sanitized_paramsはaction