require 'roo'

xlsx = Roo::Spreadsheet.open('./Data Scientist Work Example.xlsx')
xlsx = Roo::Excelx.new("./Data Scientist Work Example.xlsx")

# Use the extension option if the extension is ambiguous.
#xlsx = Roo::Spreadsheet.open('./rails_temp_upload', extension: :xlsx)

xlsx.info
# => Returns basic info about the spreadsheet file