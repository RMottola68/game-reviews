class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :is_developer, :join_date, :password_digest
end
