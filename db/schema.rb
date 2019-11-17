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

ActiveRecord::Schema.define(version: 2019_11_17_205958) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "coordinators", force: :cascade do |t|
    t.string "username"
    t.string "internal_password"
    t.string "name"
    t.string "first_last_name"
    t.string "second_last_name"
    t.string "email"
    t.string "country"
    t.string "state"
    t.string "city"
    t.string "partner"
    t.string "organization_code"
    t.integer "gender"
    t.date "dob"
    t.string "phone_number"
    t.string "language"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "courses", force: :cascade do |t|
    t.string "name"
    t.string "course_code"
    t.date "start_date"
    t.date "end_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "courses_students", id: false, force: :cascade do |t|
    t.bigint "course_id", null: false
    t.bigint "student_id", null: false
    t.index ["course_id", "student_id"], name: "index_courses_students_on_course_id_and_student_id"
    t.index ["student_id", "course_id"], name: "index_courses_students_on_student_id_and_course_id"
  end

  create_table "groups", force: :cascade do |t|
    t.integer "group_number"
    t.bigint "course_id"
    t.bigint "tutor_id"
    t.bigint "supervisor_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["course_id"], name: "index_groups_on_course_id"
    t.index ["supervisor_id"], name: "index_groups_on_supervisor_id"
    t.index ["tutor_id"], name: "index_groups_on_tutor_id"
  end

  create_table "stakeholders", force: :cascade do |t|
    t.string "username"
    t.string "internal_password"
    t.string "name"
    t.string "first_last_name"
    t.string "second_last_name"
    t.string "email"
    t.string "country"
    t.string "state"
    t.string "city"
    t.string "partner"
    t.string "organization_code"
    t.integer "gender"
    t.date "dob"
    t.string "phone_number"
    t.string "language"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "students", force: :cascade do |t|
    t.string "username"
    t.string "internal_password"
    t.string "name"
    t.string "first_last_name"
    t.string "second_last_name"
    t.string "email"
    t.string "country"
    t.string "state"
    t.string "city"
    t.string "partner"
    t.string "organization_code"
    t.integer "gender"
    t.date "dob"
    t.string "phone_number"
    t.string "language"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "supervisors", force: :cascade do |t|
    t.string "username"
    t.string "internal_password"
    t.string "name"
    t.string "first_last_name"
    t.string "second_last_name"
    t.string "email"
    t.string "country"
    t.string "state"
    t.string "city"
    t.string "partner"
    t.string "organization_code"
    t.integer "gender"
    t.date "dob"
    t.string "phone_number"
    t.string "language"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tutors", force: :cascade do |t|
    t.string "username"
    t.string "internal_password"
    t.string "name"
    t.string "first_last_name"
    t.string "second_last_name"
    t.string "email"
    t.string "country"
    t.string "state"
    t.string "city"
    t.string "partner"
    t.string "organization_code"
    t.integer "gender"
    t.date "dob"
    t.string "phone_number"
    t.string "language"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "groups", "courses"
  add_foreign_key "groups", "supervisors"
  add_foreign_key "groups", "tutors"
end
