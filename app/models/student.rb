class Student < ApplicationRecord
  has_and_belongs_to_many :courses
  has_and_belongs_to_many :groups

  def self.import(file)

    all_students = []
    Student.all.each do |student|
      all_students.push(student.username)
    end

    all_courses= {}
    Course.all.each do |course|
      all_courses[course.name] = course
    end

    puts all_courses


		xlsx = Roo::Spreadsheet.open(file.path)
    xlsx.drop(1).each do |row|

      username = row[0]
      if !all_students.include?(username)
        student = Student.create(
          username: row[0],
          internal_password: row[1],
          name: row[2],
          first_last_name: row[3],
          second_last_name: row[4],
          email: row[5],
          country: row[8],
          state: row[9],
          city: row[10],
          partner: row[7],
          organization_code: row[6],
          language: row[13],
          gender: row[21],
          dob: row[22])

          all_students.push(username)

      else
          student = Student.where(username: username).take
      end


      courseName = row[17]

      student.courses << all_courses[courseName]


    end
	end
end
