class PagesController < ApplicationController
  before_action :authenticate_user!, only: :show
  before_action :authenticate_request!, only: :users

  def index
  end

  def users
    render json: User.all
  end

  def show
    # binding.pry
  end
end
