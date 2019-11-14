json.extract! course, :id, :name, :course_code, :start_date, :end_date, :created_at, :updated_at
json.url course_url(course, format: :json)
