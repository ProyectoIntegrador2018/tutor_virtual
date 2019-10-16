class CreateCoordinators < ActiveRecord::Migration[5.2]
  def change
    create_table :coordinators do |t|

      t.string :username
      t.string :internal_password
      t.string :name
      t.string :first_last_name
      t.string :second_last_name
      t.string :email
      t.string :country
      t.string :state
      t.string :city
      t.string :partner
      t.string :organization_code
      t.integer :gender
      t.date :dob
      t.string :phone_number
      t.string :language

      t.timestamps
    end
  end
end
