class Game < ApplicationRecord
    validates :title, uniqueness: true
    has_many :reviews
    has_many :users, through: :reviews
end
