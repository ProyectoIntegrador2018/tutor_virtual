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
      post stakeholders_url, params: { stakeholder: {  } }
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
    patch stakeholder_url(@stakeholder), params: { stakeholder: {  } }
    assert_redirected_to stakeholder_url(@stakeholder)
  end

  test "should destroy stakeholder" do
    assert_difference('Stakeholder.count', -1) do
      delete stakeholder_url(@stakeholder)
    end

    assert_redirected_to stakeholders_url
  end
end
