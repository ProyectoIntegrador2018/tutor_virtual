class CreateJoinTableGroupsStudents < ActiveRecord::Migration[5.2]
  def change
    create_join_table :groups, :students do |t|
      t.references :group, foreign_key: true
      t.references :student, foreign_key: true
    end
  end
end
