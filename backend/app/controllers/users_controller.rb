class UsersController < ApplicationController

    def index 
        if params[:search]
            if params[:parameterSelect] == "name"
                @users = User.where(["name LIKE ?", "%#{params[:search]}%"])
            elsif params[:parameterSelect] == "skill"
                skill_ids_to_use = Skill.all.where(["name LIKE ?", "%#{params[:search]}%"])#.map {|skill| skill.id}
                @users = skill_ids_to_use.UsersSkills.users
                # @users = User.where(["skill_id = ?", skill_ids_to_use[0]])
            end
        else 
            @users = User.all 
        end

        render json: @users, include: [:skills, :user_skills]
    end 

    def show
        @user = User.find_by(email: params[:email])
        render json: @user, include: [:skills, :user_skills]
    end 

    def create 
        email = params[:email]
        User.create name: params[:name], email: email, password: params[:password], zip: params[:zip], bio: params[:bio], image_url: params[:image_url]

        redirect_to "http://localhost:3000/myProfile.html?email=#{email}"
    end 

    def update 
        @user = User.find_by(email: params[:email])

        user.update name: params[:name], email: params[:email], password: params[:password], zip: params[:zip], bio: params[:bio], image_url: params[:image_url]
        redirect_to "http://localhost:3000/index.html"
    end 

    def destroy
        @user = User.find_by(id: params[:id])
        @user.destroy

        redirect_to "http://localhost:3000/index.html"
    end 
    
end
