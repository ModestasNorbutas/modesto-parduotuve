package it.akademija.backend.dto;

public class UserResponse {

    private boolean success;
    private Object response;
    private String error;

    public UserResponse() {

    }

    public UserResponse(boolean success, Object response, String error) {
	super();
	this.success = success;
	this.response = response;
	this.error = error;
    }

    public boolean isSuccess() {
	return success;
    }

    public void setSuccess(boolean success) {
	this.success = success;
    }

    public Object getResponse() {
	return response;
    }

    public void setResponse(Object response) {
	this.response = response;
    }

    public String getError() {
	return error;
    }

    public void setError(String error) {
	this.error = error;
    }

}
