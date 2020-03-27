# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

UserSkill.destroy_all 
User.destroy_all
Skill.destroy_all

joe = User.create name: "Joe Gelay", email: "joegelay@gmail.com", password: "ahmed", zip: "80221", bio: "Looking to learn piano and teach Spanish!", image_url: "https://assets3.thrillist.com/v1/image/2547068/size/tmg-article_tall;jpeg_quality=20.jpg"
jack = User.create name: "Jack Perry", email: "jack.perry@gmail.com", password: "ahmed", zip: "80206", bio: "Learning to code, will walk your dog!", image_url: "https://www.allthingsdogs.com/wp-content/uploads/2018/09/A-Dog-Smiling.jpg"
ahmed = User.create name: "Ahmed Gaber", email: "ahmedgaber@gmail.com", password: "ahmed", zip: "90210", bio: "I can teach code, need someone to walk my dog!", image_url: "https://i.ytimg.com/vi/cYNlJYQI3Uw/maxresdefault.jpg"
couper = User.create name: "Josh Couper", email: "couper@gmail.com", password: "ahmed", zip: "23145", bio: "I play guitar, want to learn how to code.", image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbs9jHir0wMGl9zwmzaFCxA_knE64Gv1FNZhc3CAs8-g3be5Ps"
damon = User.create name: "Damon Chivers", email: "chivers@gmail.com", password: "ahmed", zip: "23145", bio: "I paint and code, someone teach me woodworking!", image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRs4iOx50CdY0rAu2c-Pl6Ue9bSyLeaRt9DqhC-MaIufLSESi8-"
jesse = User.create name: "Jesse Pope", email: "pope@gmail.com", password: "ahmed", zip: "23145", bio: "I love to code, need help with painting!", image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRux4NgFvBWerPXtBjD3WsRMzrWBYtSM_SE7UiGpXCh00mbMmo6"
kyle = User.create name: "Kyle Coberly", email: "coberly@gmail.com", password: "ahmed", zip: "23145", bio: "Code master. Thought lord. Someone fix my toilet.", image_url: "https://www.malvernelibrary.org/wp-content/uploads/2012/06/Dog-Coding.jpg"
kat = User.create name: "Kathy Scriver", email: "scriver@gmail.com", password: "ahmed", zip: "23145", bio: "I am an expert programmer, want to learn chess!", image_url: "https://cdn.theatlantic.com/thumbor/pN25nhF1hatn7QpckNtABKwzmoI=/0x61:1000x624/720x405/media/old_wire/img/upload/2013/03/18/happydog/original.jpg"
mario = User.create name: "Mario Colombo", email: "mario@gmail.com", password: "ahmed", zip: "23145", bio: "It's a me, Mario! I am a plumber that needs help with English!", image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTABhJQPFo0Jv4wAB3dulUow7jZHlNb5evPbX_mdFUn6Eq1fj2M"
skylord = User.create name: "Skylord Perry", email: "skylord@bark.com", password: "ahmed", zip: "80206", bio: "I love walking other people's dogs, need to learn some spanish.", image_url: "https://lh3.googleusercontent.com/pJdk5AZiMgy2ONIhwfYML7Iqj-PBqRyQzwe6mmLUyAs2aE_v9jwczV45g8VizSwur0o6qWhR96CntIh8ZPNW22ITgA1mrSQQtqP95C4K9lJHGYvJNEr-gDfTVhRS-9GCz6jZMMmHpw=w699-h932-no"
whiskey = User.create name: "Whiskey Thompson", email: "whiskey@gmail.com", password: "ahmed", zip: "68124", bio: "Really good at fixing cars, need help with piano!", image_url: "https://cbsnews1.cbsistatic.com/hub/i/2015/03/11/d896948f-947b-4ef6-99f0-3f39d49c74c7/doggy6.png"
gator = User.create name: "Gator Wilson", email: "gator@gmail.com", password: "ahmed", zip: "23145", bio: "Hablo español, necesito ayuda con mi auto.", image_url: "https://cdn.shopify.com/s/files/1/0008/7657/6815/products/Dog-Funny-Toy-Teeth_1024x1024.jpg?v=1575501009"

piano = Skill.create name: "Piano"
dog = Skill.create name: "Dog walking"
code = Skill.create name: "Coding"
spanish = Skill.create name: "Spanish"
mechanic = Skill.create name: "Car Mechanic"
cooking = Skill.create name: "Cooking"
bikerepair = Skill.create name: "Bike Repair"
chess = Skill.create name: "Chess"
gardening = Skill.create name: "Gardening"
woodworking = Skill.create name: "Woodworking"
german = Skill.create name: "German"
english = Skill.create name: "English"
sewing = Skill.create name: "Sewing"
guitar = Skill.create name: "Guitar"
painting = Skill.create name: "Painting"
plumbing = Skill.create name: "Plumbing"

UserSkill.create user: joe, skill: spanish, has_skill: true 
UserSkill.create user: joe, skill: dog, has_skill: true 
UserSkill.create user: joe, skill: piano, has_skill: false 
UserSkill.create user: joe, skill: code, has_skill: false 
UserSkill.create user: joe, skill: chess, has_skill: true 
UserSkill.create user: joe, skill: bikerepair, has_skill: false

UserSkill.create user: jack, skill: dog, has_skill: true 
UserSkill.create user: jack, skill: english, has_skill: true 
UserSkill.create user: jack, skill: code, has_skill: false 

UserSkill.create user: ahmed, skill: code, has_skill: true 
UserSkill.create user: ahmed, skill: dog, has_skill: false
UserSkill.create user: couper, skill: guitar, has_skill: true
UserSkill.create user: couper, skill: code, has_skill: false

UserSkill.create user: kat, skill: code, has_skill: true 
UserSkill.create user: kat, skill: chess, has_skill: false
UserSkill.create user: kyle, skill: code, has_skill: true 
UserSkill.create user: kyle, skill: english, has_skill: true 
UserSkill.create user: kyle, skill: plumbing, has_skill: false
UserSkill.create user: jesse, skill: code, has_skill: true 
UserSkill.create user: jesse, skill: painting, has_skill: false 
UserSkill.create user: damon, skill: code, has_skill: true 
UserSkill.create user: damon, skill: painting, has_skill: true
UserSkill.create user: damon, skill: woodworking, has_skill: false

UserSkill.create user: skylord, skill: dog, has_skill:true
UserSkill.create user: skylord, skill: spanish, has_skill: false

UserSkill.create user: whiskey, skill: mechanic, has_skill: true
UserSkill.create user: whiskey, skill: piano, has_skill: false 

UserSkill.create user: gator, skill: spanish, has_skill: true
UserSkill.create user: gator, skill: mechanic, has_skill: false

UserSkill.create user: mario, skill: plumbing, has_skill: true
UserSkill.create user: mario, skill: english, has_skill: false

