class Product < ActiveRecord::Base
    attr_accessible :name, :price, :released_on

    def self.import(file)
    end
end