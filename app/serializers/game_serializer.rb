class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :developer, :publisher, :release_date, :genre, :image
end
