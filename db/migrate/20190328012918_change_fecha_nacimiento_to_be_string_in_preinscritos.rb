class ChangeFechaNacimientoToBeStringInPreinscritos < ActiveRecord::Migration[5.2]
  def change
  	change_column :preinscritos, :fecha_nacimieto, :string
  end
end
