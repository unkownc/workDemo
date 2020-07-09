package com.bigjava.dao.impl;

import java.util.List;

import org.springframework.orm.hibernate4.support.HibernateDaoSupport;
import com.bigjava.dao.UserDAO;
import com.bigjava.model.User;

public class UserDAOImpl extends HibernateDaoSupport implements UserDAO {

	@Override
	public boolean login(String username, String password) {
		String hql = "from User where name = ?";
		boolean flag = false;
		List<User> list = (List<User>) getHibernateTemplate().find(hql, username);

		if (list != null && list.size() > 0) {
			User user = list.get(0);
			flag = password.equals(user.getPassword());
		}

		return flag;
	}

}
