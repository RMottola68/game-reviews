class UsersController < ApplicationController
  skip_before_action :authorized
  
    #shows all users
      def index
          users = User.all
          render json: users
      end
    
    #creates a user / signup
      def create
        user = User.create(user_params)
        if user.valid?(params[:password])
          session[:user_id] = user.id
          render json: user, serializer: UserWithReviewsSerializer, status: :created
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
      end
  
    #shows a single user by user_id
      def show
        user = User.find_by(id: params[:id])
        if user
          render json: user, serializer: UserWithReviewsSerializer
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
      end
  
    #custom route for /myprofile
      def show_my_profile
        user = User.find_by(id: session[:user_id])
        if user
          render json: user, serializer: UserWithReviewsSerializer
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
      end
  
    #lets a user update their information
      def update
        user = User.find_by(id: params[:id])
        if user
          user.update(user_params)
          render json: user
        else
          render json: { error: "User not found" }, status: :not_found
        end
      end
    
      private
    #defines the params for s user
      def user_params
        params.permit(:password, :password_confirmation, :is_developer, :join_date, :username, :image)
      end
    end
  
