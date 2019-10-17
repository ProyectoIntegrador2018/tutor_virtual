require 'test_helper'

class StakeholdersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @stakeholder = stakeholders(:one)
  end

  test "should get index" do
    get stakeholders_url
    assert_response :success
  end

  test "should get new" do
    get new_stakeholder_url
    assert_response :success
  end

  test "should create stakeholder" do
    assert_difference('Stakeholder.count') do
      post stakeholders_url, params: { stakeholder: { city: @stakeholder.city, country: @stakeholder.country, dob: @stakeholder.dob, email: @stakeholder.email, first_last_name: @stakeholder.first_last_name, gender: @stakeholder.gender, internal_password: @stakeholder.internal_password, language: @stakeholder.language, name: @stakeholder.name, organization_code: @stakeholder.organization_code, partner: @stakeholder.partner, phone_number: @stakeholder.phone_number, second_last_name: @stakeholder.second_last_name, state: @stakeholder.state, username: @stakeholder.username } }
    end

    assert_redirected_to stakeholder_url(Stakeholder.last)
  end

  test "should show stakeholder" do
    get stakeholder_url(@stakeholder)
    assert_response :success
  end

  test "should get edit" do
    get edit_stakeholder_url(@stakeholder)
    assert_response :success
  end

  test "should update stakeholder" do
    patch stakeholder_url(@stakeholder), params: { stakeholder: { city: @stakeholder.city, country: @stakeholder.country, dob: @stakeholder.dob, email: @stakeholder.email, first_last_name: @stakeholder.first_last_name, gender: @stakeholder.gender, internal_password: @stakeholder.internal_password, language: @stakeholder.language, name: @stakeholder.name, organization_code: @stakeholder.organization_code, partner: @stakeholder.partner, phone_number: @stakeholder.phone_number, second_last_name: @stakeholder.second_last_name, state: @stakeholder.state, username: @stakeholder.username } }
    assert_redirected_to stakeholder_url(@stakeholder)
  end

  test "should destroy stakeholder" do
    assert_difference('Stakeholder.count', -1) do
      delete stakeholder_url(@stakeholder)
    end

    assert_redirected_to stakeholders_url
  end
end
