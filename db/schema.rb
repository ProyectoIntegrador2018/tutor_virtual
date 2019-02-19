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

ActiveRecord::Schema.define(version: 2019_02_16_192133) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "announcements", force: :cascade do |t|
    t.string "description"
    t.datetime "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "anuncios", force: :cascade do |t|
    t.string "descripcion", null: false
    t.datetime "fecha", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "courses", force: :cascade do |t|
    t.string "name", null: false
    t.string "code", null: false
    t.integer "clu_course"
    t.integer "clu_laboratory"
    t.integer "clu_unities"
    t.boolean "status"
    t.integer "type"
    t.string "information"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "documentos", force: :cascade do |t|
    t.string "descripcion"
    t.string "url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "documents", force: :cascade do |t|
    t.string "description"
    t.string "url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "links", force: :cascade do |t|
    t.string "name", null: false
    t.string "description"
    t.string "participants"
    t.datetime "start_date"
    t.datetime "end_date"
    t.integer "type"
    t.string "url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "materia", force: :cascade do |t|
    t.string "nombre"
    t.string "clave"
    t.integer "clu_clases"
    t.integer "clu_laboratorio"
    t.integer "clu_unidades"
    t.boolean "estatus"
    t.integer "tipo"
    t.string "info"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "profesors", force: :cascade do |t|
    t.string "nombre", null: false
    t.string "apellido_paterno"
    t.string "apellido_materno"
    t.string "correo"
    t.string "oficina"
    t.string "cv"
    t.integer "tipo", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "professors", force: :cascade do |t|
    t.string "name", null: false
    t.string "father_last_name"
    t.string "mother_last_name"
    t.string "email", null: false
    t.string "office"
    t.string "resume"
    t.integer "type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "password", null: false
    t.integer "role", null: false
    t.string "email", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "usuarios", force: :cascade do |t|
    t.string "password", null: false
    t.integer "rol", default: 1, null: false
    t.string "email", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "vinculacions", force: :cascade do |t|
    t.string "nombre", null: false
    t.string "descripcion"
    t.string "participantes"
    t.datetime "fecha_inicio"
    t.datetime "fecha_fin"
    t.integer "tipo", null: false
    t.string "url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
