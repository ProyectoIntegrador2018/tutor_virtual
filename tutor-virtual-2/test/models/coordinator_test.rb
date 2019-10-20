require 'test_helper'

class CoordinatorTest < ActiveSupport::TestCase
  def setup
    @coordinator = Coordinator.new(email: "coordinator@example.com")
  end

  test "email validation should accept valid addresses" do
    valid_addresses = %w[user@example.com USER@foo.COM A_US-ER@foo.bar.org
                         first.last@foo.jp alice+bob@baz.cn]
    valid_addresses.each do |valid_address|
      @coordinator.email = valid_address
      assert @coordinator.valid?, "#{valid_address.inspect} should be valid"
    end
  end

end
