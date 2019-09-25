require 'test_helper'

class SessionsControllerTest < ActionDispatch::IntegrationTest
  # test "should get new" do
  #   get sessions_new_url
  #   assert_response :success
  # end
  #
  # test "should get create" do
  #   get sessions_create_url
  #   assert_response :success
  # end

  test "should get destroy" do
    get logout_path
    # destroys session and redirects to login path
    assert_response :redirect
  end

end
