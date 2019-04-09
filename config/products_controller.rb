class ProductsController < ApplicationController#Imports
    def index
        @products = Product.order(:name)
        respond_to do |format|
            format.html
            format.csv { send_data @products.to_csv }
            format.xls 
        end
    end

    def import 
        Product.import(params[:file])
        redirect_to root_url, notice: "Products imported"
    end
end