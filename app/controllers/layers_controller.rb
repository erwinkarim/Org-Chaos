class LayersController < ApplicationController
  #  GET  /layer/new(.:format)
  def new
    @handle = SecureRandom.hex[0..5]
    respond_to do |format|
      format.template
    end
  end
end
