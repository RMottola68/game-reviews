class GamesWithReviewsSerializer < ActiveModel::Serializer
    attributes :id, :title, :developer, :publisher, :release_date, :genre, :image
    has_many :reviews
  end