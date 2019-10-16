require 'test_helper'

class StudentsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @student = students(:one)
  end

  test "should get index" do
    get students_url
    assert_response :success
  end

  test "should get new" do
    get new_student_url
    assert_response :success
  end

  test "should create student" do
    assert_difference('Student.count') do
      post students_url, params: { student: { city: @student.city, country: @student.country, dob: @student.dob, email: @student.email, first_last_name: @student.first_last_name, gender: @student.gender, internal_password: @student.internal_password, language: @student.language, name: @student.name, organization_code: @student.organization_code, partner: @student.partner, phone_number: @student.phone_number, second_last_name: @student.second_last_name, state: @student.state, username: @student.username } }
    end

    assert_redirected_to student_url(Student.last)
  end

  test "should show student" do
    get student_url(@student)
    assert_response :success
  end

  test "should get edit" do
    get edit_student_url(@student)
    assert_response :success
  end

  test "should update student" do
    patch student_url(@student), params: { student: { city: @student.city, country: @student.country, dob: @student.dob, email: @student.email, first_last_name: @student.first_last_name, gender: @student.gender, internal_password: @student.internal_password, language: @student.language, name: @student.name, organization_code: @student.organization_code, partner: @student.partner, phone_number: @student.phone_number, second_last_name: @student.second_last_name, state: @student.state, username: @student.username } }
    assert_redirected_to student_url(@student)
  end

  test "should destroy student" do
    assert_difference('Student.count', -1) do
      delete student_url(@student)
    end

    assert_redirected_to students_url
  end
end
