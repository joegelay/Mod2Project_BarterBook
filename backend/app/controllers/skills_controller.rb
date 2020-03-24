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
        Skill.create name: params[:name]

        redirect_to "http://localhost:3000/index.html"
    end 
end
