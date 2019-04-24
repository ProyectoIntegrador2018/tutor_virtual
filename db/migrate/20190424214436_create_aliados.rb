class CreateAliados < ActiveRecord::Migration[5.2]
  def change
    create_table :aliados do |t|
      t.string :nombre
      t.string :tipo_socio
      t.string :correo
      t.string :contacto

      t.timestamps
    end
  end
end
