class Preinscrito < ApplicationRecord
	def self.import(file)
		CSV.foreach(file.path, headers: true, quote_char: '"') do |row|
			preinscitos = find_by(row["nombre"]) || new
			preinscitos.attributes = row.to_hash
			preinscito.save!
		end
	end
end
