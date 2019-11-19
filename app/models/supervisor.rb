class Supervisor < ApplicationRecord
  has_many :groups, dependent: :destroy
end
