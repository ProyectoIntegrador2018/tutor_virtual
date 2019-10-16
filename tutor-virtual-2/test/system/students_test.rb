require "application_system_test_case"

class StudentsTest < ApplicationSystemTestCase
  setup do
    @student = students(:one)
  end

  test "visiting the index" do
    visit students_url
    assert_selector "h1", text: "Students"
  end

  test "creating a Student" do
    visit students_url
    click_on "New Student"

    fill_in "City", with: @student.city
    fill_in "Country", with: @student.country
    fill_in "Dob", with: @student.dob
    fill_in "Email", with: @student.email
    fill_in "First last name", with: @student.first_last_name
    fill_in "Gender", with: @student.gender
    fill_in "Internal password", with: @student.internal_password
    fill_in "Language", with: @student.language
    fill_in "Name", with: @student.name
    fill_in "Organization code", with: @student.organization_code
    fill_in "Partner", with: @student.partner
    fill_in "Phone number", with: @student.phone_number
    fill_in "Second last name", with: @student.second_last_name
    fill_in "State", with: @student.state
    fill_in "Username", with: @student.username
    click_on "Create Student"

    assert_text "Student was successfully created"
    click_on "Back"
  end

  test "updating a Student" do
    visit students_url
    click_on "Edit", match: :first

    fill_in "City", with: @student.city
    fill_in "Country", with: @student.country
    fill_in "Dob", with: @student.dob
    fill_in "Email", with: @student.email
    fill_in "First last name", with: @student.first_last_name
    fill_in "Gender", with: @student.gender
    fill_in "Internal password", with: @student.internal_password
    fill_in "Language", with: @student.language
    fill_in "Name", with: @student.name
    fill_in "Organization code", with: @student.organization_code
    fill_in "Partner", with: @student.partner
    fill_in "Phone number", with: @student.phone_number
    fill_in "Second last name", with: @student.second_last_name
    fill_in "State", with: @student.state
    fill_in "Username", with: @student.username
    click_on "Update Student"

    assert_text "Student was successfully updated"
    click_on "Back"
  end

  test "destroying a Student" do
    visit students_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Student was successfully destroyed"
  end
end
