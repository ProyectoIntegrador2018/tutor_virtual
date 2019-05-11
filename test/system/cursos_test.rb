require "application_system_test_case"

class CursosTest < ApplicationSystemTestCase
  setup do
    @curso = cursos(:one)
  end

  test "visiting the index" do
    visit cursos_url
    assert_selector "h1", text: "Cursos"
  end

  test "creating a Curso" do
    visit cursos_url
    click_on "New Curso"

    fill_in "Clave", with: @curso.clave
    fill_in "Curso nombre", with: @curso.curso_nombre
    fill_in "Duracion", with: @curso.duracion
    fill_in "Fin curso", with: @curso.fin_curso
    fill_in "Fin ins", with: @curso.fin_ins
    fill_in "Inicio curso", with: @curso.inicio_curso
    fill_in "Inicio ins", with: @curso.inicio_ins
    fill_in "Num act", with: @curso.num_act
    fill_in "Num grupo", with: @curso.num_grupo
    fill_in "Programa", with: @curso.programa
    fill_in "Tematica", with: @curso.tematica
    fill_in "Tipo rec", with: @curso.tipo_rec
    fill_in "Url", with: @curso.url
    click_on "Create Curso"

    assert_text "Curso was successfully created"
    click_on "Back"
  end

  test "updating a Curso" do
    visit cursos_url
    click_on "Edit", match: :first

    fill_in "Clave", with: @curso.clave
    fill_in "Curso nombre", with: @curso.curso_nombre
    fill_in "Duracion", with: @curso.duracion
    fill_in "Fin curso", with: @curso.fin_curso
    fill_in "Fin ins", with: @curso.fin_ins
    fill_in "Inicio curso", with: @curso.inicio_curso
    fill_in "Inicio ins", with: @curso.inicio_ins
    fill_in "Num act", with: @curso.num_act
    fill_in "Num grupo", with: @curso.num_grupo
    fill_in "Programa", with: @curso.programa
    fill_in "Tematica", with: @curso.tematica
    fill_in "Tipo rec", with: @curso.tipo_rec
    fill_in "Url", with: @curso.url
    click_on "Update Curso"

    assert_text "Curso was successfully updated"
    click_on "Back"
  end

  test "destroying a Curso" do
    visit cursos_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Curso was successfully destroyed"
  end
end
