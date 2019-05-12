json.extract! user, :id, :usuario, :password, :admin, :nombre, :apellido_materno, :apellido_paterno, :email, :socio, :organizacion, :pais, :estado, :municipio, :created_at, :updated_at
json.url user_url(user, format: :json)
