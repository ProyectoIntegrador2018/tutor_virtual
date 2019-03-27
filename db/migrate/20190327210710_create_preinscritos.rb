class CreatePreinscritos < ActiveRecord::Migration[5.2]
  def change
    create_table :preinscritos do |t|
      t.string :nombre, null: false
      t.string :apellido_paterno, null: false
      t.string :apellido_materno, null: false
      t.string :correo_contacto
      t.string :cca
      t.boolean :estatus_user_mensajeria
      t.boolean :estatus_ins_mensajeria
      t.date :fecha_inscripcion
      t.string :genero
      t.date :fecha_nacimieto
      t.string :pais
      t.string :estado
      t.string :ciudad
      t.string :idioma
      t.integer :id_organizacion
      t.string :rol, null: false

      t.timestamps
    end
  end
end
