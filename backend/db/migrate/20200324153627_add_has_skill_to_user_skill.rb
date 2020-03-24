class AddHasSkillToUserSkill < ActiveRecord::Migration[6.0]
  def change
    add_column :user_skills, :has_skill, :boolean
  end
end
