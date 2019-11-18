require 'test_helper'

class UserFlowsTest < ActionDispatch::IntegrationTest

  test "unauthenticaed user can't access home page" do
    get '/'
    assert_redirected_to '/login'
  end

  test "authenticated user can access home page" do
    sign_in users(:one), scope: :user
    get '/'
    assert_template 'home/index'
  end
end
