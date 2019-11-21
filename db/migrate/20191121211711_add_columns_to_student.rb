class AddColumnsToStudent < ActiveRecord::Migration[5.2]
  def change
    add_column :students, :cca, :string
    add_column :students, :promoter_name, :string
    add_column :students, :promoter_email, :string
  end
end
