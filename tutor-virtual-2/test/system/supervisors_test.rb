require "application_system_test_case"

class SupervisorsTest < ApplicationSystemTestCase
  setup do
    @supervisor = supervisors(:one)
  end

  test "visiting the index" do
    visit supervisors_url
    assert_selector "h1", text: "Supervisors"
  end

  test "creating a Supervisor" do
    visit supervisors_url
    click_on "New Supervisor"

    fill_in "City", with: @supervisor.city
    fill_in "Country", with: @supervisor.country
    fill_in "Dob", with: @supervisor.dob
    fill_in "Email", with: @supervisor.email
    fill_in "First last name", with: @supervisor.first_last_name
    fill_in "Gender", with: @supervisor.gender
    fill_in "Internal password", with: @supervisor.internal_password
    fill_in "Language", with: @supervisor.language
    fill_in "Name", with: @supervisor.name
    fill_in "Organization code", with: @supervisor.organization_code
    fill_in "Partner", with: @supervisor.partner
    fill_in "Phone number", with: @supervisor.phone_number
    fill_in "Second last name", with: @supervisor.second_last_name
    fill_in "State", with: @supervisor.state
    fill_in "Username", with: @supervisor.username
    click_on "Create Supervisor"

    assert_text "Supervisor was successfully created"
    click_on "Back"
  end

  test "updating a Supervisor" do
    visit supervisors_url
    click_on "Edit", match: :first

    fill_in "City", with: @supervisor.city
    fill_in "Country", with: @supervisor.country
    fill_in "Dob", with: @supervisor.dob
    fill_in "Email", with: @supervisor.email
    fill_in "First last name", with: @supervisor.first_last_name
    fill_in "Gender", with: @supervisor.gender
    fill_in "Internal password", with: @supervisor.internal_password
    fill_in "Language", with: @supervisor.language
    fill_in "Name", with: @supervisor.name
    fill_in "Organization code", with: @supervisor.organization_code
    fill_in "Partner", with: @supervisor.partner
    fill_in "Phone number", with: @supervisor.phone_number
    fill_in "Second last name", with: @supervisor.second_last_name
    fill_in "State", with: @supervisor.state
    fill_in "Username", with: @supervisor.username
    click_on "Update Supervisor"

    assert_text "Supervisor was successfully updated"
    click_on "Back"
  end

  test "destroying a Supervisor" do
    visit supervisors_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Supervisor was successfully destroyed"
  end
end
