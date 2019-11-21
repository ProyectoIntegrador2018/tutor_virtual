class CoursesController < ApplicationController
  before_action :set_course, only: [:show, :edit, :update, :destroy]

  # GET /courses
  # GET /courses.json
  def index
    if params[:search]
      @courses = Course.where('name ILIKE ?', "%#{params[:search]}%").order("start_date DESC", "name")

    else
      @courses = Course.order("start_date DESC", "name")
    end
  end

  # GET /courses/1
  # GET /courses/1.json
  def show
  end

  # GET /courses/new
  def new
    @course = Course.new
  end

  def import
   Course.import(params[:file])
   redirect_to courses_path
  end

  # GET /courses/1/edit
  def edit
  end

  def export
      @courses = Course.all
    respond_to do |format|

      format.xlsx {render xlsx: 'export'}
      format.html
    end
  end

  # POST /courses
  # POST /courses.json
  def create
    @course = Course.new(course_params)

    respond_to do |format|
      if @course.save
        format.html { redirect_to @course, notice: 'Course was successfully created.' }
        format.json { render :show, status: :created, location: @course }
      else
        format.html { render :new }
        format.json { render json: @course.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /courses/1
  # PATCH/PUT /courses/1.json
  def update
    respond_to do |format|
      if @course.update(course_params)
        format.html { redirect_to @course, notice: 'Course was successfully updated.' }
        format.json { render :show, status: :ok, location: @course }
      else
        format.html { render :edit }
        format.json { render json: @course.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /courses/1
  # DELETE /courses/1.json
  def destroy
    @course.destroy
    respond_to do |format|
      format.html { redirect_to courses_url, notice: 'Course was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def destroy_multiple

    if params[:course_ids]
      Course.destroy(params[:course_ids])
      message = {notice: 'Curso borrado con éxito.'}
    else
      message = {alert: 'Por favor selecciona al menos un curso.'}
    end

    respond_to do |format|
      format.html { redirect_to courses_url }
      format.json { head :no_content }
    end
  end

  def destroy_all
    Course.all.each do  |course|
      course.destroy
    end

    redirect_to courses_path, notice: "Cursos Borrados Exitosamente"
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_course
      @course = Course.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def course_params
      params.require(:course).permit(:name, :course_code, :start_date, :end_date)
    end
end
