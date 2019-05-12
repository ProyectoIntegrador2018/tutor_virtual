require "application_system_test_case"

class PreinscritosTest < ApplicationSystemTestCase
  setup do
    @preinscrito = preinscritos(:one)
  end

  test "visiting the index" do
    visit preinscritos_url
    assert_selector "h1", text: "Preinscritos"
  end

  test "creating a Preinscrito" do
    visit preinscritos_url
    click_on "New Preinscrito"

    fill_in "Apellido materno", with: @preinscrito.apellido_materno
    fill_in "Apellido paterno", with: @preinscrito.apellido_paterno
    fill_in "Cca", with: @preinscrito.cca
    fill_in "Ciudad", with: @preinscrito.ciudad
    fill_in "Correo contacto", with: @preinscrito.correo_contacto
    fill_in "Estado", with: @preinscrito.estado
    fill_in "Estatus ins mensajeria", with: @preinscrito.estatus_ins_mensajeria
    fill_in "Estatus user mensajeria", with: @preinscrito.estatus_user_mensajeria
    fill_in "Fecha inscripcion", with: @preinscrito.fecha_inscripcion
    fill_in "Fecha nacimieto", with: @preinscrito.fecha_nacimieto
    fill_in "Genero", with: @preinscrito.genero
    fill_in "Id organizacion", with: @preinscrito.id_organizacion
    fill_in "Idioma", with: @preinscrito.idioma
    fill_in "Nombre", with: @preinscrito.nombre
    fill_in "Pais", with: @preinscrito.pais
    fill_in "Rol", with: @preinscrito.rol
    click_on "Create Preinscrito"

    assert_text "Preinscrito was successfully created"
    click_on "Back"
  end

  test "updating a Preinscrito" do
    visit preinscritos_url
    click_on "Edit", match: :first

    fill_in "Apellido materno", with: @preinscrito.apellido_materno
    fill_in "Apellido paterno", with: @preinscrito.apellido_paterno
    fill_in "Cca", with: @preinscrito.cca
    fill_in "Ciudad", with: @preinscrito.ciudad
    fill_in "Correo contacto", with: @preinscrito.correo_contacto
    fill_in "Estado", with: @preinscrito.estado
    fill_in "Estatus ins mensajeria", with: @preinscrito.estatus_ins_mensajeria
    fill_in "Estatus user mensajeria", with: @preinscrito.estatus_user_mensajeria
    fill_in "Fecha inscripcion", with: @preinscrito.fecha_inscripcion
    fill_in "Fecha nacimieto", with: @preinscrito.fecha_nacimieto
    fill_in "Genero", with: @preinscrito.genero
    fill_in "Id organizacion", with: @preinscrito.id_organizacion
    fill_in "Idioma", with: @preinscrito.idioma
    fill_in "Nombre", with: @preinscrito.nombre
    fill_in "Pais", with: @preinscrito.pais
    fill_in "Rol", with: @preinscrito.rol
    click_on "Update Preinscrito"

    assert_text "Preinscrito was successfully updated"
    click_on "Back"
  end

  test "destroying a Preinscrito" do
    visit preinscritos_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Preinscrito was successfully destroyed"
  end
end
