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
ahmed = User.create name: "Ahemd Gaber", email: "ahmedgaber@gmail.com", password: "ahmed", zip: "90210", bio: "I can teach code, need someone to walk my dog!", image_url: "https://i.ytimg.com/vi/cYNlJYQI3Uw/maxresdefault.jpg"
skylord = User.create name: "Skylord Perry", email: "skylord@bark.com", password: "ahmed", zip: "80206", bio: "Really good at walking other dogs, need to learn some spanish though.", image_url: "https://lh3.googleusercontent.com/pJdk5AZiMgy2ONIhwfYML7Iqj-PBqRyQzwe6mmLUyAs2aE_v9jwczV45g8VizSwur0o6qWhR96CntIh8ZPNW22ITgA1mrSQQtqP95C4K9lJHGYvJNEr-gDfTVhRS-9GCz6jZMMmHpw=w699-h932-no"
whiskey = User.create name: "Whiskey Thompson", email: "whiskey@gmail.com", password: "ahmed", zip: "68124", bio: "Really good at fixing cars, really need help with piano though.", image_url: "https://cbsnews1.cbsistatic.com/hub/i/2015/03/11/d896948f-947b-4ef6-99f0-3f39d49c74c7/doggy6.png"
gator = User.create name: "Gator Wilson", email: "gator@gmail.com", password: "ahmed", zip: "23145", bio: "Really good at spanish, I need to get my car fixed though.", image_url: "https://cdn.shopify.com/s/files/1/0008/7657/6815/products/Dog-Funny-Toy-Teeth_1024x1024.jpg?v=1575501009"

piano = Skill.create name: "Piano"
dog = Skill.create name: "Dog walking"
code = Skill.create name: "Coding"
spanish = Skill.create name: "Spanish"
mechanic = Skill.create name: "Car Mechanic"

UserSkill.create user: joe, skill: spanish, has_skill: true 
UserSkill.create user: joe, skill: piano, has_skill: false 
UserSkill.create user: jack, skill: dog, has_skill: true 
UserSkill.create user: jack, skill: code, has_skill: false 
UserSkill.create user: ahmed, skill: code, has_skill: true 
UserSkill.create user: ahmed, skill: dog, has_skill: false 
UserSkill.create user: skylord, skill: dog, has_skill:true
UserSkill.create user: skylord, skill: spanish, has_skill: false
UserSkill.create user: whiskey, skill: mechanic, has_skill: true
UserSkill.create user: whiskey, skill: piano, has_skill: false 
UserSkill.create user: gator, skill: spanish, has_skill: true
UserSkill.create user:gator, skill: mechanic, has_skill: false