package com.bigjava.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;

import com.bigjava.dao.UserDAO;
import com.opensymphony.xwork2.ActionContext;
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
		System.out.println("username>>>" + username + " password>>>" + password);
		if (userDAO.login(username, password)) {

			HttpSession session = getRequest().getSession();
			session.setAttribute("user", username);

			return SUCCESS;
		}
		return ERROR;
	}

	public void end() {
		System.out.println("注销>>>");
		HttpSession session = getRequest().getSession();
		session.removeAttribute("user");
	}

	/**
	 * 获取request方法
	 * 
	 * @return HttpServletRequest
	 */
	public HttpServletRequest getRequest() {
		ActionContext ac = ActionContext.getContext();
		HttpServletRequest request = (HttpServletRequest) ac.get(ServletActionContext.HTTP_REQUEST);
		return request;
	}

}
