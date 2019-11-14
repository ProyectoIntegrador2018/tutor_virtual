require 'roo'

class Course < ApplicationRecord
  has_and_belongs_to_many :students

  def self.import(file)
		xlsx = Roo::Spreadsheet.open(file.path)
    xlsx.each do |row|
      Course.create(name: row[0], start_date: row[1], end_date: row[2], course_code: row[3])
    end
	end

end
