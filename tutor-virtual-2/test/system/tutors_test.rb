require "application_system_test_case"

class TutorsTest < ApplicationSystemTestCase
  setup do
    @tutor = tutors(:one)
  end

  test "visiting the index" do
    visit tutors_url
    assert_selector "h1", text: "Tutors"
  end

  test "creating a Tutor" do
    visit tutors_url
    click_on "New Tutor"

    fill_in "City", with: @tutor.city
    fill_in "Country", with: @tutor.country
    fill_in "Dob", with: @tutor.dob
    fill_in "Email", with: @tutor.email
    fill_in "First last name", with: @tutor.first_last_name
    fill_in "Gender", with: @tutor.gender
    fill_in "Internal password", with: @tutor.internal_password
    fill_in "Language", with: @tutor.language
    fill_in "Name", with: @tutor.name
    fill_in "Organization code", with: @tutor.organization_code
    fill_in "Partner", with: @tutor.partner
    fill_in "Phone number", with: @tutor.phone_number
    fill_in "Second last name", with: @tutor.second_last_name
    fill_in "State", with: @tutor.state
    fill_in "Username", with: @tutor.username
    click_on "Create Tutor"

    assert_text "Tutor was successfully created"
    click_on "Back"
  end

  test "updating a Tutor" do
    visit tutors_url
    click_on "Edit", match: :first

    fill_in "City", with: @tutor.city
    fill_in "Country", with: @tutor.country
    fill_in "Dob", with: @tutor.dob
    fill_in "Email", with: @tutor.email
    fill_in "First last name", with: @tutor.first_last_name
    fill_in "Gender", with: @tutor.gender
    fill_in "Internal password", with: @tutor.internal_password
    fill_in "Language", with: @tutor.language
    fill_in "Name", with: @tutor.name
    fill_in "Organization code", with: @tutor.organization_code
    fill_in "Partner", with: @tutor.partner
    fill_in "Phone number", with: @tutor.phone_number
    fill_in "Second last name", with: @tutor.second_last_name
    fill_in "State", with: @tutor.state
    fill_in "Username", with: @tutor.username
    click_on "Update Tutor"

    assert_text "Tutor was successfully updated"
    click_on "Back"
  end

  test "destroying a Tutor" do
    visit tutors_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Tutor was successfully destroyed"
  end
end
