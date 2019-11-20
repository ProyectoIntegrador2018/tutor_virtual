class SupervisorsController < ApplicationController
  before_action :set_supervisor, only: [:show, :edit, :update, :destroy]

  # GET /supervisors
  # GET /supervisors.json
  def index
    if params[:search]
      @supervisors = Supervisor.where('name ILIKE ?', "%#{params[:search]}%").order("username ASC")
    else
      @supervisors = Supervisor.order("username ASC")
    end
  end

  # GET /supervisors/1
  # GET /supervisors/1.json
  def show
  end

  # GET /supervisors/new
  def new
    @supervisor = Supervisor.new
  end

  # GET /supervisors/1/edit
  def edit
  end

  # POST /supervisors
  # POST /supervisors.json
  def create
    @supervisor = Supervisor.new(supervisor_params)

    respond_to do |format|
      if @supervisor.save
        format.html { redirect_to @supervisor, notice: 'Supervisor was successfully created.' }
        format.json { render :show, status: :created, location: @supervisor }
      else
        format.html { render :new }
        format.json { render json: @supervisor.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /supervisors/1
  # PATCH/PUT /supervisors/1.json
  def update
    respond_to do |format|
      if @supervisor.update(supervisor_params)
        format.html { redirect_to @supervisor, notice: 'Supervisor was successfully updated.' }
        format.json { render :show, status: :ok, location: @supervisor }
      else
        format.html { render :edit }
        format.json { render json: @supervisor.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /supervisors/1
  # DELETE /supervisors/1.json
  def destroy
    @supervisor.destroy
    respond_to do |format|
      format.html { redirect_to supervisors_url, notice: 'Supervisor was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def destroy_multiple

    if params[:supervisor_ids]
      Supervisor.destroy(params[:supervisor_ids])
      message = {notice: 'Borrado con éxito.'}
    else
      message = {alert: 'Por favor selecciona al menos uno.'}
    end

    respond_to do |format|
      format.html { redirect_to supervisors_url }
      format.json { head :no_content }
    end
  end

  def destroy_all
    Supervisor.all.each do  |supervisor|
      supervisor.destroy
    end

    redirect_to supervisors_path, notice: "Borrados Exitosamente"
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_supervisor
      @supervisor = Supervisor.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def supervisor_params
      params.require(:supervisor).permit(:username, :internal_password, :name, :first_last_name, :second_last_name, :email, :country, :state, :city, :partner, :organization_code, :gender, :dob, :phone_number, :language)
    end
end
