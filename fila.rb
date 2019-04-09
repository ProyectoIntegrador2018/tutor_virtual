xlsx = Roo::Excelx.new("./test_data/test_small.xlsx")
xlsx.each_row_streaming do |row|
  puts row.inspect # Array of Excelx::Cell objects
end
