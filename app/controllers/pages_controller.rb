class PagesController < ApplicationController
  before_action :authenticate_user!, only: :show
  before_action :authenticate_request!, only: :users

  def index
  end

  def users
    render json: User.all
  end

  def user_show
    render json: User.find(params[:id])
  end

  def show
    # @auth_token = session.delete(:auth_token)
    @auth_token = session[:auth_token]
  end
end
