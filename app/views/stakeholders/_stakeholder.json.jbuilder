json.extract! stakeholder, :id, :username, :internal_password, :name, :first_last_name, :second_last_name, :email, :country, :state, :city, :partner, :organization_code, :gender, :dob, :phone_number, :language, :created_at, :updated_at
json.url stakeholder_url(stakeholder, format: :json)
