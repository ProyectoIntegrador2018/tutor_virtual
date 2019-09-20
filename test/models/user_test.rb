require 'test_helper'

class UserTest < ActiveSupport::TestCase

  def setup
    @user = User.new(nombre: "Example User", email: "user@example.com",
                     password: "foobar")
  end

  test "should be valid" do
    assert @user.valid?
  end
end
