class CreateGames < ActiveRecord::Migration[7.0]
  def change
    create_table :games do |t|
      t.string :title
      t.string :developer
      t.string :publisher
      t.string :release_date
      t.string :genre
      t.string :image

      t.timestamps
    end
  end
end
