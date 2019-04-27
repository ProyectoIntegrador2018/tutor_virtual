# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_04_27_184235) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "aliados", force: :cascade do |t|
    t.string "nombre"
    t.string "tipo_socio"
    t.string "correo"
    t.string "contacto"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "preinscritos", force: :cascade do |t|
    t.string "nombre", null: false
    t.string "apellido_paterno", null: false
    t.string "apellido_materno", null: false
    t.string "correo_contacto"
    t.string "cca"
    t.boolean "estatus_user_mensajeria"
    t.boolean "estatus_ins_mensajeria"
    t.string "fecha_inscripcion"
    t.string "genero"
    t.string "fecha_nacimieto"
    t.string "pais"
    t.string "estado"
    t.string "ciudad"
    t.string "idioma"
    t.integer "id_organizacion"
    t.string "rol", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "usuario", null: false
    t.string "password", null: false
    t.boolean "admin", default: false
    t.string "nombre", null: false
    t.string "apellido_materno"
    t.string "apellido_paterno"
    t.string "email"
    t.string "socio"
    t.string "organizacion"
    t.string "pais"
    t.string "estado"
    t.string "municipio"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
