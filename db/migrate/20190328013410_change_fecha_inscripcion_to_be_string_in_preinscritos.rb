class ChangeFechaInscripcionToBeStringInPreinscritos < ActiveRecord::Migration[5.2]
  def change
  	change_column :preinscritos, :fecha_inscripcion, :string
  end
end
