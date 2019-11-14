require "application_system_test_case"

class StakeholdersTest < ApplicationSystemTestCase
  setup do
    @stakeholder = stakeholders(:one)
  end

  test "visiting the index" do
    visit stakeholders_url
    assert_selector "h1", text: "Stakeholders"
  end

  test "creating a Stakeholder" do
    visit stakeholders_url
    click_on "New Stakeholder"

    fill_in "City", with: @stakeholder.city
    fill_in "Country", with: @stakeholder.country
    fill_in "Dob", with: @stakeholder.dob
    fill_in "Email", with: @stakeholder.email
    fill_in "First last name", with: @stakeholder.first_last_name
    fill_in "Gender", with: @stakeholder.gender
    fill_in "Internal password", with: @stakeholder.internal_password
    fill_in "Language", with: @stakeholder.language
    fill_in "Name", with: @stakeholder.name
    fill_in "Organization code", with: @stakeholder.organization_code
    fill_in "Partner", with: @stakeholder.partner
    fill_in "Phone number", with: @stakeholder.phone_number
    fill_in "Second last name", with: @stakeholder.second_last_name
    fill_in "State", with: @stakeholder.state
    fill_in "Username", with: @stakeholder.username
    click_on "Create Stakeholder"

    assert_text "Stakeholder was successfully created"
    click_on "Back"
  end

  test "updating a Stakeholder" do
    visit stakeholders_url
    click_on "Edit", match: :first

    fill_in "City", with: @stakeholder.city
    fill_in "Country", with: @stakeholder.country
    fill_in "Dob", with: @stakeholder.dob
    fill_in "Email", with: @stakeholder.email
    fill_in "First last name", with: @stakeholder.first_last_name
    fill_in "Gender", with: @stakeholder.gender
    fill_in "Internal password", with: @stakeholder.internal_password
    fill_in "Language", with: @stakeholder.language
    fill_in "Name", with: @stakeholder.name
    fill_in "Organization code", with: @stakeholder.organization_code
    fill_in "Partner", with: @stakeholder.partner
    fill_in "Phone number", with: @stakeholder.phone_number
    fill_in "Second last name", with: @stakeholder.second_last_name
    fill_in "State", with: @stakeholder.state
    fill_in "Username", with: @stakeholder.username
    click_on "Update Stakeholder"

    assert_text "Stakeholder was successfully updated"
    click_on "Back"
  end

  test "destroying a Stakeholder" do
    visit stakeholders_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Stakeholder was successfully destroyed"
  end
end
