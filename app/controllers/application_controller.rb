class ApplicationController < ActionController::Base
  before_action :require_login
  private

    def require_login
      unless current_user || request.env['PATH_INFO'] == "/login"
        redirect_to login_url
      end
    end
end
