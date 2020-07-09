package com.bigjava.interceptor;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;
import org.apache.struts2.StrutsStatics;
import org.apache.struts2.interceptor.ServletRequestAware;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.interceptor.AbstractInterceptor;

public class UserSessionInterceptor extends AbstractInterceptor implements StrutsStatics {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Override
	public String intercept(ActionInvocation invocation) throws Exception {
		ActionContext context = invocation.getInvocationContext();
		HttpServletRequest request = (HttpServletRequest) context.get(HTTP_REQUEST);

		String user = (String) request.getSession().getAttribute("user");
		System.out.println("user>>>" + user);
		if (StringUtils.isEmpty(user)) {
			return ActionSupport.ERROR;
		}

		return invocation.invoke();
	}

}
