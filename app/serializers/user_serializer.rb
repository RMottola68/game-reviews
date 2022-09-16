class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :is_developer, :join_date, :image
end
