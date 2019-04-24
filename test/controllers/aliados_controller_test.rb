require 'test_helper'

class AliadosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @aliado = aliados(:one)
  end

  test "should get index" do
    get aliados_url
    assert_response :success
  end

  test "should get new" do
    get new_aliado_url
    assert_response :success
  end

  test "should create aliado" do
    assert_difference('Aliado.count') do
      post aliados_url, params: { aliado: { contacto: @aliado.contacto, correo: @aliado.correo, nombre: @aliado.nombre, tipo_socio: @aliado.tipo_socio } }
    end

    assert_redirected_to aliado_url(Aliado.last)
  end

  test "should show aliado" do
    get aliado_url(@aliado)
    assert_response :success
  end

  test "should get edit" do
    get edit_aliado_url(@aliado)
    assert_response :success
  end

  test "should update aliado" do
    patch aliado_url(@aliado), params: { aliado: { contacto: @aliado.contacto, correo: @aliado.correo, nombre: @aliado.nombre, tipo_socio: @aliado.tipo_socio } }
    assert_redirected_to aliado_url(@aliado)
  end

  test "should destroy aliado" do
    assert_difference('Aliado.count', -1) do
      delete aliado_url(@aliado)
    end

    assert_redirected_to aliados_url
  end
end
