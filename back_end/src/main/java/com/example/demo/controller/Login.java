package com.example.demo.controller;

public class Login {
	private String status;
	private String message;
	private String token;

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public Login(String status, String message, String token) {
		this.status = status;
		this.message = message;
		this.token = token;
	}
}
