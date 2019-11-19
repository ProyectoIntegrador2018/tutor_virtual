class Group < ApplicationRecord
  belongs_to :course
  belongs_to :tutor
  belongs_to :supervisor

  has_and_belongs_to_many :students



  def self.add_student(group_id, student_id)
    group = Group.where(id: group_id).take
    student = Student.where(id: student_id).take

    group.students << student
  end

  def self.delete_student(group_id, student_id)

    sql = "DELETE FROM groups_students WHERE groups_students.student_id = #{student_id} AND groups_students.group_id = #{group_id}"
    ActiveRecord::Base.connection.execute(sql).to_a

  end



end
