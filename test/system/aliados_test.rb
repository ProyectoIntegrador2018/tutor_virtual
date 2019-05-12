require "application_system_test_case"

class AliadosTest < ApplicationSystemTestCase
  setup do
    @aliado = aliados(:one)
  end

  test "visiting the index" do
    visit aliados_url
    assert_selector "h1", text: "Aliados"
  end

  test "creating a Aliado" do
    visit aliados_url
    click_on "New Aliado"

    fill_in "Contacto", with: @aliado.contacto
    fill_in "Correo", with: @aliado.correo
    fill_in "Nombre", with: @aliado.nombre
    fill_in "Tipo socio", with: @aliado.tipo_socio
    click_on "Create Aliado"

    assert_text "Aliado was successfully created"
    click_on "Back"
  end

  test "updating a Aliado" do
    visit aliados_url
    click_on "Edit", match: :first

    fill_in "Contacto", with: @aliado.contacto
    fill_in "Correo", with: @aliado.correo
    fill_in "Nombre", with: @aliado.nombre
    fill_in "Tipo socio", with: @aliado.tipo_socio
    click_on "Update Aliado"

    assert_text "Aliado was successfully updated"
    click_on "Back"
  end

  test "destroying a Aliado" do
    visit aliados_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Aliado was successfully destroyed"
  end
end
