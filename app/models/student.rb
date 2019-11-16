class Student < ApplicationRecord
  has_and_belongs_to_many :courses

  def self.import(file)


		xlsx = Roo::Spreadsheet.open(file.path)
    xlsx.drop(1).each do |row|

      username = row[0]
      if Student.where(username: username).take == nil
        Student.create(
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

      end

      courseName = row[17]
      student = Student.where(username: username).take
      course = Course.all.where(name: courseName).take
      #.where(name: row[17], start_date: row[19]).take

      student.courses << course

      puts "***********************"
      puts student.courses.first.name

      


    end
	end
end
