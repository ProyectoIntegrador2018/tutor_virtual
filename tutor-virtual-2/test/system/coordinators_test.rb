require "application_system_test_case"

class CoordinatorsTest < ApplicationSystemTestCase
  setup do
    @coordinator = coordinators(:one)
  end

  test "visiting the index" do
    visit coordinators_url
    assert_selector "h1", text: "Coordinators"
  end

  test "creating a Coordinator" do
    visit coordinators_url
    click_on "New Coordinator"

    fill_in "City", with: @coordinator.city
    fill_in "Country", with: @coordinator.country
    fill_in "Dob", with: @coordinator.dob
    fill_in "Email", with: @coordinator.email
    fill_in "First last name", with: @coordinator.first_last_name
    fill_in "Gender", with: @coordinator.gender
    fill_in "Internal password", with: @coordinator.internal_password
    fill_in "Language", with: @coordinator.language
    fill_in "Name", with: @coordinator.name
    fill_in "Organization code", with: @coordinator.organization_code
    fill_in "Partner", with: @coordinator.partner
    fill_in "Phone number", with: @coordinator.phone_number
    fill_in "Second last name", with: @coordinator.second_last_name
    fill_in "State", with: @coordinator.state
    fill_in "Username", with: @coordinator.username
    click_on "Create Coordinator"

    assert_text "Coordinator was successfully created"
    click_on "Back"
  end

  test "updating a Coordinator" do
    visit coordinators_url
    click_on "Edit", match: :first

    fill_in "City", with: @coordinator.city
    fill_in "Country", with: @coordinator.country
    fill_in "Dob", with: @coordinator.dob
    fill_in "Email", with: @coordinator.email
    fill_in "First last name", with: @coordinator.first_last_name
    fill_in "Gender", with: @coordinator.gender
    fill_in "Internal password", with: @coordinator.internal_password
    fill_in "Language", with: @coordinator.language
    fill_in "Name", with: @coordinator.name
    fill_in "Organization code", with: @coordinator.organization_code
    fill_in "Partner", with: @coordinator.partner
    fill_in "Phone number", with: @coordinator.phone_number
    fill_in "Second last name", with: @coordinator.second_last_name
    fill_in "State", with: @coordinator.state
    fill_in "Username", with: @coordinator.username
    click_on "Update Coordinator"

    assert_text "Coordinator was successfully updated"
    click_on "Back"
  end

  test "destroying a Coordinator" do
    visit coordinators_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Coordinator was successfully destroyed"
  end
end
