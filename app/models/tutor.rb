class Tutor < ApplicationRecord
  has_many :groups, dependent: :destroy

  def self.import(file)
    o = [('a'..'z'), ('A'..'Z'), ('0'..'9')].map(&:to_a).flatten

    all_tutors = []
    Tutor.all.each do |tutor|
      all_tutors.push(tutor.username)
    end


		xlsx = Roo::Spreadsheet.open(file.path)
    xlsx.drop(1).each do |row|

      username = row[0]

      if !all_tutors.include?(username)
        str = (0...6).map { o[rand(o.length)] }.join
        Tutor.create(
          username: row[0],
          internal_password: str,
          name: row[1],
          first_last_name: row[2],
          second_last_name: row[3],
          email: row[4],
          country: row[8],
          state: row[9],
          city: row[10],
          partner: row[6],
          organization_code: row[7])

          all_tutors.push(username)
      end


    end
	end
end
