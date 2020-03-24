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