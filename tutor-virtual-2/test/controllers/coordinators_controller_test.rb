require 'test_helper'

class CoordinatorsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @coordinator = coordinators(:one)
  end

  test "should get index" do
    get coordinators_url
    assert_response :success
  end

  test "should get new" do
    get new_coordinator_url
    assert_response :success
  end

  # test "should create coordinator" do
  #   assert_difference('Coordinator.count') do
  #     post coordinators_url, params: { coordinator: { city: @coordinator.city, country: @coordinator.country, dob: @coordinator.dob, email: @coordinator.email, first_last_name: @coordinator.first_last_name, gender: @coordinator.gender, internal_password: @coordinator.internal_password, language: @coordinator.language, name: @coordinator.name, organization_code: @coordinator.organization_code, partner: @coordinator.partner, phone_number: @coordinator.phone_number, second_last_name: @coordinator.second_last_name, state: @coordinator.state, username: @coordinator.username } }
  #   end
  #
  #   assert_redirected_to coordinator_url(Coordinator.last)
  # end

  test "should show coordinator" do
    get coordinator_url(@coordinator)
    assert_response :success
  end

  test "should get edit" do
    get edit_coordinator_url(@coordinator)
    assert_response :success
  end

  test "should update coordinator" do
    patch coordinator_url(@coordinator), params: { coordinator: { city: @coordinator.city, country: @coordinator.country, dob: @coordinator.dob, email: @coordinator.email, first_last_name: @coordinator.first_last_name, gender: @coordinator.gender, internal_password: @coordinator.internal_password, language: @coordinator.language, name: @coordinator.name, organization_code: @coordinator.organization_code, partner: @coordinator.partner, phone_number: @coordinator.phone_number, second_last_name: @coordinator.second_last_name, state: @coordinator.state, username: @coordinator.username } }
    assert_redirected_to coordinator_url(@coordinator)
  end

  test "should destroy coordinator" do
    assert_difference('Coordinator.count', -1) do
      delete coordinator_url(@coordinator)
    end

    assert_redirected_to coordinators_url
  end
end
