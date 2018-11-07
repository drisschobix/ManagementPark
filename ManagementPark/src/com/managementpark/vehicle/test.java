package com.managementpark.vehicle;




import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;



public class test {

	public static void main(String[] args) {
		
		
		SessionFactory sessionFactory = new Configuration().configure().buildSessionFactory();

		//
	    
	  Session session = sessionFactory .openSession();
	  session.beginTransaction();
	 
	 
	  
	  session.getTransaction().commit();
	  session.close();	
	 sessionFactory.close();
	}

}
