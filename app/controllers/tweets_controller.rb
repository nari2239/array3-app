class TweetsController < ApplicationController
  def index
    @tweets = Tweet.all.order("updated_at DESC")
    @tweet = Tweet.new(content: params[:content])
  end

  def new
    @tweet = Tweet.new
  end

  def create
    @tweet = Tweet.new(content: params[:content])
    # binding.pry
    if @tweet.valid?
      @tweet.save
      redirect_to root_path
    else
      render json: { messages: @tweet.errors.full_messages }
    end
  end

  private
  def tweet_params
    params.require(:tweet).permit(:content)
  end
end
