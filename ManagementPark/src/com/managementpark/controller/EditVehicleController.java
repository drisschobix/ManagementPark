package com.managementpark.controller;

import java.util.List;

import javax.validation.Valid;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.managementpark.vehicle.Vehicle;

@Controller
public class EditVehicleController {
	@RequestMapping("/EditVehicle/{id}")
	public ModelAndView EditVehicle(@PathVariable("id") int id)
	{
		ModelAndView modelandview=new ModelAndView("EditVehicle");
		
		System.out.println("id first is :"+id);
		SessionFactory sessionFactory = new Configuration().configure().buildSessionFactory();  
		Session session = sessionFactory .openSession();
		session.beginTransaction();
		
		Vehicle vehicle =  (Vehicle) session.get(Vehicle.class, id);
		modelandview.addObject("Vehicle", vehicle);
		session.getTransaction().commit();
		session.close();	
		sessionFactory.close();
		
		
		return modelandview;
		
	}
	

	@RequestMapping("/EditVehicleSubmition/{id}")
	public ModelAndView EditVehicleSubmition(@Valid @ModelAttribute("vehicle") Vehicle vehicle,BindingResult result,@PathVariable("id") int id)
	{
		
		if(result.hasErrors())
		{
			
			ModelAndView Modle1 =new ModelAndView("EditVehicle");	
			Modle1.addObject("id",id);
			
			Modle1.addObject("Vehicle", vehicle);
			
			return Modle1;
		}
		
		SessionFactory sessionFactory = new Configuration().configure().buildSessionFactory();  
		  Session session = sessionFactory .openSession();
		  
		  session.beginTransaction();
		  session.update(vehicle);
		  List<Vehicle> Vehicles  = (List<Vehicle>) session.createQuery("from Vehicle").list();
		  
		  session.getTransaction().commit();
		  session.close();	
		  sessionFactory.close();
		
		  
		
		ModelAndView modelandview=new ModelAndView("Main");
		
		modelandview.addObject("Vehicles", Vehicles);
		return modelandview;
		
	}
	
	
}
