class CreateCursos < ActiveRecord::Migration[5.2]
  def change
    create_table :cursos do |t|
      t.string :curso_nombre, null: false, unique:true
      t.string :programa
      t.string :tematica
      t.integer :num_grupo
      t.string :clave
      t.string :inicio_ins
      t.string :fin_ins
      t.string :inicio_curso
      t.string :fin_curso
      t.string :tipo_rec
      t.integer :duracion
      t.integer :num_act
      t.string :url

      t.timestamps
    end
  end
end
