package com.bigjava.action;

import com.bigjava.dao.UserDAO;
import com.opensymphony.xwork2.ActionSupport;

public class LoginAction extends ActionSupport {

	/**
	 * 
	 */
	private static final long serialVersionUID = 6451841111123512885L;

	private UserDAO userDAO;

	private String password;

	private String username;

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public void setUserDAO(UserDAO userDAO) {
		this.userDAO = userDAO;
	}

	public UserDAO getUserDAO() {
		return userDAO;
	}

	public String login() {
		System.out.println("execute-login>>>>");
		System.out.println("password>>>" + password + " username>>>" + username);
		userDAO.login(username, password);
		return SUCCESS;
	}

}
