require 'test_helper'

class TutorsControllerTest < ActionDispatch::IntegrationTest
  setup do
    sign_in users(:one), scope: :user
    @tutor = tutors(:one)
  end

  test "should get index" do
    get tutors_url
    assert_response :success
  end

  test "should get new" do
    get new_tutor_url
    assert_response :success
  end

  test "should create tutor" do
    assert_difference('Tutor.count') do
      post tutors_url, params: { tutor: { city: @tutor.city, country: @tutor.country, dob: @tutor.dob, email: @tutor.email, first_last_name: @tutor.first_last_name, gender: @tutor.gender, internal_password: @tutor.internal_password, language: @tutor.language, name: @tutor.name, organization_code: @tutor.organization_code, partner: @tutor.partner, phone_number: @tutor.phone_number, second_last_name: @tutor.second_last_name, state: @tutor.state, username: @tutor.username } }
    end

    assert_redirected_to tutor_url(Tutor.last)
  end

  test "should show tutor" do
    get tutor_url(@tutor)
    assert_response :success
  end

  test "should get edit" do
    get edit_tutor_url(@tutor)
    assert_response :success
  end

  test "should update tutor" do
    patch tutor_url(@tutor), params: { tutor: { city: @tutor.city, country: @tutor.country, dob: @tutor.dob, email: @tutor.email, first_last_name: @tutor.first_last_name, gender: @tutor.gender, internal_password: @tutor.internal_password, language: @tutor.language, name: @tutor.name, organization_code: @tutor.organization_code, partner: @tutor.partner, phone_number: @tutor.phone_number, second_last_name: @tutor.second_last_name, state: @tutor.state, username: @tutor.username } }
    assert_redirected_to tutor_url(@tutor)
  end

  test "should destroy tutor" do
    assert_difference('Tutor.count', -1) do
      delete tutor_url(@tutor)
    end

    assert_redirected_to tutors_url
  end
end
