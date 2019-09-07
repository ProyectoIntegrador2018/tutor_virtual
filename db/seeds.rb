# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

if !Rails.env.production?
  user = User.new(
      :usuario  => "user@example.com",
      :nombre   => "user",
      :password => "123456",
  )
  user.save!


  admin_user = User.new(
      :usuario  => "admin@example.com",
      :nombre   => "admin",
      :password => "123456",
      :admin    => "true"
  )
  admin_user.save!
end
