# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)"

user1 = User.create!(username: "test1", is_developer: "false", join_date: "03/09/2020", password: "test1", image: "https://pop.inquirer.net/files/2021/05/gigachad.jpg")
user2 = User.create!(username: "test2", is_developer: "true", join_date: "01/27/2022", password: "test2", image: "https://melmagazine.com/wp-content/uploads/2021/01/66f-1.jpg")
user3 = User.create!(username: "test3", is_developer: "false", join_date: "7/18/2021", password: "test3", image: "https://i.kym-cdn.com/photos/images/original/002/301/351/ecc.png")
user4 = User.create!(username: "test4", is_developer: "false", join_date: "08/15/2022", password: "test4", image: "https://pbs.twimg.com/profile_images/1441602024659841027/LR3-IxvL_400x400.jpg")

game1 = Game.create!(title: "super meat boy", developer: "Team Meat", publisher: "Team Meat", release_date: "11/30/2010", genre: "Platformer", image: "https://upload.wikimedia.org/wikipedia/en/a/aa/SuperMeatBoy_cover.png")
game2 = Game.create!(title: "VRChat", developer: "VRChat Inc.", publisher: "VRChat Inc.", release_date: "02/01/2017", genre: "Social", image: "https://static-cdn.jtvnw.net/ttv-boxart/499003_IGDB-285x380.jpg")
game3 = Game.create!(title: "Enter the Gungeon", developer: "Dodge Roll", publisher: "Devolver Digital", release_date: "04/05/2016", genre: "Roguelike", image: "https://www.playstationcountry.com/wordpress/wp-content/uploads/2016/04/enter-the-gungeon-cover-art.jpg")
game4 = Game.create!(title: "Radical Heights", developer: "Boss Key Productions", publisher: "Boss Key Productions", release_date: "04/10/2018", genre: "Battle Royale", image: "https://www.giantbomb.com/a/uploads/scale_small/8/87790/3021226-box_rh.png")

review1 = Review.create!(rating: "★★★★", content: "Disgustingly fun, brutally hard", user_id: 1, game_id: 1)
review2 = Review.create!(rating: "★★★", content: "They never should have taken away third party addons", user_id: 3, game_id: 2)
review3 = Review.create!(rating: "★★★★", content: "pew pew pew pew pew", user_id: 2, game_id: 3)
review4 = Review.create!(rating: "★★★★★", content: "The greatest game ever made", user_id: 4, game_id: 4)