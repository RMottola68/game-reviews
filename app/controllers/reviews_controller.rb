class ReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_missing_record_error
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_error
    #shows all reviews
    def index
        reviews= Review.all
        render json: reviews
    end

    def show
        review = Review.find_by(id: params[:id])
        render json: review
    end

    def create
        review = Review.create!(review_params)
        render json: review, status: :created
    end

    private
    #defines the params for a game
    def review_params
        params.permit(:rating, :content, :user_id, :game_id)
    end

    #error for inability to create game
    def render_unprocessable_entity_error(exceptions)
        render json: {errors: exceptions.record.errors.full_messages}, status: :unprocessable_entity
    end

    #error for unfound game
    def render_missing_record_error
        render json: {error: "Restaurant not found"}, status: :not_found
    end
end
