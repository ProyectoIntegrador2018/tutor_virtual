class CreateGroups < ActiveRecord::Migration[5.2]
  def change
    create_table :groups do |t|
      t.integer :group_number
      t.references :course, foreign_key: true
      t.references :tutor, foreign_key: true
      t.references :supervisor, foreign_key: true

      t.timestamps
    end
  end
end
