require 'test_helper'

class CursosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @curso = cursos(:one)
  end

  test "should get index" do
    get cursos_url
    assert_response :success
  end

  test "should get new" do
    get new_curso_url
    assert_response :success
  end

  test "should create curso" do
    assert_difference('Curso.count') do
      post cursos_url, params: { curso: { clave: @curso.clave, curso_nombre: @curso.curso_nombre, duracion: @curso.duracion, fin_curso: @curso.fin_curso, fin_ins: @curso.fin_ins, inicio_curso: @curso.inicio_curso, inicio_ins: @curso.inicio_ins, num_act: @curso.num_act, num_grupo: @curso.num_grupo, programa: @curso.programa, tematica: @curso.tematica, tipo_rec: @curso.tipo_rec, url: @curso.url } }
    end

    assert_redirected_to curso_url(Curso.last)
  end

  test "should show curso" do
    get curso_url(@curso)
    assert_response :success
  end

  test "should get edit" do
    get edit_curso_url(@curso)
    assert_response :success
  end

  test "should update curso" do
    patch curso_url(@curso), params: { curso: { clave: @curso.clave, curso_nombre: @curso.curso_nombre, duracion: @curso.duracion, fin_curso: @curso.fin_curso, fin_ins: @curso.fin_ins, inicio_curso: @curso.inicio_curso, inicio_ins: @curso.inicio_ins, num_act: @curso.num_act, num_grupo: @curso.num_grupo, programa: @curso.programa, tematica: @curso.tematica, tipo_rec: @curso.tipo_rec, url: @curso.url } }
    assert_redirected_to curso_url(@curso)
  end

  test "should destroy curso" do
    assert_difference('Curso.count', -1) do
      delete curso_url(@curso)
    end

    assert_redirected_to cursos_url
  end
end
