package com.managementpark.controller;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;


import com.managementpark.vehicle.Vehicle;

@Controller
public class DeleteVehicle {
	
	@RequestMapping("/DeleteVehicle/{id}")
	public void DeleteVehicles(@PathVariable("id") int id)
	{
		
		SessionFactory sessionFactory = new Configuration().configure().buildSessionFactory();  
		Session session = sessionFactory .openSession();
		session.beginTransaction();
		System.out.println(id);
		Vehicle vehicle =  (Vehicle) session.get(Vehicle.class, id);
		System.out.println(vehicle.getID_Vehicle());
		session.delete(vehicle);
		session.getTransaction().commit();
		session.close();	
		sessionFactory.close();
		
		
		
		
	}

}
