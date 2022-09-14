class UserWithReviewsSerializer < ActiveModel::Serializer
  attributes :id, :username, :is_developer, :join_date, :image
  has_many :reviews
end
