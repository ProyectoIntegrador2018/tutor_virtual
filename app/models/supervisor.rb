class Supervisor < ApplicationRecord
  has_many :groups, dependent: :destroy

  def self.import(file)

    all_supervisors = []
    Supervisor.all.each do |supervisor|
      all_supervisors.push(supervisor.username)
    end

    xlsx = Roo::Spreadsheet.open(file.path)
    xlsx.drop(1).each do |row|

      username = row[0]

      if !all_supervisors.include?(username)
          Supervisor.create(
            username: row[0],
            internal_password: row[1],
            name: row[2],
            first_last_name: row[3],
            second_last_name: row[4],
            email: row[5],
            country: row[6],
            state: row[7],
            city: row[8],
            partner: row[9],
            organization_code: row[10]
          )

          all_supervisors.push(username)

      end

    end

  end

end
