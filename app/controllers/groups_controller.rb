class GroupsController < ApplicationController
  before_action :set_group, only: [:show, :edit, :update, :destroy]

  # GET /groups
  # GET /groups.json
  def index

    if params[:course_id]
      @groups = Group.where(course_id: params[:course_id])


    else
      @groups = Group.all

    end

    @courses = Course.order("start_date DESC", "name")
  end

  # GET /groups/1
  # GET /groups/1.json
  def show

      @not_ins = []
      @ins = []

      @group.course.students.each do |student|
        @not_ins.push(student)
      end

      Group.where(course_id: @group.course.id).each do |group|
        group.students.each do |student|
          @ins.push(student)
        end
      end

      @result = @not_ins - @ins

  end

  # GET /groups/new
  def new
    @group = Group.new
    @course = Course.all.where(id: params[:course_id]).take

    last_group = Group.where(course_id: params[:course_id]).last
    if last_group == nil
      @group_num = 1
    else
      @group_num = last_group.group_number + 1
    end



    tutors_ins = []
    tutors_not_ins = []

     Tutor.all.order("organization_code").each do |tutor|
       tutors_not_ins.push(tutor)
     end

    Group.all.each do |group|
      tutors_ins.push(group.tutor)
    end


    @tutors = (tutors_not_ins - tutors_ins)

    @supervisors = Supervisor.all

  end

  # GET /groups/1/edit
  def edit

    @group_num = @group.group_number

    tutors_ins = []
    tutors_not_ins = []

     Tutor.all.order("organization_code").each do |tutor|
       tutors_not_ins.push(tutor)
     end

    Group.all.each do |group|
      tutors_ins.push(group.tutor)
    end


    @tutors = [@group.tutor] + (tutors_not_ins - tutors_ins)

    @supervisors = [@group.supervisor] + Supervisor.all
  end

  def export
    @groups = Group.where(course_id: params[:course_id])
    @coordinator = Coordinator.all.take
    @stakeholders = Stakeholder.all.take

    respond_to do |format|

      format.xlsx {render xlsx: 'export'}
      format.html
    end
  end

  # POST /groups
  # POST /groups.json
  def create
    @group = Group.new(group_params)

    respond_to do |format|
      if @group.save
        format.html { redirect_to @group, notice: 'Group was successfully created.' }
        format.json { render :show, status: :created, location: @group }
      else
        format.html { render :new }
        format.json { render json: @group.errors, status: :unprocessable_entity }
      end
    end
  end

  def add_student
    Group.add_student(params[:group], params[:student])
    redirect_to "#{groups_path}/#{params[:group]}"

  end

  def add_many_students
    if params[:student_ids]
      params[:student_ids].each do |student|
        Group.add_student(params[:group], student)
      end
    end

    redirect_to "#{groups_path}/#{params[:group]}"

  end

  def delete_student
    Group.delete_student(params[:group], params[:student])
    redirect_to "#{groups_path}/#{params[:group]}"

  end

  def remove_students
    if params[:student_ids]
      params[:student_ids].each do |student|
        Group.delete_student(params[:group], student)
      end
    end

    redirect_to "#{groups_path}/#{params[:group]}"

  end

  # PATCH/PUT /groups/1
  # PATCH/PUT /groups/1.json
  def update
    respond_to do |format|
      if @group.update(group_params)
        format.html { redirect_to @group, notice: 'Group was successfully updated.' }
        format.json { render :show, status: :ok, location: @group }
      else
        format.html { render :edit }
        format.json { render json: @group.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /groups/1
  # DELETE /groups/1.json
  def destroy
    @group.destroy
    respond_to do |format|
      format.html { redirect_to groups_url, notice: 'Group was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def destroy_multiple

    if params[:group_ids]
      Group.destroy(params[:group_ids])
      message = {notice: 'Borrado con éxito.'}
    else
      message = {alert: 'Por favor selecciona al menos uno.'}
    end

    respond_to do |format|
      format.html { redirect_to groups_url }
      format.json { head :no_content }
    end
  end

  def destroy_all
    Group.all.each do  |group|
      group.destroy
    end

    redirect_to groups_path, notice: "Borrados Exitosamente"
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_group
      @group = Group.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def group_params
      params.require(:group).permit(:group_number, :course_id, :tutor_id, :supervisor_id)
    end
end
