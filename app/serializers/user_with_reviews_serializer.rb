class UserWithReviewsSerializer < ActiveModel::Serializer
  attributes :id, :username, :is_developer, :join_date, :image, :password_digest
  has_many :reviews
end
