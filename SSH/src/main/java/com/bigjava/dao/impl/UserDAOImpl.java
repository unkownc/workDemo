package com.bigjava.dao.impl;

import java.util.List;

import org.springframework.orm.hibernate4.support.HibernateDaoSupport;
import com.bigjava.dao.UserDAO;
import com.bigjava.model.User;

public class UserDAOImpl extends HibernateDaoSupport implements UserDAO {

	@Override
	public boolean login(String username, String password) {
		System.out.println("login>>>");
		String hql = "from User where name = ?";

		List<User> list = (List<User>) getHibernateTemplate().find(hql, username);
		list.forEach(v -> {
			System.out.println(v);
		});

		return false;
	}

}
