package com.managementpark.controller;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.managementpark.vehicle.Vehicle;

@Controller
public class MainController {

	@RequestMapping("/")
	public ModelAndView HelloWorld()
	{
		ModelAndView modelandview=new ModelAndView("Main");
		SessionFactory sessionFactory = new Configuration().configure().buildSessionFactory();  
		  Session session = sessionFactory .openSession();
		  session.beginTransaction();
		  List<Vehicle> Vehicles  = (List<Vehicle>) session.createQuery("from Vehicle").list();
		  session.getTransaction().commit();
		  session.close();	
		  sessionFactory.close();
		
		  modelandview.addObject("Vehicles", Vehicles);
		
		
		return modelandview;
		
	}
}
