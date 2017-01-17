module Users
  class OmniauthCallbacksController < Devise::OmniauthCallbacksController
    def github
      if auth_user.persisted?
        sign_in_auth_user
      else
        session['devise.facebook_data'] = request.env['omniauth.auth']
        redirect_to new_user_registration_url
      end
    end

    def failure
      redirect_to root_path
    end

    private

    def auth_user
      @user = User.from_omniauth(request.env['omniauth.auth'])
    end

    def sign_in_auth_user
      # sign_in_and_redirect @user, :event => :authentication #this will throw if @user is not activated
      sign_in(auth_user)
      auth_token = JsonWebToken.encode(user_id: auth_user.id, nickname: auth_user.nickname)
      session[:auth_token] = auth_token
      # redirect_to pages_show_path(auth_token: auth_token)
      redirect_to pages_show_path
      set_flash_message(:notice, :success, kind: 'Github') if is_navigational_format?
    end
  end
end
