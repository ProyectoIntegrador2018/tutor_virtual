class Group < ApplicationRecord
  belongs_to :course
  belongs_to :tutor
  belongs_to :supervisor

  has_and_belongs_to_many :students
end
