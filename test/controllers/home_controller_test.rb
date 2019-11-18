require 'test_helper'

class HomeControllerTest < ActionDispatch::IntegrationTest
  def setup
    sign_in users(:one), scope: :user
  end
  
  test "should get index" do
    get home_index_url
    assert_response :success
  end

end
