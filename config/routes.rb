Rails.application.routes.draw do
  resources :reviews, only: [:index, :show, :create]
  resources :users, only: [:index, :show, :create, :update]
  resources :games, only: [:index, :show, :create]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  #games routes
  post "/addgame", to: "games#create"
  get "/games", to: "games#index"




  #review routes
  post "/addreview", to: "reviews#create"
  get "/reviews", to: "reviews#index"

  #user routes
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/users", to:"users#index"
  get "/myprofile", to: "users#show_my_profile"
end
