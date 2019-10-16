require 'test_helper'

class SupervisorsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @supervisor = supervisors(:one)
  end

  test "should get index" do
    get supervisors_url
    assert_response :success
  end

  test "should get new" do
    get new_supervisor_url
    assert_response :success
  end

  test "should create supervisor" do
    assert_difference('Supervisor.count') do
      post supervisors_url, params: { supervisor: { city: @supervisor.city, country: @supervisor.country, dob: @supervisor.dob, email: @supervisor.email, first_last_name: @supervisor.first_last_name, gender: @supervisor.gender, internal_password: @supervisor.internal_password, language: @supervisor.language, name: @supervisor.name, organization_code: @supervisor.organization_code, partner: @supervisor.partner, phone_number: @supervisor.phone_number, second_last_name: @supervisor.second_last_name, state: @supervisor.state, username: @supervisor.username } }
    end

    assert_redirected_to supervisor_url(Supervisor.last)
  end

  test "should show supervisor" do
    get supervisor_url(@supervisor)
    assert_response :success
  end

  test "should get edit" do
    get edit_supervisor_url(@supervisor)
    assert_response :success
  end

  test "should update supervisor" do
    patch supervisor_url(@supervisor), params: { supervisor: { city: @supervisor.city, country: @supervisor.country, dob: @supervisor.dob, email: @supervisor.email, first_last_name: @supervisor.first_last_name, gender: @supervisor.gender, internal_password: @supervisor.internal_password, language: @supervisor.language, name: @supervisor.name, organization_code: @supervisor.organization_code, partner: @supervisor.partner, phone_number: @supervisor.phone_number, second_last_name: @supervisor.second_last_name, state: @supervisor.state, username: @supervisor.username } }
    assert_redirected_to supervisor_url(@supervisor)
  end

  test "should destroy supervisor" do
    assert_difference('Supervisor.count', -1) do
      delete supervisor_url(@supervisor)
    end

    assert_redirected_to supervisors_url
  end
end
