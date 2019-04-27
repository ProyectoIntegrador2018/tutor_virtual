class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :usuario, null: false, unique:true
      t.string :password, null: false
      t.boolean :admin, default: false
      t.string :nombre, null: false
      t.string :apellido_materno
      t.string :apellido_paterno
      t.string :email
      t.string :socio
      t.string :organizacion
      t.string :pais
      t.string :estado
      t.string :municipio

      t.timestamps
    end
  end
end
