class SkillsController < ApplicationController
    def index 
        @skills = Skill.all 
        render json: @skills, include: :users
    end 

    def show
        @skill = Skill.find_by(id: params[:id])
        render json: @skill, include: :users
    end 

    def create 
        new_skill = Skill.create name: params[:name]
        user = User.find_by(id: params[:user_id])

        UserSkill.create user: user, skill: new_skill, has_skill: params[:has_skill]

        redirect_to "http://localhost:3000/myprofile.html?email=#{user.email}"
    end 
end
