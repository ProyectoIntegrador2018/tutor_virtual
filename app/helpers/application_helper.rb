module ApplicationHelper

	def is_active?(page_name)
	  	return params[:action] == page_name
	end

end
