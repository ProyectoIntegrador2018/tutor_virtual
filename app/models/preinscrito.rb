class Preinscrito < ApplicationRecord
	def self.import(file)
		CSV.foreach(file.path, headers: true, quote_char: '"') do |row|
			Preinscrito.create! row.to_hash
		end
	end
end
