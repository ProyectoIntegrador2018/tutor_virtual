json.extract! curso, :id, :curso_nombre, :programa, :tematica, :num_grupo, :clave, :inicio_ins, :fin_ins, :inicio_curso, :fin_curso, :tipo_rec, :duracion, :num_act, :url, :created_at, :updated_at
json.url curso_url(curso, format: :json)
