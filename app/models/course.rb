require 'roo'

class Course < ApplicationRecord
  has_many :groups, dependent: :destroy
  has_and_belongs_to_many :students

  def self.import(file)


    all_courses= []
    Course.all.each do |course|
      all_courses.push(course.name)
    end


    xlsx = Roo::Spreadsheet.open(file.path)
    xlsx.drop(1).each do |row|

      course_name = row[2]

      if !all_courses.include?(course_name)
        Course.create(name: row[2], start_date: row[7], end_date: row[8], course_code: row[4])
      end

    end
	end

end
