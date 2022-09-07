class GamesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_missing_record_error
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_error
    
    #shows all games
    def index
        games = Game.all
        render json: games
    end

    #shows a specific game by its id
    def show
        game = Game.find_by(id: params[:id])
        render json: game, serializer: GamesWithReviewsSerializer
    end

    #creates a new game to be reviewed
    def create
        game = Game.create!(game_params)
        render json: game, status: :created
    end

    private
    #defines the params for a game
    def game_params
        params.permit(:title, :developer, :publisher, :release_date, :genre, :image)
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
