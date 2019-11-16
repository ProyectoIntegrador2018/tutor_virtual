require 'roo'

class Course < ApplicationRecord
  has_and_belongs_to_many :students

  def self.import(file)
		xlsx = Roo::Spreadsheet.open(file.path)
    xlsx.drop(1).each do |row|

      Course.create(name: row[2], start_date: row[7], end_date: row[8], course_code: row[4])
    end
	end

end
