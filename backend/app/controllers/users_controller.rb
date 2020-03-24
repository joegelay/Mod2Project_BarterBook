class UsersController < ApplicationController
    def index 
        @users = User.all 
        render json: @users, inclide: :skills 
    end 

    def show
        
    end 
end
