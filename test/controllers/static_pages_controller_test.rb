require 'test_helper'

class StaticPagesControllerTest < ActionDispatch::IntegrationTest
  test "should redirect to login path" do
    get root_path
    assert_response :redirect
    get login_path
    assert_response :success
  end

end
