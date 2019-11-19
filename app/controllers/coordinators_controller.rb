class CoordinatorsController < ApplicationController
  before_action :set_coordinator, only: [:show, :edit, :update, :destroy]

  # GET /coordinators
  # GET /coordinators.json
  def index
    if params[:search]
      @coordinators = Coordinator.where('name ILIKE ?', "%#{params[:search]}%").order("name ASC")

    else
      @coordinators = Coordinator.order("name ASC")
    end

  end

  # GET /coordinators/1
  # GET /coordinators/1.json
  def show
  end

  # GET /coordinators/new
  def new
    @coordinator = Coordinator.new
  end

  # GET /coordinators/1/edit
  def edit
  end

  # POST /coordinators
  # POST /coordinators.json
  def create
    @coordinator = Coordinator.new(coordinator_params)

    respond_to do |format|
      if @coordinator.save
        format.html { redirect_to @coordinator, notice: 'Coordinator was successfully created.' }
        format.json { render :show, status: :created, location: @coordinator }
      else
        format.html { render :new }
        format.json { render json: @coordinator.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /coordinators/1
  # PATCH/PUT /coordinators/1.json
  def update
    respond_to do |format|
      if @coordinator.update(coordinator_params)
        format.html { redirect_to @coordinator, notice: 'Coordinator was successfully updated.' }
        format.json { render :show, status: :ok, location: @coordinator }
      else
        format.html { render :edit }
        format.json { render json: @coordinator.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /coordinators/1
  # DELETE /coordinators/1.json
  def destroy
    @coordinator.destroy
    respond_to do |format|
      format.html { redirect_to coordinators_url, notice: 'Coordinator was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def destroy_multiple

    if params[:coordinator_ids]
      Coordinator.destroy(params[:coordinator_ids])
      message = {notice: 'Borrado con éxito.'}
    else
      message = {alert: 'Por favor selecciona al menos uno.'}
    end

    respond_to do |format|
      format.html { redirect_to coordinators_url }
      format.json { head :no_content }
    end
  end

  def destroy_all
    Coordinator.all.each do  |coordinator|
      coordinator.destroy
    end

    redirect_to coordinators_path, notice: "Borrados Exitosamente"
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_coordinator
      @coordinator = Coordinator.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def coordinator_params
      params.require(:coordinator).permit(:username, :internal_password, :name, :first_last_name, :second_last_name, :email, :country, :state, :city, :partner, :organization_code, :gender, :dob, :phone_number, :language)
    end
end
